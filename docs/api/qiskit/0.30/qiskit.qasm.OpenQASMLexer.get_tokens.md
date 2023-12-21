# qiskit.qasm.OpenQASMLexer.get\_tokens

`OpenQASMLexer.get_tokens(text, unfiltered=False)`

Return an iterable of (tokentype, value) pairs generated from text. If unfiltered is set to True, the filtering mechanism is bypassed even if filters are defined.

Also preprocess the text, i.e. expand tabs and strip it if wanted and applies registered filters.
