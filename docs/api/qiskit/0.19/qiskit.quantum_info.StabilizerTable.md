---
title: StabilizerTable
description: API reference for qiskit.quantum_info.StabilizerTable
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.StabilizerTable
---

# StabilizerTable

<span id="qiskit.quantum_info.StabilizerTable" />

`StabilizerTable(data, phase=None)`

Symplectic representation of a list Stabilizer matrices.

**Symplectic Representation**

The symplectic representation of a single-qubit Stabilizer matrix is a pair of boolean values $[x, z]$ and a boolean phase p such that the Stabilizer matrix is given by $S = (-1)^p \sigma_z^z.\sigma_x^x$. The correspondence between labels, symplectic representation, stabilizer matrices, and Pauli matrices for the single-qubit case is shown in the following table.

| Label  | Phase | Symplectic | Matrix                                           | Pauli |
| ------ | ----- | ---------- | ------------------------------------------------ | ----- |
| `"+I"` | 0     | $[0, 0]$   | $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$   | $I$   |
| `"-I"` | 1     | $[0, 0]$   | $\begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}$ | $-I$  |
| `"X"`  | 0     | $[1, 0]$   | $\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$   | $X$   |
| `"-X"` | 1     | $[1, 0]$   | $\begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}$ | $-X$  |
| `"Y"`  | 0     | $[1, 1]$   | $\begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}$  | $iY$  |
| `"-Y"` | 1     | $[1, 1]$   | $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$  | $-iY$ |
| `"Z"`  | 0     | $[0, 1]$   | $\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$  | $Z$   |
| `"-Z"` | 1     | $[0, 1]$   | $\begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}$  | $-Z$  |

Internally this is stored as a length N boolean phase vector $[p_{N-1}, ..., p_{0}]$ and a [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") $M \times 2N$ boolean matrix:

$$
\begin{split}\left(\begin{array}{ccc|ccc}
    x_{0,0} & ... & x_{0,N-1} & z_{0,0} & ... & z_{0,N-1}  \\
    x_{1,0} & ... & x_{1,N-1} & z_{1,0} & ... & z_{1,N-1}  \\
    \vdots & \ddots & \vdots & \vdots & \ddots & \vdots  \\
    x_{M-1,0} & ... & x_{M-1,N-1} & z_{M-1,0} & ... & z_{M-1,N-1}
\end{array}\right)\end{split}
$$

where each row is a block vector $[X_i, Z_i]$ with $X_i = [x_{i,0}, ..., x_{i,N-1}]$, $Z_i = [z_{i,0}, ..., z_{i,N-1}]$ is the symplectic representation of an N-qubit Pauli. This representation is based on reference \[1].

StabilizerTable’s can be created from a list of labels using [`from_labels()`](qiskit.quantum_info.StabilizerTable.from_labels "qiskit.quantum_info.StabilizerTable.from_labels"), and converted to a list of labels or a list of matrices using [`to_labels()`](qiskit.quantum_info.StabilizerTable.to_labels "qiskit.quantum_info.StabilizerTable.to_labels") and [`to_matrix()`](qiskit.quantum_info.StabilizerTable.to_matrix "qiskit.quantum_info.StabilizerTable.to_matrix") respectively.

**Group Product**

The product of the stabilizer elements is defined with respect to the matrix multiplication of the matrices in Table 1. In terms of stabilizes labels the dot product group structure is

| A.B   | I | X  | Y  | Z  |
| ----- | - | -- | -- | -- |
| **I** | I | X  | Y  | Z  |
| **X** | X | I  | -Z | Y  |
| **Y** | Y | Z  | -I | -X |
| **Z** | Z | -Y | X  | I  |

The [`dot()`](qiskit.quantum_info.StabilizerTable.dot "qiskit.quantum_info.StabilizerTable.dot") method will return the output for `row.dot(col) = row.col`, while the [`compose()`](qiskit.quantum_info.StabilizerTable.compose "qiskit.quantum_info.StabilizerTable.compose") will return `row.compose(col) = col.row` from the above table.

Note that while this dot product is different to the matrix product of the [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable"), it does not change the commutation structure of elements. Hence `commutes:()` will be the same for the same labels.

**Qubit Ordering**

The qubits are ordered in the table such the least significant qubit \[x\_\{i, 0}, z\_\{i, 0}] is the first element of each of the $X_i, Z_i$ vector blocks. This is the opposite order to position in string labels or matrix tensor products where the least significant qubit is the right-most string character. For example Pauli `"ZX"` has `"X"` on qubit-0 and `"Z"` on qubit 1, and would have symplectic vectors $x=[1, 0]$, $z=[0, 1]$.

**Data Access**

Subsets of rows can be accessed using the list access `[]` operator and will return a table view of part of the StabilizerTable. The underlying phase vector and Pauli array can be directly accessed using the [`phase`](qiskit.quantum_info.StabilizerTable.phase "qiskit.quantum_info.StabilizerTable.phase") and [`array`](qiskit.quantum_info.StabilizerTable.array "qiskit.quantum_info.StabilizerTable.array") properties respectively. The sub-arrays for only the X or Z blocks can be accessed using the [`X`](qiskit.quantum_info.StabilizerTable.X "qiskit.quantum_info.StabilizerTable.X") and [`Z`](qiskit.quantum_info.StabilizerTable.Z "qiskit.quantum_info.StabilizerTable.Z") properties respectively.

The Pauli part of the Stabilizer table can be viewed and accessed as a [`PauliTable`](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable") object using the [`pauli`](qiskit.quantum_info.StabilizerTable.pauli "qiskit.quantum_info.StabilizerTable.pauli") property. Note that this doesn’t copy the underlying array so any changes made to the Pauli table will also change the stabilizer table.

**Iteration**

Rows in the Stabilizer table can be iterated over like a list. Iteration can also be done using the label or matrix representation of each row using the [`label_iter()`](qiskit.quantum_info.StabilizerTable.label_iter "qiskit.quantum_info.StabilizerTable.label_iter") and [`matrix_iter()`](qiskit.quantum_info.StabilizerTable.matrix_iter "qiskit.quantum_info.StabilizerTable.matrix_iter") methods.

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize the StabilizerTable.

**Parameters**

*   **data** (*array or str or* [*PauliTable*](qiskit.quantum_info.PauliTable "qiskit.quantum_info.PauliTable")) – input PauliTable data.
*   **phase** (*array or bool or None*) – optional phase vector for input data (Default: None).

**Raises**

**QiskitError** – if input array or phase vector has an invalid shape.

**Additional Information:**

The input array is not copied so multiple Pauli and Stabilizer tables can share the same underlying array.

## Attributes

|                                                                                                                                 |                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [`StabilizerTable.X`](qiskit.quantum_info.StabilizerTable.X "qiskit.quantum_info.StabilizerTable.X")                            | The X block of the [`array`](qiskit.quantum_info.StabilizerTable.array "qiskit.quantum_info.StabilizerTable.array").     |
| [`StabilizerTable.Z`](qiskit.quantum_info.StabilizerTable.Z "qiskit.quantum_info.StabilizerTable.Z")                            | The Z block of the [`array`](qiskit.quantum_info.StabilizerTable.array "qiskit.quantum_info.StabilizerTable.array").     |
| [`StabilizerTable.array`](qiskit.quantum_info.StabilizerTable.array "qiskit.quantum_info.StabilizerTable.array")                | The underlying boolean array.                                                                                            |
| [`StabilizerTable.atol`](qiskit.quantum_info.StabilizerTable.atol "qiskit.quantum_info.StabilizerTable.atol")                   | The default absolute tolerance parameter for float comparisons.                                                          |
| [`StabilizerTable.dim`](qiskit.quantum_info.StabilizerTable.dim "qiskit.quantum_info.StabilizerTable.dim")                      | Return tuple (input\_shape, output\_shape).                                                                              |
| [`StabilizerTable.num_qubits`](qiskit.quantum_info.StabilizerTable.num_qubits "qiskit.quantum_info.StabilizerTable.num_qubits") | Return the number of qubits if a N-qubit operator or None otherwise.                                                     |
| [`StabilizerTable.pauli`](qiskit.quantum_info.StabilizerTable.pauli "qiskit.quantum_info.StabilizerTable.pauli")                | Return PauliTable                                                                                                        |
| [`StabilizerTable.phase`](qiskit.quantum_info.StabilizerTable.phase "qiskit.quantum_info.StabilizerTable.phase")                | Return phase vector                                                                                                      |
| [`StabilizerTable.qargs`](qiskit.quantum_info.StabilizerTable.qargs "qiskit.quantum_info.StabilizerTable.qargs")                | Return the qargs for the operator.                                                                                       |
| [`StabilizerTable.rtol`](qiskit.quantum_info.StabilizerTable.rtol "qiskit.quantum_info.StabilizerTable.rtol")                   | The relative tolerance parameter for float comparisons.                                                                  |
| [`StabilizerTable.shape`](qiskit.quantum_info.StabilizerTable.shape "qiskit.quantum_info.StabilizerTable.shape")                | The full shape of the [`array()`](qiskit.quantum_info.StabilizerTable.array "qiskit.quantum_info.StabilizerTable.array") |
| [`StabilizerTable.size`](qiskit.quantum_info.StabilizerTable.size "qiskit.quantum_info.StabilizerTable.size")                   | The number of Pauli rows in the table.                                                                                   |

## Methods

|                                                                                                                                                                         |                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`StabilizerTable.__call__`](qiskit.quantum_info.StabilizerTable.__call__ "qiskit.quantum_info.StabilizerTable.__call__")(qargs)                                        | Return a clone with qargs set                                              |
| [`StabilizerTable.__getitem__`](qiskit.quantum_info.StabilizerTable.__getitem__ "qiskit.quantum_info.StabilizerTable.__getitem__")(key)                                 | Return a view of StabilizerTable                                           |
| [`StabilizerTable.__len__`](qiskit.quantum_info.StabilizerTable.__len__ "qiskit.quantum_info.StabilizerTable.__len__")()                                                | Return the number of Pauli rows in the table.                              |
| [`StabilizerTable.__mul__`](qiskit.quantum_info.StabilizerTable.__mul__ "qiskit.quantum_info.StabilizerTable.__mul__")(other)                                           |                                                                            |
| [`StabilizerTable.add`](qiskit.quantum_info.StabilizerTable.add "qiskit.quantum_info.StabilizerTable.add")(other)                                                       | Return the linear operator self + other.                                   |
| [`StabilizerTable.adjoint`](qiskit.quantum_info.StabilizerTable.adjoint "qiskit.quantum_info.StabilizerTable.adjoint")()                                                | Return the adjoint of the operator.                                        |
| [`StabilizerTable.anticommutes_with_all`](qiskit.quantum_info.StabilizerTable.anticommutes_with_all "qiskit.quantum_info.StabilizerTable.anticommutes_with_all")(other) | Return indexes of rows that commute other.                                 |
| [`StabilizerTable.argsort`](qiskit.quantum_info.StabilizerTable.argsort "qiskit.quantum_info.StabilizerTable.argsort")(\[weight])                                       | Return indices for sorting the rows of the PauliTable.                     |
| [`StabilizerTable.commutes`](qiskit.quantum_info.StabilizerTable.commutes "qiskit.quantum_info.StabilizerTable.commutes")(pauli)                                        | Return list of commutation properties for each row with a Pauli.           |
| [`StabilizerTable.commutes_with_all`](qiskit.quantum_info.StabilizerTable.commutes_with_all "qiskit.quantum_info.StabilizerTable.commutes_with_all")(other)             | Return indexes of rows that commute other.                                 |
| [`StabilizerTable.compose`](qiskit.quantum_info.StabilizerTable.compose "qiskit.quantum_info.StabilizerTable.compose")(other\[, qargs, front])                          | Return the compose output product of two tables.                           |
| [`StabilizerTable.conjugate`](qiskit.quantum_info.StabilizerTable.conjugate "qiskit.quantum_info.StabilizerTable.conjugate")()                                          | Not implemented.                                                           |
| [`StabilizerTable.copy`](qiskit.quantum_info.StabilizerTable.copy "qiskit.quantum_info.StabilizerTable.copy")()                                                         | Return a copy of the StabilizerTable.                                      |
| [`StabilizerTable.delete`](qiskit.quantum_info.StabilizerTable.delete "qiskit.quantum_info.StabilizerTable.delete")(ind\[, qubit])                                      | Return a copy with Stabilizer rows deleted from table.                     |
| [`StabilizerTable.dot`](qiskit.quantum_info.StabilizerTable.dot "qiskit.quantum_info.StabilizerTable.dot")(other\[, qargs])                                             | Return the dot output product of two tables.                               |
| [`StabilizerTable.expand`](qiskit.quantum_info.StabilizerTable.expand "qiskit.quantum_info.StabilizerTable.expand")(other)                                              | Return the expand output product of two tables.                            |
| [`StabilizerTable.from_labels`](qiskit.quantum_info.StabilizerTable.from_labels "qiskit.quantum_info.StabilizerTable.from_labels")(labels)                              | Construct a StabilizerTable from a list of Pauli stabilizer strings.       |
| [`StabilizerTable.input_dims`](qiskit.quantum_info.StabilizerTable.input_dims "qiskit.quantum_info.StabilizerTable.input_dims")(\[qargs])                               | Return tuple of input dimension for specified subsystems.                  |
| [`StabilizerTable.insert`](qiskit.quantum_info.StabilizerTable.insert "qiskit.quantum_info.StabilizerTable.insert")(ind, value\[, qubit])                               | Insert stabilizers’s into the table.                                       |
| [`StabilizerTable.label_iter`](qiskit.quantum_info.StabilizerTable.label_iter "qiskit.quantum_info.StabilizerTable.label_iter")()                                       | Return a label representation iterator.                                    |
| [`StabilizerTable.matrix_iter`](qiskit.quantum_info.StabilizerTable.matrix_iter "qiskit.quantum_info.StabilizerTable.matrix_iter")(\[sparse])                           | Return a matrix representation iterator.                                   |
| [`StabilizerTable.multiply`](qiskit.quantum_info.StabilizerTable.multiply "qiskit.quantum_info.StabilizerTable.multiply")(other)                                        | Return the linear operator other \* self.                                  |
| [`StabilizerTable.output_dims`](qiskit.quantum_info.StabilizerTable.output_dims "qiskit.quantum_info.StabilizerTable.output_dims")(\[qargs])                            | Return tuple of output dimension for specified subsystems.                 |
| [`StabilizerTable.power`](qiskit.quantum_info.StabilizerTable.power "qiskit.quantum_info.StabilizerTable.power")(n)                                                     | Return the compose of a operator with itself n times.                      |
| [`StabilizerTable.reshape`](qiskit.quantum_info.StabilizerTable.reshape "qiskit.quantum_info.StabilizerTable.reshape")(\[input\_dims, …])                               | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`StabilizerTable.set_atol`](qiskit.quantum_info.StabilizerTable.set_atol "qiskit.quantum_info.StabilizerTable.set_atol")(value)                                        | Set the class default absolute tolerance parameter for float comparisons.  |
| [`StabilizerTable.set_rtol`](qiskit.quantum_info.StabilizerTable.set_rtol "qiskit.quantum_info.StabilizerTable.set_rtol")(value)                                        | Set the class default relative tolerance parameter for float comparisons.  |
| [`StabilizerTable.sort`](qiskit.quantum_info.StabilizerTable.sort "qiskit.quantum_info.StabilizerTable.sort")(\[weight])                                                | Sort the rows of the table.                                                |
| [`StabilizerTable.subtract`](qiskit.quantum_info.StabilizerTable.subtract "qiskit.quantum_info.StabilizerTable.subtract")(other)                                        | Return the linear operator self - other.                                   |
| [`StabilizerTable.tensor`](qiskit.quantum_info.StabilizerTable.tensor "qiskit.quantum_info.StabilizerTable.tensor")(other)                                              | Return the tensor output product of two tables.                            |
| [`StabilizerTable.to_labels`](qiskit.quantum_info.StabilizerTable.to_labels "qiskit.quantum_info.StabilizerTable.to_labels")(\[array])                                  | Convert a StabilizerTable to a list Pauli stabilizer string labels.        |
| [`StabilizerTable.to_matrix`](qiskit.quantum_info.StabilizerTable.to_matrix "qiskit.quantum_info.StabilizerTable.to_matrix")(\[sparse, array])                          | Convert to a list or array of Stabilizer matrices.                         |
| [`StabilizerTable.transpose`](qiskit.quantum_info.StabilizerTable.transpose "qiskit.quantum_info.StabilizerTable.transpose")()                                          | Not implemented.                                                           |
| [`StabilizerTable.unique`](qiskit.quantum_info.StabilizerTable.unique "qiskit.quantum_info.StabilizerTable.unique")(\[return\_index, …])                                | Return unique stabilizers from the table.                                  |
| [`StabilizerTable.__call__`](qiskit.quantum_info.StabilizerTable.__call__ "qiskit.quantum_info.StabilizerTable.__call__")(qargs)                                        | Return a clone with qargs set                                              |
| [`StabilizerTable.__len__`](qiskit.quantum_info.StabilizerTable.__len__ "qiskit.quantum_info.StabilizerTable.__len__")()                                                | Return the number of Pauli rows in the table.                              |
| [`StabilizerTable.__mul__`](qiskit.quantum_info.StabilizerTable.__mul__ "qiskit.quantum_info.StabilizerTable.__mul__")(other)                                           |                                                                            |

