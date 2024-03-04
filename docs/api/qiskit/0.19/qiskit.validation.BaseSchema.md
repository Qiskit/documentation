---
title: BaseSchema
description: API reference for qiskit.validation.BaseSchema
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.validation.BaseSchema
---

# BaseSchema

<span id="qiskit.validation.BaseSchema" />

`BaseSchema(*, only=None, exclude=(), many=False, context=None, load_only=(), dump_only=(), partial=False, unknown=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/validation/base.py "view source code")

Base class for Schemas for validated Qiskit classes.

Provides convenience functionality for the Qiskit common use case:

*   deserialization into class instances instead of dicts.
*   handling of unknown attributes not defined in the schema.

<span id="qiskit.validation.BaseSchema.model_cls" />

### model\_cls

class used to instantiate the instance. The

**Type**

type

### constructor is passed all named parameters from deserialization.

## Attributes

### TYPE\_MAPPING

<span id="qiskit.validation.BaseSchema.TYPE_MAPPING" />

`= {: , : , : , : , : , : , : , : , : , : , : , : , : , : }`

### dict\_class

<span id="qiskit.validation.BaseSchema.dict_class" />

`type`

**Return type**

`type`

### error\_messages

<span id="qiskit.validation.BaseSchema.error_messages" />

`= {}`

Overrides for default schema-level error messages

### opts

<span id="qiskit.validation.BaseSchema.opts" />

`=`

### set\_class

<span id="qiskit.validation.BaseSchema.set_class" />

`type`

**Return type**

`type`

## Methods

### dump

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

### dump\_additional\_data

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

### dumps

<span id="qiskit.validation.BaseSchema.dumps" />

`BaseSchema.dumps(obj, *args, many=None, **kwargs)`

Same as [`dump()`](qiskit.validation.BaseSchema#dump "qiskit.validation.BaseSchema.dump"), except return a JSON-encoded string.

**Parameters**

*   **obj** (`Any`) – The object to serialize.
*   **many** (`Optional`\[`bool`]) – Whether to serialize obj as a collection. If None, the value for self.many is used.

**Returns**

A `json` string

New in version 1.0.0.

Changed in version 3.0.0b7: This method returns the serialized data rather than a `(data, errors)` duple. A `ValidationError` is raised if `obj` is invalid.

### from\_dict

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

### get\_attribute

<span id="qiskit.validation.BaseSchema.get_attribute" />

`BaseSchema.get_attribute(obj, attr, default)`

Defines how to pull values from an object to serialize.

New in version 2.0.0.

Changed in version 3.0.0a1: Changed position of `obj` and `attr`.

### handle\_error

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

### load

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

### loads

<span id="qiskit.validation.BaseSchema.loads" />

`BaseSchema.loads(json_data, *, many=None, partial=None, unknown=None, **kwargs)`

Same as [`load()`](qiskit.validation.BaseSchema#load "qiskit.validation.BaseSchema.load"), except it takes a JSON string as input.

**Parameters**

*   **json\_data** (`str`) – A JSON string of the data to deserialize.
*   **many** (`Optional`\[`bool`]) – Whether to deserialize obj as a collection. If None, the value for self.many is used.
*   **partial** (`Union`\[`bool`, `Sequence`\[`str`], `Set`\[`str`], `None`]) – Whether to ignore missing fields and not require any fields declared. Propagates down to `Nested` fields as well. If its value is an iterable, only missing fields listed in that iterable will be ignored. Use dot delimiters to specify nested fields.
*   **unknown** (`Optional`\[`str`]) – Whether to exclude, include, or raise an error for unknown fields in the data. Use EXCLUDE, INCLUDE or RAISE. If None, the value for self.unknown is used.

**Returns**

Deserialized data

New in version 1.0.0.

Changed in version 3.0.0b7: This method returns the deserialized data rather than a `(data, errors)` duple. A `ValidationError` is raised if invalid data are passed.

### make\_model

<span id="qiskit.validation.BaseSchema.make_model" />

`BaseSchema.make_model(data, **_)`

Make `load` return a `model_cls` instance instead of a dict.

### on\_bind\_field

<span id="qiskit.validation.BaseSchema.on_bind_field" />

`BaseSchema.on_bind_field(field_name, field_obj)`

Hook to modify a field when it is bound to the Schema.

No-op by default.

**Return type**

`None`

### validate

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

