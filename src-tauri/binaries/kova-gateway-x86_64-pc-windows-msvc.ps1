$ErrorActionPreference = "Stop"

$node = Get-Command node -ErrorAction SilentlyContinue
if (-not $node) {
  [Console]::Error.WriteLine("Kova requires Node.js 22.12+ on PATH to launch the gateway sidecar.")
  exit 1
}

$rootDir = if ($args.Count -gt 0 -and $args[0]) { $args[0] } else { $PSScriptRoot }
$env:KOVA_STATE_DIR = Join-Path $env:APPDATA "Kova"
if (-not $env:OPENCLAW_STATE_DIR) {
  $env:OPENCLAW_STATE_DIR = $env:KOVA_STATE_DIR
}
if (-not $env:OPENCLAW_CONFIG_PATH) {
  $env:OPENCLAW_CONFIG_PATH = Join-Path $env:OPENCLAW_STATE_DIR "openclaw.json"
}

New-Item -ItemType Directory -Force -Path $env:OPENCLAW_STATE_DIR | Out-Null
Set-Location $rootDir
& $node.Source "openclaw.mjs" "gateway" "run" "--bind" "loopback" "--port" "18789" "--force"
