---
title: from_dict
description: API reference for qiskit.validation.BaseSchema.from_dict
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.BaseSchema.from_dict
---

# from\_dict

<span id="qiskit.validation.BaseSchema.from_dict" />

`classmethod BaseSchema.from_dict(fields, *, name='GeneratedSchema')`

Generate a Schema class given a dictionary of fields.

```python
from marshmallow import Schema, fields

PersonSchema = Schema.from_dict({"name": fields.Str()})
print(PersonSchema().load({"name": "David"}))  # => {'name': 'David'}
```

Generated schemas are not added to the class registry and therefore cannot be referred to by name in Nested fields.

**Parameters**

*   **fields** (*dict*) – Dictionary mapping field names to field instances.
*   **name** (*str*) – Optional name for the class, which will appear in the `repr` for the class.

New in version 3.0.0.

**Return type**

`type`

