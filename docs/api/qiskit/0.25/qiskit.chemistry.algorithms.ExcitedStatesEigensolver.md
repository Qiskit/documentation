# qiskit.chemistry.algorithms.ExcitedStatesEigensolver

<span id="undefined" />

`ExcitedStatesEigensolver(transformation, solver)`

The calculation of excited states via an Eigensolver algorithm

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`Eigensolver`, `EigensolverFactory`]) – Minimum Eigensolver or MESFactory object.

<span id="undefined" />

`__init__(transformation, solver)`

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`Eigensolver`, `EigensolverFactory`]) – Minimum Eigensolver or MESFactory object.

## Methods

|                                                                                                                                                                      |                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.ExcitedStatesEigensolver.__init__ "qiskit.chemistry.algorithms.ExcitedStatesEigensolver.__init__")(transformation, solver) | **type transformation**`Transformation`       |
| [`solve`](#qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solve "qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solve")(driver\[, aux\_operators])       | Compute Ground and Excited States properties. |

## Attributes

|                                                                                                                                                                |                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`solver`](#qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solver "qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solver")                         | Returns the minimum eigensolver or factory.                                   |
| [`transformation`](#qiskit.chemistry.algorithms.ExcitedStatesEigensolver.transformation "qiskit.chemistry.algorithms.ExcitedStatesEigensolver.transformation") | Returns the transformation used to obtain a qubit operator from the molecule. |

<span id="undefined" />

`solve(driver, aux_operators=None)`

Compute Ground and Excited States properties.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Optional`\[`List`\[`Any`]]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Raises**

**NotImplementedError** – If an operator in `aux_operators` is not of type `FermionicOperator`.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An eigenstate result. Depending on the transformation this can be an electronic structure or bosonic result.

<span id="undefined" />

`property solver`

Returns the minimum eigensolver or factory.

**Return type**

`Union`\[`Eigensolver`, `EigensolverFactory`]

<span id="undefined" />

`property transformation`

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
