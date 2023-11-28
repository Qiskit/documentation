# PauliList

<span id="undefined" />

`PauliList(data)`

Bases: `qiskit.quantum_info.operators.symplectic.base_pauli.BasePauli`, `qiskit.quantum_info.operators.mixins.linear.LinearMixin`, `qiskit.quantum_info.operators.mixins.group.GroupMixin`

List of N-qubit Pauli operators.

This class is an efficient representation of a list of [`Pauli`](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli") operators. It supports 1D numpy array indexing returning a [`Pauli`](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli") for integer indexes or a [`PauliList`](#qiskit.quantum_info.PauliList "qiskit.quantum_info.PauliList") for slice or list indices.

**Initialization**

A PauliList object can be initialized in several ways.

> **`PauliList(list[str])`**
>
> where strings are same representation with [`Pauli`](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli").
>
> **`PauliList(Pauli) and PauliList(list[Pauli])`**
>
> where Pauli is [`Pauli`](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli").
>
> **`PauliList.from_symplectic(z, x, phase)`**
>
> where `z` and `x` are 2 dimensional boolean `numpy.ndarrays` and `phase` is an integer in `[0, 1, 2, 3]`.

For example,

```python
import numpy as np

from qiskit.quantum_info import Pauli, PauliList

# 1. init from list[str]
pauli_list = PauliList(["II", "+ZI", "-iYY"])
print("1. ", pauli_list)

pauli1 = Pauli("iXI")
pauli2 = Pauli("iZZ")

# 2. init from Pauli
print("2. ", PauliList(pauli1))

# 3. init from list[Pauli]
print("3. ", PauliList([pauli1, pauli2]))

# 4. init from np.ndarray
z = np.array([[True, True], [False, False]])
x = np.array([[False, True], [True, False]])
phase = np.array([0, 1])
pauli_list = PauliList.from_symplectic(z, x)
print("4. ", pauli_list)
```

```python
1.  ['II', 'ZI', '-iYY']
2.  ['iXI']
3.  ['iXI', 'iZZ']
4.  ['YZ', 'IX']
```

**Data Access**

The individual Paulis can be accessed and updated using the `[]` operator which accepts integer, lists, or slices for selecting subsets of PauliList. If integer is given, it returns Pauli not PauliList.

```python
pauli_list = PauliList(["XX", "ZZ", "IZ"])
print("Integer: ", repr(pauli_list[1]))
print("List: ", repr(pauli_list[[0, 2]]))
print("Slice: ", repr(pauli_list[0:2]))
```

```python
Integer:  Pauli('ZZ')
List:  PauliList(['XX', 'IZ'])
Slice:  PauliList(['XX', 'ZZ'])
```

**Iteration**

Rows in the Pauli table can be iterated over like a list. Iteration can also be done using the label or matrix representation of each row using the [`label_iter()`](qiskit.quantum_info.PauliList.label_iter#qiskit.quantum_info.PauliList.label_iter "qiskit.quantum_info.PauliList.label_iter") and [`matrix_iter()`](qiskit.quantum_info.PauliList.matrix_iter#qiskit.quantum_info.PauliList.matrix_iter "qiskit.quantum_info.PauliList.matrix_iter") methods.

Initialize the PauliList.

**Parameters**

**data** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli") *or list*) – input data for Paulis. If input is a list each item in the list must be a Pauli object or Pauli str.

**Raises**

**QiskitError** – if input array is invalid shape.

**Additional Information:**

The input array is not copied so multiple Pauli tables can share the same underlying array.

## Methods

|                                                                                                                                                                                          |                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.PauliList.adjoint#qiskit.quantum_info.PauliList.adjoint "qiskit.quantum_info.PauliList.adjoint")                                                         | Return the adjoint of each Pauli in the list.                              |
| [`anticommutes`](qiskit.quantum_info.PauliList.anticommutes#qiskit.quantum_info.PauliList.anticommutes "qiskit.quantum_info.PauliList.anticommutes")                                     | Return True if other Pauli that anticommutes with other.                   |
| [`anticommutes_with_all`](qiskit.quantum_info.PauliList.anticommutes_with_all#qiskit.quantum_info.PauliList.anticommutes_with_all "qiskit.quantum_info.PauliList.anticommutes_with_all") | Return indexes of rows that commute other.                                 |
| [`argsort`](qiskit.quantum_info.PauliList.argsort#qiskit.quantum_info.PauliList.argsort "qiskit.quantum_info.PauliList.argsort")                                                         | Return indices for sorting the rows of the table.                          |
| [`commutes`](qiskit.quantum_info.PauliList.commutes#qiskit.quantum_info.PauliList.commutes "qiskit.quantum_info.PauliList.commutes")                                                     | Return True for each Pauli that commutes with other.                       |
| [`commutes_with_all`](qiskit.quantum_info.PauliList.commutes_with_all#qiskit.quantum_info.PauliList.commutes_with_all "qiskit.quantum_info.PauliList.commutes_with_all")                 | Return indexes of rows that commute other.                                 |
| [`compose`](qiskit.quantum_info.PauliList.compose#qiskit.quantum_info.PauliList.compose "qiskit.quantum_info.PauliList.compose")                                                         | Return the composition self∘other for each Pauli in the list.              |
| [`conjugate`](qiskit.quantum_info.PauliList.conjugate#qiskit.quantum_info.PauliList.conjugate "qiskit.quantum_info.PauliList.conjugate")                                                 | Return the conjugate of each Pauli in the list.                            |
| [`copy`](qiskit.quantum_info.PauliList.copy#qiskit.quantum_info.PauliList.copy "qiskit.quantum_info.PauliList.copy")                                                                     | Make a deep copy of current operator.                                      |
| [`delete`](qiskit.quantum_info.PauliList.delete#qiskit.quantum_info.PauliList.delete "qiskit.quantum_info.PauliList.delete")                                                             | Return a copy with Pauli rows deleted from table.                          |
| [`dot`](qiskit.quantum_info.PauliList.dot#qiskit.quantum_info.PauliList.dot "qiskit.quantum_info.PauliList.dot")                                                                         | Return the composition other∘self for each Pauli in the list.              |
| [`equiv`](qiskit.quantum_info.PauliList.equiv#qiskit.quantum_info.PauliList.equiv "qiskit.quantum_info.PauliList.equiv")                                                                 | Entrywise comparison of Pauli equivalence up to global phase.              |
| [`evolve`](qiskit.quantum_info.PauliList.evolve#qiskit.quantum_info.PauliList.evolve "qiskit.quantum_info.PauliList.evolve")                                                             | Evolve the Pauli by a Clifford.                                            |
| [`expand`](qiskit.quantum_info.PauliList.expand#qiskit.quantum_info.PauliList.expand "qiskit.quantum_info.PauliList.expand")                                                             | Return the expand product of each Pauli in the list.                       |
| [`from_symplectic`](qiskit.quantum_info.PauliList.from_symplectic#qiskit.quantum_info.PauliList.from_symplectic "qiskit.quantum_info.PauliList.from_symplectic")                         | Construct a PauliList from a symplectic data.                              |
| [`input_dims`](qiskit.quantum_info.PauliList.input_dims#qiskit.quantum_info.PauliList.input_dims "qiskit.quantum_info.PauliList.input_dims")                                             | Return tuple of input dimension for specified subsystems.                  |
| [`insert`](qiskit.quantum_info.PauliList.insert#qiskit.quantum_info.PauliList.insert "qiskit.quantum_info.PauliList.insert")                                                             | Insert Pauli’s into the table.                                             |
| [`inverse`](qiskit.quantum_info.PauliList.inverse#qiskit.quantum_info.PauliList.inverse "qiskit.quantum_info.PauliList.inverse")                                                         | Return the inverse of each Pauli in the list.                              |
| [`label_iter`](qiskit.quantum_info.PauliList.label_iter#qiskit.quantum_info.PauliList.label_iter "qiskit.quantum_info.PauliList.label_iter")                                             | Return a label representation iterator.                                    |
| [`matrix_iter`](qiskit.quantum_info.PauliList.matrix_iter#qiskit.quantum_info.PauliList.matrix_iter "qiskit.quantum_info.PauliList.matrix_iter")                                         | Return a matrix representation iterator.                                   |
| [`output_dims`](qiskit.quantum_info.PauliList.output_dims#qiskit.quantum_info.PauliList.output_dims "qiskit.quantum_info.PauliList.output_dims")                                         | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.PauliList.power#qiskit.quantum_info.PauliList.power "qiskit.quantum_info.PauliList.power")                                                                 | Return the compose of a operator with itself n times.                      |
| [`reshape`](qiskit.quantum_info.PauliList.reshape#qiskit.quantum_info.PauliList.reshape "qiskit.quantum_info.PauliList.reshape")                                                         | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`sort`](qiskit.quantum_info.PauliList.sort#qiskit.quantum_info.PauliList.sort "qiskit.quantum_info.PauliList.sort")                                                                     | Sort the rows of the table.                                                |
| [`tensor`](qiskit.quantum_info.PauliList.tensor#qiskit.quantum_info.PauliList.tensor "qiskit.quantum_info.PauliList.tensor")                                                             | Return the tensor product with each Pauli in the list.                     |
| [`to_labels`](qiskit.quantum_info.PauliList.to_labels#qiskit.quantum_info.PauliList.to_labels "qiskit.quantum_info.PauliList.to_labels")                                                 | Convert a PauliList to a list Pauli string labels.                         |
| [`to_matrix`](qiskit.quantum_info.PauliList.to_matrix#qiskit.quantum_info.PauliList.to_matrix "qiskit.quantum_info.PauliList.to_matrix")                                                 | Convert to a list or array of Pauli matrices.                              |
| [`transpose`](qiskit.quantum_info.PauliList.transpose#qiskit.quantum_info.PauliList.transpose "qiskit.quantum_info.PauliList.transpose")                                                 | Return the transpose of each Pauli in the list.                            |
| [`unique`](qiskit.quantum_info.PauliList.unique#qiskit.quantum_info.PauliList.unique "qiskit.quantum_info.PauliList.unique")                                                             | Return unique Paulis from the table.                                       |

## Attributes

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### num\_qubits

Return the number of qubits if a N-qubit operator or None otherwise.

<span id="undefined" />

### phase

Return the phase exponent of the PauliList.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### settings

Return operator settings.

<span id="undefined" />

### shape

The full shape of the `array()`

<span id="undefined" />

### size

The number of Pauli rows in the table.

<span id="undefined" />

### x

The x array for the symplectic representation.

<span id="undefined" />

### z

The z array for the symplectic representation.
