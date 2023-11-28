# qiskit.providers.ibmq.experiment.AnalysisResult

<span id="undefined" />

`AnalysisResult(experiment_uuid, device_components, result_type, fit=None, chisq=None, quality=<ResultQuality.UNKNOWN: 'No Information'>, tags=None, result_uuid=None, backend_name=None, verified=False)`

Class representing an analysis result for an experiment.

AnalysisResult constructor.

**Parameters**

*   **experiment\_uuid** (`str`) – Unique identifier of the experiment.
*   **device\_components** (`List`\[`str`]) – Device component types.
*   **result\_type** (`str`) – Result type.
*   **fit** (`Optional`\[`Dict`]) – Fit value.
*   **chisq** (`Optional`\[`float`]) – chi^2 decimal value of the fit.
*   **quality** (`Union`\[`ResultQuality`, `str`]) – Quality of the measurement value.
*   **tags** (`Optional`\[`List`\[`str`]]) – Tags for this result.
*   **result\_uuid** (`Optional`\[`str`]) – Unique identifier for the result.
*   **backend\_name** (`Optional`\[`str`]) – Name of the backend on which the experiment was run.
*   **verified** (`Optional`\[`bool`]) – Indicates whether this result has been verified..

**Raises**

**IBMQInputValueError** – If an input argument is invalid.

<span id="undefined" />

`__init__(experiment_uuid, device_components, result_type, fit=None, chisq=None, quality=<ResultQuality.UNKNOWN: 'No Information'>, tags=None, result_uuid=None, backend_name=None, verified=False)`

AnalysisResult constructor.

**Parameters**

*   **experiment\_uuid** (`str`) – Unique identifier of the experiment.
*   **device\_components** (`List`\[`str`]) – Device component types.
*   **result\_type** (`str`) – Result type.
*   **fit** (`Optional`\[`Dict`]) – Fit value.
*   **chisq** (`Optional`\[`float`]) – chi^2 decimal value of the fit.
*   **quality** (`Union`\[`ResultQuality`, `str`]) – Quality of the measurement value.
*   **tags** (`Optional`\[`List`\[`str`]]) – Tags for this result.
*   **result\_uuid** (`Optional`\[`str`]) – Unique identifier for the result.
*   **backend\_name** (`Optional`\[`str`]) – Name of the backend on which the experiment was run.
*   **verified** (`Optional`\[`bool`]) – Indicates whether this result has been verified..

**Raises**

**IBMQInputValueError** – If an input argument is invalid.

## Methods

|                                                                                                                                                                                               |                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`__init__`](#qiskit.providers.ibmq.experiment.AnalysisResult.__init__ "qiskit.providers.ibmq.experiment.AnalysisResult.__init__")(experiment\_uuid, device\_components, …)                   | AnalysisResult constructor.                               |
| [`from_remote_data`](#qiskit.providers.ibmq.experiment.AnalysisResult.from_remote_data "qiskit.providers.ibmq.experiment.AnalysisResult.from_remote_data")(remote\_data)                      | Create an instance of this class from remote data.        |
| [`update_from_remote_data`](#qiskit.providers.ibmq.experiment.AnalysisResult.update_from_remote_data "qiskit.providers.ibmq.experiment.AnalysisResult.update_from_remote_data")(remote\_data) | Update the attributes of this instance using remote data. |

## Attributes

|                                                                                                                                                               |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`creation_datetime`](#qiskit.providers.ibmq.experiment.AnalysisResult.creation_datetime "qiskit.providers.ibmq.experiment.AnalysisResult.creation_datetime") | Return the timestamp when the experiment was created.      |
| [`quality`](#qiskit.providers.ibmq.experiment.AnalysisResult.quality "qiskit.providers.ibmq.experiment.AnalysisResult.quality")                               | Return the analysis result quality.                        |
| [`updated_datetime`](#qiskit.providers.ibmq.experiment.AnalysisResult.updated_datetime "qiskit.providers.ibmq.experiment.AnalysisResult.updated_datetime")    | Return the timestamp when the experiment was last updated. |
| [`uuid`](#qiskit.providers.ibmq.experiment.AnalysisResult.uuid "qiskit.providers.ibmq.experiment.AnalysisResult.uuid")                                        | Return UUID of this analysis result.                       |

<span id="undefined" />

`property creation_datetime`

Return the timestamp when the experiment was created.

**Return type**

`datetime`

<span id="undefined" />

`classmethod from_remote_data(remote_data)`

Create an instance of this class from remote data.

**Parameters**

**remote\_data** (`Dict`) – Remote data to use.

**Return type**

`AnalysisResult`

**Returns**

An instance of this class.

<span id="undefined" />

`property quality`

Return the analysis result quality.

**Return type**

`ResultQuality`

<span id="undefined" />

`update_from_remote_data(remote_data)`

Update the attributes of this instance using remote data.

**Parameters**

**remote\_data** (`Dict`) – Remote data used to update this instance.

**Return type**

`None`

<span id="undefined" />

`property updated_datetime`

Return the timestamp when the experiment was last updated.

**Return type**

`datetime`

<span id="undefined" />

`property uuid`

Return UUID of this analysis result.

**Return type**

`str`
