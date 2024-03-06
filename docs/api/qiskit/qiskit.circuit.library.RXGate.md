---
title: RXGate
description: API reference for qiskit.circuit.library.RXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXGate
---

# RXGate

<span id="qiskit.circuit.library.RXGate" />

`qiskit.circuit.library.RXGate(theta, label=None, *, duration=None, unit='dt')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/library/standard_gates/rx.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Single-qubit rotation about the X axis.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rx()`](qiskit.circuit.QuantumCircuit#rx "qiskit.circuit.QuantumCircuit.rx") method.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
\newcommand{\rotationangle}{\frac{\theta}{2}}

RX(\theta) = \exp\left(-i \rotationangle X\right) =
    \begin{pmatrix}
        \cos\left(\rotationangle\right)   & -i\sin\left(\rotationangle\right) \\
        -i\sin\left(\rotationangle\right) & \cos\left(\rotationangle\right)
    \end{pmatrix}
$$

Create new RX gate.

## Attributes

<span id="qiskit.circuit.library.RXGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.RXGate.base_class "qiskit.circuit.library.RXGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.RXGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.RXGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RXGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RXGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RXGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RXGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RXGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.RXGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RXGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RXGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RXGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RXGate.unit" />

### unit

Get the time unit of duration.

## Methods

### control

<span id="qiskit.circuit.library.RXGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None, annotated=False)`

Return a (multi-)controlled-RX gate.

**Parameters**

*   **num\_ctrl\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of control qubits.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – An optional label for the gate \[Default: `None`]
*   **ctrl\_state** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – control state expressed as integer, string (e.g.\`\`’110’`), or ``None`. If `None`, use all 1s.
*   **annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – indicates whether the controlled gate can be implemented as an annotated gate.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.RXGate.inverse" />

`inverse(annotated=False)`

Return inverted RX gate.

$RX(\lambda)^{\dagger} = RX(-\lambda)$

**Parameters**

**annotated** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – when set to `True`, this is typically used to return an [`AnnotatedOperation`](qiskit.circuit.AnnotatedOperation "qiskit.circuit.AnnotatedOperation") with an inverse modifier set instead of a concrete [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate"). However, for this class this argument is ignored as the inverse of this gate is always a [`RXGate`](#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate") with an inverted parameter value.

**Returns**

inverse gate.

**Return type**

[RXGate](#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate")

### power

<span id="qiskit.circuit.library.RXGate.power" />

`power(exponent)`

Raise gate to a power.

