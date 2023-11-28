# QuadraticForm

<span id="undefined" />

`QuadraticForm(num_result_qubits=None, quadratic=None, linear=None, offset=None, little_endian=True)`

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

## References

**\[1]: Gilliam et al., Grover Adaptive Search for Constrained Polynomial Binary Optimization.**

[arXiv:1912.04088](https://arxiv.org/pdf/1912.04088.pdf)

**Parameters**

*   **num\_result\_qubits** (`Optional`\[`int`]) – The number of qubits to encode the result. Called $m$ in the class documentation.
*   **quadratic** (`Union`\[`ndarray`, `List`\[`List`\[`Union`\[`float`, `ParameterExpression`]]], `None`]) – A matrix containing the quadratic coefficients, $A$.
*   **linear** (`Union`\[`ndarray`, `List`\[`Union`\[`float`, `ParameterExpression`]], `None`]) – An array containing the linear coefficients, $b$.
*   **offset** (`Union`\[`float`, `ParameterExpression`, `None`]) – A constant offset, $c$.
*   **little\_endian** (`bool`) – Encode the result in little endianness.

**Raises**

*   **ValueError** – If `linear` and `quadratic` have mismatching sizes.
*   **ValueError** – If `num_result_qubits` is unspecified but cannot be determined because some values of the quadratic form are parameterized.

## Methods Defined Here

|                                                                                                                                                                                                                   |                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`required_result_qubits`](qiskit.circuit.library.QuadraticForm.required_result_qubits#qiskit.circuit.library.QuadraticForm.required_result_qubits "qiskit.circuit.library.QuadraticForm.required_result_qubits") | Get the number of required result qubits. |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
