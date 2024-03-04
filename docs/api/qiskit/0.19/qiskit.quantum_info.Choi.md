---
title: Choi
description: API reference for qiskit.quantum_info.Choi
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Choi
---

# Choi

<span id="qiskit.quantum_info.Choi" />

`Choi(data, input_dims=None, output_dims=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/quantum_info/operators/channel/choi.py "view source code")

Choi-matrix representation of a Quantum Channel.

The Choi-matrix representation of a quantum channel $\mathcal{E}$ is a matrix

$$
\Lambda = \sum_{i,j} |i\rangle\!\langle j|\otimes
            \mathcal{E}\left(|i\rangle\!\langle j|\right)
$$

Evolution of a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ with respect to the Choi-matrix is given by

$$
\mathcal{E}(\rho) = \mbox{Tr}_{1}\left[\Lambda
                    (\rho^T \otimes \mathbb{I})\right]
$$

where $\mbox{Tr}_1$ is the [`partial_trace()`](qiskit.quantum_info.partial_trace "qiskit.quantum_info.partial_trace") over subsystem 1.

See reference \[1] for further details.

**References**

1.  C.J. Wood, J.D. Biamonte, D.G. Cory, *Tensor networks and graphical calculus for open quantum systems*, Quant. Inf. Comp. 15, 0579-0811 (2015). [arXiv:1111.6950 \[quant-ph\]](https://arxiv.org/abs/1111.6950)

Initialize a quantum channel Choi matrix operator.

**Parameters**

*   **or** (*data (*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – Instruction or BaseOperator or matrix): data to initialize superoperator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as a Choi matrix.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (4\*\*N, 4\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Attributes

### atol

The default absolute tolerance parameter for float comparisons.

### data

Return data.

### dim

Return tuple (input\_shape, output\_shape).

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

### qargs

Return the qargs for the operator.

### rtol

The relative tolerance parameter for float comparisons.

## Methods

### \_\_call\_\_

<span id="qiskit.quantum_info.Choi.__call__" />

`Choi.__call__(qargs)`

Return a clone with qargs set

### \_\_mul\_\_

<span id="qiskit.quantum_info.Choi.__mul__" />

`Choi.__mul__(other)`

### add

<span id="qiskit.quantum_info.Choi.add" />

`Choi.add(other)`

Return the linear operator self + other.

DEPRECATED: use `operator + other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self + other.

**Return type**

BaseOperator

### adjoint

<span id="qiskit.quantum_info.Choi.adjoint" />

`Choi.adjoint()`

Return the adjoint of the operator.

### compose

<span id="qiskit.quantum_info.Choi.compose" />

`Choi.compose(other, qargs=None, front=False)`

Return the composed quantum channel self @ other.

**Parameters**

*   **other** (*QuantumChannel*) – a quantum channel.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The quantum channel self @ other.

**Return type**

[Choi](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

**Raises**

**QiskitError** – if other has incompatible dimensions.

#### Additional Information:

Composition (`@`) is defined as left matrix multiplication for [`SuperOp`](qiskit.quantum_info.SuperOp "qiskit.quantum_info.SuperOp") matrices. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](qiskit.quantum_info.Choi#dot "qiskit.quantum_info.Choi.dot") method.

### conjugate

<span id="qiskit.quantum_info.Choi.conjugate" />

`Choi.conjugate()`

Return the conjugate of the QuantumChannel.

### copy

<span id="qiskit.quantum_info.Choi.copy" />

`Choi.copy()`

Make a deep copy of current operator.

### dot

<span id="qiskit.quantum_info.Choi.dot" />

`Choi.dot(other, qargs=None)`

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

<span id="qiskit.quantum_info.Choi.expand" />

`Choi.expand(other)`

Return the tensor product channel other ⊗ self.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel other ⊗ self as a Choi object.

**Return type**

[Choi](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### input\_dims

<span id="qiskit.quantum_info.Choi.input_dims" />

`Choi.input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_cp

<span id="qiskit.quantum_info.Choi.is_cp" />

`Choi.is_cp(atol=None, rtol=None)`

Test if Choi-matrix is completely-positive (CP)

### is\_cptp

<span id="qiskit.quantum_info.Choi.is_cptp" />

`Choi.is_cptp(atol=None, rtol=None)`

Return True if completely-positive trace-preserving (CPTP).

### is\_tp

<span id="qiskit.quantum_info.Choi.is_tp" />

`Choi.is_tp(atol=None, rtol=None)`

Test if a channel is completely-positive (CP)

### is\_unitary

<span id="qiskit.quantum_info.Choi.is_unitary" />

`Choi.is_unitary(atol=None, rtol=None)`

Return True if QuantumChannel is a unitary channel.

### multiply

<span id="qiskit.quantum_info.Choi.multiply" />

`Choi.multiply(other)`

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

### output\_dims

<span id="qiskit.quantum_info.Choi.output_dims" />

`Choi.output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Choi.power" />

`Choi.power(n)`

The matrix power of the channel.

**Parameters**

**n** (*int*) – compute the matrix power of the superoperator matrix.

**Returns**

the matrix power of the SuperOp converted to a Choi channel.

**Return type**

[Choi](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

**Raises**

**QiskitError** – if the input and output dimensions of the QuantumChannel are not equal, or the power is not an integer.

### reshape

<span id="qiskit.quantum_info.Choi.reshape" />

`Choi.reshape(input_dims=None, output_dims=None)`

Return a shallow copy with reshaped input and output subsystem dimensions.

#### Arg:

#### input\_dims (None or tuple): new subsystem input dimensions.

If None the original input dims will be preserved \[Default: None].

#### output\_dims (None or tuple): new subsystem output dimensions.

If None the original output dims will be preserved \[Default: None].

**Returns**

returns self with reshaped input and output dimensions.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if combined size of all subsystem input dimension or subsystem output dimensions is not constant.

### set\_atol

<span id="qiskit.quantum_info.Choi.set_atol" />

`classmethod Choi.set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

### set\_rtol

<span id="qiskit.quantum_info.Choi.set_rtol" />

`classmethod Choi.set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

### subtract

<span id="qiskit.quantum_info.Choi.subtract" />

`Choi.subtract(other)`

Return the linear operator self - other.

DEPRECATED: use `operator - other` instead.

**Parameters**

**other** (*BaseOperator*) – an operator object.

**Returns**

the operator self - other.

**Return type**

BaseOperator

### tensor

<span id="qiskit.quantum_info.Choi.tensor" />

`Choi.tensor(other)`

Return the tensor product channel self ⊗ other.

**Parameters**

**other** (*QuantumChannel*) – a quantum channel.

**Returns**

the tensor product channel self ⊗ other as a Choi object.

**Return type**

[Choi](qiskit.quantum_info.Choi "qiskit.quantum_info.Choi")

**Raises**

**QiskitError** – if other cannot be converted to a channel.

### to\_instruction

<span id="qiskit.quantum_info.Choi.to_instruction" />

`Choi.to_instruction()`

Convert to a Kraus or UnitaryGate circuit instruction.

If the channel is unitary it will be added as a unitary gate, otherwise it will be added as a kraus simulator instruction.

**Returns**

A kraus instruction for the channel.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**QiskitError** – if input data is not an N-qubit CPTP quantum channel.

### to\_operator

<span id="qiskit.quantum_info.Choi.to_operator" />

`Choi.to_operator()`

Try to convert channel to a unitary representation Operator.

### transpose

<span id="qiskit.quantum_info.Choi.transpose" />

`Choi.transpose()`

Return the transpose of the QuantumChannel.

