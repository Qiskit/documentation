# qiskit.ignis.verification.GraphDecoder.weight\_syndrome\_graph

`GraphDecoder.weight_syndrome_graph(results)`

Generate weighted syndrome graph from result counts.

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **method of the code.** (*process\_results*) –

## Additional information:

Uses results to estimate the probability of the errors that create the pairs of nodes in S. The edge weights are then replaced with the corresponding -log(p/(1-p).
