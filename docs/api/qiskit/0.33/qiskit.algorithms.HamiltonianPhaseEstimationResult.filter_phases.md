# qiskit.algorithms.HamiltonianPhaseEstimationResult.filter\_phases

`HamiltonianPhaseEstimationResult.filter_phases(cutoff=0.0, scaled=True, as_float=True)`

Filter phases as does PhaseEstimatorResult.filter\_phases, with the addition that phi is shifted and translated to return eigenvalues of the Hamiltonian.

**Parameters**

*   **cutoff** (`float`) – Minimum weight of number of counts required to keep a bit string. The default value is 0.0.
*   **scaled** (`bool`) – If False, return phi in $[0, 1)$ rather than the eigenvalues of the Hamiltonian.
*   **as\_float** (`bool`) – If True, returned keys are floats in $[0.0, 1.0)$. If False returned keys are bit strings.

**Raises**

**ValueError** – if as\_float is False and scaled is True.

**Return type**

`Dict`\[`Union`\[`str`, `float`], `float`]

**Returns**

A dict of filtered phases.
