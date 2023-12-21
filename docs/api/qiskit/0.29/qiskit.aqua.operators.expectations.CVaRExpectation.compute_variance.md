# qiskit.aqua.operators.expectations.CVaRExpectation.compute\_variance

`CVaRExpectation.compute_variance(exp_op)`

Returns the variance of the CVaR calculation

**Parameters**

**exp\_op** (`OperatorBase`) – The operator whose evaluation yields an expectation of some StateFn against a diagonal observable.

**Return type**

`Union`\[`list`, `float`]

**Returns**

**The variance of the CVaR estimate corresponding to the converted**

exp\_op.

**Raises**

**ValueError** – If the exp\_op does not correspond to an expectation value.
