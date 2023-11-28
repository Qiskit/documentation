# qiskit.chemistry.transformations.BosonicTransformation

<span id="undefined" />

`BosonicTransformation(qubit_mapping=<BosonicQubitMappingType.DIRECT: 'direct'>, transformation_type=<BosonicTransformationType.HARMONIC: 'harmonic'>, basis_size=2, truncation=3)`

A vibronic Hamiltonian operator representing the energy of the nuclei in the molecule

**Parameters**

*   **qubit\_mapping** (`BosonicQubitMappingType`) – a string giving the type of mapping (only the ‘direct’ mapping is implemented at this point)
*   **transformation\_type** (`BosonicTransformationType`) – a string giving the modal basis. The Hamiltonian is expressed in this basis.
*   **basis\_size** (`Union`\[`int`, `List`\[`int`]]) – define the number of modals per mode. If the number of modals is the same for each mode, then only an int is required. However, if the number of modals differ depending on the mode basis\_size should be a list of int, for example: \[3,4] means 2 modes: first mode has 3 modals, second mode has 4 modals.
*   **truncation** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

<span id="undefined" />

`__init__(qubit_mapping=<BosonicQubitMappingType.DIRECT: 'direct'>, transformation_type=<BosonicTransformationType.HARMONIC: 'harmonic'>, basis_size=2, truncation=3)`

**Parameters**

*   **qubit\_mapping** (`BosonicQubitMappingType`) – a string giving the type of mapping (only the ‘direct’ mapping is implemented at this point)
*   **transformation\_type** (`BosonicTransformationType`) – a string giving the modal basis. The Hamiltonian is expressed in this basis.
*   **basis\_size** (`Union`\[`int`, `List`\[`int`]]) – define the number of modals per mode. If the number of modals is the same for each mode, then only an int is required. However, if the number of modals differ depending on the mode basis\_size should be a list of int, for example: \[3,4] means 2 modes: first mode has 3 modals, second mode has 4 modals.
*   **truncation** (`int`) – where is the Hamiltonian expansion truncation (1 for having only 1-body terms, 2 for having on 1- and 2-body terms…)

## Methods

|                                                                                                                                                                                                                |                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.transformations.BosonicTransformation.__init__ "qiskit.chemistry.transformations.BosonicTransformation.__init__")(\[qubit\_mapping, …])                                         | **type qubit\_mapping**`BosonicQubitMappingType`                                                  |
| [`build_hopping_operators`](#qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators "qiskit.chemistry.transformations.BosonicTransformation.build_hopping_operators")(\[excitations])  | **type excitations**`Union`\[`str`, `List`\[`List`\[`int`]]]                                      |
| [`get_default_filter_criterion`](#qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion "qiskit.chemistry.transformations.BosonicTransformation.get_default_filter_criterion")() | Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. |
| [`interpret`](#qiskit.chemistry.transformations.BosonicTransformation.interpret "qiskit.chemistry.transformations.BosonicTransformation.interpret")(raw\_result)                                               | Interprets an EigenstateResult in the context of this transformation.                             |
| [`transform`](#qiskit.chemistry.transformations.BosonicTransformation.transform "qiskit.chemistry.transformations.BosonicTransformation.transform")(driver\[, aux\_operators])                                 | Transformation to qubit operator from the driver                                                  |

## Attributes

|                                                                                                                                                                                |                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------- |
| [`basis`](#qiskit.chemistry.transformations.BosonicTransformation.basis "qiskit.chemistry.transformations.BosonicTransformation.basis")                                        | returns the basis (number of modals per mode) |
| [`commutation_rule`](#qiskit.chemistry.transformations.BosonicTransformation.commutation_rule "qiskit.chemistry.transformations.BosonicTransformation.commutation_rule")       | Getter of the commutation rule                |
| [`num_modes`](#qiskit.chemistry.transformations.BosonicTransformation.num_modes "qiskit.chemistry.transformations.BosonicTransformation.num_modes")                            | the number of modes                           |
| [`untapered_qubit_op`](#qiskit.chemistry.transformations.BosonicTransformation.untapered_qubit_op "qiskit.chemistry.transformations.BosonicTransformation.untapered_qubit_op") | Getter for the untapered qubit operator       |

<span id="undefined" />

`property basis`

returns the basis (number of modals per mode)

**Return type**

`Union`\[`int`, `List`\[`int`]]

<span id="undefined" />

`build_hopping_operators(excitations='sd')`

**Parameters**

**excitations** (`Union`\[`str`, `List`\[`List`\[`int`]]]) –

**Return type**

`Tuple`\[`Dict`\[`str`, `WeightedPauliOperator`], `Dict`, `Dict`\[`str`, `List`\[`List`\[`int`]]]]

**Returns**

Dict of hopping operators, dict of commutativity types and dict of excitation indices

<span id="undefined" />

`property commutation_rule`

Getter of the commutation rule

**Return type**

`bool`

<span id="undefined" />

`get_default_filter_criterion()`

Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. For more information see also aqua.algorithms.eigen\_solvers.NumPyEigensolver.filter\_criterion. In the fermionic case the default filter ensures that the number of particles is being preserved.

**Return type**

`Optional`\[`Callable`\[\[`Union`\[`List`, `ndarray`], `float`, `Optional`\[`List`\[`float`]]], `bool`]]

<span id="undefined" />

`interpret(raw_result)`

Interprets an EigenstateResult in the context of this transformation.

**Parameters**

**raw\_result** (`Union`\[`EigenstateResult`, `EigensolverResult`, `MinimumEigensolverResult`]) – an eigenstate result object.

**Return type**

`VibronicStructureResult`

**Returns**

An vibronic structure result.

<span id="undefined" />

`property num_modes`

the number of modes

**Type**

Returns

**Return type**

`int`

<span id="undefined" />

`transform(driver, aux_operators=None)`

Transformation to qubit operator from the driver

**Parameters**

*   **driver** (`BaseDriver`) – BaseDriver
*   **aux\_operators** (`Optional`\[`List`\[`Any`]]) – Optional additional aux ops to evaluate

**Return type**

`Tuple`\[`WeightedPauliOperator`, `List`\[`WeightedPauliOperator`]]

**Returns**

qubit operator, auxiliary operators

<span id="undefined" />

`property untapered_qubit_op`

Getter for the untapered qubit operator
