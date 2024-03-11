---
title: FakeSantiago
description: API reference for qiskit.providers.fake_provider.FakeSantiago
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeSantiago
---

# FakeSantiago

<span id="qiskit.providers.fake_provider.FakeSantiago" />

`FakeSantiago` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/providers/fake_provider/backends/santiago/fake_santiago.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake Santiago backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeSantiago.configuration" />

`FakeSantiago.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeSantiago.defaults" />

`FakeSantiago.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeSantiago.name" />

`FakeSantiago.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeSantiago.properties" />

`FakeSantiago.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeSantiago.provider" />

`FakeSantiago.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeSantiago.run" />

`FakeSantiago.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeSantiago.set_options" />

`FakeSantiago.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeSantiago.status" />

`FakeSantiago.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeSantiago.backend_name" />

### backend\_name

`= 'fake_santiago'`

<span id="qiskit.providers.fake_provider.FakeSantiago.conf_filename" />

### conf\_filename

`= 'conf_santiago.json'`

<span id="qiskit.providers.fake_provider.FakeSantiago.defs_filename" />

### defs\_filename

`= 'defs_santiago.json'`

<span id="qiskit.providers.fake_provider.FakeSantiago.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/santiago'`

<span id="qiskit.providers.fake_provider.FakeSantiago.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeSantiago#run "qiskit.providers.fake_provider.FakeSantiago.run") method.

<span id="qiskit.providers.fake_provider.FakeSantiago.props_filename" />

### props\_filename

`= 'props_santiago.json'`

<span id="qiskit.providers.fake_provider.FakeSantiago.version" />

### version

`= 1`

