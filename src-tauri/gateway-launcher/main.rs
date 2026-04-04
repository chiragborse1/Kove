use std::env;
use std::path::{Path, PathBuf};
use std::process::{Command, ExitCode};

fn find_on_path(binary_name: &str) -> Option<PathBuf> {
    let path_var = env::var_os("PATH")?;
    for dir in env::split_paths(&path_var) {
        let candidate = dir.join(binary_name);
        if candidate.is_file() {
            return Some(candidate);
        }
    }
    None
}

fn find_node() -> Option<PathBuf> {
    if let Some(path) = find_on_path("node.exe").or_else(|| find_on_path("node")) {
        return Some(path);
    }

    for candidate in [
        r"C:\Program Files\nodejs\node.exe",
        r"C:\Program Files (x86)\nodejs\node.exe",
    ] {
        let candidate_path = PathBuf::from(candidate);
        if candidate_path.is_file() {
            return Some(candidate_path);
        }
    }
    None
}

fn resolve_runtime_dir() -> PathBuf {
    if let Some(arg) = env::args_os().nth(1) {
        let path = PathBuf::from(arg);
        if !path.as_os_str().is_empty() {
            return path;
        }
    }

    env::current_exe()
        .ok()
        .and_then(|path| path.parent().map(Path::to_path_buf))
        .unwrap_or_else(|| PathBuf::from("."))
}

fn resolve_state_dir() -> Option<PathBuf> {
    env::var_os("APPDATA").map(|app_data| PathBuf::from(app_data).join("Kova"))
}

fn main() -> ExitCode {
    let Some(node_path) = find_node() else {
        eprintln!("Node.js not found. Please install Node.js from nodejs.org");
        return ExitCode::from(1);
    };

    let runtime_dir = resolve_runtime_dir();
    let runtime_entry = runtime_dir.join("openclaw.mjs");
    if !runtime_entry.is_file() {
        eprintln!("OpenClaw runtime not found at {}", runtime_entry.display());
        return ExitCode::from(1);
    }

    let Some(state_dir) = resolve_state_dir() else {
        eprintln!("APPDATA is not set.");
        return ExitCode::from(1);
    };
    if let Err(err) = std::fs::create_dir_all(&state_dir) {
        eprintln!(
            "Failed to create state directory {}: {err}",
            state_dir.display()
        );
        return ExitCode::from(1);
    }

    let mut child = match Command::new(node_path)
        .arg(&runtime_entry)
        .args([
            "gateway", "run", "--bind", "loopback", "--port", "18789", "--force",
        ])
        .env("OPENCLAW_STATE_DIR", &state_dir)
        .env("KOVA_STATE_DIR", &state_dir)
        .current_dir(&runtime_dir)
        .spawn()
    {
        Ok(child) => child,
        Err(err) => {
            eprintln!("Failed to launch gateway: {err}");
            return ExitCode::from(1);
        }
    };

    match child.wait() {
        Ok(status) => ExitCode::from(status.code().unwrap_or(1) as u8),
        Err(err) => {
            eprintln!("Failed while waiting for gateway process: {err}");
            ExitCode::from(1)
        }
    }
}
