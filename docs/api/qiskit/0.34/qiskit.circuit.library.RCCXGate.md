# RCCXGate[¶](#rccxgate "Permalink to this headline")

<span id="undefined" />

`RCCXGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The simplified Toffoli gate, also referred to as Margolus gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. This implementation requires three CX gates which is the minimal amount possible, as shown in [https://arxiv.org/abs/quant-ph/0312225](https://arxiv.org/abs/quant-ph/0312225). Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the dashed box of Fig. 3.

Create a new simplified CCX gate.

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
