# qiskit.extensions.Snapshot

<span id="undefined" />

`Snapshot(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

Simulator snapshot instruction.

Create new snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label for result data.
*   **snapshot\_type** (*str*) – the type of the snapshot.
*   **num\_qubits** (*int*) – the number of qubits for the snapshot type \[Default: 0].
*   **num\_clbits** (*int*) – the number of classical bits for the snapshot type \[Default: 0].
*   **params** (*list or None*) – the parameters for snapshot\_type \[Default: None].

**Raises**

**ExtensionError** – if snapshot label is invalid.

<span id="undefined" />

`__init__(label, snapshot_type='statevector', num_qubits=0, num_clbits=0, params=None)`

Create new snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label for result data.
*   **snapshot\_type** (*str*) – the type of the snapshot.
*   **num\_qubits** (*int*) – the number of qubits for the snapshot type \[Default: 0].
*   **num\_clbits** (*int*) – the number of classical bits for the snapshot type \[Default: 0].
*   **params** (*list or None*) – the parameters for snapshot\_type \[Default: None].

**Raises**

**ExtensionError** – if snapshot label is invalid.

## Methods

|                                                                                                                                         |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.extensions.Snapshot.__init__ "qiskit.extensions.Snapshot.__init__")(label\[, snapshot\_type, num\_qubits, …])      | Create new snapshot instruction.                                         |
| [`add_decomposition`](#qiskit.extensions.Snapshot.add_decomposition "qiskit.extensions.Snapshot.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.extensions.Snapshot.assemble "qiskit.extensions.Snapshot.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.extensions.Snapshot.broadcast_arguments "qiskit.extensions.Snapshot.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.extensions.Snapshot.c_if "qiskit.extensions.Snapshot.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.extensions.Snapshot.copy "qiskit.extensions.Snapshot.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.extensions.Snapshot.inverse "qiskit.extensions.Snapshot.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.extensions.Snapshot.is_parameterized "qiskit.extensions.Snapshot.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.extensions.Snapshot.mirror "qiskit.extensions.Snapshot.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.extensions.Snapshot.qasm "qiskit.extensions.Snapshot.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.extensions.Snapshot.repeat "qiskit.extensions.Snapshot.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.extensions.Snapshot.reverse_ops "qiskit.extensions.Snapshot.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.extensions.Snapshot.soft_compare "qiskit.extensions.Snapshot.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.extensions.Snapshot.validate_parameter "qiskit.extensions.Snapshot.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.Snapshot.decompositions "qiskit.extensions.Snapshot.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.Snapshot.definition "qiskit.extensions.Snapshot.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.Snapshot.duration "qiskit.extensions.Snapshot.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.extensions.Snapshot.label "qiskit.extensions.Snapshot.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.extensions.Snapshot.params "qiskit.extensions.Snapshot.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.extensions.Snapshot.snapshot_type "qiskit.extensions.Snapshot.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.extensions.Snapshot.unit "qiskit.extensions.Snapshot.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`assemble()`

Assemble a QasmQobjInstruction

<span id="undefined" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

<span id="undefined" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

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

Special case. Return self.

<span id="undefined" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="undefined" />

`property label`

Return snapshot label

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

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

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

`property snapshot_type`

Return snapshot type

<span id="undefined" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.
