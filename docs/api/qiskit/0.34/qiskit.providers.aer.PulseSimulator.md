# PulseSimulator

<span id="undefined" />

`PulseSimulator(configuration=None, properties=None, defaults=None, provider=None, **backend_options)`

Bases: `qiskit.providers.aer.backends.aerbackend.AerBackend`

Pulse schedule simulator backend.

The `PulseSimulator` simulates continuous time Hamiltonian dynamics of a quantum system, with controls specified by pulse `Schedule` objects, and the model of the physical system specified by [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") objects. Results are returned in the same format as when jobs are submitted to actual devices.

**Examples**

The minimal information a `PulseSimulator` needs to simulate is a [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"), which can be supplied either by setting the backend option before calling `run`, e.g.:

```python
backend_sim = qiskit.providers.aer.PulseSimulator()

# Set the pulse system model for the simulator
backend_sim.set_options(system_model=system_model)

# Assemble schedules using PulseSimulator as the backend
pulse_qobj = assemble(schedules, backend=backend_sim)

# Run simulation
results = backend_sim.run(pulse_qobj)
```

or by supplying the system model at runtime, e.g.:

```python
backend_sim = qiskit.providers.aer.PulseSimulator()

# Assemble schedules using PulseSimulator as the backend
pulse_qobj = assemble(schedules, backend=backend_sim)

# Run simulation on a PulseSystemModel object
results = backend_sim.run(pulse_qobj, system_model=system_model)
```

Alternatively, an instance of the `PulseSimulator` may be further configured to contain more information present in a real backend. The simplest way to do this is to instantiate the `PulseSimulator` from a real backend:

```python
armonk_sim = qiskit.providers.aer.PulseSimulator.from_backend(FakeArmonk())
pulse_qobj = assemble(schedules, backend=armonk_sim)
armonk_sim.run(pulse_qobj)
```

In the above example, the `PulseSimulator` copies all configuration and default data from `FakeArmonk()`, and as such has the same affect as `FakeArmonk()` when passed as an argument to `assemble`. Furthermore it constructs a [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") from the model details in the supplied backend, which is then used in simulation.

**Supported PulseQobj parameters**

*   `qubit_lo_freq`: Local oscillator frequencies for each `DriveChannel`. Defaults to either the value given in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"), or is calculated directly from the Hamiltonian.

*   `meas_level`: Type of desired measurement output, in `[1, 2]`. `1` gives complex numbers (IQ values), and `2` gives discriminated states `|0>` and `|1>`. Defaults to `2`.

*   `meas_return`: Measurement type, `'single'` or `'avg'`. Defaults to `'avg'`.

*   `shots`: Number of shots per experiment. Defaults to `1024`.

*   `executor`: Set a custom executor for asynchronous running of simulation

*   `max_job_size` (int or None): If the number of run schedules exceeds this value simulation will be run as a set of of sub-jobs on the executor. If `None` simulation of all schedules are submitted to the executor as a single job (Default: None).

*   `max_shot_size` (int or None): If the number of shots of a noisy circuit exceeds this value simulation will be split into multi circuits for execution and the results accumulated. If `None` circuits will not be split based on shots. When splitting circuits use the `max_job_size` option to control how these split circuits should be submitted to the executor (Default: None).

    jobs (Default: None).

**Simulation details**

The simulator uses the `zvode` differential equation solver method through `scipy`. Simulation is performed in the rotating frame of the diagonal of the drift Hamiltonian contained in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel#qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"). Measurements are performed in the dressed basis of the drift Hamiltonian.

**Other options**

Additional valid keyword arguments for `run()`:

*   `'solver_options'`: A `dict` for solver options. Accepted keys are `'atol'`, `'rtol'`, `'nsteps'`, `'max_step'`, `'num_cpus'`, `'norm_tol'`, and `'norm_steps'`.

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

|                                                                                                                                                                            |                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| [`clear_options`](qiskit.providers.aer.PulseSimulator.clear_options#qiskit.providers.aer.PulseSimulator.clear_options "qiskit.providers.aer.PulseSimulator.clear_options") | Reset the simulator options to default values.   |
| [`configuration`](qiskit.providers.aer.PulseSimulator.configuration#qiskit.providers.aer.PulseSimulator.configuration "qiskit.providers.aer.PulseSimulator.configuration") | Return the simulator backend configuration.      |
| [`defaults`](qiskit.providers.aer.PulseSimulator.defaults#qiskit.providers.aer.PulseSimulator.defaults "qiskit.providers.aer.PulseSimulator.defaults")                     | Return the simulator backend pulse defaults.     |
| [`from_backend`](qiskit.providers.aer.PulseSimulator.from_backend#qiskit.providers.aer.PulseSimulator.from_backend "qiskit.providers.aer.PulseSimulator.from_backend")     | Initialize simulator from backend.               |
| [`name`](qiskit.providers.aer.PulseSimulator.name#qiskit.providers.aer.PulseSimulator.name "qiskit.providers.aer.PulseSimulator.name")                                     | Return the backend name.                         |
| [`properties`](qiskit.providers.aer.PulseSimulator.properties#qiskit.providers.aer.PulseSimulator.properties "qiskit.providers.aer.PulseSimulator.properties")             | Return the simulator backend properties if set.  |
| [`provider`](qiskit.providers.aer.PulseSimulator.provider#qiskit.providers.aer.PulseSimulator.provider "qiskit.providers.aer.PulseSimulator.provider")                     | Return the backend Provider.                     |
| [`run`](qiskit.providers.aer.PulseSimulator.run#qiskit.providers.aer.PulseSimulator.run "qiskit.providers.aer.PulseSimulator.run")                                         | Run a qobj on the backend.                       |
| [`set_option`](qiskit.providers.aer.PulseSimulator.set_option#qiskit.providers.aer.PulseSimulator.set_option "qiskit.providers.aer.PulseSimulator.set_option")             | Set pulse simulation options and update backend. |
| [`set_options`](qiskit.providers.aer.PulseSimulator.set_options#qiskit.providers.aer.PulseSimulator.set_options "qiskit.providers.aer.PulseSimulator.set_options")         | Set the simulator options                        |
| [`status`](qiskit.providers.aer.PulseSimulator.status#qiskit.providers.aer.PulseSimulator.status "qiskit.providers.aer.PulseSimulator.status")                             | Return backend status.                           |

## Attributes

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.aer.PulseSimulator.run#qiskit.providers.aer.PulseSimulator.run "qiskit.providers.aer.PulseSimulator.run") method.

<span id="undefined" />

### version

`= 1`
