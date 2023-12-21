---
title: sorted_grouping
description: API reference for qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.sorted_grouping
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.sorted_grouping
---

# sorted\_grouping

<span id="qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator.sorted_grouping" />

`classmethod TPBGroupedWeightedPauliOperator.sorted_grouping(weighted_pauli_operator, method='largest-degree')`

Largest-Degree First Coloring for grouping paulis.

**Parameters**

*   **weighted\_pauli\_operator** ([*WeightedPauliOperator*](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")) – the to-be-grouped weighted pauli operator.
*   **method** (*str*) – only largest-degree is available now.

**Returns**

operator

**Return type**

[TPBGroupedWeightedPauliOperator](qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator "qiskit.aqua.operators.legacy.TPBGroupedWeightedPauliOperator")

