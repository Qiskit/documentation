# Clifford

<span id="undefined" />

`Clifford(data, validate=True)`

Bases: `qiskit.quantum_info.operators.base_operator.BaseOperator`, `qiskit.quantum_info.operators.mixins.adjoint.AdjointMixin`

An N-qubit unitary operator from the Clifford group.

**Representation**

An *N*-qubit Clifford operator is stored as a length *2N* [`StabilizerTable`](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") using the convention from reference \[1].

*   Rows 0 to *N-1* are the *destabilizer* group generators
*   Rows *N* to *2N-1* are the *stabilizer* group generators.

The internal [`StabilizerTable`](qiskit.quantum_info.StabilizerTable#qiskit.quantum_info.StabilizerTable "qiskit.quantum_info.StabilizerTable") for the Clifford can be accessed using the [`table`](#qiskit.quantum_info.Clifford.table "qiskit.quantum_info.Clifford.table") attribute. The destabilizer or stabilizer rows can each be accessed as a length-N Stabilizer table using [`destabilizer`](#qiskit.quantum_info.Clifford.destabilizer "qiskit.quantum_info.Clifford.destabilizer") and [`stabilizer`](#qiskit.quantum_info.Clifford.stabilizer "qiskit.quantum_info.Clifford.stabilizer") attributes.

A more easily human readable representation of the Clifford operator can be obtained by calling the [`to_dict()`](qiskit.quantum_info.Clifford.to_dict#qiskit.quantum_info.Clifford.to_dict "qiskit.quantum_info.Clifford.to_dict") method. This representation is also used if a Clifford object is printed as in the following example

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

Clifford operators can be initialized from circuits containing *only* the following Clifford gates: [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate"), [`XGate`](qiskit.circuit.library.XGate#qiskit.circuit.library.XGate "qiskit.circuit.library.XGate"), [`YGate`](qiskit.circuit.library.YGate#qiskit.circuit.library.YGate "qiskit.circuit.library.YGate"), [`ZGate`](qiskit.circuit.library.ZGate#qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate"), [`HGate`](qiskit.circuit.library.HGate#qiskit.circuit.library.HGate "qiskit.circuit.library.HGate"), [`SGate`](qiskit.circuit.library.SGate#qiskit.circuit.library.SGate "qiskit.circuit.library.SGate"), [`SdgGate`](qiskit.circuit.library.SdgGate#qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate"), [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate"), [`CZGate`](qiskit.circuit.library.CZGate#qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate"), [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate"). They can be converted back into a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), or [`Gate`](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate") object using the [`to_circuit()`](qiskit.quantum_info.Clifford.to_circuit#qiskit.quantum_info.Clifford.to_circuit "qiskit.quantum_info.Clifford.to_circuit") or [`to_instruction()`](qiskit.quantum_info.Clifford.to_instruction#qiskit.quantum_info.Clifford.to_instruction "qiskit.quantum_info.Clifford.to_instruction") methods respectively. Note that this decomposition is not necessarily optimal in terms of number of gates.

<Admonition title="Note" type="note">
  A minimally generating set of gates for Clifford circuits is the [`HGate`](qiskit.circuit.library.HGate#qiskit.circuit.library.HGate "qiskit.circuit.library.HGate") and [`SGate`](qiskit.circuit.library.SGate#qiskit.circuit.library.SGate "qiskit.circuit.library.SGate") gate and *either* the [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate") or [`CZGate`](qiskit.circuit.library.CZGate#qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate") two-qubit gate.
</Admonition>

Clifford operators can also be converted to [`Operator`](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator") objects using the [`to_operator()`](qiskit.quantum_info.Clifford.to_operator#qiskit.quantum_info.Clifford.to_operator "qiskit.quantum_info.Clifford.to_operator") method. This is done via decomposing to a circuit, and then simulating the circuit as a unitary operator.

## References

1.  S. Aaronson, D. Gottesman, *Improved Simulation of Stabilizer Circuits*, Phys. Rev. A 70, 052328 (2004). [arXiv:quant-ph/0406196](https://arxiv.org/abs/quant-ph/0406196)

Initialize an operator object.

## Methods

|                                                                                                                                                           |                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`adjoint`](qiskit.quantum_info.Clifford.adjoint#qiskit.quantum_info.Clifford.adjoint "qiskit.quantum_info.Clifford.adjoint")                             | Return the adjoint of the Operator.                                        |
| [`compose`](qiskit.quantum_info.Clifford.compose#qiskit.quantum_info.Clifford.compose "qiskit.quantum_info.Clifford.compose")                             | Return the operator composition with another Clifford.                     |
| [`conjugate`](qiskit.quantum_info.Clifford.conjugate#qiskit.quantum_info.Clifford.conjugate "qiskit.quantum_info.Clifford.conjugate")                     | Return the conjugate of the Clifford.                                      |
| [`copy`](qiskit.quantum_info.Clifford.copy#qiskit.quantum_info.Clifford.copy "qiskit.quantum_info.Clifford.copy")                                         | Make a deep copy of current operator.                                      |
| [`dot`](qiskit.quantum_info.Clifford.dot#qiskit.quantum_info.Clifford.dot "qiskit.quantum_info.Clifford.dot")                                             | Return the right multiplied operator self \* other.                        |
| [`expand`](qiskit.quantum_info.Clifford.expand#qiskit.quantum_info.Clifford.expand "qiskit.quantum_info.Clifford.expand")                                 | Return the reverse-order tensor product with another Clifford.             |
| [`from_circuit`](qiskit.quantum_info.Clifford.from_circuit#qiskit.quantum_info.Clifford.from_circuit "qiskit.quantum_info.Clifford.from_circuit")         | Initialize from a QuantumCircuit or Instruction.                           |
| [`from_dict`](qiskit.quantum_info.Clifford.from_dict#qiskit.quantum_info.Clifford.from_dict "qiskit.quantum_info.Clifford.from_dict")                     | Load a Clifford from a dictionary                                          |
| [`from_label`](qiskit.quantum_info.Clifford.from_label#qiskit.quantum_info.Clifford.from_label "qiskit.quantum_info.Clifford.from_label")                 | Return a tensor product of single-qubit Clifford gates.                    |
| [`input_dims`](qiskit.quantum_info.Clifford.input_dims#qiskit.quantum_info.Clifford.input_dims "qiskit.quantum_info.Clifford.input_dims")                 | Return tuple of input dimension for specified subsystems.                  |
| [`is_unitary`](qiskit.quantum_info.Clifford.is_unitary#qiskit.quantum_info.Clifford.is_unitary "qiskit.quantum_info.Clifford.is_unitary")                 | Return True if the Clifford table is valid.                                |
| [`output_dims`](qiskit.quantum_info.Clifford.output_dims#qiskit.quantum_info.Clifford.output_dims "qiskit.quantum_info.Clifford.output_dims")             | Return tuple of output dimension for specified subsystems.                 |
| [`power`](qiskit.quantum_info.Clifford.power#qiskit.quantum_info.Clifford.power "qiskit.quantum_info.Clifford.power")                                     | Return the compose of a operator with itself n times.                      |
| [`reshape`](qiskit.quantum_info.Clifford.reshape#qiskit.quantum_info.Clifford.reshape "qiskit.quantum_info.Clifford.reshape")                             | Return a shallow copy with reshaped input and output subsystem dimensions. |
| [`tensor`](qiskit.quantum_info.Clifford.tensor#qiskit.quantum_info.Clifford.tensor "qiskit.quantum_info.Clifford.tensor")                                 | Return the tensor product with another Clifford.                           |
| [`to_circuit`](qiskit.quantum_info.Clifford.to_circuit#qiskit.quantum_info.Clifford.to_circuit "qiskit.quantum_info.Clifford.to_circuit")                 | Return a QuantumCircuit implementing the Clifford.                         |
| [`to_dict`](qiskit.quantum_info.Clifford.to_dict#qiskit.quantum_info.Clifford.to_dict "qiskit.quantum_info.Clifford.to_dict")                             | Return dictionary representation of Clifford object.                       |
| [`to_instruction`](qiskit.quantum_info.Clifford.to_instruction#qiskit.quantum_info.Clifford.to_instruction "qiskit.quantum_info.Clifford.to_instruction") | Return a Gate instruction implementing the Clifford.                       |
| [`to_matrix`](qiskit.quantum_info.Clifford.to_matrix#qiskit.quantum_info.Clifford.to_matrix "qiskit.quantum_info.Clifford.to_matrix")                     | Convert operator to Numpy matrix.                                          |
| [`to_operator`](qiskit.quantum_info.Clifford.to_operator#qiskit.quantum_info.Clifford.to_operator "qiskit.quantum_info.Clifford.to_operator")             | Convert to an Operator object.                                             |
| [`transpose`](qiskit.quantum_info.Clifford.transpose#qiskit.quantum_info.Clifford.transpose "qiskit.quantum_info.Clifford.transpose")                     | Return the transpose of the Clifford.                                      |

## Attributes

<span id="undefined" />

### destabilizer

Return the destabilizer block of the StabilizerTable.

<span id="undefined" />

### dim

Return tuple (input\_shape, output\_shape).

<span id="undefined" />

### name

Unique string identifier for operation type.

<span id="undefined" />

### num\_clbits

Number of classical bits.

<span id="undefined" />

### num\_qubits

Number of qubits.

<span id="undefined" />

### qargs

Return the qargs for the operator.

<span id="undefined" />

### stabilizer

Return the stabilizer block of the StabilizerTable.

<span id="undefined" />

### table

Return StabilizerTable
