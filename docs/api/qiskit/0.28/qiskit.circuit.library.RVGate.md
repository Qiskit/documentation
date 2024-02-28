---
title: RVGate
description: API reference for qiskit.circuit.library.RVGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RVGate
---

# qiskit.circuit.library.RVGate

<span id="qiskit.circuit.library.RVGate" />

`RVGate(v_x, v_y, v_z, basis='U')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/generalized_gates/rv.py "view source code")

Rotation around arbitrary rotation axis $v$ where $|v|$ is angle of rotation in radians.

**Circuit symbol:**

```python
     ┌─────────────────┐
q_0: ┤ RV(v_x,v_y,v_z) ├
     └─────────────────┘
```

**Matrix Representation:**

$$
\begin{split}\newcommand{\th}{|\vec{v}|}
\newcommand{\sinc}{\text{sinc}}
    R(\vec{v}) = e^{-i \vec{v}\cdot\vec{\sigma}} =
        \begin{pmatrix}
            \cos{\th} -i v_z \sinc(\th) & -(i v_x + v_y) \sinc(\th) \\
            -(i v_x - v_y) \sinc(\th) & \cos(\th) + i v_z \sinc(\th)
        \end{pmatrix}\end{split}
$$

Create new rv single-qubit gate.

**Parameters**

*   **v\_x** (*float*) – x-component
*   **v\_y** (*float*) – y-component
*   **v\_z** (*float*) – z-component
*   **basis** (*str, optional*) – basis (see `OneQubitEulerDecomposer`)

### \_\_init\_\_

<span id="qiskit.circuit.library.RVGate.__init__" />

`__init__(v_x, v_y, v_z, basis='U')`

Create new rv single-qubit gate.

**Parameters**

*   **v\_x** (*float*) – x-component
*   **v\_y** (*float*) – y-component
*   **v\_z** (*float*) – z-component
*   **basis** (*str, optional*) – basis (see `OneQubitEulerDecomposer`)

## Methods

|                                                                                                                                               |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.RVGate.__init__ "qiskit.circuit.library.RVGate.__init__")(v\_x, v\_y, v\_z\[, basis])                    | Create new rv single-qubit gate.                                         |
| [`add_decomposition`](#qiskit.circuit.library.RVGate.add_decomposition "qiskit.circuit.library.RVGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.RVGate.assemble "qiskit.circuit.library.RVGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.RVGate.broadcast_arguments "qiskit.circuit.library.RVGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.RVGate.c_if "qiskit.circuit.library.RVGate.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`control`](#qiskit.circuit.library.RVGate.control "qiskit.circuit.library.RVGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.circuit.library.RVGate.copy "qiskit.circuit.library.RVGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.RVGate.inverse "qiskit.circuit.library.RVGate.inverse")()                                                 | Invert this gate.                                                        |
| [`is_parameterized`](#qiskit.circuit.library.RVGate.is_parameterized "qiskit.circuit.library.RVGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.RVGate.mirror "qiskit.circuit.library.RVGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.RVGate.power "qiskit.circuit.library.RVGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.RVGate.qasm "qiskit.circuit.library.RVGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.RVGate.repeat "qiskit.circuit.library.RVGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.RVGate.reverse_ops "qiskit.circuit.library.RVGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.RVGate.soft_compare "qiskit.circuit.library.RVGate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.RVGate.to_matrix "qiskit.circuit.library.RVGate.to_matrix")()                                           | Return a numpy.array for the R(v) gate.                                  |
| [`validate_parameter`](#qiskit.circuit.library.RVGate.validate_parameter "qiskit.circuit.library.RVGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.RVGate.decompositions "qiskit.circuit.library.RVGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.RVGate.definition "qiskit.circuit.library.RVGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.RVGate.duration "qiskit.circuit.library.RVGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.RVGate.label "qiskit.circuit.library.RVGate.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.circuit.library.RVGate.params "qiskit.circuit.library.RVGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.RVGate.unit "qiskit.circuit.library.RVGate.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.RVGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.RVGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.RVGate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.RVGate.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### control

<span id="qiskit.circuit.library.RVGate.control" />

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

<span id="qiskit.circuit.library.RVGate.copy" />

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

<span id="qiskit.circuit.library.RVGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.RVGate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.library.RVGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.RVGate.inverse" />

`inverse()`

Invert this gate.

### is\_parameterized

<span id="qiskit.circuit.library.RVGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.RVGate.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.RVGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.library.RVGate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.library.RVGate.power" />

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

<span id="qiskit.circuit.library.RVGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.RVGate.repeat" />

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

<span id="qiskit.circuit.library.RVGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.RVGate.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.library.RVGate.to_matrix" />

`to_matrix()`

Return a numpy.array for the R(v) gate.

### unit

<span id="qiskit.circuit.library.RVGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.RVGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

