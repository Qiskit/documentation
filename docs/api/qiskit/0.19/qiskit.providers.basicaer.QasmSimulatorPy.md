---
title: QasmSimulatorPy
description: API reference for qiskit.providers.basicaer.QasmSimulatorPy
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.QasmSimulatorPy
---

# QasmSimulatorPy

<span id="qiskit.providers.basicaer.QasmSimulatorPy" />

`QasmSimulatorPy(configuration=None, provider=None)`

Python implementation of a qasm simulator.

Base class for backends.

This method should initialize the module and its configuration, and raise an exception if a component of the module is not available.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **provider** ([*BaseProvider*](qiskit.providers.BaseProvider "qiskit.providers.BaseProvider")) – provider responsible for this backend

**Raises**

**QiskitError** – if an error occurred when instantiating the backend.

## Attributes

|                                                                                                                                                                              |   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| [`QasmSimulatorPy.DEFAULT_CONFIGURATION`](qiskit.providers.basicaer.QasmSimulatorPy.DEFAULT_CONFIGURATION "qiskit.providers.basicaer.QasmSimulatorPy.DEFAULT_CONFIGURATION") |   |
| [`QasmSimulatorPy.DEFAULT_OPTIONS`](qiskit.providers.basicaer.QasmSimulatorPy.DEFAULT_OPTIONS "qiskit.providers.basicaer.QasmSimulatorPy.DEFAULT_OPTIONS")                   |   |
| [`QasmSimulatorPy.MAX_QUBITS_MEMORY`](qiskit.providers.basicaer.QasmSimulatorPy.MAX_QUBITS_MEMORY "qiskit.providers.basicaer.QasmSimulatorPy.MAX_QUBITS_MEMORY")             |   |
| [`QasmSimulatorPy.SHOW_FINAL_STATE`](qiskit.providers.basicaer.QasmSimulatorPy.SHOW_FINAL_STATE "qiskit.providers.basicaer.QasmSimulatorPy.SHOW_FINAL_STATE")                |   |

## Methods

|                                                                                                                                                                     |                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [`QasmSimulatorPy.configuration`](qiskit.providers.basicaer.QasmSimulatorPy.configuration "qiskit.providers.basicaer.QasmSimulatorPy.configuration")()              | Return the backend configuration.                                  |
| [`QasmSimulatorPy.name`](qiskit.providers.basicaer.QasmSimulatorPy.name "qiskit.providers.basicaer.QasmSimulatorPy.name")()                                         | Return the backend name.                                           |
| [`QasmSimulatorPy.properties`](qiskit.providers.basicaer.QasmSimulatorPy.properties "qiskit.providers.basicaer.QasmSimulatorPy.properties")()                       | Return the backend properties.                                     |
| [`QasmSimulatorPy.provider`](qiskit.providers.basicaer.QasmSimulatorPy.provider "qiskit.providers.basicaer.QasmSimulatorPy.provider")()                             | Return the backend Provider.                                       |
| [`QasmSimulatorPy.run`](qiskit.providers.basicaer.QasmSimulatorPy.run "qiskit.providers.basicaer.QasmSimulatorPy.run")(qobj\[, backend\_options])                   | Run qobj asynchronously.                                           |
| [`QasmSimulatorPy.run_experiment`](qiskit.providers.basicaer.QasmSimulatorPy.run_experiment "qiskit.providers.basicaer.QasmSimulatorPy.run_experiment")(experiment) | Run an experiment (circuit) and return a single experiment result. |
| [`QasmSimulatorPy.status`](qiskit.providers.basicaer.QasmSimulatorPy.status "qiskit.providers.basicaer.QasmSimulatorPy.status")()                                   | Return the backend status.                                         |
| [`QasmSimulatorPy.version`](qiskit.providers.basicaer.QasmSimulatorPy.version "qiskit.providers.basicaer.QasmSimulatorPy.version")()                                | Return the backend version.                                        |

