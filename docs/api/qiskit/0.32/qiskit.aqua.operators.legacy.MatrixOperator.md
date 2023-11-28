# MatrixOperator

<span id="undefined" />

`MatrixOperator(matrix, basis=None, z2_symmetries=None, atol=1e-12, name=None)`

Bases: `qiskit.aqua.operators.legacy.base_operator.LegacyBaseOperator`

Operators relevant for quantum applications

<Admonition title="Note" type="note">
  For grouped paulis representation, all operations will always convert it to paulis and then convert it back. (It might be a performance issue.)
</Admonition>

**Parameters**

*   **matrix** (*numpy.ndarray or scipy.sparse.csr\_matrix*) – a 2-D sparse matrix represents operator (using CSR format internally)
*   **basis** (*list\[tuple(object, \[int])], optional*) – the grouping basis, each element is a tuple composed of the basis and the indices to paulis which are belonged to that group. e.g., if tpb basis is used, the object will be a pauli. by default, the group is equal to non-grouping, each pauli is its own basis.
*   **z2\_symmetries** ([*Z2Symmetries*](qiskit.aqua.operators.legacy.Z2Symmetries#qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")) – represent the Z2 symmetries
*   **atol** (*float*) – atol
*   **name** (*str*) – name

## Methods

|                                                                                                                                                                                                                                                                |                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`add`](qiskit.aqua.operators.legacy.MatrixOperator.add#qiskit.aqua.operators.legacy.MatrixOperator.add "qiskit.aqua.operators.legacy.MatrixOperator.add")                                                                                                     |                                                                             |
| [`chop`](qiskit.aqua.operators.legacy.MatrixOperator.chop#qiskit.aqua.operators.legacy.MatrixOperator.chop "qiskit.aqua.operators.legacy.MatrixOperator.chop")                                                                                                 | Eliminate the real and imagine part of coeff in each pauli by threshold.    |
| [`construct_evaluation_circuit`](qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit#qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit") | Construct the circuits for evaluation.                                      |
| [`copy`](qiskit.aqua.operators.legacy.MatrixOperator.copy#qiskit.aqua.operators.legacy.MatrixOperator.copy "qiskit.aqua.operators.legacy.MatrixOperator.copy")                                                                                                 | Get a copy of self.                                                         |
| [`evaluate_with_result`](qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result#qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result")                                 | Use the executed result with operator to get the evaluated value.           |
| [`evaluate_with_statevector`](qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector#qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector")             | **param quantum\_state**quantum state                                       |
| [`evolve`](qiskit.aqua.operators.legacy.MatrixOperator.evolve#qiskit.aqua.operators.legacy.MatrixOperator.evolve "qiskit.aqua.operators.legacy.MatrixOperator.evolve")                                                                                         | Carry out the eoh evolution for the operator under supplied specifications. |
| [`is_empty`](qiskit.aqua.operators.legacy.MatrixOperator.is_empty#qiskit.aqua.operators.legacy.MatrixOperator.is_empty "qiskit.aqua.operators.legacy.MatrixOperator.is_empty")                                                                                 | Check Operator is empty or not.                                             |
| [`print_details`](qiskit.aqua.operators.legacy.MatrixOperator.print_details#qiskit.aqua.operators.legacy.MatrixOperator.print_details "qiskit.aqua.operators.legacy.MatrixOperator.print_details")                                                             | **returns**a formatted operator.                                            |
| [`sub`](qiskit.aqua.operators.legacy.MatrixOperator.sub#qiskit.aqua.operators.legacy.MatrixOperator.sub "qiskit.aqua.operators.legacy.MatrixOperator.sub")                                                                                                     |                                                                             |
| [`to_opflow`](qiskit.aqua.operators.legacy.MatrixOperator.to_opflow#qiskit.aqua.operators.legacy.MatrixOperator.to_opflow "qiskit.aqua.operators.legacy.MatrixOperator.to_opflow")                                                                             | to op flow                                                                  |

## Attributes

<span id="undefined" />

### atol

return atol

<span id="undefined" />

### basis

returns basis

<span id="undefined" />

### dense\_matrix

Getter of matrix in dense matrix form.

<span id="undefined" />

### dia\_matrix

diagonal matrix

<span id="undefined" />

### matrix

Getter of matrix.

<span id="undefined" />

### name

returns name

<span id="undefined" />

### num\_qubits

number of qubits required for the operator.

**Returns**

number of qubits

**Return type**

int

<span id="undefined" />

### z2\_symmetries

returns z2 symmetries
