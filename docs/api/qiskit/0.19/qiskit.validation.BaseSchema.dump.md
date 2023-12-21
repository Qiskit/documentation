---
title: dump
description: API reference for qiskit.validation.BaseSchema.dump
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.dump
---

# dump

<span id="qiskit.validation.BaseSchema.dump" />

`BaseSchema.dump(obj, *, many=None)`

Serialize an object to native Python data types according to this Schema’s fields.

**Parameters**

*   **obj** (`Any`) – The object to serialize.
*   **many** (`Optional`\[`bool`]) – Whether to serialize obj as a collection. If None, the value for self.many is used.

**Returns**

Serialized data

New in version 1.0.0.

Changed in version 3.0.0b7: This method returns the serialized data rather than a `(data, errors)` duple. A `ValidationError` is raised if `obj` is invalid.

Changed in version 3.0.0rc9: Validation no longer occurs upon serialization.

