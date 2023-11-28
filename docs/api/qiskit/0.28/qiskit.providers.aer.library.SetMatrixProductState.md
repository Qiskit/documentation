# qiskit.providers.aer.library.SetMatrixProductState

<span id="undefined" />

`SetMatrixProductState(state)`

Set the matrix product state of the simulator

Create new instruction to set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit. The matrix\_product\_state consists of a pair of vectors. The first is a vector of pairs of matrices of complex numbers. The second is a vector of vectors of double.
</Admonition>

<span id="undefined" />

`__init__(state)`

Create new instruction to set the matrix product state of the simulator.

**Parameters**

**state** (*Tuple\[List\[Tuple\[np.array\[complex\_t]]]], List\[List\[float]]*) – A matrix\_product\_state.

<Admonition title="Note" type="note">
  This set instruction must always be performed on the full width of qubits in a circuit. The matrix\_product\_state consists of a pair of vectors. The first is a vector of pairs of matrices of complex numbers. The second is a vector of vectors of double.
</Admonition>

## Methods

|                                                                                                                                                                                         |                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.library.SetMatrixProductState.__init__ "qiskit.providers.aer.library.SetMatrixProductState.__init__")(state)                                         | Create new instruction to set the matrix product state of the simulator. |
| [`add_decomposition`](#qiskit.providers.aer.library.SetMatrixProductState.add_decomposition "qiskit.providers.aer.library.SetMatrixProductState.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.library.SetMatrixProductState.assemble "qiskit.providers.aer.library.SetMatrixProductState.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.providers.aer.library.SetMatrixProductState.broadcast_arguments "qiskit.providers.aer.library.SetMatrixProductState.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.library.SetMatrixProductState.c_if "qiskit.providers.aer.library.SetMatrixProductState.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`copy`](#qiskit.providers.aer.library.SetMatrixProductState.copy "qiskit.providers.aer.library.SetMatrixProductState.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.providers.aer.library.SetMatrixProductState.inverse "qiskit.providers.aer.library.SetMatrixProductState.inverse")()                                                 | Invert this instruction.                                                 |
| [`is_parameterized`](#qiskit.providers.aer.library.SetMatrixProductState.is_parameterized "qiskit.providers.aer.library.SetMatrixProductState.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.library.SetMatrixProductState.mirror "qiskit.providers.aer.library.SetMatrixProductState.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.library.SetMatrixProductState.qasm "qiskit.providers.aer.library.SetMatrixProductState.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.library.SetMatrixProductState.repeat "qiskit.providers.aer.library.SetMatrixProductState.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.library.SetMatrixProductState.reverse_ops "qiskit.providers.aer.library.SetMatrixProductState.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.library.SetMatrixProductState.soft_compare "qiskit.providers.aer.library.SetMatrixProductState.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.library.SetMatrixProductState.validate_parameter "qiskit.providers.aer.library.SetMatrixProductState.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.library.SetMatrixProductState.decompositions "qiskit.providers.aer.library.SetMatrixProductState.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.library.SetMatrixProductState.definition "qiskit.providers.aer.library.SetMatrixProductState.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.library.SetMatrixProductState.duration "qiskit.providers.aer.library.SetMatrixProductState.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.providers.aer.library.SetMatrixProductState.label "qiskit.providers.aer.library.SetMatrixProductState.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.providers.aer.library.SetMatrixProductState.params "qiskit.providers.aer.library.SetMatrixProductState.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.providers.aer.library.SetMatrixProductState.unit "qiskit.providers.aer.library.SetMatrixProductState.unit")                               | Get the time unit of duration.                                                |

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
