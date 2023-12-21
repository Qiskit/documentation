---
title: get_tokens
description: API reference for qiskit.qasm.OpenQASMLexer.get_tokens
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.qasm.OpenQASMLexer.get_tokens
---

# get\_tokens

<span id="qiskit.qasm.OpenQASMLexer.get_tokens" />

`OpenQASMLexer.get_tokens(text, unfiltered=False)`

Return an iterable of (tokentype, value) pairs generated from text. If unfiltered is set to True, the filtering mechanism is bypassed even if filters are defined.

Also preprocess the text, i.e. expand tabs and strip it if wanted and applies registered filters.

