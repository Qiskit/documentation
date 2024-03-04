---
title: Operator
description: API reference for qiskit.quantum_info.Operator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Operator
---

<span id="qiskit-quantum-info-operator" />

# qiskit.quantum\_info.Operator

<span id="qiskit.quantum_info.Operator" />

`Operator(data, input_dims=None, output_dims=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/quantum_info/operators/operator.py "view source code")

Matrix operator class

This represents a matrix operator $M$ that will [`evolve()`](qiskit.quantum_info.Statevector#evolve "qiskit.quantum_info.Statevector.evolve") a [`Statevector`](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector") $|\psi\rangle$ by matrix-vector multiplication

$$
|\psi\rangle \mapsto M|\psi\rangle,
$$

and will [`evolve()`](qiskit.quantum_info.DensityMatrix#evolve "qiskit.quantum_info.DensityMatrix.evolve") a [`DensityMatrix`](qiskit.quantum_info.DensityMatrix "qiskit.quantum_info.DensityMatrix") $\rho$ by left and right multiplication

$$
\rho \mapsto M \rho M^\dagger.
$$

Initialize an operator object.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize operator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as an operator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

### \_\_init\_\_

<span id="qiskit.quantum_info.Operator.__init__" />

`__init__(data, input_dims=None, output_dims=None)`

Initialize an operator object.

**Parameters**

*   \*\*(\*\***QuantumCircuit or** (*data*) – Instruction or BaseOperator or matrix): data to initialize operator.
*   **input\_dims** (*tuple*) – the input subsystem dimensions. \[Default: None]
*   **output\_dims** (*tuple*) – the output subsystem dimensions. \[Default: None]

**Raises**

**QiskitError** – if input data cannot be initialized as an operator.

**Additional Information:**

If the input or output dimensions are None, they will be automatically determined from the input data. If the input data is a Numpy array of shape (2\*\*N, 2\*\*N) qubit systems will be used. If the input operator is not an N-qubit operator, it will assign a single subsystem with dimension specified by the shape of the input.

## Methods

|                                                                                                                                  |                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.quantum_info.Operator.__init__ "qiskit.quantum_info.Operator.__init__")(data\[, input\_dims, output\_dims]) | Initialize an operator object.                                             |
| [`add`](#qiskit.quantum_info.Operator.add "qiskit.quantum_info.Operator.add")(other)                                             | Return the linear operator self + other.                                   |
| [`adjoint`](#qiskit.quantum_info.Operator.adjoint "qiskit.quantum_info.Operator.adjoint")()                                      | Return the adjoint of the operator.                                        |
| [`compose`](#qiskit.quantum_info.Operator.compose "qiskit.quantum_info.Operator.compose")(other\[, qargs, front])                | Return the composed operator.                                              |
| [`conjugate`](#qiskit.quantum_info.Operator.conjugate "qiskit.quantum_info.Operator.conjugate")()                                | Return the conjugate of the operator.                                      |
| [`copy`](#qiskit.quantum_info.Operator.copy "qiskit.quantum_info.Operator.copy")()                                               | Make a deep copy of current operator.                                      |
| [`dot`](#qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot")(other\[, qargs])                                   | Return the right multiplied operator self \* other.                        |
| [`equiv`](#qiskit.quantum_info.Operator.equiv "qiskit.quantum_info.Operator.equiv")(other\[, rtol, atol])                        | Return True if operators are equivalent up to global phase.                |
| [`expand`](#qiskit.quantum_info.Operator.expand "qiskit.quantum_info.Operator.expand")(other)                                    | Return the tensor product operator other ⊗ self.                           |
| [`from_label`](#qiskit.quantum_info.Operator.from_label "qiskit.quantum_info.Operator.from_label")(label)                        | Return a tensor product of single-qubit operators.                         |
| [`input_dims`](#qiskit.quantum_info.Operator.input_dims "qiskit.quantum_info.Operator.input_dims")(\[qargs])                     | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](#qiskit.quantum_info.Operator.is_unitary "qiskit.quantum_info.Operator.is_unitary")(\[atol, rtol])                | Return True if operator is a unitary matrix.                               |
| [`multiply`](#qiskit.quantum_info.Operator.multiply "qiskit.quantum_info.Operator.multiply")(other)                              | Return the linear operator other \* self.                                  |
| [`output_dims`](#qiskit.quantum_info.Operator.output_dims "qiskit.quantum_info.Operator.output_dims")(\[qargs])                  | Return tuple of output dimension for specified subsystems.                 |
| [`power`](#qiskit.quantum_info.Operator.power "qiskit.quantum_info.Operator.power")(n)                                           | Return the matrix power of the operator.                                   |
| [`reshape`](#qiskit.quantum_info.Operator.reshape "qiskit.quantum_info.Operator.reshape")(\[input\_dims, output\_dims])          | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`set_atol`](#qiskit.quantum_info.Operator.set_atol "qiskit.quantum_info.Operator.set_atol")(value)                              | Set the class default absolute tolerance parameter for float comparisons.  |
| [`set_rtol`](#qiskit.quantum_info.Operator.set_rtol "qiskit.quantum_info.Operator.set_rtol")(value)                              | Set the class default relative tolerance parameter for float comparisons.  |
| [`subtract`](#qiskit.quantum_info.Operator.subtract "qiskit.quantum_info.Operator.subtract")(other)                              | Return the linear operator self - other.                                   |
| [`tensor`](#qiskit.quantum_info.Operator.tensor "qiskit.quantum_info.Operator.tensor")(other)                                    | Return the tensor product operator self ⊗ other.                           |
| [`to_instruction`](#qiskit.quantum_info.Operator.to_instruction "qiskit.quantum_info.Operator.to_instruction")()                 | Convert to a UnitaryGate instruction.                                      |
| [`to_operator`](#qiskit.quantum_info.Operator.to_operator "qiskit.quantum_info.Operator.to_operator")()                          | Convert operator to matrix operator class                                  |
| [`transpose`](#qiskit.quantum_info.Operator.transpose "qiskit.quantum_info.Operator.transpose")()                                | Return the transpose of the operator.                                      |

## Attributes

|                                                                                                    |                                                                      |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`atol`](#qiskit.quantum_info.Operator.atol "qiskit.quantum_info.Operator.atol")                   | The default absolute tolerance parameter for float comparisons.      |
| [`data`](#qiskit.quantum_info.Operator.data "qiskit.quantum_info.Operator.data")                   | Return data.                                                         |
| [`dim`](#qiskit.quantum_info.Operator.dim "qiskit.quantum_info.Operator.dim")                      | Return tuple (input\_shape, output\_shape).                          |
| [`num_qubits`](#qiskit.quantum_info.Operator.num_qubits "qiskit.quantum_info.Operator.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`qargs`](#qiskit.quantum_info.Operator.qargs "qiskit.quantum_info.Operator.qargs")                | Return the qargs for the operator.                                   |
| [`rtol`](#qiskit.quantum_info.Operator.rtol "qiskit.quantum_info.Operator.rtol")                   | The relative tolerance parameter for float comparisons.              |

### add

<span id="qiskit.quantum_info.Operator.add" />

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

<span id="qiskit.quantum_info.Operator.adjoint" />

`adjoint()`

Return the adjoint of the operator.

### atol

<span id="qiskit.quantum_info.Operator.atol" />

`property atol`

The default absolute tolerance parameter for float comparisons.

### compose

<span id="qiskit.quantum_info.Operator.compose" />

`compose(other, qargs=None, front=False)`

Return the composed operator.

**Parameters**

*   **other** ([*Operator*](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].
*   **front** (*bool*) – If True compose using right operator multiplication, instead of left multiplication \[default: False].

**Returns**

The operator self @ other.

**Return type**

[Operator](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if operators have incompatible dimensions for composition.

**Additional Information:**

Composition (`@`) is defined as left matrix multiplication for matrix operators. That is that `A @ B` is equal to `B * A`. Setting `front=True` returns right matrix multiplication `A * B` and is equivalent to the [`dot()`](#qiskit.quantum_info.Operator.dot "qiskit.quantum_info.Operator.dot") method.

### conjugate

<span id="qiskit.quantum_info.Operator.conjugate" />

`conjugate()`

Return the conjugate of the operator.

### copy

<span id="qiskit.quantum_info.Operator.copy" />

`copy()`

Make a deep copy of current operator.

### data

<span id="qiskit.quantum_info.Operator.data" />

`property data`

Return data.

### dim

<span id="qiskit.quantum_info.Operator.dim" />

`property dim`

Return tuple (input\_shape, output\_shape).

### dot

<span id="qiskit.quantum_info.Operator.dot" />

`dot(other, qargs=None)`

Return the right multiplied operator self \* other.

**Parameters**

*   **other** ([*Operator*](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **qargs** (*list or None*) – a list of subsystem positions to apply other on. If None apply on all subsystems \[default: None].

**Returns**

The operator self \* other.

**Return type**

[Operator](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an Operator or has incompatible dimensions.

### equiv

<span id="qiskit.quantum_info.Operator.equiv" />

`equiv(other, rtol=None, atol=None)`

Return True if operators are equivalent up to global phase.

**Parameters**

*   **other** ([*Operator*](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.
*   **rtol** (*float*) – relative tolerance value for comparison.
*   **atol** (*float*) – absolute tolerance value for comparison.

**Returns**

True if operators are equivalent up to global phase.

**Return type**

bool

### expand

<span id="qiskit.quantum_info.Operator.expand" />

`expand(other)`

Return the tensor product operator other ⊗ self.

**Parameters**

**other** ([*Operator*](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – an operator object.

**Returns**

the tensor product operator other ⊗ self.

**Return type**

[Operator](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an operator.

### from\_label

<span id="qiskit.quantum_info.Operator.from_label" />

`classmethod from_label(label)`

Return a tensor product of single-qubit operators.

**Parameters**

**label** (*string*) – single-qubit operator string.

**Returns**

The N-qubit operator.

**Return type**

[Operator](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if the label contains invalid characters, or the length of the label is larger than an explicitly specified num\_qubits.

**Additional Information:**

The labels correspond to the single-qubit matrices: ‘I’: \[\[1, 0], \[0, 1]] ‘X’: \[\[0, 1], \[1, 0]] ‘Y’: \[\[0, -1j], \[1j, 0]] ‘Z’: \[\[1, 0], \[0, -1]] ‘H’: \[\[1, 1], \[1, -1]] / sqrt(2) ‘S’: \[\[1, 0], \[0 , 1j]] ‘T’: \[\[1, 0], \[0, (1+1j) / sqrt(2)]] ‘0’: \[\[1, 0], \[0, 0]] ‘1’: \[\[0, 0], \[0, 1]] ‘+’: \[\[0.5, 0.5], \[0.5 , 0.5]] ‘-’: \[\[0.5, -0.5], \[-0.5 , 0.5]] ‘r’: \[\[0.5, -0.5j], \[0.5j , 0.5]] ‘l’: \[\[0.5, 0.5j], \[-0.5j , 0.5]]

### input\_dims

<span id="qiskit.quantum_info.Operator.input_dims" />

`input_dims(qargs=None)`

Return tuple of input dimension for specified subsystems.

### is\_unitary

<span id="qiskit.quantum_info.Operator.is_unitary" />

`is_unitary(atol=None, rtol=None)`

Return True if operator is a unitary matrix.

### multiply

<span id="qiskit.quantum_info.Operator.multiply" />

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

<span id="qiskit.quantum_info.Operator.num_qubits" />

`property num_qubits`

Return the number of qubits if a N-qubit operator or None otherwise.

### output\_dims

<span id="qiskit.quantum_info.Operator.output_dims" />

`output_dims(qargs=None)`

Return tuple of output dimension for specified subsystems.

### power

<span id="qiskit.quantum_info.Operator.power" />

`power(n)`

Return the matrix power of the operator.

**Parameters**

**n** (*int*) – the power to raise the matrix to.

**Returns**

the n-times composed operator.

**Return type**

BaseOperator

**Raises**

**QiskitError** – if the input and output dimensions of the operator are not equal, or the power is not a positive integer.

### qargs

<span id="qiskit.quantum_info.Operator.qargs" />

`property qargs`

Return the qargs for the operator.

### reshape

<span id="qiskit.quantum_info.Operator.reshape" />

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

<span id="qiskit.quantum_info.Operator.rtol" />

`property rtol`

The relative tolerance parameter for float comparisons.

### set\_atol

<span id="qiskit.quantum_info.Operator.set_atol" />

`classmethod set_atol(value)`

Set the class default absolute tolerance parameter for float comparisons.

DEPRECATED: use operator.atol = value instead

### set\_rtol

<span id="qiskit.quantum_info.Operator.set_rtol" />

`classmethod set_rtol(value)`

Set the class default relative tolerance parameter for float comparisons.

DEPRECATED: use operator.rtol = value instead

### subtract

<span id="qiskit.quantum_info.Operator.subtract" />

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

<span id="qiskit.quantum_info.Operator.tensor" />

`tensor(other)`

Return the tensor product operator self ⊗ other.

**Parameters**

**other** ([*Operator*](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a operator subclass object.

**Returns**

the tensor product operator self ⊗ other.

**Return type**

[Operator](#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")

**Raises**

**QiskitError** – if other cannot be converted to an operator.

### to\_instruction

<span id="qiskit.quantum_info.Operator.to_instruction" />

`to_instruction()`

Convert to a UnitaryGate instruction.

### to\_operator

<span id="qiskit.quantum_info.Operator.to_operator" />

`to_operator()`

Convert operator to matrix operator class

### transpose

<span id="qiskit.quantum_info.Operator.transpose" />

`transpose()`

Return the transpose of the operator.

