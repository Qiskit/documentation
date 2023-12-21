---
title: serialize
description: API reference for qiskit.validation.ModelTypeValidator.serialize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.ModelTypeValidator.serialize
---

# serialize

<span id="qiskit.validation.ModelTypeValidator.serialize" />

`ModelTypeValidator.serialize(attr, obj, accessor=None, **kwargs)`

Pulls the value for the given key from the object, applies the field’s formatting and returns the result.

**Parameters**

*   **attr** (`str`) – The attribute/key to get from the object.
*   **obj** (`Any`) – The object to access the attribute/key from.
*   **accessor** (`Optional`\[`Callable`\[\[`Any`, `str`, `Any`], `Any`]]) – Function used to access values from `obj`.
*   **kwargs** – Field-specific keyword arguments.

