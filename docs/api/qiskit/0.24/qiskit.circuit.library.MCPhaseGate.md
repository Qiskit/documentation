---
title: MCPhaseGate
description: API reference for qiskit.circuit.library.MCPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCPhaseGate
---

<span id="qiskit-circuit-library-mcphasegate" />

# qiskit.circuit.library.MCPhaseGate

<span id="qiskit.circuit.library.MCPhaseGate" />

`MCPhaseGate(lam, num_ctrl_qubits, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/circuit/library/standard_gates/p.py "view source code")

Multi-controlled-Phase gate.

This is a diagonal and symmetric gate that induces a phase on the state of the target qubit, depending on the state of the control qubits.

**Circuit symbol:**

```python
    q_0: ───■────
            │
            .
            │
q_(n-1): ───■────
         ┌──┴───┐
    q_n: ┤ P(λ) ├
         └──────┘
```

<Admonition title="See also" type="note">
  `CPhaseGate`: The singly-controlled-version of this gate.
</Admonition>

Create new MCPhase gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.MCPhaseGate.__init__" />

`__init__(lam, num_ctrl_qubits, label=None)`

Create new MCPhase gate.

## Methods

|                                                                                                                                                         |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.MCPhaseGate.__init__ "qiskit.circuit.library.MCPhaseGate.__init__")(lam, num\_ctrl\_qubits\[, label])              | Create new MCPhase gate.                                                 |
| [`add_decomposition`](#qiskit.circuit.library.MCPhaseGate.add_decomposition "qiskit.circuit.library.MCPhaseGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.MCPhaseGate.assemble "qiskit.circuit.library.MCPhaseGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.MCPhaseGate.broadcast_arguments "qiskit.circuit.library.MCPhaseGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.MCPhaseGate.c_if "qiskit.circuit.library.MCPhaseGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.MCPhaseGate.control "qiskit.circuit.library.MCPhaseGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Controlled version of this gate.                                         |
| [`copy`](#qiskit.circuit.library.MCPhaseGate.copy "qiskit.circuit.library.MCPhaseGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.MCPhaseGate.inverse "qiskit.circuit.library.MCPhaseGate.inverse")()                                                 | Return inverted MCU1 gate ($MCU1(\lambda){\dagger} = MCU1(-\lambda)$)    |
| [`is_parameterized`](#qiskit.circuit.library.MCPhaseGate.is_parameterized "qiskit.circuit.library.MCPhaseGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.MCPhaseGate.mirror "qiskit.circuit.library.MCPhaseGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.MCPhaseGate.power "qiskit.circuit.library.MCPhaseGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.MCPhaseGate.qasm "qiskit.circuit.library.MCPhaseGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.MCPhaseGate.repeat "qiskit.circuit.library.MCPhaseGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.MCPhaseGate.reverse_ops "qiskit.circuit.library.MCPhaseGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`to_matrix`](#qiskit.circuit.library.MCPhaseGate.to_matrix "qiskit.circuit.library.MCPhaseGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`validate_parameter`](#qiskit.circuit.library.MCPhaseGate.validate_parameter "qiskit.circuit.library.MCPhaseGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                               |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ctrl_state`](#qiskit.circuit.library.MCPhaseGate.ctrl_state "qiskit.circuit.library.MCPhaseGate.ctrl_state")                | Return the control state of the gate as a decimal integer.                    |
| [`decompositions`](#qiskit.circuit.library.MCPhaseGate.decompositions "qiskit.circuit.library.MCPhaseGate.decompositions")    | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.MCPhaseGate.definition "qiskit.circuit.library.MCPhaseGate.definition")                | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.MCPhaseGate.duration "qiskit.circuit.library.MCPhaseGate.duration")                      | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.MCPhaseGate.label "qiskit.circuit.library.MCPhaseGate.label")                               | Return gate label                                                             |
| [`num_ctrl_qubits`](#qiskit.circuit.library.MCPhaseGate.num_ctrl_qubits "qiskit.circuit.library.MCPhaseGate.num_ctrl_qubits") | Get number of control qubits.                                                 |
| [`params`](#qiskit.circuit.library.MCPhaseGate.params "qiskit.circuit.library.MCPhaseGate.params")                            | Get parameters from base\_gate.                                               |
| [`unit`](#qiskit.circuit.library.MCPhaseGate.unit "qiskit.circuit.library.MCPhaseGate.unit")                                  | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.MCPhaseGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.MCPhaseGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.circuit.library.MCPhaseGate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.MCPhaseGate.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.MCPhaseGate.control" />

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

<span id="qiskit.circuit.library.MCPhaseGate.copy" />

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

<span id="qiskit.circuit.library.MCPhaseGate.ctrl_state" />

`property ctrl_state`

Return the control state of the gate as a decimal integer.

**Return type**

`int`

### decompositions

<span id="qiskit.circuit.library.MCPhaseGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.MCPhaseGate.definition" />

`property definition`

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

### duration

<span id="qiskit.circuit.library.MCPhaseGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.MCPhaseGate.inverse" />

`inverse()`

Return inverted MCU1 gate ($MCU1(\lambda){\dagger} = MCU1(-\lambda)$)

### is\_parameterized

<span id="qiskit.circuit.library.MCPhaseGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.MCPhaseGate.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.MCPhaseGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### num\_ctrl\_qubits

<span id="qiskit.circuit.library.MCPhaseGate.num_ctrl_qubits" />

`property num_ctrl_qubits`

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

### params

<span id="qiskit.circuit.library.MCPhaseGate.params" />

`property params`

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

### power

<span id="qiskit.circuit.library.MCPhaseGate.power" />

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

<span id="qiskit.circuit.library.MCPhaseGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.MCPhaseGate.repeat" />

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

<span id="qiskit.circuit.library.MCPhaseGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### to\_matrix

<span id="qiskit.circuit.library.MCPhaseGate.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

**Return type**

`ndarray`

### unit

<span id="qiskit.circuit.library.MCPhaseGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.MCPhaseGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

