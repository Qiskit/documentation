---
title: to_gate
description: API reference for qiskit.circuit.library.QuantumVolume.to_gate
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.circuit.library.QuantumVolume.to_gate
---

# to\_gate

<span id="qiskit.circuit.library.QuantumVolume.to_gate" />

`QuantumVolume.to_gate(parameter_map=None)`

Create a Gate out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the gate. If None, existing circuit parameters will also parameterize the gate.

**Returns**

a composite gate encapsulating this circuit (can be decomposed back)

**Return type**

[Gate](qiskit.circuit.Gate "qiskit.circuit.Gate")

