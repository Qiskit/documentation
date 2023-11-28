# BooleanExpression

<span id="undefined" />

`BooleanExpression(expression, name=None)`

Bases: `qiskit.circuit.classicalfunction.classical_element.ClassicalElement`

The Boolean Expression gate.

**Parameters**

*   **expression** (*str*) – The logical expression string.
*   **name** (*str*) – Optional. Instruction gate name. Otherwise part of the expression is going to be used.

## Methods

|                                                                                                                                                                                                                                                 |                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition#qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition "qiskit.circuit.classicalfunction.BooleanExpression.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                                                            |
| [`assemble`](qiskit.circuit.classicalfunction.BooleanExpression.assemble#qiskit.circuit.classicalfunction.BooleanExpression.assemble "qiskit.circuit.classicalfunction.BooleanExpression.assemble")                                             | Assemble a QasmQobjInstruction                                                                                                                      |
| [`broadcast_arguments`](qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments#qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments "qiskit.circuit.classicalfunction.BooleanExpression.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                                                      |
| [`c_if`](qiskit.circuit.classicalfunction.BooleanExpression.c_if#qiskit.circuit.classicalfunction.BooleanExpression.c_if "qiskit.circuit.classicalfunction.BooleanExpression.c_if")                                                             | Add classical condition on register or cbit classical and value val.                                                                                |
| [`control`](qiskit.circuit.classicalfunction.BooleanExpression.control#qiskit.circuit.classicalfunction.BooleanExpression.control "qiskit.circuit.classicalfunction.BooleanExpression.control")                                                 | Return controlled version of gate.                                                                                                                  |
| [`copy`](qiskit.circuit.classicalfunction.BooleanExpression.copy#qiskit.circuit.classicalfunction.BooleanExpression.copy "qiskit.circuit.classicalfunction.BooleanExpression.copy")                                                             | Copy of the instruction.                                                                                                                            |
| [`from_dimacs_file`](qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file#qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file "qiskit.circuit.classicalfunction.BooleanExpression.from_dimacs_file")             | Create a BooleanExpression from the string in the DIMACS format.                                                                                    |
| [`inverse`](qiskit.circuit.classicalfunction.BooleanExpression.inverse#qiskit.circuit.classicalfunction.BooleanExpression.inverse "qiskit.circuit.classicalfunction.BooleanExpression.inverse")                                                 | Invert this instruction.                                                                                                                            |
| [`is_parameterized`](qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized#qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized "qiskit.circuit.classicalfunction.BooleanExpression.is_parameterized")             | Return True .IFF.                                                                                                                                   |
| [`mirror`](qiskit.circuit.classicalfunction.BooleanExpression.mirror#qiskit.circuit.classicalfunction.BooleanExpression.mirror "qiskit.circuit.classicalfunction.BooleanExpression.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                                                         |
| [`power`](qiskit.circuit.classicalfunction.BooleanExpression.power#qiskit.circuit.classicalfunction.BooleanExpression.power "qiskit.circuit.classicalfunction.BooleanExpression.power")                                                         | Creates a unitary gate as gate^exponent.                                                                                                            |
| [`qasm`](qiskit.circuit.classicalfunction.BooleanExpression.qasm#qiskit.circuit.classicalfunction.BooleanExpression.qasm "qiskit.circuit.classicalfunction.BooleanExpression.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                                                               |
| [`repeat`](qiskit.circuit.classicalfunction.BooleanExpression.repeat#qiskit.circuit.classicalfunction.BooleanExpression.repeat "qiskit.circuit.classicalfunction.BooleanExpression.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                                                        |
| [`reverse_ops`](qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops#qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops "qiskit.circuit.classicalfunction.BooleanExpression.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                                                                 |
| [`simulate`](qiskit.circuit.classicalfunction.BooleanExpression.simulate#qiskit.circuit.classicalfunction.BooleanExpression.simulate "qiskit.circuit.classicalfunction.BooleanExpression.simulate")                                             | Evaluate the expression on a bitstring.                                                                                                             |
| [`soft_compare`](qiskit.circuit.classicalfunction.BooleanExpression.soft_compare#qiskit.circuit.classicalfunction.BooleanExpression.soft_compare "qiskit.circuit.classicalfunction.BooleanExpression.soft_compare")                             | Soft comparison between gates.                                                                                                                      |
| [`synth`](qiskit.circuit.classicalfunction.BooleanExpression.synth#qiskit.circuit.classicalfunction.BooleanExpression.synth "qiskit.circuit.classicalfunction.BooleanExpression.synth")                                                         | Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). |
| [`to_matrix`](qiskit.circuit.classicalfunction.BooleanExpression.to_matrix#qiskit.circuit.classicalfunction.BooleanExpression.to_matrix "qiskit.circuit.classicalfunction.BooleanExpression.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                                                   |
| [`validate_parameter`](qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter#qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter "qiskit.circuit.classicalfunction.BooleanExpression.validate_parameter")     | Gate parameters should be int, float, or ParameterExpression                                                                                        |

## Attributes

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
