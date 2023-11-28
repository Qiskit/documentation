# qiskit.providers.aer.library.SaveDensityMatrix

<span id="undefined" />

`SaveDensityMatrix(num_qubits, label='density_matrix', unnormalized=False, pershot=False, conditional=False)`

Save a reduced density matrix.

Create new instruction to save the simulator reduced density matrix.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the save instruction.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated density matrix over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of density matrices for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

<span id="undefined" />

`__init__(num_qubits, label='density_matrix', unnormalized=False, pershot=False, conditional=False)`

Create new instruction to save the simulator reduced density matrix.

**Parameters**

*   **num\_qubits** (*int*) – the number of qubits for the save instruction.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated density matrix over all shots \[Default: False].
*   **pershot** (*bool*) – if True save a list of density matrices for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

## Methods

|                                                                                                                                                                                 |                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.providers.aer.library.SaveDensityMatrix.__init__ "qiskit.providers.aer.library.SaveDensityMatrix.__init__")(num\_qubits\[, label, unnormalized, …])        | Create new instruction to save the simulator reduced density matrix.     |
| [`add_decomposition`](#qiskit.providers.aer.library.SaveDensityMatrix.add_decomposition "qiskit.providers.aer.library.SaveDensityMatrix.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.providers.aer.library.SaveDensityMatrix.assemble "qiskit.providers.aer.library.SaveDensityMatrix.assemble")()                                              | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](#qiskit.providers.aer.library.SaveDensityMatrix.broadcast_arguments "qiskit.providers.aer.library.SaveDensityMatrix.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.providers.aer.library.SaveDensityMatrix.c_if "qiskit.providers.aer.library.SaveDensityMatrix.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.providers.aer.library.SaveDensityMatrix.copy "qiskit.providers.aer.library.SaveDensityMatrix.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.providers.aer.library.SaveDensityMatrix.inverse "qiskit.providers.aer.library.SaveDensityMatrix.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.providers.aer.library.SaveDensityMatrix.is_parameterized "qiskit.providers.aer.library.SaveDensityMatrix.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.providers.aer.library.SaveDensityMatrix.mirror "qiskit.providers.aer.library.SaveDensityMatrix.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.providers.aer.library.SaveDensityMatrix.qasm "qiskit.providers.aer.library.SaveDensityMatrix.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.providers.aer.library.SaveDensityMatrix.repeat "qiskit.providers.aer.library.SaveDensityMatrix.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.providers.aer.library.SaveDensityMatrix.reverse_ops "qiskit.providers.aer.library.SaveDensityMatrix.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.providers.aer.library.SaveDensityMatrix.soft_compare "qiskit.providers.aer.library.SaveDensityMatrix.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`validate_parameter`](#qiskit.providers.aer.library.SaveDensityMatrix.validate_parameter "qiskit.providers.aer.library.SaveDensityMatrix.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                                                    |                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.providers.aer.library.SaveDensityMatrix.decompositions "qiskit.providers.aer.library.SaveDensityMatrix.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.providers.aer.library.SaveDensityMatrix.definition "qiskit.providers.aer.library.SaveDensityMatrix.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.providers.aer.library.SaveDensityMatrix.duration "qiskit.providers.aer.library.SaveDensityMatrix.duration")                   | Get the duration.                                                             |
| [`params`](#qiskit.providers.aer.library.SaveDensityMatrix.params "qiskit.providers.aer.library.SaveDensityMatrix.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.providers.aer.library.SaveDensityMatrix.unit "qiskit.providers.aer.library.SaveDensityMatrix.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`assemble()`

Return the QasmQobjInstruction for the intructions.

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
