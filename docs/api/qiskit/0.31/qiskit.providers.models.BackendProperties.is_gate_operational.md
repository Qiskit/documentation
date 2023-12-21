# qiskit.providers.models.BackendProperties.is\_gate\_operational

`BackendProperties.is_gate_operational(gate, qubits=None)`

Return the operational status of the given gate.

**Parameters**

*   **gate** (`str`) – Name of the gate.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`], `None`]) – The qubit to find the operational status for.

**Returns**

Operational status of the given gate. True if the gate is operational, False otherwise.

**Return type**

bool
