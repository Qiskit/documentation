---
title: results
description: API reference for qiskit.providers.ibmq.managed.ManagedJobSet.results
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.managed.ManagedJobSet.results
---

# results

<span id="qiskit.providers.ibmq.managed.ManagedJobSet.results" />

`ManagedJobSet.results(timeout=None, partial=False)`

Return the results of the jobs.

This call will block until all job results become available or the timeout is reached.

<Admonition title="Note" type="note">
  Some IBM Quantum Experience job results can only be read once. A second attempt to query the server for the same job will fail, since the job has already been “consumed”.

  The first call to this method in a `ManagedJobSet` instance will query the server and consume any available job results. Subsequent calls to that instance’s method will also return the results, since they are cached. However, attempting to retrieve the results again in another instance or session might fail due to the job results having been consumed.
</Admonition>

<Admonition title="Note" type="note">
  When partial=True, this method will attempt to retrieve partial results of failed jobs. In this case, precaution should be taken when accessing individual experiments, as doing so might cause an exception. The `success` attribute of the returned [`ManagedResults`](qiskit.providers.ibmq.managed.ManagedResults "qiskit.providers.ibmq.managed.ManagedResults") instance can be used to verify whether it contains partial results.

  For example, if one of the experiments failed, trying to get the counts of the unsuccessful experiment would raise an exception since there are no counts to return:

  ```python
  try:
      counts = managed_results.get_counts("failed_experiment")
  except QiskitError:
      print("Experiment failed!")
  ```
</Admonition>

**Parameters**

*   **timeout** (`Optional`\[`float`]) – Number of seconds to wait for job results.
*   **partial** (`bool`) – If `True`, attempt to retrieve partial job results.

**Return type**

[`ManagedResults`](qiskit.providers.ibmq.managed.ManagedResults "qiskit.providers.ibmq.managed.managedresults.ManagedResults")

**Returns**

A [`ManagedResults`](qiskit.providers.ibmq.managed.ManagedResults "qiskit.providers.ibmq.managed.ManagedResults") instance that can be used to retrieve results for individual experiments.

**Raises**

[**IBMQJobManagerTimeoutError**](qiskit.providers.ibmq.managed.IBMQJobManagerTimeoutError "qiskit.providers.ibmq.managed.IBMQJobManagerTimeoutError") – if unable to retrieve all job results before the specified timeout.

