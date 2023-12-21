# qiskit.opflow\.converters.PauliBasisChange.get\_diagonalizing\_clifford

`PauliBasisChange.get_diagonalizing_clifford(pauli)`

Construct a `CircuitOp` with only single-qubit gates which takes the eigenvectors of `pauli` to eigenvectors composed only of |0⟩ and |1⟩ tensor products. Equivalently, finds the basis-change circuit to take `pauli` to a diagonal `PauliOp` composed only of Z and I tensor products.

Note, underlying Pauli bits are in Qiskit endianness, so we need to reverse before we begin composing with Operator flow.

**Parameters**

**pauli** (`Union`\[`Pauli`, `PauliOp`]) – the `Pauli` or `PauliOp` to whose diagonalizing circuit to compute.

**Return type**

`OperatorBase`

**Returns**

The diagonalizing `CircuitOp`.
