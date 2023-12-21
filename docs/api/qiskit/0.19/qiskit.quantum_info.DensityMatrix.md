---
title: DensityMatrix
description: API reference for qiskit.quantum_info.DensityMatrix
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.DensityMatrix
---

# DensityMatrix

<span id="qiskit.quantum_info.DensityMatrix" />

`DensityMatrix(data, dims=None)`

DensityMatrix class

Initialize a density matrix object.

**Parameters**

*   **data** (*matrix\_like or vector\_like*) – a density matrix or statevector. If a vector the density matrix is constructed as the projector of that vector.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the leading dimension of the input matrix specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Attributes

|                                                                                                                           |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`DensityMatrix.atol`](qiskit.quantum_info.DensityMatrix.atol "qiskit.quantum_info.DensityMatrix.atol")                   | The absolute tolerance parameter for float comparisons.           |
| [`DensityMatrix.data`](qiskit.quantum_info.DensityMatrix.data "qiskit.quantum_info.DensityMatrix.data")                   | Return data.                                                      |
| [`DensityMatrix.dim`](qiskit.quantum_info.DensityMatrix.dim "qiskit.quantum_info.DensityMatrix.dim")                      | Return total state dimension.                                     |
| [`DensityMatrix.num_qubits`](qiskit.quantum_info.DensityMatrix.num_qubits "qiskit.quantum_info.DensityMatrix.num_qubits") | Return the number of qubits if a N-qubit state or None otherwise. |
| [`DensityMatrix.rtol`](qiskit.quantum_info.DensityMatrix.rtol "qiskit.quantum_info.DensityMatrix.rtol")                   | The relative tolerance parameter for float comparisons.           |

## Methods

|                                                                                                                                                                |                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`DensityMatrix.__mul__`](qiskit.quantum_info.DensityMatrix.__mul__ "qiskit.quantum_info.DensityMatrix.__mul__")(other)                                        |                                                                           |
| [`DensityMatrix.add`](qiskit.quantum_info.DensityMatrix.add "qiskit.quantum_info.DensityMatrix.add")(other)                                                    | Return the linear combination self + other.                               |
| [`DensityMatrix.conjugate`](qiskit.quantum_info.DensityMatrix.conjugate "qiskit.quantum_info.DensityMatrix.conjugate")()                                       | Return the conjugate of the density matrix.                               |
| [`DensityMatrix.copy`](qiskit.quantum_info.DensityMatrix.copy "qiskit.quantum_info.DensityMatrix.copy")()                                                      | Make a copy of current operator.                                          |
| [`DensityMatrix.dims`](qiskit.quantum_info.DensityMatrix.dims "qiskit.quantum_info.DensityMatrix.dims")(\[qargs])                                              | Return tuple of input dimension for specified subsystems.                 |
| [`DensityMatrix.evolve`](qiskit.quantum_info.DensityMatrix.evolve "qiskit.quantum_info.DensityMatrix.evolve")(other\[, qargs])                                 | Evolve a quantum state by an operator.                                    |
| [`DensityMatrix.expand`](qiskit.quantum_info.DensityMatrix.expand "qiskit.quantum_info.DensityMatrix.expand")(other)                                           | Return the tensor product state other ⊗ self.                             |
| [`DensityMatrix.from_instruction`](qiskit.quantum_info.DensityMatrix.from_instruction "qiskit.quantum_info.DensityMatrix.from_instruction")(instruction)       | Return the output density matrix of an instruction.                       |
| [`DensityMatrix.from_int`](qiskit.quantum_info.DensityMatrix.from_int "qiskit.quantum_info.DensityMatrix.from_int")(i, dims)                                   | Return a computational basis state density matrix.                        |
| [`DensityMatrix.from_label`](qiskit.quantum_info.DensityMatrix.from_label "qiskit.quantum_info.DensityMatrix.from_label")(label)                               | Return a tensor product of Pauli X,Y,Z eigenstates.                       |
| [`DensityMatrix.is_valid`](qiskit.quantum_info.DensityMatrix.is_valid "qiskit.quantum_info.DensityMatrix.is_valid")(\[atol, rtol])                             | Return True if trace 1 and positive semidefinite.                         |
| [`DensityMatrix.measure`](qiskit.quantum_info.DensityMatrix.measure "qiskit.quantum_info.DensityMatrix.measure")(\[qargs])                                     | Measure subsystems and return outcome and post-measure state.             |
| [`DensityMatrix.multiply`](qiskit.quantum_info.DensityMatrix.multiply "qiskit.quantum_info.DensityMatrix.multiply")(other)                                     | Return the scalar multipled state other \* self.                          |
| [`DensityMatrix.probabilities`](qiskit.quantum_info.DensityMatrix.probabilities "qiskit.quantum_info.DensityMatrix.probabilities")(\[qargs, decimals])         | Return the subsystem measurement probability vector.                      |
| [`DensityMatrix.probabilities_dict`](qiskit.quantum_info.DensityMatrix.probabilities_dict "qiskit.quantum_info.DensityMatrix.probabilities_dict")(\[qargs, …]) | Return the subsystem measurement probability dictionary.                  |
| [`DensityMatrix.purity`](qiskit.quantum_info.DensityMatrix.purity "qiskit.quantum_info.DensityMatrix.purity")()                                                | Return the purity of the quantum state.                                   |
| [`DensityMatrix.reset`](qiskit.quantum_info.DensityMatrix.reset "qiskit.quantum_info.DensityMatrix.reset")(\[qargs])                                           | Reset state or subsystems to the 0-state.                                 |
| [`DensityMatrix.sample_counts`](qiskit.quantum_info.DensityMatrix.sample_counts "qiskit.quantum_info.DensityMatrix.sample_counts")(shots\[, qargs])            | Sample a dict of qubit measurement outcomes in the computational basis.   |
| [`DensityMatrix.sample_memory`](qiskit.quantum_info.DensityMatrix.sample_memory "qiskit.quantum_info.DensityMatrix.sample_memory")(shots\[, qargs])            | Sample a list of qubit measurement outcomes in the computational basis.   |
| [`DensityMatrix.seed`](qiskit.quantum_info.DensityMatrix.seed "qiskit.quantum_info.DensityMatrix.seed")(\[value])                                              | Set the seed for the quantum state RNG.                                   |
| [`DensityMatrix.set_atol`](qiskit.quantum_info.DensityMatrix.set_atol "qiskit.quantum_info.DensityMatrix.set_atol")(value)                                     | Set the class default absolute tolerance parameter for float comparisons. |
| [`DensityMatrix.set_rtol`](qiskit.quantum_info.DensityMatrix.set_rtol "qiskit.quantum_info.DensityMatrix.set_rtol")(value)                                     | Set the class default relative tolerance parameter for float comparisons. |
| [`DensityMatrix.subtract`](qiskit.quantum_info.DensityMatrix.subtract "qiskit.quantum_info.DensityMatrix.subtract")(other)                                     | Return the linear operator self - other.                                  |
| [`DensityMatrix.tensor`](qiskit.quantum_info.DensityMatrix.tensor "qiskit.quantum_info.DensityMatrix.tensor")(other)                                           | Return the tensor product state self ⊗ other.                             |
| [`DensityMatrix.to_counts`](qiskit.quantum_info.DensityMatrix.to_counts "qiskit.quantum_info.DensityMatrix.to_counts")()                                       | Returns the density matrix as a counts dict of probabilities.             |
| [`DensityMatrix.to_dict`](qiskit.quantum_info.DensityMatrix.to_dict "qiskit.quantum_info.DensityMatrix.to_dict")(\[decimals])                                  | Convert the density matrix to dictionary form.                            |
| [`DensityMatrix.to_operator`](qiskit.quantum_info.DensityMatrix.to_operator "qiskit.quantum_info.DensityMatrix.to_operator")()                                 | Convert to Operator                                                       |
| [`DensityMatrix.trace`](qiskit.quantum_info.DensityMatrix.trace "qiskit.quantum_info.DensityMatrix.trace")()                                                   | Return the trace of the density matrix.                                   |
| [`DensityMatrix.__mul__`](qiskit.quantum_info.DensityMatrix.__mul__ "qiskit.quantum_info.DensityMatrix.__mul__")(other)                                        |                                                                           |

