# Nuclear shell-model diagonalization with Fortran

This is the Fortran companion to [Pooled sample-based quantum diagonalization of a nuclear Hamiltonian](https://quantum.cloud.ibm.com/docs/en/tutorials/nuclear_sqd_pooled). It builds an ensemble of excitation circuits, samples determinants on IBM Quantum&reg; hardware, filters them by nuclear symmetries, and diagonalizes the Hamiltonian in the selected subspace.

Aaryav Mishra developed this application in [qiskit-fortran PR #26](https://github.com/Qiskit/qiskit-fortran/pull/26). The Fortran sources and interaction data here are based on the merged revision [`f0561fa030ca2875d5117cc1c7648210b8ec6d1e`](https://github.com/Qiskit/qiskit-fortran/tree/f0561fa030ca2875d5117cc1c7648210b8ec6d1e/applications/nuclear_shell). They retain the upstream copyright notices and [Apache 2.0 license](LICENSE.txt). This companion includes corrections to interaction mass scaling and antisymmetrized pair-exchange phases. The CMake setup and documentation are adapted for this directory in Qiskit/documentation. Future updates should identify the upstream revision and revalidate the build.

The platform tutorial contains the Python implementation. This companion contains the Fortran application and its build and run instructions.

## Build

Follow [Build instructions](BUILD_INSTRUCTIONS.md) to build the Qiskit C library, the Fortran bindings, and this application. Use the same Fortran compiler for the bindings and the application because module files are compiler-specific.

The build produces `nuclear_shell_driver` and copies `data/USDB.snt` beside it. Despite its filename, that file contains the **USDA** interaction, as its header states. The supplied example describes two valence protons and two valence neutrons in the sd shell, corresponding to neon-20.

## Check the local workflow

Run from the companion's build directory:

```bash
cd build
./nuclear_shell_driver --protons 2 --neutrons 2 --circuits 3 --shots 256
```

Without `--runtime`, the application generates copies of the reference determinant rather than sampling a simulated quantum circuit. This checks the classical filtering and diagonalization pipeline; it does not test circuit sampling or configuration recovery. The selected subspace has dimension one, so its energy is the reference determinant's diagonal matrix element.

For this local test, the expected result includes:

```text
RESULT  energy_level01      -28.644723043 MeV
RESULT  subspace_dim                  1 states
RESULT  pooled_kept                 768 shots
```

To check saved-bitstring processing:

```bash
./nuclear_shell_driver --protons 2 --neutrons 2 --circuits 2 --shots 256 --save-bitstrings
./nuclear_shell_driver --bitstrings-dir . --max-steps 2 --protons 2 --neutrons 2 --mode per-step
```

The second command reads `bitstrings_stepNN.txt` files without submitting hardware jobs. Its `per-step` mode diagonalizes each file separately; it does not combine all files into one pooled subspace.

## Run on hardware

Build with Runtime support as described in the build instructions. These commands assume you have already [saved your IBM Quantum Platform credentials locally](https://quantum.cloud.ibm.com/docs/en/guides/save-credentials). The pinned Runtime client reads `~/.qiskit/qiskit-ibm.json`; use an account named `default`, `default-ibm-quantum-platform`, or `default-ibm-cloud`. Do not put API keys in tutorial files.

From the build directory, run:

```bash
./nuclear_shell_driver --runtime --backend ibm_pittsburgh \
  --protons 2 --neutrons 2 --circuits 11 --shots 4096
```

Choose a backend available to your account with enough qubits for the model space. This command submits hardware jobs and uses QPU time. The driver writes the returned samples to `bitstrings_stepNN.txt` files for later processing. Counts and energies depend on the samples and device noise.

Use `./nuclear_shell_driver --help` for the full option list. To use another interaction, supply `--snt /absolute/path/to/interaction.snt` and the corresponding valence nucleon counts. Only the sd-shell interaction is included here; `--shell pf` requires a separately supplied `gxpf1.snt` file.

## Differences from the Python tutorial

The Fortran driver filters samples by nuclear symmetries and supports pooled or per-step diagonalization. It does **not** implement the Python notebook's self-consistent configuration-recovery loop. Circuit construction, selection, and resource settings also differ, so independently sampled runs can produce different energies. For the same interaction, nucleus, and determinant basis, the two implementations should agree. Low sample retention can limit the accuracy of the Fortran result even when the Hamiltonian is correct.

`nuclear_shell_parallel` is an optional coarray postprocessor built when the compiler and runtime support it. The default GNU build uses the single-image coarray runtime. After generating two step files, check it with:

```bash
./nuclear_shell_parallel --steps 2 --protons 2 --neutrons 2 --bitstrings-dir .
```

A multi-image run requires an appropriate coarray runtime and build configuration; launching the single-image binary with multiple processes does not enable distributed execution.
