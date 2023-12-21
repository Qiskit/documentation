---
title: load
description: API reference for qiskit.validation.BaseSchema.load
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.load
---

# load

<span id="qiskit.validation.BaseSchema.load" />

`BaseSchema.load(data, *, many=None, partial=None, unknown=None)`

Deserialize a data structure to an object defined by this Schema’s fields.

**Parameters**

*   **data** (`Union`\[`Mapping`\[`str`, `Any`], `Iterable`\[`Mapping`\[`str`, `Any`]]]) – The data to deserialize.
*   **many** (`Optional`\[`bool`]) – Whether to deserialize data as a collection. If None, the value for self.many is used.
*   **partial** (`Union`\[`bool`, `Sequence`\[`str`], `Set`\[`str`], `None`]) – Whether to ignore missing fields and not require any fields declared. Propagates down to `Nested` fields as well. If its value is an iterable, only missing fields listed in that iterable will be ignored. Use dot delimiters to specify nested fields.
*   **unknown** (`Optional`\[`str`]) – Whether to exclude, include, or raise an error for unknown fields in the data. Use EXCLUDE, INCLUDE or RAISE. If None, the value for self.unknown is used.

**Returns**

Deserialized data

New in version 1.0.0.

Changed in version 3.0.0b7: This method returns the deserialized data rather than a `(data, errors)` duple. A `ValidationError` is raised if invalid data are passed.

