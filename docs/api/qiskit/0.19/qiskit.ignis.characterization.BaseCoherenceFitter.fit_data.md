---
title: fit_data
description: API reference for qiskit.ignis.characterization.BaseCoherenceFitter.fit_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.characterization.BaseCoherenceFitter.fit_data
---

# fit\_data

<span id="qiskit.ignis.characterization.BaseCoherenceFitter.fit_data" />

`BaseCoherenceFitter.fit_data(qid=- 1, p0=None, bounds=None, series=None)`

Fit the curve.

Compute self.\_params and self.\_params\_err

**Parameters**

*   **qid** (`int`) – qubit for fitting. If -1 fit for all the qubits
*   **p0** (`Optional`\[`List`\[`float`]]) – initial guess, equivalent to p0 in scipy.optimize
*   **bounds** (`Optional`\[`Tuple`\[`List`\[`float`], `List`\[`float`]]]) – bounds, equivalent to bounds in scipy.optimize
*   **series** (`Optional`\[`str`]) – series to fit (if None fit all)

