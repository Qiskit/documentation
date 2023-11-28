# qiskit.extensions.Initialize

<span id="undefined" />

`Initialize(params, num_qubits=None)`

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

<span id="undefined" />

`__init__(params, num_qubits=None)`

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

|                                                                                                                                             |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`__init__`](#qiskit.extensions.Initialize.__init__ "qiskit.extensions.Initialize.__init__")(params\[, num\_qubits])                        | Create new initialize composite.                                          |
| [`add_decomposition`](#qiskit.extensions.Initialize.add_decomposition "qiskit.extensions.Initialize.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.  |
| [`assemble`](#qiskit.extensions.Initialize.assemble "qiskit.extensions.Initialize.assemble")()                                              | Assemble a QasmQobjInstruction                                            |
| [`broadcast_arguments`](#qiskit.extensions.Initialize.broadcast_arguments "qiskit.extensions.Initialize.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                              |
| [`c_if`](#qiskit.extensions.Initialize.c_if "qiskit.extensions.Initialize.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.      |
| [`copy`](#qiskit.extensions.Initialize.copy "qiskit.extensions.Initialize.copy")(\[name])                                                   | Copy of the instruction.                                                  |
| [`gates_to_uncompute`](#qiskit.extensions.Initialize.gates_to_uncompute "qiskit.extensions.Initialize.gates_to_uncompute")()                | Call to create a circuit with gates that take the desired vector to zero. |
| [`inverse`](#qiskit.extensions.Initialize.inverse "qiskit.extensions.Initialize.inverse")()                                                 | Invert this instruction.                                                  |
| [`is_parameterized`](#qiskit.extensions.Initialize.is_parameterized "qiskit.extensions.Initialize.is_parameterized")()                      | Return True .IFF.                                                         |
| [`mirror`](#qiskit.extensions.Initialize.mirror "qiskit.extensions.Initialize.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                               |
| [`qasm`](#qiskit.extensions.Initialize.qasm "qiskit.extensions.Initialize.qasm")()                                                          | Return a default OpenQASM string for the instruction.                     |
| [`repeat`](#qiskit.extensions.Initialize.repeat "qiskit.extensions.Initialize.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.              |
| [`reverse_ops`](#qiskit.extensions.Initialize.reverse_ops "qiskit.extensions.Initialize.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.       |
| [`soft_compare`](#qiskit.extensions.Initialize.soft_compare "qiskit.extensions.Initialize.soft_compare")(other)                             | Soft comparison between gates.                                            |
| [`validate_parameter`](#qiskit.extensions.Initialize.validate_parameter "qiskit.extensions.Initialize.validate_parameter")(parameter)       | Initialize instruction parameter can be str, int, float, and complex.     |

## Attributes

|                                                                                                                |                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.Initialize.decompositions "qiskit.extensions.Initialize.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.Initialize.definition "qiskit.extensions.Initialize.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.Initialize.duration "qiskit.extensions.Initialize.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.extensions.Initialize.label "qiskit.extensions.Initialize.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.extensions.Initialize.params "qiskit.extensions.Initialize.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.extensions.Initialize.unit "qiskit.extensions.Initialize.unit")                               | Get the time unit of duration.                                                |

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

`gates_to_uncompute()`

Call to create a circuit with gates that take the desired vector to zero.

**Returns**

circuit to take self.params vector to $|{00\ldots0}\rangle$

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

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

Initialize instruction parameter can be str, int, float, and complex.
