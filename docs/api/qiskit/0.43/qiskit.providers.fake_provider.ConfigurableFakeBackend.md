---
title: ConfigurableFakeBackend
description: API reference for qiskit.providers.fake_provider.ConfigurableFakeBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.ConfigurableFakeBackend
---

# ConfigurableFakeBackend

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend" />

`ConfigurableFakeBackend(name, n_qubits, version=None, coupling_map=None, basis_gates=None, qubit_t1=None, qubit_t2=None, qubit_frequency=None, qubit_readout_error=None, single_qubit_gates=None, dt=None, std=None, seed=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/fake_provider/utils/configurable_backend.py "view source code")

Bases: `FakeBackend`

Configurable backend.

Creates backend based on provided configuration.

**Parameters**

*   **name** (*str*) – Name of the backend.
*   **n\_qubits** (*int*) – Number of qubits in the backend.
*   **version** (*str | None*) – Version of the fake backend.
*   **coupling\_map** (*List\[List\[int]] | None*) – Coupling map.
*   **basis\_gates** (*List\[str] | None*) – Basis gates of the backend.
*   **qubit\_t1** (*float | List\[float] | None*) – Longitudinal coherence times.
*   **qubit\_t2** (*float | List\[float] | None*) – Transverse coherence times.
*   **qubit\_frequency** (*float | List\[float] | None*) – Frequency of qubits.
*   **qubit\_readout\_error** (*float | List\[float] | None*) – Readout error of qubits.
*   **single\_qubit\_gates** (*List\[str] | None*) – List of single qubit gates for backend properties.
*   **dt** (*float | None*) – Discretization of the input time sequences.
*   **std** (*float | None*) – Standard deviation of the generated distributions.
*   **seed** (*int | None*) – Random seed.

## Methods

<span id="qiskit-providers-fake-provider-configurablefakebackend-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.configuration" />

`ConfigurableFakeBackend.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-configurablefakebackend-defaults" />

### defaults

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.defaults" />

`ConfigurableFakeBackend.defaults()`

Return backend defaults.

<span id="qiskit-providers-fake-provider-configurablefakebackend-name" />

### name

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.name" />

`ConfigurableFakeBackend.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-configurablefakebackend-properties" />

### properties

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.properties" />

`ConfigurableFakeBackend.properties()`

Return backend properties

<span id="qiskit-providers-fake-provider-configurablefakebackend-provider" />

### provider

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.provider" />

`ConfigurableFakeBackend.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-configurablefakebackend-run" />

### run

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.run" />

`ConfigurableFakeBackend.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-configurablefakebackend-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.set_options" />

`ConfigurableFakeBackend.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-configurablefakebackend-status" />

### status

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.status" />

`ConfigurableFakeBackend.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.ConfigurableFakeBackend#run "qiskit.providers.fake_provider.ConfigurableFakeBackend.run") method.

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.version" />

### version

`= 1`

