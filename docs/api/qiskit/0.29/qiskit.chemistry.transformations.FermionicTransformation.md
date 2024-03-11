---
title: FermionicTransformation
description: API reference for qiskit.chemistry.transformations.FermionicTransformation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.transformations.FermionicTransformation
---

# FermionicTransformation

<span id="qiskit.chemistry.transformations.FermionicTransformation" />

`FermionicTransformation(transformation=<FermionicTransformationType.FULL: 'full'>, qubit_mapping=<FermionicQubitMappingType.PARITY: 'parity'>, two_qubit_reduction=True, freeze_core=False, orbital_reduction=None, z2symmetry_reduction=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/chemistry/transformations/fermionic_transformation.py "view source code")

Bases: `qiskit.chemistry.transformations.transformation.Transformation`

A transformation from a fermionic problem, represented by a driver, to a qubit operator.

**Parameters**

*   **transformation** (`FermionicTransformationType`) – full or particle\_hole
*   **qubit\_mapping** (`FermionicQubitMappingType`) – ‘jordan\_wigner’, ‘parity’ or ‘bravyi\_kitaev’
*   **two\_qubit\_reduction** (`bool`) – Whether two qubit reduction should be used, when parity mapping only
*   **freeze\_core** (`bool`) – Whether to freeze core orbitals when possible
*   **orbital\_reduction** (`Optional`\[`List`\[`int`]]) – Orbital list to be frozen or removed
*   **z2symmetry\_reduction** (`Union`\[`str`, `List`\[`int`], `None`]) – If z2 symmetry reduction should be applied to resulting qubit operators that are computed. For each symmetry detected the operator will be split in two where each requires one qubit less for computation. So for example 3 symmetries will split in the original operator into 8 new operators each requiring 3 less qubits. Now only one of these operators will have the ground state and be the correct symmetry sector needed for the ground state. Setting ‘auto’ will use an automatic computation of the correct sector. If from other experiments, with the z2symmetry logic, the sector is known, then the tapering values of that sector can be provided (a list of int of values -1, and 1). The default is None meaning no symmetry reduction is done. Note that dipole and other operators such as spin, num particles etc are also symmetry reduced according to the symmetries found in the main operator if this operator commutes with the main operator symmetry. If it does not then the operator will be discarded since no meaningful measurement can take place.

**Raises**

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid symmetry reduction

## Methods

### build\_hopping\_operators

<span id="qiskit.chemistry.transformations.FermionicTransformation.build_hopping_operators" />

`FermionicTransformation.build_hopping_operators(excitations='sd')`

Builds the product of raising and lowering operators (basic excitation operators)

**Parameters**

**excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) – The excitations to be included in the eom pseudo-eigenvalue problem. If a string (‘s’, ‘d’ or ‘sd’) then all excitations of the given type will be used. Otherwise a list of custom excitations can directly be provided.

**Return type**

`Tuple`\[`Dict`\[`str`, `WeightedPauliOperator`], `Dict`\[`str`, `List`\[`bool`]], `Dict`\[`str`, `List`\[`Any`]]]

**Returns**

A tuple containing the hopping operators, the types of commutativities and the excitation indices.

### get\_default\_filter\_criterion

<span id="qiskit.chemistry.transformations.FermionicTransformation.get_default_filter_criterion" />

`FermionicTransformation.get_default_filter_criterion()`

Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. For more information see also aqua.algorithms.eigen\_solvers.NumPyEigensolver.filter\_criterion.

In the fermionic case the default filter ensures that the number of particles is being preserved.

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

### interpret

<span id="qiskit.chemistry.transformations.FermionicTransformation.interpret" />

`FermionicTransformation.interpret(raw_result)`

Interprets an EigenstateResult in the context of this transformation.

**Parameters**

**raw\_result** (`Union`\[`EigenstateResult`, `EigensolverResult`, `MinimumEigensolverResult`]) – an eigenstate result object.

**Return type**

`ElectronicStructureResult`

**Returns**

An electronic structure result.

### transform

<span id="qiskit.chemistry.transformations.FermionicTransformation.transform" />

`FermionicTransformation.transform(driver, aux_operators=None)`

Transformation from the `driver` to a qubit operator.

**Parameters**

*   **driver** (`BaseDriver`) – A driver encoding the molecule information.
*   **aux\_operators** (`Optional`\[`List`\[`FermionicOperator`]]) – Additional auxiliary `FermionicOperator` instances to evaluate.

**Return type**

`Tuple`\[`OperatorBase`, `List`\[`OperatorBase`]]

**Returns**

A qubit operator and a dictionary of auxiliary operators.

## Attributes

<span id="qiskit.chemistry.transformations.FermionicTransformation.commutation_rule" />

### commutation\_rule

Getter of the commutation rule

**Return type**

`bool`

<span id="qiskit.chemistry.transformations.FermionicTransformation.molecule_info" />

### molecule\_info

Getter of the molecule information.

**Return type**

`Dict`\[`str`, `Any`]

<span id="qiskit.chemistry.transformations.FermionicTransformation.qubit_mapping" />

### qubit\_mapping

Getter of the qubit mapping.

**Return type**

`str`

<span id="qiskit.chemistry.transformations.FermionicTransformation.untapered_qubit_op" />

### untapered\_qubit\_op

Getter for the untapered qubit operator

