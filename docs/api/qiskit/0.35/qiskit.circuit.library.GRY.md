---
title: GRY
description: API reference for qiskit.circuit.library.GRY
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GRY
---

# GRY

<span id="qiskit.circuit.library.GRY" />

`GRY(num_qubits, theta)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/generalized_gates/gr.py "view source code")

Bases: `qiskit.circuit.library.generalized_gates.gr.GR`

Global RY gate.

**Circuit symbol:**

```python
     ┌──────────┐
q_0: ┤0         ├
     │          │
q_1: ┤1  GRY(ϴ) ├
     │          │
q_2: ┤2         ├
     └──────────┘
```

The global RY gate is native to atomic systems (ion traps, cold neutrals). The global RY can be applied to multiple qubits simultaneously.

In the one-qubit case, this is equivalent to an RY(theta) operation, and is thus reduced to the RYGate. The global RY gate is a direct sum of RY operations on all individual qubits.

$$
GRY(\theta) = \exp(-i \sum_{i=1}^{n} Y_i \theta/2)
$$

**Expanded Circuit:**

Create a new Global RY (GRY) gate.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits.
*   **theta** (`float`) – rotation angle about y-axis

## Attributes

<span id="qiskit.circuit.library.GRY.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.GRY.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.GRY.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.GRY.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.GRY.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.GRY.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.GRY.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.GRY.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.GRY.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.GRY.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRY.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRY.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.GRY.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.GRY.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.GRY.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.GRY.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

