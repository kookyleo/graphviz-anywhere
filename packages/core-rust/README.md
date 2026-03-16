# graphviz-anywhere

Core Rust FFI bindings for the graphviz-anywhere C library with prebuilt binaries.

## Overview

This crate provides low-level, unsafe bindings to the `libgraphviz_api` C library. It includes prebuilt static libraries for multiple platforms:

- macOS (universal binary: x86_64 + arm64)
- Linux (x86_64)
- Windows (x86_64)

## Building

The crate automatically links against prebuilt libraries located in the `prebuilt/` directory:

- `prebuilt/macos/` - macOS static libraries
- `prebuilt/linux/` - Linux static libraries
- `prebuilt/windows/` - Windows static libraries

During `cargo build`, the `build.rs` script will:

1. Detect the target platform
2. Link against the appropriate prebuilt library in `prebuilt/{platform}/libgraphviz_api.a`
3. Provide the FFI bindings through `lib.rs`

## Usage

Add to your `Cargo.toml`:

```toml
[dependencies]
graphviz-anywhere = "0.1"
```

Then use the low-level FFI bindings:

```rust
use graphviz_anywhere::{gv_context_new, gv_context_free, gv_render};

unsafe {
    let ctx = gv_context_new();
    // ... use the context
    gv_context_free(ctx);
}
```

## Prebuilt Library Updates

The prebuilt libraries are built and packaged during CI/CD:

1. Native builds for each platform produce `libgraphviz_api.a`
2. Libraries are copied to `packages/core-rust/prebuilt/{platform}/`
3. The entire crate (including prebuilt/) is published to crates.io

When you `cargo build`, Cargo will automatically use the prebuilt libraries included in the published crate.

## License

Apache-2.0
