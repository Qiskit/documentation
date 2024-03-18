---
title: QuantumInstance
description: API reference for qiskit.aqua.QuantumInstance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.QuantumInstance
---

# QuantumInstance

<span id="qiskit.aqua.QuantumInstance" />

`QuantumInstance(backend, shots=1024, seed_simulator=None, max_credits=10, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5.0, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/quantum_instance.py "view source code")

Bases: `object`

Quantum Backend including execution setting.

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

**Parameters**

*   **backend** (`Union`\[`Backend`, `BaseBackend`]) – Instance of selected backend
*   **shots** (`int`) – Number of repetitions of each circuit, for sampling
*   **seed\_simulator** (`Optional`\[`int`]) – Random seed for simulators
*   **max\_credits** (`int`) – Maximum credits to use
*   **basis\_gates** (`Optional`\[`List`\[`str`]]) – List of basis gate names supported by the target. Defaults to basis gates of the backend.
*   **coupling\_map** (`Union`\[`CouplingMap`, `List`\[`List`], `None`]) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** (`Union`\[`Layout`, `Dict`, `List`, `None`]) – Initial layout of qubits in mapping
*   **pass\_manager** (`Optional`\[`PassManager`]) – Pass manager to handle how to compile the circuits
*   **seed\_transpiler** (`Optional`\[`int`]) – The random seed for circuit mapper
*   **optimization\_level** (`Optional`\[`int`]) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (`Optional`\[`Dict`]) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (`Optional`\[`NoiseModel`]) – noise model for simulator
*   **timeout** (`Optional`\[`float`]) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (`float`) – Seconds between queries for job result
*   **skip\_qobj\_validation** (`bool`) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (`Optional`\[`Callable`]) – The approach to mitigate measurement errors. Qiskit Ignis provides fitter classes for this functionality and CompleteMeasFitter from qiskit.ignis.mitigation.measurement module can be used here. (TensoredMeasFitter is not supported).
*   **cals\_matrix\_refresh\_period** (`int`) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (`Optional`\[`int`]) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (`Optional`\[`Callable`]) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job

**Raises**

*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – the shots exceeds the maximum number of shots
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – set noise model but the backend does not support that
*   [**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – set backend\_options but the backend does not support that

## Methods

### assemble

<span id="qiskit.aqua.QuantumInstance.assemble" />

`QuantumInstance.assemble(circuits)`

assemble circuits

**Return type**

[`Qobj`](qiskit.qobj.Qobj "qiskit.qobj.Qobj")

### cals\_matrix

<span id="qiskit.aqua.QuantumInstance.cals_matrix" />

`QuantumInstance.cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

**qubit\_index** (`Optional`\[`List`\[`int`]]) – the qubit index of corresponding calibration matrix. If None, return all stored calibration matrices.

**Return type**

`Union`\[`Tuple`\[`ndarray`, `float`], `Dict`\[`str`, `Tuple`\[`ndarray`, `float`]], `None`]

**Returns**

The calibration matrix and the creation timestamp if qubit\_index is not None otherwise, return all matrices and their timestamp in a dictionary.

### execute

<span id="qiskit.aqua.QuantumInstance.execute" />

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** (`Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]]) – circuits to execute
*   **had\_transpiled** (`bool`) – whether or not circuits had been transpiled

**Return type**

`Result`

**Returns**

Result object

#### TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.

### maybe\_refresh\_cals\_matrix

<span id="qiskit.aqua.QuantumInstance.maybe_refresh_cals_matrix" />

`QuantumInstance.maybe_refresh_cals_matrix(timestamp=None)`

Calculate the time difference from the query of last time.

**Parameters**

**timestamp** (`Optional`\[`float`]) – timestamp

**Return type**

`bool`

**Returns**

Whether or not refresh the cals\_matrix

### reset\_execution\_results

<span id="qiskit.aqua.QuantumInstance.reset_execution_results" />

`QuantumInstance.reset_execution_results()`

Reset execution results

**Return type**

`None`

### set\_config

<span id="qiskit.aqua.QuantumInstance.set_config" />

`QuantumInstance.set_config(**kwargs)`

Set configurations for the quantum instance.

### transpile

<span id="qiskit.aqua.QuantumInstance.transpile" />

`QuantumInstance.transpile(circuits)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits. :type circuits: `Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]] :param circuits: circuits to transpile

**Return type**

`List`\[`QuantumCircuit`]

**Returns**

The transpiled circuits, it is always a list even though the length is one.

## Attributes

<span id="qiskit.aqua.QuantumInstance.backend" />

### backend

Return BaseBackend backend object.

<span id="qiskit.aqua.QuantumInstance.backend_config" />

### backend\_config

Getter of backend\_config.

<span id="qiskit.aqua.QuantumInstance.backend_name" />

### backend\_name

Return backend name.

<span id="qiskit.aqua.QuantumInstance.backend_options" />

### backend\_options

Getter of backend\_options.

<span id="qiskit.aqua.QuantumInstance.cals_matrix_refresh_period" />

### cals\_matrix\_refresh\_period

returns matrix refresh period

<span id="qiskit.aqua.QuantumInstance.circuit_summary" />

### circuit\_summary

Getter of circuit summary.

<span id="qiskit.aqua.QuantumInstance.compile_config" />

### compile\_config

Getter of compile\_config.

<span id="qiskit.aqua.QuantumInstance.is_local" />

### is\_local

Return True if backend is a local backend.

<span id="qiskit.aqua.QuantumInstance.is_simulator" />

### is\_simulator

Return True if backend is a simulator.

<span id="qiskit.aqua.QuantumInstance.is_statevector" />

### is\_statevector

Return True if backend is a statevector-type simulator.

<span id="qiskit.aqua.QuantumInstance.measurement_error_mitigation_cls" />

### measurement\_error\_mitigation\_cls

returns measurement error mitigation cls

<span id="qiskit.aqua.QuantumInstance.measurement_error_mitigation_shots" />

### measurement\_error\_mitigation\_shots

returns measurement error mitigation shots

<span id="qiskit.aqua.QuantumInstance.noise_config" />

### noise\_config

Getter of noise\_config.

<span id="qiskit.aqua.QuantumInstance.qjob_config" />

### qjob\_config

Getter of qjob\_config.

<span id="qiskit.aqua.QuantumInstance.run_config" />

### run\_config

Getter of run\_config.

<span id="qiskit.aqua.QuantumInstance.skip_qobj_validation" />

### skip\_qobj\_validation

checks if skip qobj validation

<span id="qiskit.aqua.QuantumInstance.time_taken" />

### time\_taken

Accumulated time taken for execution.

**Return type**

`float`

