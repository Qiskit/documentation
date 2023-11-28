<span id="qiskit-circuit-library-barrier" />

# qiskit.circuit.library.Barrier

<span id="undefined" />

`Barrier(num_qubits)`

Barrier instruction.

Create new barrier instruction.

<span id="undefined" />

`__init__(num_qubits)`

Create new barrier instruction.

## Methods

|                                                                                                                                                 |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.circuit.library.Barrier.__init__ "qiskit.circuit.library.Barrier.__init__")(num\_qubits)                                   | Create new barrier instruction.                                          |
| [`add_decomposition`](#qiskit.circuit.library.Barrier.add_decomposition "qiskit.circuit.library.Barrier.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](#qiskit.circuit.library.Barrier.assemble "qiskit.circuit.library.Barrier.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.circuit.library.Barrier.broadcast_arguments "qiskit.circuit.library.Barrier.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`c_if`](#qiskit.circuit.library.Barrier.c_if "qiskit.circuit.library.Barrier.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`copy`](#qiskit.circuit.library.Barrier.copy "qiskit.circuit.library.Barrier.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.circuit.library.Barrier.inverse "qiskit.circuit.library.Barrier.inverse")()                                                 | Special case.                                                            |
| [`is_parameterized`](#qiskit.circuit.library.Barrier.is_parameterized "qiskit.circuit.library.Barrier.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.circuit.library.Barrier.mirror "qiskit.circuit.library.Barrier.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](#qiskit.circuit.library.Barrier.qasm "qiskit.circuit.library.Barrier.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](#qiskit.circuit.library.Barrier.repeat "qiskit.circuit.library.Barrier.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.circuit.library.Barrier.reverse_ops "qiskit.circuit.library.Barrier.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`validate_parameter`](#qiskit.circuit.library.Barrier.validate_parameter "qiskit.circuit.library.Barrier.validate_parameter")(parameter)       | Instruction parameters has no validation or normalization.               |

## Attributes

|                                                                                                                    |                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.circuit.library.Barrier.decompositions "qiskit.circuit.library.Barrier.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.circuit.library.Barrier.definition "qiskit.circuit.library.Barrier.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.circuit.library.Barrier.duration "qiskit.circuit.library.Barrier.duration")                   | Get the duration.                                                             |
| [`params`](#qiskit.circuit.library.Barrier.params "qiskit.circuit.library.Barrier.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.circuit.library.Barrier.unit "qiskit.circuit.library.Barrier.unit")                               | Get the time unit of duration.                                                |

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

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.
