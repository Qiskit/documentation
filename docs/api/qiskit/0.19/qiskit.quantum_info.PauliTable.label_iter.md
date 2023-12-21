---
title: label_iter
description: API reference for qiskit.quantum_info.PauliTable.label_iter
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.quantum_info.PauliTable.label_iter
---

# label\_iter

<span id="qiskit.quantum_info.PauliTable.label_iter" />

`PauliTable.label_iter()`

Return a label representation iterator.

This is a lazy iterator that converts each row into the string label only as it is used. To convert the entire table to labels use the [`to_labels()`](qiskit.quantum_info.PauliTable.to_labels "qiskit.quantum_info.PauliTable.to_labels") method.

**Returns**

label iterator object for the PauliTable.

**Return type**

LabelIterator

