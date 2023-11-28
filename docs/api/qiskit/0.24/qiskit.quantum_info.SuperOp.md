<span id="qiskit-quantum-info-superop" />

# qiskit.quantum\_info.SuperOp

<span id="undefined" />

`SuperOp(data, input_dims=None, output_dims=None)`

Superoperator representation of a quantum channel.

The Superoperator representation of a quantum channel $\mathcal{E}$ is a matrix $S$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix#qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle = S |\rho\rangle\!\rangle
$$

where the double-ket notation $|A\rangle\!\rangle$ denotes a vector formed by stacking the columns of the matrix $A$ *(column-vectorization)*.

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Superoperator operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a superoperator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

<span id="undefined" />

`__init__(data, input_dims=None, output_dims=None)`

Initialize a quantum channel Superoperator operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a superoperator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

|                                                                                                                                |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.SuperOp.__init__ "qiskit.quantum_info.SuperOp.__init__")(data\[, input\_dims, output\_dims]) | Initialize a quantum channel Superoperator operator.                       |
| [`add`](#qiskit.quantum_info.SuperOp.add "qiskit.quantum_info.SuperOp.add")(other)                                             | Return the linear operator self + other.                                   |
| [`adjoint`](#qiskit.quantum_info.SuperOp.adjoint "qiskit.quantum_info.SuperOp.adjoint")()                                      | Return the adjoint of the operator.                                        |
| [`compose`](#qiskit.quantum_info.SuperOp.compose "qiskit.quantum_info.SuperOp.compose")(other\[, qargs, front])                | Return the composed quantum channel self @ other.                          |
| [`conjugate`](#qiskit.quantum_info.SuperOp.conjugate "qiskit.quantum_info.SuperOp.conjugate")()                                | Return the conjugate of the QuantumChannel.                                |
| [`copy`](#qiskit.quantum_info.SuperOp.copy "qiskit.quantum_info.SuperOp.copy")()                                               | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.SuperOp.dot "qiskit.quantum_info.SuperOp.dot")(other\[, qargs])                                   | Return the right multiplied operator self \* other.                        |
| [`expand`](#qiskit.quantum_info.SuperOp.expand "qiskit.quantum_info.SuperOp.expand")(other)                                    | Return the tensor product channel other ⊗ self.                            |
| [`input_dims`](#qiskit.quantum_info.SuperOp.input_dims "qiskit.quantum_info.SuperOp.input_dims")(\[qargs])                     | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](#qiskit.quantum_info.SuperOp.is_cp "qiskit.quantum_info.SuperOp.is_cp")(\[atol, rtol])                               | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](#qiskit.quantum_info.SuperOp.is_cptp "qiskit.quantum_info.SuperOp.is_cptp")(\[atol, rtol])                         | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](#qiskit.quantum_info.SuperOp.is_tp "qiskit.quantum_info.SuperOp.is_tp")(\[atol, rtol])                               | Test if a channel is completely-positive (CP)                              |
| [`is_unitary`](#qiskit.quantum_info.SuperOp.is_unitary "qiskit.quantum_info.SuperOp.is_unitary")(\[atol, rtol])                | Return True if QuantumChannel is a unitary channel.                        |
| [`multiply`](#qiskit.quantum_info.SuperOp.multiply "qiskit.quantum_info.SuperOp.multiply")(other)                              | Return the linear operator other \* self.                                  |
| [`output_dims`](#qiskit.quantum_info.SuperOp.output_dims "qiskit.quantum_info.SuperOp.output_dims")(\[qargs])                  | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.SuperOp.power "qiskit.quantum_info.SuperOp.power")(n)                                           | Return the compose of a QuantumChannel with itself n times.                |
| [`reshape`](#qiskit.quantum_info.SuperOp.reshape "qiskit.quantum_info.SuperOp.reshape")(\[input\_dims, output\_dims])          | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](#qiskit.quantum_info.SuperOp.set_atol "qiskit.quantum_info.SuperOp.set_atol")(value)                              | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](#qiskit.quantum_info.SuperOp.set_rtol "qiskit.quantum_info.SuperOp.set_rtol")(value)                              | Set the class default relative tolerance parameter for float comparisons.  |
| [`subtract`](#qiskit.quantum_info.SuperOp.subtract "qiskit.quantum_info.SuperOp.subtract")(other)                              | Return the linear operator self - other.                                   |
| [`tensor`](#qiskit.quantum_info.SuperOp.tensor "qiskit.quantum_info.SuperOp.tensor")(other)                                    | Return the tensor product channel self ⊗ other.                            |
| [`to_instruction`](#qiskit.quantum_info.SuperOp.to_instruction "qiskit.quantum_info.SuperOp.to_instruction")()                 | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](#qiskit.quantum_info.SuperOp.to_operator "qiskit.quantum_info.SuperOp.to_operator")()                          | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](#qiskit.quantum_info.SuperOp.transpose "qiskit.quantum_info.SuperOp.transpose")()                                | Return the transpose of the QuantumChannel.                                |

## Attributes

|                                                                                                  |                                                                      |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.SuperOp.atol "qiskit.quantum_info.SuperOp.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`data`](#qiskit.quantum_info.SuperOp.data "qiskit.quantum_info.SuperOp.data")                   | Return data.                                                         |
| [`dim`](#qiskit.quantum_info.SuperOp.dim "qiskit.quantum_info.SuperOp.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.SuperOp.num_qubits "qiskit.quantum_info.SuperOp.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.SuperOp.qargs "qiskit.quantum_info.SuperOp.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.SuperOp.rtol "qiskit.quantum_info.SuperOp.rtol")                   | The relative tolerance parameter for float comparisons.              |

<span id="undefined" />

`add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

<span id="undefined" />

`adjoint()`

Return the adjoint of the operator.

<span id="undefined" />

`property atol`

The default absolute tolerance parameter for float comparisons.

<span id="undefined" />

`compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[SuperOp](#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if other has incompatible dimensions.

**Additional Information:**

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](#qiskit.quantum_info.SuperOp.dot "qiskit.quantum_info.SuperOp.dot") method.

<span id="undefined" />

`conjugate()`

Return the conjugate of the QuantumChannel.

<span id="undefined" />

`copy()`

Make a deep copy of current operator.

<span id="undefined" />

`property data`

Return data.

<span id="undefined" />

`property dim`

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

`dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** (*BaseOperator*) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if other cannot be converted to an operator, or has incompatible dimensions for specified subsystems.

<span id="undefined" />

`expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a SuperOp object.

**Return type**

[SuperOp](#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

<span id="undefined" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

<span id="undefined" />

`is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

<span id="undefined" />

`is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving (CPTP).

<span id="undefined" />

`is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

<span id="undefined" />

`is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

<span id="undefined" />

`multiply(other)`

Return the linear operator other \* self.

DEPRECATED: use `other * operator` instead.

**Parameters**

**other** (*complex*) – a complex number.

**Returns**

the linear operator other \* self.

**Return type**

BaseOperator

**Raises**

**NotImplementedError** – if subclass does not support multiplication.

<span id="undefined" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

<span id="undefined" />

`power(n)`

Return the compose of a QuantumChannel with itself n times.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the n-times composition channel as a SuperOp object.

**Return type**

[SuperOp](#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

<span id="undefined" />

`property qargs`

Return the qargs for the operator.

<span id="undefined" />

`reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

**Arg:**

**input\_dims (None or tuple): new subsystem input dimensions.**

If None the original input dims will be preserved \[Default: None].

**output\_dims (None or tuple): new subsystem output dimensions.**

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

<span id="undefined" />

`property rtol`

The relative tolerance parameter for float comparisons.

<span id="undefined" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

<span id="undefined" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

<span id="undefined" />

`subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

<span id="undefined" />

`tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel self ⊗ other as a SuperOp object.

**Return type**

[SuperOp](#qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

<span id="undefined" />

`to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

<span id="undefined" />

`to_operator()`

Try to convert channel to a unitary representation Operator.

<span id="undefined" />

`transpose()`

Return the transpose of the QuantumChannel.
