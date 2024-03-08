---
title: FakeRueschlikon
description: API reference for qiskit_ibm_runtime.fake_provider.FakeRueschlikon
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit_ibm_runtime.fake_provider.FakeRueschlikon
---

# FakeRueschlikon

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon" />

`FakeRueschlikon` [GitHub](https://github.com/Qiskit/qiskit-ibm-runtime/tree/stable/0.21/qiskit_ibm_runtime/fake_provider/backends/rueschlikon/fake_rueschlikon.py#L21-L74 "view source code")

A fake 16 qubit backend.

```python
1 →  2 →  3 →  4 ←  5 ←  6 →  7 ← 8
↓    ↑    ↓    ↓    ↑    ↓    ↓   ↑
0 ← 15 → 14 ← 13 ← 12 → 11 → 10 ← 9
```

## Attributes

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit_ibm_runtime.fake_provider.FakeRueschlikon.run "qiskit_ibm_runtime.fake_provider.FakeRueschlikon.run") method.

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

BackendConfiguration

### name

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

str

### properties

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.properties" />

`properties()`

Return backend properties

### provider

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

Provider

### run

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

**AttributeError** – If the field passed in is not part of the options

### status

<span id="qiskit_ibm_runtime.fake_provider.FakeRueschlikon.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

BackendStatus

