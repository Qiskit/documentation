# qiskit.providers.ibmq.IBMQBackend.properties

`IBMQBackend.properties(refresh=False, datetime=None)`

Return the backend properties, subject to optional filtering.

This data describes qubits properties (such as T1 and T2), gates properties (such as gate length and error), and other general properties of the backend.

The schema for backend properties can be found in [Qiskit/ibm-quantum-schemas](https://github.com/Qiskit/ibm-quantum-schemas/blob/main/schemas/backend_properties_schema.json).

**Parameters**

*   **refresh** (`bool`) – If `True`, re-query the server for the backend properties. Otherwise, return a cached version.
*   **datetime** (`Optional`\[`datetime`]) – By specifying datetime, this function returns an instance of the [`BackendProperties`](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") whose timestamp is closest to, but older than, the specified datetime.

**Return type**

`Optional`\[`BackendProperties`]

**Returns**

The backend properties or `None` if the backend properties are not currently available.

**Raises**

**TypeError** – If an input argument is not of the correct type.
