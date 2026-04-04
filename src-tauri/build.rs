use std::env;
use std::fs;
use std::path::PathBuf;

#[cfg(unix)]
use std::os::unix::fs::PermissionsExt;

fn main() {
    let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR").expect("missing manifest dir"));
    let target = env::var("TARGET").expect("missing cargo target triple");
    let platform_suffix = if target.contains("windows") {
        ".exe"
    } else {
        ""
    };
    let prebuilt_target = manifest_dir
        .join("binaries")
        .join(format!("kova-gateway-{target}{platform_suffix}"));

    println!("cargo:rerun-if-changed={}", prebuilt_target.display());

    if prebuilt_target.exists() {
        tauri_build::build();
        return;
    }

    let source = manifest_dir.join("binaries").join("kova-gateway");
    let destination = manifest_dir
        .join("binaries")
        .join(format!("kova-gateway-{target}"));

    println!(
        "cargo:rerun-if-changed={}",
        manifest_dir.join("binaries").join("kova-gateway").display()
    );

    if !source.exists() {
        panic!("missing sidecar wrapper at {}", source.display());
    }

    fs::copy(&source, &destination).expect("failed to copy sidecar wrapper for target triple");

    #[cfg(unix)]
    {
        let mut permissions = fs::metadata(&destination)
            .expect("failed to stat generated sidecar")
            .permissions();
        permissions.set_mode(0o755);
        fs::set_permissions(&destination, permissions)
            .expect("failed to mark generated sidecar as executable");
    }

    tauri_build::build()
}
