---
title: BaseSchema
description: API reference for qiskit.validation.BaseSchema
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.validation.BaseSchema
---

# BaseSchema

<span id="qiskit.validation.BaseSchema" />

`BaseSchema(*, only=None, exclude=(), many=False, context=None, load_only=(), dump_only=(), partial=False, unknown=None)`

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

|                                                                                                                          |                                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| [`BaseSchema.TYPE_MAPPING`](qiskit.validation.BaseSchema.TYPE_MAPPING "qiskit.validation.BaseSchema.TYPE_MAPPING")       |                                                   |
| [`BaseSchema.dict_class`](qiskit.validation.BaseSchema.dict_class "qiskit.validation.BaseSchema.dict_class")             | **rtype**`type`                                   |
| [`BaseSchema.error_messages`](qiskit.validation.BaseSchema.error_messages "qiskit.validation.BaseSchema.error_messages") | Overrides for default schema-level error messages |
| [`BaseSchema.opts`](qiskit.validation.BaseSchema.opts "qiskit.validation.BaseSchema.opts")                               |                                                   |
| [`BaseSchema.set_class`](qiskit.validation.BaseSchema.set_class "qiskit.validation.BaseSchema.set_class")                | **rtype**`type`                                   |

## Methods

|                                                                                                                                                            |                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`BaseSchema.dump`](qiskit.validation.BaseSchema.dump "qiskit.validation.BaseSchema.dump")(obj, \*\[, many])                                               | Serialize an object to native Python data types according to this Schema’s fields.                                                 |
| [`BaseSchema.dump_additional_data`](qiskit.validation.BaseSchema.dump_additional_data "qiskit.validation.BaseSchema.dump_additional_data")(valid\_data, …) | Include unknown fields after dumping.                                                                                              |
| [`BaseSchema.dumps`](qiskit.validation.BaseSchema.dumps "qiskit.validation.BaseSchema.dumps")(obj, \*args\[, many])                                        | Same as [`dump()`](qiskit.validation.BaseSchema.dump "qiskit.validation.BaseSchema.dump"), except return a JSON-encoded string.    |
| [`BaseSchema.from_dict`](qiskit.validation.BaseSchema.from_dict "qiskit.validation.BaseSchema.from_dict")(fields, \*\[, name])                             | Generate a Schema class given a dictionary of fields.                                                                              |
| [`BaseSchema.get_attribute`](qiskit.validation.BaseSchema.get_attribute "qiskit.validation.BaseSchema.get_attribute")(obj, attr, default)                  | Defines how to pull values from an object to serialize.                                                                            |
| [`BaseSchema.handle_error`](qiskit.validation.BaseSchema.handle_error "qiskit.validation.BaseSchema.handle_error")(error, data, \*, …)                     | Custom error handler function for the schema.                                                                                      |
| [`BaseSchema.load`](qiskit.validation.BaseSchema.load "qiskit.validation.BaseSchema.load")(data, \*\[, many, partial, …])                                  | Deserialize a data structure to an object defined by this Schema’s fields.                                                         |
| [`BaseSchema.loads`](qiskit.validation.BaseSchema.loads "qiskit.validation.BaseSchema.loads")(json\_data, \*\[, many, …])                                  | Same as [`load()`](qiskit.validation.BaseSchema.load "qiskit.validation.BaseSchema.load"), except it takes a JSON string as input. |
| [`BaseSchema.make_model`](qiskit.validation.BaseSchema.make_model "qiskit.validation.BaseSchema.make_model")(data, \*\*\_)                                 | Make `load` return a `model_cls` instance instead of a dict.                                                                       |
| [`BaseSchema.on_bind_field`](qiskit.validation.BaseSchema.on_bind_field "qiskit.validation.BaseSchema.on_bind_field")(field\_name, field\_obj)             | Hook to modify a field when it is bound to the Schema.                                                                             |
| [`BaseSchema.validate`](qiskit.validation.BaseSchema.validate "qiskit.validation.BaseSchema.validate")(data, \*\[, many, partial])                         | Validate data against the schema, returning a dictionary of validation errors.                                                     |

