---
title: PermutationGate
description: API reference for qiskit.circuit.library.PermutationGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.PermutationGate
---

# PermutationGate

<span id="qiskit.circuit.library.PermutationGate" />

`qiskit.circuit.library.PermutationGate(pattern)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/circuit/library/generalized_gates/permutation.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

A gate that permutes qubits.

Return a permutation gate.

**Parameters**

**pattern** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – permutation pattern, describing which qubits occupy the positions 0, 1, 2, etc. after applying the permutation, that is `pattern[k] = m` when the permutation maps qubit `m` to position `k`. As an example, the pattern `[2, 4, 3, 0, 1]` means that qubit `2` goes to position `0`, qubit `4` goes to the position `1`, etc.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if permutation pattern is malformed.

**Reference Circuit:**

![../\_images/qiskit-circuit-library-PermutationGate-1.png](/images/api/qiskit/0.44/qiskit-circuit-library-PermutationGate-1.png)

**Expanded Circuit:**

![../\_images/qiskit-circuit-library-PermutationGate-2.png](/images/api/qiskit/0.44/qiskit-circuit-library-PermutationGate-2.png)

## Attributes

<span id="qiskit.circuit.library.PermutationGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

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

## Methods

### inverse

<span id="qiskit.circuit.library.PermutationGate.inverse" />

`inverse()`

Returns the inverse of the permutation.

### validate\_parameter

<span id="qiskit.circuit.library.PermutationGate.validate_parameter" />

`validate_parameter(parameter)`

Parameter validation.

