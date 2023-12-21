---
title: QEomVQE
description: API reference for qiskit.chemistry.algorithms.QEomVQE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.QEomVQE
---

# QEomVQE

<span id="qiskit.chemistry.algorithms.QEomVQE" />

`QEomVQE(operator, var_form, optimizer, num_orbitals, num_particles, initial_point=None, max_evals_grouped=1, callback=None, qubit_mapping='parity', two_qubit_reduction=True, is_eom_matrix_symmetric=True, active_occupied=None, active_unoccupied=None, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None, quantum_instance=None)`

QEomVQE algorithm

**Parameters**

*   **operator** ([`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")) – qubit operator
*   **var\_form** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")]) – parameterized variational form.
*   **optimizer** ([`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.optimizer.Optimizer")) – the classical optimization algorithm.
*   **num\_orbitals** (`int`) – total number of spin orbitals, has a min. value of 1.
*   **num\_particles** (`Union`\[`List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.
*   **initial\_point** (`Optional`\[`ndarray`]) – optimizer initial point, 1-D vector
*   **max\_evals\_grouped** (`int`) – max number of evaluations performed simultaneously
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`], `None`]]) – a callback that can access the intermediate data during the optimization. Internally, four arguments are provided as follows the index of evaluation, parameters of variational form, evaluated mean, evaluated standard deviation.
*   **qubit\_mapping** (`str`) – qubit mapping type
*   **two\_qubit\_reduction** (`bool`) – two qubit reduction is applied or not
*   **is\_eom\_matrix\_symmetric** (`bool`) – is EoM matrix symmetric
*   **active\_occupied** (`Optional`\[`List`\[`int`]]) – list of occupied orbitals to include, indices are 0 to n where n is num particles // 2
*   **active\_unoccupied** (`Optional`\[`List`\[`int`]]) – list of unoccupied orbitals to include, indices are 0 to m where m is (num\_orbitals - num particles) // 2
*   **se\_list** (`Optional`\[`List`\[`List`\[`int`]]]) – single excitation list, overwrite the setting in active space
*   **de\_list** (`Optional`\[`List`\[`List`\[`int`]]]) – double excitation list, overwrite the setting in active space
*   **z2\_symmetries** (`Optional`\[[`Z2Symmetries`](qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.weighted_pauli_operator.Z2Symmetries")]) – represent the Z2 symmetries
*   **untapered\_op** (`Optional`\[[`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")]) – if the operator is tapered, we need untapered operator during building element of EoM matrix
*   **aux\_operators** (`Optional`\[`List`\[[`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")]]) – Auxiliary operators to be evaluated at each eigenvalue
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

**Raises**

**ValueError** – invalid parameter

## Attributes

|                                                                                                                                           |                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`QEomVQE.aux_operators`](qiskit.chemistry.algorithms.QEomVQE.aux_operators "qiskit.chemistry.algorithms.QEomVQE.aux_operators")          | Returns aux operators                                                                              |
| [`QEomVQE.backend`](qiskit.chemistry.algorithms.QEomVQE.backend "qiskit.chemistry.algorithms.QEomVQE.backend")                            | Returns backend.                                                                                   |
| [`QEomVQE.expectation`](qiskit.chemistry.algorithms.QEomVQE.expectation "qiskit.chemistry.algorithms.QEomVQE.expectation")                | The expectation value algorithm used to construct the expectation measurement from the observable. |
| [`QEomVQE.initial_point`](qiskit.chemistry.algorithms.QEomVQE.initial_point "qiskit.chemistry.algorithms.QEomVQE.initial_point")          | Returns initial point                                                                              |
| [`QEomVQE.operator`](qiskit.chemistry.algorithms.QEomVQE.operator "qiskit.chemistry.algorithms.QEomVQE.operator")                         | Returns operator                                                                                   |
| [`QEomVQE.optimal_params`](qiskit.chemistry.algorithms.QEomVQE.optimal_params "qiskit.chemistry.algorithms.QEomVQE.optimal_params")       | The optimal parameters for the variational form.                                                   |
| [`QEomVQE.optimizer`](qiskit.chemistry.algorithms.QEomVQE.optimizer "qiskit.chemistry.algorithms.QEomVQE.optimizer")                      | Returns optimizer                                                                                  |
| [`QEomVQE.quantum_instance`](qiskit.chemistry.algorithms.QEomVQE.quantum_instance "qiskit.chemistry.algorithms.QEomVQE.quantum_instance") | Returns quantum instance.                                                                          |
| [`QEomVQE.random`](qiskit.chemistry.algorithms.QEomVQE.random "qiskit.chemistry.algorithms.QEomVQE.random")                               | Return a numpy random.                                                                             |
| [`QEomVQE.setting`](qiskit.chemistry.algorithms.QEomVQE.setting "qiskit.chemistry.algorithms.QEomVQE.setting")                            | Prepare the setting of VQE as a string.                                                            |
| [`QEomVQE.var_form`](qiskit.chemistry.algorithms.QEomVQE.var_form "qiskit.chemistry.algorithms.QEomVQE.var_form")                         | Returns variational form                                                                           |

## Methods

|                                                                                                                                                                                       |                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`QEomVQE.cleanup_parameterized_circuits`](qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits")() | set parameterized circuits to None                                                                    |
| [`QEomVQE.compute_minimum_eigenvalue`](qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue "qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue")(\[…])         | Computes minimum eigenvalue.                                                                          |
| [`QEomVQE.construct_circuit`](qiskit.chemistry.algorithms.QEomVQE.construct_circuit "qiskit.chemistry.algorithms.QEomVQE.construct_circuit")(parameter)                               | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`QEomVQE.find_minimum`](qiskit.chemistry.algorithms.QEomVQE.find_minimum "qiskit.chemistry.algorithms.QEomVQE.find_minimum")(\[initial\_point, …])                                   | Optimize to find the minimum cost value.                                                              |
| [`QEomVQE.get_optimal_circuit`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit "qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit")()                                  | Get the circuit with the optimal parameters.                                                          |
| [`QEomVQE.get_optimal_cost`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost "qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost")()                                           | Get the minimal cost or energy found by the VQE.                                                      |
| [`QEomVQE.get_optimal_vector`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector "qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector")()                                     | Get the simulation outcome of the optimal circuit.                                                    |
| [`QEomVQE.get_prob_vector_for_params`](qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params "qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params")(…\[, …])      | Helper function to get probability vectors for a set of params                                        |
| [`QEomVQE.get_probabilities_for_counts`](qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts "qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts")(counts) | get probabilities for counts                                                                          |
| [`QEomVQE.print_settings`](qiskit.chemistry.algorithms.QEomVQE.print_settings "qiskit.chemistry.algorithms.QEomVQE.print_settings")()                                                 | Preparing the setting of VQE into a string.                                                           |
| [`QEomVQE.run`](qiskit.chemistry.algorithms.QEomVQE.run "qiskit.chemistry.algorithms.QEomVQE.run")(\[quantum\_instance])                                                              | Execute the algorithm with selected backend.                                                          |
| [`QEomVQE.set_backend`](qiskit.chemistry.algorithms.QEomVQE.set_backend "qiskit.chemistry.algorithms.QEomVQE.set_backend")(backend, \*\*kwargs)                                       | Sets backend with configuration.                                                                      |
| [`QEomVQE.supports_aux_operators`](qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators "qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators")()                         | Whether computing the expectation value of auxiliary operators is supported.                          |

