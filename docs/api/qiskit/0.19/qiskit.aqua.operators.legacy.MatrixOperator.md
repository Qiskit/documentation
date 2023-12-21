---
title: MatrixOperator
description: API reference for qiskit.aqua.operators.legacy.MatrixOperator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.legacy.MatrixOperator
---

# MatrixOperator

<span id="qiskit.aqua.operators.legacy.MatrixOperator" />

`MatrixOperator(matrix, basis=None, z2_symmetries=None, atol=1e-12, name=None)`

Operators relevant for quantum applications

<Admonition title="Note" type="note">
  For grouped paulis representation, all operations will always convert it to paulis and then convert it back. (It might be a performance issue.)
</Admonition>

**Parameters**

*   **matrix** (*numpy.ndarray or scipy.sparse.csr\_matrix*) – a 2-D sparse matrix represents operator (using CSR format internally)
*   **basis** (*list\[tuple(object, \[int])], optional*) – the grouping basis, each element is a tuple composed of the basis and the indices to paulis which are belonged to that group. e.g., if tpb basis is used, the object will be a pauli. by default, the group is equal to non-grouping, each pauli is its own basis.
*   **z2\_symmetries** ([*Z2Symmetries*](qiskit.aqua.operators.legacy.Z2Symmetries "qiskit.aqua.operators.legacy.Z2Symmetries")) – represent the Z2 symmetries
*   **atol** (*float*) – atol
*   **name** (*str*) – name

## Attributes

|                                                                                                                                                         |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`MatrixOperator.atol`](qiskit.aqua.operators.legacy.MatrixOperator.atol "qiskit.aqua.operators.legacy.MatrixOperator.atol")                            | return atol                                 |
| [`MatrixOperator.basis`](qiskit.aqua.operators.legacy.MatrixOperator.basis "qiskit.aqua.operators.legacy.MatrixOperator.basis")                         | returns basis                               |
| [`MatrixOperator.dense_matrix`](qiskit.aqua.operators.legacy.MatrixOperator.dense_matrix "qiskit.aqua.operators.legacy.MatrixOperator.dense_matrix")    | Getter of matrix in dense matrix form.      |
| [`MatrixOperator.dia_matrix`](qiskit.aqua.operators.legacy.MatrixOperator.dia_matrix "qiskit.aqua.operators.legacy.MatrixOperator.dia_matrix")          | diagonal matrix                             |
| [`MatrixOperator.matrix`](qiskit.aqua.operators.legacy.MatrixOperator.matrix "qiskit.aqua.operators.legacy.MatrixOperator.matrix")                      | Getter of matrix.                           |
| [`MatrixOperator.name`](qiskit.aqua.operators.legacy.MatrixOperator.name "qiskit.aqua.operators.legacy.MatrixOperator.name")                            | returns name                                |
| [`MatrixOperator.num_qubits`](qiskit.aqua.operators.legacy.MatrixOperator.num_qubits "qiskit.aqua.operators.legacy.MatrixOperator.num_qubits")          | number of qubits required for the operator. |
| [`MatrixOperator.z2_symmetries`](qiskit.aqua.operators.legacy.MatrixOperator.z2_symmetries "qiskit.aqua.operators.legacy.MatrixOperator.z2_symmetries") | returns z2 symmetries                       |

## Methods

|                                                                                                                                                                                                         |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`MatrixOperator.__mul__`](qiskit.aqua.operators.legacy.MatrixOperator.__mul__ "qiskit.aqua.operators.legacy.MatrixOperator.__mul__")(other)                                                            | Overload \* operation.                                                      |
| [`MatrixOperator.add`](qiskit.aqua.operators.legacy.MatrixOperator.add "qiskit.aqua.operators.legacy.MatrixOperator.add")(other\[, copy])                                                               |                                                                             |
| [`MatrixOperator.chop`](qiskit.aqua.operators.legacy.MatrixOperator.chop "qiskit.aqua.operators.legacy.MatrixOperator.chop")(\[threshold, copy])                                                        | Eliminate the real and imagine part of coeff in each pauli by threshold.    |
| [`MatrixOperator.construct_evaluation_circuit`](qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit "qiskit.aqua.operators.legacy.MatrixOperator.construct_evaluation_circuit")(…) | Construct the circuits for evaluation.                                      |
| [`MatrixOperator.copy`](qiskit.aqua.operators.legacy.MatrixOperator.copy "qiskit.aqua.operators.legacy.MatrixOperator.copy")()                                                                          | Get a copy of self.                                                         |
| [`MatrixOperator.evaluate_with_result`](qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_result")(result)                    | Use the executed result with operator to get the evaluated value.           |
| [`MatrixOperator.evaluate_with_statevector`](qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector "qiskit.aqua.operators.legacy.MatrixOperator.evaluate_with_statevector")(…)          | **param quantum\_state**quantum state                                       |
| [`MatrixOperator.evolve`](qiskit.aqua.operators.legacy.MatrixOperator.evolve "qiskit.aqua.operators.legacy.MatrixOperator.evolve")(state\_in\[, evo\_time, …])                                          | Carry out the eoh evolution for the operator under supplied specifications. |
| [`MatrixOperator.is_empty`](qiskit.aqua.operators.legacy.MatrixOperator.is_empty "qiskit.aqua.operators.legacy.MatrixOperator.is_empty")()                                                              | Check Operator is empty or not.                                             |
| [`MatrixOperator.print_details`](qiskit.aqua.operators.legacy.MatrixOperator.print_details "qiskit.aqua.operators.legacy.MatrixOperator.print_details")()                                               | **returns**a formatted operator.                                            |
| [`MatrixOperator.sub`](qiskit.aqua.operators.legacy.MatrixOperator.sub "qiskit.aqua.operators.legacy.MatrixOperator.sub")(other\[, copy])                                                               |                                                                             |
| [`MatrixOperator.to_opflow`](qiskit.aqua.operators.legacy.MatrixOperator.to_opflow "qiskit.aqua.operators.legacy.MatrixOperator.to_opflow")()                                                           | to op flow                                                                  |

