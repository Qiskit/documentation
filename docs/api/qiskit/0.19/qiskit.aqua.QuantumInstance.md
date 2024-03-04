---
title: QuantumInstance
description: API reference for qiskit.aqua.QuantumInstance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.QuantumInstance
---

# QuantumInstance

<span id="qiskit.aqua.QuantumInstance" />

`QuantumInstance(backend, shots=1024, seed_simulator=None, max_credits=10, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/quantum_instance.py "view source code")

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

### BACKEND\_OPTIONS\_QASM\_ONLY

<span id="qiskit.aqua.QuantumInstance.BACKEND_OPTIONS_QASM_ONLY" />

`= ['statevector_sample_measure_opt', 'max_parallel_shots']`

### backend

Return BaseBackend backend object.

### backend\_config

Getter of backend\_config.

### backend\_name

Return backend name.

### backend\_options

Getter of backend\_options.

### cals\_matrix\_refresh\_period

returns matrix refresh period

### circuit\_summary

Getter of circuit summary.

### compile\_config

Getter of compile\_config.

### is\_local

Return True if backend is a local backend.

### is\_simulator

Return True if backend is a simulator.

### is\_statevector

Return True if backend is a statevector-type simulator.

### measurement\_error\_mitigation\_cls

returns measurement error mitigation cls

### measurement\_error\_mitigation\_shots

returns measurement error mitigation shots

### noise\_config

Getter of noise\_config.

### qjob\_config

Getter of qjob\_config.

### run\_config

Getter of run\_config.

### skip\_qobj\_validation

checks if skip qobj validation

## Methods

### assemble

<span id="qiskit.aqua.QuantumInstance.assemble" />

`QuantumInstance.assemble(circuits)`

assemble circuits

### cals\_matrix

<span id="qiskit.aqua.QuantumInstance.cals_matrix" />

`QuantumInstance.cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

*   **qubit\_index** (*list\[int]*) – the qubit index of corresponding calibration matrix.
*   **None** (*If*) –
*   **matrices.** (*return all stored calibration*) –

**Returns**

**the calibration matrix and the creation timestamp if qubit\_index**

is not None otherwise, return all matrices and their timestamp in a dictionary.

**Return type**

tuple(np.ndarray, int)

### execute

<span id="qiskit.aqua.QuantumInstance.execute" />

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or list\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – circuits to execute
*   **had\_transpiled** (*bool, optional*) – whether or not circuits had been transpiled

**Returns**

Result object

**Return type**

[Result](qiskit.result.Result "qiskit.result.Result")

#### TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.

### maybe\_refresh\_cals\_matrix

<span id="qiskit.aqua.QuantumInstance.maybe_refresh_cals_matrix" />

`QuantumInstance.maybe_refresh_cals_matrix(timestamp=None)`

Calculate the time difference from the query of last time.

**Returns**

whether or not refresh the cals\_matrix

**Return type**

bool

### set\_config

<span id="qiskit.aqua.QuantumInstance.set_config" />

`QuantumInstance.set_config(**kwargs)`

Set configurations for the quantum instance.

### transpile

<span id="qiskit.aqua.QuantumInstance.transpile" />

`QuantumInstance.transpile(circuits)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits. :param circuits: circuits to transpile :type circuits: QuantumCircuit or list\[QuantumCircuit]

**Returns**

**the transpiled circuits, it is always a list even though**

the length is one.

**Return type**

list\[[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")]

