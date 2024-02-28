---
title: UCRYGate
description: API reference for qiskit.circuit.library.UCRYGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.UCRYGate
---

# UCRYGate

<span id="qiskit.circuit.library.UCRYGate" />

`qiskit.circuit.library.UCRYGate(angle_list)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/library/generalized_gates/ucry.py "view source code")

Bases: [`UCPauliRotGate`](qiskit.circuit.library.UCPauliRotGate "qiskit.circuit.library.generalized_gates.uc_pauli_rot.UCPauliRotGate")

Uniformly controlled Pauli-Y rotations.

Implements the [`UCGate`](qiskit.circuit.library.UCGate "qiskit.circuit.library.UCGate") for the special case that all unitaries are Pauli-Y rotations, $U_i = R_Y(a_i)$ where $a_i \in \mathbb{R}$ is the rotation angle.

**Parameters**

**angle\_list** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]*) – List of rotation angles $[a_0, ..., a_{2^{k-1}}]$.

## Attributes

<span id="qiskit.circuit.library.UCRYGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.UCRYGate.base_class "qiskit.circuit.library.UCRYGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.UCRYGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.UCRYGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.UCRYGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.UCRYGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.UCRYGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.UCRYGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.UCRYGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.UCRYGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.UCRYGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.UCRYGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.UCRYGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.UCRYGate.unit" />

### unit

Get the time unit of duration.

