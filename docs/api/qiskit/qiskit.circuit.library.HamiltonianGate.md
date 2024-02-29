---
title: HamiltonianGate
description: API reference for qiskit.circuit.library.HamiltonianGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.HamiltonianGate
---

# HamiltonianGate

<span id="qiskit.circuit.library.HamiltonianGate" />

`qiskit.circuit.library.HamiltonianGate(data, time, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/circuit/library/hamiltonian_gate.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Class for representing evolution by a Hamiltonian operator as a gate.

This gate resolves to a [`UnitaryGate`](qiskit.circuit.library.UnitaryGate "qiskit.circuit.library.UnitaryGate") as $U(t) = \exp(-i t H)$, which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

**Parameters**

*   **data** (*np.ndarray |* [*Gate*](qiskit.circuit.Gate "qiskit.circuit.Gate") *| BaseOperator*) – A hermitian operator.
*   **time** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")) – Time evolution parameter.
*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Unitary name for backend \[Default: `None`].

**Raises**

[**ValueError**](https://docs.python.org/3/library/exceptions.html#ValueError "(in Python v3.12)") – if input data is not an N-qubit unitary operator.

## Attributes

<span id="qiskit.circuit.library.HamiltonianGate.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.HamiltonianGate.base_class "qiskit.circuit.library.HamiltonianGate.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.HamiltonianGate.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.HamiltonianGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.HamiltonianGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.HamiltonianGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.HamiltonianGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.HamiltonianGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.HamiltonianGate.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.HamiltonianGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.HamiltonianGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.HamiltonianGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.HamiltonianGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.HamiltonianGate.unit" />

### unit

Get the time unit of duration.

## Methods

### adjoint

<span id="qiskit.circuit.library.HamiltonianGate.adjoint" />

`adjoint()`

Return the adjoint of the unitary.

### conjugate

<span id="qiskit.circuit.library.HamiltonianGate.conjugate" />

`conjugate()`

Return the conjugate of the Hamiltonian.

### inverse

<span id="qiskit.circuit.library.HamiltonianGate.inverse" />

`inverse(annotated=False)`

Return the adjoint of the unitary.

### transpose

<span id="qiskit.circuit.library.HamiltonianGate.transpose" />

`transpose()`

Return the transpose of the Hamiltonian.

### validate\_parameter

<span id="qiskit.circuit.library.HamiltonianGate.validate_parameter" />

`validate_parameter(parameter)`

Hamiltonian parameter has to be an ndarray, operator or float.

