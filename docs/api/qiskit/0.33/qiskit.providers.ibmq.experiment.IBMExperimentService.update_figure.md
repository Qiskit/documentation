# qiskit.providers.ibmq.experiment.IBMExperimentService.update\_figure

`IBMExperimentService.update_figure(experiment_id, figure, figure_name, sync_upload=True)`

Update an existing figure.

**Parameters**

*   **experiment\_id** (`str`) – Experiment ID.
*   **figure** (`Union`\[`str`, `bytes`]) – Name of the figure file or figure data to store.
*   **figure\_name** (`str`) – Name of the figure.
*   **sync\_upload** (`bool`) – If `True`, the plot will be uploaded synchronously. Otherwise the upload will be asynchronous.

**Return type**

`Tuple`\[`str`, `int`]

**Returns**

A tuple of the name and size of the saved figure.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the figure does not exist.
*   **IBMQApiError** – If the request to the server failed.
