---
title: HamiltonianGate
description: API reference for qiskit.extensions.HamiltonianGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.HamiltonianGate
---

<span id="qiskit-extensions-hamiltoniangate" />

# qiskit.extensions.HamiltonianGate

<span id="qiskit.extensions.HamiltonianGate" />

`HamiltonianGate(data, time, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/extensions/hamiltonian_gate.py "view source code")

Class for representing evolution by a Hermitian Hamiltonian operator as a gate. This gate resolves to a UnitaryGate U(t) = exp(-1j \* t \* H), which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

### \_\_init\_\_

<span id="qiskit.extensions.HamiltonianGate.__init__" />

`__init__(data, time, label=None)`

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

|                                                                                                                                                       |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.extensions.HamiltonianGate.__init__ "qiskit.extensions.HamiltonianGate.__init__")(data, time\[, label])                          | Create a gate from a hamiltonian operator and evolution time parameter t |
| [`add_decomposition`](#qiskit.extensions.HamiltonianGate.add_decomposition "qiskit.extensions.HamiltonianGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`adjoint`](#qiskit.extensions.HamiltonianGate.adjoint "qiskit.extensions.HamiltonianGate.adjoint")()                                                 | Return the adjoint of the unitary.                                       |
| [`assemble`](#qiskit.extensions.HamiltonianGate.assemble "qiskit.extensions.HamiltonianGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.extensions.HamiltonianGate.broadcast_arguments "qiskit.extensions.HamiltonianGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.extensions.HamiltonianGate.c_if "qiskit.extensions.HamiltonianGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`conjugate`](#qiskit.extensions.HamiltonianGate.conjugate "qiskit.extensions.HamiltonianGate.conjugate")()                                           | Return the conjugate of the Hamiltonian.                                 |
| [`control`](#qiskit.extensions.HamiltonianGate.control "qiskit.extensions.HamiltonianGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.extensions.HamiltonianGate.copy "qiskit.extensions.HamiltonianGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.extensions.HamiltonianGate.inverse "qiskit.extensions.HamiltonianGate.inverse")()                                                 | Return the adjoint of the unitary.                                       |
| [`is_parameterized`](#qiskit.extensions.HamiltonianGate.is_parameterized "qiskit.extensions.HamiltonianGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.extensions.HamiltonianGate.mirror "qiskit.extensions.HamiltonianGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.extensions.HamiltonianGate.power "qiskit.extensions.HamiltonianGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.extensions.HamiltonianGate.qasm "qiskit.extensions.HamiltonianGate.qasm")()                                                          | Raise an error, as QASM is not defined for the HamiltonianGate.          |
| [`repeat`](#qiskit.extensions.HamiltonianGate.repeat "qiskit.extensions.HamiltonianGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.extensions.HamiltonianGate.reverse_ops "qiskit.extensions.HamiltonianGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`to_matrix`](#qiskit.extensions.HamiltonianGate.to_matrix "qiskit.extensions.HamiltonianGate.to_matrix")()                                           | Return matrix for the unitary.                                           |
| [`transpose`](#qiskit.extensions.HamiltonianGate.transpose "qiskit.extensions.HamiltonianGate.transpose")()                                           | Return the transpose of the Hamiltonian.                                 |
| [`validate_parameter`](#qiskit.extensions.HamiltonianGate.validate_parameter "qiskit.extensions.HamiltonianGate.validate_parameter")(parameter)       | Hamiltonian parameter has to be an ndarray, operator or float.           |

## Attributes

|                                                                                                                          |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.HamiltonianGate.decompositions "qiskit.extensions.HamiltonianGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.HamiltonianGate.definition "qiskit.extensions.HamiltonianGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.HamiltonianGate.duration "qiskit.extensions.HamiltonianGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.extensions.HamiltonianGate.label "qiskit.extensions.HamiltonianGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.extensions.HamiltonianGate.params "qiskit.extensions.HamiltonianGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.extensions.HamiltonianGate.unit "qiskit.extensions.HamiltonianGate.unit")                               | Get the time unit of duration.                                                |

### add\_decomposition

<span id="qiskit.extensions.HamiltonianGate.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### adjoint

<span id="qiskit.extensions.HamiltonianGate.adjoint" />

`adjoint()`

Return the adjoint of the unitary.

### assemble

<span id="qiskit.extensions.HamiltonianGate.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

### broadcast\_arguments

<span id="qiskit.extensions.HamiltonianGate.broadcast_arguments" />

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

<span id="qiskit.extensions.HamiltonianGate.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### conjugate

<span id="qiskit.extensions.HamiltonianGate.conjugate" />

`conjugate()`

Return the conjugate of the Hamiltonian.

### control

<span id="qiskit.extensions.HamiltonianGate.control" />

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

<span id="qiskit.extensions.HamiltonianGate.copy" />

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

<span id="qiskit.extensions.HamiltonianGate.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.extensions.HamiltonianGate.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.extensions.HamiltonianGate.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.extensions.HamiltonianGate.inverse" />

`inverse()`

Return the adjoint of the unitary.

### is\_parameterized

<span id="qiskit.extensions.HamiltonianGate.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.extensions.HamiltonianGate.label" />

`property label`

Return gate label

**Return type**

`str`

### mirror

<span id="qiskit.extensions.HamiltonianGate.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.extensions.HamiltonianGate.params" />

`property params`

return instruction params.

### power

<span id="qiskit.extensions.HamiltonianGate.power" />

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

<span id="qiskit.extensions.HamiltonianGate.qasm" />

`qasm()`

Raise an error, as QASM is not defined for the HamiltonianGate.

### repeat

<span id="qiskit.extensions.HamiltonianGate.repeat" />

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

<span id="qiskit.extensions.HamiltonianGate.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### to\_matrix

<span id="qiskit.extensions.HamiltonianGate.to_matrix" />

`to_matrix()`

Return matrix for the unitary.

### transpose

<span id="qiskit.extensions.HamiltonianGate.transpose" />

`transpose()`

Return the transpose of the Hamiltonian.

### unit

<span id="qiskit.extensions.HamiltonianGate.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.extensions.HamiltonianGate.validate_parameter" />

`validate_parameter(parameter)`

Hamiltonian parameter has to be an ndarray, operator or float.

