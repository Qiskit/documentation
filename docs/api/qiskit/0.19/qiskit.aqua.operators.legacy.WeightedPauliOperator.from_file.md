---
title: from_file
description: API reference for qiskit.aqua.operators.legacy.WeightedPauliOperator.from_file
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.aqua.operators.legacy.WeightedPauliOperator.from_file
---

# from\_file

<span id="qiskit.aqua.operators.legacy.WeightedPauliOperator.from_file" />

`classmethod WeightedPauliOperator.from_file(file_name, before_04=False)`

Load paulis in a file to construct an Operator.

**Parameters**

*   **file\_name** (*str*) – path to the file, which contains a list of Paulis and coefficients.
*   **before\_04** (*bool*) – support the format before Aqua 0.4.

**Returns**

the loaded operator.

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

