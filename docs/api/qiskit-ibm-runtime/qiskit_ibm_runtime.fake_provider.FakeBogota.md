---
title: FakeBogota
description: API reference for qiskit_ibm_runtime.fake_provider.FakeBogota
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeBogota
---

# FakeBogota

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota" />

`FakeBogota` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/backends/bogota/fake_bogota.py#L31-L38 "view source code")

A fake 5 qubit backend.

FakeBackend initializer.

**Parameters**

*   **configuration** (*BackendConfiguration*) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.backend_name" />

### backend\_name

`= 'fake_bogota'`

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.conf_filename" />

### conf\_filename

`= 'conf_bogota.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.defs_filename" />

### defs\_filename

`= 'defs_bogota.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.dirname" />

### dirname

`= '/home/runner/work/qiskit-ibm-runtime/qiskit-ibm-runtime/qiskit_ibm_runtime/fake_provider/backends/bogota'`

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeBogota.run "qiskit_ibm_runtime.fake_provider.FakeBogota.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.props_filename" />

### props\_filename

`= 'props_bogota.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### defaults

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.defaults" />

`defaults()` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/fake_pulse_backend.py#L29-L33 "view source code")

Returns a snapshot of device defaults

**Return type**

`PulseDefaults`

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.properties" />

`properties()` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/fake_qasm_backend.py#L44-L48 "view source code")

Returns a snapshot of device properties

**Return type**

`BackendProperties`

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.run" />

`run(run_input, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/fake_backend.py#L545-L574 "view source code")

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeBogota.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

