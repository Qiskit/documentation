---
title: PTM
description: API reference for qiskit.quantum_info.PTM
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.PTM
---

<span id="qiskit-quantum-info-ptm" />

# qiskit.quantum\_info.PTM

<span id="qiskit.quantum_info.PTM" />

`PTM(data, input_dims=None, output_dims=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/quantum_info/operators/channel/ptm.py "view source code")

Pauli Transfer Matrix (PTM) representation of a Quantum Channel.

The PTM representation of an $n$-qubit quantum channel $\mathcal{E}$ is an $n$-qubit [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") $R$ defined with respect to vectorization in the Pauli basis instead of column-vectorization. The elements of the PTM $R$ are given by

$$
R_{i,j} = \mbox{Tr}\left[P_i \mathcal{E}(P_j) \right]
$$

where $[P_0, P_1, ..., P_{4^{n}-1}]$ is the $n$-qubit Pauli basis in lexicographic order.

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the PTM is given by

$$
|\mathcal{E}(\rho)\rangle\!\rangle_P = S_P |\rho\rangle\!\rangle_P
$$

where $|A\rangle\!\rangle_P$ denotes vectorization in the Pauli basis $\langle i | A\rangle\!\rangle_P = \mbox{Tr}[P_i A]$.

See reference \[1] for further details.

**References**

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a PTM quantum channel operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a PTM.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The PTM representation is only valid for N-qubit channels.

### \_\_init\_\_

<span id="qiskit.quantum_info.PTM.__init__" />

`__init__(data, input_dims=None, output_dims=None)`

Initialize a PTM quantum channel operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data is not an N-qubit channel or cannot be initialized as a PTM.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. The PTM representation is only valid for N-qubit channels.

## Methods

|                                                                                                                        |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.PTM.__init__ "qiskit.quantum_info.PTM.__init__")(data\[, input\_dims, output\_dims]) | Initialize a PTM quantum channel operator.                                 |
| [`add`](#qiskit.quantum_info.PTM.add "qiskit.quantum_info.PTM.add")(other)                                             | Return the linear operator self + other.                                   |
| [`adjoint`](#qiskit.quantum_info.PTM.adjoint "qiskit.quantum_info.PTM.adjoint")()                                      | Return the adjoint of the operator.                                        |
| [`compose`](#qiskit.quantum_info.PTM.compose "qiskit.quantum_info.PTM.compose")(other\[, qargs, front])                | Return the composed quantum channel self @ other.                          |
| [`conjugate`](#qiskit.quantum_info.PTM.conjugate "qiskit.quantum_info.PTM.conjugate")()                                | Return the conjugate of the QuantumChannel.                                |
| [`copy`](#qiskit.quantum_info.PTM.copy "qiskit.quantum_info.PTM.copy")()                                               | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.PTM.dot "qiskit.quantum_info.PTM.dot")(other\[, qargs])                                   | Return the right multiplied operator self \* other.                        |
| [`expand`](#qiskit.quantum_info.PTM.expand "qiskit.quantum_info.PTM.expand")(other)                                    | Return the tensor product channel other ⊗ self.                            |
| [`input_dims`](#qiskit.quantum_info.PTM.input_dims "qiskit.quantum_info.PTM.input_dims")(\[qargs])                     | Return tuple of input dimension for specified subsystems.                  |
| [`is_cp`](#qiskit.quantum_info.PTM.is_cp "qiskit.quantum_info.PTM.is_cp")(\[atol, rtol])                               | Test if Choi-matrix is completely-positive (CP)                            |
| [`is_cptp`](#qiskit.quantum_info.PTM.is_cptp "qiskit.quantum_info.PTM.is_cptp")(\[atol, rtol])                         | Return True if completely-positive trace-preserving (CPTP).                |
| [`is_tp`](#qiskit.quantum_info.PTM.is_tp "qiskit.quantum_info.PTM.is_tp")(\[atol, rtol])                               | Test if a channel is completely-positive (CP)                              |
| [`is_unitary`](#qiskit.quantum_info.PTM.is_unitary "qiskit.quantum_info.PTM.is_unitary")(\[atol, rtol])                | Return True if QuantumChannel is a unitary channel.                        |
| [`multiply`](#qiskit.quantum_info.PTM.multiply "qiskit.quantum_info.PTM.multiply")(other)                              | Return the linear operator other \* self.                                  |
| [`output_dims`](#qiskit.quantum_info.PTM.output_dims "qiskit.quantum_info.PTM.output_dims")(\[qargs])                  | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.PTM.power "qiskit.quantum_info.PTM.power")(n)                                           | The matrix power of the channel.                                           |
| [`reshape`](#qiskit.quantum_info.PTM.reshape "qiskit.quantum_info.PTM.reshape")(\[input\_dims, output\_dims])          | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](#qiskit.quantum_info.PTM.set_atol "qiskit.quantum_info.PTM.set_atol")(value)                              | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](#qiskit.quantum_info.PTM.set_rtol "qiskit.quantum_info.PTM.set_rtol")(value)                              | Set the class default relative tolerance parameter for float comparisons.  |
| [`subtract`](#qiskit.quantum_info.PTM.subtract "qiskit.quantum_info.PTM.subtract")(other)                              | Return the linear operator self - other.                                   |
| [`tensor`](#qiskit.quantum_info.PTM.tensor "qiskit.quantum_info.PTM.tensor")(other)                                    | Return the tensor product channel self ⊗ other.                            |
| [`to_instruction`](#qiskit.quantum_info.PTM.to_instruction "qiskit.quantum_info.PTM.to_instruction")()                 | Convert to a Kraus or UnitaryGate circuit instruction.                     |
| [`to_operator`](#qiskit.quantum_info.PTM.to_operator "qiskit.quantum_info.PTM.to_operator")()                          | Try to convert channel to a unitary representation Operator.               |
| [`transpose`](#qiskit.quantum_info.PTM.transpose "qiskit.quantum_info.PTM.transpose")()                                | Return the transpose of the QuantumChannel.                                |

## Attributes

|                                                                                          |                                                                      |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.PTM.atol "qiskit.quantum_info.PTM.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`data`](#qiskit.quantum_info.PTM.data "qiskit.quantum_info.PTM.data")                   | Return data.                                                         |
| [`dim`](#qiskit.quantum_info.PTM.dim "qiskit.quantum_info.PTM.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.PTM.num_qubits "qiskit.quantum_info.PTM.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.PTM.qargs "qiskit.quantum_info.PTM.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.PTM.rtol "qiskit.quantum_info.PTM.rtol")                   | The relative tolerance parameter for float comparisons.              |

### add

<span id="qiskit.quantum_info.PTM.add" />

`add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

### adjoint

<span id="qiskit.quantum_info.PTM.adjoint" />

`adjoint()`

Return the adjoint of the operator.

### atol

<span id="qiskit.quantum_info.PTM.atol" />

`property atol`

The default absolute tolerance parameter for float comparisons.

### compose

<span id="qiskit.quantum_info.PTM.compose" />

`compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[PTM](#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other has incompatible dimensions.

**Additional Information:**

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](#qiskit.quantum_info.PTM.dot "qiskit.quantum_info.PTM.dot") method.

### conjugate

<span id="qiskit.quantum_info.PTM.conjugate" />

`conjugate()`

Return the conjugate of the QuantumChannel.

### copy

<span id="qiskit.quantum_info.PTM.copy" />

`copy()`

Make a deep copy of current operator.

### data

<span id="qiskit.quantum_info.PTM.data" />

`property data`

Return data.

### dim

<span id="qiskit.quantum_info.PTM.dim" />

`property dim`

Return tuple (input\_shape, output\_shape).

### dot

<span id="qiskit.quantum_info.PTM.dot" />

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

### expand

<span id="qiskit.quantum_info.PTM.expand" />

`expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a PTM object.

**Return type**

[PTM](#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### input\_dims

<span id="qiskit.quantum_info.PTM.input_dims" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_cp

<span id="qiskit.quantum_info.PTM.is_cp" />

`is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

### is\_cptp

<span id="qiskit.quantum_info.PTM.is_cptp" />

`is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving (CPTP).

### is\_tp

<span id="qiskit.quantum_info.PTM.is_tp" />

`is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

### is\_unitary

<span id="qiskit.quantum_info.PTM.is_unitary" />

`is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### multiply

<span id="qiskit.quantum_info.PTM.multiply" />

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

### num\_qubits

<span id="qiskit.quantum_info.PTM.num_qubits" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

### output\_dims

<span id="qiskit.quantum_info.PTM.output_dims" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.PTM.power" />

`power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a PTM channel.

**Return type**

[PTM](#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

### qargs

<span id="qiskit.quantum_info.PTM.qargs" />

`property qargs`

Return the qargs for the operator.

### reshape

<span id="qiskit.quantum_info.PTM.reshape" />

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

### rtol

<span id="qiskit.quantum_info.PTM.rtol" />

`property rtol`

The relative tolerance parameter for float comparisons.

### set\_atol

<span id="qiskit.quantum_info.PTM.set_atol" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

### set\_rtol

<span id="qiskit.quantum_info.PTM.set_rtol" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

### subtract

<span id="qiskit.quantum_info.PTM.subtract" />

`subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

### tensor

<span id="qiskit.quantum_info.PTM.tensor" />

`tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel self ⊗ other as a PTM object.

**Return type**

[PTM](#qiskit.quantum_info.PTM "qiskit.quantum_info.PTM")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### to\_instruction

<span id="qiskit.quantum_info.PTM.to_instruction" />

`to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

### to\_operator

<span id="qiskit.quantum_info.PTM.to_operator" />

`to_operator()`

Try to convert channel to a unitary representation Operator.

### transpose

<span id="qiskit.quantum_info.PTM.transpose" />

`transpose()`

Return the transpose of the QuantumChannel.

