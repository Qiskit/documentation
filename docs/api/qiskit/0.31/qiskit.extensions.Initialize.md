# Initialize

<span id="undefined" />

`Initialize(params, num_qubits=None)`

Bases: `qiskit.circuit.instruction.Instruction`

Complex amplitude initialization.

Class that implements the (complex amplitude) initialization of some flexible collection of qubit registers. Note that Initialize is an Instruction and not a Gate since it contains a reset instruction, which is not unitary.

Create new initialize composite.

**params (str, list, int or Statevector):**

*   Statevector: Statevector to initialize to.

*   list: vector of complex amplitudes to initialize to.

*   **string: labels of basis states of the Pauli eigenstates Z, X, Y. See**

    `from_label()`. Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to |1> and the qubit one to |0>.

*   **int: an integer that is used as a bitmap indicating which qubits to initialize**

    to |1>. Example: setting params to 5 would initialize qubit 0 and qubit 2 to |1> and qubit 1 to |0>.

**num\_qubits (int): This parameter is only used if params is an int. Indicates the total**

number of qubits in the initialize call. Example: initialize covers 5 qubits and params is 3. This allows qubits 0 and 1 to be initialized to |1> and the remaining 3 qubits to be initialized to |0>.

## Methods

|                                                                                                                                                                               |                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`add_decomposition`](qiskit.extensions.Initialize.add_decomposition#qiskit.extensions.Initialize.add_decomposition "qiskit.extensions.Initialize.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary.  |
| [`assemble`](qiskit.extensions.Initialize.assemble#qiskit.extensions.Initialize.assemble "qiskit.extensions.Initialize.assemble")                                             | Assemble a QasmQobjInstruction                                            |
| [`broadcast_arguments`](qiskit.extensions.Initialize.broadcast_arguments#qiskit.extensions.Initialize.broadcast_arguments "qiskit.extensions.Initialize.broadcast_arguments") | Validation of the arguments.                                              |
| [`c_if`](qiskit.extensions.Initialize.c_if#qiskit.extensions.Initialize.c_if "qiskit.extensions.Initialize.c_if")                                                             | Add classical condition on register or cbit classical and value val.      |
| [`copy`](qiskit.extensions.Initialize.copy#qiskit.extensions.Initialize.copy "qiskit.extensions.Initialize.copy")                                                             | Copy of the instruction.                                                  |
| [`gates_to_uncompute`](qiskit.extensions.Initialize.gates_to_uncompute#qiskit.extensions.Initialize.gates_to_uncompute "qiskit.extensions.Initialize.gates_to_uncompute")     | Call to create a circuit with gates that take the desired vector to zero. |
| [`inverse`](qiskit.extensions.Initialize.inverse#qiskit.extensions.Initialize.inverse "qiskit.extensions.Initialize.inverse")                                                 | Invert this instruction.                                                  |
| [`is_parameterized`](qiskit.extensions.Initialize.is_parameterized#qiskit.extensions.Initialize.is_parameterized "qiskit.extensions.Initialize.is_parameterized")             | Return True .IFF.                                                         |
| [`mirror`](qiskit.extensions.Initialize.mirror#qiskit.extensions.Initialize.mirror "qiskit.extensions.Initialize.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                               |
| [`qasm`](qiskit.extensions.Initialize.qasm#qiskit.extensions.Initialize.qasm "qiskit.extensions.Initialize.qasm")                                                             | Return a default OpenQASM string for the instruction.                     |
| [`repeat`](qiskit.extensions.Initialize.repeat#qiskit.extensions.Initialize.repeat "qiskit.extensions.Initialize.repeat")                                                     | Creates an instruction with gate repeated n amount of times.              |
| [`reverse_ops`](qiskit.extensions.Initialize.reverse_ops#qiskit.extensions.Initialize.reverse_ops "qiskit.extensions.Initialize.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.       |
| [`soft_compare`](qiskit.extensions.Initialize.soft_compare#qiskit.extensions.Initialize.soft_compare "qiskit.extensions.Initialize.soft_compare")                             | Soft comparison between gates.                                            |
| [`validate_parameter`](qiskit.extensions.Initialize.validate_parameter#qiskit.extensions.Initialize.validate_parameter "qiskit.extensions.Initialize.validate_parameter")     | Initialize instruction parameter can be str, int, float, and complex.     |

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
