---
title: fit_data
description: API reference for qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data
---

# fit\_data

<span id="qiskit.ignis.verification.CNOTDihedralRBFitter.fit_data" />

`CNOTDihedralRBFitter.fit_data()`

Fit the non-Clifford cnot-dihedral RB results.

Fit each of the patterns. According to the paper:

[Scalable randomized benchmarking of non-Clifford gates](https://www.nature.com/articles/npjqi201612)

**Returns**

A list of dictionaries where each dictionary corresponds to a pattern and has fields:

> *   `alpha` - alpha parameter of the non-Clifford cnot-dihedral RB.
> *   `'alpha_err` - the error of the alpha parameter of the non-Clifford cnot-dihedral RB.
> *   `epg_est` - the estimated error per a CNOT-dihedral element.
> *   `epg_est_error` - the estimated error derived from the params\_err.

**Return type**

list

