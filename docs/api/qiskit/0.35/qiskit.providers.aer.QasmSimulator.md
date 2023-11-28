# QasmSimulator

<span id="undefined" />

`QasmSimulator(configuration=None, properties=None, provider=None, **backend_options)`

Bases: `qiskit.providers.aer.backends.aerbackend.AerBackend`

Noisy quantum circuit simulator backend.

**Configurable Options**

The QasmSimulator supports multiple simulation methods and configurable options for each simulation method. These may be set using the appropriate kwargs during initialization. They can also be set of updated using the [`set_options()`](qiskit.providers.aer.QasmSimulator.set_options#qiskit.providers.aer.QasmSimulator.set_options "qiskit.providers.aer.QasmSimulator.set_options") method.

Run-time options may also be specified as kwargs using the [`run()`](qiskit.providers.aer.QasmSimulator.run#qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run") method. These will not be stored in the backend and will only apply to that execution. They will also override any previously set options.

For example, to configure a density matrix simulator with a custom noise model to use for every execution

```python
noise_model = NoiseModel.from_backend(backend)
backend = QasmSimulator(method='density_matrix',
                        noise_model=noise_model)
```

**Simulating an IBMQ Backend**

The simulator can be automatically configured to mimic an IBMQ backend using the [`from_backend()`](qiskit.providers.aer.QasmSimulator.from_backend#qiskit.providers.aer.QasmSimulator.from_backend "qiskit.providers.aer.QasmSimulator.from_backend") method. This will configure the simulator to use the basic device `NoiseModel` for that backend, and the same basis gates and coupling map.

```python
backend = QasmSimulator.from_backend(backend)
```

**Simulation Method Option**

The simulation method is set using the `method` kwarg. Supported simulation methods are

*   `"statevector"`: A dense statevector simulation that can sample measurement outcomes from *ideal* circuits with all measurements at end of the circuit. For noisy simulations each shot samples a randomly sampled noisy circuit from the noise model. `"statevector_cpu"` is an alias of `"statevector"`.
*   `"statevector_gpu"`: A dense statevector simulation that provides the same functionalities with `"statevector"`. GPU performs the computation to calculate probability amplitudes as CPU does. If no GPU is available, a runtime error is raised.
*   `"density_matrix"`: A dense density matrix simulation that may sample measurement outcomes from *noisy* circuits with all measurements at end of the circuit. It can only simulate half the number of qubits as the statevector method.
*   `"density_matrix_gpu"`: A dense density matrix simulation that provides the same functionalities with `"density_matrix"`. GPU performs the computation to calculate probability amplitudes as CPU does. If no GPU is available, a runtime error is raised.
*   `"stabilizer"`: An efficient Clifford stabilizer state simulator that can simulate noisy Clifford circuits if all errors in the noise model are also Clifford errors.
*   `"extended_stabilizer"`: An approximate simulated based on a ranked-stabilizer decomposition that decomposes circuits into stabilizer state terms. The number of terms grows with the number of non-Clifford gates.
*   `"matrix_product_state"`: A tensor-network statevector simulator that uses a Matrix Product State (MPS) representation for the state.
*   `"automatic"`: The default behavior where the method is chosen automatically for each circuit based on the circuit instructions, number of qubits, and noise model.

**Additional Backend Options**

The following simulator specific backend options are supported

*   `method` (str): Set the simulation method (Default: `"automatic"`). Use [`available_methods()`](qiskit.providers.aer.QasmSimulator.available_methods#qiskit.providers.aer.QasmSimulator.available_methods "qiskit.providers.aer.QasmSimulator.available_methods") to return a list of all availabe methods.
*   `device` (str): Set the simulation device (Default: `"CPU"`). Use [`available_devices()`](qiskit.providers.aer.QasmSimulator.available_devices#qiskit.providers.aer.QasmSimulator.available_devices "qiskit.providers.aer.QasmSimulator.available_devices") to return a list of devices supported on the current system.
*   `precision` (str): Set the floating point precision for certain simulation methods to either `"single"` or `"double"` precision (default: `"double"`).
*   `executor` (futures.Executor): Set a custom executor for asynchronous running of simulation jobs (Default: None).
*   `max_job_size` (int or None): If the number of run circuits exceeds this value simulation will be run as a set of of sub-jobs on the executor. If `None` simulation of all circuits are submitted to the executor as a single job (Default: None).
*   `max_shot_size` (int or None): If the number of shots of a noisy circuit exceeds this value simulation will be split into multi circuits for execution and the results accumulated. If `None` circuits will not be split based on shots. When splitting circuits use the `max_job_size` option to control how these split circuits should be submitted to the executor (Default: None).
*   `enable_truncation` (bool): If set to True this removes unnecessary qubits which do not affect the simulation outcome from the simulated circuits (Default: True).
*   `zero_threshold` (double): Sets the threshold for truncating small values to zero in the result data (Default: 1e-10).
*   `validation_threshold` (double): Sets the threshold for checking if initial states are valid (Default: 1e-8).
*   `max_parallel_threads` (int): Sets the maximum number of CPU cores used by OpenMP for parallelization. If set to 0 the maximum will be set to the number of CPU cores (Default: 0).
*   `max_parallel_experiments` (int): Sets the maximum number of qobj experiments that may be executed in parallel up to the max\_parallel\_threads value. If set to 1 parallel circuit execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads (Default: 1).
*   `max_parallel_shots` (int): Sets the maximum number of shots that may be executed in parallel during each experiment execution, up to the max\_parallel\_threads value. If set to 1 parallel shot execution will be disabled. If set to 0 the maximum will be automatically set to max\_parallel\_threads. Note that this cannot be enabled at the same time as parallel experiment execution (Default: 0).
*   `max_memory_mb` (int): Sets the maximum size of memory to store a state vector. If a state vector needs more, an error is thrown. In general, a state vector of n-qubits uses 2^n complex values (16 Bytes). If set to 0, the maximum will be automatically set to the system memory size (Default: 0).

These backend options only apply when using the `"statevector"` simulation method:

*   `statevector_parallel_threshold` (int): Sets the threshold that the number of qubits must be greater than to enable OpenMP parallelization for matrix multiplication during execution of an experiment. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads. Note that setting this too low can reduce performance (Default: 14).
*   `statevector_sample_measure_opt` (int): Sets the threshold that the number of qubits must be greater than to enable a large qubit optimized implementation of measurement sampling. Note that setting this two low can reduce performance (Default: 10)

These backend options only apply when using the `"stabilizer"` simulation method:

*   `stabilizer_max_snapshot_probabilities` (int): set the maximum qubit number for the \~qiskit.providers.aer.extensions.SnapshotProbabilities instruction (Default: 32).

These backend options only apply when using the `"extended_stabilizer"` simulation method:

*   `extended_stabilizer_sampling_method` (string): Choose how to simulate measurements on qubits. The performance of the simulator depends significantly on this choice. In the following, let n be the number of qubits in the circuit, m the number of qubits measured, and S be the number of shots (Default: resampled\_metropolis).

    *   `"metropolis"`: Use a Monte-Carlo method to sample many output strings from the simulator at once. To be accurate, this method requires that all the possible output strings have a non-zero probability. It will give inaccurate results on cases where the circuit has many zero-probability outcomes. This method has an overall runtime that scales as n^\{2} + (S-1)n.
    *   `"resampled_metropolis"`: A variant of the metropolis method, where the Monte-Carlo method is reinitialised for every shot. This gives better results for circuits where some outcomes have zero probability, but will still fail if the output distribution is sparse. The overall runtime scales as Sn^\{2}.
    *   `"norm_estimation"`: An alternative sampling method using random state inner products to estimate outcome probabilites. This method requires twice as much memory, and significantly longer runtimes, but gives accurate results on circuits with sparse output distributions. The overall runtime scales as Sn^\{3}m^\{3}.

*   `extended_stabilizer_metropolis_mixing_time` (int): Set how long the monte-carlo method runs before performing measurements. If the output distribution is strongly peaked, this can be decreased alongside setting extended\_stabilizer\_disable\_measurement\_opt to True (Default: 5000).

*   `"extended_stabilizer_approximation_error"` (double): Set the error in the approximation for the extended\_stabilizer method. A smaller error needs more memory and computational time (Default: 0.05).

*   `extended_stabilizer_norm_estimation_samples` (int): The default number of samples for the norm estimation sampler. The method will use the default, or 4m^\{2} samples where m is the number of qubits to be measured, whichever is larger (Default: 100).

*   `extended_stabilizer_norm_estimation_repetitions` (int): The number of times to repeat the norm estimation. The median of these reptitions is used to estimate and sample output strings (Default: 3).

*   `extended_stabilizer_parallel_threshold` (int): Set the minimum size of the extended stabilizer decomposition before we enable OpenMP parallelization. If parallel circuit or shot execution is enabled this will only use unallocated CPU cores up to max\_parallel\_threads (Default: 100).

*   `extended_stabilizer_probabilities_snapshot_samples` (int): If using the metropolis or resampled\_metropolis sampling method, set the number of samples used to estimate probabilities in a probabilities snapshot (Default: 3000).

These backend options only apply when using the `"matrix_product_state"` simulation method:

*   `matrix_product_state_max_bond_dimension` (int): Sets a limit on the number of Schmidt coefficients retained at the end of the svd algorithm. Coefficients beyond this limit will be discarded. (Default: None, i.e., no limit on the bond dimension).

*   `matrix_product_state_truncation_threshold` (double): Discard the smallest coefficients for which the sum of their squares is smaller than this threshold. (Default: 1e-16).

*   `mps_sample_measure_algorithm` (str): Choose which algorithm to use for `"sample_measure"` (Default: “mps\_apply\_measure”).

    *   `"mps_probabilities"`: This method first constructs the probability vector and then generates a sample per shot. It is more efficient for a large number of shots and a small number of qubits, with complexity O(2^n \* n \* D^2) to create the vector and O(1) per shot, where n is the number of qubits and D is the bond dimension.
    *   `"mps_apply_measure"`: This method creates a copy of the mps structure and measures directly on it. It is more efficient for a small number of shots, and a large number of qubits, with complexity around O(n \* D^2) per shot.

*   `mps_log_data` (str): if True, output logging data of the MPS structure: bond dimensions and values discarded during approximation. (Default: False)

These backend options apply in circuit optimization passes:

*   `fusion_enable` (bool): Enable fusion optimization in circuit optimization passes \[Default: True]
*   `fusion_verbose` (bool): Output gates generated in fusion optimization into metadata \[Default: False]
*   `fusion_max_qubit` (int): Maximum number of qubits for a operation generated in a fusion optimization \[Default: 5]
*   `fusion_threshold` (int): Threshold that number of qubits must be greater than or equal to enable fusion optimization \[Default: 14]

Aer class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration.
*   **properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") *or None*) – Optional, backend properties.
*   **defaults** ([*PulseDefaults*](qiskit.providers.models.PulseDefaults#qiskit.providers.models.PulseDefaults "qiskit.providers.models.PulseDefaults") *or None*) – Optional, backend pulse defaults.
*   **provider** ([*Provider*](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")) – Optional, provider responsible for this backend.
*   **backend\_options** (*dict or None*) – Optional set custom backend options.

**Raises**

[**AerError**](qiskit.providers.aer.AerError#qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if there is no name in the configuration

## Methods

|                                                                                                                                                                                         |                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`available_devices`](qiskit.providers.aer.QasmSimulator.available_devices#qiskit.providers.aer.QasmSimulator.available_devices "qiskit.providers.aer.QasmSimulator.available_devices") | Return the available simulation methods.        |
| [`available_methods`](qiskit.providers.aer.QasmSimulator.available_methods#qiskit.providers.aer.QasmSimulator.available_methods "qiskit.providers.aer.QasmSimulator.available_methods") | Return the available simulation methods.        |
| [`clear_options`](qiskit.providers.aer.QasmSimulator.clear_options#qiskit.providers.aer.QasmSimulator.clear_options "qiskit.providers.aer.QasmSimulator.clear_options")                 | Reset the simulator options to default values.  |
| [`configuration`](qiskit.providers.aer.QasmSimulator.configuration#qiskit.providers.aer.QasmSimulator.configuration "qiskit.providers.aer.QasmSimulator.configuration")                 | Return the simulator backend configuration.     |
| [`defaults`](qiskit.providers.aer.QasmSimulator.defaults#qiskit.providers.aer.QasmSimulator.defaults "qiskit.providers.aer.QasmSimulator.defaults")                                     | Return the simulator backend pulse defaults.    |
| [`from_backend`](qiskit.providers.aer.QasmSimulator.from_backend#qiskit.providers.aer.QasmSimulator.from_backend "qiskit.providers.aer.QasmSimulator.from_backend")                     | Initialize simulator from backend.              |
| [`name`](qiskit.providers.aer.QasmSimulator.name#qiskit.providers.aer.QasmSimulator.name "qiskit.providers.aer.QasmSimulator.name")                                                     | Return the backend name.                        |
| [`properties`](qiskit.providers.aer.QasmSimulator.properties#qiskit.providers.aer.QasmSimulator.properties "qiskit.providers.aer.QasmSimulator.properties")                             | Return the simulator backend properties if set. |
| [`provider`](qiskit.providers.aer.QasmSimulator.provider#qiskit.providers.aer.QasmSimulator.provider "qiskit.providers.aer.QasmSimulator.provider")                                     | Return the backend Provider.                    |
| [`run`](qiskit.providers.aer.QasmSimulator.run#qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run")                                                         | Run a qobj on the backend.                      |
| [`set_option`](qiskit.providers.aer.QasmSimulator.set_option#qiskit.providers.aer.QasmSimulator.set_option "qiskit.providers.aer.QasmSimulator.set_option")                             | Special handling for setting backend options.   |
| [`set_options`](qiskit.providers.aer.QasmSimulator.set_options#qiskit.providers.aer.QasmSimulator.set_options "qiskit.providers.aer.QasmSimulator.set_options")                         | Set the simulator options                       |
| [`status`](qiskit.providers.aer.QasmSimulator.status#qiskit.providers.aer.QasmSimulator.status "qiskit.providers.aer.QasmSimulator.status")                                             | Return backend status.                          |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.aer.QasmSimulator.run#qiskit.providers.aer.QasmSimulator.run "qiskit.providers.aer.QasmSimulator.run") method.

<span id="undefined" />

### version

`= 1`
