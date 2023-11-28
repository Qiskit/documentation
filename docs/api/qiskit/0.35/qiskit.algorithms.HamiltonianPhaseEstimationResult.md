# HamiltonianPhaseEstimationResult

<span id="undefined" />

`HamiltonianPhaseEstimationResult(phase_estimation_result, phase_estimation_scale, id_coefficient)`

Bases: `qiskit.algorithms.algorithm_result.AlgorithmResult`

Store and manipulate results from running HamiltonianPhaseEstimation.

This API of this class is nearly the same as PhaseEstimatorResult, differing only in the presence of an additional keyword argument in the methods. If scaled is False, then the phases are not translated and scaled to recover the eigenvalues of the Hamiltonian. Instead phi in $[0, 1)$ is returned, as is the case when then unitary is not derived from a Hamiltonian.

This class is meant to be instantiated via HamiltonianPhaseEstimation.estimate.

**Parameters**

*   **phase\_estimation\_result** (`PhaseEstimationResult`) – The result object returned by PhaseEstimation.estimate.
*   **phase\_estimation\_scale** (`PhaseEstimationScale`) – object used to scale phases to obtain eigenvalues.
*   **id\_coefficient** (`float`) – The coefficient of the identity term in the Hamiltonian. Eigenvalues are computed without this term so that the coefficient must added to give correct eigenvalues. This is done automatically when retrieving eigenvalues.

## Methods

|                                                                                                                                                                                                                         |                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`combine`](qiskit.algorithms.HamiltonianPhaseEstimationResult.combine#qiskit.algorithms.HamiltonianPhaseEstimationResult.combine "qiskit.algorithms.HamiltonianPhaseEstimationResult.combine")                         | Any property from the argument that exists in the receiver is updated.                                                                                    |
| [`filter_phases`](qiskit.algorithms.HamiltonianPhaseEstimationResult.filter_phases#qiskit.algorithms.HamiltonianPhaseEstimationResult.filter_phases "qiskit.algorithms.HamiltonianPhaseEstimationResult.filter_phases") | Filter phases as does PhaseEstimatorResult.filter\_phases, with the addition that phi is shifted and translated to return eigenvalues of the Hamiltonian. |

## Attributes

<span id="undefined" />

### most\_likely\_eigenvalue

The most likely eigenvalue of the Hamiltonian.

This method calls most\_likely\_phase and scales the result to obtain an eigenvalue.

**Return type**

`float`

**Returns**

The most likely eigenvalue of the Hamiltonian.

<span id="undefined" />

### phase

The most likely phase of the unitary corresponding to the Hamiltonian.

**Return type**

`float`

**Returns**

The most likely phase.
