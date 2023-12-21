# qiskit.aqua.operators.expectations.AerPauliExpectation.compute\_variance

`AerPauliExpectation.compute_variance(exp_op)`

Compute the variance of the expectation estimator. Because Aer takes this expectation with matrix multiplication, the estimation is exact and the variance is always 0, but we need to return those values in a way which matches the Operator’s structure.

**Parameters**

**exp\_op** (`OperatorBase`) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation, equal to 0.
