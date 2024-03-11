---
title: XOR
description: API reference for qiskit.circuit.library.XOR
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.XOR
---

# XOR

<span id="qiskit.circuit.library.XOR" />

`XOR(num_qubits, amount=None, seed=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/circuit/library/boolean_logic/quantum_xor.py "view source code")

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

An n\_qubit circuit for bitwise xor-ing the input with some integer `amount`.

The `amount` is xor-ed in bitstring form with the input.

This circuit can also represent addition by `amount` over the finite field GF(2).

Return a circuit implementing bitwise xor.

**Parameters**

*   **num\_qubits** (`int`) – the width of circuit.
*   **amount** (`Optional`\[`int`]) – the xor amount in decimal form.
*   **seed** (`Optional`\[`int`]) – random seed in case a random xor is requested.

**Raises**

**CircuitError** – if the xor bitstring exceeds available qubits.

**Reference Circuit:**

## Attributes

<span id="qiskit.circuit.library.XOR.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="qiskit.circuit.library.XOR.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="qiskit.circuit.library.XOR.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.XOR.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.XOR.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.XOR.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="qiskit.circuit.library.XOR.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.XOR.instances" />

### instances

`= 9`

<span id="qiskit.circuit.library.XOR.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="qiskit.circuit.library.XOR.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.XOR.num_clbits" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="qiskit.circuit.library.XOR.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="qiskit.circuit.library.XOR.num_qubits" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="qiskit.circuit.library.XOR.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.XOR.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.XOR.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

