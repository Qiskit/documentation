---
title: QEomVQE
description: API reference for qiskit.chemistry.algorithms.QEomVQE
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.QEomVQE
---

# qiskit.chemistry.algorithms.QEomVQE

<span id="qiskit.chemistry.algorithms.QEomVQE" />

`QEomVQE(operator, var_form, optimizer, num_orbitals, num_particles, initial_point=None, max_evals_grouped=1, callback=None, qubit_mapping='parity', two_qubit_reduction=True, is_eom_matrix_symmetric=True, active_occupied=None, active_unoccupied=None, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None, quantum_instance=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/eigen_solvers/q_eom_vqe.py "view source code")

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

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.QEomVQE.__init__" />

`__init__(operator, var_form, optimizer, num_orbitals, num_particles, initial_point=None, max_evals_grouped=1, callback=None, qubit_mapping='parity', two_qubit_reduction=True, is_eom_matrix_symmetric=True, active_occupied=None, active_unoccupied=None, se_list=None, de_list=None, z2_symmetries=None, untapered_op=None, aux_operators=None, quantum_instance=None)`

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

|                                                                                                                                                                                  |                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.QEomVQE.__init__ "qiskit.chemistry.algorithms.QEomVQE.__init__")(operator, var\_form, optimizer, …)                                    | **type operator**`LegacyBaseOperator`                                                                 |
| [`cleanup_parameterized_circuits`](#qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits")()   | set parameterized circuits to None                                                                    |
| [`compute_minimum_eigenvalue`](#qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue "qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                                          |
| [`construct_circuit`](#qiskit.chemistry.algorithms.QEomVQE.construct_circuit "qiskit.chemistry.algorithms.QEomVQE.construct_circuit")(parameter)                                 | Return the circuits used to compute the expectation value.                                            |
| [`construct_expectation`](#qiskit.chemistry.algorithms.QEomVQE.construct_expectation "qiskit.chemistry.algorithms.QEomVQE.construct_expectation")(parameter)                     | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`find_minimum`](#qiskit.chemistry.algorithms.QEomVQE.find_minimum "qiskit.chemistry.algorithms.QEomVQE.find_minimum")(\[initial\_point, var\_form, …])                          | Optimize to find the minimum cost value.                                                              |
| [`get_optimal_circuit`](#qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit "qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit")()                                    | Get the circuit with the optimal parameters.                                                          |
| [`get_optimal_cost`](#qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost "qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost")()                                             | Get the minimal cost or energy found by the VQE.                                                      |
| [`get_optimal_vector`](#qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector "qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector")()                                       | Get the simulation outcome of the optimal circuit.                                                    |
| [`get_prob_vector_for_params`](#qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params "qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params")(…\[, …])        | Helper function to get probability vectors for a set of params                                        |
| [`get_probabilities_for_counts`](#qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts "qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts")(counts)   | get probabilities for counts                                                                          |
| [`print_settings`](#qiskit.chemistry.algorithms.QEomVQE.print_settings "qiskit.chemistry.algorithms.QEomVQE.print_settings")()                                                   | Preparing the setting of VQE into a string.                                                           |
| [`run`](#qiskit.chemistry.algorithms.QEomVQE.run "qiskit.chemistry.algorithms.QEomVQE.run")(\[quantum\_instance])                                                                | Execute the algorithm with selected backend.                                                          |
| [`set_backend`](#qiskit.chemistry.algorithms.QEomVQE.set_backend "qiskit.chemistry.algorithms.QEomVQE.set_backend")(backend, \*\*kwargs)                                         | Sets backend with configuration.                                                                      |
| [`supports_aux_operators`](#qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators "qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported.                          |

## Attributes

|                                                                                                                                    |                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`aux_operators`](#qiskit.chemistry.algorithms.QEomVQE.aux_operators "qiskit.chemistry.algorithms.QEomVQE.aux_operators")          | Returns aux operators                                                                              |
| [`backend`](#qiskit.chemistry.algorithms.QEomVQE.backend "qiskit.chemistry.algorithms.QEomVQE.backend")                            | Returns backend.                                                                                   |
| [`expectation`](#qiskit.chemistry.algorithms.QEomVQE.expectation "qiskit.chemistry.algorithms.QEomVQE.expectation")                | The expectation value algorithm used to construct the expectation measurement from the observable. |
| [`initial_point`](#qiskit.chemistry.algorithms.QEomVQE.initial_point "qiskit.chemistry.algorithms.QEomVQE.initial_point")          | Returns initial point                                                                              |
| [`operator`](#qiskit.chemistry.algorithms.QEomVQE.operator "qiskit.chemistry.algorithms.QEomVQE.operator")                         | Returns operator                                                                                   |
| [`optimal_params`](#qiskit.chemistry.algorithms.QEomVQE.optimal_params "qiskit.chemistry.algorithms.QEomVQE.optimal_params")       | The optimal parameters for the variational form.                                                   |
| [`optimizer`](#qiskit.chemistry.algorithms.QEomVQE.optimizer "qiskit.chemistry.algorithms.QEomVQE.optimizer")                      | Returns optimizer                                                                                  |
| [`quantum_instance`](#qiskit.chemistry.algorithms.QEomVQE.quantum_instance "qiskit.chemistry.algorithms.QEomVQE.quantum_instance") | Returns quantum instance.                                                                          |
| [`random`](#qiskit.chemistry.algorithms.QEomVQE.random "qiskit.chemistry.algorithms.QEomVQE.random")                               | Return a numpy random.                                                                             |
| [`setting`](#qiskit.chemistry.algorithms.QEomVQE.setting "qiskit.chemistry.algorithms.QEomVQE.setting")                            | Prepare the setting of VQE as a string.                                                            |
| [`var_form`](#qiskit.chemistry.algorithms.QEomVQE.var_form "qiskit.chemistry.algorithms.QEomVQE.var_form")                         | Returns variational form                                                                           |

### aux\_operators

<span id="qiskit.chemistry.algorithms.QEomVQE.aux_operators" />

`property aux_operators`

Returns aux operators

**Return type**

`Optional`\[`List`\[`Optional`\[`OperatorBase`]]]

### backend

<span id="qiskit.chemistry.algorithms.QEomVQE.backend" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

### cleanup\_parameterized\_circuits

<span id="qiskit.chemistry.algorithms.QEomVQE.cleanup_parameterized_circuits" />

`cleanup_parameterized_circuits()`

set parameterized circuits to None

### compute\_minimum\_eigenvalue

<span id="qiskit.chemistry.algorithms.QEomVQE.compute_minimum_eigenvalue" />

`compute_minimum_eigenvalue(operator=None, aux_operators=None)`

Computes minimum eigenvalue. Operator and aux\_operators can be supplied here and if not None will override any already set into algorithm so it can be reused with different operators. While an operator is required by algorithms, aux\_operators are optional. To ‘remove’ a previous aux\_operators array use an empty list here.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – If not None replaces operator in algorithm
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – If not None replaces aux\_operators in algorithm

**Return type**

`MinimumEigensolverResult`

**Returns**

MinimumEigensolverResult

### construct\_circuit

<span id="qiskit.chemistry.algorithms.QEomVQE.construct_circuit" />

`construct_circuit(parameter)`

Return the circuits used to compute the expectation value.

**Parameters**

**parameter** (`Union`\[`List`\[`float`], `List`\[`Parameter`], `ndarray`]) – Parameters for the ansatz circuit.

**Return type**

`List`\[`QuantumCircuit`]

**Returns**

A list of the circuits used to compute the expectation value.

### construct\_expectation

<span id="qiskit.chemistry.algorithms.QEomVQE.construct_expectation" />

`construct_expectation(parameter)`

Generate the ansatz circuit and expectation value measurement, and return their runnable composition.

**Parameters**

**parameter** (`Union`\[`List`\[`float`], `List`\[`Parameter`], `ndarray`]) – Parameters for the ansatz circuit.

**Return type**

`OperatorBase`

**Returns**

The Operator equalling the measurement of the ansatz `StateFn` by the Observable’s expectation `StateFn`.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If no operator has been provided.

### expectation

<span id="qiskit.chemistry.algorithms.QEomVQE.expectation" />

`property expectation`

The expectation value algorithm used to construct the expectation measurement from the observable.

**Return type**

`ExpectationBase`

### find\_minimum

<span id="qiskit.chemistry.algorithms.QEomVQE.find_minimum" />

`find_minimum(initial_point=None, var_form=None, cost_fn=None, optimizer=None, gradient_fn=None)`

Optimize to find the minimum cost value.

**Parameters**

*   **initial\_point** (`Optional`\[`ndarray`]) – If not None will be used instead of any initial point supplied via constructor. If None and None was supplied to constructor then a random point will be used if the optimizer requires an initial point.
*   **var\_form** (`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]) – If not None will be used instead of any variational form supplied via constructor.
*   **cost\_fn** (`Optional`\[`Callable`]) – If not None will be used instead of any cost\_fn supplied via constructor.
*   **optimizer** (`Optional`\[`Optimizer`]) – If not None will be used instead of any optimizer supplied via constructor.
*   **gradient\_fn** (`Optional`\[`Callable`]) – Optional gradient function for optimizer

**Returns**

Optimized variational parameters, and corresponding minimum cost value.

**Return type**

dict

**Raises**

**ValueError** – invalid input

### get\_optimal\_circuit

<span id="qiskit.chemistry.algorithms.QEomVQE.get_optimal_circuit" />

`get_optimal_circuit()`

Get the circuit with the optimal parameters.

**Return type**

`QuantumCircuit`

### get\_optimal\_cost

<span id="qiskit.chemistry.algorithms.QEomVQE.get_optimal_cost" />

`get_optimal_cost()`

Get the minimal cost or energy found by the VQE.

**Return type**

`float`

### get\_optimal\_vector

<span id="qiskit.chemistry.algorithms.QEomVQE.get_optimal_vector" />

`get_optimal_vector()`

Get the simulation outcome of the optimal circuit.

**Return type**

`Union`\[`List`\[`float`], `Dict`\[`str`, `int`]]

### get\_prob\_vector\_for\_params

<span id="qiskit.chemistry.algorithms.QEomVQE.get_prob_vector_for_params" />

`get_prob_vector_for_params(construct_circuit_fn, params_s, quantum_instance, construct_circuit_args=None)`

Helper function to get probability vectors for a set of params

### get\_probabilities\_for\_counts

<span id="qiskit.chemistry.algorithms.QEomVQE.get_probabilities_for_counts" />

`get_probabilities_for_counts(counts)`

get probabilities for counts

### initial\_point

<span id="qiskit.chemistry.algorithms.QEomVQE.initial_point" />

`property initial_point`

Returns initial point

**Return type**

`Optional`\[`ndarray`]

### operator

<span id="qiskit.chemistry.algorithms.QEomVQE.operator" />

`property operator`

Returns operator

**Return type**

`Optional`\[`OperatorBase`]

### optimal\_params

<span id="qiskit.chemistry.algorithms.QEomVQE.optimal_params" />

`property optimal_params`

The optimal parameters for the variational form.

**Return type**

`List`\[`float`]

### optimizer

<span id="qiskit.chemistry.algorithms.QEomVQE.optimizer" />

`property optimizer`

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

### print\_settings

<span id="qiskit.chemistry.algorithms.QEomVQE.print_settings" />

`print_settings()`

Preparing the setting of VQE into a string.

**Returns**

the formatted setting of VQE

**Return type**

str

### quantum\_instance

<span id="qiskit.chemistry.algorithms.QEomVQE.quantum_instance" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

### random

<span id="qiskit.chemistry.algorithms.QEomVQE.random" />

`property random`

Return a numpy random.

### run

<span id="qiskit.chemistry.algorithms.QEomVQE.run" />

`run(quantum_instance=None, **kwargs)`

Execute the algorithm with selected backend.

**Parameters**

*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – the experimental setting.
*   **kwargs** (*dict*) – kwargs

**Returns**

results of an algorithm.

**Return type**

dict

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

### set\_backend

<span id="qiskit.chemistry.algorithms.QEomVQE.set_backend" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

### setting

<span id="qiskit.chemistry.algorithms.QEomVQE.setting" />

`property setting`

Prepare the setting of VQE as a string.

### supports\_aux\_operators

<span id="qiskit.chemistry.algorithms.QEomVQE.supports_aux_operators" />

`classmethod supports_aux_operators()`

Whether computing the expectation value of auxiliary operators is supported.

If the minimum eigensolver computes an eigenstate of the main operator then it can compute the expectation value of the aux\_operators for that state. Otherwise they will be ignored.

**Return type**

`bool`

**Returns**

True if aux\_operator expectations can be evaluated, False otherwise

### var\_form

<span id="qiskit.chemistry.algorithms.QEomVQE.var_form" />

`property var_form`

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]

