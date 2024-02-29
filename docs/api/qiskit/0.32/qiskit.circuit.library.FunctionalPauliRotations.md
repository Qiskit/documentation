---
title: FunctionalPauliRotations
description: API reference for qiskit.circuit.library.FunctionalPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.FunctionalPauliRotations
---

# FunctionalPauliRotations

<span id="qiskit.circuit.library.FunctionalPauliRotations" />

`FunctionalPauliRotations(num_state_qubits=None, basis='Y', name='F')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/arithmetic/functional_pauli_rotations.py "view source code")

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`, `abc.ABC`

Base class for functional Pauli rotations.

Create a new functional Pauli rotation circuit.

**Parameters**

*   **num\_state\_qubits** (`Optional`\[`int`]) – The number of qubits representing the state $|x\rangle$.
*   **basis** (`str`) – The kind of Pauli rotation to use. Must be ‘X’, ‘Y’ or ‘Z’.
*   **name** (`str`) – The name of the circuit object.

## Attributes

<span id="qiskit.circuit.library.FunctionalPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.FunctionalPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Return type**

`str`

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.FunctionalPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.FunctionalPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.FunctionalPauliRotations.data" />

### data

<span id="qiskit.circuit.library.FunctionalPauliRotations.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.FunctionalPauliRotations.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.FunctionalPauliRotations.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.FunctionalPauliRotations.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.FunctionalPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

**Return type**

`int`

**Returns**

The minimal number of ancillas required.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_parameters" />

### num\_parameters

**Return type**

`int`

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.parameters" />

### parameters

**Return type**

`ParameterView`

<span id="qiskit.circuit.library.FunctionalPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.FunctionalPauliRotations.qregs" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.FunctionalPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

