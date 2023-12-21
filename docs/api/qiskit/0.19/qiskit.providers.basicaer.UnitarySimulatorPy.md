---
title: UnitarySimulatorPy
description: API reference for qiskit.providers.basicaer.UnitarySimulatorPy
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.UnitarySimulatorPy
---

# UnitarySimulatorPy

<span id="qiskit.providers.basicaer.UnitarySimulatorPy" />

`UnitarySimulatorPy(configuration=None, provider=None)`

Python implementation of a unitary simulator.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Attributes

|                                                                                                                                                                                       |   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`UnitarySimulatorPy.DEFAULT_CONFIGURATION`](qiskit.providers.basicaer.UnitarySimulatorPy.DEFAULT_CONFIGURATION "qiskit.providers.basicaer.UnitarySimulatorPy.DEFAULT_CONFIGURATION") |   |
| [`UnitarySimulatorPy.DEFAULT_OPTIONS`](qiskit.providers.basicaer.UnitarySimulatorPy.DEFAULT_OPTIONS "qiskit.providers.basicaer.UnitarySimulatorPy.DEFAULT_OPTIONS")                   |   |
| [`UnitarySimulatorPy.MAX_QUBITS_MEMORY`](qiskit.providers.basicaer.UnitarySimulatorPy.MAX_QUBITS_MEMORY "qiskit.providers.basicaer.UnitarySimulatorPy.MAX_QUBITS_MEMORY")             |   |

## Methods

|                                                                                                                                                                              |                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`UnitarySimulatorPy.configuration`](qiskit.providers.basicaer.UnitarySimulatorPy.configuration "qiskit.providers.basicaer.UnitarySimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`UnitarySimulatorPy.name`](qiskit.providers.basicaer.UnitarySimulatorPy.name "qiskit.providers.basicaer.UnitarySimulatorPy.name")()                                         | Return the backend name.                                           |
| [`UnitarySimulatorPy.properties`](qiskit.providers.basicaer.UnitarySimulatorPy.properties "qiskit.providers.basicaer.UnitarySimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`UnitarySimulatorPy.provider`](qiskit.providers.basicaer.UnitarySimulatorPy.provider "qiskit.providers.basicaer.UnitarySimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`UnitarySimulatorPy.run`](qiskit.providers.basicaer.UnitarySimulatorPy.run "qiskit.providers.basicaer.UnitarySimulatorPy.run")(qobj\[, backend\_options])                   | Run qobj asynchronously.                                           |
| [`UnitarySimulatorPy.run_experiment`](qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment "qiskit.providers.basicaer.UnitarySimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`UnitarySimulatorPy.status`](qiskit.providers.basicaer.UnitarySimulatorPy.status "qiskit.providers.basicaer.UnitarySimulatorPy.status")()                                   | Return the backend status.                                         |
| [`UnitarySimulatorPy.version`](qiskit.providers.basicaer.UnitarySimulatorPy.version "qiskit.providers.basicaer.UnitarySimulatorPy.version")()                                | Return the backend version.                                        |

