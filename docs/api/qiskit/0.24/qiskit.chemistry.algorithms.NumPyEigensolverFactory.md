---
title: NumPyEigensolverFactory
description: API reference for qiskit.chemistry.algorithms.NumPyEigensolverFactory
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.NumPyEigensolverFactory
---

<span id="qiskit-chemistry-algorithms-numpyeigensolverfactory" />

# qiskit.chemistry.algorithms.NumPyEigensolverFactory

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory" />

`NumPyEigensolverFactory(filter_criterion=None, k=100, use_default_filter_criterion=False)`

A factory to construct a NumPyEigensolver.

**Parameters**

*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.
*   **use\_default\_filter\_criterion** (`bool`) – Whether to use default filter criteria or not
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **use\_default\_filter\_criterion** – whether to use the transformation’s default filter criterion if `filter_criterion` is `None`.

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory.__init__" />

`__init__(filter_criterion=None, k=100, use_default_filter_criterion=False)`

**Parameters**

*   **filter\_criterion** (`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]) – callable that allows to filter eigenvalues/eigenstates. The minimum eigensolver is only searching over feasible states and returns an eigenstate that has the smallest eigenvalue among feasible states. The callable has the signature filter(eigenstate, eigenvalue, aux\_values) and must return a boolean to indicate whether to consider this value or not. If there is no feasible element, the result can even be empty.
*   **use\_default\_filter\_criterion** (`bool`) – Whether to use default filter criteria or not
*   **k** (`int`) – How many eigenvalues are to be computed, has a min. value of 1.
*   **use\_default\_filter\_criterion** – whether to use the transformation’s default filter criterion if `filter_criterion` is `None`.

## Methods

## Attributes

### filter\_criterion

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory.filter_criterion" />

`property filter_criterion`

returns filter criterion

**Return type**

`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]

### get\_solver

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory.get_solver" />

`get_solver(transformation)`

Returns a NumPyEigensolver with the desired filter

**Parameters**

**transformation** (`Transformation`) – a fermionic/bosonic qubit operator transformation.

**Return type**

`Eigensolver`

**Returns**

A NumPyEigensolver suitable to compute the ground state of the molecule transformed by `transformation`.

### k

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory.k" />

`property k`

returns k (number of eigenvalues requested)

**Return type**

`int`

### use\_default\_filter\_criterion

<span id="qiskit.chemistry.algorithms.NumPyEigensolverFactory.use_default_filter_criterion" />

`property use_default_filter_criterion`

returns whether to use the default filter criterion

**Return type**

`bool`

