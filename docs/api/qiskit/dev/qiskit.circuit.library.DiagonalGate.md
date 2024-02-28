---
title: DiagonalGate
description: API reference for qiskit.circuit.library.DiagonalGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.DiagonalGate
---

# DiagonalGate

<span id="qiskit.circuit.library.DiagonalGate" />

`qiskit.circuit.library.DiagonalGate(diag)` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/generalized_gates/diagonal.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Gate implementing a diagonal transformation.

**Parameters**

**diag** (*Sequence\[*[*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")*]*) – list of the $2^k$ diagonal entries (for a diagonal gate on $k$ qubits).

## Attributes

<span id="qiskit.circuit.library.DiagonalGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.DiagonalGate.base_class "qiskit.circuit.library.DiagonalGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

This is often exactly equivalent to `type(obj)`, except in the case of singleton instances of standard-library instructions. These singleton instances are special subclasses of their base class, and this property will return that base. For example:

```python
>>> isinstance(XGate(), XGate)
True
>>> type(XGate()) is XGate
False
>>> XGate().base_class is XGate
True
```

In general, you should not rely on the precise class of an instruction; within a given circuit, it is expected that `Instruction.name` should be a more suitable discriminator in most situations.

<span id="qiskit.circuit.library.DiagonalGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.DiagonalGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.DiagonalGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.DiagonalGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.DiagonalGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.DiagonalGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.DiagonalGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.DiagonalGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.DiagonalGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.DiagonalGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.DiagonalGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.DiagonalGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.DiagonalGate.inverse" />

`inverse(annotated=False)`

Return the inverse of the diagonal gate.

### validate\_parameter

<span id="qiskit.circuit.library.DiagonalGate.validate_parameter" />

`validate_parameter(parameter)`

Diagonal Gate parameter should accept complex (in addition to the Gate parameter types) and always return build-in complex.

