# OS-agnostic build instructions for SqDRIFT

This guide provides instructions for building SqDRIFT on different operating systems using **CMake only**, with no bash scripts required.

## Prerequisites

### All platforms

1. **CMake** (version 3.15 or later)
   - Download from: https://cmake.org/download/
2. **C++ Compiler** with C++17 support:
   - Linux: GCC 7+ or Clang 5+
   - macOS: Clang (Xcode Command Line Tools)
   - Windows: MSVC 2017+ or MinGW-w64
3. **Git** (for CMake to clone dependencies automatically)
   - Download from: https://git-scm.com/downloads
4. **Rust toolchain** (`rustc ≥ 1.95` required by `qiskit-fermions`)
   - Install from: https://rustup.rs/
   - If already installed: run `rustup update` to upgrade
5. **Make** (for building Qiskit C APIs)
   - Linux/macOS: Usually pre-installed
   - Windows: Install via MSYS2 or use nmake with Visual Studio

### The SBD diagonalization step

The main CMake build fetches SBD as **source only** and does not compile it, so nothing in this section is needed to build or run `./SqDRIFT` itself. It is required only for the final diagonalization step that turns the sampled CI strings into a ground-state energy.

SBD needs **MPI, OpenMP, and BLAS/LAPACK**, and it builds through its own hand-edited `Configuration` file rather than through this project's CMake — plain `make` will not work until that file matches your toolchain. On macOS the extra wrinkle is that Apple's `clang++` rejects `-fopenmp` outright, so an OpenMP-capable compiler must be supplied.

```bash
# macOS (tested)
brew install open-mpi llvm     # BLAS/LAPACK come from Apple's Accelerate framework

# Linux (untested)
sudo apt install -y libopenmpi-dev libomp-dev libblas-dev liblapack-dev
```

See [README.md § 10](https://github.com/Qiskit/documentation/blob/main/docs/tutorials/assets/sqdrift/cpp/README.md#10-run-the-diagonalization-scheme) for the verified `Configuration` file and the exact build and run commands.

### Platform-specific dependencies

#### macOS

```bash
# Install Xcode Command Line Tools (includes clang, make, git)
xcode-select --install

# Install Homebrew if not already installed
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install dependencies
brew install cmake boost

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Linux (Ubuntu/Debian)

```bash
# Update package list
sudo apt update

# Install dependencies
sudo apt install -y cmake g++ make libboost-all-dev git curl

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Linux (Fedora/RHEL/CentOS)

```bash
# Install dependencies
sudo dnf install -y cmake gcc-c++ make boost-devel git curl

# Install Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

#### Windows

**Untested.** The code uses `unistd.h/sleep()` (no MSVC equivalent) and CMake links Qiskit DLLs directly (MSVC needs import .lib files). Windows builds are not currently supported. If you wish to port this to Windows, you'll need to:
- Replace `unistd.h/sleep()` with `std::this_thread::sleep_for()`
- Fix CMake to generate proper import libraries for MSVC
- Test against Visual Studio 2019+ or MinGW-w64

## Build steps (all platforms)

### Step 1: Configure the build

CMake will automatically:
- Clone all Qiskit dependencies from GitHub
- Build them in the correct order
- Fetch nlohmann-json if not found on your system

#### Linux/macOS

```bash
# Create build directory
mkdir build
cd build

# Configure with CMake (this will download and build all dependencies)
cmake ..

# Or specify build type explicitly
cmake -DCMAKE_BUILD_TYPE=Release ..
```


**Note:** The first CMake configuration will take several minutes as it downloads and builds all dependencies. Subsequent builds will be much faster.

### Step 2: Build the project

#### Linux/macOS

```bash
# Build from the build directory
cmake --build . --config Release

# Or use make with parallel jobs for faster builds
make -j$(nproc)  # Linux
make -j$(sysctl -n hw.ncpu)  # macOS
```


### Step 3: Run the executable

**Note:** The executable is built in the project root directory (not in `build/`) so it can access the `fcidump_files/` directory.

#### macOS

On macOS, you may encounter a runtime library issue with `libc++.1.dylib`. To run the executable, set the library paths:

```bash
# From the project root
export DYLD_LIBRARY_PATH="$PWD/deps/qiskit/dist/c/lib:$PWD/deps/qiskit-fermions/dist/c/lib:$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:$DYLD_LIBRARY_PATH"
export DYLD_FALLBACK_LIBRARY_PATH="/usr/lib:/usr/local/lib:$DYLD_FALLBACK_LIBRARY_PATH"

# Then run (executable is in root directory)
./SqDRIFT
```

Or create a simple wrapper script `run.sh`:

```bash
#!/bin/bash
export DYLD_LIBRARY_PATH="$PWD/deps/qiskit/dist/c/lib:$PWD/deps/qiskit-fermions/dist/c/lib:$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:$DYLD_LIBRARY_PATH"
export DYLD_FALLBACK_LIBRARY_PATH="/usr/lib:/usr/local/lib:$DYLD_FALLBACK_LIBRARY_PATH"
./SqDRIFT "$@"
```

Make it executable and run:
```bash
chmod +x run.sh
./run.sh
```

#### Linux

```bash
# From the project root (executable is in root directory)
./SqDRIFT

# If you encounter library loading issues, set LD_LIBRARY_PATH:
export LD_LIBRARY_PATH="$PWD/deps/qiskit/dist/c/lib:$PWD/deps/qiskit-fermions/dist/c/lib:$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:$LD_LIBRARY_PATH"
./SqDRIFT
```


## CMake options

You can customize the build with these options:

### Build dependencies control

```bash
# Don't build dependencies (use existing ones in deps/ directory)
cmake .. -DBUILD_DEPENDENCIES=OFF

# Build dependencies (default)
cmake .. -DBUILD_DEPENDENCIES=ON
```

### System libraries

```bash
# Use system-installed Boost (default)
cmake .. -DUSE_SYSTEM_BOOST=ON

# Use system-installed nlohmann-json (default, falls back to fetch if not found)
cmake .. -DUSE_SYSTEM_JSON=ON
```

### Build type

```bash
# Release build (optimized, default)
cmake .. -DCMAKE_BUILD_TYPE=Release

# Debug build (with debug symbols)
cmake .. -DCMAKE_BUILD_TYPE=Debug
```

### Custom Boost location

```bash
# If Boost is installed in a non-standard location
cmake .. -DBOOST_ROOT=/path/to/boost

# On macOS with Homebrew
cmake .. -DBOOST_ROOT=$(brew --prefix boost)
```

## Complete build example

Here's a complete example from scratch:

### macOS/Linux

```bash
# 1. Install prerequisites (example for Ubuntu)
sudo apt install -y cmake g++ make libboost-all-dev git curl
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env

# 2. Clone the project (if not already done)
# git clone <your-repo-url>
# cd SqDRIFT

# 3. Build everything
mkdir build && cd build
cmake ..
cmake --build . --config Release -j$(nproc)

# 4. Run (the executable is written to the project root, not to build/)
cd ..
./SqDRIFT
```


## Troubleshooting

### Issue: CMake can't find Boost

**Solution:** Specify the Boost installation path:

```bash
# Linux/macOS
cmake .. -DBOOST_ROOT=/usr/local

# macOS with Homebrew
cmake .. -DBOOST_ROOT=$(brew --prefix boost)

# Windows
cmake .. -DBOOST_ROOT="C:\local\boost_1_82_0"
```

### Issue: Git clone fails during CMake configuration

**Solution:** Check your internet connection and Git configuration. You can also manually clone dependencies:

```bash
mkdir deps
cd deps
git clone https://github.com/Qiskit/qiskit.git
git clone https://github.com/Qiskit/qiskit-cpp.git
git clone https://github.com/Qiskit/qiskit-fermions.git
git clone https://github.com/Qiskit/qiskit-addon-sqd-hpc.git
git clone https://github.com/Qiskit/qiskit-ibm-runtime-c.git
git clone https://github.com/r-ccs-cms/sbd.git
cd ..

# Then build with dependencies already present
mkdir build && cd build
cmake .. -DBUILD_DEPENDENCIES=ON
```

### Issue: Rust compilation fails

**Solution:** Ensure Rust is up to date and in your PATH:

```bash
# Update Rust
rustup update stable

# Verify Rust is in PATH
rustc --version
cargo --version

# On Windows, ensure you're using the correct toolchain
# For Visual Studio: rustup default stable-msvc
# For MinGW: rustup default stable-gnu
```

### Issue: Make not found on Windows

**Solution:** 
- For Visual Studio: Use the CMake build command instead: `cmake --build . --config Release`
- For MinGW: Install make via MSYS2: `pacman -S make`

### Issue: Library not found at runtime (Linux/macOS)

**Solution:** The CMake configuration sets RPATH automatically, but if you still have issues:

```bash
# Linux
export LD_LIBRARY_PATH=$PWD/deps/qiskit/dist/c/lib:\
$PWD/deps/qiskit-fermions/dist/c/lib:\
$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:\
$LD_LIBRARY_PATH

# macOS
export DYLD_LIBRARY_PATH=$PWD/deps/qiskit/dist/c/lib:\
$PWD/deps/qiskit-fermions/dist/c/lib:\
$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:\
$DYLD_LIBRARY_PATH
```

> **macOS + conda:** if `libqiskit.dylib` still fails to load, `libpython` and `libiconv` may need to be symlinked into `deps/qiskit/dist/c/lib/`, for example:
>
> ```bash
> ln -sf "$CONDA_PREFIX/lib/libpython3."*.dylib deps/qiskit/dist/c/lib/
> ln -sf "$CONDA_PREFIX/lib/libiconv.2.dylib" deps/qiskit/dist/c/lib/
> ```

### Issue: Compilation errors with C++17 features

**Solution:** Ensure your compiler supports C++17:

```bash
# Check GCC version (should be 7+)
g++ --version

# Check Clang version (should be 5+)
clang++ --version

# Check MSVC version (should be 2017+)
cl

# Explicitly set compiler (if needed)
cmake .. -DCMAKE_CXX_COMPILER=g++-9
```

### Issue: Out of memory during Rust compilation

**Solution:** Limit parallel jobs:

```bash
# Set CARGO_BUILD_JOBS environment variable
export CARGO_BUILD_JOBS=2  # Linux/macOS
set CARGO_BUILD_JOBS=2     # Windows CMD
$env:CARGO_BUILD_JOBS=2    # Windows PowerShell

# Then run CMake build
cmake --build . --config Release
```

## Clean build

To start fresh:

```bash
# Remove build directory
rm -rf build

# Optionally, remove downloaded dependencies
rm -rf deps
```

Then rebuild from scratch:

```bash
mkdir build && cd build
cmake ..
cmake --build . --config Release
```

## Advanced usage

### Parallel builds

Speed up compilation with parallel jobs:

```bash
# Linux/macOS
cmake --build . -j$(nproc)
```

### Verbose build output

See detailed compilation commands:

```bash
cmake --build . --verbose
```

### Custom installation

Install to a specific directory:

```bash
cmake .. -DCMAKE_INSTALL_PREFIX=/custom/install/path
cmake --build . --target install
```