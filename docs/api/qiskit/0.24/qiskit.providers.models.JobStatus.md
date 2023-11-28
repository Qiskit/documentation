<span id="qiskit-providers-models-jobstatus" />

# qiskit.providers.models.JobStatus

<span id="undefined" />

`JobStatus(job_id, status, status_msg, **kwargs)`

Model for JobStatus.

<span id="undefined" />

### job\_id

backend job\_id.

**Type**

str

<span id="undefined" />

### status

status of the job.

**Type**

str

<span id="undefined" />

### status\_msg

status message.

**Type**

str

<span id="undefined" />

`__init__(job_id, status, status_msg, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                  |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.models.JobStatus.__init__ "qiskit.providers.models.JobStatus.__init__")(job\_id, status, status\_msg, \*\*kwargs) | Initialize self.                                            |
| [`from_dict`](#qiskit.providers.models.JobStatus.from_dict "qiskit.providers.models.JobStatus.from_dict")(data)                                  | Create a new JobStatus object from a dictionary.            |
| [`to_dict`](#qiskit.providers.models.JobStatus.to_dict "qiskit.providers.models.JobStatus.to_dict")()                                            | Return a dictionary format representation of the JobStatus. |

<span id="undefined" />

`classmethod from_dict(data)`

Create a new JobStatus object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the JobStatus to create. It will be in the same format as output by [`to_dict()`](#qiskit.providers.models.JobStatus.to_dict "qiskit.providers.models.JobStatus.to_dict").

**Returns**

**The `JobStatus` from the input**

dictionary.

**Return type**

qiskit.providers.model.JobStatus

<span id="undefined" />

`to_dict()`

Return a dictionary format representation of the JobStatus.

**Returns**

The dictionary form of the JobStatus.

**Return type**

dict
