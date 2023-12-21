---
title: LinearRotation
description: API reference for qiskit.aqua.circuits.LinearRotation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.LinearRotation
---

# LinearRotation

<span id="qiskit.aqua.circuits.LinearRotation" />

`LinearRotation(slope, offset, num_state_qubits, basis='Y', i_state=None, i_target=None)`

*DEPRECATED.* Linearly-controlled X, Y or Z rotation.

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.LinearPauliRotations instead.
</Admonition>

For a register of state qubits |x> and a target qubit |0> this operator acts as:

> |x>|0> –> |x>( cos(slope \* x + offset)|0> + sin(slope \* x + offset)|1> )

**Parameters**

*   **slope** (*float*) – slope of the controlled rotation
*   **offset** (*float*) – offset of the controlled rotation
*   **num\_state\_qubits** (*int*) – number of qubits representing the state
*   **basis** (*str*) – type of Pauli rotation (‘X’, ‘Y’, ‘Z’)
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of the state qubits (least significant to most significant)
*   **i\_target** (*Optional(int)*) – index of target qubit

**Raises**

**ValueError** – invalid input

## Attributes

|                                                                                                                                                     |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`LinearRotation.num_target_qubits`](qiskit.aqua.circuits.LinearRotation.num_target_qubits "qiskit.aqua.circuits.LinearRotation.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                   |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`LinearRotation.build`](qiskit.aqua.circuits.LinearRotation.build "qiskit.aqua.circuits.LinearRotation.build")(qc, q\[, q\_ancillas, params])                                                    | Adds corresponding sub-circuit to given circuit                       |
| [`LinearRotation.build_controlled`](qiskit.aqua.circuits.LinearRotation.build_controlled "qiskit.aqua.circuits.LinearRotation.build_controlled")(qc, q, q\_control)                               | Adds corresponding controlled sub-circuit to given circuit            |
| [`LinearRotation.build_controlled_inverse`](qiskit.aqua.circuits.LinearRotation.build_controlled_inverse "qiskit.aqua.circuits.LinearRotation.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`LinearRotation.build_controlled_inverse_power`](qiskit.aqua.circuits.LinearRotation.build_controlled_inverse_power "qiskit.aqua.circuits.LinearRotation.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`LinearRotation.build_controlled_power`](qiskit.aqua.circuits.LinearRotation.build_controlled_power "qiskit.aqua.circuits.LinearRotation.build_controlled_power")(qc, q, …)                      | Adds controlled power of corresponding circuit.                       |
| [`LinearRotation.build_inverse`](qiskit.aqua.circuits.LinearRotation.build_inverse "qiskit.aqua.circuits.LinearRotation.build_inverse")(qc, q\[, q\_ancillas])                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`LinearRotation.build_inverse_power`](qiskit.aqua.circuits.LinearRotation.build_inverse_power "qiskit.aqua.circuits.LinearRotation.build_inverse_power")(qc, q, power)                           | Adds inverse power of corresponding circuit.                          |
| [`LinearRotation.build_power`](qiskit.aqua.circuits.LinearRotation.build_power "qiskit.aqua.circuits.LinearRotation.build_power")(qc, q, power\[, …])                                             | Adds power of corresponding circuit.                                  |
| [`LinearRotation.get_num_qubits`](qiskit.aqua.circuits.LinearRotation.get_num_qubits "qiskit.aqua.circuits.LinearRotation.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`LinearRotation.get_num_qubits_controlled`](qiskit.aqua.circuits.LinearRotation.get_num_qubits_controlled "qiskit.aqua.circuits.LinearRotation.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`LinearRotation.required_ancillas`](qiskit.aqua.circuits.LinearRotation.required_ancillas "qiskit.aqua.circuits.LinearRotation.required_ancillas")()                                             | returns required ancillas                                             |
| [`LinearRotation.required_ancillas_controlled`](qiskit.aqua.circuits.LinearRotation.required_ancillas_controlled "qiskit.aqua.circuits.LinearRotation.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

