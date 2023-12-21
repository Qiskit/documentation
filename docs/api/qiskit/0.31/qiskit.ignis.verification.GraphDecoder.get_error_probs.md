# qiskit.ignis.verification.GraphDecoder.get\_error\_probs

`GraphDecoder.get_error_probs(results)`

Generate probabilities of single error events from result counts.

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **method of the code.** (*process\_results*) –

**Returns**

Keys are the edges for specific error events, and values are the calculated probabilities

**Return type**

dict

## Additional information:

Uses results to estimate the probability of the errors that create the pairs of nodes specified by the edge. Calculation done using the method of Spitz, et al. [https://doi.org/10.1002/qute.201800012](https://doi.org/10.1002/qute.201800012)
