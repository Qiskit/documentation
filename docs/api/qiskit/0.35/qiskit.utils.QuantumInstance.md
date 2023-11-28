# QuantumInstance

<span id="undefined" />

`QuantumInstance(backend, shots=None, seed_simulator=None, max_credits=None, basis_gates=None, coupling_map=None, initial_layout=None, pass_manager=None, bound_pass_manager=None, seed_transpiler=None, optimization_level=None, backend_options=None, noise_model=None, timeout=None, wait=5.0, skip_qobj_validation=True, measurement_error_mitigation_cls=None, cals_matrix_refresh_period=30, measurement_error_mitigation_shots=None, job_callback=None, mit_pattern=None, max_job_retries=50)`

Bases: `object`

Quantum Backend including execution setting.

Quantum Instance holds a Qiskit Terra backend as well as configuration for circuit transpilation and execution. When provided to an Aqua algorithm the algorithm will execute the circuits it needs to run using the instance.

**Parameters**

*   **backend** (*Union\['Backend', 'BaseBackend']*) – Instance of selected backend
*   **shots** (`Optional`\[`int`]) – Number of repetitions of each circuit, for sampling. If None, the shots are extracted from the backend. If the backend has none set, the default is 1024.
*   **seed\_simulator** (`Optional`\[`int`]) – Random seed for simulators
*   **max\_credits** (`Optional`\[`int`]) – DEPRECATED This parameter is deprecated as of Qiskit Terra 0.20.0, and will be removed in a future release. This parameter has no effect on modern IBM Quantum systems, and no alternative is necessary.
*   **basis\_gates** (`Optional`\[`List`\[`str`]]) – List of basis gate names supported by the target. Defaults to basis gates of the backend.
*   **coupling\_map** (*Optional\[Union\['CouplingMap', List\[List]]]*) – Coupling map (perhaps custom) to target in mapping
*   **initial\_layout** (*Optional\[Union\['Layout', Dict, List]]*) – Initial layout of qubits in mapping
*   **pass\_manager** (*Optional\['PassManager']*) – Pass manager to handle how to compile the circuits. To run only this pass manager and not the `bound_pass_manager`, call the [`transpile()`](qiskit.utils.QuantumInstance.transpile#qiskit.utils.QuantumInstance.transpile "qiskit.utils.QuantumInstance.transpile") method with the argument `pass_manager=quantum_instance.unbound_pass_manager`.
*   **bound\_pass\_manager** (*Optional\['PassManager']*) – A second pass manager to apply on bound circuits only, that is, circuits without any free parameters. To only run this pass manager and not `pass_manager` call the [`transpile()`](qiskit.utils.QuantumInstance.transpile#qiskit.utils.QuantumInstance.transpile "qiskit.utils.QuantumInstance.transpile") method with the argument `pass_manager=quantum_instance.bound_pass_manager`. manager should also be run.
*   **seed\_transpiler** (`Optional`\[`int`]) – The random seed for circuit mapper
*   **optimization\_level** (`Optional`\[`int`]) – How much optimization to perform on the circuits. Higher levels generate more optimized circuits, at the expense of longer transpilation time.
*   **backend\_options** (`Optional`\[`Dict`]) – All running options for backend, please refer to the provider of the backend for information as to what options it supports.
*   **noise\_model** (*Optional\['NoiseModel']*) – noise model for simulator
*   **timeout** (`Optional`\[`float`]) – Seconds to wait for job. If None, wait indefinitely.
*   **wait** (`float`) – Seconds between queries for job result
*   **skip\_qobj\_validation** (`bool`) – Bypass Qobj validation to decrease circuit processing time during submission to backend.
*   **measurement\_error\_mitigation\_cls** (`Optional`\[`Callable`]) – The approach to mitigate measurement errors. The classes [`CompleteMeasFitter`](qiskit.utils.mitigation.CompleteMeasFitter#qiskit.utils.mitigation.CompleteMeasFitter "qiskit.utils.mitigation.CompleteMeasFitter") or [`TensoredMeasFitter`](qiskit.utils.mitigation.TensoredMeasFitter#qiskit.utils.mitigation.TensoredMeasFitter "qiskit.utils.mitigation.TensoredMeasFitter") from the [`qiskit.utils.mitigation`](utils_mitigation#module-qiskit.utils.mitigation "qiskit.utils.mitigation") module can be used here as exact values, not instances. `TensoredMeasFitter` doesn’t support the `subset_fitter` method.
*   **cals\_matrix\_refresh\_period** (`int`) – How often to refresh the calibration matrix in measurement mitigation. in minutes
*   **measurement\_error\_mitigation\_shots** (`Optional`\[`int`]) – The number of shots number for building calibration matrix. If None, the main shots parameter value is used.
*   **job\_callback** (`Optional`\[`Callable`]) – Optional user supplied callback which can be used to monitor job progress as jobs are submitted for processing by an Aqua algorithm. The callback is provided the following arguments: job\_id, job\_status, queue\_position, job
*   **mit\_pattern** (`Optional`\[`List`\[`List`\[`int`]]]) – Qubits on which to perform the TensoredMeasFitter measurement correction, divided to groups according to tensors. If None and qr is given then assumed to be performed over the entire qr as one group (default None).
*   **max\_job\_retries** (*int*) – positive non-zero number of trials for the job set (-1 for infinite trials) (default: 50)

**Raises**

*   **QiskitError** – the shots exceeds the maximum number of shots
*   **QiskitError** – set noise model but the backend does not support that
*   **QiskitError** – set backend\_options but the backend does not support that

## Methods

|                                                                                                                                                                                                       |                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`assemble`](qiskit.utils.QuantumInstance.assemble#qiskit.utils.QuantumInstance.assemble "qiskit.utils.QuantumInstance.assemble")                                                                     | assemble circuits                                                                  |
| [`cals_matrix`](qiskit.utils.QuantumInstance.cals_matrix#qiskit.utils.QuantumInstance.cals_matrix "qiskit.utils.QuantumInstance.cals_matrix")                                                         | Get the stored calibration matrices and its timestamp.                             |
| [`execute`](qiskit.utils.QuantumInstance.execute#qiskit.utils.QuantumInstance.execute "qiskit.utils.QuantumInstance.execute")                                                                         | A wrapper to interface with quantum backend.                                       |
| [`maybe_refresh_cals_matrix`](qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix#qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix "qiskit.utils.QuantumInstance.maybe_refresh_cals_matrix") | Calculate the time difference from the query of last time.                         |
| [`reset_execution_results`](qiskit.utils.QuantumInstance.reset_execution_results#qiskit.utils.QuantumInstance.reset_execution_results "qiskit.utils.QuantumInstance.reset_execution_results")         | Reset execution results                                                            |
| [`set_config`](qiskit.utils.QuantumInstance.set_config#qiskit.utils.QuantumInstance.set_config "qiskit.utils.QuantumInstance.set_config")                                                             | Set configurations for the quantum instance.                                       |
| [`transpile`](qiskit.utils.QuantumInstance.transpile#qiskit.utils.QuantumInstance.transpile "qiskit.utils.QuantumInstance.transpile")                                                                 | A wrapper to transpile circuits to allow algorithm access the transpiled circuits. |

## Attributes

<span id="undefined" />

### backend

Return BaseBackend backend object.

<span id="undefined" />

### backend\_config

Getter of backend\_config.

<span id="undefined" />

### backend\_name

Return backend name.

<span id="undefined" />

### backend\_options

Getter of backend\_options.

<span id="undefined" />

### bound\_pass\_manager

Return the pass manager for designated for bound circuits.

**Returns**

The pass manager for bound circuits, if it has been set.

**Return type**

Optional\[‘PassManager’]

<span id="undefined" />

### cals\_matrix\_refresh\_period

returns matrix refresh period

<span id="undefined" />

### circuit\_summary

Getter of circuit summary.

<span id="undefined" />

### compile\_config

Getter of compile\_config.

<span id="undefined" />

### is\_local

Return True if backend is a local backend.

<span id="undefined" />

### is\_simulator

Return True if backend is a simulator.

<span id="undefined" />

### is\_statevector

Return True if backend is a statevector-type simulator.

<span id="undefined" />

### max\_job\_retries

Getter of max tries

<span id="undefined" />

### measurement\_error\_mitigation\_cls

returns measurement error mitigation cls

<span id="undefined" />

### measurement\_error\_mitigation\_shots

returns measurement error mitigation shots

<span id="undefined" />

### noise\_config

Getter of noise\_config.

<span id="undefined" />

### qjob\_config

Getter of qjob\_config.

<span id="undefined" />

### run\_config

Getter of run\_config.

<span id="undefined" />

### skip\_qobj\_validation

checks if skip qobj validation

<span id="undefined" />

### time\_taken

Accumulated time taken for execution.

**Return type**

`float`

<span id="undefined" />

### unbound\_pass\_manager

Return the pass manager for designated for unbound circuits.

**Returns**

The pass manager for unbound circuits, if it has been set.

**Return type**

Optional\[‘PassManager’]
