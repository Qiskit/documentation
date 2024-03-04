---
title: FakeValencia
description: API reference for qiskit.providers.fake_provider.FakeValencia
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeValencia
---

# FakeValencia

<span id="qiskit.providers.fake_provider.FakeValencia" />

`FakeValencia` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/providers/fake_provider/backends/valencia/fake_valencia.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake 5 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeValencia.configuration" />

`FakeValencia.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeValencia.defaults" />

`FakeValencia.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeValencia.name" />

`FakeValencia.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeValencia.properties" />

`FakeValencia.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeValencia.provider" />

`FakeValencia.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeValencia.run" />

`FakeValencia.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeValencia.set_options" />

`FakeValencia.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeValencia.status" />

`FakeValencia.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeValencia.backend_name" />

### backend\_name

`= 'fake_valencia'`

<span id="qiskit.providers.fake_provider.FakeValencia.conf_filename" />

### conf\_filename

`= 'conf_valencia.json'`

<span id="qiskit.providers.fake_provider.FakeValencia.defs_filename" />

### defs\_filename

`= 'defs_valencia.json'`

<span id="qiskit.providers.fake_provider.FakeValencia.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/valencia'`

<span id="qiskit.providers.fake_provider.FakeValencia.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeValencia#run "qiskit.providers.fake_provider.FakeValencia.run") method.

<span id="qiskit.providers.fake_provider.FakeValencia.props_filename" />

### props\_filename

`= 'props_valencia.json'`

<span id="qiskit.providers.fake_provider.FakeValencia.version" />

### version

`= 1`

