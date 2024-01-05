---
title: MinimumEigensolverResult
description: API reference for qiskit.algorithms.MinimumEigensolverResult
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.MinimumEigensolverResult
---

# qiskit.algorithms.MinimumEigensolverResult

<span id="qiskit.algorithms.MinimumEigensolverResult" />

`MinimumEigensolverResult`

Minimum Eigensolver Result.

### \_\_init\_\_

<span id="qiskit.algorithms.MinimumEigensolverResult.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### aux\_operator\_eigenvalues

<span id="qiskit.algorithms.MinimumEigensolverResult.aux_operator_eigenvalues" />

`property aux_operator_eigenvalues`

return aux operator eigen values

**Return type**

`Optional`\[`ndarray`]

### combine

<span id="qiskit.algorithms.MinimumEigensolverResult.combine" />

`combine(result)`

Any property from the argument that exists in the receiver is updated. :type result: `AlgorithmResult` :param result: Argument result with properties to be set.

**Raises**

**TypeError** – Argument is None

**Return type**

`None`

### eigenstate

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenstate" />

`property eigenstate`

return eigen state

**Return type**

`Optional`\[`ndarray`]

### eigenvalue

<span id="qiskit.algorithms.MinimumEigensolverResult.eigenvalue" />

`property eigenvalue`

returns eigen value

**Return type**

`Optional`\[`complex`]

