# qiskit.utils.validate\_entangler\_map[¶](#qiskit-utils-validate-entangler-map "Permalink to this headline")

<span id="undefined" />

`validate_entangler_map(entangler_map, num_qubits, allow_double_entanglement=False)`

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
