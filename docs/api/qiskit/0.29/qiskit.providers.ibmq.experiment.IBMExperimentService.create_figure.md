# qiskit.providers.ibmq.experiment.IBMExperimentService.create\_figure

`IBMExperimentService.create_figure(experiment_id, figure, figure_name=None, sync_upload=True)`

Store a new figure in the database.

<Admonition title="Note" type="note">
  Currently only SVG figures are supported.
</Admonition>

**Parameters**

*   **experiment\_id** (`str`) – ID of the experiment this figure is for.
*   **figure** (`Union`\[`str`, `bytes`]) – Name of the figure file or figure data to store.
*   **figure\_name** (`Optional`\[`str`]) – Name of the figure. If `None`, the figure file name, if given, or a generated name is used.
*   **sync\_upload** (`bool`) – If `True`, the plot will be uploaded synchronously. Otherwise the upload will be asynchronous.

**Return type**

`Tuple`\[`str`, `int`]

**Returns**

A tuple of the name and size of the saved figure.

**Raises**

*   [**IBMExperimentEntryExists**](qiskit.providers.ibmq.experiment.IBMExperimentEntryExists#qiskit.providers.ibmq.experiment.IBMExperimentEntryExists "qiskit.providers.ibmq.experiment.IBMExperimentEntryExists") – If the figure already exits.
*   **IBMQApiError** – If the request to the server failed.
