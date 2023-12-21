# qiskit.aqua.operators.evolutions.PauliTrotterEvolution.evolution\_for\_pauli

`PauliTrotterEvolution.evolution_for_pauli(pauli_op)`

Compute evolution Operator for a single Pauli using a `PauliBasisChange`.

**Parameters**

**pauli\_op** (`PauliOp`) – The `PauliOp` to evolve.

**Return type**

`PrimitiveOp`

**Returns**

A `PrimitiveOp`, either the evolution `CircuitOp` or a `PauliOp` equal to the identity if pauli\_op is the identity.
