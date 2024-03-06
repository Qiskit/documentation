---
title: IGate
description: API reference for qiskit.circuit.library.IGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.IGate
---

# IGate

<span id="qiskit.circuit.library.IGate" />

`qiskit.circuit.library.IGate(*args, _force_mutable=False, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/circuit/library/standard_gates/i.py "view source code")

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

Identity gate.

Identity gate corresponds to a single-qubit gate wait cycle, and should not be optimized or unrolled (it is an opaque gate).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`i()`](qiskit.circuit.QuantumCircuit#i "qiskit.circuit.QuantumCircuit.i") and [`id()`](qiskit.circuit.QuantumCircuit#id "qiskit.circuit.QuantumCircuit.id") methods.

**Matrix Representation:**

$$
I = \begin{pmatrix}
        1 & 0 \\
        0 & 1
    \end{pmatrix}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ I ├
     └───┘
```

Create new Identity gate.

## Attributes

<span id="qiskit.circuit.library.IGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.IGate.base_class "qiskit.circuit.library.IGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.IGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.IGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.IGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.IGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.IGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.IGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.IGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.IGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.IGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.IGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.IGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.IGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.IGate.inverse" />

`inverse()`

Invert this gate.

### power

<span id="qiskit.circuit.library.IGate.power" />

`power(exponent)`

Raise gate to a power.

