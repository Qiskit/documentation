---
title: GRZ
description: API reference for qiskit.circuit.library.GRZ
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GRZ
---

# GRZ

<span id="qiskit.circuit.library.GRZ" />

`GRZ(num_qubits, phi)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/generalized_gates/gr.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

Global RZ gate.

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤0         ├
     │          │
q_1: ┤1  GRZ(φ) ├
     │          │
q_2: ┤2         ├
     └──────────┘
```

The global RZ gate is native to atomic systems (ion traps, cold neutrals). The global RZ can be applied to multiple qubits simultaneously.

In the one-qubit case, this is equivalent to an RZ(phi) operation, and is thus reduced to the RZGate. The global RZ gate is a direct sum of RZ operations on all individual qubits.

$$
GRZ(\phi) = \exp(-i \sum_{i=1}^{n} Z_i \phi)
$$

**Expanded Circuit:**

Create a new Global RZ (GRZ) gate.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **phi** (`float`) – rotation angle about z-axis

## Attributes

<span id="qiskit.circuit.library.GRZ.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.GRZ.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.GRZ.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.GRZ.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.GRZ.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.GRZ.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.GRZ.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.GRZ.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.GRZ.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.GRZ.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRZ.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRZ.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.GRZ.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRZ.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.GRZ.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.GRZ.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

