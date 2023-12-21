---
title: PauliTable
description: API reference for qiskit.quantum_info.PauliTable
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.PauliTable
---

# PauliTable

<span id="qiskit.quantum_info.PauliTable" />

`PauliTable(data)`

Symplectic representation of a list Pauli matrices.

**Symplectic Representation**

The symplectic representation of a single-qubit Pauli matrix is a pair of boolean values $[x, z]$ such that the Pauli matrix is given by $P = (-i)^{z * x} \sigma_z^z.\sigma_x^x$. The correspondence between labels, symplectic representation, and matrices for single-qubit Paulis are shown in Table 1.

| Label | Symplectic | Matrix                                          |
| ----- | ---------- | ----------------------------------------------- |
| `"I"` | $[0, 0]$   | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$  |
| `"X"` | $[1, 0]$   | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$  |
| `"Y"` | $[1, 1]$   | $\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$ |
| `"Z"` | $[0, 1]$   | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$ |

The full Pauli table is a M x 2N boolean matrix:

$$
\begin{split}\left(\begin{array}{ccc|ccc}
    x_{0,0} & ... & x_{0,N-1} & z_{0,0} & ... & z_{0,N-1}  \\
    x_{1,0} & ... & x_{1,N-1} & z_{1,0} & ... & z_{1,N-1}  \\
    \vdots & \ddots & \vdots & \vdots & \ddots & \vdots  \\
    x_{M-1,0} & ... & x_{M-1,N-1} & z_{M-1,0} & ... & z_{M-1,N-1}
\end{array}\right)\end{split}
$$

where each row is a block vector $[X_i, Z_i]$ with $X = [x_{i,0}, ..., x_{i,N-1}]$, $Z = [z_{i,0}, ..., z_{i,N-1}]$ is the symplectic representation of an N-qubit Pauli. This representation is based on reference \[1].

PauliTable’s can be created from a list of labels using [`from_labels()`](qiskit.quantum_info.PauliTable.from_labels "qiskit.quantum_info.PauliTable.from_labels"), and converted to a list of labels or a list of matrices using [`to_labels()`](qiskit.quantum_info.PauliTable.to_labels "qiskit.quantum_info.PauliTable.to_labels") and [`to_matrix()`](qiskit.quantum_info.PauliTable.to_matrix "qiskit.quantum_info.PauliTable.to_matrix") respectively.

**Group Product**

The Pauli’s in the Pauli table do not represent the full Pauli as they are restricted to having +1 phase. The dot-product for the Pauli’s is defined to discard any phase obtained from matrix multiplication so that we have $X.Z = Z.X = Y$, etc. This means that for the PauliTable class the operator methods [`compose()`](qiskit.quantum_info.PauliTable.compose "qiskit.quantum_info.PauliTable.compose") and [`dot()`](qiskit.quantum_info.PauliTable.dot "qiskit.quantum_info.PauliTable.dot") are equivalent.

| A.B   | I | X | Y | Z |
| ----- | - | - | - | - |
| **I** | I | X | Y | Z |
| **X** | X | I | Z | Y |
| **Y** | Y | Z | I | X |
| **Z** | Z | Y | X | I |

**Qubit Ordering**

The qubits are ordered in the table such the least significant qubit \[x\_\{i, 0}, z\_\{i, 0}] is the first element of each of the $X_i, Z_i$ vector blocks. This is the opposite order to position in string labels or matrix tensor products where the least significant qubit is the right-most string character. For example Pauli `"ZX"` has `"X"` on qubit-0 and `"Z"` on qubit 1, and would have symplectic vectors $x=[1, 0]$, $z=[0, 1]$.

**Data Access**

Subsets of rows can be accessed using the list access `[]` operator and will return a table view of part of the PauliTable. The underlying Numpy array can be directly accessed using the [`array`](qiskit.quantum_info.PauliTable.array "qiskit.quantum_info.PauliTable.array") property, and the sub-arrays for only the X or Z blocks can be accessed using the [`X`](qiskit.quantum_info.PauliTable.X "qiskit.quantum_info.PauliTable.X") and [`Z`](qiskit.quantum_info.PauliTable.Z "qiskit.quantum_info.PauliTable.Z") properties respectively.

**Iteration**

Rows in the Pauli table can be iterated over like a list. Iteration can also be done using the label or matrix representation of each row using the [`label_iter()`](qiskit.quantum_info.PauliTable.label_iter "qiskit.quantum_info.PauliTable.label_iter") and [`matrix_iter()`](qiskit.quantum_info.PauliTable.matrix_iter "qiskit.quantum_info.PauliTable.matrix_iter") methods.

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize the PauliTable.

**Parameters**

**data** (*array or str or* [*ScalarOp*](qiskit.quantum_info.ScalarOp "qiskit.quantum_info.ScalarOp")  *or*[*PauliTable*](#qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – input data.

**Raises**

**QiskitError** – if input array is invalid shape.

**Additional Information:**

The input array is not copied so multiple Pauli tables can share the same underlying array.

## Attributes

|                                                                                                                  |                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [`PauliTable.X`](qiskit.quantum_info.PauliTable.X "qiskit.quantum_info.PauliTable.X")                            | The X block of the [`array`](qiskit.quantum_info.PauliTable.array "qiskit.quantum_info.PauliTable.array").     |
| [`PauliTable.Z`](qiskit.quantum_info.PauliTable.Z "qiskit.quantum_info.PauliTable.Z")                            | The Z block of the [`array`](qiskit.quantum_info.PauliTable.array "qiskit.quantum_info.PauliTable.array").     |
| [`PauliTable.array`](qiskit.quantum_info.PauliTable.array "qiskit.quantum_info.PauliTable.array")                | The underlying boolean array.                                                                                  |
| [`PauliTable.atol`](qiskit.quantum_info.PauliTable.atol "qiskit.quantum_info.PauliTable.atol")                   | The default absolute tolerance parameter for float comparisons.                                                |
| [`PauliTable.dim`](qiskit.quantum_info.PauliTable.dim "qiskit.quantum_info.PauliTable.dim")                      | Return tuple (input\_shape, output\_shape).                                                                    |
| [`PauliTable.num_qubits`](qiskit.quantum_info.PauliTable.num_qubits "qiskit.quantum_info.PauliTable.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise.                                           |
| [`PauliTable.qargs`](qiskit.quantum_info.PauliTable.qargs "qiskit.quantum_info.PauliTable.qargs")                | Return the qargs for the operator.                                                                             |
| [`PauliTable.rtol`](qiskit.quantum_info.PauliTable.rtol "qiskit.quantum_info.PauliTable.rtol")                   | The relative tolerance parameter for float comparisons.                                                        |
| [`PauliTable.shape`](qiskit.quantum_info.PauliTable.shape "qiskit.quantum_info.PauliTable.shape")                | The full shape of the [`array()`](qiskit.quantum_info.PauliTable.array "qiskit.quantum_info.PauliTable.array") |
| [`PauliTable.size`](qiskit.quantum_info.PauliTable.size "qiskit.quantum_info.PauliTable.size")                   | The number of Pauli rows in the table.                                                                         |

## Methods

|                                                                                                                                                          |                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`PauliTable.__call__`](qiskit.quantum_info.PauliTable.__call__ "qiskit.quantum_info.PauliTable.__call__")(qargs)                                        | Return a clone with qargs set                                              |
| [`PauliTable.__getitem__`](qiskit.quantum_info.PauliTable.__getitem__ "qiskit.quantum_info.PauliTable.__getitem__")(key)                                 | Return a view of the PauliTable.                                           |
| [`PauliTable.__len__`](qiskit.quantum_info.PauliTable.__len__ "qiskit.quantum_info.PauliTable.__len__")()                                                | Return the number of Pauli rows in the table.                              |
| [`PauliTable.__mul__`](qiskit.quantum_info.PauliTable.__mul__ "qiskit.quantum_info.PauliTable.__mul__")(other)                                           |                                                                            |
| [`PauliTable.add`](qiskit.quantum_info.PauliTable.add "qiskit.quantum_info.PauliTable.add")(other)                                                       | Return the linear operator self + other.                                   |
| [`PauliTable.adjoint`](qiskit.quantum_info.PauliTable.adjoint "qiskit.quantum_info.PauliTable.adjoint")()                                                | Return the adjoint of the operator.                                        |
| [`PauliTable.anticommutes_with_all`](qiskit.quantum_info.PauliTable.anticommutes_with_all "qiskit.quantum_info.PauliTable.anticommutes_with_all")(other) | Return indexes of rows that commute other.                                 |
| [`PauliTable.argsort`](qiskit.quantum_info.PauliTable.argsort "qiskit.quantum_info.PauliTable.argsort")(\[weight])                                       | Return indices for sorting the rows of the table.                          |
| [`PauliTable.commutes`](qiskit.quantum_info.PauliTable.commutes "qiskit.quantum_info.PauliTable.commutes")(pauli)                                        | Return list of commutation properties for each row with a Pauli.           |
| [`PauliTable.commutes_with_all`](qiskit.quantum_info.PauliTable.commutes_with_all "qiskit.quantum_info.PauliTable.commutes_with_all")(other)             | Return indexes of rows that commute other.                                 |
| [`PauliTable.compose`](qiskit.quantum_info.PauliTable.compose "qiskit.quantum_info.PauliTable.compose")(other\[, qargs, front])                          | Return the compose output product of two tables.                           |
| [`PauliTable.conjugate`](qiskit.quantum_info.PauliTable.conjugate "qiskit.quantum_info.PauliTable.conjugate")()                                          | Not implemented.                                                           |
| [`PauliTable.copy`](qiskit.quantum_info.PauliTable.copy "qiskit.quantum_info.PauliTable.copy")()                                                         | Make a deep copy of current operator.                                      |
| [`PauliTable.delete`](qiskit.quantum_info.PauliTable.delete "qiskit.quantum_info.PauliTable.delete")(ind\[, qubit])                                      | Return a copy with Pauli rows deleted from table.                          |
| [`PauliTable.dot`](qiskit.quantum_info.PauliTable.dot "qiskit.quantum_info.PauliTable.dot")(other\[, qargs])                                             | Return the dot output product of two tables.                               |
| [`PauliTable.expand`](qiskit.quantum_info.PauliTable.expand "qiskit.quantum_info.PauliTable.expand")(other)                                              | Return the expand output product of two tables.                            |
| [`PauliTable.from_labels`](qiskit.quantum_info.PauliTable.from_labels "qiskit.quantum_info.PauliTable.from_labels")(labels)                              | Construct a PauliTable from a list of Pauli strings.                       |
| [`PauliTable.input_dims`](qiskit.quantum_info.PauliTable.input_dims "qiskit.quantum_info.PauliTable.input_dims")(\[qargs])                               | Return tuple of input dimension for specified subsystems.                  |
| [`PauliTable.insert`](qiskit.quantum_info.PauliTable.insert "qiskit.quantum_info.PauliTable.insert")(ind, value\[, qubit])                               | Insert Pauli’s into the table.                                             |
| [`PauliTable.label_iter`](qiskit.quantum_info.PauliTable.label_iter "qiskit.quantum_info.PauliTable.label_iter")()                                       | Return a label representation iterator.                                    |
| [`PauliTable.matrix_iter`](qiskit.quantum_info.PauliTable.matrix_iter "qiskit.quantum_info.PauliTable.matrix_iter")(\[sparse])                           | Return a matrix representation iterator.                                   |
| [`PauliTable.multiply`](qiskit.quantum_info.PauliTable.multiply "qiskit.quantum_info.PauliTable.multiply")(other)                                        | Return the linear operator other \* self.                                  |
| [`PauliTable.output_dims`](qiskit.quantum_info.PauliTable.output_dims "qiskit.quantum_info.PauliTable.output_dims")(\[qargs])                            | Return tuple of output dimension for specified subsystems.                 |
| [`PauliTable.power`](qiskit.quantum_info.PauliTable.power "qiskit.quantum_info.PauliTable.power")(n)                                                     | Return the compose of a operator with itself n times.                      |
| [`PauliTable.reshape`](qiskit.quantum_info.PauliTable.reshape "qiskit.quantum_info.PauliTable.reshape")(\[input\_dims, output\_dims])                    | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`PauliTable.set_atol`](qiskit.quantum_info.PauliTable.set_atol "qiskit.quantum_info.PauliTable.set_atol")(value)                                        | Set the class default absolute tolerance parameter for float comparisons.  |
| [`PauliTable.set_rtol`](qiskit.quantum_info.PauliTable.set_rtol "qiskit.quantum_info.PauliTable.set_rtol")(value)                                        | Set the class default relative tolerance parameter for float comparisons.  |
| [`PauliTable.sort`](qiskit.quantum_info.PauliTable.sort "qiskit.quantum_info.PauliTable.sort")(\[weight])                                                | Sort the rows of the table.                                                |
| [`PauliTable.subtract`](qiskit.quantum_info.PauliTable.subtract "qiskit.quantum_info.PauliTable.subtract")(other)                                        | Return the linear operator self - other.                                   |
| [`PauliTable.tensor`](qiskit.quantum_info.PauliTable.tensor "qiskit.quantum_info.PauliTable.tensor")(other)                                              | Return the tensor output product of two tables.                            |
| [`PauliTable.to_labels`](qiskit.quantum_info.PauliTable.to_labels "qiskit.quantum_info.PauliTable.to_labels")(\[array])                                  | Convert a PauliTable to a list Pauli string labels.                        |
| [`PauliTable.to_matrix`](qiskit.quantum_info.PauliTable.to_matrix "qiskit.quantum_info.PauliTable.to_matrix")(\[sparse, array])                          | Convert to a list or array of Pauli matrices.                              |
| [`PauliTable.transpose`](qiskit.quantum_info.PauliTable.transpose "qiskit.quantum_info.PauliTable.transpose")()                                          | Not implemented.                                                           |
| [`PauliTable.unique`](qiskit.quantum_info.PauliTable.unique "qiskit.quantum_info.PauliTable.unique")(\[return\_index, return\_counts])                   | Return unique Paulis from the table.                                       |
| [`PauliTable.__call__`](qiskit.quantum_info.PauliTable.__call__ "qiskit.quantum_info.PauliTable.__call__")(qargs)                                        | Return a clone with qargs set                                              |
| [`PauliTable.__mul__`](qiskit.quantum_info.PauliTable.__mul__ "qiskit.quantum_info.PauliTable.__mul__")(other)                                           |                                                                            |

