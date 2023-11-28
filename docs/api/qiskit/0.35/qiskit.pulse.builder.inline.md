# qiskit.pulse.builder.inline

<span id="undefined" />

`inline()`

Deprecated. Inline all instructions within this context into the parent context, inheriting the scheduling policy of the parent context.

<Admonition title="Warning" type="caution">
  This will cause all scheduling directives within this context to be ignored.
</Admonition>

**Return type**

`AbstractContextManager`\[`None`]
