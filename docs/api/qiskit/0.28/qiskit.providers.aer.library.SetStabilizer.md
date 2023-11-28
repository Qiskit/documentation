# qiskit.providers.aer.library.SetStabilizer

<span id="undefined" />

`SetStabilizer(state)`

Set the Clifford stabilizer state of the simulator

Create new instruction to set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

<span id="undefined" />

`__init__(state)`

Create new instruction to set the Clifford stabilizer state of the simulator.

**Parameters**

**state** ([*Clifford*](qiskit.quantum_info.Clifford#qiskit.quantum_info.Clifford "qiskit.quantum_info.Clifford")) – A clifford operator.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit, otherwise an exception will be raised during simulation.
</Admonition>

## Methods

|                                                                                                                                                                         |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`__init__`](#qiskit.providers.aer.library.SetStabilizer.__init__ "qiskit.providers.aer.library.SetStabilizer.__init__")(state)                                         | Create new instruction to set the Clifford stabilizer state of the simulator. |
| [`add_decomposition`](#qiskit.providers.aer.library.SetStabilizer.add_decomposition "qiskit.providers.aer.library.SetStabilizer.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.      |
| [`assemble`](#qiskit.providers.aer.library.SetStabilizer.assemble "qiskit.providers.aer.library.SetStabilizer.assemble")()                                              | Assemble a QasmQobjInstruction                                                |
| [`broadcast_arguments`](#qiskit.providers.aer.library.SetStabilizer.broadcast_arguments "qiskit.providers.aer.library.SetStabilizer.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                                  |
| [`c_if`](#qiskit.providers.aer.library.SetStabilizer.c_if "qiskit.providers.aer.library.SetStabilizer.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.          |
| [`copy`](#qiskit.providers.aer.library.SetStabilizer.copy "qiskit.providers.aer.library.SetStabilizer.copy")(\[name])                                                   | Copy of the instruction.                                                      |
| [`inverse`](#qiskit.providers.aer.library.SetStabilizer.inverse "qiskit.providers.aer.library.SetStabilizer.inverse")()                                                 | Invert this instruction.                                                      |
| [`is_parameterized`](#qiskit.providers.aer.library.SetStabilizer.is_parameterized "qiskit.providers.aer.library.SetStabilizer.is_parameterized")()                      | Return True .IFF.                                                             |
| [`mirror`](#qiskit.providers.aer.library.SetStabilizer.mirror "qiskit.providers.aer.library.SetStabilizer.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                                   |
| [`qasm`](#qiskit.providers.aer.library.SetStabilizer.qasm "qiskit.providers.aer.library.SetStabilizer.qasm")()                                                          | Return a default OpenQASM string for the instruction.                         |
| [`repeat`](#qiskit.providers.aer.library.SetStabilizer.repeat "qiskit.providers.aer.library.SetStabilizer.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.                  |
| [`reverse_ops`](#qiskit.providers.aer.library.SetStabilizer.reverse_ops "qiskit.providers.aer.library.SetStabilizer.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.           |
| [`soft_compare`](#qiskit.providers.aer.library.SetStabilizer.soft_compare "qiskit.providers.aer.library.SetStabilizer.soft_compare")(other)                             | Soft comparison between gates.                                                |
| [`validate_parameter`](#qiskit.providers.aer.library.SetStabilizer.validate_parameter "qiskit.providers.aer.library.SetStabilizer.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.                    |

## Attributes

|                                                                                                                                            |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.library.SetStabilizer.decompositions "qiskit.providers.aer.library.SetStabilizer.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.library.SetStabilizer.definition "qiskit.providers.aer.library.SetStabilizer.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.library.SetStabilizer.duration "qiskit.providers.aer.library.SetStabilizer.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.library.SetStabilizer.label "qiskit.providers.aer.library.SetStabilizer.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.providers.aer.library.SetStabilizer.params "qiskit.providers.aer.library.SetStabilizer.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.providers.aer.library.SetStabilizer.unit "qiskit.providers.aer.library.SetStabilizer.unit")                               | Get the time unit of duration.                                                |

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

Add classical condition on register or cbit classical and value val.

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

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

<span id="undefined" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

<span id="undefined" />

`property label`

Return instruction label

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
