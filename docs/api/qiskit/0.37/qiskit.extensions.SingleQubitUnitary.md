---
title: SingleQubitUnitary
description: API reference for qiskit.extensions.SingleQubitUnitary
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.SingleQubitUnitary
---

# SingleQubitUnitary

<span id="qiskit.extensions.SingleQubitUnitary" />

`SingleQubitUnitary(unitary_matrix, mode='ZYZ', up_to_diagonal=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/extensions/quantum_initializer/squ.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

u = 2\*2 unitary (given as a (complex) numpy.ndarray)

mode - determines the used decomposition by providing the rotation axes

**up\_to\_diagonal - the single-qubit unitary is decomposed up to a diagonal matrix,**

i.e. a unitary u’ is implemented such that there exists a 2\*2 diagonal gate d with u = d.dot(u’).

Create a new single qubit gate based on the unitary `u`.

## Methods

### add\_decomposition

<span id="qiskit.extensions.SingleQubitUnitary.add_decomposition" />

`SingleQubitUnitary.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.extensions.SingleQubitUnitary.assemble" />

`SingleQubitUnitary.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.SingleQubitUnitary.broadcast_arguments" />

`SingleQubitUnitary.broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.SingleQubitUnitary.c_if" />

`SingleQubitUnitary.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### control

<span id="qiskit.extensions.SingleQubitUnitary.control" />

`SingleQubitUnitary.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`int`) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.extensions.SingleQubitUnitary.copy" />

`SingleQubitUnitary.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.extensions.SingleQubitUnitary.inverse" />

`SingleQubitUnitary.inverse()`

Return the inverse.

Note that the resulting gate has an empty `params` property.

### is\_parameterized

<span id="qiskit.extensions.SingleQubitUnitary.is_parameterized" />

`SingleQubitUnitary.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### power

<span id="qiskit.extensions.SingleQubitUnitary.power" />

`SingleQubitUnitary.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

### qasm

<span id="qiskit.extensions.SingleQubitUnitary.qasm" />

`SingleQubitUnitary.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.extensions.SingleQubitUnitary.repeat" />

`SingleQubitUnitary.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### reverse\_ops

<span id="qiskit.extensions.SingleQubitUnitary.reverse_ops" />

`SingleQubitUnitary.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.SingleQubitUnitary.soft_compare" />

`SingleQubitUnitary.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.extensions.SingleQubitUnitary.to_matrix" />

`SingleQubitUnitary.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### validate\_parameter

<span id="qiskit.extensions.SingleQubitUnitary.validate_parameter" />

`SingleQubitUnitary.validate_parameter(parameter)`

Single-qubit unitary gate parameter has to be an ndarray.

## Attributes

<span id="qiskit.extensions.SingleQubitUnitary.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.extensions.SingleQubitUnitary.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.SingleQubitUnitary.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.SingleQubitUnitary.diag" />

### diag

Returns the diagonal gate D up to which the single-qubit unitary u is implemented.

I.e. u=D.u’, where u’ is the unitary implemented by the found circuit.

<span id="qiskit.extensions.SingleQubitUnitary.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.SingleQubitUnitary.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.extensions.SingleQubitUnitary.name" />

### name

Return the name.

<span id="qiskit.extensions.SingleQubitUnitary.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.SingleQubitUnitary.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.SingleQubitUnitary.params" />

### params

return instruction params.

<span id="qiskit.extensions.SingleQubitUnitary.unit" />

### unit

Get the time unit of duration.

