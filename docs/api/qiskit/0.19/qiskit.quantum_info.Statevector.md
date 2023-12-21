---
title: Statevector
description: API reference for qiskit.quantum_info.Statevector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Statevector
---

# Statevector

<span id="qiskit.quantum_info.Statevector" />

`Statevector(data, dims=None)`

Statevector class

Initialize a statevector object.

**Parameters**

*   **data** (*vector\_like*) – a complex statevector.
*   **dims** (*int or tuple or list*) – Optional. The subsystem dimension of the state (See additional information).

**Raises**

**QiskitError** – if input data is not valid.

**Additional Information:**

The `dims` kwarg can be None, an integer, or an iterable of integers.

*   `Iterable` – the subsystem dimensions are the values in the list with the total number of subsystems given by the length of the list.
*   `Int` or `None` – the length of the input vector specifies the total dimension of the density matrix. If it is a power of two the state will be initialized as an N-qubit state. If it is not a power of two the state will have a single d-dimensional subsystem.

## Attributes

|                                                                                                                     |                                                                   |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`Statevector.atol`](qiskit.quantum_info.Statevector.atol "qiskit.quantum_info.Statevector.atol")                   | The absolute tolerance parameter for float comparisons.           |
| [`Statevector.data`](qiskit.quantum_info.Statevector.data "qiskit.quantum_info.Statevector.data")                   | Return data.                                                      |
| [`Statevector.dim`](qiskit.quantum_info.Statevector.dim "qiskit.quantum_info.Statevector.dim")                      | Return total state dimension.                                     |
| [`Statevector.num_qubits`](qiskit.quantum_info.Statevector.num_qubits "qiskit.quantum_info.Statevector.num_qubits") | Return the number of qubits if a N-qubit state or None otherwise. |
| [`Statevector.rtol`](qiskit.quantum_info.Statevector.rtol "qiskit.quantum_info.Statevector.rtol")                   | The relative tolerance parameter for float comparisons.           |

## Methods

|                                                                                                                                                                 |                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`Statevector.__mul__`](qiskit.quantum_info.Statevector.__mul__ "qiskit.quantum_info.Statevector.__mul__")(other)                                               |                                                                           |
| [`Statevector.add`](qiskit.quantum_info.Statevector.add "qiskit.quantum_info.Statevector.add")(other)                                                           | Return the linear combination self + other.                               |
| [`Statevector.conjugate`](qiskit.quantum_info.Statevector.conjugate "qiskit.quantum_info.Statevector.conjugate")()                                              | Return the conjugate of the operator.                                     |
| [`Statevector.copy`](qiskit.quantum_info.Statevector.copy "qiskit.quantum_info.Statevector.copy")()                                                             | Make a copy of current operator.                                          |
| [`Statevector.dims`](qiskit.quantum_info.Statevector.dims "qiskit.quantum_info.Statevector.dims")(\[qargs])                                                     | Return tuple of input dimension for specified subsystems.                 |
| [`Statevector.equiv`](qiskit.quantum_info.Statevector.equiv "qiskit.quantum_info.Statevector.equiv")(other\[, rtol, atol])                                      | Return True if statevectors are equivalent up to global phase.            |
| [`Statevector.evolve`](qiskit.quantum_info.Statevector.evolve "qiskit.quantum_info.Statevector.evolve")(other\[, qargs])                                        | Evolve a quantum state by the operator.                                   |
| [`Statevector.expand`](qiskit.quantum_info.Statevector.expand "qiskit.quantum_info.Statevector.expand")(other)                                                  | Return the tensor product state other ⊗ self.                             |
| [`Statevector.from_instruction`](qiskit.quantum_info.Statevector.from_instruction "qiskit.quantum_info.Statevector.from_instruction")(instruction)              | Return the output statevector of an instruction.                          |
| [`Statevector.from_int`](qiskit.quantum_info.Statevector.from_int "qiskit.quantum_info.Statevector.from_int")(i, dims)                                          | Return a computational basis statevector.                                 |
| [`Statevector.from_label`](qiskit.quantum_info.Statevector.from_label "qiskit.quantum_info.Statevector.from_label")(label)                                      | Return a tensor product of Pauli X,Y,Z eigenstates.                       |
| [`Statevector.is_valid`](qiskit.quantum_info.Statevector.is_valid "qiskit.quantum_info.Statevector.is_valid")(\[atol, rtol])                                    | Return True if a Statevector has norm 1.                                  |
| [`Statevector.measure`](qiskit.quantum_info.Statevector.measure "qiskit.quantum_info.Statevector.measure")(\[qargs])                                            | Measure subsystems and return outcome and post-measure state.             |
| [`Statevector.multiply`](qiskit.quantum_info.Statevector.multiply "qiskit.quantum_info.Statevector.multiply")(other)                                            | Return the scalar multipled state other \* self.                          |
| [`Statevector.probabilities`](qiskit.quantum_info.Statevector.probabilities "qiskit.quantum_info.Statevector.probabilities")(\[qargs, decimals])                | Return the subsystem measurement probability vector.                      |
| [`Statevector.probabilities_dict`](qiskit.quantum_info.Statevector.probabilities_dict "qiskit.quantum_info.Statevector.probabilities_dict")(\[qargs, decimals]) | Return the subsystem measurement probability dictionary.                  |
| [`Statevector.purity`](qiskit.quantum_info.Statevector.purity "qiskit.quantum_info.Statevector.purity")()                                                       | Return the purity of the quantum state.                                   |
| [`Statevector.reset`](qiskit.quantum_info.Statevector.reset "qiskit.quantum_info.Statevector.reset")(\[qargs])                                                  | Reset state or subsystems to the 0-state.                                 |
| [`Statevector.sample_counts`](qiskit.quantum_info.Statevector.sample_counts "qiskit.quantum_info.Statevector.sample_counts")(shots\[, qargs])                   | Sample a dict of qubit measurement outcomes in the computational basis.   |
| [`Statevector.sample_memory`](qiskit.quantum_info.Statevector.sample_memory "qiskit.quantum_info.Statevector.sample_memory")(shots\[, qargs])                   | Sample a list of qubit measurement outcomes in the computational basis.   |
| [`Statevector.seed`](qiskit.quantum_info.Statevector.seed "qiskit.quantum_info.Statevector.seed")(\[value])                                                     | Set the seed for the quantum state RNG.                                   |
| [`Statevector.set_atol`](qiskit.quantum_info.Statevector.set_atol "qiskit.quantum_info.Statevector.set_atol")(value)                                            | Set the class default absolute tolerance parameter for float comparisons. |
| [`Statevector.set_rtol`](qiskit.quantum_info.Statevector.set_rtol "qiskit.quantum_info.Statevector.set_rtol")(value)                                            | Set the class default relative tolerance parameter for float comparisons. |
| [`Statevector.subtract`](qiskit.quantum_info.Statevector.subtract "qiskit.quantum_info.Statevector.subtract")(other)                                            | Return the linear operator self - other.                                  |
| [`Statevector.tensor`](qiskit.quantum_info.Statevector.tensor "qiskit.quantum_info.Statevector.tensor")(other)                                                  | Return the tensor product state self ⊗ other.                             |
| [`Statevector.to_counts`](qiskit.quantum_info.Statevector.to_counts "qiskit.quantum_info.Statevector.to_counts")()                                              | Returns the statevector as a counts dict of probabilities.                |
| [`Statevector.to_dict`](qiskit.quantum_info.Statevector.to_dict "qiskit.quantum_info.Statevector.to_dict")(\[decimals])                                         | Convert the statevector to dictionary form.                               |
| [`Statevector.to_operator`](qiskit.quantum_info.Statevector.to_operator "qiskit.quantum_info.Statevector.to_operator")()                                        | Convert state to a rank-1 projector operator                              |
| [`Statevector.trace`](qiskit.quantum_info.Statevector.trace "qiskit.quantum_info.Statevector.trace")()                                                          | Return the trace of the quantum state as a density matrix.                |
| [`Statevector.__mul__`](qiskit.quantum_info.Statevector.__mul__ "qiskit.quantum_info.Statevector.__mul__")(other)                                               |                                                                           |

