# FermionicTransformation

<span id="undefined" />

`FermionicTransformation(transformation=<FermionicTransformationType.FULL: 'full'>, qubit_mapping=<FermionicQubitMappingType.PARITY: 'parity'>, two_qubit_reduction=True, freeze_core=False, orbital_reduction=None, z2symmetry_reduction=None)`

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

[**QiskitChemistryError**](qiskit.chemistry.QiskitChemistryError#qiskit.chemistry.QiskitChemistryError "qiskit.chemistry.QiskitChemistryError") – Invalid symmetry reduction

## Methods

|                                                                                                                                                                                                                                                                                                       |                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`build_hopping_operators`](qiskit.chemistry.transformations.FermionicTransformation.build_hopping_operators#qiskit.chemistry.transformations.FermionicTransformation.build_hopping_operators "qiskit.chemistry.transformations.FermionicTransformation.build_hopping_operators")                     | Builds the product of raising and lowering operators (basic excitation operators)                 |
| [`get_default_filter_criterion`](qiskit.chemistry.transformations.FermionicTransformation.get_default_filter_criterion#qiskit.chemistry.transformations.FermionicTransformation.get_default_filter_criterion "qiskit.chemistry.transformations.FermionicTransformation.get_default_filter_criterion") | Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. |
| [`interpret`](qiskit.chemistry.transformations.FermionicTransformation.interpret#qiskit.chemistry.transformations.FermionicTransformation.interpret "qiskit.chemistry.transformations.FermionicTransformation.interpret")                                                                             | Interprets an EigenstateResult in the context of this transformation.                             |
| [`transform`](qiskit.chemistry.transformations.FermionicTransformation.transform#qiskit.chemistry.transformations.FermionicTransformation.transform "qiskit.chemistry.transformations.FermionicTransformation.transform")                                                                             | Transformation from the `driver` to a qubit operator.                                             |

## Attributes

<span id="undefined" />

### commutation\_rule

Getter of the commutation rule

**Return type**

`bool`

<span id="undefined" />

### molecule\_info

Getter of the molecule information.

**Return type**

`Dict`\[`str`, `Any`]

<span id="undefined" />

### qubit\_mapping

Getter of the qubit mapping.

**Return type**

`str`

<span id="undefined" />

### untapered\_qubit\_op

Getter for the untapered qubit operator
