---
title: RC3XGate
description: API reference for qiskit.circuit.library.RC3XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RC3XGate
---

# RC3XGate

<span id="qiskit.circuit.library.RC3XGate" />

`RC3XGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.20/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

The simplified 3-controlled Toffoli gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the complete circuit of Fig. 4.

Create a new RC3X gate.

## Attributes

<span id="qiskit.circuit.library.RC3XGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.circuit.library.RC3XGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RC3XGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RC3XGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RC3XGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.RC3XGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RC3XGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RC3XGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RC3XGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RC3XGate.unit" />

### unit

Get the time unit of duration.

