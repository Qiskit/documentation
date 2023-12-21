---
title: QasmSimulator
description: API reference for qiskit.providers.aer.QasmSimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.QasmSimulator
---

# QasmSimulator

<span id="qiskit.providers.aer.QasmSimulator" />

`QasmSimulator(configuration=None, provider=None)`

Noisy quantum circuit simulator backend.

The QasmSimulator supports multiple simulation methods and configurable options for each simulation method. These options are specified in a dictionary which may be passed to the simulator using the `backend_options` kwarg for [`QasmSimulator.run()`](qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run") or `qiskit.execute`.

The default behavior chooses a simulation method automatically based on the input circuit and noise model. A custom method can be specified using the `"method"` field in `backend_options` as illustrated in the following example. Available simulation methods and additional backend options are listed below.

**Example**

```python
backend = QasmSimulator()
backend_options = {"method": "statevector"}

# Circuit execution
job = execute(circuits, backend, backend_options=backend_options)

# Qobj execution
job = backend.run(qobj, backend_options=backend_options)
```

**Simulation method**

Available simulation methods are:

*   `"statevector"`: A dense statevector simulation that can sample measurement outcomes from *ideal* circuits with all measurements at end of the circuit. For noisy simulations each shot samples a randomly sampled noisy circuit from the noise model. `"statevector_cpu"` is an alias of `"statevector"`.
*   `"statevector_gpu"`: A dense statevector simulation that provides the same functionalities with `"statevector"`. GPU performs the computation to calculate probability amplitudes as CPU does. If no GPU is available, a runtime error is raised.
*   `"density_matrix"`: A dense density matrix simulation that may sample measurement outcomes from *noisy* circuits with all measurements at end of the circuit. It can only simulate half the number of qubits as the statevector method.
*   `"density_matrix_gpu"`: A dense density matrix simulation that provides the same functionalities with `"density_matrix"`. GPU performs the computation to calculate probability amplitudes as CPU does. If no GPU is available, a runtime error is raised.
*   `"stabilizer"`: An efficient Clifford stabilizer state simulator that can simulate noisy Clifford circuits if all errors in the noise model are also Clifford errors.
*   `"extended_stabilizer"`: An approximate simulated based on a ranked-stabilizer decomposition that decomposes circuits into stabilizer state terms. The number of terms grows with the number of non-Clifford gates.
*   `"matrix_product_state"`: A tensor-network statevector simulator that uses a Matrix Product State (MPS) representation for the state.
*   `"automatic"`: The default behavior where the method is chosen automatically for each circuit based on the circuit instructions, number of qubits, and noise model.

**Backend options**

The following backend options may be used with in the `backend_options` kwarg for [`QasmSimulator.run()`](qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run") or `qiskit.execute`:

*   `"method"` (str): Set the simulation method. See backend methods for additional information (Default: “automatic”).
*   `"precision"` (str): Set the floating point precision for certain simulation methods to either “single” or “double” precision (default: “double”).
*   `"zero_threshold"` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `"validation_threshold"` (double): Sets the threshold for checking if initial states are valid (Default: 1e-8).
*   `"max_parallel_threads"` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `"max_parallel_experiments"` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `"max_parallel_shots"` (int): Sets the maximum number of shots that may be executed in parallel during each experiment execution, up to the max\_parallel\_threads value. If set to 1 parallel shot execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads. Note that this cannot be enabled at the same time as parallel experiment execution (Default: 0).
*   `"max_memory_mb"` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to half the system memory size (Default: 0).
*   `"optimize_ideal_threshold"` (int): Sets the qubit threshold for applying circuit optimization passes on ideal circuits. Passes include gate fusion and truncation of unused qubits (Default: 5).
*   `"optimize_noise_threshold"` (int): Sets the qubit threshold for applying circuit optimization passes on ideal circuits. Passes include gate fusion and truncation of unused qubits (Default: 12).

These backend options only apply when using the `"statevector"` simulation method:

*   `"statevector_parallel_threshold"` (int): Sets the threshold that the number of qubits must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).
*   `"statevector_sample_measure_opt"` (int): Sets the threshold that the number of qubits must be greater than to enable a large qubit optimized implementation of measurement sampling. Note that setting this two low can reduce performance (Default: 10)

These backend options only apply when using the `"stabilizer"` simulation method:

*   `"stabilizer_max_snapshot_probabilities"` (int): set the maximum qubit number for the \~qiskit.providers.aer.extensions.SnapshotProbabilities instruction (Default: 32).

These backend options only apply when using the `"extended_stabilizer"` simulation method:

*   `"extended_stabilizer_measure_sampling"` (bool): Enable measure sampling optimization on supported circuits. This prevents the simulator from re-running the measure monte-carlo step for each shot. Enabling measure sampling may reduce accuracy of the measurement counts if the output distribution is strongly peaked (Default: False).
*   `"extended_stabilizer_mixing_time"` (int): Set how long the monte-carlo method runs before performing measurements. If the output distribution is strongly peaked, this can be decreased alongside setting extended\_stabilizer\_disable\_measurement\_opt to True (Default: 5000).
*   `"extended_stabilizer_approximation_error"` (double): Set the error in the approximation for the extended\_stabilizer method. A smaller error needs more memory and computational time (Default: 0.05).
*   `"extended_stabilizer_norm_estimation_samples"` (int): Number of samples used to compute the correct normalization for a statevector snapshot (Default: 100).
*   `"extended_stabilizer_parallel_threshold"` (int): Set the minimum size of the extended stabilizer decomposition before we enable OpenMP parallelization. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads (Default: 100).

These backend options apply in circuit optimization passes:

*   `"fusion_enable"` (bool): Enable fusion optimization in circuit optimization passes \[Default: True]
*   `"fusion_verbose"` (bool): Output gates generated in fusion optimization into metadata \[Default: False]
*   `"fusion_max_qubit"` (int): Maximum number of qubits for a operation generated in a fusion optimization \[Default: 5]
*   `"fusion_threshold"` (int): Threshold that number of qubits must be greater than or equal to enable fusion optimization \[Default: 20]

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

|                                                                                                                                                              |   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| [`QasmSimulator.DEFAULT_CONFIGURATION`](qiskit.providers.aer.QasmSimulator.DEFAULT_CONFIGURATION "qiskit.providers.aer.QasmSimulator.DEFAULT_CONFIGURATION") |   |
| [`QasmSimulator.MAX_QUBIT_MEMORY`](qiskit.providers.aer.QasmSimulator.MAX_QUBIT_MEMORY "qiskit.providers.aer.QasmSimulator.MAX_QUBIT_MEMORY")                |   |

## Methods

|                                                                                                                                        |                                   |
| -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`QasmSimulator.configuration`](qiskit.providers.aer.QasmSimulator.configuration "qiskit.providers.aer.QasmSimulator.configuration")() | Return the backend configuration. |
| [`QasmSimulator.name`](qiskit.providers.aer.QasmSimulator.name "qiskit.providers.aer.QasmSimulator.name")()                            | Return the backend name.          |
| [`QasmSimulator.properties`](qiskit.providers.aer.QasmSimulator.properties "qiskit.providers.aer.QasmSimulator.properties")()          | Return the backend properties.    |
| [`QasmSimulator.provider`](qiskit.providers.aer.QasmSimulator.provider "qiskit.providers.aer.QasmSimulator.provider")()                | Return the backend Provider.      |
| [`QasmSimulator.run`](qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run")(qobj\[, backend\_options, …])   | Run a qobj on the backend.        |
| [`QasmSimulator.status`](qiskit.providers.aer.QasmSimulator.status "qiskit.providers.aer.QasmSimulator.status")()                      | Return backend status.            |
| [`QasmSimulator.version`](qiskit.providers.aer.QasmSimulator.version "qiskit.providers.aer.QasmSimulator.version")()                   | Return the backend version.       |

