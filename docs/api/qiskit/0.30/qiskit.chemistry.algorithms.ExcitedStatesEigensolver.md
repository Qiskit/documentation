# ExcitedStatesEigensolver

<span id="undefined" />

`ExcitedStatesEigensolver(transformation, solver)`

Bases: `qiskit.chemistry.algorithms.excited_states_solvers.excited_states_solver.ExcitedStatesSolver`

The calculation of excited states via an Eigensolver algorithm

**Parameters**

*   **transformation** (`Transformation`) – Qubit Operator Transformation
*   **solver** (`Union`\[`Eigensolver`, `EigensolverFactory`]) – Minimum Eigensolver or MESFactory object.

## Methods

|                                                                                                                                                                                               |                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`solve`](qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solve#qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solve "qiskit.chemistry.algorithms.ExcitedStatesEigensolver.solve") | Compute Ground and Excited States properties. |

## Attributes

<span id="undefined" />

### solver

Returns the minimum eigensolver or factory.

**Return type**

`Union`\[`Eigensolver`, `EigensolverFactory`]

<span id="undefined" />

### transformation

Returns the transformation used to obtain a qubit operator from the molecule.

**Return type**

`Transformation`
