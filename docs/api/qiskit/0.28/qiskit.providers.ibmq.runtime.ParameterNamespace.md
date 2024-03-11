---
title: ParameterNamespace
description: API reference for qiskit.providers.ibmq.runtime.ParameterNamespace
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.runtime.ParameterNamespace
---

# qiskit.providers.ibmq.runtime.ParameterNamespace

<span id="qiskit.providers.ibmq.runtime.ParameterNamespace" />

`ParameterNamespace(params)` [GitHub](https://github.com/qiskit/qiskit-ibmq-provider/tree/stable/0.15/qiskit/providers/ibmq/runtime/runtime_program.py "view source code")

A namespace for program parameters with validation.

This class provides a namespace for program parameters with auto-completion and validation support.

ParameterNamespace constructor.

**Parameters**

**params** (`List`\[`ProgramParameter`]) – The program’s input parameters.

### \_\_init\_\_

<span id="qiskit.providers.ibmq.runtime.ParameterNamespace.__init__" />

`__init__(params)`

ParameterNamespace constructor.

**Parameters**

**params** (`List`\[`ProgramParameter`]) – The program’s input parameters.

## Methods

|                                                                                                                                              |                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.ParameterNamespace.__init__ "qiskit.providers.ibmq.runtime.ParameterNamespace.__init__")(params) | ParameterNamespace constructor. |
| [`validate`](#qiskit.providers.ibmq.runtime.ParameterNamespace.validate "qiskit.providers.ibmq.runtime.ParameterNamespace.validate")()       | Validate program input values.  |

## Attributes

|                                                                                                                                      |                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------ |
| [`metadata`](#qiskit.providers.ibmq.runtime.ParameterNamespace.metadata "qiskit.providers.ibmq.runtime.ParameterNamespace.metadata") | Returns the parameter metadata |

### metadata

<span id="qiskit.providers.ibmq.runtime.ParameterNamespace.metadata" />

`property metadata`

Returns the parameter metadata

**Return type**

`List`\[`ProgramParameter`]

### validate

<span id="qiskit.providers.ibmq.runtime.ParameterNamespace.validate" />

`validate()`

Validate program input values.

<Admonition title="Note" type="note">
  This method only verifies that required parameters have values. It does not fail the validation if the namepsace has extraneous parameters.
</Admonition>

**Raises**

**IBMQInputValueError if validation fails** –

**Return type**

`None`

