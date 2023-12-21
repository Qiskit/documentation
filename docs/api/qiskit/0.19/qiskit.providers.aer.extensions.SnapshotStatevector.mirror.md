---
title: mirror
description: API reference for qiskit.providers.aer.extensions.SnapshotStatevector.mirror
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.extensions.SnapshotStatevector.mirror
---

# mirror

<span id="qiskit.providers.aer.extensions.SnapshotStatevector.mirror" />

`SnapshotStatevector.mirror()`

For a composite instruction, reverse the order of sub-gates.

This is done by recursively mirroring all sub-instructions. It does not invert any gate.

**Returns**

a fresh gate with sub-gates reversed

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

