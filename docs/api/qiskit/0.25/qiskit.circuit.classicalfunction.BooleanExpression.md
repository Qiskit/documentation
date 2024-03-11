---
title: BooleanExpression
description: API reference for qiskit.circuit.classicalfunction.BooleanExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.classicalfunction.BooleanExpression
---

# qiskit.circuit.classicalfunction.BooleanExpression

<span id="qiskit.circuit.classicalfunction.BooleanExpression" />

`BooleanExpression(expression, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/circuit/classicalfunction/boolean_expression.py "view source code")

The Boolean Expression gate.

**Parameters**

*   **expression** (*str*) – The logical expression string.
*   **name** (*str*) – Optional. Instruction gate name. Otherwise part of the expression is going to be used.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If tweedledum is not installed. Tweedledum is required.

### \_\_init\_\_

<span id="qiskit.circuit.classicalfunction.BooleanExpression.__init__" />

`__init__(expression, name=None)`

**Parameters**

*   **expression** (*str*) – The logical expression string.
*   **name** (*str*) – Optional. Instruction gate name. Otherwise part of the expression is going to be used.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If tweedledum is not installed. Tweedledum is required.

## Methods

|                                                                                                                                                                                         |                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.classicalfunction.BooleanExpression.__init__ "qiskit.circuit.classicalfunction.BooleanExpression.__init__")(expression\[, name])                           | **type expression**`str`                                                                                              |
| [`add_decomposition`](#qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition "qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                              |
| [`assemble`](#qiskit.circuit.classicalfunction.BooleanExpression.assemble "qiskit.circuit.classicalfunction.BooleanExpression.assemble")()                                              | Assemble a QasmQobjInstruction                                                                                        |
| [`broadcast_arguments`](#qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments "qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.                                                        |
| [`c_if`](#qiskit.circuit.classicalfunction.BooleanExpression.c_if "qiskit.circuit.classicalfunction.BooleanExpression.c_if")(classical, val)                                            | Add classical condition on register classical and value val.                                                          |
| [`control`](#qiskit.circuit.classicalfunction.BooleanExpression.control "qiskit.circuit.classicalfunction.BooleanExpression.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                                                                    |
| [`copy`](#qiskit.circuit.classicalfunction.BooleanExpression.copy "qiskit.circuit.classicalfunction.BooleanExpression.copy")(\[name])                                                   | Copy of the instruction.                                                                                              |
| [`from_dimacs_file`](#qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file "qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file")(filename)              | Create a BooleanExpression from the string in the DIMACS format.                                                      |
| [`inverse`](#qiskit.circuit.classicalfunction.BooleanExpression.inverse "qiskit.circuit.classicalfunction.BooleanExpression.inverse")()                                                 | Invert this instruction.                                                                                              |
| [`is_parameterized`](#qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized "qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized")()                      | Return True .IFF.                                                                                                     |
| [`mirror`](#qiskit.circuit.classicalfunction.BooleanExpression.mirror "qiskit.circuit.classicalfunction.BooleanExpression.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                                                                           |
| [`power`](#qiskit.circuit.classicalfunction.BooleanExpression.power "qiskit.circuit.classicalfunction.BooleanExpression.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                                                              |
| [`qasm`](#qiskit.circuit.classicalfunction.BooleanExpression.qasm "qiskit.circuit.classicalfunction.BooleanExpression.qasm")()                                                          | Return a default OpenQASM string for the instruction.                                                                 |
| [`repeat`](#qiskit.circuit.classicalfunction.BooleanExpression.repeat "qiskit.circuit.classicalfunction.BooleanExpression.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                                                          |
| [`reverse_ops`](#qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops "qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.                                                   |
| [`simulate`](#qiskit.circuit.classicalfunction.BooleanExpression.simulate "qiskit.circuit.classicalfunction.BooleanExpression.simulate")(bitstring)                                     | Evaluate the expression on a bitstring.                                                                               |
| [`soft_compare`](#qiskit.circuit.classicalfunction.BooleanExpression.soft_compare "qiskit.circuit.classicalfunction.BooleanExpression.soft_compare")(other)                             | Soft comparison between gates.                                                                                        |
| [`synth`](#qiskit.circuit.classicalfunction.BooleanExpression.synth "qiskit.circuit.classicalfunction.BooleanExpression.synth")(\[registerless, synthesizer])                           | Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). |
| [`to_matrix`](#qiskit.circuit.classicalfunction.BooleanExpression.to_matrix "qiskit.circuit.classicalfunction.BooleanExpression.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                                                                     |
| [`validate_parameter`](#qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter "qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression                                                          |

## Attributes

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.classicalfunction.BooleanExpression.decompositions "qiskit.circuit.classicalfunction.BooleanExpression.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.classicalfunction.BooleanExpression.definition "qiskit.circuit.classicalfunction.BooleanExpression.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.classicalfunction.BooleanExpression.duration "qiskit.circuit.classicalfunction.BooleanExpression.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.classicalfunction.BooleanExpression.label "qiskit.circuit.classicalfunction.BooleanExpression.label")                            | Return gate label                                                             |
| [`params`](#qiskit.circuit.classicalfunction.BooleanExpression.params "qiskit.circuit.classicalfunction.BooleanExpression.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.classicalfunction.BooleanExpression.unit "qiskit.circuit.classicalfunction.BooleanExpression.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.classicalfunction.BooleanExpression.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.classicalfunction.BooleanExpression.control" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.copy" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.classicalfunction.BooleanExpression.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.classicalfunction.BooleanExpression.duration" />

`property duration`

Get the duration.

### from\_dimacs\_file

<span id="qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file" />

`classmethod from_dimacs_file(filename)`

Create a BooleanExpression from the string in the DIMACS format. :type filename: `str` :param filename: A file in DIMACS format.

**Returns**

A gate for the input string

**Return type**

[BooleanExpression](#qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.BooleanExpression")

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If tweedledum is not installed. Tweedledum is required.
*   **FileNotFoundError** – If filename is not found.

### inverse

<span id="qiskit.circuit.classicalfunction.BooleanExpression.inverse" />

`inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.classicalfunction.BooleanExpression.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.classicalfunction.BooleanExpression.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.circuit.classicalfunction.BooleanExpression.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.classicalfunction.BooleanExpression.power" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.classicalfunction.BooleanExpression.repeat" />

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

<span id="qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### simulate

<span id="qiskit.circuit.classicalfunction.BooleanExpression.simulate" />

`simulate(bitstring)`

Evaluate the expression on a bitstring.

This evaluation is done classically.

**Parameters**

**bitstring** (`str`) – The bitstring for which to evaluate.

**Returns**

result of the evaluation.

**Return type**

bool

### soft\_compare

<span id="qiskit.circuit.classicalfunction.BooleanExpression.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### synth

<span id="qiskit.circuit.classicalfunction.BooleanExpression.synth" />

`synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** (`bool`) – Default `True`. If `False` uses the parameter names to create registers with those names. Otherwise, creates a circuit with a flat quantum register.
*   **synthesizer** (`Optional`\[`Callable`\[\[`BooleanExpression`], `QuantumCircuit`]]) – A callable that takes self and returns a Tweedledum circuit.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### to\_matrix

<span id="qiskit.circuit.classicalfunction.BooleanExpression.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### unit

<span id="qiskit.circuit.classicalfunction.BooleanExpression.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

