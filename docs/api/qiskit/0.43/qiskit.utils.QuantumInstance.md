---
title: QuantumInstance
description: API reference for qiskit.utils.QuantumInstance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.utils.QuantumInstance
---

# QuantumInstance

<span id="qiskit.utils.QuantumInstance" />

`QuantumInstance(backend, shots=None, seed_simulator=None, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, bound_pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5.0, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None, mit_pattern=None, max_job_retries=50)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/utils/quantum_instance.py "view source code")

Bases: `object`

Deprecated: Quantum Backend including execution setting.

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.utils.quantum_instance.QuantumInstance` is deprecated as of qiskit-terra 0.24.0. It will be removed no earlier than 3 months after the release date. For code migration guidelines, visit [https://qisk.it/qi\_migration](https://qisk.it/qi_migration).
</Admonition>

**Parameters**

*   **backend** ([*Backend*](qiskit.providers.Backend "qiskit.providers.Backend")) – Instance of selected backend
*   **shots** (*int | None*) – Number of repetitions of each circuit, for sampling. If None, the shots are extracted from the backend. If the backend has none set, the default is 1024.
*   **seed\_simulator** (*int | None*) – Random seed for simulators
*   **basis\_gates** (*List\[str] | None*) – List of basis gate names supported by the target. Defaults to basis gates of the backend.
*   **coupling\_map** (*Optional\[Union\['CouplingMap', List\[List]]]*) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** (*Optional\[Union\['Layout', Dict, List]]*) – Initial layout of qubits in mapping
*   **pass\_manager** (*Optional\['PassManager']*) – Pass manager to handle how to compile the circuits. To run only this pass manager and not the `bound_pass_manager`, call the [`transpile()`](qiskit.utils.QuantumInstance#transpile "qiskit.utils.QuantumInstance.transpile") method with the argument `pass_manager=quantum_instance.unbound_pass_manager`.
*   **bound\_pass\_manager** (*Optional\['PassManager']*) – A second pass manager to apply on bound circuits only, that is, circuits without any free parameters. To only run this pass manager and not `pass_manager` call the [`transpile()`](qiskit.utils.QuantumInstance#transpile "qiskit.utils.QuantumInstance.transpile") method with the argument `pass_manager=quantum_instance.bound_pass_manager`. manager should also be run.
*   **seed\_transpiler** (*int | None*) – The random seed for circuit mapper
*   **optimization\_level** (*int | None*) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (*Dict | None*) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (*Optional\['NoiseModel']*) – noise model for simulator
*   **timeout** (*float | None*) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (*float*) – Seconds between queries for job result
*   **skip\_qobj\_validation** (*bool*) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (*Callable | None*) – The approach to mitigate measurement errors. The classes [`CompleteMeasFitter`](qiskit.utils.mitigation.CompleteMeasFitter "qiskit.utils.mitigation.CompleteMeasFitter") or [`TensoredMeasFitter`](qiskit.utils.mitigation.TensoredMeasFitter "qiskit.utils.mitigation.TensoredMeasFitter") from the [`qiskit.utils.mitigation`](utils_mitigation#module-qiskit.utils.mitigation "qiskit.utils.mitigation") module can be used here as exact values, not instances. `TensoredMeasFitter` doesn’t support the `subset_fitter` method.
*   **cals\_matrix\_refresh\_period** (*int*) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (*int | None*) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (*Callable | None*) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job
*   **mit\_pattern** (*List\[List\[int]] | None*) – Qubits on which to perform the TensoredMeasFitter measurement correction, divided to groups according to tensors. If None and qr is given then assumed to be performed over the entire qr as one group (default None).
*   **max\_job\_retries** (*int*) – positive non-zero number of trials for the job set (-1 for infinite trials) (default: 50)

**Raises**

*   **QiskitError** – the shots exceeds the maximum number of shots
*   **QiskitError** – set noise model but the backend does not support that
*   **QiskitError** – set backend\_options but the backend does not support that

## Methods

<span id="qiskit-utils-quantuminstance-assemble" />

### assemble

<span id="qiskit.utils.QuantumInstance.assemble" />

`QuantumInstance.assemble(circuits)`

assemble circuits

**Return type**

[*Qobj*](qiskit.qobj.Qobj "qiskit.qobj.Qobj")

<span id="qiskit-utils-quantuminstance-cals-matrix" />

### cals\_matrix

<span id="qiskit.utils.QuantumInstance.cals_matrix" />

`QuantumInstance.cals_matrix(qubit_index=None)`

Get the stored calibration matrices and its timestamp.

**Parameters**

**qubit\_index** (*List\[int] | None*) – the qubit index of corresponding calibration matrix. If None, return all stored calibration matrices.

**Returns**

The calibration matrix and the creation timestamp if qubit\_index is not None otherwise, return all matrices and their timestamp in a dictionary.

**Return type**

*Tuple*\[[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)"), float] | *Dict*\[str, *Tuple*\[[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.25)"), float]] | None

<span id="qiskit-utils-quantuminstance-execute" />

### execute

<span id="qiskit.utils.QuantumInstance.execute" />

`QuantumInstance.execute(circuits, had_transpiled=False)`

A wrapper to interface with quantum backend.

**Parameters**

*   **circuits** (*Union\['QuantumCircuit', List\['QuantumCircuit']]*) – circuits to execute
*   **had\_transpiled** (*bool*) – whether or not circuits had been transpiled

**Raises**

*   **QiskitError** – Invalid error mitigation fitter class
*   **QiskitError** – TensoredMeasFitter class doesn’t support subset fitter
*   **MissingOptionalLibraryError** – Ignis not installed

**Returns**

result object

**Return type**

[Result](qiskit.result.Result "qiskit.result.Result")

#### TODO: Maybe we can combine the circuits for the main ones and calibration circuits before

assembling to the qobj.

<span id="qiskit-utils-quantuminstance-maybe-refresh-cals-matrix" />

### maybe\_refresh\_cals\_matrix

<span id="qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix" />

`QuantumInstance.maybe_refresh_cals_matrix(timestamp=None)`

Calculate the time difference from the query of last time.

**Parameters**

**timestamp** (*float | None*) – timestamp

**Returns**

Whether or not refresh the cals\_matrix

**Return type**

bool

<span id="qiskit-utils-quantuminstance-reset-execution-results" />

### reset\_execution\_results

<span id="qiskit.utils.QuantumInstance.reset_execution_results" />

`QuantumInstance.reset_execution_results()`

Reset execution results

<span id="qiskit-utils-quantuminstance-set-config" />

### set\_config

<span id="qiskit.utils.QuantumInstance.set_config" />

`QuantumInstance.set_config(**kwargs)`

Set configurations for the quantum instance.

<span id="qiskit-utils-quantuminstance-transpile" />

### transpile

<span id="qiskit.utils.QuantumInstance.transpile" />

`QuantumInstance.transpile(circuits, pass_manager=None)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits.

**Parameters**

*   **circuits** (*Union\['QuantumCircuit', List\['QuantumCircuit']]*) – circuits to transpile
*   **pass\_manager** (*Optional\['PassManager']*) – A pass manager to transpile the circuits. If none is given, but either `pass_manager` or `bound_pass_manager` has been set in the initializer, these are run. If none has been provided there either, the backend and compile configs from the initializer are used.

**Returns**

**The transpiled circuits, it is always a list even though**

the length is one.

**Return type**

List\[‘QuantumCircuit’]

## Attributes

<span id="qiskit.utils.QuantumInstance.backend" />

### backend

Return Backend backend object.

<span id="qiskit.utils.QuantumInstance.backend_config" />

### backend\_config

Getter of backend\_config.

<span id="qiskit.utils.QuantumInstance.backend_name" />

### backend\_name

Return backend name.

<span id="qiskit.utils.QuantumInstance.backend_options" />

### backend\_options

Getter of backend\_options.

<span id="qiskit.utils.QuantumInstance.bound_pass_manager" />

### bound\_pass\_manager

Return the pass manager for designated for bound circuits.

**Returns**

The pass manager for bound circuits, if it has been set.

**Return type**

Optional\[‘PassManager’]

<span id="qiskit.utils.QuantumInstance.cals_matrix_refresh_period" />

### cals\_matrix\_refresh\_period

returns matrix refresh period

<span id="qiskit.utils.QuantumInstance.circuit_summary" />

### circuit\_summary

Getter of circuit summary.

<span id="qiskit.utils.QuantumInstance.compile_config" />

### compile\_config

Getter of compile\_config.

<span id="qiskit.utils.QuantumInstance.is_local" />

### is\_local

Return True if backend is a local backend.

<span id="qiskit.utils.QuantumInstance.is_simulator" />

### is\_simulator

Return True if backend is a simulator.

<span id="qiskit.utils.QuantumInstance.is_statevector" />

### is\_statevector

Return True if backend is a statevector-type simulator.

<span id="qiskit.utils.QuantumInstance.max_job_retries" />

### max\_job\_retries

Getter of max tries

<span id="qiskit.utils.QuantumInstance.measurement_error_mitigation_cls" />

### measurement\_error\_mitigation\_cls

returns measurement error mitigation cls

<span id="qiskit.utils.QuantumInstance.measurement_error_mitigation_shots" />

### measurement\_error\_mitigation\_shots

returns measurement error mitigation shots

<span id="qiskit.utils.QuantumInstance.noise_config" />

### noise\_config

Getter of noise\_config.

<span id="qiskit.utils.QuantumInstance.qjob_config" />

### qjob\_config

Getter of qjob\_config.

<span id="qiskit.utils.QuantumInstance.run_config" />

### run\_config

Getter of run\_config.

<span id="qiskit.utils.QuantumInstance.skip_qobj_validation" />

### skip\_qobj\_validation

checks if skip qobj validation

<span id="qiskit.utils.QuantumInstance.time_taken" />

### time\_taken

Accumulated time taken for execution.

<span id="qiskit.utils.QuantumInstance.unbound_pass_manager" />

### unbound\_pass\_manager

Return the pass manager for designated for unbound circuits.

**Returns**

The pass manager for unbound circuits, if it has been set.

**Return type**

Optional\[‘PassManager’]

