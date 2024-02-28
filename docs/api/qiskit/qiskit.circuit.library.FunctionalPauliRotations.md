---
title: FunctionalPauliRotations
description: API reference for qiskit.circuit.library.FunctionalPauliRotations
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.FunctionalPauliRotations
---

# FunctionalPauliRotations

<span id="qiskit.circuit.library.FunctionalPauliRotations" />

`qiskit.circuit.library.FunctionalPauliRotations(num_state_qubits=None, basis='Y', name='F')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/library/arithmetic/functional_pauli_rotations.py "view source code")

Bases: `BlueprintCircuit`, [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Base class for functional Pauli rotations.

Create a new functional Pauli rotation circuit.

**Parameters**

*   **num\_state\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – The number of qubits representing the state $|x\rangle$.
*   **basis** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The kind of Pauli rotation to use. Must be ‘X’, ‘Y’ or ‘Z’.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The name of the circuit object.

## Attributes

<span id="qiskit.circuit.library.FunctionalPauliRotations.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.FunctionalPauliRotations.basis" />

### basis

The kind of Pauli rotation to be used.

Set the basis to ‘X’, ‘Y’ or ‘Z’ for controlled-X, -Y, or -Z rotations respectively.

**Returns**

The kind of Pauli rotation used in controlled rotation.

<span id="qiskit.circuit.library.FunctionalPauliRotations.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.FunctionalPauliRotations.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.FunctionalPauliRotations.data" />

### data

<span id="qiskit.circuit.library.FunctionalPauliRotations.global_phase" />

### global\_phase

Return the global phase of the current circuit scope in radians.

<span id="qiskit.circuit.library.FunctionalPauliRotations.instances" />

### instances

`= 176`

<span id="qiskit.circuit.library.FunctionalPauliRotations.layout" />

### layout

Return any associated layout information about the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](compiler#qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.FunctionalPauliRotations.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_ancilla_qubits" />

### num\_ancilla\_qubits

The minimum number of ancilla qubits in the circuit.

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

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.num_state_qubits" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.FunctionalPauliRotations.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – When circuit is not scheduled.

<span id="qiskit.circuit.library.FunctionalPauliRotations.parameters" />

### parameters

<span id="qiskit.circuit.library.FunctionalPauliRotations.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.FunctionalPauliRotations.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.FunctionalPauliRotations.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

