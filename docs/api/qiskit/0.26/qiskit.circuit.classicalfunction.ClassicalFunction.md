---
title: ClassicalFunction
description: API reference for qiskit.circuit.classicalfunction.ClassicalFunction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.classicalfunction.ClassicalFunction
---

# qiskit.circuit.classicalfunction.ClassicalFunction

<span id="qiskit.circuit.classicalfunction.ClassicalFunction" />

`ClassicalFunction(source, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/circuit/classicalfunction/classicalfunction.py "view source code")

Represent a classical function function and its logic network.

Creates a `ClassicalFunction` from Python source code in `source`.

The code should be a single function with types.

**Parameters**

*   **source** (*str*) – Python code with type hints.
*   **name** (*str*) – Optional. Default: “*classicalfunction*”. ClassicalFunction name.

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If tweedledum is not installed.
*   **QiskitError** – If source is not a string.

### \_\_init\_\_

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.__init__" />

`__init__(source, name=None)`

Creates a `ClassicalFunction` from Python source code in `source`.

The code should be a single function with types.

**Parameters**

*   **source** (*str*) – Python code with type hints.
*   **name** (*str*) – Optional. Default: “*classicalfunction*”. ClassicalFunction name.

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If tweedledum is not installed.
*   **QiskitError** – If source is not a string.

## Methods

|                                                                                                                                                                                         |                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.circuit.classicalfunction.ClassicalFunction.__init__ "qiskit.circuit.classicalfunction.ClassicalFunction.__init__")(source\[, name])                               | Creates a `ClassicalFunction` from Python source code in `source`.                                                    |
| [`add_decomposition`](#qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition "qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                              |
| [`assemble`](#qiskit.circuit.classicalfunction.ClassicalFunction.assemble "qiskit.circuit.classicalfunction.ClassicalFunction.assemble")()                                              | Assemble a QasmQobjInstruction                                                                                        |
| [`broadcast_arguments`](#qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments "qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.                                                        |
| [`c_if`](#qiskit.circuit.classicalfunction.ClassicalFunction.c_if "qiskit.circuit.classicalfunction.ClassicalFunction.c_if")(classical, val)                                            | Add classical condition on register classical and value val.                                                          |
| [`compile`](#qiskit.circuit.classicalfunction.ClassicalFunction.compile "qiskit.circuit.classicalfunction.ClassicalFunction.compile")()                                                 | Parses and creates the logical circuit                                                                                |
| [`control`](#qiskit.circuit.classicalfunction.ClassicalFunction.control "qiskit.circuit.classicalfunction.ClassicalFunction.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                                                                    |
| [`copy`](#qiskit.circuit.classicalfunction.ClassicalFunction.copy "qiskit.circuit.classicalfunction.ClassicalFunction.copy")(\[name])                                                   | Copy of the instruction.                                                                                              |
| [`inverse`](#qiskit.circuit.classicalfunction.ClassicalFunction.inverse "qiskit.circuit.classicalfunction.ClassicalFunction.inverse")()                                                 | Invert this instruction.                                                                                              |
| [`is_parameterized`](#qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized "qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized")()                      | Return True .IFF.                                                                                                     |
| [`mirror`](#qiskit.circuit.classicalfunction.ClassicalFunction.mirror "qiskit.circuit.classicalfunction.ClassicalFunction.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                                                                           |
| [`power`](#qiskit.circuit.classicalfunction.ClassicalFunction.power "qiskit.circuit.classicalfunction.ClassicalFunction.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                                                              |
| [`qasm`](#qiskit.circuit.classicalfunction.ClassicalFunction.qasm "qiskit.circuit.classicalfunction.ClassicalFunction.qasm")()                                                          | Return a default OpenQASM string for the instruction.                                                                 |
| [`repeat`](#qiskit.circuit.classicalfunction.ClassicalFunction.repeat "qiskit.circuit.classicalfunction.ClassicalFunction.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                                                          |
| [`reverse_ops`](#qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops "qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.                                                   |
| [`simulate`](#qiskit.circuit.classicalfunction.ClassicalFunction.simulate "qiskit.circuit.classicalfunction.ClassicalFunction.simulate")(bitstring)                                     | Evaluate the expression on a bitstring.                                                                               |
| [`simulate_all`](#qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all "qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all")()                                  | Returns a truth table.                                                                                                |
| [`soft_compare`](#qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare "qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare")(other)                             | Soft comparison between gates.                                                                                        |
| [`synth`](#qiskit.circuit.classicalfunction.ClassicalFunction.synth "qiskit.circuit.classicalfunction.ClassicalFunction.synth")(\[registerless, synthesizer])                           | Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). |
| [`to_matrix`](#qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix "qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                                                                     |
| [`validate_parameter`](#qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter "qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter")(parameter)       | Gate parameters should be int, float, or ParameterExpression                                                          |

## Attributes

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`args`](#qiskit.circuit.classicalfunction.ClassicalFunction.args "qiskit.circuit.classicalfunction.ClassicalFunction.args")                               | Returns the classicalfunction arguments                                       |
| [`decompositions`](#qiskit.circuit.classicalfunction.ClassicalFunction.decompositions "qiskit.circuit.classicalfunction.ClassicalFunction.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.classicalfunction.ClassicalFunction.definition "qiskit.circuit.classicalfunction.ClassicalFunction.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.classicalfunction.ClassicalFunction.duration "qiskit.circuit.classicalfunction.ClassicalFunction.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.circuit.classicalfunction.ClassicalFunction.label "qiskit.circuit.classicalfunction.ClassicalFunction.label")                            | Return gate label                                                             |
| [`network`](#qiskit.circuit.classicalfunction.ClassicalFunction.network "qiskit.circuit.classicalfunction.ClassicalFunction.network")                      | Returns the logical network                                                   |
| [`params`](#qiskit.circuit.classicalfunction.ClassicalFunction.params "qiskit.circuit.classicalfunction.ClassicalFunction.params")                         | return instruction params.                                                    |
| [`qregs`](#qiskit.circuit.classicalfunction.ClassicalFunction.qregs "qiskit.circuit.classicalfunction.ClassicalFunction.qregs")                            | The list of qregs used by the classicalfunction                               |
| [`scopes`](#qiskit.circuit.classicalfunction.ClassicalFunction.scopes "qiskit.circuit.classicalfunction.ClassicalFunction.scopes")                         | Returns the scope dict                                                        |
| [`truth_table`](#qiskit.circuit.classicalfunction.ClassicalFunction.truth_table "qiskit.circuit.classicalfunction.ClassicalFunction.truth_table")          | Returns (and computes) the truth table                                        |
| [`types`](#qiskit.circuit.classicalfunction.ClassicalFunction.types "qiskit.circuit.classicalfunction.ClassicalFunction.types")                            | Dumps a list of scopes with their variables and types.                        |
| [`unit`](#qiskit.circuit.classicalfunction.ClassicalFunction.unit "qiskit.circuit.classicalfunction.ClassicalFunction.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### args

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.args" />

`property args`

Returns the classicalfunction arguments

### assemble

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### compile

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.compile" />

`compile()`

Parses and creates the logical circuit

### control

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.control" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.copy" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.inverse" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### network

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.network" />

`property network`

Returns the logical network

### params

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.params" />

`property params`

return instruction params.

### power

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.power" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### qregs

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.qregs" />

`property qregs`

The list of qregs used by the classicalfunction

### repeat

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.repeat" />

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

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### scopes

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.scopes" />

`property scopes`

Returns the scope dict

### simulate

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.simulate" />

`simulate(bitstring)`

Evaluate the expression on a bitstring.

This evaluation is done classically.

**Parameters**

**bitstring** (`str`) – The bitstring for which to evaluate.

**Returns**

result of the evaluation.

**Return type**

bool

### simulate\_all

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all" />

`simulate_all()`

Returns a truth table.

**Returns**

a bitstring with a truth table

**Return type**

str

### soft\_compare

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### synth

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.synth" />

`synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** (`bool`) – Default `True`. If `False` uses the parameter names to create
*   **with those names. Otherwise** (*registers*) –
*   **a circuit with a flat quantum register.** (*creates*) –
*   **synthesizer** (`Optional`\[`Callable`\[\[`ClassicalElement`], `QuantumCircuit`]]) – Optional. If None tweedledum’s pkrm\_synth is used.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### to\_matrix

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix" />

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### truth\_table

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.truth_table" />

`property truth_table`

Returns (and computes) the truth table

### types

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.types" />

`property types`

Dumps a list of scopes with their variables and types.

**Returns**

A list of scopes as dicts, where key is the variable name and value is its type.

**Return type**

list(dict)

### unit

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

