---
title: U2Gate
description: API reference for qiskit.circuit.library.U2Gate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.U2Gate
---

# qiskit.circuit.library.U2Gate

<span id="qiskit.circuit.library.U2Gate" />

`U2Gate(phi, lam, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/standard_gates/u2.py "view source code")

Single-qubit rotation about the X+Z axis.

Implemented using one X90 pulse on IBM Quantum systems:

$$
U2(\phi, \lambda) = RZ(\phi).RY(\frac{\pi}{2}).RZ(\lambda)
$$

**Circuit symbol:**

```python
     ┌─────────┐
q_0: ┤ U2(φ,λ) ├
     └─────────┘
```

**Matrix Representation:**

$$
\begin{split}U2(\phi, \lambda) = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        1          & -e^{i\lambda} \\
        e^{i\phi} & e^{i(\phi+\lambda)}
    \end{pmatrix}\end{split}
$$

**Examples:**

$$
U2(0, \pi) = H
U2(0, 0) = RY(\pi/2)
U2(-\pi/2, \pi/2) = RX(\pi/2)
$$

<Admonition title="See also" type="note">
  `U3Gate`: U3 is a generalization of U2 that covers all single-qubit rotations, using two X90 pulses.
</Admonition>

Create new U2 gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.U2Gate.__init__" />

`__init__(phi, lam, label=None)`

Create new U2 gate.

## Methods

|                                                                                                                                               |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.U2Gate.__init__ "qiskit.circuit.library.U2Gate.__init__")(phi, lam\[, label])                            | Create new U2 gate.                                                      |
| [`add_decomposition`](#qiskit.circuit.library.U2Gate.add_decomposition "qiskit.circuit.library.U2Gate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.U2Gate.assemble "qiskit.circuit.library.U2Gate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.U2Gate.broadcast_arguments "qiskit.circuit.library.U2Gate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.U2Gate.c_if "qiskit.circuit.library.U2Gate.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`control`](#qiskit.circuit.library.U2Gate.control "qiskit.circuit.library.U2Gate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.circuit.library.U2Gate.copy "qiskit.circuit.library.U2Gate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.U2Gate.inverse "qiskit.circuit.library.U2Gate.inverse")()                                                 | Return inverted U2 gate.                                                 |
| [`is_parameterized`](#qiskit.circuit.library.U2Gate.is_parameterized "qiskit.circuit.library.U2Gate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.U2Gate.mirror "qiskit.circuit.library.U2Gate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.U2Gate.power "qiskit.circuit.library.U2Gate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.U2Gate.qasm "qiskit.circuit.library.U2Gate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.U2Gate.repeat "qiskit.circuit.library.U2Gate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.U2Gate.reverse_ops "qiskit.circuit.library.U2Gate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.circuit.library.U2Gate.soft_compare "qiskit.circuit.library.U2Gate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.circuit.library.U2Gate.to_matrix "qiskit.circuit.library.U2Gate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.U2Gate.validate_parameter "qiskit.circuit.library.U2Gate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.U2Gate.decompositions "qiskit.circuit.library.U2Gate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.U2Gate.definition "qiskit.circuit.library.U2Gate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.U2Gate.duration "qiskit.circuit.library.U2Gate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.U2Gate.label "qiskit.circuit.library.U2Gate.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.circuit.library.U2Gate.params "qiskit.circuit.library.U2Gate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.U2Gate.unit "qiskit.circuit.library.U2Gate.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.U2Gate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.U2Gate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.U2Gate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.U2Gate.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### control

<span id="qiskit.circuit.library.U2Gate.control" />

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

<span id="qiskit.circuit.library.U2Gate.copy" />

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

<span id="qiskit.circuit.library.U2Gate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.U2Gate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.library.U2Gate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.U2Gate.inverse" />

`inverse()`

Return inverted U2 gate.

$U2(\phi, \lambda)^{\dagger} =U2(-\lambda-\pi, -\phi+\pi)$)

### is\_parameterized

<span id="qiskit.circuit.library.U2Gate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.U2Gate.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.U2Gate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.library.U2Gate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.library.U2Gate.power" />

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

<span id="qiskit.circuit.library.U2Gate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.U2Gate.repeat" />

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

<span id="qiskit.circuit.library.U2Gate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.U2Gate.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.library.U2Gate.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### unit

<span id="qiskit.circuit.library.U2Gate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.U2Gate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

