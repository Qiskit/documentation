# GroundStateSolver

<span id="undefined" />

`GroundStateSolver(transformation)`

Bases: `abc.ABC`

The ground state calculation interface

**Parameters**

**transformation** (`Transformation`) – transformation from driver to qubit operator (and aux. operators)

## Methods

|                                                                                                                                                                                                                                  |                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| [`evaluate_operators`](qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators#qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators "qiskit.chemistry.algorithms.GroundStateSolver.evaluate_operators")     | Evaluates additional operators at the given state.                                       |
| [`returns_groundstate`](qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate#qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate "qiskit.chemistry.algorithms.GroundStateSolver.returns_groundstate") | Whether this class returns only the ground state energy or also the ground state itself. |
| [`solve`](qiskit.chemistry.algorithms.GroundStateSolver.solve#qiskit.chemistry.algorithms.GroundStateSolver.solve "qiskit.chemistry.algorithms.GroundStateSolver.solve")                                                         | Compute the ground state energy of the molecule that was supplied via the driver.        |

## Attributes

<span id="undefined" />

### transformation

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
