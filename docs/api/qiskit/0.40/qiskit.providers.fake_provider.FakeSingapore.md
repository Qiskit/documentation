---
title: FakeSingapore
description: API reference for qiskit.providers.fake_provider.FakeSingapore
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeSingapore
---

# FakeSingapore

<span id="qiskit.providers.fake_provider.FakeSingapore" />

`FakeSingapore` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/providers/fake_provider/backends/singapore/fake_singapore.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_qasm_backend.FakeQasmBackend`

A fake Singapore backend.

```python
00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
      ↕         ↕
05 ↔ 06 ↔ 07 ↔ 08 ↔ 09
 ↕         ↕         ↕
10 ↔ 11 ↔ 12 ↔ 13 ↔ 14
      ↕         ↕
15 ↔ 16 ↔ 17 ↔ 18 ↔ 19
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeSingapore.configuration" />

`FakeSingapore.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeSingapore.name" />

`FakeSingapore.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeSingapore.properties" />

`FakeSingapore.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeSingapore.provider" />

`FakeSingapore.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeSingapore.run" />

`FakeSingapore.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeSingapore.set_options" />

`FakeSingapore.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeSingapore.status" />

`FakeSingapore.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeSingapore.backend_name" />

### backend\_name

`= 'fake_singapore'`

<span id="qiskit.providers.fake_provider.FakeSingapore.conf_filename" />

### conf\_filename

`= 'conf_singapore.json'`

<span id="qiskit.providers.fake_provider.FakeSingapore.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/singapore'`

<span id="qiskit.providers.fake_provider.FakeSingapore.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeSingapore#run "qiskit.providers.fake_provider.FakeSingapore.run") method.

<span id="qiskit.providers.fake_provider.FakeSingapore.props_filename" />

### props\_filename

`= 'props_singapore.json'`

<span id="qiskit.providers.fake_provider.FakeSingapore.version" />

### version

`= 1`

