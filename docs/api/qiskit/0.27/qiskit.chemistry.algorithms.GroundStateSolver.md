# qiskit.chemistry.algorithms.GroundStateSolver

<span id="undefined" />

`GroundStateSolver(transformation)`

The ground state calculation interface

**Parameters**

**transformation** (`Transformation`) – transformation from driver to qubit operator (and aux. operators)

<span id="undefined" />

`__init__(transformation)`

**Parameters**

**transformation** (`Transformation`) – transformation from driver to qubit operator (and aux. operators)

## Methods

|                                                                                                                                                                                |                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.GroundStateSolver.__init__ "qiskit.chemistry.algorithms.GroundStateSolver.__init__")(transformation)                                 | **type transformation**`Transformation`                                                  |
| [`evaluate_operators`](#qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators "qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators")(state, operators) | Evaluates additional operators at the given state.                                       |
| [`returns_groundstate`](#qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate "qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate")()              | Whether this class returns only the ground state energy or also the ground state itself. |
| [`solve`](#qiskit.chemistry.algorithms.GroundStateSolver.solve "qiskit.chemistry.algorithms.GroundStateSolver.solve")(driver\[, aux\_operators])                               | Compute the ground state energy of the molecule that was supplied via the driver.        |

## Attributes

|                                                                                                                                                  |                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`transformation`](#qiskit.chemistry.algorithms.GroundStateSolver.transformation "qiskit.chemistry.algorithms.GroundStateSolver.transformation") | Returns the transformation used to obtain a qubit operator from the molecule. |

<span id="undefined" />

`abstract evaluate_operators(state, operators)`

Evaluates additional operators at the given state.

**Parameters**

*   **state** (`Union`\[`str`, `dict`, `Result`, `list`, `ndarray`, `Statevector`, `QuantumCircuit`, `Instruction`, `OperatorBase`]) – any kind of input that can be used to specify a state. See also `StateFn` for more details.
*   **operators** (`Union`\[`WeightedPauliOperator`, `OperatorBase`, `list`, `dict`]) – either a single, list or dictionary of `WeightedPauliOperator``s or any kind of operator implementing the ``OperatorBase`.

**Return type**

`Union`\[`float`, `List`\[`float`], `Dict`\[`str`, `List`\[`float`]]]

**Returns**

The expectation value of the given operator(s). The return type will be identical to the format of the provided operators.

<span id="undefined" />

`abstract returns_groundstate()`

Whether this class returns only the ground state energy or also the ground state itself.

**Return type**

`bool`

**Returns**

True, if this class also returns the ground state in the results object. False otherwise.

<span id="undefined" />

`abstract solve(driver, aux_operators=None)`

Compute the ground state energy of the molecule that was supplied via the driver.

**Parameters**

*   **driver** (`BaseDriver`) – a chemistry driver object which defines the chemical problem that is to be solved by this calculation.
*   **aux\_operators** (`Union`\[`List`\[`FermionicOperator`], `List`\[`BosonicOperator`], `None`]) – Additional auxiliary operators to evaluate. Must be of type `FermionicOperator` if the qubit transformation is fermionic and of type `BosonicOperator` it is bosonic.

**Return type**

`Union`\[`ElectronicStructureResult`, `VibronicStructureResult`]

**Returns**

An eigenstate result.

<span id="undefined" />

`property transformation`

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
