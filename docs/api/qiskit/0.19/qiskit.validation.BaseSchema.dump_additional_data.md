---
title: dump_additional_data
description: API reference for qiskit.validation.BaseSchema.dump_additional_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.dump_additional_data
---

# dump\_additional\_data

<span id="qiskit.validation.BaseSchema.dump_additional_data" />

`BaseSchema.dump_additional_data(valid_data, original_data, **kwargs)`

Include unknown fields after dumping.

Unknown fields are added with no processing at all.

**Parameters**

*   **valid\_data** (*dict or list*) – data collected and returned by `dump()`.
*   **original\_data** (*object or list*) – object passed to `dump()` in the first place.
*   **\*\*kwargs** – extra arguments from the decorators.

**Returns**

the same `valid_data` extended with the unknown attributes.

**Return type**

dict

Inspired by [https://github.com/marshmallow-code/marshmallow/pull/595](https://github.com/marshmallow-code/marshmallow/pull/595).

