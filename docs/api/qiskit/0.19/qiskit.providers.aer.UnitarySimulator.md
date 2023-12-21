---
title: UnitarySimulator
description: API reference for qiskit.providers.aer.UnitarySimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.UnitarySimulator
---

# UnitarySimulator

<span id="qiskit.providers.aer.UnitarySimulator" />

`UnitarySimulator(configuration=None, provider=None)`

Ideal quantum circuit unitary simulator.

**Backend options**

The following backend options may be used with in the `backend_options` kwarg for [`UnitarySimulator.run()`](qiskit.providers.aer.UnitarySimulator.run "qiskit.providers.aer.UnitarySimulator.run") or `qiskit.execute`.

*   `"initial_unitary"` (matrix\_like): Sets a custom initial unitary matrix for the simulation instead of identity (Default: None).
*   `"validation_threshold"` (double): Sets the threshold for checking if initial unitary and target unitary are unitary matrices. (Default: 1e-8).
*   `"zero_threshold"` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `"max_parallel_threads"` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `"max_parallel_experiments"` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `"max_memory_mb"` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to half the system memory size (Default: 0).
*   `"statevector_parallel_threshold"` (int): Sets the threshold that 2 \* “n\_qubits” must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).

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

|                                                                                                                                                                       |   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`UnitarySimulator.DEFAULT_CONFIGURATION`](qiskit.providers.aer.UnitarySimulator.DEFAULT_CONFIGURATION "qiskit.providers.aer.UnitarySimulator.DEFAULT_CONFIGURATION") |   |
| [`UnitarySimulator.MAX_QUBIT_MEMORY`](qiskit.providers.aer.UnitarySimulator.MAX_QUBIT_MEMORY "qiskit.providers.aer.UnitarySimulator.MAX_QUBIT_MEMORY")                |   |

## Methods

|                                                                                                                                                 |                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`UnitarySimulator.configuration`](qiskit.providers.aer.UnitarySimulator.configuration "qiskit.providers.aer.UnitarySimulator.configuration")() | Return the backend configuration. |
| [`UnitarySimulator.name`](qiskit.providers.aer.UnitarySimulator.name "qiskit.providers.aer.UnitarySimulator.name")()                            | Return the backend name.          |
| [`UnitarySimulator.properties`](qiskit.providers.aer.UnitarySimulator.properties "qiskit.providers.aer.UnitarySimulator.properties")()          | Return the backend properties.    |
| [`UnitarySimulator.provider`](qiskit.providers.aer.UnitarySimulator.provider "qiskit.providers.aer.UnitarySimulator.provider")()                | Return the backend Provider.      |
| [`UnitarySimulator.run`](qiskit.providers.aer.UnitarySimulator.run "qiskit.providers.aer.UnitarySimulator.run")(qobj\[, …])                     | Run a qobj on the backend.        |
| [`UnitarySimulator.status`](qiskit.providers.aer.UnitarySimulator.status "qiskit.providers.aer.UnitarySimulator.status")()                      | Return backend status.            |
| [`UnitarySimulator.version`](qiskit.providers.aer.UnitarySimulator.version "qiskit.providers.aer.UnitarySimulator.version")()                   | Return the backend version.       |

