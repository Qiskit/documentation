---
title: SXdgGate
description: API reference for qiskit.circuit.library.SXdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SXdgGate
---

# SXdgGate

<span id="qiskit.circuit.library.SXdgGate" />

`qiskit.circuit.library.SXdgGate(*args, _force_mutable=False, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/library/standard_gates/sx.py "view source code")

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

The inverse single-qubit Sqrt(X) gate.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`sxdg()`](qiskit.circuit.QuantumCircuit#sxdg "qiskit.circuit.QuantumCircuit.sxdg") method.

$$
\sqrt{X}^{\dagger} = \frac{1}{2} \begin{pmatrix}
        1 - i & 1 + i \\
        1 + i & 1 - i
    \end{pmatrix}
$$

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(-\pi/2)$ and $\sqrt{X}^{\dagger}$.

  $$
  RX(-\pi/2) = \frac{1}{\sqrt{2}} \begin{pmatrix}
              1 & i \\
              i & 1
            \end{pmatrix}
          = e^{-i \pi/4} \sqrt{X}^{\dagger}
  $$
</Admonition>

Create new SXdg gate.

## Attributes

<span id="qiskit.circuit.library.SXdgGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.SXdgGate.base_class "qiskit.circuit.library.SXdgGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.SXdgGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.SXdgGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.SXdgGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.SXdgGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.SXdgGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.SXdgGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.SXdgGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.SXdgGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.SXdgGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.SXdgGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.SXdgGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.SXdgGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.SXdgGate.inverse" />

`inverse()`

Return inverse SXdg gate (i.e. SX).

