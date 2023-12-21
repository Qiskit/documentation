# RC3XGate

`RC3XGate(label=None)`

Bases: `qiskit.circuit.gate.Gate`

The simplified 3-controlled Toffoli gate.

The simplified Toffoli gate implements the Toffoli gate up to relative phases. Note, that the simplified Toffoli is not equivalent to the Toffoli. But can be used in places where the Toffoli gate is uncomputed again.

This concrete implementation is from [https://arxiv.org/abs/1508.03273](https://arxiv.org/abs/1508.03273), the complete circuit of Fig. 4.

Create a new RC3X gate.

## Attributes

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### duration

Get the duration.

### label

Return instruction label

**Return type**

`str`

### params

return instruction params.

### unit

Get the time unit of duration.
