# SqDRIFT implementation in C++

## Background

[SqDRIFT](https://arxiv.org/abs/2508.02578) is a variant of SQD that replaces the need to choose an ansatz from which to sample bitstrings with an ensemble of time-evolution circuits constructed directly from the target Hamiltonian. This is achieved by subsampling smaller time-evolution operators from said Hamiltonian based on its coefficients, which is known as the qDRIFT Trotterization method.

This implementation demonstrates how to use the Qiskit C++ API to create fermionic circuits for the [qDRIFT](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.070503) algorithm, execute them on IBM Quantum&reg; hardware, and post-process the results for Selected Basis Diagonalization (SBD).

Let the Hamiltonian be of the form

$$
H = \sum_{i=1}^{N} c_i h_i
$$

where, without loss of generality, we require $c_i > 0$ and that the largest eigenvalue of $h_i$ be equal, in absolute value, to $1$. Any signed or complex prefactor is absorbed into $h_i$, so the coefficients $c_i$ are strictly positive weights while the $h_i$ carry the direction of each term. Here $N$ is the number of terms (or, after grouping, the number of groups) in the Hamiltonian; it is a property of the Hamiltonian and is distinct from the number of operators sampled into a single circuit, written $n$ below.

Then the qDRIFT algorithm lets us realize, for the target time $t$, some operator $V_k$, where $k$ goes from $1 \cdots K$ and denotes the $k_{th}$ circuit in the ensemble, defined as

$$
V_k = \prod_{j=1}^{n} e^{-i h_{k_j} \lambda t / n }
$$

Here $n$ is the number of sampled operators per circuit and $K$ is the number of circuits in the ensemble. The product runs over the $n$ draws, not over all $N$ Hamiltonian terms, and because the terms are drawn with replacement the same $h_i$ can appear more than once in a single $V_k$.

The quantity

$$
\lambda = \sum_{i=1}^{N} c_i
$$

is the $L_1$ norm of the coefficients, so every one of the $n$ steps evolves for the same duration $\lambda t / n$ no matter which term was drawn. This uniform step angle is the characteristic feature of qDRIFT: a coefficient influences the result through *how often* its term is drawn, not through how far that term is rotated. The indices are sampled from the distribution

$$
P[k_i] = \frac{c_i}{\lambda}
$$

so the series $(k_1, \ldots, k_n)$ is a random sequence of term indices drawn from this distribution. Since the $c_i$ are positive and sum to $\lambda$, this is a normalized probability distribution, and the expectation of the resulting channel over the random draws approximates evolution under $H$, with an error that decreases as $n$ grows. Note that this approximation error depends on $\lambda$ rather than on the number of terms $N$.

(The SqDRIFT paper writes the number of terms as $\mathcal{N}$ and the sequence length as $N$; we use $N$ and $n$ here to keep the two clearly distinct.)

This tutorial shows how to generate an ensemble of such randomized circuits using C++ and execute them on IBM Quantum backends.

## IBM Quantum configuration

Before running SqDRIFT, ensure your IBM Quantum API token is configured for the **IBM Cloud platform** (the previous IBM Quantum Network platform is retired and will cause a startup panic).

The easiest way to create a correctly-formatted config file is via Python:

```python
from qiskit_ibm_runtime import QiskitRuntimeService
QiskitRuntimeService.save_account(channel="ibm_quantum_platform", token="YOUR_IBM_QUANTUM_TOKEN_HERE")
```

This writes `~/.qiskit/qiskit-ibm.json` (Linux/macOS) or `%USERPROFILE%\.qiskit\qiskit-ibm.json` (Windows) with the right shape. If you prefer to create the file manually:

```json
{
  "default-ibm-quantum-platform": {
    "channel": "ibm_quantum_platform",
    "token": "YOUR_IBM_QUANTUM_TOKEN_HERE"
  }
}
```

Get your token from: https://quantum.ibm.com/

> **Note:** A missing or malformed config file causes an unhelpful Rust `unwrap()` panic at startup rather than a clean error. Double-check the key name (`default-ibm-quantum-platform`) and channel value (`ibm_quantum_platform`) — the old `ibm_quantum` channel is never read by this client.

## Dependencies

Before compiling and running this code, make sure you have installed:

### Required libraries
- **[Qiskit C-API](https://github.com/Qiskit/qiskit)** - The C-bindings for qiskit-features 
- **[Qiskit C++ SDK](https://github.com/Qiskit/qiskit-cpp)** - Core quantum circuit library
- **[Qiskit Fermions](https://github.com/Qiskit/qiskit-fermions)** - Fermionic operator support
- **[Qiskit IBM Runtime](https://github.com/Qiskit/qiskit-ibm-runtime-c)** - IBM Quantum backend access
- **[Qiskit Addon SQD HPC](https://github.com/Qiskit/qiskit-addon-sqd-hpc)** - Pre-process output strings for diagonalization
- **[SBD](https://github.com/r-ccs-cms/sbd)** - Library for selected basis diagonalization to find out the ground state after we obtain the relevant sub-space.
- **Boost** - For `boost::dynamic_bitset` (bitstring manipulation)
- **nlohmann-json** - A dependency for qiskit-cpp
- **C++17 or later** - Standard library features

### System requirements
- C++ compiler with C++17 support (GCC 7+, Clang 5+, or MSVC 2017+)
- CMake 3.15 or later (for building)
- Rust toolchain **rustc ≥ 1.95** — required by `qiskit-fermions`. Run `rustup update` to upgrade if you are on an older version.
- IBM Quantum account with API token configured

### Input files
- **FCIDump file** - Molecular Hamiltonian data (for example, `N2_sto_3g`)

The `N2_sto_3g` file used here describes a nitrogen molecule (N₂) in the minimal STO-3G basis at an
interatomic separation of 1.09 Å, close to the experimental equilibrium bond length. Its header
declares `NORB=10`, `NELEC=14`, `MS2=0`: 10 spatial orbitals (20 spin orbitals, hence the 20 qubits
this example uses), and 14 electrons in a spin singlet, so 7 α and 7 β electrons. No orbitals are
frozen and no point-group symmetry is exploited (every `ORBSYM` entry is 1). The bond length can be
read back out of the file: the last entry is the nuclear repulsion energy `23.78870030741285`, and
`R = Z_1 Z_2 / E_nuc = 49 / 23.7887 = 2.0598` bohr = 1.09 Å.

The file ships with this tutorial at
[`docs/tutorials/assets/sqdrift/fcidump_files/`](https://github.com/Qiskit/documentation/tree/main/docs/tutorials/assets/sqdrift/fcidump_files),
one directory above this project root, which is why the source refers to it as
`../fcidump_files/N2_sto_3g`. An equivalent file can be regenerated with PySCF:

```python
from pyscf import gto, scf, tools

mol = gto.M(atom="N 0 0 0; N 0 0 1.09", basis="sto-3g", symmetry=False)
mf = scf.RHF(mol).run()
tools.fcidump.from_scf(mf, "N2_sto_3g")
```

## Quick start

### Build and run (3 commands)

```bash
# 1. Configure and build (from project root)
mkdir build && cd build
cmake ..
cmake --build . --config Release
cd ..

# 2. Set library paths (macOS)
export DYLD_LIBRARY_PATH="$PWD/deps/qiskit/dist/c/lib:$PWD/deps/qiskit-fermions/dist/c/lib:$PWD/build/deps-build/qiskit-ibm-runtime-c/src/qiskit_ibm_runtime_external-build/cargo/release:$DYLD_LIBRARY_PATH"
export DYLD_FALLBACK_LIBRARY_PATH="/usr/lib:/usr/local/lib:$DYLD_FALLBACK_LIBRARY_PATH"

# 3. Run (executable is in root directory to access fcidump_files/)
./SqDRIFT
```

**For Linux**, use `LD_LIBRARY_PATH` instead of `DYLD_LIBRARY_PATH`.

**Windows is untested and not currently supported.** The code uses `unistd.h`/`sleep()` and CMake links the Qiskit shared libraries directly, neither of which works with MSVC as-is.

See [BUILD_INSTRUCTIONS.md](https://github.com/Qiskit/documentation/blob/main/docs/tutorials/assets/sqdrift/cpp/BUILD_INSTRUCTIONS.md) for detailed platform-specific instructions, including what porting to Windows would involve.

## Code overview

The `SqDRIFT.cpp` implementation follows these key steps:

### 1. Load molecular Hamiltonian

```cpp
char filename[] = "../fcidump_files/N2_sto_3g";
QfFCIDump* fcidump = qf_fcidump_from_file(filename);
if (fcidump == nullptr) {
    std::cerr << "Failed to load FCIDump!" << std::endl;
    return 1;
}

uint32_t norb = qf_fcidump_norb(fcidump);
uint32_t nelec = qf_fcidump_nelec(fcidump);
uint32_t n_alpha = nelec / 2;
uint32_t n_beta  = nelec - n_alpha;
uint32_t num_modes = 2 * norb;
uint32_t num_qubits = num_modes;
std::cout << "✓ Loaded N2 molecule (" << norb << " orbitals, "
          << num_qubits << " qubits, " << nelec << " electrons)" << std::endl;
```

**Output:**
```
✓ Loaded N2 molecule (10 orbitals, 20 qubits, 14 electrons)
```

Loads the N₂ molecule Hamiltonian from an FCIDump file. The number of qubits equals twice the number of orbitals (spin-up and spin-down).

### 2. Create and normal order Hamiltonian

```cpp
// 2. Create and normal order Hamiltonian
QfFermionOperator* hamiltonian = qf_ferm_op_from_fcidump(fcidump);
QfFermionOperator* normal_ordered = qf_ferm_op_normal_ordered(hamiltonian, nullptr);
```

Converts the FCIDump data into a fermionic operator and applies normal ordering to simplify the operator structure.

### 3. Group terms by electronic structure

```cpp
// 3. Group terms by electronic structure
QfExitCode exit_code = qf_ferm_op_group_terms_by_electronic_structure(
    normal_ordered, num_modes, false
);
if (exit_code != QfExitCode_Success) {
    std::cerr << "Failed to group terms!" << std::endl;
    return 1;
}

uint32_t num_groups = qf_ferm_op_num_groups(normal_ordered);
std::cout << "Grouped into " << num_groups << " groups" << std::endl;

// 4. Split into group operators
QfFermionOperator** group_ops = new QfFermionOperator*[num_groups];
qf_ferm_op_split_out_groups(normal_ordered, nullptr, 0, group_ops);
```
**Output:**
```
Grouped into 1902 groups
```
Groups Hamiltonian terms that commute with each other, enabling efficient circuit construction. Each group can be evolved independently.
### 4. Calculate sampling weights, then normalize and map to qubit operators

**Order matters here.** Normalization rescales every coefficient to unit magnitude *in place*, so the sampling weights must be computed first. If normalization runs first, every $|c_j|$ reads back as exactly `1.0` and each group's weight collapses into a bare count of its terms — the sampling distribution would then be driven by group size rather than by the physical coefficients.

Each group's weight is the **mean** absolute coefficient, matching the Python SqDRIFT reference. Using the sum instead would make $\lambda$ scale with group size, which in turn skews the evolution time $t_k = \lambda\tau/n$.

```cpp
// 5. Calculate sampling weights BEFORE normalization.
std::vector<double> weights(num_groups);
double total_weight = 0.0;

for (uint32_t i = 0; i < num_groups; i++) {
    QkComplex64* coeffs;
    uint64_t num_terms;
    qf_ferm_op_get_coeffs(group_ops[i], &coeffs, &num_terms);

    double abs_sum = 0.0;
    for (uint64_t j = 0; j < num_terms; j++) {
        abs_sum += std::sqrt(coeffs[j].re * coeffs[j].re +
                             coeffs[j].im * coeffs[j].im);
    }
    weights[i] = (num_terms > 0) ? (abs_sum / static_cast<double>(num_terms)) : 0.0;
    total_weight += weights[i];
}

std::cout << "Total weight (λ): " << total_weight << std::endl;

// 6. Normalize the evolution operators term-by-term, now that the sampling
// weights above have already captured the original magnitudes.
for (uint32_t i = 0; i < num_groups; i++) {
    QkComplex64* coeffs;
    uint64_t num_terms;
    qf_ferm_op_get_coeffs(group_ops[i], &coeffs, &num_terms);

    for (uint64_t j = 0; j < num_terms; j++) {
        const double magnitude = std::sqrt(coeffs[j].re * coeffs[j].re +
                                           coeffs[j].im * coeffs[j].im);
        if (magnitude > 0.0) {
            coeffs[j].re /= magnitude;
            coeffs[j].im /= magnitude;
        }
    }
}

QkObs** qubit_ops = new QkObs*[num_groups];
for (uint32_t i = 0; i < num_groups; i++) {
    QfExitCode jw_exit = qf_ferm_op_jordan_wigner(group_ops[i], num_qubits, &qubit_ops[i]);
    if (jw_exit != QfExitCode_Success) {
        std::cerr << "Failed to map group " << i << std::endl;
        return 1;
    }
}
std::cout << "Mapped all " << num_groups << " normalized groups to qubit operators" << std::endl;
```

**Output:**
```
Total weight (λ): 337.261
Mapped all 1902 normalized groups to qubit operators
```

The weight $\lambda_i = \frac{1}{|G_i|}\sum_{j \in G_i} |c_{ij}|$ is the mean absolute coefficient over the terms of group $G_i$, read from the original coefficients. Normalization then rescales each fermionic term to unit magnitude before the Jordan-Wigner transformation, preserving only its phase/sign in the evolved operator. This matches qDRIFT's normalized-term evolution: coefficient magnitudes determine sampling probabilities via $\lambda$, while the circuit evolution uses the normalized term so large coefficients are not counted twice.

### 5. SqDRIFT sampling
```cpp
// 7. SqDRIFT Sampling: Create operator sets
    const int num_circuits = 100;    // Number of circuits to create
    const int ops_per_circuit = 10;  // Operators per circuit
    const double time_step = 1;    // Time step for evolution
    
    std::cout << "\n Generating " << num_circuits << " circuits with " 
              << ops_per_circuit << " operators each..." << std::endl;
    
    std::mt19937 gen(42);
    std::discrete_distribution<> dist(weights.begin(), weights.end());
    
    // Store sampled operator indices
    std::vector<std::vector<int>> operator_sets(num_circuits);
    for (int i = 0; i < num_circuits; i++) {
        operator_sets[i].resize(ops_per_circuit);
        for (int j = 0; j < ops_per_circuit; j++) {
            operator_sets[i][j] = dist(gen);
        }
    }
```

Generates 100 random circuits, each containing 10 operators sampled from the weighted distribution. This creates the ensemble of qDRIFT circuits.

### 6. Build Suzuki-Trotter circuits

```cpp
    // 8. Create Suzuki-Trotter circuits by composing all operators
    std::vector<Qiskit::circuit::QuantumCircuit> circuits;
    circuits.reserve(num_circuits);

    const uint32_t trotter_order = 1;
    const uint32_t trotter_reps = 1;
    const bool preserve_order = false;
    const bool insert_barriers = false;

    // Gate name mapping is static — compute once before all loops
    auto name_map = Qiskit::circuit::get_standard_gate_name_mapping();

    for (int circuit_idx = 0; circuit_idx < num_circuits; circuit_idx++) {
        // Create initial circuit with state preparation using C++ API
        Qiskit::circuit::QuantumCircuit qc(num_qubits, num_qubits);

        // State preparation: apply X gates to spin-up qubits 0..n_alpha-1
        // and spin-down qubits norb..norb+n_beta-1 (derived from FCIDump NELEC)
        for (uint32_t q = 0; q < n_alpha && q < num_qubits; q++) {
            qc.x(q);
        }
        for (uint32_t q = norb; q < norb + n_beta && q < num_qubits; q++) {
            qc.x(q);
        }

        // For each operator in this circuit's set
        for (int op_idx = 0; op_idx < ops_per_circuit; op_idx++) {
            int group_idx = operator_sets[circuit_idx][op_idx];
            double evolution_time = (total_weight * time_step) / ops_per_circuit;
            
            // Create Suzuki-Trotter evolution circuit
            QkCircuit* evolution_circuit = qk_circuit_library_suzuki_trotter(
                qubit_ops[group_idx], trotter_order, trotter_reps,
                evolution_time, preserve_order, insert_barriers
            );
            
            if (evolution_circuit != nullptr) {
                // Get number of instructions
                uint32_t num_ops = qk_circuit_num_instructions(evolution_circuit);
                
                // Manually append each instruction
                for (uint32_t i = 0; i < num_ops; i++) {
                    QkCircuitInstruction inst;
                    qk_circuit_get_instruction(evolution_circuit, i, &inst);

                    // Prepare qubit vector
                    std::vector<uint32_t> qubits(inst.num_qubits);
                    for (uint32_t j = 0; j < inst.num_qubits; j++) {
                        qubits[j] = inst.qubits[j];
                    }

                    // Get operation kind
                    QkOperationKind kind = qk_circuit_instruction_kind(evolution_circuit, i);

                    // Get mutable pointer to circuit
                    QkCircuit* mutable_circuit = qc.get_rust_circuit().get();

                    // Append based on operation type
                    if (kind == QkOperationKind_Gate) {
                        // Convert gate name string to QkGate enum
                        std::string gate_name(inst.name);
                        auto gate_it = name_map.find(gate_name);
                        if (gate_it != name_map.end()) {
                            QkGate gate_enum = gate_it->second.gate_map();
                            qk_circuit_parameterized_gate(
                                mutable_circuit,
                                gate_enum,           // Use QkGate enum, not string
                                qubits.data(),
                                inst.params
                            );
                        } else {
                            std::cerr << "Unknown gate in evolution circuit: " << gate_name << std::endl;
                            qk_circuit_instruction_clear(&inst);
                            qk_circuit_free(evolution_circuit);
                            return 1;
                        }
                    } else if (kind == QkOperationKind_Barrier) {
                        qk_circuit_barrier(
                            mutable_circuit,
                            qubits.data(), 
                            inst.num_qubits
                        );
                    } else if (kind == QkOperationKind_Reset) {
                        qk_circuit_reset(
                            mutable_circuit,
                            qubits[0]
                        );
                    }

                    qk_circuit_instruction_clear(&inst);
                }

                qk_circuit_free(evolution_circuit);
            }
        }

        circuits.push_back(qc);

        // Display progress
        if ((circuit_idx + 1) % 10 == 0) {
            std::cout << "  Created " << (circuit_idx + 1) << "/" 
                    << num_circuits << " circuits" << std::endl;
        }
    }

    std::cout << "✓ Created all " << num_circuits << " Suzuki-Trotter circuits" << std::endl;
``` 
**Output:**
```
Generating 100 circuits with 10 operators each...
  Created 10/100 circuits
  Created 20/100 circuits
  Created 30/100 circuits
  Created 40/100 circuits
  Created 50/100 circuits
  Created 60/100 circuits
  Created 70/100 circuits
  Created 80/100 circuits
  Created 90/100 circuits
  Created 100/100 circuits
✓ Created all 100 Suzuki-Trotter circuits
```
For each sampled operator, creates a Suzuki-Trotter evolution circuit with time $t_k = \frac{\lambda \tau}{n}$, where $n$ is the number of operators sampled per circuit and $\tau$ is the time step. Because each sampled group was normalized term-by-term before mapping, this evolution applies only the phase/sign of each term during the rotation; the magnitudes contribute through the sampling distribution only. The Hartree-Fock initial state is prepared by applying X gates to qubits 0-6 and 10-16 (7 electrons in each spin sector). Each evolution circuit's instructions are manually appended to the main circuit using the C++ API.
### 7. Execute on IBM Quantum
```cpp
std::cout << "\n Connecting to IBM Quantum Cloud..." << std::endl;

// 1. Initialize IBM Quantum service using qiskit-cpp
Qiskit::service::QiskitRuntimeService service;
std::cout << "✓ Connected to IBM Quantum" << std::endl;

// 2. Get backend
const std::string backend_name = "ibm_fez";
auto backend = service.backend(backend_name);

if (backend.name().empty()) {
    std::cerr << "Backend " << backend_name
              << " is not available to this account." << std::endl;
    return 1;
}

std::cout << "✓ Selected backend: " << backend.name() << std::endl;

// 3. Create sampler primitive
const int32_t shots = 100;  // Number of shots per circuit
Qiskit::primitives::BackendSamplerV2 sampler(backend, shots);

std::cout << "\n Submitting " << num_circuits << " circuits ("
            << shots << " shots each)..." << std::endl;

// 4. Submit one job per circuit.
std::vector<std::shared_ptr<Qiskit::primitives::BasePrimitiveJob>> jobs;

for (int i = 0; i < num_circuits; i++) {
    for (uint32_t q = 0; q < num_qubits; q++) {
        circuits[i].measure(q, q);
    }
    Qiskit::circuit::QuantumCircuit transpiled_qc =
        Qiskit::compiler::transpile(circuits[i], backend, 2, 1.0, 42);
    std::vector<Qiskit::primitives::SamplerPub> pubs;
    pubs.push_back(Qiskit::primitives::SamplerPub(transpiled_qc, shots));
    jobs.push_back(sampler.run(pubs));
}

std::cout << "\n⏳ Waiting for " << num_circuits << " jobs to complete..." << std::endl;

// 5. Collect results — poll each job and extract bitstrings
std::vector<boost::dynamic_bitset<>> all_bitstrings;

for (int i = 0; i < num_circuits; i++) {
    while (!jobs[i]->in_final_state()) {
        sleep(5);
    }
    if (jobs[i]->done()) {
        auto result = jobs[i]->result();
        if (result.size() > 0) {
            auto& pub_result = result[0];
            auto& bit_array  = pub_result.data();
            for (size_t s = 0; s < bit_array.num_shots(); s++) {
                auto sample = bit_array[s].to_string();
                boost::dynamic_bitset<> bs(num_qubits);
                for (uint32_t bit = 0; bit < num_qubits; bit++) {
                    bs[bit] = (sample[num_qubits - 1 - bit] == '1');
                }
                all_bitstrings.push_back(bs);
            }
        }
    } else {
        std::cout << "  Circuit " << (i+1) << " did not complete successfully" << std::endl;
    }
}

std::cout << "\n✓ Collected " << all_bitstrings.size()
            << " total bitstrings from all circuits" << std::endl;
```

**Output:**
```
✓ Connected to IBM Quantum
✓ Selected backend: ibm_pittsburgh
⏳ Waiting for 100 jobs to complete...
✓ Collected 10000 total bitstrings from all circuits
```

Connects to IBM Quantum, selects the backend by name, and submits one job per circuit. Each job is polled independently; bitstrings are collected from `result[0]` of each job — no per-shot printing.

The hardware results quoted in this README come from a run on `ibm_pittsburgh` (100 circuits × 100 shots), with `backend_name` changed from the default `ibm_fez`. The saved samples were postprocessed with the corrected determinant bit ordering shown below. Hardware noise varies between runs, so your counts and final energy will differ.

> **Changing the backend:** Change `backend_name` in `SqDRIFT.cpp` to target a different device; `service.backends()` lists what your account can reach.

### 8. Post-process results

```cpp
// Step 1.5: Postselect bitstrings by Hamming weight (derived from FCIDump NELEC)
std::vector<double> bitstring_weights(all_bitstrings.size(), 1.0);
auto [filtered_bitstrings, filtered_weights] = Qiskit::addon::sqd::postselect_bitstrings(
    all_bitstrings,
    bitstring_weights,
    Qiskit::addon::sqd::MatchesRightLeftHamming<uint32_t>(n_alpha, n_beta)
);
std::ignore = filtered_weights;

std::cout << "✓ Postselected " << filtered_bitstrings.size()
          << " bitstrings with Hamming weight ("
          << n_alpha << "," << n_beta << ")" << std::endl;

// Step 2: Convert bitstrings to CI strings using SQD addon
auto ci_strings = Qiskit::addon::sqd::bitstrings_to_ci_strings_symmetrize_spin(
    filtered_bitstrings,
    std::nullopt  // No dimension limit
);

std::cout << "✓ Generated " << ci_strings.size() << " CI strings" << std::endl;

// Step 3: Write CI strings to file for SBD
std::ofstream alpha_file("alphadets_from_sqd.txt");
for (const auto& ci_string : ci_strings) {
    std::string bitstr;
    // SBD expects the highest orbital index first (bit zero on the right).
    boost::to_string(ci_string, bitstr);
    alpha_file << bitstr << "\n";
}
alpha_file.close();

std::cout << "✓ Wrote " << ci_strings.size()
          << " CI strings to alphadets_from_sqd.txt" << std::endl;
std::cout << " Ready for SBD diagonalization!" << std::endl;
```
**Output:**
```
✓ Collected 10000 total bitstrings from all circuits
✓ Postselected 1137 bitstrings with Hamming weight (7,7)
✓ Generated 49 CI strings
✓ Wrote 49 CI strings to alphadets_from_sqd.txt
 Ready for SBD diagonalization!
```
Postselects bitstrings with the correct Hamming weight (n_alpha spin-up, n_beta spin-down electrons, derived from the FCIDump `NELEC` field), converts them to Configuration Interaction (CI) strings using spin symmetrization, and writes them to `alphadets_from_sqd.txt` for subsequent Selected Basis Diagonalization.

#### How this differs from the Python SqDRIFT tutorial

The two examples differ in several respects at once, not only in how they treat bad-symmetry bitstrings, so they are not expected to produce identical energies:

| | This C++ companion | Python SqDRIFT tutorial |
|---|---|---|
| Bad-symmetry bitstrings | **Discarded** by `postselect_bitstrings` on Hamming weight | **Repaired** by iterative configuration recovery |
| Loop structure | Single pass: sample → postselect → diagonalize once | Outer loop: diagonalize, read orbital occupancies, recover configurations, re-diagonalize |
| Circuit count | 100 circuits (`num_circuits = 100`) | 400 circuits (200 per evolution time) |
| Evolution times | A single $\tau$ (`time_step = 1`) | Two times, `times = [1.0, 10.0]` |
| Diagonal terms | Kept in the sampled operator | Removed by `filter_diagonal_terms`, changing the sampling distribution and the circuits |
| Term ordering | Grouped only | `canonical_order` applied before grouping for reproducibility |
| Diagonalizer | **SBD** (`diag`, external MPI/OpenMP binary) | `qiskit-addon-sqd` in-process solver |

Each of these affects the sampled subspace, and therefore the energy, independently. The larger circuit ensemble and the second, longer evolution time both broaden the set of configurations the Python example explores — sampling at more than one time is what gives SqDRIFT its Krylov-like coverage of the low-energy space, so a single-time run explores less of it. Filtering diagonal terms changes which operators are available to the sampler and the relative weights it draws from, so the two runs are not even sampling the same distribution.

On postselection specifically: it is a strict filter, so a shot with the wrong particle number is dropped outright. In the run recorded above that is most of the data — 1137 of 10000 shots survived the (7,7) Hamming-weight check, about 11%, which then collapsed into just 49 distinct α-determinants. Configuration recovery instead uses average orbital occupancies from a previous diagonalization to flip bits and *repair* such a shot into a symmetry-valid one, recycling shots that postselection discards. That feedback makes it inherently iterative — `recover_configurations` in `qiskit-addon-sqd-hpc` requires an `avg_occupancies` argument that only exists once a diagonalization has run.

The observable outcome of this particular C++ run is a subspace of 49 α-determinants and an energy of `-107.5109` Ha. For this Hamiltonian the exact answer is available for comparison: the full α-determinant space for 7 electrons in 10 orbitals is only $\binom{10}{7} = 120$ strings, so feeding all 120 to the same `diag` binary gives the exact FCI energy `-107.6482` Ha. This run therefore sits about `0.1373` Ha above the exact result while spanning 49 of the 120 available α-determinants. Since SQD is variational in the selected subspace, a smaller subspace can only give an equal or higher energy, so an incomplete subspace is the most direct reading of the gap.

Note that this exact-FCI check is only possible because the example is small; it is not part of the SqDRIFT workflow, and for system sizes where SQD is actually needed no such reference exists. It is used here purely to quantify how much of the space this run recovered.

If you compare against the Python tutorial instead, **that comparison is not controlled**, so a difference should not be attributed to the absence of configuration recovery alone: the circuit count, the single evolution time, diagonal-term filtering, and hardware noise all differ simultaneously and all influence the subspace. Isolating the effect of any one of them would mean holding the others fixed — for example, running both paths with the same circuit count, the same set of evolution times, and the same treatment of diagonal terms, and toggling only recovery.

Useful levers if you want to close the gap: raise `shots`, `num_circuits`, or `ops_per_circuit`; sample at more than one `time_step`; and add a recovery loop on top of `Qiskit::addon::sqd::recover_configurations`. Each widens or repairs the surviving subspace, and adding a recovery loop is the natural next extension of this tutorial.

### 9. Cleanup
```cpp
// 6. Cleanup
// circuits vector will be automatically cleaned up (RAII)
// Free qubit operators
for (uint32_t i = 0; i < num_groups; i++) {
    qk_obs_free(qubit_ops[i]);
}
delete[] qubit_ops;
// Free fermionic operators
for (uint32_t i = 0; i < num_groups; i++) {
    qf_ferm_op_free(group_ops[i]);
}
delete[] group_ops;
qf_ferm_op_free(normal_ordered);
qf_ferm_op_free(hamiltonian);
qf_fcidump_free(fcidump);
return 0;
```

Properly frees all allocated memory and resources. The C++ `std::vector<QuantumCircuit>` is automatically cleaned up via RAII. Manually frees qubit operators, fermionic operators, and the FCIDump data.

### 10. Run the diagonalization scheme

Now that we have created the basis for projecting our Hamiltonian over, we can proceed with the diagonalization process to obtain the ground state estimate.

#### Step 1 — Build the SBD `diag` binary

CMake fetches SBD as source-only into `deps/sbd/` (the main build intentionally skips compiling it). The SBD app uses a plain `Makefile`, and SBD itself requires **MPI, OpenMP, and BLAS/LAPACK** — so plain `make` is not sufficient until those are installed and the app's `Configuration` file matches your toolchain.

The `Makefile` reads its compiler and link flags from the `Configuration` file in the same directory. The version shipped upstream is tuned for one specific macOS/Homebrew layout and **will not build as-is** on a stock machine — most notably `-I/opt/homebrew/opt/llvm/include` does not contain `omp.h` (it lives in a version-specific clang resource directory), and Apple's own `clang++` rejects `-fopenmp` outright:

```
clang++: error: unsupported option '-fopenmp'
```

The following recipe is **verified working on macOS (Apple Silicon, Darwin 25.6, Open MPI 5.x + Homebrew LLVM)**.

##### macOS (Apple Silicon) — tested

```bash
# 1. Install MPI and an OpenMP-capable compiler.
#    Apple clang cannot do OpenMP, so Homebrew's LLVM provides both
#    clang++ and libomp. BLAS/LAPACK come from Apple's Accelerate
#    framework, which is already part of macOS — no openblas needed.
brew install open-mpi llvm
```

Then replace `deps/sbd/apps/chemistry_tpb_selected_basis_diagonalization/Configuration` with:

```make
# Path to the SBD library
SBD_PATH=../..

# MPI C++ compiler. OMPI_CXX points Open MPI's wrapper at Homebrew's clang++,
# which (unlike Apple clang) supports -fopenmp.
CCCOM=OMPI_CXX=/opt/homebrew/opt/llvm/bin/clang++ mpicxx

# Build flags. omp.h lives in a version-specific clang resource dir, so let
# Homebrew's clang++ find it itself rather than hardcoding an -I path.
CCFLAGS= -std=c++17 -fopenmp -O3

# Link flags: OpenMP runtime from Homebrew LLVM, BLAS/LAPACK from the
# Accelerate framework that ships with macOS (no openblas install needed).
SYSLIB= -L/opt/homebrew/opt/llvm/lib -lomp -framework Accelerate
```

```bash
# 2. Build
cd deps/sbd/apps/chemistry_tpb_selected_basis_diagonalization
make
cd ../../../..
```

A successful build prints the two compile/link lines and leaves a `diag` binary next to the `Makefile`. One `ld: warning: ignoring duplicate libraries: '-lomp'` is harmless.

> **Intel macOS:** Homebrew's prefix is `/usr/local` rather than `/opt/homebrew`, so substitute it in both preceding paths.

##### Linux (Ubuntu/Debian) — untested

The following prerequisites cover MPI, OpenMP, and BLAS/LAPACK. GCC supports `-fopenmp` natively, so no compiler override is needed. This has **not** been verified on Linux; treat it as a starting point:

```bash
sudo apt install -y libopenmpi-dev libomp-dev libblas-dev liblapack-dev
```

```make
SBD_PATH=../..
CCCOM=mpicxx
CCFLAGS= -std=c++17 -fopenmp -O3
SYSLIB= -llapack -lblas
```

#### Step 2 — Run SqDRIFT to generate CI strings

```bash
./SqDRIFT
# Writes alphadets_from_sqd.txt in the project root
```

#### Step 3 — Run the diagonalization

```bash
cd deps/sbd/apps/chemistry_tpb_selected_basis_diagonalization

# The FCIDump lives in the shared sqdrift/fcidump_files/ directory, one level
# above this tutorial's project root, hence five levels up from here.
ln -sf ../../../../../fcidump_files/N2_sto_3g fcidump.txt

# alphadets_from_sqd.txt is written by ./SqDRIFT into the project root itself,
# which is four levels up.
ln -sf ../../../../alphadets_from_sqd.txt alphadets.txt

./diag \
--fcidump fcidump.txt \
--adetfile alphadets.txt \
--method 0 \
--iteration 100 \
--block 10 \
--tolerance 1e-8 \
| tee ../../../../sbd_output.txt

cd ../../../..
```
**Parameters:**
- `--fcidump`: Path to the FCIDump file containing the Hamiltonian
- `--adetfile`: Path to the alpha determinants file (CI strings from SqDRIFT)
- `--method 0`: Davidson diagonalization method
- `--iteration 100`: Maximum number of Davidson iterations
- `--block 10`: Block size for Davidson algorithm
- `--tolerance 1e-8`: Convergence tolerance for energy

```
 Elapsed time for helper construction 0.001512 (sec)
 Elapsed time for init 1e-06 (sec)
 Davidson iteration 0.0 (tol=0.1857493937033264): -107.493531425221
 Davidson iteration 0.1 (tol=0.0455699976495391): -107.5098150493379 -105.93368397386
 Davidson iteration 0.2 (tol=0.009291923190816917): -107.5108356028703 -106.1245977311231 -105.6823366883346
 Davidson iteration 0.3 (tol=0.001488674426419356): -107.5108711084406 -106.3219246016818 -105.7376912083761 -105.4392974334491
 Davidson iteration 0.4 (tol=0.0003188697654737439): -107.5108722237947 -106.5935152393201 -106.1108017566682 -105.4932621297472
 Davidson iteration 0.5 (tol=3.080273116687244e-05): -107.5108722587463 -106.7245930484005 -106.2313070085243 -105.6423237790271
 Davidson iteration 0.6 (tol=2.981303155550973e-06): -107.5108722590151 -106.8008116251279 -106.330411722324 -105.69489630447
 Davidson iteration 0.7 (tol=4.565075388900609e-07): -107.5108722590186 -106.8090569201597 -106.3345525819528 -106.0578325555555
 Davidson iteration 0.8 (tol=4.870689101320012e-08): -107.5108722590186 -106.8098939189322 -106.3973756614146 -106.1617813840531
 Davidson iteration 0.9 (tol=6.224330513865847e-09): -107.5108722590187 -106.8159869231416 -106.4315891597535 -106.2222021964013
 Elapsed time for davidson 0.031276 (sec)
 Elapsed time for diagonalization 0.031286 (sec)
 Elapsed time for mult 0.002511 (sec)
 Energy = -107.5108722590187
 Elapsed time for measurement 4.6e-05 (sec)
 Sample-based diagonalization: Energy = -107.5108722590187
 Sample-based diagonalization: density = [1.999989340109303,1.99999662423008,1.999199121034164,1.981735389885314,1.999825046204946,1.999847567448985,1.995347419300126,0.01136512984757364,0.009844780833945199,0.002849581105572152
 Sample-based diagonalization: carryover bitstrings = [], size = 0
```

The `Energy = -107.5108722590187` line is the ground-state estimate over the sampled subspace.

## Key parameters

- **`num_circuits`**: Number of qDRIFT circuits to generate (default: 100)
- **`ops_per_circuit`**: Number of operators per circuit (default: 10)
- **`time_step`**: Evolution time step τ (default: 1)
- **`shots`**: Number of measurement shots per circuit (default: 100)
- **`trotter_order`**: Suzuki-Trotter decomposition order (default: 1)
- **Hamming weight**: derived from the FCIDump `NELEC` field (`n_alpha`, `n_beta`); (7, 7) for N₂ with 14 electrons

## Output

The program produces:
1. **Console output**: Progress updates, circuit statistics, and measurement results
2. **`alphadets_from_sqd.txt`**: CI strings for Selected Basis Diagonalization

Make sure your IBM Quantum API token is configured before running.

## References

- [SqDRIFT Paper](https://arxiv.org/abs/2508.02578)
- [qDRIFT Paper](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.123.070503)
- [Qiskit Documentation](https://quantum.cloud.ibm.com/docs)