---
title: PiecewiseLinearRotation
description: API reference for qiskit.aqua.circuits.PiecewiseLinearRotation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.PiecewiseLinearRotation
---

# PiecewiseLinearRotation

<span id="qiskit.aqua.circuits.PiecewiseLinearRotation" />

`PiecewiseLinearRotation(breakpoints, slopes, offsets, num_state_qubits, basis='Y', i_state=None, i_target=None)`

*DEPRECATED.* Piecewise-linearly-controlled rotation.

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.PiecewiseLinearPauliRotations instead.
</Admonition>

For a piecewise linear (not necessarily continuous) function f(x). The function f(x) is defined through breakpoints, slopes and offsets as follows. Suppose the breakpoints \{ x\_0, …, x\_J } are a subset of \[0, 2^n-1], where n is the number of state qubits. Further on, denote the corresponding slopes and offsets by a\_j, b\_j respectively. Then f(x) is defined as:

> x \< x\_0 –> f(x) = 0 x\_j \<= x \< x\_\{j+1} –> f(x) = a\_j \* (x - x\_j) + b\_j

where we implicitly assume x\_\{J+1} = 2^n.

**Parameters**

*   **breakpoints** (*Union(list, numpy.ndarray)*) – breakpoints to define piecewise-linear function
*   **slopes** (*Union(list, numpy.ndarray)*) – slopes for different segments of piecewise-linear function
*   **offsets** (*Union(list, numpy.ndarray)*) – offsets for different segments of piecewise-linear function
*   **num\_state\_qubits** (*int*) – number of qubits representing the state
*   **basis** (*Optional(str)*) – type of Pauli rotation (‘X’, ‘Y’, ‘Z’)
*   **i\_state** (*Optional(Union(list, numpy.ndarray))*) – indices of qubits representing the state, set to range(num\_state\_qubits) if None
*   **i\_target** (*Optional(int)*) – index of target qubit, set to num\_state\_qubits if None

## Attributes

|                                                                                                                                                                                |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| [`PiecewiseLinearRotation.num_target_qubits`](qiskit.aqua.circuits.PiecewiseLinearRotation.num_target_qubits "qiskit.aqua.circuits.PiecewiseLinearRotation.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                                              |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`PiecewiseLinearRotation.build`](qiskit.aqua.circuits.PiecewiseLinearRotation.build "qiskit.aqua.circuits.PiecewiseLinearRotation.build")(qc, q\[, …])                                                                      | Build the circuit.                                                    |
| [`PiecewiseLinearRotation.build_controlled`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled "qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled")(qc, …)                                           | Adds corresponding controlled sub-circuit to given circuit            |
| [`PiecewiseLinearRotation.build_controlled_inverse`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse "qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`PiecewiseLinearRotation.build_controlled_inverse_power`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse_power "qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`PiecewiseLinearRotation.build_controlled_power`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_power "qiskit.aqua.circuits.PiecewiseLinearRotation.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`PiecewiseLinearRotation.build_inverse`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse "qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse")(qc, q)                                                    | Adds inverse of corresponding sub-circuit to given circuit            |
| [`PiecewiseLinearRotation.build_inverse_power`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse_power "qiskit.aqua.circuits.PiecewiseLinearRotation.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`PiecewiseLinearRotation.build_power`](qiskit.aqua.circuits.PiecewiseLinearRotation.build_power "qiskit.aqua.circuits.PiecewiseLinearRotation.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`PiecewiseLinearRotation.evaluate`](qiskit.aqua.circuits.PiecewiseLinearRotation.evaluate "qiskit.aqua.circuits.PiecewiseLinearRotation.evaluate")(x)                                                                       | Classically evaluate the piecewise linear rotation                    |
| [`PiecewiseLinearRotation.get_num_qubits`](qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits "qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`PiecewiseLinearRotation.get_num_qubits_controlled`](qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits_controlled "qiskit.aqua.circuits.PiecewiseLinearRotation.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`PiecewiseLinearRotation.required_ancillas`](qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas "qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas")()                                             | Return the number of required ancillas.                               |
| [`PiecewiseLinearRotation.required_ancillas_controlled`](qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas_controlled "qiskit.aqua.circuits.PiecewiseLinearRotation.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

