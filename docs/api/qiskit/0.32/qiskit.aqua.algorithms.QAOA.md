# QAOA

<span id="undefined" />

`QAOA(operator=None, optimizer=None, p=1, initial_state=None, mixer=None, initial_point=None, gradient=None, expectation=None, include_custom=False, max_evals_grouped=1, aux_operators=None, callback=None, quantum_instance=None)`

Bases: `qiskit.aqua.algorithms.minimum_eigen_solvers.vqe.VQE`

The Quantum Approximate Optimization Algorithm.

[QAOA](https://arxiv.org/abs/1411.4028) is a well-known algorithm for finding approximate solutions to combinatorial-optimization problems. The QAOA implementation in Aqua directly extends [`VQE`](qiskit.aqua.algorithms.VQE#qiskit.aqua.algorithms.VQE "qiskit.aqua.algorithms.VQE") and inherits VQE’s general hybrid optimization structure. However, unlike VQE, which can be configured with arbitrary variational forms, QAOA uses its own fine-tuned variational form, which comprises $p$ parameterized global $x$ rotations and $p$ different parameterizations of the problem hamiltonian. QAOA is thus principally configured by the single integer parameter, *p*, which dictates the depth of the variational form, and thus affects the approximation quality.

An optional array of $2p$ parameter values, as the *initial\_point*, may be provided as the starting **beta** and **gamma** parameters (as identically named in the original [QAOA paper](https://arxiv.org/abs/1411.4028)) for the QAOA variational form.

An operator or a parameterized quantum circuit may optionally also be provided as a custom mixer Hamiltonian. This allows, as discussed in [this paper](https://doi.org/10.1103/PhysRevApplied.5.034007) for quantum annealing, and in [this paper](https://arxiv.org/abs/1709.03489) for QAOA, to run constrained optimization problems where the mixer constrains the evolution to a feasible subspace of the full Hilbert space.

An initial state from Aqua’s [`initial_states`](qiskit.aqua.components.initial_states#module-qiskit.aqua.components.initial_states "qiskit.aqua.components.initial_states") may optionally be supplied.

**Parameters**

*   **operator** (`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]) – Qubit operator
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **p** (`int`) – the integer parameter p as specified in [https://arxiv.org/abs/1411.4028](https://arxiv.org/abs/1411.4028), Has a minimum valid value of 1.
*   **initial\_state** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An optional initial state to prepend the QAOA circuit with
*   **mixer** (`Union`\[`QuantumCircuit`, `OperatorBase`, `LegacyBaseOperator`, `None`]) – the mixer Hamiltonian to evolve with or a custom quantum circuit. Allows support of optimizations in constrained subspaces as per [https://arxiv.org/abs/1709.03489](https://arxiv.org/abs/1709.03489) as well as warm-starting the optimization as introduced in [http://arxiv.org/abs/2009.10095](http://arxiv.org/abs/2009.10095).
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then it will simply compute a random one.
*   **gradient** (`Union`\[`GradientBase`, `Callable`\[\[`Union`\[`ndarray`, `List`]], `List`], `None`]) – An optional gradient operator respectively a gradient function used for optimization.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When None (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory#qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to True (defaults to False).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to True will allow the factory to include the custom Aer pauli expectation.
*   **max\_evals\_grouped** (`int`) – Max number of evaluations performed simultaneously. Signals the given optimizer that more than one set of parameters can be supplied so that potentially the expectation values can be computed in parallel. Typically this is possible when a finite difference gradient is used by the optimizer such that multiple points to compute the gradient can be passed and if computed in parallel improve overall execution time. Ignored if a gradient operator or function is given.
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[`OperatorBase`, `LegacyBaseOperator`, `None`]]]) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation by the optimizer for its current set of parameters as it works towards the minimum. These are: the evaluation count, the optimizer parameters for the variational form, the evaluated mean and the evaluated standard deviation.
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `Backend`, `BaseBackend`, `None`]) – Quantum Instance or Backend

## Methods

|                                                                                                                                                                                                                        |                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`cleanup_parameterized_circuits`](qiskit.aqua.algorithms.QAOA.cleanup_parameterized_circuits#qiskit.aqua.algorithms.QAOA.cleanup_parameterized_circuits "qiskit.aqua.algorithms.QAOA.cleanup_parameterized_circuits") | set parameterized circuits to None                                                                    |
| [`compute_minimum_eigenvalue`](qiskit.aqua.algorithms.QAOA.compute_minimum_eigenvalue#qiskit.aqua.algorithms.QAOA.compute_minimum_eigenvalue "qiskit.aqua.algorithms.QAOA.compute_minimum_eigenvalue")                 | Computes minimum eigenvalue.                                                                          |
| [`construct_circuit`](qiskit.aqua.algorithms.QAOA.construct_circuit#qiskit.aqua.algorithms.QAOA.construct_circuit "qiskit.aqua.algorithms.QAOA.construct_circuit")                                                     | Return the circuits used to compute the expectation value.                                            |
| [`construct_expectation`](qiskit.aqua.algorithms.QAOA.construct_expectation#qiskit.aqua.algorithms.QAOA.construct_expectation "qiskit.aqua.algorithms.QAOA.construct_expectation")                                     | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`find_minimum`](qiskit.aqua.algorithms.QAOA.find_minimum#qiskit.aqua.algorithms.QAOA.find_minimum "qiskit.aqua.algorithms.QAOA.find_minimum")                                                                         | Optimize to find the minimum cost value.                                                              |
| [`get_optimal_circuit`](qiskit.aqua.algorithms.QAOA.get_optimal_circuit#qiskit.aqua.algorithms.QAOA.get_optimal_circuit "qiskit.aqua.algorithms.QAOA.get_optimal_circuit")                                             | Get the circuit with the optimal parameters.                                                          |
| [`get_optimal_cost`](qiskit.aqua.algorithms.QAOA.get_optimal_cost#qiskit.aqua.algorithms.QAOA.get_optimal_cost "qiskit.aqua.algorithms.QAOA.get_optimal_cost")                                                         | Get the minimal cost or energy found by the VQE.                                                      |
| [`get_optimal_vector`](qiskit.aqua.algorithms.QAOA.get_optimal_vector#qiskit.aqua.algorithms.QAOA.get_optimal_vector "qiskit.aqua.algorithms.QAOA.get_optimal_vector")                                                 | Get the simulation outcome of the optimal circuit.                                                    |
| [`get_prob_vector_for_params`](qiskit.aqua.algorithms.QAOA.get_prob_vector_for_params#qiskit.aqua.algorithms.QAOA.get_prob_vector_for_params "qiskit.aqua.algorithms.QAOA.get_prob_vector_for_params")                 | Helper function to get probability vectors for a set of params                                        |
| [`get_probabilities_for_counts`](qiskit.aqua.algorithms.QAOA.get_probabilities_for_counts#qiskit.aqua.algorithms.QAOA.get_probabilities_for_counts "qiskit.aqua.algorithms.QAOA.get_probabilities_for_counts")         | get probabilities for counts                                                                          |
| [`print_settings`](qiskit.aqua.algorithms.QAOA.print_settings#qiskit.aqua.algorithms.QAOA.print_settings "qiskit.aqua.algorithms.QAOA.print_settings")                                                                 | Preparing the setting of VQE into a string.                                                           |
| [`run`](qiskit.aqua.algorithms.QAOA.run#qiskit.aqua.algorithms.QAOA.run "qiskit.aqua.algorithms.QAOA.run")                                                                                                             | Execute the algorithm with selected backend.                                                          |
| [`set_backend`](qiskit.aqua.algorithms.QAOA.set_backend#qiskit.aqua.algorithms.QAOA.set_backend "qiskit.aqua.algorithms.QAOA.set_backend")                                                                             | Sets backend with configuration.                                                                      |
| [`supports_aux_operators`](qiskit.aqua.algorithms.QAOA.supports_aux_operators#qiskit.aqua.algorithms.QAOA.supports_aux_operators "qiskit.aqua.algorithms.QAOA.supports_aux_operators")                                 | Whether computing the expectation value of auxiliary operators is supported.                          |

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

### initial\_state

Returns: Returns the initial state.

**Return type**

`Union`\[`QuantumCircuit`, `InitialState`, `None`]

<span id="undefined" />

### mixer

Returns: Returns the mixer.

**Return type**

`Union`\[`QuantumCircuit`, `OperatorBase`, `LegacyBaseOperator`]

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
