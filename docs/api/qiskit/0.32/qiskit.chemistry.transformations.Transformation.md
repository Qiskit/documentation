# Transformation

<span id="undefined" />

`Transformation`

Bases: `abc.ABC`

Base class for transformation to qubit operators for chemistry problems

## Methods

|                                                                                                                                                                                                                                                                            |                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`build_hopping_operators`](qiskit.chemistry.transformations.Transformation.build_hopping_operators#qiskit.chemistry.transformations.Transformation.build_hopping_operators "qiskit.chemistry.transformations.Transformation.build_hopping_operators")                     | Builds the product of raising and lowering operators (basic excitation operators)                 |
| [`get_default_filter_criterion`](qiskit.chemistry.transformations.Transformation.get_default_filter_criterion#qiskit.chemistry.transformations.Transformation.get_default_filter_criterion "qiskit.chemistry.transformations.Transformation.get_default_filter_criterion") | Returns a default filter criterion method to filter the eigenvalues computed by the eigen solver. |
| [`interpret`](qiskit.chemistry.transformations.Transformation.interpret#qiskit.chemistry.transformations.Transformation.interpret "qiskit.chemistry.transformations.Transformation.interpret")                                                                             | Interprets an EigenstateResult in the context of this transformation.                             |
| [`transform`](qiskit.chemistry.transformations.Transformation.transform#qiskit.chemistry.transformations.Transformation.transform "qiskit.chemistry.transformations.Transformation.transform")                                                                             | Transformation from the `driver` to a qubit operator.                                             |

## Attributes

<span id="undefined" />

### commutation\_rule

Getter of the commutation rule

**Return type**

`bool`
