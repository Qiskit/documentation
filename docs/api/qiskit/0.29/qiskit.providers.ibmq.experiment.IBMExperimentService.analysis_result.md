# qiskit.providers.ibmq.experiment.IBMExperimentService.analysis\_result

`IBMExperimentService.analysis_result(result_id, json_decoder=<class 'json.decoder.JSONDecoder'>)`

Retrieve a previously stored experiment.

**Parameters**

*   **result\_id** (`str`) – Analysis result ID.
*   **json\_decoder** (`Type`\[`JSONDecoder`]) – Custom JSON decoder to use to decode the retrieved analysis result.

**Return type**

`Dict`

**Returns**

Retrieved analysis result.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the analysis result does not exist.
*   **IBMQApiError** – If the request to the server failed.
