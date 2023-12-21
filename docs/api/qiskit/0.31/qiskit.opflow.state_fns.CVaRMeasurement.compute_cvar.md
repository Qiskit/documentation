# qiskit.opflow\.state\_fns.CVaRMeasurement.compute\_cvar

`CVaRMeasurement.compute_cvar(energies, probabilities)`

Given the energies of each sampled measurement outcome (H\_i) as well as the sampling probability of each measurement outcome (p\_i, we can compute the CVaR. Note that the sampling probabilities serve as an alternative to knowing the counts of each observation and that the input energies are assumed to be sorted in increasing order.

Consider the outcome with index j, such that only some of the samples with measurement outcome j will be used in computing CVaR. The CVaR calculation can then be separated into two parts. First we sum each of the energies for outcomes i \< j, weighted by the probability of observing that outcome (i.e the normalized counts). Second, we add the energy for outcome j, weighted by the difference (α - sum\_i\<j p\_i)

**Parameters**

*   **energies** (`list`) – A list containing the energies (H\_i) of each sample measurement outcome, sorted in increasing order.
*   **probabilities** (`list`) – The sampling probabilities (p\_i) for each corresponding measurement outcome.

**Return type**

`complex`

**Returns**

**The CVaR of the diagonal observable specified by self.primitive and**

the sampled quantum state described by the inputs (energies, probabilities). For index j (described above), the CVaR is computed as H\_j + 1/α \* (sum\_i\<j p\_i\*(H\_i - H\_j))

**Raises**

**ValueError** – front isn’t a DictStateFn or VectorStateFn
