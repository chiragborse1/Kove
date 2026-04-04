@echo off
setlocal

where node >nul 2>&1
if errorlevel 1 (
  >&2 echo Kova requires Node.js 22.12+ on PATH to launch the gateway sidecar.
  exit /b 1
)

set "ROOT_DIR=%~1"
if "%ROOT_DIR%"=="" (
  set "ROOT_DIR=%~dp0"
)

set "KOVA_STATE_DIR=%APPDATA%\Kova"
if not defined OPENCLAW_STATE_DIR set "OPENCLAW_STATE_DIR=%KOVA_STATE_DIR%"
if not defined OPENCLAW_CONFIG_PATH set "OPENCLAW_CONFIG_PATH=%OPENCLAW_STATE_DIR%\openclaw.json"

if not exist "%OPENCLAW_STATE_DIR%" mkdir "%OPENCLAW_STATE_DIR%"

cd /d "%ROOT_DIR%"
node openclaw.mjs gateway run --bind loopback --port 18789 --force
