---
title: VQEAdapt
description: API reference for qiskit.chemistry.algorithms.VQEAdapt
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.VQEAdapt
---

# VQEAdapt

<span id="qiskit.chemistry.algorithms.VQEAdapt" />

`VQEAdapt(operator, var_form_base, optimizer, initial_point=None, excitation_pool=None, threshold=1e-05, delta=1, max_iterations=None, max_evals_grouped=1, aux_operators=None, quantum_instance=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/algorithms/minimum_eigen_solvers/vqe_adapt.py "view source code")

Bases: `qiskit.aqua.algorithms.vq_algorithm.VQAlgorithm`

DEPRECATED. The Adaptive VQE algorithm.

See [https://arxiv.org/abs/1812.11173](https://arxiv.org/abs/1812.11173)

**Parameters**

*   **operator** (`LegacyBaseOperator`) – Qubit operator
*   **var\_form\_base** (`VariationalForm`) – base parameterized variational form
*   **optimizer** (`Optimizer`) – the classical optimizer algorithm
*   **initial\_point** (`Optional`\[`ndarray`]) – optimizer initial point
*   **excitation\_pool** (`Optional`\[`List`\[`WeightedPauliOperator`]]) – list of excitation operators
*   **threshold** (`float`) – absolute threshold value for gradients, has a min. value of 1e-15.
*   **delta** (`float`) – finite difference step size for gradient computation, has a min. value of 1e-5.
*   **max\_iterations** (`Optional`\[`int`]) – maximum number of macro iterations of the VQEAdapt algorithm.
*   **max\_evals\_grouped** (`int`) – max number of evaluations performed simultaneously
*   **aux\_operators** (`Optional`\[`List`\[`LegacyBaseOperator`]]) – Auxiliary operators to be evaluated at each eigenvalue
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

**Raises**

*   **ValueError** – if var\_form\_base is not an instance of UCCSD.
*   **See also** – qiskit/chemistry/components/variational\_forms/uccsd\_adapt.py

## Methods

### cleanup\_parameterized\_circuits

<span id="qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits" />

`VQEAdapt.cleanup_parameterized_circuits()`

set parameterized circuits to None

### find\_minimum

<span id="qiskit.chemistry.algorithms.VQEAdapt.find_minimum" />

`VQEAdapt.find_minimum(initial_point=None, var_form=None, cost_fn=None, optimizer=None, gradient_fn=None)`

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

<span id="qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit" />

`VQEAdapt.get_optimal_circuit()`

get optimal circuit

### get\_optimal\_cost

<span id="qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost" />

`VQEAdapt.get_optimal_cost()`

get optimal cost

### get\_optimal\_vector

<span id="qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector" />

`VQEAdapt.get_optimal_vector()`

get optimal vector

### get\_prob\_vector\_for\_params

<span id="qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params" />

`VQEAdapt.get_prob_vector_for_params(construct_circuit_fn, params_s, quantum_instance, construct_circuit_args=None)`

Helper function to get probability vectors for a set of params

### get\_probabilities\_for\_counts

<span id="qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts" />

`VQEAdapt.get_probabilities_for_counts(counts)`

get probabilities for counts

### run

<span id="qiskit.chemistry.algorithms.VQEAdapt.run" />

`VQEAdapt.run(quantum_instance=None, **kwargs)`

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

<span id="qiskit.chemistry.algorithms.VQEAdapt.set_backend" />

`VQEAdapt.set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

## Attributes

<span id="qiskit.chemistry.algorithms.VQEAdapt.backend" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="qiskit.chemistry.algorithms.VQEAdapt.initial_point" />

### initial\_point

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="qiskit.chemistry.algorithms.VQEAdapt.optimal_params" />

### optimal\_params

<span id="qiskit.chemistry.algorithms.VQEAdapt.optimizer" />

### optimizer

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

<span id="qiskit.chemistry.algorithms.VQEAdapt.quantum_instance" />

### quantum\_instance

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="qiskit.chemistry.algorithms.VQEAdapt.random" />

### random

Return a numpy random.

<span id="qiskit.chemistry.algorithms.VQEAdapt.var_form" />

### var\_form

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]

