# TaperedPauliSumOp[¶](#taperedpaulisumop "Permalink to this headline")

<span id="undefined" />

`TaperedPauliSumOp(primitive, z2_symmetries, coeff=1.0)`

Bases: `qiskit.opflow.primitive_ops.pauli_sum_op.PauliSumOp`

Class for PauliSumOp after tapering

**Parameters**

*   **primitive** (`SparsePauliOp`) – The SparsePauliOp which defines the behavior of the underlying function.
*   **z2\_symmetries** (`Z2Symmetries`) – Z2 symmetries which the Operator has.
*   **coeff** (`Union`\[`complex`, `ParameterExpression`]) – A coefficient multiplying the primitive.

**Raises**

**TypeError** – invalid parameters.

## Methods Defined Here

|                                                                                                                                                                                                                          |                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`assign_parameters`](qiskit.opflow.primitive_ops.TaperedPauliSumOp.assign_parameters#qiskit.opflow.primitive_ops.TaperedPauliSumOp.assign_parameters "qiskit.opflow.primitive_ops.TaperedPauliSumOp.assign_parameters") | Binds scalar values to any Terra `Parameters` in the coefficients or primitives of the Operator, or substitutes one `Parameter` for another. |

## Attributes

<span id="undefined" />

### INDENTATION

`= ' '`

<span id="undefined" />

### coeff

The scalar coefficient multiplying the Operator.

**Return type**

`Union`\[`complex`, `ParameterExpression`]

**Returns**

The coefficient.

<span id="undefined" />

### coeffs

Return the Pauli coefficients.

<span id="undefined" />

### grouping\_type

Type of Grouping

**Type**

Returns

**Return type**

`str`

<span id="undefined" />

### instance\_id

Return the unique instance id.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

**Return type**

`int`

<span id="undefined" />

### parameters

<span id="undefined" />

### primitive

`qiskit.quantum_info.operators.symplectic.sparse_pauli_op.SparsePauliOp`

The primitive defining the underlying function of the Operator.

**Return type**

`Union`\[`QuantumCircuit`, `Operator`, `Pauli`, `SparsePauliOp`, `OperatorBase`]

**Returns**

The primitive object.

<span id="undefined" />

### settings

Return operator settings.

**Return type**

`Dict`

<span id="undefined" />

### z2\_symmetries

Z2 symmetries which the Operator has.

**Return type**

`Z2Symmetries`

**Returns**

The Z2 Symmetries.
