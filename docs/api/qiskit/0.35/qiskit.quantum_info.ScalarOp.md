# ScalarOp[¶](#scalarop "Permalink to this headline")

<span id="undefined" />

`ScalarOp(dims=None, coeff=1)`

Bases: `qiskit.quantum_info.operators.linear_op.LinearOp`

Scalar identity operator class.

This is a symbolic representation of an scalar identity operator on multiple subsystems. It may be used to initialize a symbolic scalar multiplication of an identity and then be implicitly converted to other kinds of operator subclasses by using the [`compose()`](qiskit.quantum_info.ScalarOp.compose#qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose"), [`dot()`](qiskit.quantum_info.ScalarOp.dot#qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot"), [`tensor()`](qiskit.quantum_info.ScalarOp.tensor#qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor"), [`expand()`](qiskit.quantum_info.ScalarOp.expand#qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand") methods.

Initialize an operator object.

**Parameters**

*   **dims** (*int or tuple*) – subsystem dimensions.
*   **coeff** (*Number*) – scalar coefficient for the identity operator (Default: 1).

**Raises**

**QiskitError** – If the optional coefficient is invalid.

## Methods

|                                                                                                                                               |                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.ScalarOp.adjoint#qiskit.quantum_info.ScalarOp.adjoint "qiskit.quantum_info.ScalarOp.adjoint")                 | Return the adjoint of the Operator.                                        |
| [`compose`](qiskit.quantum_info.ScalarOp.compose#qiskit.quantum_info.ScalarOp.compose "qiskit.quantum_info.ScalarOp.compose")                 | Return the operator composition with another ScalarOp.                     |
| [`conjugate`](qiskit.quantum_info.ScalarOp.conjugate#qiskit.quantum_info.ScalarOp.conjugate "qiskit.quantum_info.ScalarOp.conjugate")         | Return the conjugate of the ScalarOp.                                      |
| [`copy`](qiskit.quantum_info.ScalarOp.copy#qiskit.quantum_info.ScalarOp.copy "qiskit.quantum_info.ScalarOp.copy")                             | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.ScalarOp.dot#qiskit.quantum_info.ScalarOp.dot "qiskit.quantum_info.ScalarOp.dot")                                 | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.ScalarOp.expand#qiskit.quantum_info.ScalarOp.expand "qiskit.quantum_info.ScalarOp.expand")                     | Return the reverse-order tensor product with another ScalarOp.             |
| [`input_dims`](qiskit.quantum_info.ScalarOp.input_dims#qiskit.quantum_info.ScalarOp.input_dims "qiskit.quantum_info.ScalarOp.input_dims")     | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](qiskit.quantum_info.ScalarOp.is_unitary#qiskit.quantum_info.ScalarOp.is_unitary "qiskit.quantum_info.ScalarOp.is_unitary")     | Return True if operator is a unitary matrix.                               |
| [`output_dims`](qiskit.quantum_info.ScalarOp.output_dims#qiskit.quantum_info.ScalarOp.output_dims "qiskit.quantum_info.ScalarOp.output_dims") | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.ScalarOp.power#qiskit.quantum_info.ScalarOp.power "qiskit.quantum_info.ScalarOp.power")                         | Return the power of the ScalarOp.                                          |
| [`reshape`](qiskit.quantum_info.ScalarOp.reshape#qiskit.quantum_info.ScalarOp.reshape "qiskit.quantum_info.ScalarOp.reshape")                 | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.ScalarOp.tensor#qiskit.quantum_info.ScalarOp.tensor "qiskit.quantum_info.ScalarOp.tensor")                     | Return the tensor product with another ScalarOp.                           |
| [`to_matrix`](qiskit.quantum_info.ScalarOp.to_matrix#qiskit.quantum_info.ScalarOp.to_matrix "qiskit.quantum_info.ScalarOp.to_matrix")         | Convert to a Numpy matrix.                                                 |
| [`to_operator`](qiskit.quantum_info.ScalarOp.to_operator#qiskit.quantum_info.ScalarOp.to_operator "qiskit.quantum_info.ScalarOp.to_operator") | Convert to an Operator object.                                             |
| [`transpose`](qiskit.quantum_info.ScalarOp.transpose#qiskit.quantum_info.ScalarOp.transpose "qiskit.quantum_info.ScalarOp.transpose")         | Return the transpose of the ScalarOp.                                      |

## Attributes

<span id="undefined" />

### atol

`= 1e-08`

<span id="undefined" />

### coeff

Return the coefficient

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### rtol

`= 1e-05`
