---
title: jobs
description: API reference for qiskit.providers.ibmq.IBMQBackend.jobs
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackend.jobs
---

# jobs

<span id="qiskit.providers.ibmq.IBMQBackend.jobs" />

`IBMQBackend.jobs(limit=10, skip=0, status=None, job_name=None, start_datetime=None, end_datetime=None, job_tags=None, job_tags_operator='OR', descending=True, db_filter=None)`

Return the jobs submitted to this backend, subject to optional filtering.

Retrieve jobs submitted to this backend that match the given filters and paginate the results if desired. Note that the server has a limit for the number of jobs returned in a single call. As a result, this function might involve making several calls to the server. See also the skip parameter for more control over pagination.

**Parameters**

*   **limit** (`int`) – Number of jobs to retrieve.

*   **skip** (`int`) – Starting index for the job retrieval.

*   **status** (`Union`\[[`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus"), `str`, `List`\[`Union`\[[`JobStatus`](qiskit.providers.JobStatus "qiskit.providers.jobstatus.JobStatus"), `str`]], `None`]) – Only get jobs with this status or one of the statuses. For example, you can specify status=JobStatus.RUNNING or status=”RUNNING” or status=\[“RUNNING”, “ERROR”]

*   **job\_name** (`Optional`\[`str`]) – Filter by job name. The job\_name is matched partially and [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) can be used.

*   **start\_datetime** (`Optional`\[`datetime`]) – Filter by the given start date, in local time. This is used to find jobs whose creation dates are after (greater than or equal to) this local date/time.

*   **end\_datetime** (`Optional`\[`datetime`]) – Filter by the given end date, in local time. This is used to find jobs whose creation dates are before (less than or equal to) this local date/time.

*   **job\_tags** (`Optional`\[`List`\[`str`]]) – Filter by tags assigned to jobs.

*   **job\_tags\_operator** (`Optional`\[`str`]) –

    Logical operator to use when filtering by job tags. Valid values are “AND” and “OR”:

    > *   If “AND” is specified, then a job must have all of the tags specified in `job_tags` to be included.
    > *   If “OR” is specified, then a job only needs to have any of the tags specified in `job_tags` to be included.

*   **descending** (`bool`) – If `True`, return the jobs in descending order of the job creation date (newest first). If `False`, return in ascending order.

*   **db\_filter** (`Optional`\[`Dict`\[`str`, `Any`]]) –

    A [loopback-based filter](https://loopback.io/doc/en/lb2/Querying-data.html). This is an interface to a database `where` filter. Some examples of its usage are:

    Filter last five jobs with errors:

    ```python
    job_list = backend.jobs(limit=5, status=JobStatus.ERROR)
    ```

    Filter last five jobs with hub name `ibm-q`:

    ```python
    filter = {'hubInfo.hub.name': 'ibm-q'}
    job_list = backend.jobs(limit=5, db_filter=filter)
    ```

**Return type**

`List`\[[`IBMQJob`](qiskit.providers.ibmq.job.IBMQJob "qiskit.providers.ibmq.job.ibmqjob.IBMQJob")]

**Returns**

A list of jobs that match the criteria.

**Raises**

[**IBMQBackendValueError**](qiskit.providers.ibmq.IBMQBackendValueError "qiskit.providers.ibmq.IBMQBackendValueError") – If a keyword value is not recognized.

