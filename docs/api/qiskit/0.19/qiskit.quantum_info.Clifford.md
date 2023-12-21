---
title: Clifford
description: API reference for qiskit.quantum_info.Clifford
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.quantum_info.Clifford
---

# Clifford

<span id="qiskit.quantum_info.Clifford" />

`Clifford(data, validate=True)`

An N-qubit unitary operator from the Clifford group.

**Representation**

An *N*-qubit Clifford operator is stored as a length *2N* [`StabilizerTable`](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") using the convention from reference \[1].

*   Rows 0 to *N-1* are the *destabilizer* group generators
*   Rows *N-1* to *2N-1* are the *stabilizer* group generators.

The internal [`StabilizerTable`](qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") for the Clifford can be accessed using the [`table`](qiskit.quantum_info.Clifford.table "qiskit.quantum_info.Clifford.table") attribute. The destabilizer or stabilizer rows can each be accessed as a length-N Stabilizer table using [`destabilizer`](qiskit.quantum_info.Clifford.destabilizer "qiskit.quantum_info.Clifford.destabilizer") and [`stabilizer`](qiskit.quantum_info.Clifford.stabilizer "qiskit.quantum_info.Clifford.stabilizer") attributes.

A more easily human readible representation of the Clifford operator can be obtained by calling the [`to_dict()`](qiskit.quantum_info.Clifford.to_dict "qiskit.quantum_info.Clifford.to_dict") method. This representation is also used if a Clifford object is printed as in the following example

```python
from qiskit import QuantumCircuit
from qiskit.quantum_info import Clifford

# Bell state generation circuit
qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
cliff = Clifford(qc)

# Print the Clifford
print(cliff)

# Print the Clifford destabilizer rows
print(cliff.destabilizer)

# Print the Clifford stabilizer rows
print(cliff.stabilizer)
```

```python
Clifford: Stabilizer = ['+XX', '+ZZ'], Destabilizer = ['+IZ', '+XI']
StabilizerTable: ['+IZ', '+XI']
StabilizerTable: ['+XX', '+ZZ']
```

**Circuit Conversion**

Clifford operators can be initialized from circuits containing *only* the following Clifford gates: `IGate`, `XGate`, `YGate`, `ZGate`, `HGate`, `SGate`, `SdgGate`, `CXGate`, `CZGate`, `SwapGate`. They can be converted back into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), or [`Gate`](qiskit.circuit.Gate "qiskit.circuit.Gate") object using the [`to_circuit()`](qiskit.quantum_info.Clifford.to_circuit "qiskit.quantum_info.Clifford.to_circuit") or [`to_instruction()`](qiskit.quantum_info.Clifford.to_instruction "qiskit.quantum_info.Clifford.to_instruction") methods respectively. Note that this decomposition is not necessarily optimal in terms of number of gates.

<Admonition title="Note" type="note">
  A minimally generating set of gates for Clifford circuits is the `HGate` and `SGate` gate and *either* the `CXGate` or `CZGate` two-qubit gate.
</Admonition>

Clifford operators can also be converted to [`Operator`](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") objects using the [`to_operator()`](qiskit.quantum_info.Clifford.to_operator "qiskit.quantum_info.Clifford.to_operator") method. This is done via decomposing to a circuit, and then simulating the circuit as a unitary operator.

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize an operator object.

## Attributes

|                                                                                                                  |                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Clifford.atol`](qiskit.quantum_info.Clifford.atol "qiskit.quantum_info.Clifford.atol")                         | The default absolute tolerance parameter for float comparisons.      |
| [`Clifford.destabilizer`](qiskit.quantum_info.Clifford.destabilizer "qiskit.quantum_info.Clifford.destabilizer") | Return the destabilizer block of the StabilizerTable.                |
| [`Clifford.dim`](qiskit.quantum_info.Clifford.dim "qiskit.quantum_info.Clifford.dim")                            | Return tuple (input\_shape, output\_shape).                          |
| [`Clifford.num_qubits`](qiskit.quantum_info.Clifford.num_qubits "qiskit.quantum_info.Clifford.num_qubits")       | Return the number of qubits if a N-qubit operator or None otherwise. |
| [`Clifford.qargs`](qiskit.quantum_info.Clifford.qargs "qiskit.quantum_info.Clifford.qargs")                      | Return the qargs for the operator.                                   |
| [`Clifford.rtol`](qiskit.quantum_info.Clifford.rtol "qiskit.quantum_info.Clifford.rtol")                         | The relative tolerance parameter for float comparisons.              |
| [`Clifford.stabilizer`](qiskit.quantum_info.Clifford.stabilizer "qiskit.quantum_info.Clifford.stabilizer")       | Return the stabilizer block of the StabilizerTable.                  |
| [`Clifford.table`](qiskit.quantum_info.Clifford.table "qiskit.quantum_info.Clifford.table")                      | Return StabilizerTable                                               |

## Methods

|                                                                                                                                 |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`Clifford.__call__`](qiskit.quantum_info.Clifford.__call__ "qiskit.quantum_info.Clifford.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Clifford.__getitem__`](qiskit.quantum_info.Clifford.__getitem__ "qiskit.quantum_info.Clifford.__getitem__")(key)              | Return a stabilizer Pauli row                                              |
| [`Clifford.__mul__`](qiskit.quantum_info.Clifford.__mul__ "qiskit.quantum_info.Clifford.__mul__")(other)                        |                                                                            |
| [`Clifford.add`](qiskit.quantum_info.Clifford.add "qiskit.quantum_info.Clifford.add")(other)                                    | Return the linear operator self + other.                                   |
| [`Clifford.adjoint`](qiskit.quantum_info.Clifford.adjoint "qiskit.quantum_info.Clifford.adjoint")()                             | Return the conjugate transpose of the Clifford                             |
| [`Clifford.compose`](qiskit.quantum_info.Clifford.compose "qiskit.quantum_info.Clifford.compose")(other\[, qargs, front])       | Return the composed operator.                                              |
| [`Clifford.conjugate`](qiskit.quantum_info.Clifford.conjugate "qiskit.quantum_info.Clifford.conjugate")()                       | Return the conjugate of the Clifford.                                      |
| [`Clifford.copy`](qiskit.quantum_info.Clifford.copy "qiskit.quantum_info.Clifford.copy")()                                      | Make a deep copy of current operator.                                      |
| [`Clifford.dot`](qiskit.quantum_info.Clifford.dot "qiskit.quantum_info.Clifford.dot")(other\[, qargs])                          | Return the right multiplied operator self \* other.                        |
| [`Clifford.expand`](qiskit.quantum_info.Clifford.expand "qiskit.quantum_info.Clifford.expand")(other)                           | Return the tensor product operator other ⊗ self.                           |
| [`Clifford.from_circuit`](qiskit.quantum_info.Clifford.from_circuit "qiskit.quantum_info.Clifford.from_circuit")(circuit)       | Initialize from a QuantumCircuit or Instruction.                           |
| [`Clifford.from_dict`](qiskit.quantum_info.Clifford.from_dict "qiskit.quantum_info.Clifford.from_dict")(obj)                    | Load a Clifford from a dictionary                                          |
| [`Clifford.from_label`](qiskit.quantum_info.Clifford.from_label "qiskit.quantum_info.Clifford.from_label")(label)               | Return a tensor product of single-qubit Clifford gates.                    |
| [`Clifford.input_dims`](qiskit.quantum_info.Clifford.input_dims "qiskit.quantum_info.Clifford.input_dims")(\[qargs])            | Return tuple of input dimension for specified subsystems.                  |
| [`Clifford.is_unitary`](qiskit.quantum_info.Clifford.is_unitary "qiskit.quantum_info.Clifford.is_unitary")()                    | Return True if the Clifford table is valid.                                |
| [`Clifford.multiply`](qiskit.quantum_info.Clifford.multiply "qiskit.quantum_info.Clifford.multiply")(other)                     | Return the linear operator other \* self.                                  |
| [`Clifford.output_dims`](qiskit.quantum_info.Clifford.output_dims "qiskit.quantum_info.Clifford.output_dims")(\[qargs])         | Return tuple of output dimension for specified subsystems.                 |
| [`Clifford.power`](qiskit.quantum_info.Clifford.power "qiskit.quantum_info.Clifford.power")(n)                                  | Return the compose of a operator with itself n times.                      |
| [`Clifford.reshape`](qiskit.quantum_info.Clifford.reshape "qiskit.quantum_info.Clifford.reshape")(\[input\_dims, output\_dims]) | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`Clifford.set_atol`](qiskit.quantum_info.Clifford.set_atol "qiskit.quantum_info.Clifford.set_atol")(value)                     | Set the class default absolute tolerance parameter for float comparisons.  |
| [`Clifford.set_rtol`](qiskit.quantum_info.Clifford.set_rtol "qiskit.quantum_info.Clifford.set_rtol")(value)                     | Set the class default relative tolerance parameter for float comparisons.  |
| [`Clifford.subtract`](qiskit.quantum_info.Clifford.subtract "qiskit.quantum_info.Clifford.subtract")(other)                     | Return the linear operator self - other.                                   |
| [`Clifford.tensor`](qiskit.quantum_info.Clifford.tensor "qiskit.quantum_info.Clifford.tensor")(other)                           | Return the tensor product operator self ⊗ other.                           |
| [`Clifford.to_circuit`](qiskit.quantum_info.Clifford.to_circuit "qiskit.quantum_info.Clifford.to_circuit")()                    | Return a QuantumCircuit implementing the Clifford.                         |
| [`Clifford.to_dict`](qiskit.quantum_info.Clifford.to_dict "qiskit.quantum_info.Clifford.to_dict")()                             | Return dictionary represenation of Clifford object.                        |
| [`Clifford.to_instruction`](qiskit.quantum_info.Clifford.to_instruction "qiskit.quantum_info.Clifford.to_instruction")()        | Return a Gate instruction implementing the Clifford.                       |
| [`Clifford.to_matrix`](qiskit.quantum_info.Clifford.to_matrix "qiskit.quantum_info.Clifford.to_matrix")()                       | Convert operator to Numpy matrix.                                          |
| [`Clifford.to_operator`](qiskit.quantum_info.Clifford.to_operator "qiskit.quantum_info.Clifford.to_operator")()                 | Convert to an Operator object.                                             |
| [`Clifford.transpose`](qiskit.quantum_info.Clifford.transpose "qiskit.quantum_info.Clifford.transpose")()                       | Return the transpose of the Clifford.                                      |
| [`Clifford.__call__`](qiskit.quantum_info.Clifford.__call__ "qiskit.quantum_info.Clifford.__call__")(qargs)                     | Return a clone with qargs set                                              |
| [`Clifford.__mul__`](qiskit.quantum_info.Clifford.__mul__ "qiskit.quantum_info.Clifford.__mul__")(other)                        |                                                                            |

