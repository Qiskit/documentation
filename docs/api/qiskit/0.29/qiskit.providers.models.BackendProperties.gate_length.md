# qiskit.providers.models.BackendProperties.gate\_length

`BackendProperties.gate_length(gate, qubits)`

Return the duration of the gate in units of seconds.

**Parameters**

*   **gate** (`str`) – The gate for which to get the duration.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the gate.

**Return type**

`float`

**Returns**

Gate length of the given gate and qubit(s).
