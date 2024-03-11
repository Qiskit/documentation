---
title: RCCXGate
description: API reference for qiskit.circuit.library.RCCXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RCCXGate
---

# RCCXGate

<span id="qiskit.circuit.library.RCCXGate" />

`RCCXGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

The simplified Toffoli gate, also referred to as Margolus gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. This implementation requires three CX gates which is the minimal amount possible, as shown in [https://arxiv.org/abs/quant-ph/0312225](https://arxiv.org/abs/quant-ph/0312225). Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the dashed box of Fig. 3.

Create a new simplified CCX gate.

## Attributes

<span id="qiskit.circuit.library.RCCXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RCCXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RCCXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RCCXGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.RCCXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RCCXGate.unit" />

### unit

Get the time unit of duration.

