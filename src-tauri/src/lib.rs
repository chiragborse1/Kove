use serde::{Deserialize, Serialize};
use tauri::Emitter;

#[cfg(desktop)]
use std::env;
#[cfg(desktop)]
use std::fs;
#[cfg(desktop)]
use std::path::PathBuf;
#[cfg(desktop)]
use std::process::{Child, Command, Stdio};
#[cfg(desktop)]
use std::sync::Mutex;
#[cfg(desktop)]
use tauri::menu::{Menu, MenuItem, PredefinedMenuItem};
#[cfg(desktop)]
use tauri::path::BaseDirectory;
#[cfg(desktop)]
use tauri::tray::{MouseButton, MouseButtonState, TrayIconBuilder, TrayIconEvent};
#[cfg(desktop)]
use tauri::{AppHandle, Manager, WindowEvent};
#[cfg(desktop)]
use tauri_plugin_global_shortcut::{Code, GlobalShortcutExt, Modifiers, Shortcut, ShortcutState};
use tauri_plugin_store::StoreExt;

const SETUP_STORE_PATH: &str = "kova-store.json";
const SETUP_STORE_KEY: &str = "setup";
const TRAY_EVENT_NAME: &str = "kova:navigate";

#[cfg(desktop)]
struct KovaRuntimeState {
    gateway_child: Mutex<Option<Child>>,
    gateway_launch_error: Mutex<Option<String>>,
}

#[cfg(desktop)]
impl Default for KovaRuntimeState {
    fn default() -> Self {
        Self {
            gateway_child: Mutex::new(None),
            gateway_launch_error: Mutex::new(None),
        }
    }
}

#[derive(Debug, Clone, Default, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
struct DesktopSetupState {
    complete: bool,
    user_name: Option<String>,
    provider: Option<String>,
    channel: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
#[serde(rename_all = "camelCase")]
struct DesktopNavigatePayload {
    tab: String,
    agent_id: Option<String>,
}

#[tauri::command]
fn get_setup_state(app: tauri::AppHandle) -> Result<DesktopSetupState, String> {
    read_setup_state(&app)
}

#[tauri::command]
fn set_setup_state(app: tauri::AppHandle, state: DesktopSetupState) -> Result<(), String> {
    write_setup_state(&app, state)
}

#[tauri::command]
fn read_gateway_token(app: tauri::AppHandle) -> Result<String, String> {
    #[cfg(desktop)]
    {
        return read_gateway_token_from_disk(&app);
    }

    #[cfg(not(desktop))]
    {
        let _ = app;
        Ok(String::new())
    }
}

#[tauri::command]
fn read_gateway_launch_error(app: tauri::AppHandle) -> Result<String, String> {
    #[cfg(desktop)]
    {
        return Ok(read_gateway_launch_error_from_state(&app));
    }

    #[cfg(not(desktop))]
    {
        let _ = app;
        Ok(String::new())
    }
}

fn read_setup_state(app: &tauri::AppHandle) -> Result<DesktopSetupState, String> {
    let store = app.store(SETUP_STORE_PATH).map_err(|err| err.to_string())?;
    let value = store.get(SETUP_STORE_KEY);
    store.close_resource();
    match value {
        Some(raw) => serde_json::from_value(raw).map_err(|err| err.to_string()),
        None => Ok(DesktopSetupState::default()),
    }
}

fn write_setup_state(app: &tauri::AppHandle, state: DesktopSetupState) -> Result<(), String> {
    let store = app.store(SETUP_STORE_PATH).map_err(|err| err.to_string())?;
    store.set(
        SETUP_STORE_KEY,
        serde_json::to_value(state).map_err(|err| err.to_string())?,
    );
    store.save().map_err(|err| err.to_string())?;
    store.close_resource();
    Ok(())
}

#[cfg(desktop)]
fn focus_main_window(app: &AppHandle) {
    if let Some(window) = app.get_webview_window("main") {
        let _ = window.unminimize();
        let _ = window.show();
        let _ = window.set_focus();
    }
}

#[cfg(desktop)]
fn emit_desktop_navigation(
    app: &AppHandle,
    tab: &str,
    agent_id: Option<&str>,
) -> Result<(), tauri::Error> {
    app.emit(
        TRAY_EVENT_NAME,
        DesktopNavigatePayload {
            tab: tab.to_string(),
            agent_id: agent_id.map(std::string::ToString::to_string),
        },
    )
}

#[cfg(desktop)]
fn kill_gateway_child(app: &AppHandle) {
    let child = {
        let state = app.state::<KovaRuntimeState>();
        let lock = state.gateway_child.lock();
        match lock {
            Ok(mut guard) => guard.take(),
            Err(_) => None,
        }
    };
    if let Some(child) = child {
        let mut child = child;
        let _ = child.kill();
    }
}

#[cfg(desktop)]
fn setup_tray(app: &AppHandle) -> Result<(), tauri::Error> {
    let open_item = MenuItem::with_id(app, "open", "Open Kova", true, None::<&str>)?;
    let alex_item = MenuItem::with_id(app, "chat-alex", "Chat with Alex", true, None::<&str>)?;
    let casey_item = MenuItem::with_id(app, "chat-casey", "Chat with Casey", true, None::<&str>)?;
    let quit_item = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
    let separator_a = PredefinedMenuItem::separator(app)?;
    let separator_b = PredefinedMenuItem::separator(app)?;
    let menu = Menu::with_items(
        app,
        &[
            &open_item,
            &separator_a,
            &alex_item,
            &casey_item,
            &separator_b,
            &quit_item,
        ],
    )?;

    let mut tray = TrayIconBuilder::new()
        .menu(&menu)
        .show_menu_on_left_click(false)
        .on_menu_event(|app, event| match event.id.as_ref() {
            "open" => focus_main_window(app),
            "chat-alex" => {
                focus_main_window(app);
                let _ = emit_desktop_navigation(app, "chat", Some("kova-alex"));
            }
            "chat-casey" => {
                focus_main_window(app);
                let _ = emit_desktop_navigation(app, "chat", Some("kova-casey"));
            }
            "quit" => {
                kill_gateway_child(app);
                app.exit(0);
            }
            _ => {}
        })
        .on_tray_icon_event(|tray, event| {
            if let TrayIconEvent::Click {
                button: MouseButton::Left,
                button_state: MouseButtonState::Up,
                ..
            } = event
            {
                focus_main_window(&tray.app_handle());
            }
        });

    if let Some(icon) = app.default_window_icon() {
        tray = tray.icon(icon.clone());
    }

    tray.build(app)?;
    Ok(())
}

#[cfg(desktop)]
fn setup_shortcut(app: &AppHandle) -> Result<(), tauri::Error> {
    let shortcut = Shortcut::new(Some(Modifiers::CONTROL | Modifiers::SHIFT), Code::KeyK);
    let shortcut_for_handler = shortcut.clone();

    app.plugin(
        tauri_plugin_global_shortcut::Builder::new()
            .with_handler(move |app, current_shortcut, event| {
                if current_shortcut == &shortcut_for_handler
                    && matches!(event.state(), ShortcutState::Pressed)
                {
                    focus_main_window(app);
                }
            })
            .build(),
    )?;

    app.global_shortcut()
        .register(shortcut)
        .map_err(|err| tauri::Error::from(std::io::Error::other(err.to_string())))?;
    Ok(())
}

#[cfg(desktop)]
fn runtime_root_for_gateway(app: &AppHandle) -> Result<PathBuf, String> {
    let bundled = app
        .path()
        .resolve("runtime", BaseDirectory::Resource)
        .map_err(|err| err.to_string())?;
    if bundled.join("openclaw.mjs").exists() {
        return Ok(bundled);
    }

    PathBuf::from(env!("CARGO_MANIFEST_DIR"))
        .parent()
        .map(std::path::Path::to_path_buf)
        .ok_or_else(|| "could not resolve source runtime root".to_string())
}

#[cfg(desktop)]
fn store_gateway_child(app: &AppHandle, child: Child) {
    let state = app.state::<KovaRuntimeState>();
    let lock = state.gateway_child.lock();
    if let Ok(mut guard) = lock {
        *guard = Some(child);
    }
}

#[cfg(desktop)]
fn set_gateway_launch_error(app: &AppHandle, error: Option<String>) {
    let state = app.state::<KovaRuntimeState>();
    let lock = state.gateway_launch_error.lock();
    if let Ok(mut guard) = lock {
        *guard = error;
    }
}

#[cfg(desktop)]
fn read_gateway_launch_error_from_state(app: &AppHandle) -> String {
    let state = app.state::<KovaRuntimeState>();
    let lock = state.gateway_launch_error.lock();
    match lock {
        Ok(guard) => guard.clone().unwrap_or_default(),
        Err(_) => String::new(),
    }
}

#[cfg(desktop)]
fn default_gateway_state_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let state_dir = app.path().app_data_dir().map_err(|err| err.to_string())?;
    std::fs::create_dir_all(&state_dir).map_err(|err| err.to_string())?;
    Ok(state_dir)
}

#[cfg(all(desktop, target_os = "windows"))]
fn gateway_state_dir(app: &AppHandle) -> Result<PathBuf, String> {
    let state_dir = if let Some(path) = env::var_os("KOVA_STATE_DIR")
        .map(PathBuf::from)
        .filter(|path| !path.as_os_str().is_empty())
    {
        path
    } else if let Some(path) = env::var_os("APPDATA")
        .map(PathBuf::from)
        .map(|path| path.join("Kova"))
    {
        path
    } else {
        default_gateway_state_dir(app)?
    };
    fs::create_dir_all(&state_dir).map_err(|err| err.to_string())?;
    Ok(state_dir)
}

#[cfg(all(desktop, not(target_os = "windows")))]
fn gateway_state_dir(app: &AppHandle) -> Result<PathBuf, String> {
    default_gateway_state_dir(app)
}

#[cfg(desktop)]
fn configure_gateway_command(command: &mut Command, app: &AppHandle) -> Result<(), String> {
    let state_dir = gateway_state_dir(app)?;
    command.env("KOVA_STATE_DIR", &state_dir);

    let has_openclaw_state_dir = env::var_os("OPENCLAW_STATE_DIR")
        .map(|value| !value.is_empty())
        .unwrap_or(false);
    if !has_openclaw_state_dir {
        command.env("OPENCLAW_STATE_DIR", &state_dir);
    }

    let has_openclaw_config_path = env::var_os("OPENCLAW_CONFIG_PATH")
        .map(|value| !value.is_empty())
        .unwrap_or(false);
    if !has_openclaw_config_path {
        command.env("OPENCLAW_CONFIG_PATH", state_dir.join("openclaw.json"));
    }

    Ok(())
}

#[cfg(desktop)]
fn resolve_available_command<'a>(candidates: &'a [&'a str]) -> Option<&'a str> {
    for candidate in candidates {
        let status = Command::new(candidate)
            .arg("--version")
            .stdin(Stdio::null())
            .stdout(Stdio::null())
            .stderr(Stdio::null())
            .status();
        if matches!(status, Ok(status) if status.success()) {
            return Some(candidate);
        }
    }
    None
}

#[cfg(all(desktop, target_os = "windows"))]
fn verify_openclaw_cli_available() -> Result<(), String> {
    let status = Command::new("npx")
        .args(["--no-install", "openclaw", "--version"])
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null())
        .status();

    match status {
        Ok(status) if status.success() => Ok(()),
        Ok(_) => Err(
            "Kova could not find the global `openclaw` CLI. Install Node.js 22.12+ and run `npm install -g openclaw`, then reopen Kova.".to_string(),
        ),
        Err(err) if err.kind() == std::io::ErrorKind::NotFound => Err(
            "Kova could not find `npx` on PATH. Install Node.js 22.12+ and run `npm install -g openclaw`, then reopen Kova.".to_string(),
        ),
        Err(err) => Err(format!("Kova could not start `npx`: {err}")),
    }
}

#[cfg(all(desktop, target_os = "windows"))]
fn spawn_gateway_process(app: &AppHandle) -> Result<Child, String> {
    verify_openclaw_cli_available()?;

    let mut command = Command::new("npx");
    command
        .args([
            "--no-install",
            "openclaw",
            "gateway",
            "--bind",
            "loopback",
            "--port",
            "18789",
            "--force",
        ])
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null());
    configure_gateway_command(&mut command, app)?;
    command.spawn().map_err(|err| {
        format!("Kova could not launch the local gateway with `npx openclaw gateway`: {err}")
    })
}

#[cfg(all(desktop, not(target_os = "windows")))]
fn spawn_gateway_process(app: &AppHandle) -> Result<Child, String> {
    let runtime_root = runtime_root_for_gateway(app)?;
    let gateway_entry = runtime_root.join("openclaw.mjs");
    if !gateway_entry.exists() {
        return Err("could not locate bundled OpenClaw runtime".to_string());
    }

    let node_bin = resolve_available_command(&["node", "nodejs"]).ok_or_else(|| {
        "Kova requires Node.js 22.12+ on PATH to launch the local gateway.".to_string()
    })?;

    let mut command = Command::new(node_bin);
    command
        .arg(&gateway_entry)
        .args([
            "gateway", "run", "--bind", "loopback", "--port", "18789", "--force",
        ])
        .current_dir(&runtime_root)
        .stdin(Stdio::null())
        .stdout(Stdio::null())
        .stderr(Stdio::null());
    configure_gateway_command(&mut command, app)?;
    command.spawn().map_err(|err| {
        format!("Kova could not launch the bundled gateway runtime with `{node_bin}`: {err}")
    })
}

#[cfg(desktop)]
fn launch_gateway_sidecar(app: &AppHandle) -> Result<(), String> {
    let child = spawn_gateway_process(app)?;
    store_gateway_child(app, child);
    set_gateway_launch_error(app, None);
    Ok(())
}

#[cfg(desktop)]
fn push_config_path(paths: &mut Vec<PathBuf>, next: PathBuf) {
    if !paths.iter().any(|existing| existing == &next) {
        paths.push(next);
    }
}

#[cfg(desktop)]
fn gateway_config_candidates(app: &AppHandle) -> Result<Vec<PathBuf>, String> {
    let mut paths = Vec::new();

    if let Some(config_path) = env::var_os("OPENCLAW_CONFIG_PATH")
        .map(PathBuf::from)
        .filter(|path| !path.as_os_str().is_empty())
    {
        push_config_path(&mut paths, config_path);
    }

    let state_dir = gateway_state_dir(app)?;
    push_config_path(&mut paths, state_dir.join("openclaw.json"));
    push_config_path(&mut paths, state_dir.join("config.json"));

    if let Some(home) = app.path().home_dir().ok().or_else(|| {
        env::var_os("HOME")
            .map(PathBuf::from)
            .filter(|path| !path.as_os_str().is_empty())
    }) {
        let openclaw_home = home.join(".openclaw");
        push_config_path(&mut paths, openclaw_home.join("openclaw.json"));
        push_config_path(&mut paths, openclaw_home.join("config.json"));
    }

    Ok(paths)
}

#[cfg(desktop)]
fn extract_gateway_token(config: &serde_json::Value) -> Option<String> {
    config
        .get("gateway")
        .and_then(|gateway| gateway.get("auth"))
        .and_then(|auth| auth.get("token"))
        .and_then(serde_json::Value::as_str)
        .map(str::trim)
        .filter(|value| !value.is_empty())
        .map(ToOwned::to_owned)
        .or_else(|| {
            config
                .get("gatewayToken")
                .and_then(serde_json::Value::as_str)
                .map(str::trim)
                .filter(|value| !value.is_empty())
                .map(ToOwned::to_owned)
        })
}

#[cfg(desktop)]
fn read_gateway_token_from_disk(app: &AppHandle) -> Result<String, String> {
    for config_path in gateway_config_candidates(app)? {
        let contents = match fs::read_to_string(&config_path) {
            Ok(contents) => contents,
            Err(err) if err.kind() == std::io::ErrorKind::NotFound => continue,
            Err(err) => return Err(format!("failed to read {}: {err}", config_path.display())),
        };
        let parsed: serde_json::Value = serde_json::from_str(&contents)
            .map_err(|err| format!("failed to parse {}: {err}", config_path.display()))?;
        if let Some(token) = extract_gateway_token(&parsed) {
            return Ok(token);
        }
    }

    Ok(String::new())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let mut builder = tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::default().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            get_setup_state,
            set_setup_state,
            read_gateway_token,
            read_gateway_launch_error
        ]);

    #[cfg(desktop)]
    {
        builder = builder.manage(KovaRuntimeState::default());
    }

    builder
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }

            #[cfg(desktop)]
            {
                setup_shortcut(&app.handle())?;
                setup_tray(&app.handle())?;
                if let Err(err) = launch_gateway_sidecar(&app.handle()) {
                    log::error!("failed to launch local gateway: {err}");
                    set_gateway_launch_error(&app.handle(), Some(err));
                }
            }

            Ok(())
        })
        .on_window_event(|window, event| {
            #[cfg(desktop)]
            if let WindowEvent::CloseRequested { api, .. } = event {
                api.prevent_close();
                let _ = window.hide();
            }
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
