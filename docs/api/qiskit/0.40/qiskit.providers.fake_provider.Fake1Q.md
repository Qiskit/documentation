---
title: Fake1Q
description: API reference for qiskit.providers.fake_provider.Fake1Q
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.Fake1Q
---

# Fake1Q

<span id="qiskit.providers.fake_provider.Fake1Q" />

`Fake1Q` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/providers/fake_provider/fake_1q.py "view source code")

Bases: `qiskit.providers.fake_provider.fake_backend.FakeBackend`

A fake 1Q backend.

0

## Methods

### configuration

<span id="qiskit.providers.fake_provider.Fake1Q.configuration" />

`Fake1Q.configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.Fake1Q.defaults" />

`Fake1Q.defaults()`

defaults == configuration

### name

<span id="qiskit.providers.fake_provider.Fake1Q.name" />

`Fake1Q.name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit.providers.fake_provider.Fake1Q.properties" />

`Fake1Q.properties()`

properties == configuration

### provider

<span id="qiskit.providers.fake_provider.Fake1Q.provider" />

`Fake1Q.provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.Fake1Q.run" />

`Fake1Q.run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.Fake1Q.set_options" />

`Fake1Q.set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.Fake1Q.status" />

`Fake1Q.status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

## Attributes

<span id="qiskit.providers.fake_provider.Fake1Q.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.fake_provider.Fake1Q#run "qiskit.providers.fake_provider.Fake1Q.run") method.

<span id="qiskit.providers.fake_provider.Fake1Q.version" />

### version

`= 1`

