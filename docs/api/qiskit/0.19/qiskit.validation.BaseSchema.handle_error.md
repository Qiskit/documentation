---
title: handle_error
description: API reference for qiskit.validation.BaseSchema.handle_error
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.handle_error
---

# handle\_error

<span id="qiskit.validation.BaseSchema.handle_error" />

`BaseSchema.handle_error(error, data, *, many, **kwargs)`

Custom error handler function for the schema.

**Parameters**

*   **error** (`ValidationError`) – The ValidationError raised during (de)serialization.
*   **data** (`Any`) – The original input data.
*   **many** (`bool`) – Value of `many` on dump or load.
*   **partial** – Value of `partial` on load.

New in version 2.0.0.

Changed in version 3.0.0rc9: Receives many and partial (on deserialization) as keyword arguments.

