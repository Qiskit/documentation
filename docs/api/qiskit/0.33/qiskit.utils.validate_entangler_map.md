---
title: validate_entangler_map
description: API reference for qiskit.utils.validate_entangler_map
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.utils.validate_entangler_map
---

# qiskit.utils.validate\_entangler\_map

<span id="qiskit.utils.validate_entangler_map" />

`validate_entangler_map(entangler_map, num_qubits, allow_double_entanglement=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.19/qiskit/utils/entangler_map.py "view source code")

Validate a user supplied entangler map and converts entries to ints.

**Parameters**

*   **entangler\_map** (*list\[list]*) – An entangler map, keys are source qubit index (int), value is array of target qubit index(es) (int)
*   **num\_qubits** (*int*) – Number of qubits
*   **allow\_double\_entanglement** (*bool*) – If we allow in two qubits can be entangled each other

**Returns**

Validated/converted map

**Return type**

list

**Raises**

*   **TypeError** – entangler map is not list type or list of list
*   **ValueError** – the index of entangler map is out of range
*   **ValueError** – the qubits are cross-entangled.

