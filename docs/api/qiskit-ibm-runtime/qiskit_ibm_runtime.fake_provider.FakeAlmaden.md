---
title: FakeAlmaden
description: API reference for qiskit_ibm_runtime.fake_provider.FakeAlmaden
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeAlmaden
---

# FakeAlmaden

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden" />

`FakeAlmaden` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/backends/almaden/fake_almaden.py#L41-L58 "view source code")

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

*   **configuration** (*BackendConfiguration*) – backend configuration
*   **time\_alive** (*int*) – time to wait before returning result

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.backend_name" />

### backend\_name

`= 'fake_almaden'`

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.conf_filename" />

### conf\_filename

`= 'conf_almaden.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.dirname" />

### dirname

`= '/home/runner/work/qiskit-ibm-runtime/qiskit-ibm-runtime/qiskit_ibm_runtime/fake_provider/backends/almaden'`

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeAlmaden.run "qiskit_ibm_runtime.fake_provider.FakeAlmaden.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.props_filename" />

### props\_filename

`= 'props_almaden.json'`

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.properties" />

`properties()` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/fake_qasm_backend.py#L44-L48 "view source code")

Returns a snapshot of device properties

**Return type**

`BackendProperties`

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.run" />

`run(run_input, **kwargs)` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.20/qiskit_ibm_runtime/fake_provider/fake_backend.py#L545-L574 "view source code")

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeAlmaden.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

