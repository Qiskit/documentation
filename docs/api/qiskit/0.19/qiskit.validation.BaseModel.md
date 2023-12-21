---
title: BaseModel
description: API reference for qiskit.validation.BaseModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.validation.BaseModel
---

# BaseModel

<span id="qiskit.validation.BaseModel" />

`BaseModel(validate=True, **kwargs)`

Base class for Models for validated Qiskit classes.

BaseModel initializer.

<Admonition title="Note" type="note">
  The `validate` argument is used for controlling the behavior of the schema binding, and will not be present on the created object.
</Admonition>

## Methods

|                                                                                                                |                                                                    |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`BaseModel.from_dict`](qiskit.validation.BaseModel.from_dict "qiskit.validation.BaseModel.from_dict")(dict\_) | Deserialize a dict of simple types into an instance of this class. |
| [`BaseModel.to_dict`](qiskit.validation.BaseModel.to_dict "qiskit.validation.BaseModel.to_dict")()             | Serialize the model into a Python dict of simple types.            |

