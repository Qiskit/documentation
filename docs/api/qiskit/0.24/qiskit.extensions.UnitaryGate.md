<span id="qiskit-extensions-unitarygate" />

# qiskit.extensions.UnitaryGate

<span id="undefined" />

`UnitaryGate(data, label=None)`

Class for representing unitary gates

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

<span id="undefined" />

`__init__(data, label=None)`

Create a gate from a numeric unitary matrix.

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – unitary operator.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

|                                                                                                                                               |                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.extensions.UnitaryGate.__init__ "qiskit.extensions.UnitaryGate.__init__")(data\[, label])                                | Create a gate from a numeric unitary matrix.                                                                                 |
| [`add_decomposition`](#qiskit.extensions.UnitaryGate.add_decomposition "qiskit.extensions.UnitaryGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                                     |
| [`adjoint`](#qiskit.extensions.UnitaryGate.adjoint "qiskit.extensions.UnitaryGate.adjoint")()                                                 | Return the adjoint of the unitary.                                                                                           |
| [`assemble`](#qiskit.extensions.UnitaryGate.assemble "qiskit.extensions.UnitaryGate.assemble")()                                              | Assemble a QasmQobjInstruction                                                                                               |
| [`broadcast_arguments`](#qiskit.extensions.UnitaryGate.broadcast_arguments "qiskit.extensions.UnitaryGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.                                                               |
| [`c_if`](#qiskit.extensions.UnitaryGate.c_if "qiskit.extensions.UnitaryGate.c_if")(classical, val)                                            | Add classical condition on register classical and value val.                                                                 |
| [`conjugate`](#qiskit.extensions.UnitaryGate.conjugate "qiskit.extensions.UnitaryGate.conjugate")()                                           | Return the conjugate of the unitary.                                                                                         |
| [`control`](#qiskit.extensions.UnitaryGate.control "qiskit.extensions.UnitaryGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate                                                                                            |
| [`copy`](#qiskit.extensions.UnitaryGate.copy "qiskit.extensions.UnitaryGate.copy")(\[name])                                                   | Copy of the instruction.                                                                                                     |
| [`inverse`](#qiskit.extensions.UnitaryGate.inverse "qiskit.extensions.UnitaryGate.inverse")()                                                 | Return the adjoint of the unitary.                                                                                           |
| [`is_parameterized`](#qiskit.extensions.UnitaryGate.is_parameterized "qiskit.extensions.UnitaryGate.is_parameterized")()                      | Return True .IFF.                                                                                                            |
| [`mirror`](#qiskit.extensions.UnitaryGate.mirror "qiskit.extensions.UnitaryGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                                                                                  |
| [`power`](#qiskit.extensions.UnitaryGate.power "qiskit.extensions.UnitaryGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                                                                     |
| [`qasm`](#qiskit.extensions.UnitaryGate.qasm "qiskit.extensions.UnitaryGate.qasm")()                                                          | The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. |
| [`repeat`](#qiskit.extensions.UnitaryGate.repeat "qiskit.extensions.UnitaryGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                                                                 |
| [`reverse_ops`](#qiskit.extensions.UnitaryGate.reverse_ops "qiskit.extensions.UnitaryGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.                                                          |
| [`to_matrix`](#qiskit.extensions.UnitaryGate.to_matrix "qiskit.extensions.UnitaryGate.to_matrix")()                                           | Return matrix for the unitary.                                                                                               |
| [`transpose`](#qiskit.extensions.UnitaryGate.transpose "qiskit.extensions.UnitaryGate.transpose")()                                           | Return the transpose of the unitary.                                                                                         |
| [`validate_parameter`](#qiskit.extensions.UnitaryGate.validate_parameter "qiskit.extensions.UnitaryGate.validate_parameter")(parameter)       | Unitary gate parameter has to be an ndarray.                                                                                 |

## Attributes

|                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.UnitaryGate.decompositions "qiskit.extensions.UnitaryGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.UnitaryGate.definition "qiskit.extensions.UnitaryGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.UnitaryGate.duration "qiskit.extensions.UnitaryGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.extensions.UnitaryGate.label "qiskit.extensions.UnitaryGate.label")                            | Return gate label                                                             |
| [`params`](#qiskit.extensions.UnitaryGate.params "qiskit.extensions.UnitaryGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.extensions.UnitaryGate.unit "qiskit.extensions.UnitaryGate.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`adjoint()`

Return the adjoint of the unitary.

<span id="undefined" />

`assemble()`

Assemble a QasmQobjInstruction

**Return type**

`Instruction`

<span id="undefined" />

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

<span id="undefined" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

<span id="undefined" />

`conjugate()`

Return the conjugate of the unitary.

<span id="undefined" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate

**Parameters**

*   **num\_ctrl\_qubits** (*int*) – number of controls to add to gate (default=1)
*   **label** (*str*) – optional gate label
*   **ctrl\_state** (*int or str or None*) – The control state in decimal or as a bit string (e.g. ‘1011’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

controlled version of gate.

**Return type**

[UnitaryGate](#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

*   **QiskitError** – Invalid ctrl\_state.
*   **ExtensionError** – Non-unitary controlled unitary.

<span id="undefined" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

`property definition`

Return definition in terms of other basic gates.

<span id="undefined" />

`property duration`

Get the duration.

<span id="undefined" />

`inverse()`

Return the adjoint of the unitary.

<span id="undefined" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="undefined" />

`property label`

Return gate label

**Return type**

`str`

<span id="undefined" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`property params`

return instruction params.

<span id="undefined" />

`power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

<span id="undefined" />

`qasm()`

The qasm for a custom unitary gate This is achieved by adding a custom gate that corresponds to the definition of this gate. It gives the gate a random name if one hasn’t been given to it.

<span id="undefined" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

<span id="undefined" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

<span id="undefined" />

`to_matrix()`

Return matrix for the unitary.

<span id="undefined" />

`transpose()`

Return the transpose of the unitary.

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Unitary gate parameter has to be an ndarray.
