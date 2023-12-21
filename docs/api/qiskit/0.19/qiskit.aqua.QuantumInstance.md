---
title: QuantumInstance
description: API reference for qiskit.aqua.QuantumInstance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.QuantumInstance
---

# QuantumInstance

<span id="qiskit.aqua.QuantumInstance" />

`QuantumInstance(backend, shots=1024, seed_simulator=None, max_credits=10, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None)`

Quantum Backend including execution setting.

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

**Parameters**

*   **backend** ([*BaseBackend*](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")) – Instance of selected backend
*   **shots** (*int, optional*) – Number of repetitions of each circuit, for sampling
*   **seed\_simulator** (*int, optional*) – Random seed for simulators
*   **max\_credits** (*int, optional*) – Maximum credits to use
*   **basis\_gates** (*list\[str], optional*) – List of basis gate names supported by the target. Default: \[‘u1’, ‘u2’, ‘u3’, ‘cx’, ‘id’]
*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") *or list\[list]*) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout") *or dict or list, optional*) – Initial layout of qubits in mapping
*   **pass\_manager** ([*PassManager*](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")*, optional*) – Pass manager to handle how to compile the circuits
*   **seed\_transpiler** (*int, optional*) – The random seed for circuit mapper
*   **optimization\_level** (*int, optional*) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (*dict, optional*) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (*qiskit.provider.aer.noise.noise\_model.NoiseModel, optional*) – noise model for simulator
*   **timeout** (*float, optional*) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (*float, optional*) – Seconds between queries for job result
*   **skip\_qobj\_validation** (*bool, optional*) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (*Callable, optional*) – The approach to mitigate measurement errors. Qiskit Ignis provides fitter classes for this functionality and CompleteMeasFitter from qiskit.ignis.mitigation.measurement module can be used here. (TensoredMeasFitter is not supported).
*   **cals\_matrix\_refresh\_period** (*int, optional*) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (*int, optional*) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (*Callable, optional*) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – the shots exceeds the maximum number of shots
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – set noise model but the backend does not support that
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – set backend\_options but the backend does not support that

## Attributes

|                                                                                                                                                                                         |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`QuantumInstance.BACKEND_CONFIG`](qiskit.aqua.QuantumInstance#BACKEND_CONFIG "qiskit.aqua.QuantumInstance.BACKEND_CONFIG")                                                             |                                                         |
| [`QuantumInstance.BACKEND_OPTIONS`](qiskit.aqua.QuantumInstance#BACKEND_OPTIONS "qiskit.aqua.QuantumInstance.BACKEND_OPTIONS")                                                          |                                                         |
| [`QuantumInstance.BACKEND_OPTIONS_QASM_ONLY`](qiskit.aqua.QuantumInstance.BACKEND_OPTIONS_QASM_ONLY "qiskit.aqua.QuantumInstance.BACKEND_OPTIONS_QASM_ONLY")                            |                                                         |
| [`QuantumInstance.COMPILE_CONFIG`](qiskit.aqua.QuantumInstance.COMPILE_CONFIG "qiskit.aqua.QuantumInstance.COMPILE_CONFIG")                                                             |                                                         |
| [`QuantumInstance.NOISE_CONFIG`](qiskit.aqua.QuantumInstance#NOISE_CONFIG "qiskit.aqua.QuantumInstance.NOISE_CONFIG")                                                                   |                                                         |
| [`QuantumInstance.QJOB_CONFIG`](qiskit.aqua.QuantumInstance#QJOB_CONFIG "qiskit.aqua.QuantumInstance.QJOB_CONFIG")                                                                      |                                                         |
| [`QuantumInstance.RUN_CONFIG`](qiskit.aqua.QuantumInstance.RUN_CONFIG "qiskit.aqua.QuantumInstance.RUN_CONFIG")                                                                         |                                                         |
| [`QuantumInstance.backend`](qiskit.aqua.QuantumInstance.backend "qiskit.aqua.QuantumInstance.backend")                                                                                  | Return BaseBackend backend object.                      |
| [`QuantumInstance.backend_config`](qiskit.aqua.QuantumInstance.backend_config "qiskit.aqua.QuantumInstance.backend_config")                                                             | Getter of backend\_config.                              |
| [`QuantumInstance.backend_name`](qiskit.aqua.QuantumInstance.backend_name "qiskit.aqua.QuantumInstance.backend_name")                                                                   | Return backend name.                                    |
| [`QuantumInstance.backend_options`](qiskit.aqua.QuantumInstance.backend_options "qiskit.aqua.QuantumInstance.backend_options")                                                          | Getter of backend\_options.                             |
| [`QuantumInstance.cals_matrix_refresh_period`](qiskit.aqua.QuantumInstance.cals_matrix_refresh_period "qiskit.aqua.QuantumInstance.cals_matrix_refresh_period")                         | returns matrix refresh period                           |
| [`QuantumInstance.circuit_summary`](qiskit.aqua.QuantumInstance.circuit_summary "qiskit.aqua.QuantumInstance.circuit_summary")                                                          | Getter of circuit summary.                              |
| [`QuantumInstance.compile_config`](qiskit.aqua.QuantumInstance#compile_config "qiskit.aqua.QuantumInstance.compile_config")                                                             | Getter of compile\_config.                              |
| [`QuantumInstance.is_local`](qiskit.aqua.QuantumInstance.is_local "qiskit.aqua.QuantumInstance.is_local")                                                                               | Return True if backend is a local backend.              |
| [`QuantumInstance.is_simulator`](qiskit.aqua.QuantumInstance.is_simulator "qiskit.aqua.QuantumInstance.is_simulator")                                                                   | Return True if backend is a simulator.                  |
| [`QuantumInstance.is_statevector`](qiskit.aqua.QuantumInstance.is_statevector "qiskit.aqua.QuantumInstance.is_statevector")                                                             | Return True if backend is a statevector-type simulator. |
| [`QuantumInstance.measurement_error_mitigation_cls`](qiskit.aqua.QuantumInstance.measurement_error_mitigation_cls "qiskit.aqua.QuantumInstance.measurement_error_mitigation_cls")       | returns measurement error mitigation cls                |
| [`QuantumInstance.measurement_error_mitigation_shots`](qiskit.aqua.QuantumInstance.measurement_error_mitigation_shots "qiskit.aqua.QuantumInstance.measurement_error_mitigation_shots") | returns measurement error mitigation shots              |
| [`QuantumInstance.noise_config`](qiskit.aqua.QuantumInstance.noise_config "qiskit.aqua.QuantumInstance.noise_config")                                                                   | Getter of noise\_config.                                |
| [`QuantumInstance.qjob_config`](qiskit.aqua.QuantumInstance.qjob_config "qiskit.aqua.QuantumInstance.qjob_config")                                                                      | Getter of qjob\_config.                                 |
| [`QuantumInstance.run_config`](qiskit.aqua.QuantumInstance#run_config "qiskit.aqua.QuantumInstance.run_config")                                                                         | Getter of run\_config.                                  |
| [`QuantumInstance.skip_qobj_validation`](qiskit.aqua.QuantumInstance.skip_qobj_validation "qiskit.aqua.QuantumInstance.skip_qobj_validation")                                           | checks if skip qobj validation                          |

## Methods

|                                                                                                                                                                    |                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [`QuantumInstance.assemble`](qiskit.aqua.QuantumInstance.assemble "qiskit.aqua.QuantumInstance.assemble")(circuits)                                                | assemble circuits                                                                  |
| [`QuantumInstance.cals_matrix`](qiskit.aqua.QuantumInstance.cals_matrix "qiskit.aqua.QuantumInstance.cals_matrix")(\[qubit\_index])                                | Get the stored calibration matrices and its timestamp.                             |
| [`QuantumInstance.execute`](qiskit.aqua.QuantumInstance.execute "qiskit.aqua.QuantumInstance.execute")(circuits\[, …])                                             | A wrapper to interface with quantum backend.                                       |
| [`QuantumInstance.maybe_refresh_cals_matrix`](qiskit.aqua.QuantumInstance.maybe_refresh_cals_matrix "qiskit.aqua.QuantumInstance.maybe_refresh_cals_matrix")(\[…]) | Calculate the time difference from the query of last time.                         |
| [`QuantumInstance.set_config`](qiskit.aqua.QuantumInstance.set_config "qiskit.aqua.QuantumInstance.set_config")(\*\*kwargs)                                        | Set configurations for the quantum instance.                                       |
| [`QuantumInstance.transpile`](qiskit.aqua.QuantumInstance.transpile "qiskit.aqua.QuantumInstance.transpile")(circuits)                                             | A wrapper to transpile circuits to allow algorithm access the transpiled circuits. |

