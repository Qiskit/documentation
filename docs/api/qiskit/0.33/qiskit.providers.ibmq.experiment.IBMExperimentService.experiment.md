# qiskit.providers.ibmq.experiment.IBMExperimentService.experiment

`IBMExperimentService.experiment(experiment_id, json_decoder=<class 'json.decoder.JSONDecoder'>)`

Retrieve a previously stored experiment.

**Parameters**

*   **experiment\_id** (`str`) – Experiment ID.
*   **json\_decoder** (`Type`\[`JSONDecoder`]) – Custom JSON decoder to use to decode the retrieved experiment.

**Return type**

`Dict`

**Returns**

Retrieved experiment data.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the experiment does not exist.
*   **IBMQApiError** – If the request to the server failed.
