---
title: FakeTokyo
description: API reference for qiskit_ibm_runtime.fake_provider.FakeTokyo
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeTokyo
---

# FakeTokyo

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo" />

`FakeTokyo` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/fake_provider/backends/tokyo/fake_tokyo.py#L28-L141 "view source code")

A fake 20 qubit backend.

```python
00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
 ↕    ↕    ↕    ↕ ⤫  ↕
05 ↔ 06 ↔ 07 ↔ 08 ↔ 09
 ↕ ⤫ ↕    ↕ ⤫ ↕
10 ↔ 11 ↔ 12 ↔ 13 ↔ 14
 ↕    ↕ ⤫      ↕ ⤫  ↕
15 ↔ 16 ↔ 17   18   19
```

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeTokyo.run "qiskit_ibm_runtime.fake_provider.FakeTokyo.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.properties" />

`properties()` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/fake_provider/backends/tokyo/fake_tokyo.py#L135-L141 "view source code")

Returns a snapshot of device properties as recorded on 8/30/19.

**Return type**

`BackendProperties`

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeTokyo.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

