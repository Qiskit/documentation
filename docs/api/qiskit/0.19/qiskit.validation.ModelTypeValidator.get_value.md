---
title: get_value
description: API reference for qiskit.validation.ModelTypeValidator.get_value
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.ModelTypeValidator.get_value
---

# get\_value

<span id="qiskit.validation.ModelTypeValidator.get_value" />

`ModelTypeValidator.get_value(obj, attr, accessor=None, default=<marshmallow.missing>)`

Return the value for a given key from an object.

**Parameters**

*   **obj** (*object*) – The object to get the value from.
*   **attr** (*str*) – The attribute/key in obj to get the value from.
*   **accessor** (*callable*) – A callable used to retrieve the value of attr from the object obj. Defaults to marshmallow\.utils.get\_value.

