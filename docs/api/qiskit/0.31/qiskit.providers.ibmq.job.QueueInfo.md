# QueueInfo[¶](#queueinfo "Permalink to this headline")

<span id="undefined" />

`QueueInfo(position=None, status=None, estimated_start_time=None, estimated_complete_time=None, hub_priority=None, group_priority=None, project_priority=None, job_id=None, **kwargs)`

Bases: `object`

Queue information for a job.

QueueInfo constructor.

**Parameters**

*   **position** (`Optional`\[`int`]) – Position in the queue.
*   **status** (`Optional`\[`str`]) – Job status.
*   **estimated\_start\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated start time for the job, in UTC.
*   **estimated\_complete\_time** (`Union`\[`str`, `datetime`, `None`]) – Estimated complete time for the job, in UTC.
*   **hub\_priority** (`Optional`\[`float`]) – Dynamic priority for the hub.
*   **group\_priority** (`Optional`\[`float`]) – Dynamic priority for the group.
*   **project\_priority** (`Optional`\[`float`]) – Dynamic priority for the project.
*   **job\_id** (`Optional`\[`str`]) – Job ID.
*   **kwargs** (`Any`) – Additional attributes.

## Methods

|                                                                                                                                                |                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`format`](qiskit.providers.ibmq.job.QueueInfo.format#qiskit.providers.ibmq.job.QueueInfo.format "qiskit.providers.ibmq.job.QueueInfo.format") | Build a user-friendly report for the job queue information. |

## Attributes

<span id="undefined" />

### estimated\_complete\_time

Return estimated complete time in local time.

**Return type**

`Optional`\[`datetime`]

<span id="undefined" />

### estimated\_start\_time

Return estimated start time in local time.

**Return type**

`Optional`\[`datetime`]
