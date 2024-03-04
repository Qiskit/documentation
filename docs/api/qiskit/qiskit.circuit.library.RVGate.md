---
title: RVGate
description: API reference for qiskit.circuit.library.RVGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RVGate
---

# RVGate

<span id="qiskit.circuit.library.RVGate" />

`qiskit.circuit.library.RVGate(v_x, v_y, v_z, basis='U')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/library/generalized_gates/rv.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Rotation around arbitrary rotation axis $v$ where $|v|$ is angle of rotation in radians.

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") with the [`rv()`](qiskit.circuit.QuantumCircuit#rv "qiskit.circuit.QuantumCircuit.rv") method.

**Circuit symbol:**

```python
     ┌─────────────────┐
q_0: ┤ RV(v_x,v_y,v_z) ├
     └─────────────────┘
```

**Matrix Representation:**

$$
\newcommand{\rotationangle}{|\vec{v}|}
\newcommand{\sinc}{\text{sinc}}
    R(\vec{v}) = e^{-i \vec{v}\cdot\vec{\sigma}} =
        \begin{pmatrix}
            \cos\left(\rotationangle\right) -i v_z \sinc\left(\rotationangle\right)
            & -(i v_x + v_y) \sinc\left(\rotationangle\right) \\
            -(i v_x - v_y) \sinc\left(\rotationangle\right)
            & \cos\left(\rotationangle\right) + i v_z \sinc\left(\rotationangle\right)
        \end{pmatrix}
$$

Create new rv single-qubit gate.

**Parameters**

*   **v\_x** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – x-component
*   **v\_y** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – y-component
*   **v\_z** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – z-component
*   **basis** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*, optional*) – basis (see [`OneQubitEulerDecomposer`](qiskit.synthesis.OneQubitEulerDecomposer "qiskit.synthesis.one_qubit.one_qubit_decompose.OneQubitEulerDecomposer"))

## Attributes

<span id="qiskit.circuit.library.RVGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.RVGate.base_class "qiskit.circuit.library.RVGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.RVGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.RVGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.RVGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.RVGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.RVGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.RVGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.RVGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.RVGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.RVGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.RVGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.RVGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.RVGate.unit" />

### unit

Get the time unit of duration.

## Methods

### inverse

<span id="qiskit.circuit.library.RVGate.inverse" />

`inverse(annotated=False)`

Invert this gate.

### to\_matrix

<span id="qiskit.circuit.library.RVGate.to_matrix" />

`to_matrix()`

Return a numpy.array for the R(v) gate.

