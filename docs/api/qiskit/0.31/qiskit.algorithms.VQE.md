# VQE

<span id="undefined" />

`VQE(ansatz=None, optimizer=None, initial_point=None, gradient=None, expectation=None, include_custom=False, max_evals_grouped=1, callback=None, quantum_instance=None, sort_parameters_by_name=None)`

Bases: `qiskit.algorithms.variational_algorithm.VariationalAlgorithm`, `qiskit.algorithms.minimum_eigen_solvers.minimum_eigen_solver.MinimumEigensolver`

The Variational Quantum Eigensolver algorithm.

[VQE](https://arxiv.org/abs/1304.3061) is a quantum algorithm that uses a variational technique to find the minimum eigenvalue of the Hamiltonian $H$ of a given system.

An instance of VQE requires defining two algorithmic sub-components: a trial state (a.k.a. ansatz) which is a `QuantumCircuit`, and one of the classical [`optimizers`](qiskit.algorithms.optimizers#module-qiskit.algorithms.optimizers "qiskit.algorithms.optimizers"). The ansatz is varied, via its set of parameters, by the optimizer, such that it works towards a state, as determined by the parameters applied to the ansatz, that will result in the minimum expectation value being measured of the input operator (Hamiltonian).

An optional array of parameter values, via the *initial\_point*, may be provided as the starting point for the search of the minimum eigenvalue. This feature is particularly useful such as when there are reasons to believe that the solution point is close to a particular point. As an example, when building the dissociation profile of a molecule, it is likely that using the previous computed optimal solution as the starting initial point for the next interatomic distance is going to reduce the number of iterations necessary for the variational algorithm to converge. It provides an [initial point tutorial](https://github.com/Qiskit/qiskit-tutorials-community/blob/master/chemistry/h2_vqe_initial_point.ipynb) detailing this use case.

The length of the *initial\_point* list value must match the number of the parameters expected by the ansatz being used. If the *initial\_point* is left at the default of `None`, then VQE will look to the ansatz for a preferred value, based on its given initial state. If the ansatz returns `None`, then a random point will be generated within the parameter bounds set, as per above. If the ansatz provides `None` as the lower bound, then VQE will default it to $-2\pi$; similarly, if the ansatz returns `None` as the upper bound, the default value will be $2\pi$.

**Parameters**

*   **ansatz** (`Optional`\[`QuantumCircuit`]) – A parameterized circuit used as Ansatz for the wave function.
*   **optimizer** (`Optional`\[`Optimizer`]) – A classical optimizer.
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then VQE will look to the ansatz for a preferred point and if not will simply compute a random one.
*   **gradient** (`Union`\[`GradientBase`, `Callable`, `None`]) – An optional gradient function or operator for optimizer.
*   **expectation** (`Optional`\[`ExpectationBase`]) – The Expectation converter for taking the average value of the Observable over the ansatz state function. When `None` (the default) an [`ExpectationFactory`](qiskit.opflow.expectations.ExpectationFactory#qiskit.opflow.expectations.ExpectationFactory "qiskit.opflow.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to `True` (defaults to `False`).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to `True` will allow the factory to include the custom Aer pauli expectation.
*   **max\_evals\_grouped** (`int`) – Max number of evaluations performed simultaneously. Signals the given optimizer that more than one set of parameters can be supplied so that potentially the expectation values can be computed in parallel. Typically this is possible when a finite difference gradient is used by the optimizer such that multiple points to compute the gradient can be passed and if computed in parallel improve overall execution time. Deprecated if a gradient operator or function is given.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation by the optimizer for its current set of parameters as it works towards the minimum. These are: the evaluation count, the optimizer parameters for the ansatz, the evaluated mean and the evaluated standard deviation.\`
*   **quantum\_instance** (`Union`\[`QuantumInstance`, `BaseBackend`, `Backend`, `None`]) – Quantum Instance or Backend
*   **sort\_parameters\_by\_name** (`Optional`\[`bool`]) – Deprecated. If True, the initial point is bound to the ansatz parameters strictly sorted by name instead of the default circuit order. That means that the ansatz parameters are e.g. sorted as `x[0] x[1] x[10] x[2] ...` instead of `x[0] x[1] x[2] ... x[10]`. Set this to `True` to obtain the behavior prior to Qiskit Terra 0.18.0.

## Methods

|                                                                                                                                                                                                      |                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`cleanup_parameterized_circuits`](qiskit.algorithms.VQE.cleanup_parameterized_circuits#qiskit.algorithms.VQE.cleanup_parameterized_circuits "qiskit.algorithms.VQE.cleanup_parameterized_circuits") | set parameterized circuits to None                                                                    |
| [`compute_minimum_eigenvalue`](qiskit.algorithms.VQE.compute_minimum_eigenvalue#qiskit.algorithms.VQE.compute_minimum_eigenvalue "qiskit.algorithms.VQE.compute_minimum_eigenvalue")                 | Computes minimum eigenvalue.                                                                          |
| [`construct_circuit`](qiskit.algorithms.VQE.construct_circuit#qiskit.algorithms.VQE.construct_circuit "qiskit.algorithms.VQE.construct_circuit")                                                     | Return the circuits used to compute the expectation value.                                            |
| [`construct_expectation`](qiskit.algorithms.VQE.construct_expectation#qiskit.algorithms.VQE.construct_expectation "qiskit.algorithms.VQE.construct_expectation")                                     | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`find_minimum`](qiskit.algorithms.VQE.find_minimum#qiskit.algorithms.VQE.find_minimum "qiskit.algorithms.VQE.find_minimum")                                                                         | Optimize to find the minimum cost value.                                                              |
| [`get_energy_evaluation`](qiskit.algorithms.VQE.get_energy_evaluation#qiskit.algorithms.VQE.get_energy_evaluation "qiskit.algorithms.VQE.get_energy_evaluation")                                     | Returns a function handle to evaluates the energy at given parameters for the ansatz.                 |
| [`get_optimal_circuit`](qiskit.algorithms.VQE.get_optimal_circuit#qiskit.algorithms.VQE.get_optimal_circuit "qiskit.algorithms.VQE.get_optimal_circuit")                                             | Get the circuit with the optimal parameters.                                                          |
| [`get_optimal_cost`](qiskit.algorithms.VQE.get_optimal_cost#qiskit.algorithms.VQE.get_optimal_cost "qiskit.algorithms.VQE.get_optimal_cost")                                                         | Get the minimal cost or energy found by the VQE.                                                      |
| [`get_optimal_vector`](qiskit.algorithms.VQE.get_optimal_vector#qiskit.algorithms.VQE.get_optimal_vector "qiskit.algorithms.VQE.get_optimal_vector")                                                 | Get the simulation outcome of the optimal circuit.                                                    |
| [`get_prob_vector_for_params`](qiskit.algorithms.VQE.get_prob_vector_for_params#qiskit.algorithms.VQE.get_prob_vector_for_params "qiskit.algorithms.VQE.get_prob_vector_for_params")                 | Helper function to get probability vectors for a set of params                                        |
| [`get_probabilities_for_counts`](qiskit.algorithms.VQE.get_probabilities_for_counts#qiskit.algorithms.VQE.get_probabilities_for_counts "qiskit.algorithms.VQE.get_probabilities_for_counts")         | get probabilities for counts                                                                          |
| [`print_settings`](qiskit.algorithms.VQE.print_settings#qiskit.algorithms.VQE.print_settings "qiskit.algorithms.VQE.print_settings")                                                                 | Preparing the setting of VQE into a string.                                                           |
| [`supports_aux_operators`](qiskit.algorithms.VQE.supports_aux_operators#qiskit.algorithms.VQE.supports_aux_operators "qiskit.algorithms.VQE.supports_aux_operators")                                 | Whether computing the expectation value of auxiliary operators is supported.                          |

## Attributes

<span id="undefined" />

### ansatz

Returns the ansatz.

**Return type**

`Optional`\[`QuantumCircuit`]

<span id="undefined" />

### expectation

The expectation value algorithm used to construct the expectation measurement from the observable.

**Return type**

`Optional`\[`ExpectationBase`]

<span id="undefined" />

### gradient

Returns the gradient.

**Return type**

`Union`\[`GradientBase`, `Callable`, `None`]

<span id="undefined" />

### initial\_point

Returns initial point

**Return type**

`Optional`\[`ndarray`]

<span id="undefined" />

### optimal\_params

The optimal parameters for the ansatz.

**Return type**

`ndarray`

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

### setting

Prepare the setting of VQE as a string.
