# qiskit.providers.models.BackendProperties.qubit\_property

`BackendProperties.qubit_property(qubit, name=None)`

Return the property of the given qubit.

**Parameters**

*   **qubit** (`int`) – The property to look for.
*   **name** (`Optional`\[`str`]) – Optionally used to specify within the hierarchy which property to return.

**Return type**

`Tuple`\[`Any`, `datetime`]

**Returns**

Qubit property as a tuple of the value and the time it was measured.

**Raises**

[**BackendPropertyError**](qiskit.providers.BackendPropertyError#qiskit.providers.BackendPropertyError "qiskit.providers.BackendPropertyError") – If the property is not found.
