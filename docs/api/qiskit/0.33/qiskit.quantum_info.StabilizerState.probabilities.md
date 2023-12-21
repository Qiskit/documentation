# qiskit.quantum\_info.StabilizerState.probabilities

`StabilizerState.probabilities(qargs=None, decimals=None)`

Return the subsystem measurement probability vector.

Measurement probabilities are with respect to measurement in the computation (diagonal) basis.

**Parameters**

*   **qargs** (*None or list*) – subsystems to return probabilities for, if None return for all subsystems (Default: None).
*   **decimals** (*None or int*) – the number of decimal places to round values. If None no rounding is done (Default: None).

**Returns**

The Numpy vector array of probabilities.

**Return type**

np.array
