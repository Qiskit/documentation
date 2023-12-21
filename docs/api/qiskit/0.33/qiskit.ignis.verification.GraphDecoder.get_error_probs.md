# qiskit.ignis.verification.GraphDecoder.get\_error\_probs

`GraphDecoder.get_error_probs(results, logical='0')`

Generate probabilities of single error events from result counts. :param results: A results dictionary, as produced by the :type results: dict :param process\_results method of the code.: :param logical: Logical value whose results are used. :type logical: string

**Returns**

Keys are the edges for specific error events, and values are the calculated probabilities

**Return type**

dict

## Additional information:

Uses results to estimate the probability of the errors that create the pairs of nodes specified by the edge. Calculation done using the method of Spitz, et al. [https://doi.org/10.1002/qute.201800012](https://doi.org/10.1002/qute.201800012)
