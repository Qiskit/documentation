# Build instructions

These instructions build the docs-hosted Fortran application. Run them from `docs/tutorials/assets/nuclear_sqd_pooled/fortran/` in a checkout of Qiskit/documentation. The dependency builds live in a separate directory.

## Prerequisites

Install CMake 3.20 or later, Git, Make, a Fortran compiler, a C compiler, and a Rust toolchain supported by Qiskit. GNU Fortran and Rust 1.95 were used for local validation on Apple Silicon macOS. Use the same Fortran compiler throughout.

On macOS with Homebrew:

```bash
brew install gcc cmake rust gsl
```

On Ubuntu or Debian:

```bash
sudo apt install gfortran gcc cmake make git liblapack-dev libblas-dev libgsl-dev
```

Install Rust separately on Linux if it is not already available. macOS uses Accelerate for LAPACK; Linux uses the installed BLAS/LAPACK libraries. GSL and OpenMP are optional; CMake reports whether they are available. The Linux instructions have not been validated for this docs-hosted copy.

## Build the dependencies

Set the source and dependency locations:

```bash
NUCLEAR_SRC="$PWD"
NUCLEAR_DEPS="$HOME/qiskit-nuclear-deps"
mkdir -p "$NUCLEAR_DEPS"
```

Build the pinned Qiskit C library:

```bash
git clone --branch 2.5.2 --depth 1 https://github.com/Qiskit/qiskit.git "$NUCLEAR_DEPS/qiskit"
cd "$NUCLEAR_DEPS/qiskit"
make c
```

Clone the Fortran bindings at the revision used by this companion:

```bash
git clone https://github.com/Qiskit/qiskit-fortran.git "$NUCLEAR_DEPS/qiskit-fortran"
git -C "$NUCLEAR_DEPS/qiskit-fortran" checkout --detach f0561fa030ca2875d5117cc1c7648210b8ec6d1e
```

For a local build without hardware submission support:

```bash
cmake -S "$NUCLEAR_DEPS/qiskit-fortran" -B "$NUCLEAR_DEPS/qiskit-fortran/build" \
  -DCMAKE_Fortran_COMPILER=gfortran \
  -DQISKIT_ROOT="$NUCLEAR_DEPS/qiskit" \
  -DUSE_SWIG_BINDINGS=ON -DQISKIT_FORTRAN_TESTS=OFF \
  -DCMAKE_BUILD_TYPE=Release
cmake --build "$NUCLEAR_DEPS/qiskit-fortran/build" --parallel 4
```

The pinned repository contains the generated SWIG bindings, so this build does not require running SWIG. `USE_SWIG_BINDINGS=ON` is required for the target and transpiler modules used by the application.

### Enable hardware submission

Skip this section if you only need the local checks or saved-bitstring processing.

Build the pinned Runtime C library:

```bash
git clone https://github.com/Qiskit/qiskit-ibm-runtime-c.git "$NUCLEAR_DEPS/qiskit-ibm-runtime-c"
git -C "$NUCLEAR_DEPS/qiskit-ibm-runtime-c" checkout --detach 46a1065bbadcdf5f9561f908a76502673da0b7d5
cargo build --manifest-path "$NUCLEAR_DEPS/qiskit-ibm-runtime-c/crates/client/Cargo.toml" \
  --release --locked --target-dir "$NUCLEAR_DEPS/qiskit-ibm-runtime-c/build/cargo"
```

Reconfigure and rebuild the Fortran bindings with Runtime support:

```bash
cmake -S "$NUCLEAR_DEPS/qiskit-fortran" -B "$NUCLEAR_DEPS/qiskit-fortran/build" \
  -DCMAKE_Fortran_COMPILER=gfortran \
  -DQISKIT_ROOT="$NUCLEAR_DEPS/qiskit" \
  -DUSE_SWIG_BINDINGS=ON -DQISKIT_FORTRAN_TESTS=OFF \
  -DQISKIT_FORTRAN_RUNTIME=ON \
  -DQISKIT_RUNTIME_ROOT="$NUCLEAR_DEPS/qiskit-ibm-runtime-c" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build "$NUCLEAR_DEPS/qiskit-fortran/build" --parallel 4
```

## Build this companion

For a local build:

```bash
cmake -S "$NUCLEAR_SRC" -B "$NUCLEAR_SRC/build" \
  -DCMAKE_Fortran_COMPILER=gfortran \
  -DQISKIT_FORTRAN_ROOT="$NUCLEAR_DEPS/qiskit-fortran/build" \
  -DQISKIT_ROOT="$NUCLEAR_DEPS/qiskit" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build "$NUCLEAR_SRC/build" --parallel 4
```

For hardware submission, use the same configuration with the Runtime dependency added:

```bash
cmake -S "$NUCLEAR_SRC" -B "$NUCLEAR_SRC/build" \
  -DCMAKE_Fortran_COMPILER=gfortran \
  -DQISKIT_FORTRAN_ROOT="$NUCLEAR_DEPS/qiskit-fortran/build" \
  -DQISKIT_ROOT="$NUCLEAR_DEPS/qiskit" \
  -DQISKIT_RUNTIME_ROOT="$NUCLEAR_DEPS/qiskit-ibm-runtime-c" \
  -DCMAKE_BUILD_TYPE=Release
cmake --build "$NUCLEAR_SRC/build" --parallel 4
```

Check that CMake reports `--runtime mode enabled` before attempting a hardware run. Without both `qiskit_runtime.mod` and the Runtime library, the application builds with hardware submission disabled.

Run the Hamiltonian regression check after either build. It checks interaction mass scaling and compares the complete neon-20 basis energy with the Python tutorial's result. It does not submit hardware jobs.

```bash
ctest --test-dir "$NUCLEAR_SRC/build" --output-on-failure
```

Run the [local checks](README.md#check-the-local-workflow) before using the [hardware instructions](README.md#run-on-hardware). Run from `$NUCLEAR_SRC/build`, where CMake stages `USDB.snt`.

If changing the Fortran compiler, use fresh build directories for both the bindings and the application. For missing shared libraries, check that the dependency paths still exist; the application records these locations in its runtime search paths.
