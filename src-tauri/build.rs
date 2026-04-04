use std::env;
use std::fs;
use std::path::PathBuf;

#[cfg(unix)]
use std::os::unix::fs::PermissionsExt;

fn main() {
  let manifest_dir = PathBuf::from(env::var("CARGO_MANIFEST_DIR").expect("missing manifest dir"));
  let target = env::var("TARGET").expect("missing cargo target triple");
  let default_source = manifest_dir.join("binaries").join("kova-gateway");
  let windows_source = manifest_dir
    .join("binaries")
    .join(format!("kova-gateway-{target}.bat"));
  let source = if target.contains("windows") && windows_source.exists() {
    windows_source
  } else {
    default_source
  };
  let destination = manifest_dir
    .join("binaries")
    .join(format!("kova-gateway-{target}"));

  println!(
    "cargo:rerun-if-changed={}",
    manifest_dir.join("binaries").join("kova-gateway").display()
  );
  println!(
    "cargo:rerun-if-changed={}",
    manifest_dir
      .join("binaries")
      .join(format!("kova-gateway-{target}.bat"))
      .display()
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
