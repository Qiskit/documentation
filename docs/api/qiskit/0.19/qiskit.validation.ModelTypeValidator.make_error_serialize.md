---
title: make_error_serialize
description: API reference for qiskit.validation.ModelTypeValidator.make_error_serialize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.ModelTypeValidator.make_error_serialize
---

# make\_error\_serialize

<span id="qiskit.validation.ModelTypeValidator.make_error_serialize" />

`ModelTypeValidator.make_error_serialize(key, **kwargs)`

Helper method to return a ValidationError from \_serialize.

This method wraps the result of `make_error()`, adding contextual information in order to provide more informative information to users.

**Parameters**

*   **key** (*str*) – error key index.
*   **\*\*kwargs** – additional arguments to `make_error()`.

**Returns**

an exception with the field name.

**Return type**

ValidationError

