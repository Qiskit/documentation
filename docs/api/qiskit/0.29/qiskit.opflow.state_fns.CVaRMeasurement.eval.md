# qiskit.opflow\.state\_fns.CVaRMeasurement.eval

`CVaRMeasurement.eval(front=None)`

Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR as H\_j + 1/α\*(sum\_i\<j p\_i\*(H\_i - H\_j)). Note that index j corresponds to the measurement outcome such that only some of the samples with measurement outcome j will be used in computing CVaR. Note also that the sampling probabilities serve as an alternative to knowing the counts of each observation.

This computation is broken up into two subroutines. One which evaluates each measurement outcome and determines the sampling probabilities of each. And one which carries out the above calculation. The computation is split up this way to enable a straightforward calculation of the variance of this estimator.

**Parameters**

**front** (`Union`\[`str`, `dict`, `ndarray`, `OperatorBase`, `Statevector`, `None`]) – A StateFn or primitive which specifies the results of evaluating a quantum state.

**Return type**

`complex`

**Returns**

**The CVaR of the diagonal observable specified by self.primitive and**

the sampled quantum state described by the inputs (energies, probabilities). For index j (described above), the CVaR is computed as H\_j + 1/α\*(sum\_i\<j p\_i\*(H\_i - H\_j))
