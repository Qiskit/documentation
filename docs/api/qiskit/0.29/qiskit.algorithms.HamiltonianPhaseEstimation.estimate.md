# qiskit.algorithms.HamiltonianPhaseEstimation.estimate

`HamiltonianPhaseEstimation.estimate(hamiltonian, state_preparation=None, evolution=None, bound=None)`

Run the Hamiltonian phase estimation algorithm.

**Parameters**

*   **hamiltonian** (`OperatorBase`) – A Hermitian operator.
*   **state\_preparation** (`Optional`\[`StateFn`]) – The `StateFn` to be prepared, whose eigenphase will be measured. If this parameter is omitted, no preparation circuit will be run and input state will be the all-zero state in the computational basis.
*   **evolution** (`Optional`\[`EvolutionBase`]) – An evolution converter that generates a unitary from `hamiltonian`. If `None`, then the default `PauliTrotterEvolution` is used.
*   **bound** (`Optional`\[`float`]) – An upper bound on the absolute value of the eigenvalues of `hamiltonian`. If omitted, then `hamiltonian` must be a Pauli sum, or a `PauliOp`, in which case a bound will be computed. If `hamiltonian` is a `MatrixOp`, then `bound` may not be `None`. The tighter the bound, the higher the resolution of computed phases.

**Return type**

`HamiltonianPhaseEstimationResult`

**Returns**

HamiltonianPhaseEstimationResult instance containing the result of the estimation and diagnostic information.

**Raises**

*   **ValueError** – If `bound` is `None` and `hamiltonian` is not a Pauli sum, i.e. a `PauliSumOp` or a `SummedOp` whose terms are of type `PauliOp`.
*   **TypeError** – If `evolution` is not of type `EvolutionBase`.
