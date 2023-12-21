---
title: get_diagonalizing_clifford
description: API reference for qiskit.aqua.operators.converters.PauliBasisChange.get_diagonalizing_clifford
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.converters.PauliBasisChange.get_diagonalizing_clifford
---

# get\_diagonalizing\_clifford

<span id="qiskit.aqua.operators.converters.PauliBasisChange.get_diagonalizing_clifford" />

`PauliBasisChange.get_diagonalizing_clifford(pauli)`

Construct a `CircuitOp` with only single-qubit gates which takes the eigenvectors of `pauli` to eigenvectors composed only of |0⟩ and |1⟩ tensor products. Equivalently, finds the basis-change circuit to take `pauli` to a diagonal `PauliOp` composed only of Z and I tensor products.

Note, underlying Pauli bits are in Qiskit endianness, so we need to reverse before we begin composing with Operator flow.

**Parameters**

**pauli** (`Union`\[[`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.operators.pauli.Pauli"), [`PauliOp`](qiskit.aqua.operators.primitive_ops.PauliOp "qiskit.aqua.operators.primitive_ops.pauli_op.PauliOp")]) – the `Pauli` or `PauliOp` to whose diagonalizing circuit to compute.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The diagonalizing `CircuitOp`.

