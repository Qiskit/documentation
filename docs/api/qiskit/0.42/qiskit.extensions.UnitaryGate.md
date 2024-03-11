---
title: UnitaryGate
description: API reference for qiskit.extensions.UnitaryGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.UnitaryGate
---

# UnitaryGate

<span id="qiskit.extensions.UnitaryGate" />

`UnitaryGate(data, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/extensions/unitary.py "view source code")

Bases: [`qiskit.circuit.gate.Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

Class quantum gates specified by a unitary matrix.

**Example**

We can create a unitary gate from a unitary matrix then add it to a quantum circuit. The matrix can also be directly applied to the quantum circuit, see `unitary()`.

```python
from qiskit import QuantumCircuit
from qiskit.extensions import UnitaryGate

matrix = [[0, 0, 0, 1],
          [0, 0, 1, 0],
          [1, 0, 0, 0],
          [0, 1, 0, 0]]
gate = UnitaryGate(matrix)

circuit = QuantumCircuit(2)
circuit.append(gate, [0, 1])
```

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

### add\_decomposition

<span id="qiskit.extensions.UnitaryGate.add_decomposition" />

`UnitaryGate.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### adjoint

<span id="qiskit.extensions.UnitaryGate.adjoint" />

`UnitaryGate.adjoint()`

Return the adjoint of the unitary.

### assemble

<span id="qiskit.extensions.UnitaryGate.assemble" />

`UnitaryGate.assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.UnitaryGate.broadcast_arguments" />

`UnitaryGate.broadcast_arguments(qargs, cargs)`

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

<span id="qiskit.extensions.UnitaryGate.c_if" />

`UnitaryGate.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### conjugate

<span id="qiskit.extensions.UnitaryGate.conjugate" />

`UnitaryGate.conjugate()`

Return the conjugate of the unitary.

### control

<span id="qiskit.extensions.UnitaryGate.control" />

`UnitaryGate.control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str*) – optional gate label
*   **ctrl\_state** (*int or str or None*) – The control state in decimal or as a bit string (e.g. ‘1011’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

controlled version of gate.

**Return type**

[UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

*   **QiskitError** – Invalid ctrl\_state.
*   **ExtensionError** – Non-unitary controlled unitary.

### copy

<span id="qiskit.extensions.UnitaryGate.copy" />

`UnitaryGate.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.extensions.UnitaryGate.inverse" />

`UnitaryGate.inverse()`

Return the adjoint of the unitary.

### is\_parameterized

<span id="qiskit.extensions.UnitaryGate.is_parameterized" />

`UnitaryGate.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### power

<span id="qiskit.extensions.UnitaryGate.power" />

`UnitaryGate.power(exponent)`

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

<span id="qiskit.extensions.UnitaryGate.qasm" />

`UnitaryGate.qasm()`

The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. It gives the gate a random name if one hasn’t been given to it.

### repeat

<span id="qiskit.extensions.UnitaryGate.repeat" />

`UnitaryGate.repeat(n)`

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

<span id="qiskit.extensions.UnitaryGate.reverse_ops" />

`UnitaryGate.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.UnitaryGate.soft_compare" />

`UnitaryGate.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### to\_matrix

<span id="qiskit.extensions.UnitaryGate.to_matrix" />

`UnitaryGate.to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

### transpose

<span id="qiskit.extensions.UnitaryGate.transpose" />

`UnitaryGate.transpose()`

Return the transpose of the unitary.

### validate\_parameter

<span id="qiskit.extensions.UnitaryGate.validate_parameter" />

`UnitaryGate.validate_parameter(parameter)`

Unitary gate parameter has to be an ndarray.

## Attributes

<span id="qiskit.extensions.UnitaryGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[[`Clbit`](qiskit.circuit.Clbit "qiskit.circuit.classicalregister.Clbit")]

<span id="qiskit.extensions.UnitaryGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.UnitaryGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.UnitaryGate.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.UnitaryGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.extensions.UnitaryGate.name" />

### name

Return the name.

<span id="qiskit.extensions.UnitaryGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.UnitaryGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.UnitaryGate.params" />

### params

return instruction params.

<span id="qiskit.extensions.UnitaryGate.unit" />

### unit

Get the time unit of duration.

