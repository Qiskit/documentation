# qiskit.providers.ibmq.experiment.IBMExperimentService.update\_analysis\_result

`IBMExperimentService.update_analysis_result(result_id, result_data=None, tags=None, quality=None, verified=None, chisq=None, json_encoder=<class 'json.encoder.JSONEncoder'>, **kwargs)`

Update an existing analysis result.

**Parameters**

*   **result\_id** (`str`) – Analysis result ID.
*   **result\_data** (`Optional`\[`Dict`]) – Result data to be stored.
*   **quality** (`Union`\[`ResultQuality`, `str`, `None`]) – Quality of this analysis.
*   **verified** (`Optional`\[`bool`]) – Whether the result quality has been verified.
*   **tags** (`Optional`\[`List`\[`str`]]) – Tags to be associated with the analysis result.
*   **chisq** (`Optional`\[`float`]) – chi^2 decimal value of the fit.
*   **json\_encoder** (`Type`\[`JSONEncoder`]) – Custom JSON encoder to use to encode the analysis result.
*   **kwargs** (`Any`) – Additional analysis result attributes that are not supported and will be ignored.

**Raises**

*   [**IBMExperimentEntryNotFound**](qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound#qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound "qiskit.providers.ibmq.experiment.IBMExperimentEntryNotFound") – If the analysis result does not exist.
*   **IBMQApiError** – If the request to the server failed.

**Return type**

`None`
