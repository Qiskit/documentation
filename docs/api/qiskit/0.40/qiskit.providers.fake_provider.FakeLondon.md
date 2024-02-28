---
title: FakeLondon
description: API reference for qiskit.providers.fake_provider.FakeLondon
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeLondon
---

# FakeLondon

<span id="qiskit.providers.fake_provider.FakeLondon" />

`FakeLondon` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/providers/fake_provider/backends/london/fake_london.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_qasm_backend.FakeQasmBackend`

A fake 5 qubit backend.

```python
0 ↔ 1 ↔ 2
    ↕
    3
    ↕
    4
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeLondon.configuration" />

`FakeLondon.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeLondon.name" />

`FakeLondon.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeLondon.properties" />

`FakeLondon.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeLondon.provider" />

`FakeLondon.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeLondon.run" />

`FakeLondon.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeLondon.set_options" />

`FakeLondon.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeLondon.status" />

`FakeLondon.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeLondon.backend_name" />

### backend\_name

`= 'fake_london'`

<span id="qiskit.providers.fake_provider.FakeLondon.conf_filename" />

### conf\_filename

`= 'conf_london.json'`

<span id="qiskit.providers.fake_provider.FakeLondon.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/london'`

<span id="qiskit.providers.fake_provider.FakeLondon.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeLondon#run "qiskit.providers.fake_provider.FakeLondon.run") method.

<span id="qiskit.providers.fake_provider.FakeLondon.props_filename" />

### props\_filename

`= 'props_london.json'`

<span id="qiskit.providers.fake_provider.FakeLondon.version" />

### version

`= 1`

