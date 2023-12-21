---
title: UncertaintyModel
description: API reference for qiskit.aqua.components.uncertainty_models.UncertaintyModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.uncertainty_models.UncertaintyModel
---

# UncertaintyModel

<span id="qiskit.aqua.components.uncertainty_models.UncertaintyModel" />

`UncertaintyModel(num_target_qubits)`

The abstract Uncertainty Model

## Attributes

|                                                                                                                                                                                                     |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`UncertaintyModel.num_target_qubits`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.num_target_qubits "qiskit.aqua.components.uncertainty_models.UncertaintyModel.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                                                   |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`UncertaintyModel.build`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build")(qc, q\[, q\_ancillas, …])                                                         | Adds corresponding sub-circuit to given circuit                       |
| [`UncertaintyModel.build_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`UncertaintyModel.build_controlled_inverse`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`UncertaintyModel.build_controlled_inverse_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`UncertaintyModel.build_controlled_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`UncertaintyModel.build_inverse`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`UncertaintyModel.build_inverse_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_inverse_power")(qc, q, …)                               | Adds inverse power of corresponding circuit.                          |
| [`UncertaintyModel.build_power`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_power "qiskit.aqua.components.uncertainty_models.UncertaintyModel.build_power")(qc, q, power\[, …])                                             | Adds power of corresponding circuit.                                  |
| [`UncertaintyModel.get_num_qubits`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits "qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`UncertaintyModel.get_num_qubits_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`UncertaintyModel.required_ancillas`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas "qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas")()                                             | returns required ancillas                                             |
| [`UncertaintyModel.required_ancillas_controlled`](qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas_controlled "qiskit.aqua.components.uncertainty_models.UncertaintyModel.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

