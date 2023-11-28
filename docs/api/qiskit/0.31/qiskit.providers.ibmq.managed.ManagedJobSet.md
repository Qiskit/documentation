# ManagedJobSet[¶](#managedjobset "Permalink to this headline")

<span id="undefined" />

`ManagedJobSet(name=None, short_id=None)`

Bases: `object`

A set of managed jobs.

An instance of this class is returned when you submit experiments using [`IBMQJobManager.run()`](qiskit.providers.ibmq.managed.IBMQJobManager.run#qiskit.providers.ibmq.managed.IBMQJobManager.run "qiskit.providers.ibmq.managed.IBMQJobManager.run"). It provides methods that allow you to interact with the jobs as a single entity. For example, you can retrieve the results for all of the jobs using [`results()`](qiskit.providers.ibmq.managed.ManagedJobSet.results#qiskit.providers.ibmq.managed.ManagedJobSet.results "qiskit.providers.ibmq.managed.ManagedJobSet.results") and cancel all jobs using [`cancel()`](qiskit.providers.ibmq.managed.ManagedJobSet.cancel#qiskit.providers.ibmq.managed.ManagedJobSet.cancel "qiskit.providers.ibmq.managed.ManagedJobSet.cancel").

ManagedJobSet constructor.

**Parameters**

*   **name** (`Optional`\[`str`]) – Name for this set of jobs. If not specified, the current date and time is used.
*   **short\_id** (`Optional`\[`str`]) – Short ID for this set of jobs.

## Methods

|                                                                                                                                                                                                        |                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| [`cancel`](qiskit.providers.ibmq.managed.ManagedJobSet.cancel#qiskit.providers.ibmq.managed.ManagedJobSet.cancel "qiskit.providers.ibmq.managed.ManagedJobSet.cancel")                                 | Cancel all jobs in this job set.                                        |
| [`error_messages`](qiskit.providers.ibmq.managed.ManagedJobSet.error_messages#qiskit.providers.ibmq.managed.ManagedJobSet.error_messages "qiskit.providers.ibmq.managed.ManagedJobSet.error_messages") | Provide details about job failures.                                     |
| [`job`](qiskit.providers.ibmq.managed.ManagedJobSet.job#qiskit.providers.ibmq.managed.ManagedJobSet.job "qiskit.providers.ibmq.managed.ManagedJobSet.job")                                             | Retrieve the job used to submit the specified experiment and its index. |
| [`job_set_id`](qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id#qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id "qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id")                 | Return the ID of this job set.                                          |
| [`jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.jobs#qiskit.providers.ibmq.managed.ManagedJobSet.jobs "qiskit.providers.ibmq.managed.ManagedJobSet.jobs")                                         | Return jobs in this job set.                                            |
| [`managed_jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.managed_jobs#qiskit.providers.ibmq.managed.ManagedJobSet.managed_jobs "qiskit.providers.ibmq.managed.ManagedJobSet.managed_jobs")         | Return the managed jobs in this set.                                    |
| [`name`](qiskit.providers.ibmq.managed.ManagedJobSet.name#qiskit.providers.ibmq.managed.ManagedJobSet.name "qiskit.providers.ibmq.managed.ManagedJobSet.name")                                         | Return the name of this job set.                                        |
| [`qobjs`](qiskit.providers.ibmq.managed.ManagedJobSet.qobjs#qiskit.providers.ibmq.managed.ManagedJobSet.qobjs "qiskit.providers.ibmq.managed.ManagedJobSet.qobjs")                                     | Return the Qobjs for the jobs in this set.                              |
| [`report`](qiskit.providers.ibmq.managed.ManagedJobSet.report#qiskit.providers.ibmq.managed.ManagedJobSet.report "qiskit.providers.ibmq.managed.ManagedJobSet.report")                                 | Return a report on current job statuses.                                |
| [`results`](qiskit.providers.ibmq.managed.ManagedJobSet.results#qiskit.providers.ibmq.managed.ManagedJobSet.results "qiskit.providers.ibmq.managed.ManagedJobSet.results")                             | Return the results of the jobs.                                         |
| [`retrieve_jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs#qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs "qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs")     | Retrieve previously submitted jobs in this set.                         |
| [`run`](qiskit.providers.ibmq.managed.ManagedJobSet.run#qiskit.providers.ibmq.managed.ManagedJobSet.run "qiskit.providers.ibmq.managed.ManagedJobSet.run")                                             | Execute a list of circuits or pulse schedules on a backend.             |
| [`statuses`](qiskit.providers.ibmq.managed.ManagedJobSet.statuses#qiskit.providers.ibmq.managed.ManagedJobSet.statuses "qiskit.providers.ibmq.managed.ManagedJobSet.statuses")                         | Return the status of each job in this set.                              |
| [`tags`](qiskit.providers.ibmq.managed.ManagedJobSet.tags#qiskit.providers.ibmq.managed.ManagedJobSet.tags "qiskit.providers.ibmq.managed.ManagedJobSet.tags")                                         | Return the tags assigned to this job set.                               |
| [`update_name`](qiskit.providers.ibmq.managed.ManagedJobSet.update_name#qiskit.providers.ibmq.managed.ManagedJobSet.update_name "qiskit.providers.ibmq.managed.ManagedJobSet.update_name")             | Update the name of this job set.                                        |
| [`update_tags`](qiskit.providers.ibmq.managed.ManagedJobSet.update_tags#qiskit.providers.ibmq.managed.ManagedJobSet.update_tags "qiskit.providers.ibmq.managed.ManagedJobSet.update_tags")             | Update the tags assigned to this job set.                               |
