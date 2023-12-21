---
title: weight_syndrome_graph
description: API reference for qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph
---

# weight\_syndrome\_graph

<span id="qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph" />

`GraphDecoder.weight_syndrome_graph(results)`

Generate weighted syndrome graph from result counts.

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **code.** (*process\_results method of the*) –

## Additional information:

Uses results to estimate the probability of the errors that create the pairs of nodes in S. The edge weights are then replaced with the corresponding -log(p/(1-p).

