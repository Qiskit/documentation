---
title: FakeAthens
description: API reference for qiskit.providers.fake_provider.FakeAthens
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeAthens
---

# FakeAthens

<span id="qiskit.providers.fake_provider.FakeAthens" />

`FakeAthens` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/providers/fake_provider/backends/athens/fake_athens.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake 5 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeAthens.configuration" />

`FakeAthens.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeAthens.defaults" />

`FakeAthens.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeAthens.name" />

`FakeAthens.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeAthens.properties" />

`FakeAthens.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeAthens.provider" />

`FakeAthens.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeAthens.run" />

`FakeAthens.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeAthens.set_options" />

`FakeAthens.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeAthens.status" />

`FakeAthens.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeAthens.backend_name" />

### backend\_name

`= 'fake_athens'`

<span id="qiskit.providers.fake_provider.FakeAthens.conf_filename" />

### conf\_filename

`= 'conf_athens.json'`

<span id="qiskit.providers.fake_provider.FakeAthens.defs_filename" />

### defs\_filename

`= 'defs_athens.json'`

<span id="qiskit.providers.fake_provider.FakeAthens.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/athens'`

<span id="qiskit.providers.fake_provider.FakeAthens.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeAthens#run "qiskit.providers.fake_provider.FakeAthens.run") method.

<span id="qiskit.providers.fake_provider.FakeAthens.props_filename" />

### props\_filename

`= 'props_athens.json'`

<span id="qiskit.providers.fake_provider.FakeAthens.version" />

### version

`= 1`

