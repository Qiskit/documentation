---
title: ModelTypeValidator
description: API reference for qiskit.validation.ModelTypeValidator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.validation.ModelTypeValidator
---

# ModelTypeValidator

<span id="qiskit.validation.ModelTypeValidator" />

`ModelTypeValidator(*, load_default=<marshmallow.missing>, missing=<marshmallow.missing>, dump_default=<marshmallow.missing>, default=<marshmallow.missing>, data_key=None, attribute=None, validate=None, required=False, allow_none=None, load_only=False, dump_only=False, error_messages=None, metadata=None, **additional_metadata)`

A field able to validate the correct type of a value.

## Attributes

|                                                                                                                                                                          |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| [`ModelTypeValidator.context`](qiskit.validation.ModelTypeValidator.context "qiskit.validation.ModelTypeValidator.context")                                              | The context dictionary for the parent `Schema`.     |
| [`ModelTypeValidator.default`](qiskit.validation.ModelTypeValidator.default "qiskit.validation.ModelTypeValidator.default")                                              |                                                     |
| [`ModelTypeValidator.default_error_messages`](qiskit.validation.ModelTypeValidator.default_error_messages "qiskit.validation.ModelTypeValidator.default_error_messages") | Default error messages for various kinds of errors. |
| [`ModelTypeValidator.missing`](qiskit.validation.ModelTypeValidator.missing "qiskit.validation.ModelTypeValidator.missing")                                              |                                                     |
| [`ModelTypeValidator.name`](qiskit.validation.ModelTypeValidator.name "qiskit.validation.ModelTypeValidator.name")                                                       |                                                     |
| [`ModelTypeValidator.parent`](qiskit.validation.ModelTypeValidator.parent "qiskit.validation.ModelTypeValidator.parent")                                                 |                                                     |
| [`ModelTypeValidator.root`](qiskit.validation.ModelTypeValidator.root "qiskit.validation.ModelTypeValidator.root")                                                       |                                                     |
| [`ModelTypeValidator.valid_types`](qiskit.validation.ModelTypeValidator.valid_types "qiskit.validation.ModelTypeValidator.valid_types")                                  |                                                     |

## Methods

|                                                                                                                                                                            |                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [`ModelTypeValidator.check_type`](qiskit.validation.ModelTypeValidator.check_type "qiskit.validation.ModelTypeValidator.check_type")(value, attr, …)                       | Validates a value against the correct type of the field.                                                  |
| [`ModelTypeValidator.deserialize`](qiskit.validation.ModelTypeValidator.deserialize "qiskit.validation.ModelTypeValidator.deserialize")(value\[, …])                       | Deserialize `value`.                                                                                      |
| [`ModelTypeValidator.fail`](qiskit.validation.ModelTypeValidator.fail "qiskit.validation.ModelTypeValidator.fail")(key, \*\*kwargs)                                        | Helper method that raises a ValidationError with an error message from `self.error_messages`.             |
| [`ModelTypeValidator.get_value`](qiskit.validation.ModelTypeValidator.get_value "qiskit.validation.ModelTypeValidator.get_value")(obj, attr\[, …])                         | Return the value for a given key from an object.                                                          |
| [`ModelTypeValidator.make_error`](qiskit.validation.ModelTypeValidator.make_error "qiskit.validation.ModelTypeValidator.make_error")(key, \*\*kwargs)                      | Helper method to make a ValidationError with an error message from `self.error_messages`.                 |
| [`ModelTypeValidator.make_error_serialize`](qiskit.validation.ModelTypeValidator.make_error_serialize "qiskit.validation.ModelTypeValidator.make_error_serialize")(key, …) | Helper method to return a ValidationError from \_serialize.                                               |
| [`ModelTypeValidator.serialize`](qiskit.validation.ModelTypeValidator.serialize "qiskit.validation.ModelTypeValidator.serialize")(attr, obj\[, …])                         | Pulls the value for the given key from the object, applies the field’s formatting and returns the result. |

