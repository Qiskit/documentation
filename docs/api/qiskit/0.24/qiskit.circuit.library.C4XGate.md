---
title: C4XGate
description: API reference for qiskit.circuit.library.C4XGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.C4XGate
---

<span id="qiskit-circuit-library-c4xgate" />

# qiskit.circuit.library.C4XGate

<span id="qiskit.circuit.library.C4XGate" />

`C4XGate(label=None, ctrl_state=None)`

The 4-qubit controlled X gate.

This implementation is based on Page 21, Lemma 7.5, of \[1].

## References

\[1] Barenco et al., 1995. [https://arxiv.org/pdf/quant-ph/9503016.pdf](https://arxiv.org/pdf/quant-ph/9503016.pdf)

Create a new 4-qubit controlled X gate.

### \_\_init\_\_

<span id="qiskit.circuit.library.C4XGate.__init__" />

`__init__(label=None, ctrl_state=None)`

Create a new 4-qubit controlled X gate.

## Methods

## Attributes

### add\_decomposition

<span id="qiskit.circuit.library.C4XGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.circuit.library.C4XGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.circuit.library.C4XGate.broadcast_arguments" />

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

<span id="qiskit.circuit.library.C4XGate.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### control

<span id="qiskit.circuit.library.C4XGate.control" />

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

<span id="qiskit.circuit.library.C4XGate.copy" />

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

<span id="qiskit.circuit.library.C4XGate.ctrl_state" />

`property ctrl_state`

Return the control state of the gate as a decimal integer.

**Return type**

`int`

### decompositions

<span id="qiskit.circuit.library.C4XGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.circuit.library.C4XGate.definition" />

`property definition`

Return definition in terms of other basic gates. If the gate has open controls, as determined from self.ctrl\_state, the returned definition is conjugated with X without changing the internal \_definition.

**Return type**

`List`

### duration

<span id="qiskit.circuit.library.C4XGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.circuit.library.C4XGate.inverse" />

`inverse()`

Invert this gate. The C4X is its own inverse.

### is\_parameterized

<span id="qiskit.circuit.library.C4XGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.circuit.library.C4XGate.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.circuit.library.C4XGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### num\_ctrl\_qubits

<span id="qiskit.circuit.library.C4XGate.num_ctrl_qubits" />

`property num_ctrl_qubits`

Get number of control qubits.

**Returns**

The number of control qubits for the gate.

**Return type**

int

### params

<span id="qiskit.circuit.library.C4XGate.params" />

`property params`

Get parameters from base\_gate.

**Returns**

List of gate parameters.

**Return type**

list

**Raises**

**CircuitError** – Controlled gate does not define a base gate

### power

<span id="qiskit.circuit.library.C4XGate.power" />

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

<span id="qiskit.circuit.library.C4XGate.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.circuit.library.C4XGate.repeat" />

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

<span id="qiskit.circuit.library.C4XGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### to\_matrix

<span id="qiskit.circuit.library.C4XGate.to_matrix" />

`to_matrix()`

Return a numpy.array for the C4X gate.

### unit

<span id="qiskit.circuit.library.C4XGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.circuit.library.C4XGate.validate_parameter" />

`validate_parameter(parameter)`

Gate parameters should be int, float, or ParameterExpression

