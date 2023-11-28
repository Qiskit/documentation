# BackendStatus

<span id="undefined" />

`BackendStatus(backend_name, backend_version, operational, pending_jobs, status_msg)`

Bases: `object`

Class representing Backend Status.

Initialize a BackendStatus object

**Parameters**

*   **backend\_name** (`str`) – The backend’s name
*   **backend\_version** (`str`) – The backend’s version of the form X.Y.Z
*   **operational** (`bool`) – True if the backend is operational
*   **pending\_jobs** (`int`) – The number of pending jobs on the backend
*   **status\_msg** (`str`) – The status msg for the backend

**Raises**

**QiskitError** – If the backend version is in an invalid format

## Methods

|                                                                                                                                                                  |                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`from_dict`](qiskit.providers.models.BackendStatus.from_dict#qiskit.providers.models.BackendStatus.from_dict "qiskit.providers.models.BackendStatus.from_dict") | Create a new BackendStatus object from a dictionary.            |
| [`to_dict`](qiskit.providers.models.BackendStatus.to_dict#qiskit.providers.models.BackendStatus.to_dict "qiskit.providers.models.BackendStatus.to_dict")         | Return a dictionary format representation of the BackendStatus. |
