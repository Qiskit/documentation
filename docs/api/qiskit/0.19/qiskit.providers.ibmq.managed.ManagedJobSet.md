---
title: ManagedJobSet
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet
---

# ManagedJobSet

<span id="qiskit.providers.ibmq.managed.ManagedJobSet" />

`ManagedJobSet(name=None, short_id=None)`

A set of managed jobs.

An instance of this class is returned when you submit experiments using [`IBMQJobManager.run()`](qiskit.providers.ibmq.managed.IBMQJobManager.run "qiskit.providers.ibmq.managed.IBMQJobManager.run"). It provides methods that allow you to interact with the jobs as a single entity. For example, you can retrieve the results for all of the jobs using [`results()`](qiskit.providers.ibmq.managed.ManagedJobSet.results "qiskit.providers.ibmq.managed.ManagedJobSet.results") and cancel all jobs using [`cancel()`](qiskit.providers.ibmq.managed.ManagedJobSet.cancel "qiskit.providers.ibmq.managed.ManagedJobSet.cancel").

ManagedJobSet constructor.

**Parameters**

*   **name** (`Optional`\[`str`]) – Name for this set of jobs. If not specified, the current date and time is used.
*   **short\_id** (`Optional`\[`str`]) – Short ID for this set of jobs.

## Methods

|                                                                                                                                                                              |                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [`ManagedJobSet.cancel`](qiskit.providers.ibmq.managed.ManagedJobSet.cancel "qiskit.providers.ibmq.managed.ManagedJobSet.cancel")()                                          | Cancel all jobs in this job set.                                        |
| [`ManagedJobSet.error_messages`](qiskit.providers.ibmq.managed.ManagedJobSet.error_messages "qiskit.providers.ibmq.managed.ManagedJobSet.error_messages")()                  | Provide details about job failures.                                     |
| [`ManagedJobSet.job`](qiskit.providers.ibmq.managed.ManagedJobSet.job "qiskit.providers.ibmq.managed.ManagedJobSet.job")(experiment)                                         | Retrieve the job used to submit the specified experiment and its index. |
| [`ManagedJobSet.job_set_id`](qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id "qiskit.providers.ibmq.managed.ManagedJobSet.job_set_id")()                              | Return the ID of this job set.                                          |
| [`ManagedJobSet.jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.jobs "qiskit.providers.ibmq.managed.ManagedJobSet.jobs")()                                                | Return jobs in this job set.                                            |
| [`ManagedJobSet.managed_jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.managed_jobs "qiskit.providers.ibmq.managed.ManagedJobSet.managed_jobs")()                        | Return the managed jobs in this set.                                    |
| [`ManagedJobSet.name`](qiskit.providers.ibmq.managed.ManagedJobSet.name "qiskit.providers.ibmq.managed.ManagedJobSet.name")()                                                | Return the name of this job set.                                        |
| [`ManagedJobSet.qobjs`](qiskit.providers.ibmq.managed.ManagedJobSet.qobjs "qiskit.providers.ibmq.managed.ManagedJobSet.qobjs")()                                             | Return the Qobjs for the jobs in this set.                              |
| [`ManagedJobSet.report`](qiskit.providers.ibmq.managed.ManagedJobSet.report "qiskit.providers.ibmq.managed.ManagedJobSet.report")(\[detailed])                               | Return a report on current job statuses.                                |
| [`ManagedJobSet.results`](qiskit.providers.ibmq.managed.ManagedJobSet.results "qiskit.providers.ibmq.managed.ManagedJobSet.results")(\[timeout, partial])                    | Return the results of the jobs.                                         |
| [`ManagedJobSet.retrieve_jobs`](qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs "qiskit.providers.ibmq.managed.ManagedJobSet.retrieve_jobs")(provider\[, refresh]) | Retrieve previously submitted jobs in this set.                         |
| [`ManagedJobSet.run`](qiskit.providers.ibmq.managed.ManagedJobSet.run "qiskit.providers.ibmq.managed.ManagedJobSet.run")(experiment\_list, backend, …)                       | Execute a list of circuits or pulse schedules on a backend.             |
| [`ManagedJobSet.statuses`](qiskit.providers.ibmq.managed.ManagedJobSet.statuses "qiskit.providers.ibmq.managed.ManagedJobSet.statuses")()                                    | Return the status of each job in this set.                              |
| [`ManagedJobSet.tags`](qiskit.providers.ibmq.managed.ManagedJobSet.tags "qiskit.providers.ibmq.managed.ManagedJobSet.tags")()                                                | Return the tags assigned to this job set.                               |
| [`ManagedJobSet.update_name`](qiskit.providers.ibmq.managed.ManagedJobSet.update_name "qiskit.providers.ibmq.managed.ManagedJobSet.update_name")(name)                       | Update the name of this job set.                                        |
| [`ManagedJobSet.update_tags`](qiskit.providers.ibmq.managed.ManagedJobSet.update_tags "qiskit.providers.ibmq.managed.ManagedJobSet.update_tags")(\[…])                       | Update the tags assigned to this job set.                               |

