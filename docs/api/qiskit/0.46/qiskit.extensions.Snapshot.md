---
title: Snapshot
description: API reference for qiskit.extensions.Snapshot
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Snapshot
---

# Snapshot

<span id="qiskit.extensions.Snapshot" />

`qiskit.extensions.Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/extensions/simulator/snapshot.py "view source code")

Bases: [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

Simulator snapshot instruction.

Create new snapshot instruction.

<Admonition title="Deprecated since version 0.45.0" type="danger">
  The class `qiskit.extensions.simulator.snapshot.Snapshot` is deprecated as of qiskit 0.45.0. It will be removed in the Qiskit 1.0 release. The Snapshot instruction has been superseded by Qiskit Aer’s save instructions, see [https://qiskit.org/ecosystem/aer/apidocs/aer\_library.html#saving-simulator-data](https://qiskit.org/ecosystem/aer/apidocs/aer_library.html#saving-simulator-data).
</Admonition>

**Parameters**

*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – the snapshot label for result data.
*   **snapshot\_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – the type of the snapshot.
*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the number of qubits for the snapshot type \[Default: 0].
*   **num\_clbits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – the number of classical bits for the snapshot type \[Default: 0].
*   **params** ([*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)") *or None*) – the parameters for snapshot\_type \[Default: None].

**Raises**

[**ExtensionError**](extensions#qiskit.extensions.ExtensionError "qiskit.extensions.ExtensionError") – if snapshot label is invalid.

## Attributes

<span id="qiskit.extensions.Snapshot.base_class" />

### base\_class

Get the base class of this instruction. This is guaranteed to be in the inheritance tree of `self`.

The “base class” of an instruction is the lowest class in its inheritance tree that the object should be considered entirely compatible with for \_all\_ circuit applications. This typically means that the subclass is defined purely to offer some sort of programmer convenience over the base class, and the base class is the “true” class for a behavioural perspective. In particular, you should *not* override [`base_class`](#qiskit.extensions.Snapshot.base_class "qiskit.extensions.Snapshot.base_class") if you are defining a custom version of an instruction that will be implemented differently by hardware, such as an alternative measurement strategy, or a version of a parametrised gate with a particular set of parameters for the purposes of distinguishing it in a [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target") from the full parametrised gate.

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

<span id="qiskit.extensions.Snapshot.condition" />

### condition

The classical condition on the instruction.

<span id="qiskit.extensions.Snapshot.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.extensions.Snapshot.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.Snapshot.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.Snapshot.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.Snapshot.label" />

### label

Return instruction label

<span id="qiskit.extensions.Snapshot.mutable" />

### mutable

Is this instance is a mutable unique instance or not.

If this attribute is `False` the gate instance is a shared singleton and is not mutable.

<span id="qiskit.extensions.Snapshot.name" />

### name

Return the name.

<span id="qiskit.extensions.Snapshot.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.Snapshot.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.Snapshot.params" />

### params

return instruction params.

<span id="qiskit.extensions.Snapshot.snapshot_type" />

### snapshot\_type

Return snapshot type

<span id="qiskit.extensions.Snapshot.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.extensions.Snapshot.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.extensions.Snapshot.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.Snapshot.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.Snapshot.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.extensions.Snapshot.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.extensions.Snapshot.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.extensions.Snapshot.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.extensions.Snapshot.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. `measure q[0] -> c[0];`).

<Admonition title="Deprecated since version 0.25.0" type="danger">
  The method `qiskit.circuit.instruction.Instruction.qasm()` is deprecated as of qiskit-terra 0.25.0. It will be removed in the Qiskit 1.0 release. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

### repeat

<span id="qiskit.extensions.Snapshot.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If n \< 1.

### reverse\_ops

<span id="qiskit.extensions.Snapshot.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.Snapshot.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### to\_mutable

<span id="qiskit.extensions.Snapshot.to_mutable" />

`to_mutable()`

Return a mutable copy of this gate.

This method will return a new mutable copy of this gate instance. If a singleton instance is being used this will be a new unique instance that can be mutated. If the instance is already mutable it will be a deepcopy of that instance.

### validate\_parameter

<span id="qiskit.extensions.Snapshot.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

