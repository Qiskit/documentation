# qiskit.providers.aer.extensions.SnapshotStatevector

<span id="undefined" />

`SnapshotStatevector(label, num_qubits=0)`

Snapshot instruction for statevector snapshot type

Create a statevector state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveStatevector`](qiskit.providers.aer.library.SaveStatevector#qiskit.providers.aer.library.SaveStatevector "qiskit.providers.aer.library.SaveStatevector") instruction.
</Admonition>

<span id="undefined" />

`__init__(label, num_qubits=0)`

Create a statevector state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the instruction barrier size \[Default: 0].

**Raises**

**ExtensionError** – if snapshot is invalid.

**Additional Information:**

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveStatevector`](qiskit.providers.aer.library.SaveStatevector#qiskit.providers.aer.library.SaveStatevector "qiskit.providers.aer.library.SaveStatevector") instruction.
</Admonition>

## Methods

|                                                                                                                                                                                                                  |                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotStatevector.__init__ "qiskit.providers.aer.extensions.SnapshotStatevector.__init__")(label\[, num\_qubits])                                                | Create a statevector state snapshot instruction.                         |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotStatevector.add_decomposition "qiskit.providers.aer.extensions.SnapshotStatevector.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotStatevector.assemble "qiskit.providers.aer.extensions.SnapshotStatevector.assemble")()                                                                     | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotStatevector.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotStatevector.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotStatevector.c_if "qiskit.providers.aer.extensions.SnapshotStatevector.c_if")(classical, val)                                                                   | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotStatevector.copy "qiskit.providers.aer.extensions.SnapshotStatevector.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotStatevector.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotStatevector.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotStatevector.inverse "qiskit.providers.aer.extensions.SnapshotStatevector.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotStatevector.is_parameterized "qiskit.providers.aer.extensions.SnapshotStatevector.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotStatevector.mirror "qiskit.providers.aer.extensions.SnapshotStatevector.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotStatevector.qasm "qiskit.providers.aer.extensions.SnapshotStatevector.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotStatevector.repeat "qiskit.providers.aer.extensions.SnapshotStatevector.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotStatevector.reverse_ops "qiskit.providers.aer.extensions.SnapshotStatevector.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.extensions.SnapshotStatevector.soft_compare "qiskit.providers.aer.extensions.SnapshotStatevector.soft_compare")(other)                                                    | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotStatevector.validate_parameter "qiskit.providers.aer.extensions.SnapshotStatevector.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                              |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotStatevector.decompositions "qiskit.providers.aer.extensions.SnapshotStatevector.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotStatevector.definition "qiskit.providers.aer.extensions.SnapshotStatevector.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotStatevector.duration "qiskit.providers.aer.extensions.SnapshotStatevector.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotStatevector.label "qiskit.providers.aer.extensions.SnapshotStatevector.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotStatevector.params "qiskit.providers.aer.extensions.SnapshotStatevector.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotStatevector.snapshot_type "qiskit.providers.aer.extensions.SnapshotStatevector.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotStatevector.unit "qiskit.providers.aer.extensions.SnapshotStatevector.unit")                               | Get the time unit of duration.                                                |

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

`static define_snapshot_register(circuit, label=None, qubits=None)`

Defines qubits to snapshot for all snapshot methods

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
