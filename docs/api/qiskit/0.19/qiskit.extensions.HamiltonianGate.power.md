---
title: power
description: API reference for qiskit.extensions.HamiltonianGate.power
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.extensions.HamiltonianGate.power
---

# power

<span id="qiskit.extensions.HamiltonianGate.power" />

`HamiltonianGate.power(exponent)`

Creates a unitary gate as gate^exponent.

**Parameters**

**exponent** (*float*) – Gate^exponent

**Returns**

To which to\_matrix is self.to\_matrix^exponent.

**Return type**

[qiskit.extensions.UnitaryGate](qiskit.extensions.UnitaryGate "qiskit.extensions.UnitaryGate")

**Raises**

**CircuitError** – If Gate is not unitary

