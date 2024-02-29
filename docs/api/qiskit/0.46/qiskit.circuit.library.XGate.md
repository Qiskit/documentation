---
title: XGate
description: API reference for qiskit.circuit.library.XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.XGate
---

# XGate

<span id="qiskit.circuit.library.XGate" />

`qiskit.circuit.library.XGate(*args, _force_mutable=False, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: [`SingletonGate`](circuit_singleton#qiskit.circuit.singleton.SingletonGate "qiskit.circuit.singleton.SingletonGate")

The single-qubit Pauli-X gate ($\sigma_x$).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`x()`](qiskit.circuit.QuantumCircuit#x "qiskit.circuit.QuantumCircuit.x") method.

**Matrix Representation:**

$$
X = \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}
$$

**Circuit symbol:**

```python
     ┌───┐
q_0: ┤ X ├
     └───┘
```

Equivalent to a $\pi$ radian rotation about the X axis.

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(\pi)$ and $X$.

  $$
  RX(\pi) = \begin{pmatrix}
              0 & -i \\
              -i & 0
            \end{pmatrix}
          = -i X
  $$
</Admonition>

The gate is equivalent to a classical bit flip.

$$
|0\rangle \rightarrow |1\rangle \\
|1\rangle \rightarrow |0\rangle
$$

Create new X gate.

## Attributes

<span id="qiskit.circuit.library.XGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.XGate.base_class "qiskit.circuit.library.XGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.XGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.XGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.XGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.XGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.XGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.XGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.XGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.XGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.XGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.XGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.XGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.XGate.unit" />

### unit

Get the time unit of duration.

## Methods

### control

<span id="qiskit.circuit.library.XGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (multi-)controlled-X gate.

One control returns a CX gate. Two controls returns a CCX gate.

**Parameters**

*   **num\_ctrl\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – number of control qubits.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### inverse

<span id="qiskit.circuit.library.XGate.inverse" />

`inverse()`

Return inverted X gate (itself).

