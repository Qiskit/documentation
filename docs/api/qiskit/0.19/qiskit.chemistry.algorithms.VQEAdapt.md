---
title: VQEAdapt
description: API reference for qiskit.chemistry.algorithms.VQEAdapt
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.VQEAdapt
---

# VQEAdapt

<span id="qiskit.chemistry.algorithms.VQEAdapt" />

`VQEAdapt(operator, var_form_base, optimizer, initial_point=None, excitation_pool=None, threshold=1e-05, delta=1, max_evals_grouped=1, aux_operators=None, quantum_instance=None)`

The Adaptive VQE algorithm.

See [https://arxiv.org/abs/1812.11173](https://arxiv.org/abs/1812.11173)

**Parameters**

*   **operator** ([`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")) – Qubit operator
*   **var\_form\_base** ([`VariationalForm`](qiskit.aqua.components.variational_forms.VariationalForm "qiskit.aqua.components.variational_forms.variational_form.VariationalForm")) – base parameterized variational form
*   **optimizer** ([`Optimizer`](qiskit.aqua.components.optimizers.Optimizer "qiskit.aqua.components.optimizers.optimizer.Optimizer")) – the classical optimizer algorithm
*   **initial\_point** (`Optional`\[`ndarray`]) – optimizer initial point
*   **excitation\_pool** (`Optional`\[`List`\[[`WeightedPauliOperator`](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.weighted_pauli_operator.WeightedPauliOperator")]]) – list of excitation operators
*   **threshold** (`float`) – absolute threshold value for gradients, has a min. value of 1e-15.
*   **delta** (`float`) – finite difference step size for gradient computation, has a min. value of 1e-5.
*   **max\_evals\_grouped** (`int`) – max number of evaluations performed simultaneously
*   **aux\_operators** (`Optional`\[`List`\[[`LegacyBaseOperator`](qiskit.aqua.operators.legacy.LegacyBaseOperator "qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator")]]) – Auxiliary operators to be evaluated at each eigenvalue
*   **quantum\_instance** (`Union`\[[`QuantumInstance`](qiskit.aqua.QuantumInstance "qiskit.aqua.quantum_instance.QuantumInstance"), [`BaseBackend`](qiskit.providers.BaseBackend "qiskit.providers.basebackend.BaseBackend"), `None`]) – Quantum Instance or Backend

**Raises**

*   **ValueError** – if var\_form\_base is not an instance of UCCSD.
*   **See also** – qiskit/chemistry/components/variational\_forms/uccsd\_adapt.py

## Attributes

|                                                                                                                                              |                            |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`VQEAdapt.backend`](qiskit.chemistry.algorithms.VQEAdapt.backend "qiskit.chemistry.algorithms.VQEAdapt.backend")                            | Returns backend.           |
| [`VQEAdapt.initial_point`](qiskit.chemistry.algorithms.VQEAdapt.initial_point "qiskit.chemistry.algorithms.VQEAdapt.initial_point")          | Returns initial point      |
| [`VQEAdapt.optimal_params`](qiskit.chemistry.algorithms.VQEAdapt.optimal_params "qiskit.chemistry.algorithms.VQEAdapt.optimal_params")       | returns optimal parameters |
| [`VQEAdapt.optimizer`](qiskit.chemistry.algorithms.VQEAdapt.optimizer "qiskit.chemistry.algorithms.VQEAdapt.optimizer")                      | Returns optimizer          |
| [`VQEAdapt.quantum_instance`](qiskit.chemistry.algorithms.VQEAdapt.quantum_instance "qiskit.chemistry.algorithms.VQEAdapt.quantum_instance") | Returns quantum instance.  |
| [`VQEAdapt.random`](qiskit.chemistry.algorithms.VQEAdapt.random "qiskit.chemistry.algorithms.VQEAdapt.random")                               | Return a numpy random.     |
| [`VQEAdapt.var_form`](qiskit.chemistry.algorithms.VQEAdapt.var_form "qiskit.chemistry.algorithms.VQEAdapt.var_form")                         | Returns variational form   |

## Methods

|                                                                                                                                                                                          |                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`VQEAdapt.cleanup_parameterized_circuits`](qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits "qiskit.chemistry.algorithms.VQEAdapt.cleanup_parameterized_circuits")() | set parameterized circuits to None                             |
| [`VQEAdapt.find_minimum`](qiskit.chemistry.algorithms.VQEAdapt.find_minimum "qiskit.chemistry.algorithms.VQEAdapt.find_minimum")(\[initial\_point, …])                                   | Optimize to find the minimum cost value.                       |
| [`VQEAdapt.get_optimal_circuit`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_circuit")()                                  | get optimal circuit                                            |
| [`VQEAdapt.get_optimal_cost`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_cost")()                                           | get optimal cost                                               |
| [`VQEAdapt.get_optimal_vector`](qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector "qiskit.chemistry.algorithms.VQEAdapt.get_optimal_vector")()                                     | get optimal vector                                             |
| [`VQEAdapt.get_prob_vector_for_params`](qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params "qiskit.chemistry.algorithms.VQEAdapt.get_prob_vector_for_params")(…\[, …])      | Helper function to get probability vectors for a set of params |
| [`VQEAdapt.get_probabilities_for_counts`](qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts "qiskit.chemistry.algorithms.VQEAdapt.get_probabilities_for_counts")(counts) | get probabilities for counts                                   |
| [`VQEAdapt.run`](qiskit.chemistry.algorithms.VQEAdapt.run "qiskit.chemistry.algorithms.VQEAdapt.run")(\[quantum\_instance])                                                              | Execute the algorithm with selected backend.                   |
| [`VQEAdapt.set_backend`](qiskit.chemistry.algorithms.VQEAdapt.set_backend "qiskit.chemistry.algorithms.VQEAdapt.set_backend")(backend, \*\*kwargs)                                       | Sets backend with configuration.                               |

