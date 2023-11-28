<span id="qiskit-ignis-verification-graphdecoder" />

# qiskit.ignis.verification.GraphDecoder

<span id="undefined" />

`GraphDecoder(code, S=None)`

Class to construct the graph corresponding to the possible syndromes of a quantum error correction code, and then run suitable decoders.

**Parameters**

*   **code** (*RepitionCode*) – The QEC Code object for which this decoder will be used.
*   **S** (*networkx.Graph*) – Graph describing connectivity between syndrome elements. Will be generated automatically if not supplied.

**Additional information:**

The decoder for the supplied `code` is initialized by running `_make_syndrome_graph()`. Since this process can take some time, it is also possible to load in a premade `S`. However, if this was created for a differently defined `code`, it won’t work properly.

<span id="undefined" />

`__init__(code, S=None)`

**Parameters**

*   **code** (*RepitionCode*) – The QEC Code object for which this decoder will be used.
*   **S** (*networkx.Graph*) – Graph describing connectivity between syndrome elements. Will be generated automatically if not supplied.

**Additional information:**

The decoder for the supplied `code` is initialized by running `_make_syndrome_graph()`. Since this process can take some time, it is also possible to load in a premade `S`. However, if this was created for a differently defined `code`, it won’t work properly.

## Methods

|                                                                                                                                                                  |                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.verification.GraphDecoder.__init__ "qiskit.ignis.verification.GraphDecoder.__init__")(code\[, S])                                     | **param code**The QEC Code object for which this decoder      |
| [`get_logical_prob`](#qiskit.ignis.verification.GraphDecoder.get_logical_prob "qiskit.ignis.verification.GraphDecoder.get_logical_prob")(results\[, algorithm])  | **param results**A results dictionary, as produced by the     |
| [`make_error_graph`](#qiskit.ignis.verification.GraphDecoder.make_error_graph "qiskit.ignis.verification.GraphDecoder.make_error_graph")(string\[, subgraphs])   | **param string**A string describing the output from the code. |
| [`matching`](#qiskit.ignis.verification.GraphDecoder.matching "qiskit.ignis.verification.GraphDecoder.matching")(string)                                         | **param string**A string describing the output from the code. |
| [`weight_syndrome_graph`](#qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph "qiskit.ignis.verification.GraphDecoder.weight_syndrome_graph")(results) | Generate weighted syndrome graph from result counts.          |

<span id="undefined" />

`get_logical_prob(results, algorithm='matching')`

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **method of the code.** (*process\_results*) –
*   **algorithm** (*str*) – Choice of which decoder to use.

**Returns**

Dictionary of logical error probabilities for each of the encoded logical states whose results were given in the input.

**Return type**

dict

<span id="undefined" />

`make_error_graph(string, subgraphs=None)`

**Parameters**

*   **string** (*str*) – A string describing the output from the code.
*   **subgraphs** (*list*) – Used when multiple, semi-independent graphs need
*   **to created.** (*need*) –

**Returns**

The subgraph(s) of S which corresponds to the non-trivial syndrome elements in the given string.

**Return type**

E

<span id="undefined" />

`matching(string)`

**Parameters**

**string** (*str*) – A string describing the output from the code.

**Returns**

**A string with corrected logical values,**

computed using minimum weight perfect matching.

**Return type**

str

**Additional information:**

This function can be run directly, or used indirectly to calculate a logical error probability with get\_logical\_prob

<span id="undefined" />

`weight_syndrome_graph(results)`

Generate weighted syndrome graph from result counts.

**Parameters**

*   **results** (*dict*) – A results dictionary, as produced by the
*   **method of the code.** (*process\_results*) –

**Additional information:**

Uses results to estimate the probability of the errors that create the pairs of nodes in S. The edge weights are then replaced with the corresponding -log(p/(1-p).
