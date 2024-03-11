---
title: validate_qobj_against_schema
description: API reference for qiskit.qobj.validate_qobj_against_schema
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.qobj.validate_qobj_against_schema
---

<span id="qiskit-qobj-validate-qobj-against-schema" />

# qiskit.qobj.validate\_qobj\_against\_schema

<span id="qiskit.qobj.validate_qobj_against_schema" />

`validate_qobj_against_schema(qobj)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/qobj/utils.py "view source code")

Validates a QObj against the .json schema.

**Parameters**

**qobj** ([*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")) – Qobj to be validated.

**Raises**

[**SchemaValidationError**](qiskit.validation.jsonschema.SchemaValidationError "qiskit.validation.jsonschema.SchemaValidationError") – if the qobj fails schema validation

