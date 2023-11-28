# ManagedResults

<span id="undefined" />

`ManagedResults(job_set, backend_name, success)`

Bases: `object`

Results managed by the Job Manager.

This class is a wrapper around the [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") class and provides the same methods. Please refer to the [`Result`](qiskit.result.Result#qiskit.result.Result "qiskit.result.Result") class for more information on the methods.

ManagedResults constructor.

**Parameters**

*   **job\_set** (`ManagedJobSet`) – Managed job set for these results.
*   **backend\_name** (`str`) – Name of the backend used to run the experiments.
*   **success** (`bool`) – `True` if all experiments were successful and results available. `False` otherwise.

<span id="undefined" />

### backend\_name

Name of the backend used to run the experiments.

<span id="undefined" />

### success

Whether all experiments were successful.

## Methods

|                                                                                                                                                                                                               |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`combine_results`](qiskit.providers.ibmq.managed.ManagedResults.combine_results#qiskit.providers.ibmq.managed.ManagedResults.combine_results "qiskit.providers.ibmq.managed.ManagedResults.combine_results") | Combine results from all jobs into a single Result.         |
| [`data`](qiskit.providers.ibmq.managed.ManagedResults.data#qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data")                                             | Get the raw data for an experiment.                         |
| [`get_counts`](qiskit.providers.ibmq.managed.ManagedResults.get_counts#qiskit.providers.ibmq.managed.ManagedResults.get_counts "qiskit.providers.ibmq.managed.ManagedResults.get_counts")                     | Get the histogram data of an experiment.                    |
| [`get_memory`](qiskit.providers.ibmq.managed.ManagedResults.get_memory#qiskit.providers.ibmq.managed.ManagedResults.get_memory "qiskit.providers.ibmq.managed.ManagedResults.get_memory")                     | Get the sequence of memory states (readouts) for each shot. |
| [`get_statevector`](qiskit.providers.ibmq.managed.ManagedResults.get_statevector#qiskit.providers.ibmq.managed.ManagedResults.get_statevector "qiskit.providers.ibmq.managed.ManagedResults.get_statevector") | Get the final statevector of an experiment.                 |
| [`get_unitary`](qiskit.providers.ibmq.managed.ManagedResults.get_unitary#qiskit.providers.ibmq.managed.ManagedResults.get_unitary "qiskit.providers.ibmq.managed.ManagedResults.get_unitary")                 | Get the final unitary of an experiment.                     |
