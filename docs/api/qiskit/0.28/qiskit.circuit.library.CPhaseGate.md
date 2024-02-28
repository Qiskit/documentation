---
title: CPhaseGate
description: API reference for qiskit.circuit.library.CPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.CPhaseGate
---

# qiskit.circuit.library.CPhaseGate

<span id="qiskit.circuit.library.CPhaseGate" />

`CPhaseGate(theta, label=None, ctrl_state=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/standard_gates/p.py "view source code")

Controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the control state.

**Circuit symbol:**

```python
q_0: ─■──
      │λ
q_1: ─■──
```

**Matrix representation:**

$$
\begin{split}CPhase =
    |0\rangle\langle 0| \otimes I + |1\rangle\langle 1| \otimes P =
    \begin{pmatrix}
        1 & 0 & 0 & 0 \\
        0 & 1 & 0 & 0 \\
        0 & 0 & 1 & 0 \\
        0 & 0 & 0 & e^{i\lambda}
    \end{pmatrix}\end{split}
$$

<Admonition title="See also" type="note">
  `CRZGate`: Due to the global phase difference in the matrix definitions of Phase and RZ, CPhase and CRZ are different gates with a relative phase difference.
</Admonition>

Create new CPhase gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.CPhaseGate.__init__" />

`__init__(theta, label=None, ctrl_state=None)`

Create new CPhase gate.

## Methods

|                                                                                                                                                       |                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.library.CPhaseGate.__init__ "qiskit.circuit.library.CPhaseGate.__init__")(theta\[, label, ctrl\_state])                  | Create new CPhase gate.                                                     |
| [`add_decomposition`](#qiskit.circuit.library.CPhaseGate.add_decomposition "qiskit.circuit.library.CPhaseGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.    |
| [`assemble`](#qiskit.circuit.library.CPhaseGate.assemble "qiskit.circuit.library.CPhaseGate.assemble")()                                              | Assemble a QasmQobjInstruction                                              |
| [`broadcast_arguments`](#qiskit.circuit.library.CPhaseGate.broadcast_arguments "qiskit.circuit.library.CPhaseGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.              |
| [`c_if`](#qiskit.circuit.library.CPhaseGate.c_if "qiskit.circuit.library.CPhaseGate.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.        |
| [`control`](#qiskit.circuit.library.CPhaseGate.control "qiskit.circuit.library.CPhaseGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Controlled version of this gate.                                            |
| [`copy`](#qiskit.circuit.library.CPhaseGate.copy "qiskit.circuit.library.CPhaseGate.copy")(\[name])                                                   | Copy of the instruction.                                                    |
| [`inverse`](#qiskit.circuit.library.CPhaseGate.inverse "qiskit.circuit.library.CPhaseGate.inverse")()                                                 | Return inverted CPhase gate ($CPhase(\lambda){\dagger} = CPhase(-\lambda)$) |
| [`is_parameterized`](#qiskit.circuit.library.CPhaseGate.is_parameterized "qiskit.circuit.library.CPhaseGate.is_parameterized")()                      | Return True .IFF.                                                           |
| [`mirror`](#qiskit.circuit.library.CPhaseGate.mirror "qiskit.circuit.library.CPhaseGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                                 |
| [`power`](#qiskit.circuit.library.CPhaseGate.power "qiskit.circuit.library.CPhaseGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                    |
| [`qasm`](#qiskit.circuit.library.CPhaseGate.qasm "qiskit.circuit.library.CPhaseGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                       |
| [`repeat`](#qiskit.circuit.library.CPhaseGate.repeat "qiskit.circuit.library.CPhaseGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                |
| [`reverse_ops`](#qiskit.circuit.library.CPhaseGate.reverse_ops "qiskit.circuit.library.CPhaseGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.         |
| [`soft_compare`](#qiskit.circuit.library.CPhaseGate.soft_compare "qiskit.circuit.library.CPhaseGate.soft_compare")(other)                             | Soft comparison between gates.                                              |
| [`to_matrix`](#qiskit.circuit.library.CPhaseGate.to_matrix "qiskit.circuit.library.CPhaseGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                           |
| [`validate_parameter`](#qiskit.circuit.library.CPhaseGate.validate_parameter "qiskit.circuit.library.CPhaseGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression                |

## Attributes

|                                                                                                                             |                                                                               |
| --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ctrl_state`](#qiskit.circuit.library.CPhaseGate.ctrl_state "qiskit.circuit.library.CPhaseGate.ctrl_state")                | Return the control state of the gate as a decimal integer.                    |
| [`decompositions`](#qiskit.circuit.library.CPhaseGate.decompositions "qiskit.circuit.library.CPhaseGate.decompositions")    | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.CPhaseGate.definition "qiskit.circuit.library.CPhaseGate.definition")                | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.CPhaseGate.duration "qiskit.circuit.library.CPhaseGate.duration")                      | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.CPhaseGate.label "qiskit.circuit.library.CPhaseGate.label")                               | Return instruction label                                                      |
| [`name`](#qiskit.circuit.library.CPhaseGate.name "qiskit.circuit.library.CPhaseGate.name")                                  | Get name of gate.                                                             |
| [`num_ctrl_qubits`](#qiskit.circuit.library.CPhaseGate.num_ctrl_qubits "qiskit.circuit.library.CPhaseGate.num_ctrl_qubits") | Get number of control qubits.                                                 |
| [`params`](#qiskit.circuit.library.CPhaseGate.params "qiskit.circuit.library.CPhaseGate.params")                            | Get parameters from base\_gate.                                               |
| [`unit`](#qiskit.circuit.library.CPhaseGate.unit "qiskit.circuit.library.CPhaseGate.unit")                                  | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.CPhaseGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.CPhaseGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.circuit.library.CPhaseGate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.CPhaseGate.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### control

<span id="qiskit.circuit.library.CPhaseGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Controlled version of this gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### copy

<span id="qiskit.circuit.library.CPhaseGate.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### ctrl\_state

<span id="qiskit.circuit.library.CPhaseGate.ctrl_state" />

`property ctrl_state`

Return the control state of the gate as a decimal integer.

**Return type**

`int`

### decompositions

<span id="qiskit.circuit.library.CPhaseGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.CPhaseGate.definition" />

`property definition`

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

### duration

<span id="qiskit.circuit.library.CPhaseGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.CPhaseGate.inverse" />

`inverse()`

Return inverted CPhase gate ($CPhase(\lambda){\dagger} = CPhase(-\lambda)$)

### is\_parameterized

<span id="qiskit.circuit.library.CPhaseGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.CPhaseGate.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.CPhaseGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### name

<span id="qiskit.circuit.library.CPhaseGate.name" />

`property name`

Get name of gate. If the gate has open controls the gate name will become:

> \<original\_name\_o\<ctrl\_state>

where \<original\_name> is the gate name for the default case of closed control qubits and \<ctrl\_state> is the integer value of the control state for the gate.

**Return type**

`str`

### num\_ctrl\_qubits

<span id="qiskit.circuit.library.CPhaseGate.num_ctrl_qubits" />

`property num_ctrl_qubits`

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

### params

<span id="qiskit.circuit.library.CPhaseGate.params" />

`property params`

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

### power

<span id="qiskit.circuit.library.CPhaseGate.power" />

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

<span id="qiskit.circuit.library.CPhaseGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.CPhaseGate.repeat" />

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

<span id="qiskit.circuit.library.CPhaseGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.circuit.library.CPhaseGate.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.circuit.library.CPhaseGate.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### unit

<span id="qiskit.circuit.library.CPhaseGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.CPhaseGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

