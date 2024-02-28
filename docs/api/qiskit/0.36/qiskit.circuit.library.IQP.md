---
title: IQP
description: API reference for qiskit.circuit.library.IQP
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IQP
---

# IQP

<span id="qiskit.circuit.library.IQP" />

`IQP(interactions)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/iqp.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Instantaneous quantum polynomial (IQP) circuit.

The circuit consists of a column of Hadamard gates, a column of powers of T gates, a sequence of powers of CS gates (up to $\frac{n^2-n}{2}$ of them), and a final column of Hadamard gates, as introduced in \[1].

The circuit is parameterized by an n x n interactions matrix. The powers of each T gate are given by the diagonal elements of the interactions matrix. The powers of the CS gates are given by the upper triangle of the interactions matrix.

**Reference Circuit:**

![../\_images/qiskit.circuit.library.IQP\_0\_0.png](/images/api/qiskit/0.36/qiskit.circuit.library.IQP_0_0.png)

**Expanded Circuit:**

>

**References:**

\[1] M. J. Bremner et al. Average-case complexity versus approximate simulation of commuting quantum computations, Phys. Rev. Lett. 117, 080501 (2016). [arXiv:1504.07999](https://arxiv.org/abs/1504.07999)

Create IQP circuit.

**Parameters**

**interactions** (`Union`\[`List`, `array`]) – input n-by-n symmetric matrix.

**Raises**

**CircuitError** – if the inputs is not as symmetric matrix.

## Attributes

<span id="qiskit.circuit.library.IQP.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.IQP.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.IQP.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.IQP.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.IQP.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.IQP.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.IQP.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.IQP.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.IQP.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.IQP.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.IQP.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.IQP.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.IQP.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.IQP.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.IQP.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.IQP.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

