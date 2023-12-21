---
title: compose
description: API reference for qiskit.aqua.operators.primitive_ops.MatrixOp.compose
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.primitive_ops.MatrixOp.compose
---

# compose

<span id="qiskit.aqua.operators.primitive_ops.MatrixOp.compose" />

`MatrixOp.compose(other)`

Return Operator Composition between self and other (linear algebra-style: A\@B(x) = A(B(x))), overloaded by `@`.

Note: You must be conscious of Quantum Circuit vs. Linear Algebra ordering conventions. Meaning, X.compose(Y) produces an X∘Y on qubit 0, but would produce a QuantumCircuit which looks like

> -\[Y]-\[X]-

Because Terra prints circuits with the initial state at the left side of the circuit.

**Parameters**

**other** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `OperatorBase` with which to compose self.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

An `OperatorBase` equivalent to the function composition of self and other.

