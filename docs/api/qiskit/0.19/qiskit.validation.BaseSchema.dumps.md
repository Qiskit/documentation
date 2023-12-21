---
title: dumps
description: API reference for qiskit.validation.BaseSchema.dumps
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.dumps
---

# dumps

<span id="qiskit.validation.BaseSchema.dumps" />

`BaseSchema.dumps(obj, *args, many=None, **kwargs)`

Same as [`dump()`](qiskit.validation.BaseSchema.dump "qiskit.validation.BaseSchema.dump"), except return a JSON-encoded string.

**Parameters**

*   **obj** (`Any`) – The object to serialize.
*   **many** (`Optional`\[`bool`]) – Whether to serialize obj as a collection. If None, the value for self.many is used.

**Returns**

A `json` string

New in version 1.0.0.

Changed in version 3.0.0b7: This method returns the serialized data rather than a `(data, errors)` duple. A `ValidationError` is raised if `obj` is invalid.

