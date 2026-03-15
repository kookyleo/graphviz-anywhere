use std::path::PathBuf;

fn main() {
    // Link against prebuilt graphviz_api library
    let prebuilt = PathBuf::from(env!("CARGO_MANIFEST_DIR")).join("prebuilt");

    #[cfg(target_os = "macos")]
    {
        println!("cargo:rustc-link-search=native={}/macos", prebuilt.display());
        println!("cargo:rustc-link-lib=static=graphviz_api");
    }

    #[cfg(target_os = "linux")]
    {
        println!("cargo:rustc-link-search=native={}/linux", prebuilt.display());
        println!("cargo:rustc-link-lib=static=graphviz_api");
    }

    #[cfg(target_os = "windows")]
    {
        println!("cargo:rustc-link-search=native={}/windows", prebuilt.display());
        println!("cargo:rustc-link-lib=static=graphviz_api");
    }

    // Tell cargo to invalidate the built crate if any prebuilt lib changes
    println!("cargo:rerun-if-changed=prebuilt/");
}
