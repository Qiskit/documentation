---
title: FakeQasmSimulator
description: API reference for qiskit.providers.fake_provider.FakeQasmSimulator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeQasmSimulator
---

# FakeQasmSimulator

<span id="qiskit.providers.fake_provider.FakeQasmSimulator" />

`FakeQasmSimulator` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/providers/fake_provider/fake_qasm_simulator.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_backend.FakeBackend`

A fake simulator backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.configuration" />

`FakeQasmSimulator.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.name" />

`FakeQasmSimulator.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.properties" />

`FakeQasmSimulator.properties()`

Return backend properties

### provider

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.provider" />

`FakeQasmSimulator.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.run" />

`FakeQasmSimulator.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.set_options" />

`FakeQasmSimulator.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.status" />

`FakeQasmSimulator.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeQasmSimulator#run "qiskit.providers.fake_provider.FakeQasmSimulator.run") method.

<span id="qiskit.providers.fake_provider.FakeQasmSimulator.version" />

### version

`= 1`

