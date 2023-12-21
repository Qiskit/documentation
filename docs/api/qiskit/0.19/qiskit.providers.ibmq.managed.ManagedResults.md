---
title: ManagedResults
description: API reference for qiskit.providers.ibmq.managed.ManagedResults
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ibmq.managed.ManagedResults
---

# ManagedResults

<span id="qiskit.providers.ibmq.managed.ManagedResults" />

`ManagedResults(job_set, backend_name, success)`

Results managed by the Job Manager.

This class is a wrapper around the [`Result`](qiskit.result.Result "qiskit.result.Result") class and provides the same methods. Please refer to the [`Result`](qiskit.result.Result "qiskit.result.Result") class for more information on the methods.

ManagedResults constructor.

**Parameters**

*   **job\_set** ([`ManagedJobSet`](qiskit.providers.ibmq.managed.ManagedJobSet "qiskit.providers.ibmq.managed.managedjobset.ManagedJobSet")) – Managed job set for these results.
*   **backend\_name** (`str`) – Name of the backend used to run the experiments.
*   **success** (`bool`) – `True` if all experiments were successful and results available. `False` otherwise.

<span id="qiskit.providers.ibmq.managed.ManagedResults.backend_name" />

### backend\_name

Name of the backend used to run the experiments.

<span id="qiskit.providers.ibmq.managed.ManagedResults.success" />

### success

Whether all experiments were successful.

## Methods

|                                                                                                                                                                                   |                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`ManagedResults.data`](qiskit.providers.ibmq.managed.ManagedResults.data "qiskit.providers.ibmq.managed.ManagedResults.data")(experiment)                                        | Get the raw data for an experiment.                         |
| [`ManagedResults.get_counts`](qiskit.providers.ibmq.managed.ManagedResults.get_counts "qiskit.providers.ibmq.managed.ManagedResults.get_counts")(experiment)                      | Get the histogram data of an experiment.                    |
| [`ManagedResults.get_memory`](qiskit.providers.ibmq.managed.ManagedResults.get_memory "qiskit.providers.ibmq.managed.ManagedResults.get_memory")(experiment)                      | Get the sequence of memory states (readouts) for each shot. |
| [`ManagedResults.get_statevector`](qiskit.providers.ibmq.managed.ManagedResults.get_statevector "qiskit.providers.ibmq.managed.ManagedResults.get_statevector")(experiment\[, …]) | Get the final statevector of an experiment.                 |
| [`ManagedResults.get_unitary`](qiskit.providers.ibmq.managed.ManagedResults.get_unitary "qiskit.providers.ibmq.managed.ManagedResults.get_unitary")(experiment\[, …])             | Get the final unitary of an experiment.                     |

