# GroundStateEigensolver

<span id="undefined" />

`GroundStateEigensolver(transformation, solver)`

Bases: `qiskit.chemistry.algorithms.ground_state_solvers.ground_state_solver.GroundStateSolver`

Ground state computation using a minimum eigensolver.

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]) – Minimum Eigensolver or MESFactory object, e.g. the VQEUCCSDFactory.

## Methods

|                                                                                                                                                                                                                                                 |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`evaluate_operators`](qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators#qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators "qiskit.chemistry.algorithms.GroundStateEigensolver.evaluate_operators")     | Evaluates additional operators at the given state.                            |
| [`returns_groundstate`](qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate#qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate "qiskit.chemistry.algorithms.GroundStateEigensolver.returns_groundstate") | Whether the eigensolver returns the ground state or only ground state energy. |
| [`solve`](qiskit.chemistry.algorithms.GroundStateEigensolver.solve#qiskit.chemistry.algorithms.GroundStateEigensolver.solve "qiskit.chemistry.algorithms.GroundStateEigensolver.solve")                                                         | Compute Ground State properties.                                              |

## Attributes

<span id="undefined" />

### solver

Returns the minimum eigensolver or factory.

**Return type**

`Union`\[`MinimumEigensolver`, `MinimumEigensolverFactory`]

<span id="undefined" />

### transformation

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
