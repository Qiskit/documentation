---
title: FakeAlmaden
description: API reference for qiskit.providers.fake_provider.FakeAlmaden
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeAlmaden
---

# FakeAlmaden

<span id="qiskit.providers.fake_provider.FakeAlmaden" />

`FakeAlmaden` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/fake_provider/backends/almaden/fake_almaden.py "view source code")

Bases: `FakeQasmBackend`

A fake Almaden backend.

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

<span id="qiskit-providers-fake-provider-fakealmaden-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeAlmaden.configuration" />

`FakeAlmaden.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-fakealmaden-name" />

### name

<span id="qiskit.providers.fake_provider.FakeAlmaden.name" />

`FakeAlmaden.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-fakealmaden-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeAlmaden.properties" />

`FakeAlmaden.properties()`

Returns a snapshot of device properties

<span id="qiskit-providers-fake-provider-fakealmaden-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeAlmaden.provider" />

`FakeAlmaden.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-fakealmaden-run" />

### run

<span id="qiskit.providers.fake_provider.FakeAlmaden.run" />

`FakeAlmaden.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-fakealmaden-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeAlmaden.set_options" />

`FakeAlmaden.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-fakealmaden-status" />

### status

<span id="qiskit.providers.fake_provider.FakeAlmaden.status" />

`FakeAlmaden.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeAlmaden.backend_name" />

### backend\_name

`= 'fake_almaden'`

<span id="qiskit.providers.fake_provider.FakeAlmaden.conf_filename" />

### conf\_filename

`= 'conf_almaden.json'`

<span id="qiskit.providers.fake_provider.FakeAlmaden.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/almaden'`

<span id="qiskit.providers.fake_provider.FakeAlmaden.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeAlmaden#run "qiskit.providers.fake_provider.FakeAlmaden.run") method.

<span id="qiskit.providers.fake_provider.FakeAlmaden.props_filename" />

### props\_filename

`= 'props_almaden.json'`

<span id="qiskit.providers.fake_provider.FakeAlmaden.version" />

### version

`= 1`

