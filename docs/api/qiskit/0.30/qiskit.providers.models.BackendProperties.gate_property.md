# qiskit.providers.models.BackendProperties.gate\_property

`BackendProperties.gate_property(gate, qubits=None, name=None)`

Return the property of the given gate.

**Parameters**

*   **gate** (`str`) – Name of the gate.
*   **qubits** (`Union`\[`int`, `Iterable`\[`int`], `None`]) – The qubit to find the property for.
*   **name** (`Optional`\[`str`]) – Optionally used to specify which gate property to return.

**Return type**

`Tuple`\[`Any`, `datetime`]

**Returns**

Gate property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](qiskit.providers.BackendPropertyError#qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found or name is specified but qubit is not.
