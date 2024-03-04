---
title: PulseSimulator
description: API reference for qiskit.providers.aer.PulseSimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.PulseSimulator
---

# PulseSimulator

<span id="qiskit.providers.aer.PulseSimulator" />

`PulseSimulator(configuration=None, properties=None, defaults=None, provider=None, **backend_options)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.10/qiskit/providers/aer/backends/pulse_simulator.py "view source code")

Bases: `qiskit.providers.aer.backends.aerbackend.AerBackend`

Pulse schedule simulator backend.

The `PulseSimulator` simulates continuous time Hamiltonian dynamics of a quantum system, with controls specified by pulse `Schedule` objects, and the model of the physical system specified by [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") objects. Results are returned in the same format as when jobs are submitted to actual devices.

**Examples**

The minimal information a `PulseSimulator` needs to simulate is a [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"), which can be supplied either by setting the backend option before calling `run`, e.g.:

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

In the above example, the `PulseSimulator` copies all configuration and default data from `FakeArmonk()`, and as such has the same affect as `FakeArmonk()` when passed as an argument to `assemble`. Furthermore it constructs a [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") from the model details in the supplied backend, which is then used in simulation.

**Supported PulseQobj parameters**

*   `qubit_lo_freq`: Local oscillator frequencies for each `DriveChannel`. Defaults to either the value given in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"), or is calculated directly from the Hamiltonian.

*   `meas_level`: Type of desired measurement output, in `[1, 2]`. `1` gives complex numbers (IQ values), and `2` gives discriminated states `|0>` and `|1>`. Defaults to `2`.

*   `meas_return`: Measurement type, `'single'` or `'avg'`. Defaults to `'avg'`.

*   `shots`: Number of shots per experiment. Defaults to `1024`.

*   `executor`: Set a custom executor for asynchronous running of simulation

*   `max_job_size` (int or None): If the number of run schedules exceeds this value simulation will be run as a set of of sub-jobs on the executor. If `None` simulation of all schedules are submitted to the executor as a single job (Default: None).

*   `max_shot_size` (int or None): If the number of shots of a noisy circuit exceeds this value simulation will be split into multi circuits for execution and the results accumulated. If `None` circuits will not be split based on shots. When splitting circuits use the `max_job_size` option to control how these split circuits should be submitted to the executor (Default: None).

    jobs (Default: None).

**Simulation details**

The simulator uses the `zvode` differential equation solver method through `scipy`. Simulation is performed in the rotating frame of the diagonal of the drift Hamiltonian contained in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"). Measurements are performed in the dressed basis of the drift Hamiltonian.

**Other options**

Additional valid keyword arguments for `run()`:

*   `'solver_options'`: A `dict` for solver options. Accepted keys are `'atol'`, `'rtol'`, `'nsteps'`, `'max_step'`, `'num_cpus'`, `'norm_tol'`, and `'norm_steps'`.

Aer class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration.
*   **properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") *or None*) – Optional, backend properties.
*   **defaults** ([*PulseDefaults*](qiskit.providers.models.PulseDefaults "qiskit.providers.models.PulseDefaults") *or None*) – Optional, backend pulse defaults.
*   **provider** ([*Provider*](qiskit.providers.Provider "qiskit.providers.Provider")) – Optional, provider responsible for this backend.
*   **backend\_options** (*dict or None*) – Optional set custom backend options.

**Raises**

[**AerError**](qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if there is no name in the configuration

## Methods

### clear\_options

<span id="qiskit.providers.aer.PulseSimulator.clear_options" />

`PulseSimulator.clear_options()`

Reset the simulator options to default values.

### configuration

<span id="qiskit.providers.aer.PulseSimulator.configuration" />

`PulseSimulator.configuration()`

Return the simulator backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.aer.PulseSimulator.defaults" />

`PulseSimulator.defaults()`

Return the simulator backend pulse defaults.

**Returns**

**The backend pulse defaults or `None` if the**

backend does not support pulse.

**Return type**

[PulseDefaults](qiskit.providers.models.PulseDefaults "qiskit.providers.models.PulseDefaults")

### from\_backend

<span id="qiskit.providers.aer.PulseSimulator.from_backend" />

`classmethod PulseSimulator.from_backend(backend, **options)`

Initialize simulator from backend.

### name

<span id="qiskit.providers.aer.PulseSimulator.name" />

`PulseSimulator.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.aer.PulseSimulator.properties" />

`PulseSimulator.properties()`

Return the simulator backend properties if set.

**Returns**

**The backend properties or `None` if the**

backend does not have properties set.

**Return type**

[BackendProperties](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")

### provider

<span id="qiskit.providers.aer.PulseSimulator.provider" />

`PulseSimulator.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.aer.PulseSimulator.run" />

`PulseSimulator.run(schedules, validate=True, **run_options)`

Run a qobj on the backend.

**Parameters**

*   **schedules** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.Schedule") *or list*) – The pulse [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") (or list of `Schedule` objects) to be executed.
*   **validate** (*bool*) – validate the Qobj before running (default: True).
*   **run\_options** (*kwargs*) – additional run time backend options.

**Returns**

The simulation job.

**Return type**

[AerJob](qiskit.providers.aer.jobs.AerJob "qiskit.providers.aer.jobs.AerJob")

#### Additional Information:

*   kwarg options specified in `run_options` will override options of the same kwarg specified in the simulator options, the `backend_options` and the `Qobj.config`.

### set\_option

<span id="qiskit.providers.aer.PulseSimulator.set_option" />

`PulseSimulator.set_option(key, value)`

Set pulse simulation options and update backend.

### set\_options

<span id="qiskit.providers.aer.PulseSimulator.set_options" />

`PulseSimulator.set_options(**fields)`

Set the simulator options

### status

<span id="qiskit.providers.aer.PulseSimulator.status" />

`PulseSimulator.status()`

Return backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.aer.PulseSimulator.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.aer.PulseSimulator#run "qiskit.providers.aer.PulseSimulator.run") method.

<span id="qiskit.providers.aer.PulseSimulator.version" />

### version

`= 1`

