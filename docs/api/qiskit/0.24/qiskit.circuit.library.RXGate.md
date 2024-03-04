---
title: RXGate
description: API reference for qiskit.circuit.library.RXGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.RXGate
---

<span id="qiskit-circuit-library-rxgate" />

# qiskit.circuit.library.RXGate

<span id="qiskit.circuit.library.RXGate" />

`RXGate(theta, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/circuit/library/standard_gates/rx.py "view source code")

Single-qubit rotation about the X axis.

**Circuit symbol:**

```python
     ┌───────┐
q_0: ┤ Rx(ϴ) ├
     └───────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}RX(\theta) = exp(-i \th X) =
    \begin{pmatrix}
        \cos{\th}   & -i\sin{\th} \\
        -i\sin{\th} & \cos{\th}
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

Create new RX gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.RXGate.__init__" />

`__init__(theta, label=None)`

Create new RX gate.

## Methods

|                                                                                                                                               |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.RXGate.__init__ "qiskit.circuit.library.RXGate.__init__")(theta\[, label])                               | Create new RX gate.                                                      |
| [`add_decomposition`](#qiskit.circuit.library.RXGate.add_decomposition "qiskit.circuit.library.RXGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.RXGate.assemble "qiskit.circuit.library.RXGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.RXGate.broadcast_arguments "qiskit.circuit.library.RXGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.circuit.library.RXGate.c_if "qiskit.circuit.library.RXGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`control`](#qiskit.circuit.library.RXGate.control "qiskit.circuit.library.RXGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return a (mutli-)controlled-RX gate.                                     |
| [`copy`](#qiskit.circuit.library.RXGate.copy "qiskit.circuit.library.RXGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.RXGate.inverse "qiskit.circuit.library.RXGate.inverse")()                                                 | Return inverted RX gate.                                                 |
| [`is_parameterized`](#qiskit.circuit.library.RXGate.is_parameterized "qiskit.circuit.library.RXGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.RXGate.mirror "qiskit.circuit.library.RXGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.circuit.library.RXGate.power "qiskit.circuit.library.RXGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.circuit.library.RXGate.qasm "qiskit.circuit.library.RXGate.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.RXGate.repeat "qiskit.circuit.library.RXGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.RXGate.reverse_ops "qiskit.circuit.library.RXGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`to_matrix`](#qiskit.circuit.library.RXGate.to_matrix "qiskit.circuit.library.RXGate.to_matrix")()                                           | Return a numpy.array for the RX gate.                                    |
| [`validate_parameter`](#qiskit.circuit.library.RXGate.validate_parameter "qiskit.circuit.library.RXGate.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression             |

## Attributes

|                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.RXGate.decompositions "qiskit.circuit.library.RXGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.RXGate.definition "qiskit.circuit.library.RXGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.RXGate.duration "qiskit.circuit.library.RXGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.library.RXGate.label "qiskit.circuit.library.RXGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.library.RXGate.params "qiskit.circuit.library.RXGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.RXGate.unit "qiskit.circuit.library.RXGate.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.library.RXGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.RXGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.circuit.library.RXGate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.RXGate.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.RXGate.control" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return a (mutli-)controlled-RX gate.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of control qubits.
*   **label** (*str or None*) – An optional label for the gate \[Default: None]
*   **ctrl\_state** (*int or str or None*) – control state expressed as integer, string (e.g. ‘110’), or None. If None, use all 1s.

**Returns**

controlled version of this gate.

**Return type**

[ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

### copy

<span id="qiskit.circuit.library.RXGate.copy" />

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

<span id="qiskit.circuit.library.RXGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.RXGate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.library.RXGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.RXGate.inverse" />

`inverse()`

Return inverted RX gate.

$RX(\lambda)^{\dagger} = RX(-\lambda)$

### is\_parameterized

<span id="qiskit.circuit.library.RXGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.RXGate.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.RXGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.library.RXGate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.library.RXGate.power" />

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

<span id="qiskit.circuit.library.RXGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.RXGate.repeat" />

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

<span id="qiskit.circuit.library.RXGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### to\_matrix

<span id="qiskit.circuit.library.RXGate.to_matrix" />

`to_matrix()`

Return a numpy.array for the RX gate.

### unit

<span id="qiskit.circuit.library.RXGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.RXGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

