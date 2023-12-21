---
title: data
description: API reference for qiskit.circuit.library.Permutation.data
in_page_toc_min_heading_level: 1
python_api_type: property
python_api_name: qiskit.circuit.library.Permutation.data
---

# data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

