---
title: subset_fitter
description: API reference for qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter
---

# subset\_fitter

<span id="qiskit.ignis.mitigation.CompleteMeasFitter.subset_fitter" />

`CompleteMeasFitter.subset_fitter(qubit_sublist=None)`

Return a fitter object that is a subset of the qubits in the original list.

**Parameters**

**qubit\_sublist** (*list*) – must be a subset of qubit\_list

**Returns**

**A new fitter that has the calibration for a**

subset of qubits

**Return type**

[CompleteMeasFitter](qiskit.ignis.mitigation.CompleteMeasFitter "qiskit.ignis.mitigation.CompleteMeasFitter")

**Raises**

**QiskitError** – If the calibration matrix is not initialized

