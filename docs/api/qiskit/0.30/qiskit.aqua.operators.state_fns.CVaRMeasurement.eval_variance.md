# qiskit.aqua.operators.state\_fns.CVaRMeasurement.eval\_variance

`CVaRMeasurement.eval_variance(front=None)`

Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the variance of the CVaR estimator as H\_j^2 + 1/α \* (sum\_i\<j p\_i\*(H\_i^2 - H\_j^2)). This follows from the definition that Var\[X] = E\[X^2] - E\[X]^2. In this case, X = E\[\<bi|H|bi>], where H is the diagonal observable and bi corresponds to measurement outcome i. Given this, E\[X^2] = E\[\<bi|H|bi>^2]

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, `OperatorBase`, `None`]) – A StateFn or primitive which specifies the results of evaluating a quantum state.

**Return type**

`Union`\[`float`, `complex`]

**Returns**

**The Var\[CVaR] of the diagonal observable specified by self.primitive**

and the sampled quantum state described by the inputs (energies, probabilities). For index j (described above), the CVaR is computed as H\_j^2 + 1/α\*(sum\_i\<j p\_i\*(H\_i^2 - H\_j^2))
