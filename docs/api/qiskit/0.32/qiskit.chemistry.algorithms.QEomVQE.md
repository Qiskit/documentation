# QEomVQE

<span id="undefined" />

`QEomVQE(operator, var_form, optimizer, num_orbitals, num_particles, initial_point=None, max_evals_grouped=1, callback=None, qubit_mapping='parity', two_qubit_reduction=True, is_eom_matrix_symmetric=True, active_occupied=None, active_unoccupied=None, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.minimum_eigen_solvers.vqe.VQE`

QEomVQE algorithm

**Parameters**

*   **operator** (`LegacyBaseOperator`) – qubit operator
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`]) – parameterized variational form.
*   **optimizer** (`Optimizer`) – the classical optimization algorithm.
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
*   **z2\_symmetries** (`Optional`\[`Z2Symmetries`]) – represent the Z2 symmetries
*   **untapered\_op** (`Optional`\[`LegacyBaseOperator`]) – if the operator is tapered, we need untapered operator during building element of EoM matrix
*   **aux\_operators** (`Optional`\[`List`\[`LegacyBaseOperator`]]) – Auxiliary operators to be evaluated at each eigenvalue
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

**ValueError** – invalid parameter

## Methods

|                                                                                                                                                                                                                                                |                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`cleanup_parameterized_circuits`](qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits#qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits") | set parameterized circuits to None                                                                    |
| [`compute_minimum_eigenvalue`](qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue#qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue "qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue")                 | Computes minimum eigenvalue.                                                                          |
| [`construct_circuit`](qiskit.chemistry.algorithms.QEomVQE.construct_circuit#qiskit.chemistry.algorithms.QEomVQE.construct_circuit "qiskit.chemistry.algorithms.QEomVQE.construct_circuit")                                                     | Return the circuits used to compute the expectation value.                                            |
| [`construct_expectation`](qiskit.chemistry.algorithms.QEomVQE.construct_expectation#qiskit.chemistry.algorithms.QEomVQE.construct_expectation "qiskit.chemistry.algorithms.QEomVQE.construct_expectation")                                     | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`find_minimum`](qiskit.chemistry.algorithms.QEomVQE.find_minimum#qiskit.chemistry.algorithms.QEomVQE.find_minimum "qiskit.chemistry.algorithms.QEomVQE.find_minimum")                                                                         | Optimize to find the minimum cost value.                                                              |
| [`get_optimal_circuit`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit#qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit "qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit")                                             | Get the circuit with the optimal parameters.                                                          |
| [`get_optimal_cost`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost#qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost "qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost")                                                         | Get the minimal cost or energy found by the VQE.                                                      |
| [`get_optimal_vector`](qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector#qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector "qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector")                                                 | Get the simulation outcome of the optimal circuit.                                                    |
| [`get_prob_vector_for_params`](qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params#qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params "qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params")                 | Helper function to get probability vectors for a set of params                                        |
| [`get_probabilities_for_counts`](qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts#qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts "qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts")         | get probabilities for counts                                                                          |
| [`print_settings`](qiskit.chemistry.algorithms.QEomVQE.print_settings#qiskit.chemistry.algorithms.QEomVQE.print_settings "qiskit.chemistry.algorithms.QEomVQE.print_settings")                                                                 | Preparing the setting of VQE into a string.                                                           |
| [`run`](qiskit.chemistry.algorithms.QEomVQE.run#qiskit.chemistry.algorithms.QEomVQE.run "qiskit.chemistry.algorithms.QEomVQE.run")                                                                                                             | Execute the algorithm with selected backend.                                                          |
| [`set_backend`](qiskit.chemistry.algorithms.QEomVQE.set_backend#qiskit.chemistry.algorithms.QEomVQE.set_backend "qiskit.chemistry.algorithms.QEomVQE.set_backend")                                                                             | Sets backend with configuration.                                                                      |
| [`supports_aux_operators`](qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators#qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators "qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators")                                 | Whether computing the expectation value of auxiliary operators is supported.                          |

## Attributes

<span id="undefined" />

### aux\_operators

Returns aux operators

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### expectation

The expectation value algorithm used to construct the expectation measurement from the observable.

**Return type**

`ExpectationBase`

<span id="undefined" />

### initial\_point

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### operator

Returns operator

**Return type**

`Optional`\[`OperatorBase`]

<span id="undefined" />

### optimal\_params

The optimal parameters for the variational form.

**Return type**

`List`\[`float`]

<span id="undefined" />

### optimizer

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

<span id="undefined" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

### random

Return a numpy random.

<span id="undefined" />

### setting

Prepare the setting of VQE as a string.

<span id="undefined" />

### var\_form

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]
