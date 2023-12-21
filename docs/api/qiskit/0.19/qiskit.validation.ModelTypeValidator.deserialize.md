---
title: deserialize
description: API reference for qiskit.validation.ModelTypeValidator.deserialize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.ModelTypeValidator.deserialize
---

# deserialize

<span id="qiskit.validation.ModelTypeValidator.deserialize" />

`ModelTypeValidator.deserialize(value, attr=None, data=None, **kwargs)`

Deserialize `value`.

**Parameters**

*   **value** (`Any`) – The value to deserialize.
*   **attr** (`Optional`\[`str`]) – The attribute/key in data to deserialize.
*   **data** (`Optional`\[`Mapping`\[`str`, `Any`]]) – The raw input data passed to Schema.load.
*   **kwargs** – Field-specific keyword arguments.

**Raises**

**ValidationError** – If an invalid value is passed or if a required value is missing.

