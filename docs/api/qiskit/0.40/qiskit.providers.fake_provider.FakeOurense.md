---
title: FakeOurense
description: API reference for qiskit.providers.fake_provider.FakeOurense
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeOurense
---

# FakeOurense

<span id="qiskit.providers.fake_provider.FakeOurense" />

`FakeOurense` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/providers/fake_provider/backends/ourense/fake_ourense.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_qasm_backend.FakeQasmBackend`

A fake 5 qubit backend.

```python
0 ↔ 1 ↔ 3 ↔ 4
    ↕
    2
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeOurense.configuration" />

`FakeOurense.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeOurense.name" />

`FakeOurense.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeOurense.properties" />

`FakeOurense.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeOurense.provider" />

`FakeOurense.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeOurense.run" />

`FakeOurense.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeOurense.set_options" />

`FakeOurense.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeOurense.status" />

`FakeOurense.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeOurense.backend_name" />

### backend\_name

`= 'fake_ourense'`

<span id="qiskit.providers.fake_provider.FakeOurense.conf_filename" />

### conf\_filename

`= 'conf_ourense.json'`

<span id="qiskit.providers.fake_provider.FakeOurense.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/ourense'`

<span id="qiskit.providers.fake_provider.FakeOurense.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeOurense#run "qiskit.providers.fake_provider.FakeOurense.run") method.

<span id="qiskit.providers.fake_provider.FakeOurense.props_filename" />

### props\_filename

`= 'props_ourense.json'`

<span id="qiskit.providers.fake_provider.FakeOurense.version" />

### version

`= 1`

