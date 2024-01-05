---
title: ParameterVector
description: API reference for qiskit.circuit.ParameterVector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ParameterVector
---

<span id="qiskit-circuit-parametervector" />

# qiskit.circuit.ParameterVector

<span id="qiskit.circuit.ParameterVector" />

`ParameterVector(name, length=0)`

ParameterVector class to quickly generate lists of parameters.

### \_\_init\_\_

<span id="qiskit.circuit.ParameterVector.__init__" />

`__init__(name, length=0)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

## Attributes

### name

<span id="qiskit.circuit.ParameterVector.name" />

`property name`

Returns the name of the ParameterVector.

### params

<span id="qiskit.circuit.ParameterVector.params" />

`property params`

Returns the list of parameters in the ParameterVector.

### resize

<span id="qiskit.circuit.ParameterVector.resize" />

`resize(length)`

Resize the parameter vector.

If necessary, new elements are generated. If length is smaller than before, the previous elements are cached and not re-generated if the vector is enlargened again. This is to ensure that the parameter instances do not change.

