---
title: BosonicTransformation
description: API reference for qiskit.chemistry.transformations.BosonicTransformation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.transformations.BosonicTransformation
---

# BosonicTransformation

<span id="qiskit.chemistry.transformations.BosonicTransformation" />

`BosonicTransformation(qubit_mapping=<BosonicQubitMappingType.DIRECT: 'direct'>, transformation_type=<BosonicTransformationType.HARMONIC: 'harmonic'>, basis_size=2, truncation=3)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/transformations/bosonic_transformation.py "view source code")

Bases: `qiskit.chemistry.transformations.transformation.Transformation`

A vibronic Hamiltonian operator representing the energy of the nuclei in the molecule

**Parameters**

*   **qubit\_mapping** (`BosonicQubitMappingType`) – a string giving the type of mapping (only the ‘direct’ mapping is implemented at this point)
*   **transformation\_type** (`BosonicTransformationType`) – a string giving the modal basis. The Hamiltonian is expressed in this basis.
*   **basis\_size** (`Union`\[`int`, `List`\[`int`]]) – define the number of modals per mode. If the number of modals is the same for each mode, then only an int is required. However, if the number of modals differ depending on the mode basis\_size should be a list of int, for example: \[3,4] means 2 modes: first mode has 3 modals, second mode has 4 modals.
*   **truncation** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

## Methods

### build\_hopping\_operators

<span id="qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators" />

`BosonicTransformation.build_hopping_operators(excitations='sd')`

**Parameters**

**excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) –

**Return type**

`Tuple`\[`Dict`\[`str`, `WeightedPauliOperator`], `Dict`, `Dict`\[`str`, `List`\[`List`\[`int`]]]]

**Returns**

Dict of hopping operators, dict of commutativity types and dict of excitation indices

### get\_default\_filter\_criterion

<span id="qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion" />

`BosonicTransformation.get_default_filter_criterion()`

Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. For more information see also aqua.algorithms.eigen\_solvers.NumPyEigensolver.filter\_criterion. In the fermionic case the default filter ensures that the number of particles is being preserved.

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

### interpret

<span id="qiskit.chemistry.transformations.BosonicTransformation.interpret" />

`BosonicTransformation.interpret(raw_result)`

Interprets an EigenstateResult in the context of this transformation.

**Parameters**

**raw\_result** (`Union`\[`EigenstateResult`, `EigensolverResult`, `MinimumEigensolverResult`]) – an eigenstate result object.

**Return type**

`VibronicStructureResult`

**Returns**

An vibronic structure result.

### transform

<span id="qiskit.chemistry.transformations.BosonicTransformation.transform" />

`BosonicTransformation.transform(driver, aux_operators=None)`

Transformation to qubit operator from the driver

**Parameters**

*   **driver** (`BaseDriver`) – BaseDriver
*   **aux\_operators** (`Optional`\[`List`\[`Any`]]) – Optional additional aux ops to evaluate

**Return type**

`Tuple`\[`WeightedPauliOperator`, `List`\[`WeightedPauliOperator`]]

**Returns**

qubit operator, auxiliary operators

## Attributes

<span id="qiskit.chemistry.transformations.BosonicTransformation.basis" />

### basis

returns the basis (number of modals per mode)

**Return type**

`Union`\[`int`, `List`\[`int`]]

<span id="qiskit.chemistry.transformations.BosonicTransformation.commutation_rule" />

### commutation\_rule

Getter of the commutation rule

**Return type**

`bool`

<span id="qiskit.chemistry.transformations.BosonicTransformation.num_modes" />

### num\_modes

the number of modes

**Type**

Returns

**Return type**

`int`

<span id="qiskit.chemistry.transformations.BosonicTransformation.untapered_qubit_op" />

### untapered\_qubit\_op

Getter for the untapered qubit operator

