---
title: validate
description: API reference for qiskit.validation.BaseSchema.validate
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.validate
---

# validate

<span id="qiskit.validation.BaseSchema.validate" />

`BaseSchema.validate(data, *, many=None, partial=None)`

Validate data against the schema, returning a dictionary of validation errors.

**Parameters**

*   **data** (`Mapping`) – The data to validate.
*   **many** (`Optional`\[`bool`]) – Whether to validate data as a collection. If None, the value for self.many is used.
*   **partial** (`Union`\[`bool`, `Sequence`\[`str`], `Set`\[`str`], `None`]) – Whether to ignore missing fields and not require any fields declared. Propagates down to `Nested` fields as well. If its value is an iterable, only missing fields listed in that iterable will be ignored. Use dot delimiters to specify nested fields.

**Return type**

`Dict`\[`str`, `List`\[`str`]]

**Returns**

A dictionary of validation errors.

New in version 1.1.0.

