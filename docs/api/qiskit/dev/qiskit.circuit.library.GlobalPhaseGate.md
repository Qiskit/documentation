---
title: GlobalPhaseGate
description: API reference for qiskit.circuit.library.GlobalPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GlobalPhaseGate
---

# GlobalPhaseGate

<span id="qiskit.circuit.library.GlobalPhaseGate" />

`qiskit.circuit.library.GlobalPhaseGate(phase, label=None, *, duration=None, unit='dt')` [GitHub](https://github.com/qiskit/qiskit/tree/main/qiskit/circuit/library/standard_gates/global_phase.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

The global phase gate ($e^{i\theta}$).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Mathematical Representation:**

$$
\text{GlobalPhaseGate}\ =
    \begin{pmatrix}
        e^{i\theta}
    \end{pmatrix}


$$

**Parameters**

*   **phase** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – The value of phase it takes.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – An optional label for the gate.

## Attributes

<span id="qiskit.circuit.library.GlobalPhaseGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.GlobalPhaseGate.base_class "qiskit.circuit.library.GlobalPhaseGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.GlobalPhaseGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.GlobalPhaseGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.GlobalPhaseGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.GlobalPhaseGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.GlobalPhaseGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.GlobalPhaseGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.GlobalPhaseGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.GlobalPhaseGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.GlobalPhaseGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.GlobalPhaseGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.GlobalPhaseGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.GlobalPhaseGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.GlobalPhaseGate.inverse" />

`inverse(annotated=False)`

Return inverse GlobalPhaseGate gate.

$\text{GlobalPhaseGate}(\lambda)^{\dagger} = \text{GlobalPhaseGate}(-\lambda)$

**Parameters**

**annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – when set to `True`, this is typically used to return an `AnnotatedOperation` with an inverse modifier set instead of a concrete [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate"). However, for this class this argument is ignored as the inverse is always another [`GlobalPhaseGate`](#qiskit.circuit.library.GlobalPhaseGate "qiskit.circuit.library.GlobalPhaseGate") with an inverted parameter value.

**Returns**

inverse gate.

**Return type**

[GlobalPhaseGate](#qiskit.circuit.library.GlobalPhaseGate "qiskit.circuit.library.GlobalPhaseGate")

