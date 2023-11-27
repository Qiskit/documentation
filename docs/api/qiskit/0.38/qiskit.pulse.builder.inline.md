---
title: inline
description: API reference for qiskit.pulse.builder.inline
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.pulse.builder.inline
---

# qiskit.pulse.builder.inline[¶](#qiskit-pulse-builder-inline "Permalink to this headline")

<span id="qiskit.pulse.builder.inline" />

`inline()`

Deprecated. Inline all instructions within this context into the parent context, inheriting the scheduling policy of the parent context.

<Admonition title="Warning" type="caution">
  This will cause all scheduling directives within this context to be ignored.
</Admonition>

**Return type**

`AbstractContextManager`\[`None`]

