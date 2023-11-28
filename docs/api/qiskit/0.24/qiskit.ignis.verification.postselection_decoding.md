<span id="qiskit-ignis-verification-postselection-decoding" />

# qiskit.ignis.verification.postselection\_decoding

<span id="undefined" />

`postselection_decoding(results)`

Calculates the logical error probability using postselection decoding.

This postselects all results with trivial syndrome.

**Parameters**

**results** (*dict*) – A results dictionary, as produced by the process\_results method of a code.

**Returns**

**Dictionary of logical error probabilities for**

each of the encoded logical states whose results were given in the input.

**Return type**

dict
