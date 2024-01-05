---
title: RGate
description: API reference for qiskit.circuit.library.RGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RGate
---

# qiskit.circuit.library.RGate

<span id="qiskit.circuit.library.RGate" />

`RGate(theta, phi)`

Rotation θ around the cos(φ)x + sin(φ)y axis.

**Circuit symbol:**

```python
     ┌──────┐
q_0: ┤ R(ϴ) ├
     └──────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R(\theta, \phi) = e^{-i \th (\cos{\phi} x + \sin{\phi} y)} =
    \begin{pmatrix}
        \cos{\th} & -i e^{-i \phi} \sin{\th} \\
        -i e^{i \phi} \sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new r single-qubit gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.RGate.__init__" />

`__init__(theta, phi)`

Create new r single-qubit gate.

## Methods

## Attributes

### add\_decomposition

<span id="qiskit.circuit.library.RGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.RGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.RGate.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

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

<span id="qiskit.circuit.library.RGate.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### control

<span id="qiskit.circuit.library.RGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

### copy

<span id="qiskit.circuit.library.RGate.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### decompositions

<span id="qiskit.circuit.library.RGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.RGate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.library.RGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.RGate.inverse" />

`inverse()`

Invert this gate.

r(θ, φ)^dagger = r(-θ, φ)

### is\_parameterized

<span id="qiskit.circuit.library.RGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.RGate.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.RGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.library.RGate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.library.RGate.power" />

`power(exponent)`

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

<span id="qiskit.circuit.library.RGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.RGate.repeat" />

`repeat(n)`

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

<span id="qiskit.circuit.library.RGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.RGate.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.library.RGate.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### unit

<span id="qiskit.circuit.library.RGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.RGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

