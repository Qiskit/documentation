# qiskit.providers.models.BackendProperties.gate\_error

`BackendProperties.gate_error(gate, qubits)`

Return gate error estimates from backend properties.

**Parameters**

*   **gate** (`str`) – The gate for which to get the error.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`]]) – The specific qubits for the gate.

**Return type**

`float`

**Returns**

Gate error of the given gate and qubit(s).
