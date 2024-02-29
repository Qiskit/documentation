---
title: IntegerComparator
description: API reference for qiskit.circuit.library.IntegerComparator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IntegerComparator
---

# IntegerComparator

<span id="qiskit.circuit.library.IntegerComparator" />

`IntegerComparator(num_state_qubits=None, value=None, geq=True, name='cmp')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/arithmetic/integer_comparator.py "view source code")

Bases: `BlueprintCircuit`

Integer Comparator.

Operator compares basis states $|i\rangle_n$ against a classically given integer $L$ of fixed value and flips a target qubit if $i \geq L$ (or $<$ depending on the parameter `geq`):

$$
|i\rangle_n |0\rangle \mapsto |i\rangle_n |i \geq L\rangle
$$

This operation is based on two’s complement implementation of binary subtraction but only uses carry bits and no actual result bits. If the most significant carry bit (the results bit) is 1, the $\geq$ condition is `True` otherwise it is `False`.

Create a new fixed value comparator circuit.

**Parameters**

*   **num\_state\_qubits** (*int | None*) – Number of state qubits. If this is set it will determine the number of qubits required for the circuit.
*   **value** (*int | None*) – The fixed value to compare with.
*   **geq** (*bool*) – If True, evaluate a `>=` condition, else `<`.
*   **name** (*str*) – Name of the circuit.

## Attributes

<span id="qiskit.circuit.library.IntegerComparator.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.IntegerComparator.calibrations" />

### calibrations

Return calibration dictionary.

The custom pulse definition of a given gate is of the form `{'gate_name': {(qubits, params): schedule}}`

<span id="qiskit.circuit.library.IntegerComparator.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.IntegerComparator.data" />

### data

<span id="qiskit.circuit.library.IntegerComparator.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.IntegerComparator.geq" />

### geq

Return whether the comparator compares greater or less equal.

**Returns**

True, if the comparator compares `>=`, False if `<`.

<span id="qiskit.circuit.library.IntegerComparator.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.IntegerComparator.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.IntegerComparator.instances" />

### instances

`= 153`

<span id="qiskit.circuit.library.IntegerComparator.layout" />

### layout

Return any associated layout information anout the circuit

This attribute contains an optional [`TranspileLayout`](qiskit.transpiler.TranspileLayout "qiskit.transpiler.TranspileLayout") object. This is typically set on the output from [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") or [`PassManager.run()`](qiskit.transpiler.PassManager#run "qiskit.transpiler.PassManager.run") to retain information about the permutations caused on the input circuit by transpilation.

There are two types of permutations caused by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function, an initial layout which permutes the qubits based on the selected physical qubits on the [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target"), and a final layout which is an output permutation caused by [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")s inserted during routing.

<span id="qiskit.circuit.library.IntegerComparator.metadata" />

### metadata

The user provided metadata associated with the circuit.

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.IntegerComparator.num_ancilla_qubits" />

### num\_ancilla\_qubits

Deprecated. Use num\_ancillas instead.

<span id="qiskit.circuit.library.IntegerComparator.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.IntegerComparator.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.IntegerComparator.num_parameters" />

### num\_parameters

<span id="qiskit.circuit.library.IntegerComparator.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.IntegerComparator.num_state_qubits" />

### num\_state\_qubits

The number of qubits encoding the state for the comparison.

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.IntegerComparator.op_start_times" />

### op\_start\_times

Return a list of operation start times.

This attribute is enabled once one of scheduling analysis passes runs on the quantum circuit.

**Returns**

List of integers representing instruction start times. The index corresponds to the index of instruction in `QuantumCircuit.data`.

**Raises**

**AttributeError** – When circuit is not scheduled.

<span id="qiskit.circuit.library.IntegerComparator.parameters" />

### parameters

<span id="qiskit.circuit.library.IntegerComparator.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.IntegerComparator.qregs" />

### qregs

`list[QuantumRegister]`

A list of the quantum registers associated with the circuit.

<span id="qiskit.circuit.library.IntegerComparator.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

<span id="qiskit.circuit.library.IntegerComparator.value" />

### value

The value to compare the qubit register to.

**Returns**

The value against which the value of the qubit register is compared.

