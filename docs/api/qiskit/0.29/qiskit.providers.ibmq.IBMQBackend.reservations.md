# qiskit.providers.ibmq.IBMQBackend.reservations

`IBMQBackend.reservations(start_datetime=None, end_datetime=None)`

Return backend reservations.

If start\_datetime and/or end\_datetime is specified, reservations with time slots that overlap with the specified time window will be returned.

Some of the reservation information is only available if you are the owner of the reservation.

**Parameters**

*   **start\_datetime** (`Optional`\[`datetime`]) – Filter by the given start date/time, in local timezone.
*   **end\_datetime** (`Optional`\[`datetime`]) – Filter by the given end date/time, in local timezone.

**Return type**

`List`\[`BackendReservation`]

**Returns**

A list of reservations that match the criteria.
