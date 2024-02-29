---
title: PermutationGate
description: API reference for qiskit.circuit.library.PermutationGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PermutationGate
---

# PermutationGate

<span id="qiskit.circuit.library.PermutationGate" />

`PermutationGate(pattern)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/circuit/library/generalized_gates/permutation.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A gate that permutes qubits.

Return a permutation gate.

**Parameters**

**pattern** (`List`\[`int`]) – permutation pattern, describing which qubits occupy the positions 0, 1, 2, etc. after applying the permutation, that is `pattern[k] = m` when the permutation maps qubit `m` to position `k`. As an example, the pattern `[2, 4, 3, 0, 1]` means that qubit `2` goes to position `0`, qubit `4` goes to the position `1`, etc.

**Raises**

**CircuitError** – if permutation pattern is malformed.

**Reference Circuit:**

![../\_images/qiskit-circuit-library-PermutationGate-1.png](/images/api/qiskit/0.41/qiskit-circuit-library-PermutationGate-1.png)

**Expanded Circuit:**

![../\_images/qiskit-circuit-library-PermutationGate-2.png](/images/api/qiskit/0.41/qiskit-circuit-library-PermutationGate-2.png)

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.PermutationGate.inverse" />

`PermutationGate.inverse()`

Returns the inverse of the permutation.

### qasm

<span id="qiskit.circuit.library.PermutationGate.qasm" />

`PermutationGate.qasm()`

The qasm for a permutation.

### validate\_parameter

<span id="qiskit.circuit.library.PermutationGate.validate_parameter" />

`PermutationGate.validate_parameter(parameter)`

Parameter validation.

## Attributes

<span id="qiskit.circuit.library.PermutationGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.circuit.library.PermutationGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.PermutationGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.PermutationGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.PermutationGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.PermutationGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.PermutationGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.PermutationGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.PermutationGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.PermutationGate.pattern" />

### pattern

Returns the permutation pattern defining this permutation.

<span id="qiskit.circuit.library.PermutationGate.unit" />

### unit

Get the time unit of duration.

