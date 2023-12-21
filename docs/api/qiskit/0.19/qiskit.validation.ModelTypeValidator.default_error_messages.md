---
title: default_error_messages
description: API reference for qiskit.validation.ModelTypeValidator.default_error_messages
in_page_toc_min_heading_level: 1
python_api_type: attribute
python_api_name: qiskit.validation.ModelTypeValidator.default_error_messages
---

# default\_error\_messages

<span id="qiskit.validation.ModelTypeValidator.default_error_messages" />

`= {'null': 'Field may not be null.', 'required': 'Missing data for required field.', 'validator_failed': 'Invalid value.'}`

Default error messages for various kinds of errors. The keys in this dictionary are passed to Field.make\_error. The values are error messages passed to `marshmallow.exceptions.ValidationError`.

