---
title: PolynomialPauliRotations
description: API reference for qiskit.circuit.library.PolynomialPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PolynomialPauliRotations
---

# PolynomialPauliRotations

<span id="qiskit.circuit.library.PolynomialPauliRotations" />

`PolynomialPauliRotations(num_state_qubits=None, coeffs=None, basis='Y', reverse=False, name='poly')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/arithmetic/polynomial_pauli_rotations.py "view source code")

Bases: `qiskit.circuit.library.arithmetic.functional_pauli_rotations.FunctionalPauliRotations`

A circuit implementing polynomial Pauli rotations.

For a polynomial :math\`p(x)\`, a basis state $|i\rangle$ and a target qubit $|0\rangle$ this operator acts as:

$$
|i\rangle |0\rangle \mapsto \cos(p(i)) |i\rangle |0\rangle + \sin(p(i)) |i\rangle |1\rangle
$$

Let n be the number of qubits representing the state, d the degree of p(x) and q\_i the qubits, where q\_0 is the least significant qubit. Then for

$$
x = \sum_{i=0}^{n-1} 2^i q_i,
$$

we can write

$$
p(x) = \sum_{j=0}^{j=d} c_j x_j
$$

where $c$ are the input coefficients, `coeffs`.

Prepare an approximation to a state with amplitudes specified by a polynomial.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of qubits representing the state.
*   **coeffs** (`Optional`\[`List`\[`float`]]) – The coefficients of the polynomial. `coeffs[i]` is the coefficient of the i-th power of x. Defaults to linear: \[0, 1].
*   **basis** (`str`) – The type of Pauli rotation (‘X’, ‘Y’, ‘Z’).
*   **reverse** (`bool`) – If True, apply the polynomial with the reversed list of qubits (i.e. q\_n as q\_0, q\_n-1 as q\_1, etc).
*   **name** (`str`) – The name of the circuit.

## Attributes

<span id="qiskit.circuit.library.PolynomialPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.PolynomialPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Return type**

`str`

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.PolynomialPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.PolynomialPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.PolynomialPauliRotations.coeffs" />

### coeffs

The multiplicative factor in the rotation angle of the controlled rotations.

The rotation angles are `slope * 2^0`, `slope * 2^1`, … , `slope * 2^(n-1)` where `n` is the number of state qubits.

**Return type**

`List`\[`float`]

**Returns**

The rotation angle common in all controlled rotations.

<span id="qiskit.circuit.library.PolynomialPauliRotations.data" />

### data

<span id="qiskit.circuit.library.PolynomialPauliRotations.degree" />

### degree

Return the degree of the polynomial, equals to the number of coefficients minus 1.

**Return type**

`int`

**Returns**

The degree of the polynomial. If the coefficients have not been set, return 0.

<span id="qiskit.circuit.library.PolynomialPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.PolynomialPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.PolynomialPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.PolynomialPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.PolynomialPauliRotations.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.PolynomialPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.PolynomialPauliRotations.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.PolynomialPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="qiskit.circuit.library.PolynomialPauliRotations.reverse" />

### reverse

Whether to apply the rotations on the reversed list of qubits.

**Return type**

`bool`

**Returns**

True, if the rotations are applied on the reversed list, False otherwise.

