# BosonicTransformation

<span id="undefined" />

`BosonicTransformation(qubit_mapping=<BosonicQubitMappingType.DIRECT: 'direct'>, transformation_type=<BosonicTransformationType.HARMONIC: 'harmonic'>, basis_size=2, truncation=3)`

Bases: `qiskit.chemistry.transformations.transformation.Transformation`

A vibronic Hamiltonian operator representing the energy of the nuclei in the molecule

**Parameters**

*   **qubit\_mapping** (`BosonicQubitMappingType`) – a string giving the type of mapping (only the ‘direct’ mapping is implemented at this point)
*   **transformation\_type** (`BosonicTransformationType`) – a string giving the modal basis. The Hamiltonian is expressed in this basis.
*   **basis\_size** (`Union`\[`int`, `List`\[`int`]]) – define the number of modals per mode. If the number of modals is the same for each mode, then only an int is required. However, if the number of modals differ depending on the mode basis\_size should be a list of int, for example: \[3,4] means 2 modes: first mode has 3 modals, second mode has 4 modals.
*   **truncation** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

## Methods

|                                                                                                                                                                                                                                                                                                 |                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`build_hopping_operators`](qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators#qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators "qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators")                     | **type excitations**`Union`\[`str`, `List`\[`List`\[`int`]]]                                      |
| [`get_default_filter_criterion`](qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion#qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion "qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion") | Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. |
| [`interpret`](qiskit.chemistry.transformations.BosonicTransformation.interpret#qiskit.chemistry.transformations.BosonicTransformation.interpret "qiskit.chemistry.transformations.BosonicTransformation.interpret")                                                                             | Interprets an EigenstateResult in the context of this transformation.                             |
| [`transform`](qiskit.chemistry.transformations.BosonicTransformation.transform#qiskit.chemistry.transformations.BosonicTransformation.transform "qiskit.chemistry.transformations.BosonicTransformation.transform")                                                                             | Transformation to qubit operator from the driver                                                  |

## Attributes

<span id="undefined" />

### basis

returns the basis (number of modals per mode)

**Return type**

`Union`\[`int`, `List`\[`int`]]

<span id="undefined" />

### commutation\_rule

Getter of the commutation rule

**Return type**

`bool`

<span id="undefined" />

### num\_modes

the number of modes

**Type**

Returns

**Return type**

`int`

<span id="undefined" />

### untapered\_qubit\_op

Getter for the untapered qubit operator
