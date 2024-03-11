---
title: MCXRecursive
description: API reference for qiskit.circuit.library.MCXRecursive
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCXRecursive
---

# MCXRecursive

<span id="qiskit.circuit.library.MCXRecursive" />

`qiskit.circuit.library.MCXRecursive(num_ctrl_qubits=None, label=None, ctrl_state=None, *, duration=None, unit='dt', _base_label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/circuit/library/standard_gates/x.py "view source code")

Bases: [`MCXGate`](qiskit.circuit.library.MCXGate "qiskit.circuit.library.standard_gates.x.MCXGate")

Implement the multi-controlled X gate using recursion.

Using a single ancilla qubit, the multi-controlled X gate is recursively split onto four sub-registers. This is done until we reach the 3- or 4-controlled X gate since for these we have a concrete implementation that do not require ancillas.

Create new MCX gate.

## Attributes

<span id="qiskit.circuit.library.MCXRecursive.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.circuit.library.MCXRecursive.base_class "qiskit.circuit.library.MCXRecursive.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.circuit.library.MCXRecursive.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.circuit.library.MCXRecursive.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.MCXRecursive.ctrl_state" />

### ctrl\_state

Return the control state of the gate as a decimal integer.

<span id="qiskit.circuit.library.MCXRecursive.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.MCXRecursive.definition" />

### definition

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

<span id="qiskit.circuit.library.MCXRecursive.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.MCXRecursive.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.MCXRecursive.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.circuit.library.MCXRecursive.name" />

### name

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

<span id="qiskit.circuit.library.MCXRecursive.num_ancilla_qubits" />

### num\_ancilla\_qubits

The number of ancilla qubits.

<span id="qiskit.circuit.library.MCXRecursive.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.MCXRecursive.num_ctrl_qubits" />

### num\_ctrl\_qubits

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

<span id="qiskit.circuit.library.MCXRecursive.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.MCXRecursive.params" />

### params

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – Controlled gate does not define a base gate

<span id="qiskit.circuit.library.MCXRecursive.unit" />

### unit

Get the time unit of duration.

## Methods

### get\_num\_ancilla\_qubits

<span id="qiskit.circuit.library.MCXRecursive.get_num_ancilla_qubits" />

`static get_num_ancilla_qubits(num_ctrl_qubits, mode='recursion')`

Get the number of required ancilla qubits.

### inverse

<span id="qiskit.circuit.library.MCXRecursive.inverse" />

`inverse()`

Invert this gate. The MCX is its own inverse.

