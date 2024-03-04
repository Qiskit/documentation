---
title: FakeLagos
description: API reference for qiskit.providers.fake_provider.FakeLagos
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeLagos
---

# FakeLagos

<span id="qiskit.providers.fake_provider.FakeLagos" />

`FakeLagos` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/providers/fake_provider/backends/lagos/fake_lagos.py "view source code")

Bases: `FakePulseBackend`

A fake 7 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Methods

<span id="qiskit-providers-fake-provider-fakelagos-configuration" />

### configuration

<span id="qiskit.providers.fake_provider.FakeLagos.configuration" />

`FakeLagos.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

<span id="qiskit-providers-fake-provider-fakelagos-defaults" />

### defaults

<span id="qiskit.providers.fake_provider.FakeLagos.defaults" />

`FakeLagos.defaults()`

Returns a snapshot of device defaults

<span id="qiskit-providers-fake-provider-fakelagos-name" />

### name

<span id="qiskit.providers.fake_provider.FakeLagos.name" />

`FakeLagos.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

<span id="qiskit-providers-fake-provider-fakelagos-properties" />

### properties

<span id="qiskit.providers.fake_provider.FakeLagos.properties" />

`FakeLagos.properties()`

Returns a snapshot of device properties

<span id="qiskit-providers-fake-provider-fakelagos-provider" />

### provider

<span id="qiskit.providers.fake_provider.FakeLagos.provider" />

`FakeLagos.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

<span id="qiskit-providers-fake-provider-fakelagos-run" />

### run

<span id="qiskit.providers.fake_provider.FakeLagos.run" />

`FakeLagos.run(run_input, **kwargs)`

Main job in simulator

<span id="qiskit-providers-fake-provider-fakelagos-set-options" />

### set\_options

<span id="qiskit.providers.fake_provider.FakeLagos.set_options" />

`FakeLagos.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

<span id="qiskit-providers-fake-provider-fakelagos-status" />

### status

<span id="qiskit.providers.fake_provider.FakeLagos.status" />

`FakeLagos.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.FakeLagos.backend_name" />

### backend\_name

`= 'fake_lagos'`

<span id="qiskit.providers.fake_provider.FakeLagos.conf_filename" />

### conf\_filename

`= 'conf_lagos.json'`

<span id="qiskit.providers.fake_provider.FakeLagos.defs_filename" />

### defs\_filename

`= 'defs_lagos.json'`

<span id="qiskit.providers.fake_provider.FakeLagos.dirname" />

### dirname

`= '/home/computertreker/git/qiskit/qiskit/.tox/docs/lib/python3.8/site-packages/qiskit/providers/fake_provider/backends/lagos'`

<span id="qiskit.providers.fake_provider.FakeLagos.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.FakeLagos#run "qiskit.providers.fake_provider.FakeLagos.run") method.

<span id="qiskit.providers.fake_provider.FakeLagos.props_filename" />

### props\_filename

`= 'props_lagos.json'`

<span id="qiskit.providers.fake_provider.FakeLagos.version" />

### version

`= 1`

