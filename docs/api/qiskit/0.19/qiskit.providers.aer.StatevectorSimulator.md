---
title: StatevectorSimulator
description: API reference for qiskit.providers.aer.StatevectorSimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.StatevectorSimulator
---

# StatevectorSimulator

<span id="qiskit.providers.aer.StatevectorSimulator" />

`StatevectorSimulator(configuration=None, provider=None)`

Ideal quantum circuit statevector simulator

**Backend options**

The following backend options may be used with in the `backend_options` kwarg for [`StatevectorSimulator.run()`](qiskit.providers.aer.StatevectorSimulator.run "qiskit.providers.aer.StatevectorSimulator.run") or `qiskit.execute`.

*   `"zero_threshold"` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `"validation_threshold"` (double): Sets the threshold for checking if the initial statevector is valid (Default: 1e-8).
*   `"max_parallel_threads"` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `"max_parallel_experiments"` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `"max_memory_mb"` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to half the system memory size (Default: 0).
*   `"statevector_parallel_threshold"` (int): Sets the threshold that “n\_qubits” must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).

Aer class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **controller** (*function*) – Aer controller to be executed
*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

*   **FileNotFoundError if backend executable is not available.** –
*   [**AerError**](qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if there is no name in the configuration

## Attributes

|                                                                                                                                                                                   |   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`StatevectorSimulator.DEFAULT_CONFIGURATION`](qiskit.providers.aer.StatevectorSimulator.DEFAULT_CONFIGURATION "qiskit.providers.aer.StatevectorSimulator.DEFAULT_CONFIGURATION") |   |
| [`StatevectorSimulator.MAX_QUBIT_MEMORY`](qiskit.providers.aer.StatevectorSimulator.MAX_QUBIT_MEMORY "qiskit.providers.aer.StatevectorSimulator.MAX_QUBIT_MEMORY")                |   |

## Methods

|                                                                                                                                                             |                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`StatevectorSimulator.configuration`](qiskit.providers.aer.StatevectorSimulator.configuration "qiskit.providers.aer.StatevectorSimulator.configuration")() | Return the backend configuration. |
| [`StatevectorSimulator.name`](qiskit.providers.aer.StatevectorSimulator.name "qiskit.providers.aer.StatevectorSimulator.name")()                            | Return the backend name.          |
| [`StatevectorSimulator.properties`](qiskit.providers.aer.StatevectorSimulator.properties "qiskit.providers.aer.StatevectorSimulator.properties")()          | Return the backend properties.    |
| [`StatevectorSimulator.provider`](qiskit.providers.aer.StatevectorSimulator.provider "qiskit.providers.aer.StatevectorSimulator.provider")()                | Return the backend Provider.      |
| [`StatevectorSimulator.run`](qiskit.providers.aer.StatevectorSimulator.run "qiskit.providers.aer.StatevectorSimulator.run")(qobj\[, …])                     | Run a qobj on the backend.        |
| [`StatevectorSimulator.status`](qiskit.providers.aer.StatevectorSimulator.status "qiskit.providers.aer.StatevectorSimulator.status")()                      | Return backend status.            |
| [`StatevectorSimulator.version`](qiskit.providers.aer.StatevectorSimulator.version "qiskit.providers.aer.StatevectorSimulator.version")()                   | Return the backend version.       |

