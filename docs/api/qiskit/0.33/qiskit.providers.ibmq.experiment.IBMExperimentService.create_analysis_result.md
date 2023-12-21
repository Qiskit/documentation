# qiskit.providers.ibmq.experiment.IBMExperimentService.create\_analysis\_result

`IBMExperimentService.create_analysis_result(experiment_id, result_data, result_type, device_components=None, tags=None, quality=<ResultQuality.UNKNOWN: 'UNKNOWN'>, verified=False, result_id=None, chisq=None, json_encoder=<class 'json.encoder.JSONEncoder'>, **kwargs)`

Create a new analysis result in the database.

**Parameters**

*   **experiment\_id** (`str`) – ID of the experiment this result is for.
*   **result\_data** (`Dict`) – Result data to be stored.
*   **result\_type** (`str`) – Analysis result type.
*   **device\_components** (`Union`\[`List`\[`Union`\[`str`, `DeviceComponent`]], `str`, `DeviceComponent`, `None`]) – Target device components, such as qubits.
*   **tags** (`Optional`\[`List`\[`str`]]) – Tags to be associated with the analysis result.
*   **quality** (`Union`\[`ResultQuality`, `str`]) – Quality of this analysis.
*   **verified** (`bool`) – Whether the result quality has been verified.
*   **result\_id** (`Optional`\[`str`]) – Analysis result ID. It must be in the `uuid4` format. One will be generated if not supplied.
*   **chisq** (`Optional`\[`float`]) – chi^2 decimal value of the fit.
*   **json\_encoder** (`Type`\[`JSONEncoder`]) – Custom JSON encoder to use to encode the analysis result.
*   **kwargs** (`Any`) – Additional analysis result attributes that are not supported and will be ignored.

**Return type**

`str`

**Returns**

Analysis result ID.

**Raises**

*   [**IBMExperimentEntryExists**](qiskit.providers.ibmq.experiment.IBMExperimentEntryExists#qiskit.providers.ibmq.experiment.IBMExperimentEntryExists "qiskit.providers.ibmq.experiment.IBMExperimentEntryExists") – If the analysis result already exits.
*   **IBMQApiError** – If the request to the server failed.
