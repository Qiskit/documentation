---
title: Kraus
description: API reference for qiskit.quantum_info.Kraus
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Kraus
---

<span id="qiskit-quantum-info-kraus" />

# qiskit.quantum\_info.Kraus

<span id="qiskit.quantum_info.Kraus" />

`Kraus(data, input_dims=None, output_dims=None)`

Kraus representation of a quantum channel.

The Kraus representation for a quantum channel $\mathcal{E}$ is a set of matrices $[A_0,...,A_{K-1}]$ such that

For a quantum channel $\mathcal{E}$, the Kraus representation is given by a set of matrices $[A_0,...,A_{K-1}]$ such that the evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ is given by

$$
\mathcal{E}(\rho) = \sum_{i=0}^{K-1} A_i \rho A_i^\dagger
$$

A general operator map $\mathcal{G}$ can also be written using the generalized Kraus representation which is given by two sets of matrices $[A_0,...,A_{K-1}]$, $[B_0,...,A_{B-1}]$ such that

$$
\mathcal{G}(\rho) = \sum_{i=0}^{K-1} A_i \rho B_i^\dagger
$$

See reference \[1] for further details.

## References

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Kraus operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a list of Numpy arrays of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input does not correspond to an N-qubit channel, it will assign a single subsystem with dimension specified by the shape of the input.

### \_\_init\_\_

<span id="qiskit.quantum_info.Kraus.__init__" />

`__init__(data, input_dims=None, output_dims=None)`

Initialize a quantum channel Kraus operator.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a a list of Kraus matrices.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a list of Numpy arrays of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input does not correspond to an N-qubit channel, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

## Attributes

### add

<span id="qiskit.quantum_info.Kraus.add" />

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

<span id="qiskit.quantum_info.Kraus.adjoint" />

`adjoint()`

Return the adjoint of the operator.

### atol

<span id="qiskit.quantum_info.Kraus.atol" />

`property atol`

The default absolute tolerance parameter for float comparisons.

### compose

<span id="qiskit.quantum_info.Kraus.compose" />

`compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[Kraus](#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a Kraus or has incompatible dimensions.

**Additional Information:**

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](#qiskit.quantum_info.Kraus.dot "qiskit.quantum_info.Kraus.dot") method.

### conjugate

<span id="qiskit.quantum_info.Kraus.conjugate" />

`conjugate()`

Return the conjugate of the QuantumChannel.

### copy

<span id="qiskit.quantum_info.Kraus.copy" />

`copy()`

Make a deep copy of current operator.

### data

<span id="qiskit.quantum_info.Kraus.data" />

`property data`

Return list of Kraus matrices for channel.

### dim

<span id="qiskit.quantum_info.Kraus.dim" />

`property dim`

Return tuple (input\_shape, output\_shape).

### dot

<span id="qiskit.quantum_info.Kraus.dot" />

`dot(other, qargs=None)`

Return the right multiplied quantum channel self \* other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The quantum channel self \* other.

**Return type**

[Kraus](#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a Kraus or has incompatible dimensions.

### expand

<span id="qiskit.quantum_info.Kraus.expand" />

`expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel other ⊗ self as a Kraus object.

**Return type**

[Kraus](#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### input\_dims

<span id="qiskit.quantum_info.Kraus.input_dims" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_cp

<span id="qiskit.quantum_info.Kraus.is_cp" />

`is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

### is\_cptp

<span id="qiskit.quantum_info.Kraus.is_cptp" />

`is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving.

### is\_tp

<span id="qiskit.quantum_info.Kraus.is_tp" />

`is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

### is\_unitary

<span id="qiskit.quantum_info.Kraus.is_unitary" />

`is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### multiply

<span id="qiskit.quantum_info.Kraus.multiply" />

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

<span id="qiskit.quantum_info.Kraus.num_qubits" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

### output\_dims

<span id="qiskit.quantum_info.Kraus.output_dims" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Kraus.power" />

`power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a Kraus channel.

**Return type**

[Kraus](#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

### qargs

<span id="qiskit.quantum_info.Kraus.qargs" />

`property qargs`

Return the qargs for the operator.

### reshape

<span id="qiskit.quantum_info.Kraus.reshape" />

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

<span id="qiskit.quantum_info.Kraus.rtol" />

`property rtol`

The relative tolerance parameter for float comparisons.

### set\_atol

<span id="qiskit.quantum_info.Kraus.set_atol" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

### set\_rtol

<span id="qiskit.quantum_info.Kraus.set_rtol" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

### subtract

<span id="qiskit.quantum_info.Kraus.subtract" />

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

<span id="qiskit.quantum_info.Kraus.tensor" />

`tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel subclass.

**Returns**

the tensor product channel self ⊗ other as a Kraus object.

**Return type**

[Kraus](#qiskit.quantum_info.Kraus "qiskit.quantum_info.Kraus")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### to\_instruction

<span id="qiskit.quantum_info.Kraus.to_instruction" />

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

<span id="qiskit.quantum_info.Kraus.to_operator" />

`to_operator()`

Try to convert channel to a unitary representation Operator.

### transpose

<span id="qiskit.quantum_info.Kraus.transpose" />

`transpose()`

Return the transpose of the QuantumChannel.

