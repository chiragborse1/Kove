use std::env;
use std::fs;
use std::path::PathBuf;

#[cfg(unix)]
use std::os::unix::fs::PermissionsExt;

fn prune_dist_plugin_bin_symlinks(repo_root: &PathBuf) {
    let extensions_dir = repo_root.join("dist").join("extensions");
    let extension_entries = match fs::read_dir(&extensions_dir) {
        Ok(entries) => entries,
        Err(_) => return,
    };

    for extension_entry in extension_entries.flatten() {
        let bin_dir = extension_entry.path().join("node_modules").join(".bin");
        let bin_entries = match fs::read_dir(&bin_dir) {
            Ok(entries) => entries,
            Err(_) => continue,
        };

        for bin_entry in bin_entries.flatten() {
            let bin_path = bin_entry.path();
            let metadata = match fs::symlink_metadata(&bin_path) {
                Ok(metadata) => metadata,
                Err(_) => continue,
            };
            if metadata.file_type().is_symlink() {
                let _ = fs::remove_file(&bin_path);
            }
        }
    }
}

fn main() {
    let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR").expect("missing manifest dir"));
    let repo_root = manifest_dir
        .parent()
        .map(std::path::Path::to_path_buf)
        .expect("missing repo root");
    let target = env::var("TARGET").expect("missing cargo target triple");
    let platform_suffix = if target.contains("windows") {
        ".exe"
    } else {
        ""
    };
    let prebuilt_target = manifest_dir
        .join("binaries")
        .join(format!("kova-gateway-{target}{platform_suffix}"));

    prune_dist_plugin_bin_symlinks(&repo_root);

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
