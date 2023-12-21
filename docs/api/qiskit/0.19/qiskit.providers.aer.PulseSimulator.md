---
title: PulseSimulator
description: API reference for qiskit.providers.aer.PulseSimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.PulseSimulator
---

# PulseSimulator

<span id="qiskit.providers.aer.PulseSimulator" />

`PulseSimulator(configuration=None, provider=None)`

Pulse schedule simulator backend.

The `PulseSimulator` simulates continuous time Hamiltonian dynamics of a quantum system, with controls specified by pulse `Schedule` objects, and the model of the physical system specified by [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") objects. Results are returned in the same format as when jobs are submitted to actual devices.

**Example**

To use the simulator, first `assemble()` a `PulseQobj` object from a list of pulse `Schedule` objects, using `backend=PulseSimulator()`. Call the simulator with the `PulseQobj` and a [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel") object representing the physical system.

```python
backend_sim = qiskit.providers.aer.PulseSimulator()

# Assemble schedules using PulseSimulator as the backend
pulse_qobj = assemble(schedules, backend=backend_sim)

# Run simulation on a PulseSystemModel object
results = backend_sim.run(pulse_qobj, system_model)
```

**Supported PulseQobj parameters**

*   `qubit_lo_freq`: Local oscillator frequencies for each `DriveChannel`. Defaults to either the value given in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"), or is calculated directly from the Hamiltonian.
*   `meas_level`: Type of desired measurement output, in `[1, 2]`. `1` gives complex numbers (IQ values), and `2` gives discriminated states `|0>` and `|1>`. Defaults to `2`.
*   `meas_return`: Measurement type, `'single'` or `'avg'`. Defaults to `'avg'`.
*   `shots`: Number of shots per experiment. Defaults to `1024`.

**Simulation details**

The simulator uses the `zvode` differential equation solver method through `scipy`. Simulation is performed in the rotating frame of the diagonal of the drift Hamiltonian contained in the [`PulseSystemModel`](qiskit.providers.aer.pulse.PulseSystemModel "qiskit.providers.aer.pulse.PulseSystemModel"). Measurements are performed in the dressed basis of the drift Hamiltonian.

**Other options**

[`PulseSimulator.run()`](qiskit.providers.aer.PulseSimulator.run "qiskit.providers.aer.PulseSimulator.run") takes an additional `dict` argument `backend_options` for customization. Accepted keys:

*   `'ode_options'`: A `dict` for `zvode` solver options. Accepted keys are `'atol'`, `'rtol'`, `'nsteps'`, `'max_step'`, `'num_cpus'`, `'norm_tol'`, and `'norm_steps'`.

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

|                                                                                                                                                                 |   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`PulseSimulator.DEFAULT_CONFIGURATION`](qiskit.providers.aer.PulseSimulator.DEFAULT_CONFIGURATION "qiskit.providers.aer.PulseSimulator.DEFAULT_CONFIGURATION") |   |

## Methods

|                                                                                                                                           |                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| [`PulseSimulator.configuration`](qiskit.providers.aer.PulseSimulator.configuration "qiskit.providers.aer.PulseSimulator.configuration")() | Return the backend configuration. |
| [`PulseSimulator.defaults`](qiskit.providers.aer.PulseSimulator.defaults "qiskit.providers.aer.PulseSimulator.defaults")()                | Return defaults.                  |
| [`PulseSimulator.name`](qiskit.providers.aer.PulseSimulator.name "qiskit.providers.aer.PulseSimulator.name")()                            | Return the backend name.          |
| [`PulseSimulator.properties`](qiskit.providers.aer.PulseSimulator.properties "qiskit.providers.aer.PulseSimulator.properties")()          | Return the backend properties.    |
| [`PulseSimulator.provider`](qiskit.providers.aer.PulseSimulator.provider "qiskit.providers.aer.PulseSimulator.provider")()                | Return the backend Provider.      |
| [`PulseSimulator.run`](qiskit.providers.aer.PulseSimulator.run "qiskit.providers.aer.PulseSimulator.run")(qobj, system\_model\[, …])      | Run a qobj on system\_model.      |
| [`PulseSimulator.status`](qiskit.providers.aer.PulseSimulator.status "qiskit.providers.aer.PulseSimulator.status")()                      | Return backend status.            |
| [`PulseSimulator.version`](qiskit.providers.aer.PulseSimulator.version "qiskit.providers.aer.PulseSimulator.version")()                   | Return the backend version.       |

