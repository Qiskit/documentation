# qiskit.providers.aer.extensions.SnapshotExpectationValue

<span id="undefined" />

`SnapshotExpectationValue(label, op, single_shot=False, variance=False)`

Snapshot instruction for supported methods of Qasm simulator.

Create an expectation value snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveExpectationValue`](qiskit.providers.aer.library.SaveExpectationValue#qiskit.providers.aer.library.SaveExpectationValue "qiskit.providers.aer.library.SaveExpectationValue") and [`qiskit.providers.aer.library.SaveExpectationValueVariance`](qiskit.providers.aer.library.SaveExpectationValueVariance#qiskit.providers.aer.library.SaveExpectationValueVariance "qiskit.providers.aer.library.SaveExpectationValueVariance") instructions.
</Admonition>

<span id="undefined" />

`__init__(label, op, single_shot=False, variance=False)`

Create an expectation value snapshot instruction.

**Parameters**

*   **label** (*str*) – the snapshot label.
*   **op** ([*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of values \[Default: False]

**Raises**

**ExtensionError** – if snapshot is invalid.

<Admonition title="Note" type="note">
  This instruction will be deprecated after the qiskit-aer 0.8 release. It has been superseded by the [`qiskit.providers.aer.library.SaveExpectationValue`](qiskit.providers.aer.library.SaveExpectationValue#qiskit.providers.aer.library.SaveExpectationValue "qiskit.providers.aer.library.SaveExpectationValue") and [`qiskit.providers.aer.library.SaveExpectationValueVariance`](qiskit.providers.aer.library.SaveExpectationValueVariance#qiskit.providers.aer.library.SaveExpectationValueVariance "qiskit.providers.aer.library.SaveExpectationValueVariance") instructions.
</Admonition>

## Methods

|                                                                                                                                                                                                                            |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.__init__ "qiskit.providers.aer.extensions.SnapshotExpectationValue.__init__")(label, op\[, single\_shot, variance])                                 | Create an expectation value snapshot instruction.                        |
| [`add_decomposition`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition "qiskit.providers.aer.extensions.SnapshotExpectationValue.add_decomposition")(decomposition)                             | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble "qiskit.providers.aer.extensions.SnapshotExpectationValue.assemble")()                                                                     | Assemble a QasmQobjInstruction for snapshot\_expectation\_value.         |
| [`broadcast_arguments`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments "qiskit.providers.aer.extensions.SnapshotExpectationValue.broadcast_arguments")(qargs, cargs)                        | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if "qiskit.providers.aer.extensions.SnapshotExpectationValue.c_if")(classical, val)                                                                   | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.copy "qiskit.providers.aer.extensions.SnapshotExpectationValue.copy")(\[name])                                                                          | Copy of the instruction.                                                 |
| [`define_snapshot_register`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register "qiskit.providers.aer.extensions.SnapshotExpectationValue.define_snapshot_register")(circuit\[, label, …]) | Defines qubits to snapshot for all snapshot methods                      |
| [`inverse`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse "qiskit.providers.aer.extensions.SnapshotExpectationValue.inverse")()                                                                        | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized "qiskit.providers.aer.extensions.SnapshotExpectationValue.is_parameterized")()                                             | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror "qiskit.providers.aer.extensions.SnapshotExpectationValue.mirror")()                                                                           | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm "qiskit.providers.aer.extensions.SnapshotExpectationValue.qasm")()                                                                                 | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat "qiskit.providers.aer.extensions.SnapshotExpectationValue.repeat")(n)                                                                          | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops "qiskit.providers.aer.extensions.SnapshotExpectationValue.reverse_ops")()                                                            | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.soft_compare "qiskit.providers.aer.extensions.SnapshotExpectationValue.soft_compare")(other)                                                    | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter "qiskit.providers.aer.extensions.SnapshotExpectationValue.validate_parameter")(parameter)                              | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                                        |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions "qiskit.providers.aer.extensions.SnapshotExpectationValue.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.definition "qiskit.providers.aer.extensions.SnapshotExpectationValue.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.duration "qiskit.providers.aer.extensions.SnapshotExpectationValue.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.label "qiskit.providers.aer.extensions.SnapshotExpectationValue.label")                            | Return snapshot label                                                         |
| [`params`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.params "qiskit.providers.aer.extensions.SnapshotExpectationValue.params")                         | return instruction params.                                                    |
| [`snapshot_type`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type "qiskit.providers.aer.extensions.SnapshotExpectationValue.snapshot_type")    | Return snapshot type                                                          |
| [`unit`](#qiskit.providers.aer.extensions.SnapshotExpectationValue.unit "qiskit.providers.aer.extensions.SnapshotExpectationValue.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`assemble()`

Assemble a QasmQobjInstruction for snapshot\_expectation\_value.

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
