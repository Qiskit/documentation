---
title: resize
description: API reference for qiskit.circuit.ParameterVector.resize
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.ParameterVector.resize
---

# resize

<span id="qiskit.circuit.ParameterVector.resize" />

`ParameterVector.resize(length)`

Resize the parameter vector.

If necessary, new elements are generated. If length is smaller than before, the previous elements are cached and not re-generated if the vector is enlargened again. This is to ensure that the parameter instances do not change.

