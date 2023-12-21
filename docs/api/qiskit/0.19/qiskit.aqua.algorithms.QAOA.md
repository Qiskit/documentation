---
title: QAOA
description: API reference for qiskit.aqua.algorithms.QAOA
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.algorithms.QAOA
---

# QAOA

<span id="qiskit.aqua.algorithms.QAOA" />

`QAOA(operator=None, optimizer=None, p=1, initial_state=None, mixer=None, initial_point=None, expectation=None, include_custom=False, max_evals_grouped=1, aux_operators=None, callback=None, quantum_instance=None)`

The Quantum Approximate Optimization Algorithm.

[QAOA](https://arxiv.org/abs/1411.4028) is a well-known algorithm for finding approximate solutions to combinatorial-optimization problems. The QAOA implementation in Aqua directly extends [`VQE`](qiskit.aqua.algorithms.VQE "qiskit.aqua.algorithms.VQE") and inherits VQE’s general hybrid optimization structure. However, unlike VQE, which can be configured with arbitrary variational forms, QAOA uses its own fine-tuned variational form, which comprises $p$ parameterized global $x$ rotations and $p$ different parameterizations of the problem hamiltonian. QAOA is thus principally configured by the single integer parameter, *p*, which dictates the depth of the variational form, and thus affects the approximation quality.

An optional array of $2p$ parameter values, as the *initial\_point*, may be provided as the starting **beta** and **gamma** parameters (as identically named in the original [QAOA paper](https://arxiv.org/abs/1411.4028)) for the QAOA variational form.

An operator may optionally also be provided as a custom mixer Hamiltonian. This allows, as discussed in [this paper](https://doi.org/10.1103/PhysRevApplied.5.034007) for quantum annealing, and in [this paper](https://arxiv.org/abs/1709.03489) for QAOA, to run constrained optimization problems where the mixer constrains the evolution to a feasible subspace of the full Hilbert space.

An initial state from Aqua’s [`initial_states`](qiskit.aqua.components.initial_states#module-qiskit.aqua.components.initial_states "qiskit.aqua.components.initial_states") may optionally be supplied.

**Parameters**

*   **operator** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – Qubit operator
*   **optimizer** (`Optional`\[[`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.optimizer.Optimizer")]) – A classical optimizer.
*   **p** (`int`) – the integer parameter p as specified in [https://arxiv.org/abs/1411.4028](https://arxiv.org/abs/1411.4028), Has a minimum valid value of 1.
*   **initial\_state** (`Optional`\[[`InitialState`](qiskit.aqua.components.initial_states.InitialState "qiskit.aqua.components.initial_states.initial_state.InitialState")]) – An optional initial state to prepend the QAOA circuit with
*   **mixer** (`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]) – the mixer Hamiltonian to evolve with. Allows support of optimizations in constrained subspaces as per [https://arxiv.org/abs/1709.03489](https://arxiv.org/abs/1709.03489)
*   **initial\_point** (`Optional`\[`ndarray`]) – An optional initial point (i.e. initial parameter values) for the optimizer. If `None` then it will simply compute a random one.
*   **expectation** (`Optional`\[[`ExpectationBase`](qiskit.aqua.operators.expectations.ExpectationBase "qiskit.aqua.operators.expectations.expectation_base.ExpectationBase")]) – The Expectation converter for taking the average value of the Observable over the var\_form state function. When None (the default) an [`ExpectationFactory`](qiskit.aqua.operators.expectations.ExpectationFactory "qiskit.aqua.operators.expectations.ExpectationFactory") is used to select an appropriate expectation based on the operator and backend. When using Aer qasm\_simulator backend, with paulis, it is however much faster to leverage custom Aer function for the computation but, although VQE performs much faster with it, the outcome is ideal, with no shot noise, like using a state vector simulator. If you are just looking for the quickest performance when choosing Aer qasm\_simulator and the lack of shot noise is not an issue then set include\_custom parameter here to True (defaults to False).
*   **include\_custom** (`bool`) – When expectation parameter here is None setting this to True will allow the factory to include the custom Aer pauli expectation.
*   **max\_evals\_grouped** (`int`) – Max number of evaluations performed simultaneously. Signals the given optimizer that more than one set of parameters can be supplied so that potentially the expectation values can be computed in parallel. Typically this is possible when a finite difference gradient is used by the optimizer such that multiple points to compute the gradient can be passed and if computed in parallel improve overall execution time.
*   **aux\_operators** (`Optional`\[`List`\[`Union`\[[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase"), [`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator"), `None`]]]) – Optional list of auxiliary operators to be evaluated with the eigenstate of the minimum eigenvalue main result and their expectation values returned. For instance in chemistry these can be dipole operators, total particle count operators so we can get values for these at the ground state.
*   **callback** (`Optional`\[`Callable`\[\[`int`, `ndarray`, `float`, `float`], `None`]]) – a callback that can access the intermediate data during the optimization. Four parameter values are passed to the callback as follows during each evaluation by the optimizer for its current set of parameters as it works towards the minimum. These are: the evaluation count, the optimizer parameters for the variational form, the evaluated mean and the evaluated standard deviation.
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

## Attributes

|                                                                                                                        |                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`QAOA.aux_operators`](qiskit.aqua.algorithms.QAOA.aux_operators "qiskit.aqua.algorithms.QAOA.aux_operators")          | Returns aux operators                                                                              |
| [`QAOA.backend`](qiskit.aqua.algorithms.QAOA.backend "qiskit.aqua.algorithms.QAOA.backend")                            | Returns backend.                                                                                   |
| [`QAOA.expectation`](qiskit.aqua.algorithms.QAOA.expectation "qiskit.aqua.algorithms.QAOA.expectation")                | The expectation value algorithm used to construct the expectation measurement from the observable. |
| [`QAOA.initial_point`](qiskit.aqua.algorithms.QAOA.initial_point "qiskit.aqua.algorithms.QAOA.initial_point")          | Returns initial point                                                                              |
| [`QAOA.operator`](qiskit.aqua.algorithms.QAOA.operator "qiskit.aqua.algorithms.QAOA.operator")                         | Returns operator                                                                                   |
| [`QAOA.optimal_params`](qiskit.aqua.algorithms.QAOA.optimal_params "qiskit.aqua.algorithms.QAOA.optimal_params")       | The optimal parameters for the variational form.                                                   |
| [`QAOA.optimizer`](qiskit.aqua.algorithms.QAOA.optimizer "qiskit.aqua.algorithms.QAOA.optimizer")                      | Returns optimizer                                                                                  |
| [`QAOA.quantum_instance`](qiskit.aqua.algorithms.QAOA.quantum_instance "qiskit.aqua.algorithms.QAOA.quantum_instance") | Returns quantum instance.                                                                          |
| [`QAOA.random`](qiskit.aqua.algorithms.QAOA.random "qiskit.aqua.algorithms.QAOA.random")                               | Return a numpy random.                                                                             |
| [`QAOA.setting`](qiskit.aqua.algorithms.QAOA.setting "qiskit.aqua.algorithms.QAOA.setting")                            | Prepare the setting of VQE as a string.                                                            |
| [`QAOA.var_form`](qiskit.aqua.algorithms.QAOA.var_form "qiskit.aqua.algorithms.QAOA.var_form")                         | Returns variational form                                                                           |

## Methods

|                                                                                                                                                                      |                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [`QAOA.cleanup_parameterized_circuits`](qiskit.aqua.algorithms.QAOA.cleanup_parameterized_circuits "qiskit.aqua.algorithms.QAOA.cleanup_parameterized_circuits")()   | set parameterized circuits to None                                                                    |
| [`QAOA.compute_minimum_eigenvalue`](qiskit.aqua.algorithms.QAOA.compute_minimum_eigenvalue "qiskit.aqua.algorithms.QAOA.compute_minimum_eigenvalue")(\[operator, …]) | Computes minimum eigenvalue.                                                                          |
| [`QAOA.construct_circuit`](qiskit.aqua.algorithms.QAOA.construct_circuit "qiskit.aqua.algorithms.QAOA.construct_circuit")(parameter)                                 | Generate the ansatz circuit and expectation value measurement, and return their runnable composition. |
| [`QAOA.find_minimum`](qiskit.aqua.algorithms.QAOA.find_minimum "qiskit.aqua.algorithms.QAOA.find_minimum")(\[initial\_point, var\_form, …])                          | Optimize to find the minimum cost value.                                                              |
| [`QAOA.get_optimal_circuit`](qiskit.aqua.algorithms.QAOA.get_optimal_circuit "qiskit.aqua.algorithms.QAOA.get_optimal_circuit")()                                    | Get the circuit with the optimal parameters.                                                          |
| [`QAOA.get_optimal_cost`](qiskit.aqua.algorithms.QAOA.get_optimal_cost "qiskit.aqua.algorithms.QAOA.get_optimal_cost")()                                             | Get the minimal cost or energy found by the VQE.                                                      |
| [`QAOA.get_optimal_vector`](qiskit.aqua.algorithms.QAOA.get_optimal_vector "qiskit.aqua.algorithms.QAOA.get_optimal_vector")()                                       | Get the simulation outcome of the optimal circuit.                                                    |
| [`QAOA.get_prob_vector_for_params`](qiskit.aqua.algorithms.QAOA.get_prob_vector_for_params "qiskit.aqua.algorithms.QAOA.get_prob_vector_for_params")(…\[, …])        | Helper function to get probability vectors for a set of params                                        |
| [`QAOA.get_probabilities_for_counts`](qiskit.aqua.algorithms.QAOA.get_probabilities_for_counts "qiskit.aqua.algorithms.QAOA.get_probabilities_for_counts")(counts)   | get probabilities for counts                                                                          |
| [`QAOA.print_settings`](qiskit.aqua.algorithms.QAOA.print_settings "qiskit.aqua.algorithms.QAOA.print_settings")()                                                   | Preparing the setting of VQE into a string.                                                           |
| [`QAOA.run`](qiskit.aqua.algorithms.QAOA.run "qiskit.aqua.algorithms.QAOA.run")(\[quantum\_instance])                                                                | Execute the algorithm with selected backend.                                                          |
| [`QAOA.set_backend`](qiskit.aqua.algorithms.QAOA.set_backend "qiskit.aqua.algorithms.QAOA.set_backend")(backend, \*\*kwargs)                                         | Sets backend with configuration.                                                                      |
| [`QAOA.supports_aux_operators`](qiskit.aqua.algorithms.QAOA.supports_aux_operators "qiskit.aqua.algorithms.QAOA.supports_aux_operators")()                           | Whether computing the expectation value of auxiliary operators is supported.                          |

