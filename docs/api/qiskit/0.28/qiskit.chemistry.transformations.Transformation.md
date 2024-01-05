---
title: Transformation
description: API reference for qiskit.chemistry.transformations.Transformation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.transformations.Transformation
---

# qiskit.chemistry.transformations.Transformation

<span id="qiskit.chemistry.transformations.Transformation" />

`Transformation`

Base class for transformation to qubit operators for chemistry problems

### \_\_init\_\_

<span id="qiskit.chemistry.transformations.Transformation.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### build\_hopping\_operators

<span id="qiskit.chemistry.transformations.Transformation.build_hopping_operators" />

`abstract build_hopping_operators(excitations='sd')`

Builds the product of raising and lowering operators (basic excitation operators)

**Parameters**

**excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

Returns:

**Return type**

`Tuple`\[`Dict`\[`str`, `WeightedPauliOperator`], `Dict`\[`str`, `List`\[`bool`]], `Dict`\[`str`, `List`\[`Any`]]]

### commutation\_rule

<span id="qiskit.chemistry.transformations.Transformation.commutation_rule" />

`abstract property commutation_rule`

Getter of the commutation rule

**Return type**

`bool`

### get\_default\_filter\_criterion

<span id="qiskit.chemistry.transformations.Transformation.get_default_filter_criterion" />

`get_default_filter_criterion()`

Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. For more information see also aqua.algorithms.eigen\_solvers.NumPyEigensolver.filter\_criterion.

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

### interpret

<span id="qiskit.chemistry.transformations.Transformation.interpret" />

`abstract interpret(raw_result)`

Interprets an EigenstateResult in the context of this transformation.

**Parameters**

**raw\_result** (`Union`\[`EigenstateResult`, `EigensolverResult`, `MinimumEigensolverResult`]) – an eigenstate result object.

**Return type**

`EigenstateResult`

**Returns**

An “interpreted” eigenstate result.

### transform

<span id="qiskit.chemistry.transformations.Transformation.transform" />

`abstract transform(driver, aux_operators=None)`

Transformation from the `driver` to a qubit operator.

**Parameters**

*   **driver** (`BaseDriver`) – A driver encoding the molecule information.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Tuple`\[`OperatorBase`, `List`\[`OperatorBase`]]

**Returns**

A qubit operator and a dictionary of auxiliary operators.

