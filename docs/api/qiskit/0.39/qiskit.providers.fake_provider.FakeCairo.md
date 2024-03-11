---
title: FakeCairo
description: API reference for qiskit.providers.fake_provider.FakeCairo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeCairo
---

# FakeCairo

<span id="qiskit.providers.fake_provider.FakeCairo" />

`FakeCairo` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/providers/fake_provider/backends/cairo/fake_cairo.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_pulse_backend.FakePulseBackend`

A fake 27 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeCairo.configuration" />

`FakeCairo.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.FakeCairo.defaults" />

`FakeCairo.defaults()`

Returns a snapshot of device defaults

### name

<span id="qiskit.providers.fake_provider.FakeCairo.name" />

`FakeCairo.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.FakeCairo.properties" />

`FakeCairo.properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeCairo.provider" />

`FakeCairo.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeCairo.run" />

`FakeCairo.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeCairo.set_options" />

`FakeCairo.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeCairo.status" />

`FakeCairo.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeCairo.backend_name" />

### backend\_name

`= 'fake_cairo'`

<span id="qiskit.providers.fake_provider.FakeCairo.conf_filename" />

### conf\_filename

`= 'conf_cairo.json'`

<span id="qiskit.providers.fake_provider.FakeCairo.defs_filename" />

### defs\_filename

`= 'defs_cairo.json'`

<span id="qiskit.providers.fake_provider.FakeCairo.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/cairo'`

<span id="qiskit.providers.fake_provider.FakeCairo.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeCairo#run "qiskit.providers.fake_provider.FakeCairo.run") method.

<span id="qiskit.providers.fake_provider.FakeCairo.props_filename" />

### props\_filename

`= 'props_cairo.json'`

<span id="qiskit.providers.fake_provider.FakeCairo.version" />

### version

`= 1`

