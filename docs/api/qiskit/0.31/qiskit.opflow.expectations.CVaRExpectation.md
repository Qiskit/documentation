# CVaRExpectation[¶](#cvarexpectation "Permalink to this headline")

<span id="undefined" />

`CVaRExpectation(alpha, expectation=None)`

Bases: `qiskit.opflow.expectations.expectation_base.ExpectationBase`

Compute the Conditional Value at Risk (CVaR) expectation value.

The standard approach to calculating the expectation value of a Hamiltonian w\.r.t. a state is to take the sample mean of the measurement outcomes. This corresponds to an estimator of the energy. However in several problem settings with a diagonal Hamiltonian, e.g. in combinatorial optimization where the Hamiltonian encodes a cost function, we are not interested in calculating the energy but in the lowest possible value we can find.

To this end, we might consider using the best observed sample as a cost function during variational optimization. The issue here, is that this can result in a non-smooth optimization surface. To resolve this issue, we can smooth the optimization surface by using not just the best observed sample, but instead average over some fraction of best observed samples. This is exactly what the CVaR estimator accomplishes \[1].

It is empirically shown, that this can lead to faster convergence for combinatorial optimization problems.

Let $\alpha$ be a real number in $[0,1]$ which specifies the fraction of best observed samples which are used to compute the objective function. Observe that if $\alpha = 1$, CVaR is equivalent to a standard expectation value. Similarly, if $\alpha = 0$, then CVaR corresponds to using the best observed sample. Intermediate values of $\alpha$ interpolate between these two objective functions.

## References

**\[1]: Barkoutsos, P. K., Nannicini, G., Robert, A., Tavernelli, I., and Woerner, S.,**

“Improving Variational Quantum Optimization using CVaR” [arXiv:1907.04769](https://arxiv.org/abs/1907.04769)

**Parameters**

*   **alpha** (`float`) – The alpha value describing the quantile considered in the expectation value.
*   **expectation** (`Optional`\[`ExpectationBase`]) – An expectation object to compute the expectation value. Defaults to the PauliExpectation calculation.

**Raises**

**NotImplementedError** – If the `expectation` is an AerPauliExpecation.

## Methods Defined Here

|                                                                                                                                                                                                             |                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`compute_variance`](qiskit.opflow.expectations.CVaRExpectation.compute_variance#qiskit.opflow.expectations.CVaRExpectation.compute_variance "qiskit.opflow.expectations.CVaRExpectation.compute_variance") | Returns the variance of the CVaR calculation                                 |
| [`convert`](qiskit.opflow.expectations.CVaRExpectation.convert#qiskit.opflow.expectations.CVaRExpectation.convert "qiskit.opflow.expectations.CVaRExpectation.convert")                                     | Return an expression that computes the CVaR expectation upon calling `eval`. |
