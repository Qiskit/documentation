---
title: ModelTypeValidator
description: API reference for qiskit.validation.ModelTypeValidator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.validation.ModelTypeValidator
---

# ModelTypeValidator

<span id="qiskit.validation.ModelTypeValidator" />

`ModelTypeValidator(*, load_default=<marshmallow.missing>, missing=<marshmallow.missing>, dump_default=<marshmallow.missing>, default=<marshmallow.missing>, data_key=None, attribute=None, validate=None, required=False, allow_none=None, load_only=False, dump_only=False, error_messages=None, metadata=None, **additional_metadata)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/validation/base.py "view source code")

A field able to validate the correct type of a value.

## Attributes

### context

The context dictionary for the parent `Schema`.

### default

### default\_error\_messages

<span id="qiskit.validation.ModelTypeValidator.default_error_messages" />

`= {'null': 'Field may not be null.', 'required': 'Missing data for required field.', 'validator_failed': 'Invalid value.'}`

Default error messages for various kinds of errors. The keys in this dictionary are passed to Field.make\_error. The values are error messages passed to `marshmallow.exceptions.ValidationError`.

### missing

### name

<span id="qiskit.validation.ModelTypeValidator.name" />

`= None`

### parent

<span id="qiskit.validation.ModelTypeValidator.parent" />

`= None`

### root

<span id="qiskit.validation.ModelTypeValidator.root" />

`= None`

### valid\_types

<span id="qiskit.validation.ModelTypeValidator.valid_types" />

`= (,)`

## Methods

### check\_type

<span id="qiskit.validation.ModelTypeValidator.check_type" />

`ModelTypeValidator.check_type(value, attr, data, **_)`

Validates a value against the correct type of the field.

It calls `_expected_types` to get a list of valid types.

Subclasses can do one of the following:

1.  Override the `valid_types` property with a tuple with the expected types for this field.
2.  Override the `_expected_types` method to return a tuple of expected types for the field.
3.  Change `check_type` completely to customize validation.

<Admonition title="Note" type="note">
  This method or the overrides must return the `value` parameter untouched.
</Admonition>

### deserialize

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

### fail

<span id="qiskit.validation.ModelTypeValidator.fail" />

`ModelTypeValidator.fail(key, **kwargs)`

Helper method that raises a ValidationError with an error message from `self.error_messages`.

<Admonition title="Deprecated since version 3.0.0" type="danger">
  Use make\_error \<marshmallow\.fields.Field.make\_error> instead.
</Admonition>

### get\_value

<span id="qiskit.validation.ModelTypeValidator.get_value" />

`ModelTypeValidator.get_value(obj, attr, accessor=None, default=<marshmallow.missing>)`

Return the value for a given key from an object.

**Parameters**

*   **obj** (*object*) – The object to get the value from.
*   **attr** (*str*) – The attribute/key in obj to get the value from.
*   **accessor** (*callable*) – A callable used to retrieve the value of attr from the object obj. Defaults to marshmallow\.utils.get\_value.

### make\_error

<span id="qiskit.validation.ModelTypeValidator.make_error" />

`ModelTypeValidator.make_error(key, **kwargs)`

Helper method to make a ValidationError with an error message from `self.error_messages`.

**Return type**

`ValidationError`

### make\_error\_serialize

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

### serialize

<span id="qiskit.validation.ModelTypeValidator.serialize" />

`ModelTypeValidator.serialize(attr, obj, accessor=None, **kwargs)`

Pulls the value for the given key from the object, applies the field’s formatting and returns the result.

**Parameters**

*   **attr** (`str`) – The attribute/key to get from the object.
*   **obj** (`Any`) – The object to access the attribute/key from.
*   **accessor** (`Optional`\[`Callable`\[\[`Any`, `str`, `Any`], `Any`]]) – Function used to access values from `obj`.
*   **kwargs** – Field-specific keyword arguments.

