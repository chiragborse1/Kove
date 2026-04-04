//go:build windows
// +build windows

package main

import (
	"os"
	"os/exec"
	"path/filepath"
	"syscall"
)

func findNode() string {
	nodePaths := []string{
		`C:\Program Files\nodejs\node.exe`,
		`C:\Program Files (x86)\nodejs\node.exe`,
		"node.exe",
		"node",
	}

	for _, candidate := range nodePaths {
		if path, err := exec.LookPath(candidate); err == nil {
			return path
		}
		if _, err := os.Stat(candidate); err == nil {
			return candidate
		}
	}

	return ""
}

func resolveRuntimeDir() string {
	if len(os.Args) > 1 && os.Args[1] != "" {
		return os.Args[1]
	}

	exePath, err := os.Executable()
	if err != nil {
		return "."
	}
	return filepath.Dir(exePath)
}

func main() {
	nodePath := findNode()
	if nodePath == "" {
		os.Stderr.WriteString("Node.js not found. Please install Node.js from nodejs.org\n")
		os.Exit(1)
	}

	runtimeDir := resolveRuntimeDir()
	runtimeEntry := filepath.Join(runtimeDir, "openclaw.mjs")
	if _, err := os.Stat(runtimeEntry); err != nil {
		os.Stderr.WriteString("OpenClaw runtime not found: " + runtimeEntry + "\n")
		os.Exit(1)
	}

	appData := os.Getenv("APPDATA")
	if appData == "" {
		os.Stderr.WriteString("APPDATA is not set.\n")
		os.Exit(1)
	}

	stateDir := filepath.Join(appData, "Kova")
	if err := os.MkdirAll(stateDir, 0o755); err != nil {
		os.Stderr.WriteString("Failed to create state directory: " + err.Error() + "\n")
		os.Exit(1)
	}
	configPath := filepath.Join(stateDir, "openclaw.json")

	cmd := exec.Command(
		nodePath,
		runtimeEntry,
		"gateway",
		"run",
		"--bind",
		"loopback",
		"--port",
		"18789",
		"--force",
	)
	cmd.Dir = runtimeDir
	cmd.Env = append(os.Environ(),
		"OPENCLAW_STATE_DIR="+stateDir,
		"KOVA_STATE_DIR="+stateDir,
		"OPENCLAW_CONFIG_PATH="+configPath,
	)
	cmd.SysProcAttr = &syscall.SysProcAttr{
		HideWindow:    true,
		CreationFlags: 0x08000000, // CREATE_NO_WINDOW
	}
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	if err := cmd.Run(); err != nil {
		if exitError, ok := err.(*exec.ExitError); ok {
			os.Exit(exitError.ExitCode())
		}
		os.Stderr.WriteString("Failed to launch gateway: " + err.Error() + "\n")
		os.Exit(1)
	}
}
