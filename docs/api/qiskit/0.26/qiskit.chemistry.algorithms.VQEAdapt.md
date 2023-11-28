# qiskit.chemistry.algorithms.VQEAdapt

<span id="undefined" />

`VQEAdapt(operator, var_form_base, optimizer, initial_point=None, excitation_pool=None, threshold=1e-05, delta=1, max_iterations=None, max_evals_grouped=1, aux_operators=None, quantum_instance=None)`

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

<span id="undefined" />

`__init__(operator, var_form_base, optimizer, initial_point=None, excitation_pool=None, threshold=1e-05, delta=1, max_iterations=None, max_evals_grouped=1, aux_operators=None, quantum_instance=None)`

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

|                                                                                                                                                                                  |                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.VQEAdapt.__init__ "qiskit.chemistry.algorithms.VQEAdapt.__init__")(operator, var\_form\_base, optimizer)                               | **type operator**`LegacyBaseOperator`                          |
| [`cleanup_parameterized_circuits`](#qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits")() | set parameterized circuits to None                             |
| [`find_minimum`](#qiskit.chemistry.algorithms.VQEAdapt.find_minimum "qiskit.chemistry.algorithms.VQEAdapt.find_minimum")(\[initial\_point, var\_form, …])                        | Optimize to find the minimum cost value.                       |
| [`get_optimal_circuit`](#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit")()                                  | get optimal circuit                                            |
| [`get_optimal_cost`](#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost")()                                           | get optimal cost                                               |
| [`get_optimal_vector`](#qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector")()                                     | get optimal vector                                             |
| [`get_prob_vector_for_params`](#qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params "qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params")(…\[, …])      | Helper function to get probability vectors for a set of params |
| [`get_probabilities_for_counts`](#qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts "qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts")(counts) | get probabilities for counts                                   |
| [`run`](#qiskit.chemistry.algorithms.VQEAdapt.run "qiskit.chemistry.algorithms.VQEAdapt.run")(\[quantum\_instance])                                                              | Execute the algorithm with selected backend.                   |
| [`set_backend`](#qiskit.chemistry.algorithms.VQEAdapt.set_backend "qiskit.chemistry.algorithms.VQEAdapt.set_backend")(backend, \*\*kwargs)                                       | Sets backend with configuration.                               |

## Attributes

|                                                                                                                                      |                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| [`backend`](#qiskit.chemistry.algorithms.VQEAdapt.backend "qiskit.chemistry.algorithms.VQEAdapt.backend")                            | Returns backend.           |
| [`initial_point`](#qiskit.chemistry.algorithms.VQEAdapt.initial_point "qiskit.chemistry.algorithms.VQEAdapt.initial_point")          | Returns initial point      |
| [`optimal_params`](#qiskit.chemistry.algorithms.VQEAdapt.optimal_params "qiskit.chemistry.algorithms.VQEAdapt.optimal_params")       | returns optimal parameters |
| [`optimizer`](#qiskit.chemistry.algorithms.VQEAdapt.optimizer "qiskit.chemistry.algorithms.VQEAdapt.optimizer")                      | Returns optimizer          |
| [`quantum_instance`](#qiskit.chemistry.algorithms.VQEAdapt.quantum_instance "qiskit.chemistry.algorithms.VQEAdapt.quantum_instance") | Returns quantum instance.  |
| [`random`](#qiskit.chemistry.algorithms.VQEAdapt.random "qiskit.chemistry.algorithms.VQEAdapt.random")                               | Return a numpy random.     |
| [`var_form`](#qiskit.chemistry.algorithms.VQEAdapt.var_form "qiskit.chemistry.algorithms.VQEAdapt.var_form")                         | Returns variational form   |

<span id="undefined" />

`property backend`

Returns backend.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

<span id="undefined" />

`cleanup_parameterized_circuits()`

set parameterized circuits to None

<span id="undefined" />

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

<span id="undefined" />

`get_optimal_circuit()`

get optimal circuit

<span id="undefined" />

`get_optimal_cost()`

get optimal cost

<span id="undefined" />

`get_optimal_vector()`

get optimal vector

<span id="undefined" />

`get_prob_vector_for_params(construct_circuit_fn, params_s, quantum_instance, construct_circuit_args=None)`

Helper function to get probability vectors for a set of params

<span id="undefined" />

`get_probabilities_for_counts(counts)`

get probabilities for counts

<span id="undefined" />

`property initial_point`

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

`property optimal_params`

returns optimal parameters

<span id="undefined" />

`property optimizer`

Returns optimizer

**Return type**

`Optional`\[`Optimizer`]

<span id="undefined" />

`property quantum_instance`

Returns quantum instance.

**Return type**

`Optional`\[`QuantumInstance`]

<span id="undefined" />

`property random`

Return a numpy random.

<span id="undefined" />

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

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – If a quantum instance or backend has not been provided

<span id="undefined" />

`set_backend(backend, **kwargs)`

Sets backend with configuration.

**Return type**

`None`

<span id="undefined" />

`property var_form`

Returns variational form

**Return type**

`Union`\[`QuantumCircuit`, `VariationalForm`, `None`]
