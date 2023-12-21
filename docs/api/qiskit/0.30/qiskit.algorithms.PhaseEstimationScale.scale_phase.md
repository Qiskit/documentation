# qiskit.algorithms.PhaseEstimationScale.scale\_phase

`PhaseEstimationScale.scale_phase(phi, id_coefficient=0.0)`

Convert a phase into an eigenvalue.

The input phase `phi` corresponds to the eigenvalue of a unitary obtained by exponentiating a scaled Hermitian operator. Recall that the phase is obtained from `phi` as $2\pi\phi$. Furthermore, the Hermitian operator was scaled so that `phi` is restricted to $[-1/2, 1/2]$, corresponding to phases in $[-\pi, \pi]$. But the values of phi read from the phase-readout register are in $[0, 1)$. Any value of `phi` greater than $1/2$ corresponds to a raw phase of minus the complement with respect to 1. After this possible shift, the phase is scaled by the inverse of the factor by which the Hermitian operator was scaled to recover the eigenvalue of the Hermitian operator.

**Parameters**

*   **phi** (`float`) – Normalized phase in $[0, 1)$ to be converted to an eigenvalue.
*   **id\_coefficient** (`float`) – All eigenvalues are shifted by this value.

**Return type**

`float`

**Returns**

An eigenvalue computed from the input phase.
