# AdaptVQE

<span id="undefined" />

`AdaptVQE(transformation, solver, threshold=1e-05, delta=1, max_iterations=None)`

Bases: `qiskit.chemistry.algorithms.ground_state_solvers.ground_state_eigensolver.GroundStateEigensolver`

A ground state calculation employing the AdaptVQE algorithm.

**Parameters**

*   **transformation** (`FermionicTransformation`) – a fermionic driver to operator transformation strategy.
*   **solver** (`MinimumEigensolverFactory`) – a factory for the VQE solver employing a UCCSD variational form.
*   **threshold** (`float`) – the energy convergence threshold. It has a minimum value of 1e-15.
*   **delta** (`float`) – the finite difference step size for the gradient computation. It has a minimum value of 1e-5.
*   **max\_iterations** (`Optional`\[`int`]) – the maximum number of iterations of the AdaptVQE algorithm.

## Methods

|                                                                                                                                                                                                       |                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`evaluate_operators`](qiskit.chemistry.algorithms.AdaptVQE.evaluate_operators#qiskit.chemistry.algorithms.AdaptVQE.evaluate_operators "qiskit.chemistry.algorithms.AdaptVQE.evaluate_operators")     | Evaluates additional operators at the given state.                            |
| [`returns_groundstate`](qiskit.chemistry.algorithms.AdaptVQE.returns_groundstate#qiskit.chemistry.algorithms.AdaptVQE.returns_groundstate "qiskit.chemistry.algorithms.AdaptVQE.returns_groundstate") | Whether the eigensolver returns the ground state or only ground state energy. |
| [`solve`](qiskit.chemistry.algorithms.AdaptVQE.solve#qiskit.chemistry.algorithms.AdaptVQE.solve "qiskit.chemistry.algorithms.AdaptVQE.solve")                                                         | Computes the ground state.                                                    |

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
