# UnitarySimulator

<span id="undefined" />

`UnitarySimulator(configuration=None, properties=None, provider=None, **backend_options)`

Bases: `qiskit.providers.aer.backends.aerbackend.AerBackend`

Ideal quantum circuit unitary simulator.

**Configurable Options**

The UnitarySimulator supports CPU and GPU simulation methods and additional configurable options. These may be set using the appropriate kwargs during initialization. They can also be set of updated using the [`set_options()`](qiskit.providers.aer.UnitarySimulator.set_options#qiskit.providers.aer.UnitarySimulator.set_options "qiskit.providers.aer.UnitarySimulator.set_options") method.

Run-time options may also be specified as kwargs using the [`run()`](qiskit.providers.aer.UnitarySimulator.run#qiskit.providers.aer.UnitarySimulator.run "qiskit.providers.aer.UnitarySimulator.run") method. These will not be stored in the backend and will only apply to that execution. They will also override any previously set options.

For example, to configure a a single-precision simulator

```python
backend = UnitarySimulator(precision='single')
```

**Backend Options**

The following configurable backend options are supported

*   `method` (str): Set the simulation method supported methods are `"unitary"` for CPU simulation, and `"unitary_gpu"` for GPU simulation (Default: `"unitary"`).
*   `precision` (str): Set the floating point precision for certain simulation methods to either `"single"` or `"double"` precision (default: `"double"`).
*   `"initial_unitary"` (matrix\_like): Sets a custom initial unitary matrix for the simulation instead of identity (Default: None).
*   `"validation_threshold"` (double): Sets the threshold for checking if initial unitary and target unitary are unitary matrices. (Default: 1e-8).
*   `"zero_threshold"` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `"max_parallel_threads"` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `"max_parallel_experiments"` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `"max_memory_mb"` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to the system memory size (Default: 0).
*   `"statevector_parallel_threshold"` (int): Sets the threshold that 2 \* “n\_qubits” must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).

These backend options apply in circuit optimization passes:

*   `fusion_enable` (bool): Enable fusion optimization in circuit optimization passes \[Default: True]
*   `fusion_verbose` (bool): Output gates generated in fusion optimization into metadata \[Default: False]
*   `fusion_max_qubit` (int): Maximum number of qubits for a operation generated in a fusion optimization \[Default: 5]
*   `fusion_threshold` (int): Threshold that number of qubits must be greater than or equal to enable fusion optimization \[Default: 7]

Aer class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration.
*   **properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") *or None*) – Optional, backend properties.
*   **defaults** ([*PulseDefaults*](qiskit.providers.models.PulseDefaults#qiskit.providers.models.PulseDefaults "qiskit.providers.models.PulseDefaults") *or None*) – Optional, backend pulse defaults.
*   **available\_methods** (*list or None*) – Optional, the available simulation methods if backend supports multiple methods.
*   **provider** ([*Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optional, provider responsible for this backend.
*   **backend\_options** (*dict or None*) – Optional set custom backend options.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if there is no name in the configuration

## Methods

|                                                                                                                                                                                                  |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`available_methods`](qiskit.providers.aer.UnitarySimulator.available_methods#qiskit.providers.aer.UnitarySimulator.available_methods "qiskit.providers.aer.UnitarySimulator.available_methods") | Return the available simulation methods.        |
| [`clear_options`](qiskit.providers.aer.UnitarySimulator.clear_options#qiskit.providers.aer.UnitarySimulator.clear_options "qiskit.providers.aer.UnitarySimulator.clear_options")                 | Reset the simulator options to default values.  |
| [`configuration`](qiskit.providers.aer.UnitarySimulator.configuration#qiskit.providers.aer.UnitarySimulator.configuration "qiskit.providers.aer.UnitarySimulator.configuration")                 | Return the simulator backend configuration.     |
| [`defaults`](qiskit.providers.aer.UnitarySimulator.defaults#qiskit.providers.aer.UnitarySimulator.defaults "qiskit.providers.aer.UnitarySimulator.defaults")                                     | Return the simulator backend pulse defaults.    |
| [`name`](qiskit.providers.aer.UnitarySimulator.name#qiskit.providers.aer.UnitarySimulator.name "qiskit.providers.aer.UnitarySimulator.name")                                                     | Return the backend name.                        |
| [`properties`](qiskit.providers.aer.UnitarySimulator.properties#qiskit.providers.aer.UnitarySimulator.properties "qiskit.providers.aer.UnitarySimulator.properties")                             | Return the simulator backend properties if set. |
| [`provider`](qiskit.providers.aer.UnitarySimulator.provider#qiskit.providers.aer.UnitarySimulator.provider "qiskit.providers.aer.UnitarySimulator.provider")                                     | Return the backend Provider.                    |
| [`run`](qiskit.providers.aer.UnitarySimulator.run#qiskit.providers.aer.UnitarySimulator.run "qiskit.providers.aer.UnitarySimulator.run")                                                         | Run a qobj on the backend.                      |
| [`set_option`](qiskit.providers.aer.UnitarySimulator.set_option#qiskit.providers.aer.UnitarySimulator.set_option "qiskit.providers.aer.UnitarySimulator.set_option")                             | Special handling for setting backend options.   |
| [`set_options`](qiskit.providers.aer.UnitarySimulator.set_options#qiskit.providers.aer.UnitarySimulator.set_options "qiskit.providers.aer.UnitarySimulator.set_options")                         | Set the options fields for the backend          |
| [`status`](qiskit.providers.aer.UnitarySimulator.status#qiskit.providers.aer.UnitarySimulator.status "qiskit.providers.aer.UnitarySimulator.status")                                             | Return backend status.                          |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.aer.UnitarySimulator.run#qiskit.providers.aer.UnitarySimulator.run "qiskit.providers.aer.UnitarySimulator.run") method.

<span id="undefined" />

### version

`= 1`
