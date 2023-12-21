# qiskit.algorithms.PhaseEstimationResult.filter\_phases

`PhaseEstimationResult.filter_phases(cutoff=0.0, as_float=True)`

Return a filtered dict of phases (keys) and frequencies (values).

Only phases with frequencies (counts) larger than cutoff are included. It is assumed that the run method has been called so that the phases have been computed. When using a noiseless, shot-based simulator to read a single phase that can be represented exactly by num\_evaluation\_qubits, all the weight will be concentrated on a single phase. In all other cases, many, or all, bit strings will have non-zero weight. This method is useful for filtering out these uninteresting bit strings.

**Parameters**

*   **cutoff** (`float`) – Minimum weight of number of counts required to keep a bit string. The default value is 0.0.
*   **as\_float** (`bool`) – If True, returned keys are floats in $[0.0, 1.0)$. If False returned keys are bit strings.

**Return type**

`Dict`

**Returns**

A filtered dict of phases (keys) and frequencies (values).
