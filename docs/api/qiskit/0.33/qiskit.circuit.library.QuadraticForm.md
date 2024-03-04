---
title: QuadraticForm
description: API reference for qiskit.circuit.library.QuadraticForm
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.QuadraticForm
---

# QuadraticForm

<span id="qiskit.circuit.library.QuadraticForm" />

`QuadraticForm(num_result_qubits=None, quadratic=None, linear=None, offset=None, little_endian=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/arithmetic/quadratic_form.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Implements a quadratic form on binary variables encoded in qubit registers.

A quadratic form on binary variables is a quadratic function $Q$ acting on a binary variable of $n$ bits, $x = x_0 ... x_{n-1}$. For an integer matrix $A$, an integer vector $b$ and an integer $c$ the function can be written as

$$
Q(x) = x^T A x + x^T b + c
$$

If $A$, $b$ or $c$ contain scalar values, this circuit computes only an approximation of the quadratic form.

Provided with $m$ qubits to encode the value, this circuit computes $Q(x) \mod 2^m$ in \[two’s complement]\([https://stackoverflow.com/questions/1049722/what-is-2s-complement](https://stackoverflow.com/questions/1049722/what-is-2s-complement)) representation.

$$
|x\rangle_n |0\rangle_m \mapsto |x\rangle_n |(Q(x) + 2^m) \mod 2^m \rangle_m
$$

Since we use two’s complement e.g. the value of $Q(x) = 3$ requires 2 bits to represent the value and 1 bit for the sign: 3 = ‘011’ where the first 0 indicates a positive value. On the other hand, $Q(x) = -3$ would be -3 = ‘101’, where the first 1 indicates a negative value and 01 is the two’s complement of 3.

If the value of $Q(x)$ is too large to be represented with m qubits, the resulting bitstring is $(Q(x) + 2^m) \mod 2^m)$.

The implementation of this circuit is discussed in \[1], Fig. 6.

**References**

**\[1]: Gilliam et al., Grover Adaptive Search for Constrained Polynomial Binary Optimization.**

[arXiv:1912.04088](https://arxiv.org/pdf/1912.04088.pdf)

**Parameters**

*   **num\_result\_qubits** (`Optional`\[`int`]) – The number of qubits to encode the result. Called $m$ in the class documentation.
*   **quadratic** (`Union`\[`ndarray`, `List`\[`List`\[`Union`\[`float`, `ParameterExpression`]]], `None`]) – A matrix containing the quadratic coefficients, $A$.
*   **linear** (`Union`\[`ndarray`, `List`\[`Union`\[`float`, `ParameterExpression`]], `None`]) – An array containing the linear coefficients, $b$.
*   **offset** (`Union`\[`ParameterExpression`, `float`, `None`]) – A constant offset, $c$.
*   **little\_endian** (`bool`) – Encode the result in little endianness.

**Raises**

*   **ValueError** – If `linear` and `quadratic` have mismatching sizes.
*   **ValueError** – If `num_result_qubits` is unspecified but cannot be determined because some values of the quadratic form are parameterized.

## Methods Defined Here

### required\_result\_qubits

<span id="qiskit.circuit.library.QuadraticForm.required_result_qubits" />

`static QuadraticForm.required_result_qubits(quadratic, linear, offset)`

Get the number of required result qubits.

**Parameters**

*   **quadratic** (`Union`\[`ndarray`, `List`\[`List`\[`float`]]]) – A matrix containing the quadratic coefficients.
*   **linear** (`Union`\[`ndarray`, `List`\[`float`]]) – An array containing the linear coefficients.
*   **offset** (`float`) – A constant offset.

**Return type**

`int`

**Returns**

The number of qubits needed to represent the value of the quadratic form in twos complement.

## Attributes

<span id="qiskit.circuit.library.QuadraticForm.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.QuadraticForm.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.QuadraticForm.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.QuadraticForm.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.QuadraticForm.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.QuadraticForm.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.QuadraticForm.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.QuadraticForm.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.QuadraticForm.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.QuadraticForm.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.QuadraticForm.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.QuadraticForm.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.QuadraticForm.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.QuadraticForm.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.QuadraticForm.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.QuadraticForm.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

