# qiskit.providers.ibmq.experiment.IBMExperimentService.device\_components

`IBMExperimentService.device_components(backend_name=None)`

Return the device components.

**Parameters**

**backend\_name** (`Optional`\[`str`]) – Name of the backend whose components are to be retrieved.

**Return type**

`Union`\[`Dict`\[`str`, `List`], `List`]

**Returns**

A list of device components if backend\_name is specified. Otherwise a dictionary whose keys are backend names the values are lists of device components for the backends.

**Raises**

**IBMQApiError** – If the request to the server failed.
