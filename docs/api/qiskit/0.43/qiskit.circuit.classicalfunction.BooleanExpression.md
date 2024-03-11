---
title: BooleanExpression
description: API reference for qiskit.circuit.classicalfunction.BooleanExpression
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.classicalfunction.BooleanExpression
---

# BooleanExpression

<span id="qiskit.circuit.classicalfunction.BooleanExpression" />

`BooleanExpression(expression, name=None, var_order=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/classicalfunction/boolean_expression.py "view source code")

Bases: `ClassicalElement`

The Boolean Expression gate.

**Parameters**

*   **expression** (*str*) – The logical expression string.
*   **name** (*str*) – Optional. Instruction gate name. Otherwise part of the expression is going to be used.
*   **var\_order** (*list*) – A list with the order in which variables will be created. (default: by appearance)

## Methods

<span id="qiskit-circuit-classicalfunction-booleanexpression-add-decomposition" />

### add\_decomposition

<span id="qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition" />

`BooleanExpression.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="qiskit-circuit-classicalfunction-booleanexpression-assemble" />

### assemble

<span id="qiskit.circuit.classicalfunction.BooleanExpression.assemble" />

`BooleanExpression.assemble()`

Assemble a QasmQobjInstruction

<span id="qiskit-circuit-classicalfunction-booleanexpression-broadcast-arguments" />

### broadcast\_arguments

<span id="qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments" />

`BooleanExpression.broadcast_arguments(qargs, cargs)`

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

*   **qargs** (*list*) – List of quantum bit arguments.
*   **cargs** (*list*) – List of classical bit arguments.

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

**Return type**

Iterable\[tuple\[list, list]]

<span id="qiskit-circuit-classicalfunction-booleanexpression-c-if" />

### c\_if

<span id="qiskit.circuit.classicalfunction.BooleanExpression.c_if" />

`BooleanExpression.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

<span id="qiskit-circuit-classicalfunction-booleanexpression-control" />

### control

<span id="qiskit.circuit.classicalfunction.BooleanExpression.control" />

`BooleanExpression.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str | None*) – optional gate label
*   **ctrl\_state** (*int | str | None*) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

<span id="qiskit-circuit-classicalfunction-booleanexpression-copy" />

### copy

<span id="qiskit.circuit.classicalfunction.BooleanExpression.copy" />

`BooleanExpression.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-classicalfunction-booleanexpression-from-dimacs-file" />

### from\_dimacs\_file

<span id="qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file" />

`classmethod BooleanExpression.from_dimacs_file(filename)`

Create a BooleanExpression from the string in the DIMACS format. :param filename: A file in DIMACS format.

**Returns**

A gate for the input string

**Return type**

[BooleanExpression](qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.BooleanExpression")

**Raises**

**FileNotFoundError** – If filename is not found.

<span id="qiskit-circuit-classicalfunction-booleanexpression-inverse" />

### inverse

<span id="qiskit.circuit.classicalfunction.BooleanExpression.inverse" />

`BooleanExpression.inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

<span id="qiskit-circuit-classicalfunction-booleanexpression-is-parameterized" />

### is\_parameterized

<span id="qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized" />

`BooleanExpression.is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="qiskit-circuit-classicalfunction-booleanexpression-power" />

### power

<span id="qiskit.circuit.classicalfunction.BooleanExpression.power" />

`BooleanExpression.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

<span id="qiskit-circuit-classicalfunction-booleanexpression-qasm" />

### qasm

<span id="qiskit.circuit.classicalfunction.BooleanExpression.qasm" />

`BooleanExpression.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

<span id="qiskit-circuit-classicalfunction-booleanexpression-repeat" />

### repeat

<span id="qiskit.circuit.classicalfunction.BooleanExpression.repeat" />

`BooleanExpression.repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="qiskit-circuit-classicalfunction-booleanexpression-reverse-ops" />

### reverse\_ops

<span id="qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops" />

`BooleanExpression.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="qiskit-circuit-classicalfunction-booleanexpression-simulate" />

### simulate

<span id="qiskit.circuit.classicalfunction.BooleanExpression.simulate" />

`BooleanExpression.simulate(bitstring)`

Evaluate the expression on a bitstring.

This evaluation is done classically.

**Parameters**

**bitstring** (*str*) – The bitstring for which to evaluate.

**Returns**

result of the evaluation.

**Return type**

bool

<span id="qiskit-circuit-classicalfunction-booleanexpression-soft-compare" />

### soft\_compare

<span id="qiskit.circuit.classicalfunction.BooleanExpression.soft_compare" />

`BooleanExpression.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="qiskit-circuit-classicalfunction-booleanexpression-synth" />

### synth

<span id="qiskit.circuit.classicalfunction.BooleanExpression.synth" />

`BooleanExpression.synth(registerless=True, synthesizer=None)`

Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit").

**Parameters**

*   **registerless** (*bool*) – Default `True`. If `False` uses the parameter names to create registers with those names. Otherwise, creates a circuit with a flat quantum register.
*   **synthesizer** (*Callable\[\[*[*BooleanExpression*](qiskit.circuit.classicalfunction.BooleanExpression "qiskit.circuit.classicalfunction.boolean_expression.BooleanExpression")*],* [*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")*] | None*) – A callable that takes self and returns a Tweedledum circuit.

**Returns**

A circuit implementing the logic network.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<span id="qiskit-circuit-classicalfunction-booleanexpression-to-matrix" />

### to\_matrix

<span id="qiskit.circuit.classicalfunction.BooleanExpression.to_matrix" />

`BooleanExpression.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

<span id="qiskit-circuit-classicalfunction-booleanexpression-validate-parameter" />

### validate\_parameter

<span id="qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter" />

`BooleanExpression.validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

## Attributes

<span id="qiskit.circuit.classicalfunction.BooleanExpression.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.label" />

### label

Return instruction label

<span id="qiskit.circuit.classicalfunction.BooleanExpression.name" />

### name

Return the name.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.params" />

### params

return instruction params.

<span id="qiskit.circuit.classicalfunction.BooleanExpression.unit" />

### unit

Get the time unit of duration.

