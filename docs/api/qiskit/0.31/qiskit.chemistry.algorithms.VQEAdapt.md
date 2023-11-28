# VQEAdapt

<span id="undefined" />

`VQEAdapt(operator, var_form_base, optimizer, initial_point=None, excitation_pool=None, threshold=1e-05, delta=1, max_iterations=None, max_evals_grouped=1, aux_operators=None, quantum_instance=None)`

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

|                                                                                                                                                                                                                                                   |                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`cleanup_parameterized_circuits`](qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits#qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits") | set parameterized circuits to None                             |
| [`find_minimum`](qiskit.chemistry.algorithms.VQEAdapt.find_minimum#qiskit.chemistry.algorithms.VQEAdapt.find_minimum "qiskit.chemistry.algorithms.VQEAdapt.find_minimum")                                                                         | Optimize to find the minimum cost value.                       |
| [`get_optimal_circuit`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit")                                             | get optimal circuit                                            |
| [`get_optimal_cost`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost")                                                         | get optimal cost                                               |
| [`get_optimal_vector`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector")                                                 | get optimal vector                                             |
| [`get_prob_vector_for_params`](qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params#qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params "qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params")                 | Helper function to get probability vectors for a set of params |
| [`get_probabilities_for_counts`](qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts#qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts "qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts")         | get probabilities for counts                                   |
| [`run`](qiskit.chemistry.algorithms.VQEAdapt.run#qiskit.chemistry.algorithms.VQEAdapt.run "qiskit.chemistry.algorithms.VQEAdapt.run")                                                                                                             | Execute the algorithm with selected backend.                   |
| [`set_backend`](qiskit.chemistry.algorithms.VQEAdapt.set_backend#qiskit.chemistry.algorithms.VQEAdapt.set_backend "qiskit.chemistry.algorithms.VQEAdapt.set_backend")                                                                             | Sets backend with configuration.                               |

## Attributes

<span id="undefined" />

### backend

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

### initial\_point

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### optimal\_params

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

### var\_form

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]
