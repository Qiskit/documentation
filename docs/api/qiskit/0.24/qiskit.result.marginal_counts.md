<span id="qiskit-result-marginal-counts" />

# qiskit.result.marginal\_counts

<span id="undefined" />

`marginal_counts(result, indices=None, inplace=False)`

Marginalize counts from an experiment over some indices of interest.

**Parameters**

*   **result** (*dict or* [*Result*](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result")) – result to be marginalized (a Result object or a dict of counts).
*   **indices** (*list(int) or None*) – The bit positions of interest to marginalize over. If `None` (default), do not marginalize at all.
*   **inplace** (*bool*) – Default: False. Operates on the original Result argument if True, leading to loss of original Job Result. It has no effect if `result` is a dict.

**Returns**

a dictionary with the observed counts, marginalized to only account for frequency of observations of bits of interest.

**Return type**

[Result](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") or dict\[str, int]

**Raises**

**QiskitError** – in case of invalid indices to marginalize over.
