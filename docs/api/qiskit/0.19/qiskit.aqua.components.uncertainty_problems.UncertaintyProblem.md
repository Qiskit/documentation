---
title: UncertaintyProblem
description: API reference for qiskit.aqua.components.uncertainty_problems.UncertaintyProblem
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_problems.UncertaintyProblem
---

# UncertaintyProblem

<span id="qiskit.aqua.components.uncertainty_problems.UncertaintyProblem" />

`UncertaintyProblem(num_qubits)`

The abstract Uncertainty Problem component.

## Attributes

|                                                                                                                                                                                                               |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`UncertaintyProblem.num_target_qubits`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.num_target_qubits "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                             |                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`UncertaintyProblem.build`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build")(qc, q\[, …])                                                                      | Adds corresponding sub-circuit to given circuit                       |
| [`UncertaintyProblem.build_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`UncertaintyProblem.build_controlled_inverse`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`UncertaintyProblem.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`UncertaintyProblem.build_controlled_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`UncertaintyProblem.build_inverse`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`UncertaintyProblem.build_inverse_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`UncertaintyProblem.build_power`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`UncertaintyProblem.get_num_qubits`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`UncertaintyProblem.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`UncertaintyProblem.required_ancillas`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas")()                                             | returns required ancillas                                             |
| [`UncertaintyProblem.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.required_ancillas_controlled")()            | returns required ancillas controlled                                  |
| [`UncertaintyProblem.value_to_estimation`](qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation "qiskit.aqua.components.uncertainty_problems.UncertaintyProblem.value_to_estimation")(value)                                  | value to estimate                                                     |

