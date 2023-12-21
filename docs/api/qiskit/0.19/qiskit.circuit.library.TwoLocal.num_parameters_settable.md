---
title: num_parameters_settable
description: API reference for qiskit.circuit.library.TwoLocal.num_parameters_settable
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.circuit.library.TwoLocal.num_parameters_settable
---

# num\_parameters\_settable

<span id="qiskit.circuit.library.TwoLocal.num_parameters_settable" />

`int`

The number of total parameters that can be set to distinct values.

This does not change when the parameters are bound or exchanged for same parameters, and therefore is different from `num_parameters` which counts the number of unique [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects currently in the circuit.

**Return type**

`int`

**Returns**

The number of parameters originally available in the circuit.

<Admonition title="Note" type="note">
  This quantity does not require the circuit to be built yet.
</Admonition>

