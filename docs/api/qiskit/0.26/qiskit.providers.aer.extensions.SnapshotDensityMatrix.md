# qiskit.providers.aer.extensions.SnapshotDensityMatrix

<span id="undefined" />

`SnapshotDensityMatrix(label, num_qubits)`

Snapshot instruction for density matrix method of Qasm simulator.

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveDensityMatrix`](qiskit.providers.aer.library.SaveDensityMatrix#qiskit.providers.aer.library.SaveDensityMatrix "qiskit.providers.aer.library.SaveDensityMatrix") instruction.
</Admonition>

<span id="undefined" />

`__init__(label, num_qubits)`

Create a density matrix state snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **num\_qubits** (*int*) – the number of qubits to snapshot.

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveDensityMatrix`](qiskit.providers.aer.library.SaveDensityMatrix#qiskit.providers.aer.library.SaveDensityMatrix "qiskit.providers.aer.library.SaveDensityMatrix") instruction.
</Admonition>

## Methods

|                                                                                                                                                                                                                      |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.__init__ "qiskit.providers.aer.extensions.SnapshotDensityMatrix.__init__")(label, num\_qubits)                                                   | Create a density matrix state snapshot instruction.                      |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble "qiskit.providers.aer.extensions.SnapshotDensityMatrix.assemble")()                                                                     | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotDensityMatrix.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if "qiskit.providers.aer.extensions.SnapshotDensityMatrix.c_if")(classical, val)                                                                   | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy "qiskit.providers.aer.extensions.SnapshotDensityMatrix.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotDensityMatrix.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse "qiskit.providers.aer.extensions.SnapshotDensityMatrix.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized "qiskit.providers.aer.extensions.SnapshotDensityMatrix.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror "qiskit.providers.aer.extensions.SnapshotDensityMatrix.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm "qiskit.providers.aer.extensions.SnapshotDensityMatrix.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat "qiskit.providers.aer.extensions.SnapshotDensityMatrix.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops "qiskit.providers.aer.extensions.SnapshotDensityMatrix.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.soft_compare "qiskit.providers.aer.extensions.SnapshotDensityMatrix.soft_compare")(other)                                                    | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter "qiskit.providers.aer.extensions.SnapshotDensityMatrix.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                                  |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions "qiskit.providers.aer.extensions.SnapshotDensityMatrix.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition "qiskit.providers.aer.extensions.SnapshotDensityMatrix.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.duration "qiskit.providers.aer.extensions.SnapshotDensityMatrix.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.label "qiskit.providers.aer.extensions.SnapshotDensityMatrix.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.params "qiskit.providers.aer.extensions.SnapshotDensityMatrix.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type "qiskit.providers.aer.extensions.SnapshotDensityMatrix.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotDensityMatrix.unit "qiskit.providers.aer.extensions.SnapshotDensityMatrix.unit")                               | Get the time unit of duration.                                                |

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
