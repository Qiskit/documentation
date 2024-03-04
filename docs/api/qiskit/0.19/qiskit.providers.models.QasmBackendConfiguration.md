---
title: QasmBackendConfiguration
description: API reference for qiskit.providers.models.QasmBackendConfiguration
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.models.QasmBackendConfiguration
---

# QasmBackendConfiguration

<span id="qiskit.providers.models.QasmBackendConfiguration" />

`QasmBackendConfiguration(backend_name, backend_version, n_qubits, basis_gates, gates, local, simulator, conditional, open_pulse, memory, max_shots, coupling_map, max_experiments=None, sample_name=None, n_registers=None, register_map=None, configurable=None, credits_required=None, online_date=None, display_name=None, description=None, tags=None, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/providers/models/backendconfiguration.py "view source code")

Class representing a Qasm Backend Configuration.

<span id="qiskit.providers.models.QasmBackendConfiguration.backend_name" />

### backend\_name

backend name.

<span id="qiskit.providers.models.QasmBackendConfiguration.backend_version" />

### backend\_version

backend version in the form X.Y.Z.

<span id="qiskit.providers.models.QasmBackendConfiguration.n_qubits" />

### n\_qubits

number of qubits.

<span id="qiskit.providers.models.QasmBackendConfiguration.basis_gates" />

### basis\_gates

list of basis gates names on the backend.

<span id="qiskit.providers.models.QasmBackendConfiguration.gates" />

### gates

list of basis gates on the backend.

<span id="qiskit.providers.models.QasmBackendConfiguration.local" />

### local

backend is local or remote.

<span id="qiskit.providers.models.QasmBackendConfiguration.simulator" />

### simulator

backend is a simulator.

<span id="qiskit.providers.models.QasmBackendConfiguration.conditional" />

### conditional

backend supports conditional operations.

<span id="qiskit.providers.models.QasmBackendConfiguration.open_pulse" />

### open\_pulse

backend supports open pulse.

<span id="qiskit.providers.models.QasmBackendConfiguration.memory" />

### memory

backend supports memory.

<span id="qiskit.providers.models.QasmBackendConfiguration.max_shots" />

### max\_shots

maximum number of shots supported.

Initialize a QasmBackendConfiguration Object

**Parameters**

*   **backend\_name** (*str*) – The backend name
*   **backend\_version** (*str*) – The backend version in the form X.Y.Z
*   **n\_qubits** (*int*) – the number of qubits for the backend
*   **basis\_gates** (*list*) – The list of strings for the basis gates of the backends
*   **gates** (*list*) – The list of GateConfig objects for the basis gates of the backend
*   **local** (*bool*) – True if the backend is local or False if remote
*   **simulator** (*bool*) – True if the backend is a simulator
*   **conditional** (*bool*) – True if the backend supports conditional operations
*   **open\_pulse** (*bool*) – True if the backend supports OpenPulse
*   **memory** (*bool*) – True if the backend supports memory
*   **max\_shots** (*int*) – The maximum number of shots allowed on the backend
*   **coupling\_map** (*list*) – The coupling map for the device
*   **max\_experiments** (*int*) – The maximum number of experiments per job
*   **sample\_name** (*str*) – Sample name for the backend
*   **n\_registers** (*int*) – Number of register slots available for feedback (if conditional is True)
*   **register\_map** (*list*) – An array of dimension n\_qubits X n\_registers that specifies whether a qubit can store a measurement in a certain register slot.
*   **configurable** (*bool*) – True if the backend is configurable, if the backend is a simulator
*   **credits\_required** (*bool*) – True if backend requires credits to run a job.
*   **online\_date** (*datetime*) – The date that the device went online
*   **display\_name** (*str*) – Alternate name field for the backend
*   **description** (*str*) – A description for the backend
*   **tags** (*list*) – A list of string tags to describe the backend
*   **\*\*kwargs** – optional fields

## Attributes

### num\_qubits

Returns the number of qubits.

In future, n\_qubits should be replaced in favor of num\_qubits for consistent use throughout Qiskit. Until this is properly refactored, this property serves as intermediate solution.

## Methods

### from\_dict

<span id="qiskit.providers.models.QasmBackendConfiguration.from_dict" />

`classmethod QasmBackendConfiguration.from_dict(data)`

Create a new GateConfig object from a dictionary.

**Parameters**

**data** (*dict*) – A dictionary representing the GateConfig to create. It will be in the same format as output by [`to_dict()`](qiskit.providers.models.QasmBackendConfiguration#to_dict "qiskit.providers.models.QasmBackendConfiguration.to_dict").

**Returns**

The GateConfig from the input dictionary.

**Return type**

[GateConfig](qiskit.providers.models.GateConfig "qiskit.providers.models.GateConfig")

### to\_dict

<span id="qiskit.providers.models.QasmBackendConfiguration.to_dict" />

`QasmBackendConfiguration.to_dict()`

Return a dictionary format representation of the GateConfig.

**Returns**

The dictionary form of the GateConfig.

**Return type**

dict

