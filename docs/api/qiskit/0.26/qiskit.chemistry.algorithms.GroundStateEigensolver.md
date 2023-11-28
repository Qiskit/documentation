# qiskit.chemistry.algorithms.GroundStateEigensolver

<span id="undefined" />

`GroundStateEigensolver(transformation, solver)`

Ground state computation using a minimum eigensolver.

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]) – Minimum Eigensolver or MESFactory object, e.g. the VQEUCCSDFactory.

<span id="undefined" />

`__init__(transformation, solver)`

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]) – Minimum Eigensolver or MESFactory object, e.g. the VQEUCCSDFactory.

## Methods

|                                                                                                                                                                                          |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.GroundStateEigensolver.__init__ "qiskit.chemistry.algorithms.GroundStateEigensolver.__init__")(transformation, solver)                         | **type transformation**`Transformation`                                       |
| [`evaluate_operators`](#qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators "qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators")(state, operators) | Evaluates additional operators at the given state.                            |
| [`returns_groundstate`](#qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate "qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate")()              | Whether the eigensolver returns the ground state or only ground state energy. |
| [`solve`](#qiskit.chemistry.algorithms.GroundStateEigensolver.solve "qiskit.chemistry.algorithms.GroundStateEigensolver.solve")(driver\[, aux\_operators])                               | Compute Ground State properties.                                              |

## Attributes

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`solver`](#qiskit.chemistry.algorithms.GroundStateEigensolver.solver "qiskit.chemistry.algorithms.GroundStateEigensolver.solver")                         | Returns the minimum eigensolver or factory.                                   |
| [`transformation`](#qiskit.chemistry.algorithms.GroundStateEigensolver.transformation "qiskit.chemistry.algorithms.GroundStateEigensolver.transformation") | Returns the transformation used to obtain a qubit operator from the molecule. |

<span id="undefined" />

`evaluate_operators(state, operators)`

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `None`, `List`\[`Optional`\[`float`]], `Dict`\[`str`, `List`\[`Optional`\[`float`]]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.

<span id="undefined" />

`returns_groundstate()`

Whether the eigensolver returns the ground state or only ground state energy.

**Return type**

`bool`

<span id="undefined" />

`solve(driver, aux_operators=None)`

Compute Ground State properties.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate at the ground state. Depending on whether a fermionic or bosonic system is solved, the type of the operators must be `FermionicOperator` or `BosonicOperator`, respectively.

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

`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]

<span id="undefined" />

`property transformation`

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
