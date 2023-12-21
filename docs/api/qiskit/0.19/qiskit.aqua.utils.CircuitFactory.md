---
title: CircuitFactory
description: API reference for qiskit.aqua.utils.CircuitFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.utils.CircuitFactory
---

# CircuitFactory

<span id="qiskit.aqua.utils.CircuitFactory" />

`CircuitFactory(num_target_qubits)`

Base class for CircuitFactories

## Attributes

|                                                                                                                                               |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`CircuitFactory.num_target_qubits`](qiskit.aqua.utils.CircuitFactory.num_target_qubits "qiskit.aqua.utils.CircuitFactory.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                             |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`CircuitFactory.build`](qiskit.aqua.utils.CircuitFactory.build "qiskit.aqua.utils.CircuitFactory.build")(qc, q\[, q\_ancillas, params])                                                    | Adds corresponding sub-circuit to given circuit                       |
| [`CircuitFactory.build_controlled`](qiskit.aqua.utils.CircuitFactory.build_controlled "qiskit.aqua.utils.CircuitFactory.build_controlled")(qc, q, q\_control)                               | Adds corresponding controlled sub-circuit to given circuit            |
| [`CircuitFactory.build_controlled_inverse`](qiskit.aqua.utils.CircuitFactory.build_controlled_inverse "qiskit.aqua.utils.CircuitFactory.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`CircuitFactory.build_controlled_inverse_power`](qiskit.aqua.utils.CircuitFactory.build_controlled_inverse_power "qiskit.aqua.utils.CircuitFactory.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`CircuitFactory.build_controlled_power`](qiskit.aqua.utils.CircuitFactory.build_controlled_power "qiskit.aqua.utils.CircuitFactory.build_controlled_power")(qc, q, …)                      | Adds controlled power of corresponding circuit.                       |
| [`CircuitFactory.build_inverse`](qiskit.aqua.utils.CircuitFactory.build_inverse "qiskit.aqua.utils.CircuitFactory.build_inverse")(qc, q\[, q\_ancillas])                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`CircuitFactory.build_inverse_power`](qiskit.aqua.utils.CircuitFactory.build_inverse_power "qiskit.aqua.utils.CircuitFactory.build_inverse_power")(qc, q, power)                           | Adds inverse power of corresponding circuit.                          |
| [`CircuitFactory.build_power`](qiskit.aqua.utils.CircuitFactory.build_power "qiskit.aqua.utils.CircuitFactory.build_power")(qc, q, power\[, …])                                             | Adds power of corresponding circuit.                                  |
| [`CircuitFactory.get_num_qubits`](qiskit.aqua.utils.CircuitFactory.get_num_qubits "qiskit.aqua.utils.CircuitFactory.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`CircuitFactory.get_num_qubits_controlled`](qiskit.aqua.utils.CircuitFactory.get_num_qubits_controlled "qiskit.aqua.utils.CircuitFactory.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`CircuitFactory.required_ancillas`](qiskit.aqua.utils.CircuitFactory.required_ancillas "qiskit.aqua.utils.CircuitFactory.required_ancillas")()                                             | returns required ancillas                                             |
| [`CircuitFactory.required_ancillas_controlled`](qiskit.aqua.utils.CircuitFactory.required_ancillas_controlled "qiskit.aqua.utils.CircuitFactory.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

