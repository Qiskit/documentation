---
title: ParameterNamespace
description: API reference for qiskit_ibm_runtime.ParameterNamespace
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.ParameterNamespace
---

# ParameterNamespace[¶](#parameternamespace "Link to this heading")

<span id="qiskit_ibm_runtime.ParameterNamespace" />

`ParameterNamespace(parameters)¶`

A namespace for program parameters with validation.

This class provides a namespace for program parameters with auto-completion and validation support.

ParameterNamespace constructor.

**Parameters**

**parameters** (`Dict`) – The program’s input parameters.

## Attributes

<span id="parameternamespace-metadata" />

### metadata

<span id="qiskit_ibm_runtime.ParameterNamespace.metadata" />

`Dict`

Returns the parameter metadata

**Return type**

`Dict`

## Methods

<span id="parameternamespace-to-dict" />

### to\_dict

<span id="qiskit_ibm_runtime.ParameterNamespace.to_dict" />

`ParameterNamespace.to_dict()¶`

Convert to dictionary.

**Return type**

`Dict`

<span id="parameternamespace-validate" />

### validate

<span id="qiskit_ibm_runtime.ParameterNamespace.validate" />

`ParameterNamespace.validate()¶`

Validate program input values.

<Admonition title="Note" type="note">
  This method only verifies that required parameters have values. It does not fail the validation if the namespace has extraneous parameters.
</Admonition>

**Raises**

**IBMInputValueError** – if validation fails

**Return type**

`None`

