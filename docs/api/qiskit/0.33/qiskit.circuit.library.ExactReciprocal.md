---
title: ExactReciprocal
description: API reference for qiskit.circuit.library.ExactReciprocal
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.ExactReciprocal
---

# ExactReciprocal

<span id="qiskit.circuit.library.ExactReciprocal" />

`ExactReciprocal(num_state_qubits, scaling, neg_vals=False, name='1/x')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/arithmetic/exact_reciprocal.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Exact reciprocal

$$
|x\rangle |0\rangle \mapsto \cos(1/x)|x\rangle|0\rangle + \sin(1/x)|x\rangle |1\rangle
$$

**Parameters**

*   **num\_state\_qubits** (`int`) – The number of qubits representing the value to invert.
*   **scaling** (`float`) – Scaling factor $s$ of the reciprocal function, i.e. to compute $s / x$.
*   **neg\_vals** (`bool`) – Whether $x$ might represent negative values. In this case the first qubit is the sign, with $|1\rangle$ for negative and $|0\rangle$ for positive. For the negative case it is assumed that the remaining string represents $1 - x$. This is because $e^{-2 \pi i x} = e^{2 \pi i (1 - x)}$ for $x \in [0,1)$.
*   **name** (`str`) – The name of the object.

<Admonition title="Note" type="note">
  It is assumed that the binary string $x$ represents a number \< 1.
</Admonition>

## Attributes

<span id="qiskit.circuit.library.ExactReciprocal.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.ExactReciprocal.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.ExactReciprocal.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.ExactReciprocal.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.ExactReciprocal.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.ExactReciprocal.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.ExactReciprocal.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.ExactReciprocal.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.ExactReciprocal.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.ExactReciprocal.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.ExactReciprocal.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.ExactReciprocal.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.ExactReciprocal.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.ExactReciprocal.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.ExactReciprocal.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.ExactReciprocal.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

