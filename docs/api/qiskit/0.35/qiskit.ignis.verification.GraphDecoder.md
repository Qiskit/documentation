# GraphDecoder[¶](#graphdecoder "Permalink to this headline")

<span id="undefined" />

`GraphDecoder(code, S=None, brute=False)`

Bases: `object`

Class to construct the graph corresponding to the possible syndromes of a quantum error correction code, and then run suitable decoders.

**Parameters**

*   **code** (*RepitionCode*) – The QEC Code object for which this decoder will be used.
*   **S** (*retworkx.PyGraph*) – Graph describing connectivity between syndrome elements. Will be generated automatically if not supplied.
*   **brute** (*bool*) – If False, attempt to use custom method from code class.

**Additional information:**

The decoder for the supplied `code` is initialized by running `_make_syndrome_graph()`. Since this process can take some time, it is also possible to load in a premade `S`. However, if this was created for a differently defined `code`, it won’t work properly.

## Methods

|                                                                                                                                                                                                                     |                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`get_error_probs`](qiskit.ignis.verification.GraphDecoder.get_error_probs#qiskit.ignis.verification.GraphDecoder.get_error_probs "qiskit.ignis.verification.GraphDecoder.get_error_probs")                         | Generate probabilities of single error events from result counts. |
| [`get_logical_prob`](qiskit.ignis.verification.GraphDecoder.get_logical_prob#qiskit.ignis.verification.GraphDecoder.get_logical_prob "qiskit.ignis.verification.GraphDecoder.get_logical_prob")                     | **param results**A results dictionary, as produced by the         |
| [`make_error_graph`](qiskit.ignis.verification.GraphDecoder.make_error_graph#qiskit.ignis.verification.GraphDecoder.make_error_graph "qiskit.ignis.verification.GraphDecoder.make_error_graph")                     | **param string**A string describing the output from the code.     |
| [`matching`](qiskit.ignis.verification.GraphDecoder.matching#qiskit.ignis.verification.GraphDecoder.matching "qiskit.ignis.verification.GraphDecoder.matching")                                                     | **param string**A string describing the output from the code.     |
| [`weight_syndrome_graph`](qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph#qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph "qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph") | Generate weighted syndrome graph from result counts.              |
