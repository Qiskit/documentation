---
title: ParameterVector
description: API reference for qiskit.circuit.ParameterVector
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.ParameterVector
---

# ParameterVector

<span id="qiskit.circuit.ParameterVector" />

`qiskit.circuit.ParameterVector(name, length=0)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/circuit/parametervector.py "view source code")

Bases: [`object`](https://docs.python.org/3/library/functions.html#object "(in Python v3.12)")

ParameterVector class to quickly generate lists of parameters.

## Attributes

<span id="qiskit.circuit.ParameterVector.name" />

### name

Returns the name of the ParameterVector.

<span id="qiskit.circuit.ParameterVector.params" />

### params

Returns the list of parameters in the ParameterVector.

## Methods

### index

<span id="qiskit.circuit.ParameterVector.index" />

`index(value)`

Returns first index of value.

### resize

<span id="qiskit.circuit.ParameterVector.resize" />

`resize(length)`

Resize the parameter vector.

If necessary, new elements are generated. If length is smaller than before, the previous elements are cached and not re-generated if the vector is enlarged again. This is to ensure that the parameter instances do not change.

