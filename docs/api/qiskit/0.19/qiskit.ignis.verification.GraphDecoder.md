---
title: GraphDecoder
description: API reference for qiskit.ignis.verification.GraphDecoder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.GraphDecoder
---

# GraphDecoder

<span id="qiskit.ignis.verification.GraphDecoder" />

`GraphDecoder(code, S=None)`

Class to construct the graph corresponding to the possible syndromes of a quantum error correction code, and then run suitable decoders.

**Parameters**

*   **code** (*RepitionCode*) – The QEC Code object for which this decoder will be used.
*   **S** (*networkx.Graph*) – Graph describing connectivity between syndrome elements. Will be generated automatically if not supplied.

**Additional information:**

The decoder for the supplied `code` is initialized by running `_make_syndrome_graph()`. Since this process can take some time, it is also possible to load in a premade `S`. However, if this was created for a differently defined `code`, it won’t work properly.

## Methods

|                                                                                                                                                                              |                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`GraphDecoder.get_logical_prob`](qiskit.ignis.verification.GraphDecoder.get_logical_prob "qiskit.ignis.verification.GraphDecoder.get_logical_prob")(results\[, …])          | **param results**A results dictionary, as produced by the     |
| [`GraphDecoder.make_error_graph`](qiskit.ignis.verification.GraphDecoder.make_error_graph "qiskit.ignis.verification.GraphDecoder.make_error_graph")(string\[, …])           | **param string**A string describing the output from the code. |
| [`GraphDecoder.matching`](qiskit.ignis.verification.GraphDecoder.matching "qiskit.ignis.verification.GraphDecoder.matching")(string)                                         | **param string**A string describing the output from the code. |
| [`GraphDecoder.weight_syndrome_graph`](qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph "qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph")(results) | Generate weighted syndrome graph from result counts.          |

