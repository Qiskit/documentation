---
title: FakeHanoi
description: API reference for qiskit.providers.fake_provider.FakeHanoi
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeHanoi
---

# FakeHanoi

<span id="qiskit.providers.fake_provider.FakeHanoi" />

`FakeHanoi` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/providers/fake_provider/backends/hanoi/fake_hanoi.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake 27 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeHanoi.configuration" />

`FakeHanoi.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeHanoi.defaults" />

`FakeHanoi.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeHanoi.name" />

`FakeHanoi.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeHanoi.properties" />

`FakeHanoi.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeHanoi.provider" />

`FakeHanoi.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeHanoi.run" />

`FakeHanoi.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeHanoi.set_options" />

`FakeHanoi.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeHanoi.status" />

`FakeHanoi.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeHanoi.backend_name" />

### backend\_name

`= 'fake_hanoi'`

<span id="qiskit.providers.fake_provider.FakeHanoi.conf_filename" />

### conf\_filename

`= 'conf_hanoi.json'`

<span id="qiskit.providers.fake_provider.FakeHanoi.defs_filename" />

### defs\_filename

`= 'defs_hanoi.json'`

<span id="qiskit.providers.fake_provider.FakeHanoi.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/hanoi'`

<span id="qiskit.providers.fake_provider.FakeHanoi.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeHanoi#run "qiskit.providers.fake_provider.FakeHanoi.run") method.

<span id="qiskit.providers.fake_provider.FakeHanoi.props_filename" />

### props\_filename

`= 'props_hanoi.json'`

<span id="qiskit.providers.fake_provider.FakeHanoi.version" />

### version

`= 1`

