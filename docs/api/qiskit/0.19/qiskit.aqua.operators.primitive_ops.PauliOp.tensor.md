---
title: tensor
description: API reference for qiskit.aqua.operators.primitive_ops.PauliOp.tensor
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.primitive_ops.PauliOp.tensor
---

# tensor

<span id="qiskit.aqua.operators.primitive_ops.PauliOp.tensor" />

`PauliOp.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `OperatorBase` to tensor product with self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.

