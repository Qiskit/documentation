---
title: StatevectorSimulatorPy
description: API reference for qiskit.providers.basicaer.StatevectorSimulatorPy
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.StatevectorSimulatorPy
---

# StatevectorSimulatorPy

<span id="qiskit.providers.basicaer.StatevectorSimulatorPy" />

`StatevectorSimulatorPy(configuration=None, provider=None)`

Python statevector simulator.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Attributes

|                                                                                                                                                                                                   |   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`StatevectorSimulatorPy.DEFAULT_CONFIGURATION`](qiskit.providers.basicaer.StatevectorSimulatorPy.DEFAULT_CONFIGURATION "qiskit.providers.basicaer.StatevectorSimulatorPy.DEFAULT_CONFIGURATION") |   |
| [`StatevectorSimulatorPy.DEFAULT_OPTIONS`](qiskit.providers.basicaer.StatevectorSimulatorPy.DEFAULT_OPTIONS "qiskit.providers.basicaer.StatevectorSimulatorPy.DEFAULT_OPTIONS")                   |   |
| [`StatevectorSimulatorPy.MAX_QUBITS_MEMORY`](qiskit.providers.basicaer.StatevectorSimulatorPy.MAX_QUBITS_MEMORY "qiskit.providers.basicaer.StatevectorSimulatorPy.MAX_QUBITS_MEMORY")             |   |
| [`StatevectorSimulatorPy.SHOW_FINAL_STATE`](qiskit.providers.basicaer.StatevectorSimulatorPy.SHOW_FINAL_STATE "qiskit.providers.basicaer.StatevectorSimulatorPy.SHOW_FINAL_STATE")                |   |

## Methods

|                                                                                                                                                                                          |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`StatevectorSimulatorPy.configuration`](qiskit.providers.basicaer.StatevectorSimulatorPy.configuration "qiskit.providers.basicaer.StatevectorSimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`StatevectorSimulatorPy.name`](qiskit.providers.basicaer.StatevectorSimulatorPy.name "qiskit.providers.basicaer.StatevectorSimulatorPy.name")()                                         | Return the backend name.                                           |
| [`StatevectorSimulatorPy.properties`](qiskit.providers.basicaer.StatevectorSimulatorPy.properties "qiskit.providers.basicaer.StatevectorSimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`StatevectorSimulatorPy.provider`](qiskit.providers.basicaer.StatevectorSimulatorPy.provider "qiskit.providers.basicaer.StatevectorSimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`StatevectorSimulatorPy.run`](qiskit.providers.basicaer.StatevectorSimulatorPy.run "qiskit.providers.basicaer.StatevectorSimulatorPy.run")(qobj\[, …])                                  | Run qobj asynchronously.                                           |
| [`StatevectorSimulatorPy.run_experiment`](qiskit.providers.basicaer.StatevectorSimulatorPy.run_experiment "qiskit.providers.basicaer.StatevectorSimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`StatevectorSimulatorPy.status`](qiskit.providers.basicaer.StatevectorSimulatorPy.status "qiskit.providers.basicaer.StatevectorSimulatorPy.status")()                                   | Return the backend status.                                         |
| [`StatevectorSimulatorPy.version`](qiskit.providers.basicaer.StatevectorSimulatorPy.version "qiskit.providers.basicaer.StatevectorSimulatorPy.version")()                                | Return the backend version.                                        |

