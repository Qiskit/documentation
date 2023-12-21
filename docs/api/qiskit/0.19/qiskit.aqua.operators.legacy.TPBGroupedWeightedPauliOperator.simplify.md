---
title: simplify
description: API reference for qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.simplify
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.simplify
---

# simplify

<span id="qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.simplify" />

`TPBGroupedWeightedPauliOperator.simplify(copy=False)`

Merge the paulis whose bases are identical and the pauli with zero coefficient would be removed.

<Admonition title="Note" type="note">
  This behavior of this method is slightly changed, it will remove the paulis whose weights are zero.
</Admonition>

**Parameters**

**copy** (*bool*) – simplify on a copy or self

**Returns**

the simplified operator

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

