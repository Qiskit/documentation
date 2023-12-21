# ClassicalFunction

`ClassicalFunction(source, name=None)`

Bases: `qiskit.circuit.classicalfunction.classical_element.ClassicalElement`

Represent a classical function function and its logic network.

Creates a `ClassicalFunction` from Python source code in `source`.

The code should be a single function with types.

**Parameters**

*   **source** (*str*) – Python code with type hints.
*   **name** (*str*) – Optional. Default: “*classicalfunction*”. ClassicalFunction name.

**Raises**

**QiskitError** – If source is not a string.

## Methods

|                                                                                                                                                                                                                                                 |                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition#qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition "qiskit.circuit.classicalfunction.ClassicalFunction.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.                                                                            |
| [`assemble`](qiskit.circuit.classicalfunction.ClassicalFunction.assemble#qiskit.circuit.classicalfunction.ClassicalFunction.assemble "qiskit.circuit.classicalfunction.ClassicalFunction.assemble")                                             | Assemble a QasmQobjInstruction                                                                                                                      |
| [`broadcast_arguments`](qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments#qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments "qiskit.circuit.classicalfunction.ClassicalFunction.broadcast_arguments") | Validation and handling of the arguments and its relationship.                                                                                      |
| [`c_if`](qiskit.circuit.classicalfunction.ClassicalFunction.c_if#qiskit.circuit.classicalfunction.ClassicalFunction.c_if "qiskit.circuit.classicalfunction.ClassicalFunction.c_if")                                                             | Add classical condition on register or cbit classical and value val.                                                                                |
| [`compile`](qiskit.circuit.classicalfunction.ClassicalFunction.compile#qiskit.circuit.classicalfunction.ClassicalFunction.compile "qiskit.circuit.classicalfunction.ClassicalFunction.compile")                                                 | Parses and creates the logical circuit                                                                                                              |
| [`control`](qiskit.circuit.classicalfunction.ClassicalFunction.control#qiskit.circuit.classicalfunction.ClassicalFunction.control "qiskit.circuit.classicalfunction.ClassicalFunction.control")                                                 | Return controlled version of gate.                                                                                                                  |
| [`copy`](qiskit.circuit.classicalfunction.ClassicalFunction.copy#qiskit.circuit.classicalfunction.ClassicalFunction.copy "qiskit.circuit.classicalfunction.ClassicalFunction.copy")                                                             | Copy of the instruction.                                                                                                                            |
| [`inverse`](qiskit.circuit.classicalfunction.ClassicalFunction.inverse#qiskit.circuit.classicalfunction.ClassicalFunction.inverse "qiskit.circuit.classicalfunction.ClassicalFunction.inverse")                                                 | Invert this instruction.                                                                                                                            |
| [`is_parameterized`](qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized#qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized "qiskit.circuit.classicalfunction.ClassicalFunction.is_parameterized")             | Return True .IFF.                                                                                                                                   |
| [`mirror`](qiskit.circuit.classicalfunction.ClassicalFunction.mirror#qiskit.circuit.classicalfunction.ClassicalFunction.mirror "qiskit.circuit.classicalfunction.ClassicalFunction.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                                                                                                         |
| [`power`](qiskit.circuit.classicalfunction.ClassicalFunction.power#qiskit.circuit.classicalfunction.ClassicalFunction.power "qiskit.circuit.classicalfunction.ClassicalFunction.power")                                                         | Creates a unitary gate as gate^exponent.                                                                                                            |
| [`qasm`](qiskit.circuit.classicalfunction.ClassicalFunction.qasm#qiskit.circuit.classicalfunction.ClassicalFunction.qasm "qiskit.circuit.classicalfunction.ClassicalFunction.qasm")                                                             | Return a default OpenQASM string for the instruction.                                                                                               |
| [`repeat`](qiskit.circuit.classicalfunction.ClassicalFunction.repeat#qiskit.circuit.classicalfunction.ClassicalFunction.repeat "qiskit.circuit.classicalfunction.ClassicalFunction.repeat")                                                     | Creates an instruction with gate repeated n amount of times.                                                                                        |
| [`reverse_ops`](qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops#qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops "qiskit.circuit.classicalfunction.ClassicalFunction.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.                                                                                 |
| [`simulate`](qiskit.circuit.classicalfunction.ClassicalFunction.simulate#qiskit.circuit.classicalfunction.ClassicalFunction.simulate "qiskit.circuit.classicalfunction.ClassicalFunction.simulate")                                             | Evaluate the expression on a bitstring.                                                                                                             |
| [`simulate_all`](qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all#qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all "qiskit.circuit.classicalfunction.ClassicalFunction.simulate_all")                             | Returns a truth table.                                                                                                                              |
| [`soft_compare`](qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare#qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare "qiskit.circuit.classicalfunction.ClassicalFunction.soft_compare")                             | Soft comparison between gates.                                                                                                                      |
| [`synth`](qiskit.circuit.classicalfunction.ClassicalFunction.synth#qiskit.circuit.classicalfunction.ClassicalFunction.synth "qiskit.circuit.classicalfunction.ClassicalFunction.synth")                                                         | Synthesis the logic network into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"). |
| [`to_matrix`](qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix#qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix "qiskit.circuit.classicalfunction.ClassicalFunction.to_matrix")                                         | Return a Numpy.array for the gate unitary matrix.                                                                                                   |
| [`validate_parameter`](qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter#qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter "qiskit.circuit.classicalfunction.ClassicalFunction.validate_parameter")     | Gate parameters should be int, float, or ParameterExpression                                                                                        |

## Attributes

### args

Returns the classicalfunction arguments

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

Return definition in terms of other basic gates.

### duration

Get the duration.

### label

Return instruction label

**Return type**

`str`

### network

Returns the logical network

### params

return instruction params.

### qregs

The list of qregs used by the classicalfunction

### scopes

Returns the scope dict

### truth\_table

Returns (and computes) the truth table

### types

Dumps a list of scopes with their variables and types.

**Returns**

A list of scopes as dicts, where key is the variable name and value is its type.

**Return type**

list(dict)

### unit

Get the time unit of duration.
