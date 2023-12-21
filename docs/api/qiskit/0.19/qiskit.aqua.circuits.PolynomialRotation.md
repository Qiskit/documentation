---
title: PolynomialRotation
description: API reference for qiskit.aqua.circuits.PolynomialRotation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.circuits.PolynomialRotation
---

# PolynomialRotation

<span id="qiskit.aqua.circuits.PolynomialRotation" />

`PolynomialRotation(px, num_state_qubits, basis='Y')`

*DEPRECATED.* Polynomial rotation.

<Admonition title="Deprecated since version 0.7.0" type="danger">
  Use Terra’s qiskit.circuit.library.PolynomialPauliRotations instead.
</Admonition>

For a polynomial p(x), a basis state |i> and a target qubit |0> this operator acts as:

|i>|0> –> |i>( cos(p(i))|0> + sin(p(i))|1> )

Let n be the number of qubits representing the state, d the degree of p(x) and q\_i the qubits,

where q\_0 is the least significant qubit. Then for

x = sum\_\{i=0}^\{n-1} 2^\{i}\*q\_i,

we can write

p(x) = sum\_\{j=0}^\{j=d} px\[j]\*(q\_0 + 2\*q\_1 + … + 2^\{n-1}\*q\_n-1)^\{j}.

The expression above is used to obtain the list of controls and rotation angles for the circuit.

Prepare an approximation to a state with amplitudes specified by a polynomial.

**Parameters**

*   **px** (*list*) – coefficients of the polynomial, px\[i] is the coefficient of x^i
*   **num\_state\_qubits** (*int*) – number of qubits representing the state
*   **basis** (*str*) – type of Pauli rotation (‘X’, ‘Y’, ‘Z’)

**Raises**

**ValueError** – invalid input

## Attributes

|                                                                                                                                                                 |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`PolynomialRotation.num_target_qubits`](qiskit.aqua.circuits.PolynomialRotation.num_target_qubits "qiskit.aqua.circuits.PolynomialRotation.num_target_qubits") | Returns the number of target qubits |

## Methods

|                                                                                                                                                                                                               |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`PolynomialRotation.build`](qiskit.aqua.circuits.PolynomialRotation.build "qiskit.aqua.circuits.PolynomialRotation.build")(qc, q, q\_target\[, …])                                                           | Build the circuit.                                                    |
| [`PolynomialRotation.build_controlled`](qiskit.aqua.circuits.PolynomialRotation.build_controlled "qiskit.aqua.circuits.PolynomialRotation.build_controlled")(qc, q, …)                                        | Adds corresponding controlled sub-circuit to given circuit            |
| [`PolynomialRotation.build_controlled_inverse`](qiskit.aqua.circuits.PolynomialRotation.build_controlled_inverse "qiskit.aqua.circuits.PolynomialRotation.build_controlled_inverse")(qc, …)                   | Adds controlled inverse of corresponding sub-circuit to given circuit |
| [`PolynomialRotation.build_controlled_inverse_power`](qiskit.aqua.circuits.PolynomialRotation.build_controlled_inverse_power "qiskit.aqua.circuits.PolynomialRotation.build_controlled_inverse_power")(qc, …) | Adds controlled, inverse, power of corresponding circuit.             |
| [`PolynomialRotation.build_controlled_power`](qiskit.aqua.circuits.PolynomialRotation.build_controlled_power "qiskit.aqua.circuits.PolynomialRotation.build_controlled_power")(qc, …)                         | Adds controlled power of corresponding circuit.                       |
| [`PolynomialRotation.build_inverse`](qiskit.aqua.circuits.PolynomialRotation.build_inverse "qiskit.aqua.circuits.PolynomialRotation.build_inverse")(qc, q\[, …])                                              | Adds inverse of corresponding sub-circuit to given circuit            |
| [`PolynomialRotation.build_inverse_power`](qiskit.aqua.circuits.PolynomialRotation.build_inverse_power "qiskit.aqua.circuits.PolynomialRotation.build_inverse_power")(qc, …)                                  | Adds inverse power of corresponding circuit.                          |
| [`PolynomialRotation.build_power`](qiskit.aqua.circuits.PolynomialRotation.build_power "qiskit.aqua.circuits.PolynomialRotation.build_power")(qc, q, power)                                                   | Adds power of corresponding circuit.                                  |
| [`PolynomialRotation.get_num_qubits`](qiskit.aqua.circuits.PolynomialRotation.get_num_qubits "qiskit.aqua.circuits.PolynomialRotation.get_num_qubits")()                                                      | returns number of qubits                                              |
| [`PolynomialRotation.get_num_qubits_controlled`](qiskit.aqua.circuits.PolynomialRotation.get_num_qubits_controlled "qiskit.aqua.circuits.PolynomialRotation.get_num_qubits_controlled")()                     | returns number of qubits controlled                                   |
| [`PolynomialRotation.required_ancillas`](qiskit.aqua.circuits.PolynomialRotation.required_ancillas "qiskit.aqua.circuits.PolynomialRotation.required_ancillas")()                                             | returns required ancillas                                             |
| [`PolynomialRotation.required_ancillas_controlled`](qiskit.aqua.circuits.PolynomialRotation.required_ancillas_controlled "qiskit.aqua.circuits.PolynomialRotation.required_ancillas_controlled")()            | returns required ancillas controlled                                  |

