---
title: check_type
description: API reference for qiskit.validation.ModelTypeValidator.check_type
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.validation.ModelTypeValidator.check_type
---

# check\_type

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

