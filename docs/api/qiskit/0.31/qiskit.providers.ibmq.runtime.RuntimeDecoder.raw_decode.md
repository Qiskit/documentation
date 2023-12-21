# qiskit.providers.ibmq.runtime.RuntimeDecoder.raw\_decode

`RuntimeDecoder.raw_decode(s, idx=0)`

Decode a JSON document from `s` (a `str` beginning with a JSON document) and return a 2-tuple of the Python representation and the index in `s` where the document ended.

This can be used to decode a JSON document from a string that may have extraneous data at the end.
