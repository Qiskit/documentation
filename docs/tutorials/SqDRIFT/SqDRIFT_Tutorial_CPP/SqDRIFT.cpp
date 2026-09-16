#include <iostream>
#include <cstdlib>
#include <random>
#include <vector>
#include <cmath>
#include <unistd.h>
#include "qiskit.h"
#include "qiskit_fermions.h"
#include <boost/dynamic_bitset.hpp>
#include "qiskit/addon/sqd/fermion.hpp"
#include "qiskit/addon/sqd/postselection.hpp"
#include <fstream>

// qiskit-cpp components
#include "circuit/quantumcircuit.hpp"
#include "compiler/transpiler.hpp"
#include "primitives/backend_sampler_v2.hpp"
#include "primitives/containers/sampler_pub.hpp"
#include "service/qiskit_runtime_service.hpp"

int main() {

    char filename[] = "fcidump_files/N2_sto_3g";
    QfFCIDump* fcidump = qf_fcidump_from_file(filename);
    if (fcidump == nullptr) {
        std::cerr << "Failed to load FCIDump!" << std::endl;
        return 1;
    }

    uint32_t norb  = qf_fcidump_norb(fcidump);
    uint32_t nelec = qf_fcidump_nelec(fcidump);
    uint32_t n_alpha = nelec / 2;
    uint32_t n_beta  = nelec - n_alpha;
    uint32_t num_modes = 2 * norb;
    uint32_t num_qubits = num_modes;
    std::cout << "✓ Loaded N2 molecule (" << norb << " orbitals, "
              << num_qubits << " qubits, " << nelec << " electrons)" << std::endl;

    // 2. Create and normal order Hamiltonian
    QfFermionOperator* hamiltonian = qf_ferm_op_from_fcidump(fcidump);
    QfFermionOperator* normal_ordered = qf_ferm_op_normal_ordered(hamiltonian, nullptr);

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

    // 5. Calculate sampling weights BEFORE normalization.
    //
    // Order matters: normalization rescales every coefficient to unit magnitude
    // in place, so the original magnitudes must be read out first or they are
    // lost (every |c_j| would read back as exactly 1.0, degenerating each
    // group's weight into a bare term count).
    //
    // Each group's weight is the MEAN absolute coefficient, matching the Python
    // SqDRIFT reference. Using the sum instead would make λ scale with group
    // size, which also skews the evolution time t_k = λτ/N.
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
    // weights above have already captured the original magnitudes. This keeps
    // only each term's phase/sign for the Trotter rotation, so a large
    // coefficient is not counted twice (once in sampling, once in evolution).
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

        // State preparation: spin-up qubits 0..n_alpha-1, spin-down norb..norb+n_beta-1
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

    // 9. Display circuit statistics
    std::cout << "\n📊 Circuit Statistics:" << std::endl;
    std::cout << "  Number of circuits: " << num_circuits << std::endl;
    std::cout << "  Operators per circuit: " << ops_per_circuit << std::endl;
    std::cout << "  Number of qubits: " << num_qubits << std::endl;
    std::cout << "  Time step (τ): " << time_step << std::endl;
    std::cout << "  Trotter order: " << trotter_order << std::endl;

    // Example: Display first circuit info
    std::cout << "\n🔍 Circuit 0 details:" << std::endl;
    std::cout << "  Operators: [";
    for (int i = 0; i < ops_per_circuit; i++) {
        std::cout << operator_sets[0][i];
        if (i < ops_per_circuit - 1) std::cout << ", ";
    }
    std::cout << "]" << std::endl;

    std::cout << "\n Connecting to IBM Quantum Cloud..." << std::endl;

    // 1. Initialize IBM Quantum service using qiskit-cpp
    Qiskit::service::QiskitRuntimeService service;
    std::cout << "✓ Connected to IBM Quantum" << std::endl;

    // 2. Get backend. Selected by name rather than via least_busy(), which can
    // return a mock device whose counts are pure noise and therefore useless
    // for the diagonalization downstream.
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
        for (size_t i = 0; i < ci_string.size(); i++) {
            bitstr += ci_string[i] ? '1' : '0';
        }
        alpha_file << bitstr << "\n";
    }
    alpha_file.close();

    std::cout << "✓ Wrote " << ci_strings.size() 
              << " CI strings to alphadets_from_sqd.txt" << std::endl;
    std::cout << " Ready for SBD diagonalization!" << std::endl;

    // 6. Cleanup    
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
}