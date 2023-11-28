# qiskit.extensions.HamiltonianGate

<span id="undefined" />

`HamiltonianGate(data, time, label=None)`

Class for representing evolution by a Hermitian Hamiltonian operator as a gate. This gate resolves to a UnitaryGate U(t) = exp(-1j \* t \* H), which can be decomposed into basis gates if it is 2 qubits or less, or simulated directly in Aer for more qubits.

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

<span id="undefined" />

`__init__(data, time, label=None)`

Create a gate from a hamiltonian operator and evolution time parameter t

**Parameters**

*   **data** (*matrix or* [*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a hermitian operator.
*   **time** (*float*) – time evolution parameter.
*   **label** (*str*) – unitary name for backend \[Default: None].

**Raises**

**ExtensionError** – if input data is not an N-qubit unitary operator.

## Methods

|                                                                                                                                                       |                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`__init__`](#qiskit.extensions.HamiltonianGate.__init__ "qiskit.extensions.HamiltonianGate.__init__")(data, time\[, label])                          | Create a gate from a hamiltonian operator and evolution time parameter t |
| [`add_decomposition`](#qiskit.extensions.HamiltonianGate.add_decomposition "qiskit.extensions.HamiltonianGate.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`adjoint`](#qiskit.extensions.HamiltonianGate.adjoint "qiskit.extensions.HamiltonianGate.adjoint")()                                                 | Return the adjoint of the unitary.                                       |
| [`assemble`](#qiskit.extensions.HamiltonianGate.assemble "qiskit.extensions.HamiltonianGate.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`broadcast_arguments`](#qiskit.extensions.HamiltonianGate.broadcast_arguments "qiskit.extensions.HamiltonianGate.broadcast_arguments")(qargs, cargs) | Validation and handling of the arguments and its relationship.           |
| [`c_if`](#qiskit.extensions.HamiltonianGate.c_if "qiskit.extensions.HamiltonianGate.c_if")(classical, val)                                            | Add classical condition on register or cbit classical and value val.     |
| [`conjugate`](#qiskit.extensions.HamiltonianGate.conjugate "qiskit.extensions.HamiltonianGate.conjugate")()                                           | Return the conjugate of the Hamiltonian.                                 |
| [`control`](#qiskit.extensions.HamiltonianGate.control "qiskit.extensions.HamiltonianGate.control")(\[num\_ctrl\_qubits, label, ctrl\_state])         | Return controlled version of gate.                                       |
| [`copy`](#qiskit.extensions.HamiltonianGate.copy "qiskit.extensions.HamiltonianGate.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`inverse`](#qiskit.extensions.HamiltonianGate.inverse "qiskit.extensions.HamiltonianGate.inverse")()                                                 | Return the adjoint of the unitary.                                       |
| [`is_parameterized`](#qiskit.extensions.HamiltonianGate.is_parameterized "qiskit.extensions.HamiltonianGate.is_parameterized")()                      | Return True .IFF.                                                        |
| [`mirror`](#qiskit.extensions.HamiltonianGate.mirror "qiskit.extensions.HamiltonianGate.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                              |
| [`power`](#qiskit.extensions.HamiltonianGate.power "qiskit.extensions.HamiltonianGate.power")(exponent)                                               | Creates a unitary gate as gate^exponent.                                 |
| [`qasm`](#qiskit.extensions.HamiltonianGate.qasm "qiskit.extensions.HamiltonianGate.qasm")()                                                          | Raise an error, as QASM is not defined for the HamiltonianGate.          |
| [`repeat`](#qiskit.extensions.HamiltonianGate.repeat "qiskit.extensions.HamiltonianGate.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](#qiskit.extensions.HamiltonianGate.reverse_ops "qiskit.extensions.HamiltonianGate.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](#qiskit.extensions.HamiltonianGate.soft_compare "qiskit.extensions.HamiltonianGate.soft_compare")(other)                             | Soft comparison between gates.                                           |
| [`to_matrix`](#qiskit.extensions.HamiltonianGate.to_matrix "qiskit.extensions.HamiltonianGate.to_matrix")()                                           | Return a Numpy.array for the gate unitary matrix.                        |
| [`transpose`](#qiskit.extensions.HamiltonianGate.transpose "qiskit.extensions.HamiltonianGate.transpose")()                                           | Return the transpose of the Hamiltonian.                                 |
| [`validate_parameter`](#qiskit.extensions.HamiltonianGate.validate_parameter "qiskit.extensions.HamiltonianGate.validate_parameter")(parameter)       | Hamiltonian parameter has to be an ndarray, operator or float.           |

## Attributes

|                                                                                                                          |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.HamiltonianGate.decompositions "qiskit.extensions.HamiltonianGate.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.HamiltonianGate.definition "qiskit.extensions.HamiltonianGate.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.HamiltonianGate.duration "qiskit.extensions.HamiltonianGate.duration")                   | Get the duration.                                                             |
| [`label`](#qiskit.extensions.HamiltonianGate.label "qiskit.extensions.HamiltonianGate.label")                            | Return instruction label                                                      |
| [`params`](#qiskit.extensions.HamiltonianGate.params "qiskit.extensions.HamiltonianGate.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.extensions.HamiltonianGate.unit "qiskit.extensions.HamiltonianGate.unit")                               | Get the time unit of duration.                                                |

<span id="undefined" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

<span id="undefined" />

`adjoint()`

Return the adjoint of the unitary.

<span id="undefined" />

`assemble()`

Assemble a QasmQobjInstruction

<span id="undefined" />

`broadcast_arguments(qargs, cargs)`

Validation and handling of the arguments and its relationship.

For example, `cx([q[0],q[1]], q[2])` means `cx(q[0], q[2]); cx(q[1], q[2])`. This method yields the arguments in the right grouping. In the given example:

```python
in: [[q[0],q[1]], q[2]],[]
outs: [q[0], q[2]], []
      [q[1], q[2]], []
```

The general broadcasting rules are:

> *   If len(qargs) == 1:
>
>     ```python
>     [q[0], q[1]] -> [q[0]],[q[1]]
>     ```
>
> *   If len(qargs) == 2:
>
>     ```python
>     [[q[0], q[1]], [r[0], r[1]]] -> [q[0], r[0]], [q[1], r[1]]
>     [[q[0]], [r[0], r[1]]]       -> [q[0], r[0]], [q[0], r[1]]
>     [[q[0], q[1]], [r[0]]]       -> [q[0], r[0]], [q[1], r[0]]
>     ```
>
> *   If len(qargs) >= 3:
>
>     ```python
>     [q[0], q[1]], [r[0], r[1]],  ...] -> [q[0], r[0], ...], [q[1], r[1], ...]
>     ```

**Parameters**

*   **qargs** (`List`) – List of quantum bit arguments.
*   **cargs** (`List`) – List of classical bit arguments.

**Return type**

`Tuple`\[`List`, `List`]

**Returns**

A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

<span id="undefined" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

<span id="undefined" />

`conjugate()`

Return the conjugate of the Hamiltonian.

<span id="undefined" />

`control(num_ctrl_qubits=1, label=None, ctrl_state=None)`

Return controlled version of gate. See [`ControlledGate`](qiskit.circuit.ControlledGate#qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate") for usage.

**Parameters**

*   **num\_ctrl\_qubits** (`Optional`\[`int`]) – number of controls to add to gate (default=1)
*   **label** (`Optional`\[`str`]) – optional gate label
*   **ctrl\_state** (`Union`\[`int`, `str`, `None`]) – The control state in decimal or as a bitstring (e.g. ‘111’). If None, use 2\*\*num\_ctrl\_qubits-1.

**Returns**

Controlled version of gate. This default algorithm uses num\_ctrl\_qubits-1 ancillae qubits so returns a gate of size num\_qubits + 2\*num\_ctrl\_qubits - 1.

**Return type**

[qiskit.circuit.ControlledGate](qiskit.circuit.ControlledGate#qiskit.circuit.ControlledGate "qiskit.circuit.ControlledGate")

**Raises**

**QiskitError** – unrecognized mode or invalid ctrl\_state

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

Return the adjoint of the unitary.

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

`power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate#qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

<span id="undefined" />

`qasm()`

Raise an error, as QASM is not defined for the HamiltonianGate.

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

`to_matrix()`

Return a Numpy.array for the gate unitary matrix.

**Returns**

if the Gate subclass has a matrix definition.

**Return type**

np.ndarray

**Raises**

**CircuitError** – If a Gate subclass does not implement this method an exception will be raised when this base class method is called.

<span id="undefined" />

`transpose()`

Return the transpose of the Hamiltonian.

<span id="undefined" />

`property unit`

Get the time unit of duration.

<span id="undefined" />

`validate_parameter(parameter)`

Hamiltonian parameter has to be an ndarray, operator or float.
