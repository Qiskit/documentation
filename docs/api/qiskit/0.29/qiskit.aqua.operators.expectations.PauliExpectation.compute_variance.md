# qiskit.aqua.operators.expectations.PauliExpectation.compute\_variance

`PauliExpectation.compute_variance(exp_op)`

Compute the variance of the expectation estimator.

**Parameters**

**exp\_op** (`OperatorBase`) – The full expectation value Operator after sampling.

**Return type**

`Union`\[`list`, `float`, `ndarray`]

**Returns**

The variances or lists thereof (if exp\_op contains ListOps) of the expectation value estimation.
