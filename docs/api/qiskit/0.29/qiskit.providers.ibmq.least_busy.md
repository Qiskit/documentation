# qiskit.providers.ibmq.least\_busy

<span id="undefined" />

`least_busy(backends, reservation_lookahead=60)`

Return the least busy backend from a list.

Return the least busy available backend for those that have a `pending_jobs` in their `status`. Note that local backends may not have this attribute.

**Parameters**

*   **backends** (`List`\[`Union`\[`Backend`, `BaseBackend`]]) – The backends to choose from.
*   **reservation\_lookahead** (`Optional`\[`int`]) – A backend is considered unavailable if it has reservations in the next `n` minutes, where `n` is the value of `reservation_lookahead`. If `None`, reservations are not taken into consideration.

**Return type**

`Union`\[`Backend`, `BaseBackend`]

**Returns**

The backend with the fewest number of pending jobs.

**Raises**

[**IBMQError**](qiskit.providers.ibmq.IBMQError#qiskit.providers.ibmq.IBMQError "qiskit.providers.ibmq.IBMQError") – If the backends list is empty, or if none of the backends is available, or if a backend in the list does not have the `pending_jobs` attribute in its status.
