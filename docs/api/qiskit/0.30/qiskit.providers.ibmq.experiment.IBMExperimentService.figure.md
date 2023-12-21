# qiskit.providers.ibmq.experiment.IBMExperimentService.figure

`IBMExperimentService.figure(experiment_id, figure_name, file_name=None)`

Retrieve an existing figure.

**Parameters**

*   **experiment\_id** (`str`) – Experiment ID.
*   **figure\_name** (`str`) – Name of the figure.
*   **file\_name** (`Optional`\[`str`]) – Name of the local file to save the figure to. If `None`, the content of the figure is returned instead.

**Return type**

`Union`\[`int`, `bytes`]

**Returns**

The size of the figure if file\_name is specified. Otherwise the content of the figure in bytes.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the figure does not exist.
*   **IBMQApiError** – If the request to the server failed.
