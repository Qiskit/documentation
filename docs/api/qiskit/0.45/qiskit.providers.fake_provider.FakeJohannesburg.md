---
title: FakeJohannesburg
description: API reference for qiskit.providers.fake_provider.FakeJohannesburg
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeJohannesburg
---

# FakeJohannesburg

<span id="qiskit.providers.fake_provider.FakeJohannesburg" />

`qiskit.providers.fake_provider.FakeJohannesburg` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/providers/fake_provider/backends/johannesburg/fake_johannesburg.py "view source code")

Bases: [`FakeQasmBackend`](providers_fake_provider#qiskit.providers.fake_provider.FakeQasmBackend "qiskit.providers.fake_provider.fake_qasm_backend.FakeQasmBackend")

A fake Johannesburg backend.

```python
00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
 ↕                   ↕
05 ↔ 06 ↔ 07 ↔ 08 ↔ 09
 ↕         ↕         ↕
10 ↔ 11 ↔ 12 ↔ 13 ↔ 14
 ↕                   ↕
15 ↔ 16 ↔ 17 ↔ 18 ↔ 19
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – time to wait before returning result

## Attributes

<span id="qiskit.providers.fake_provider.FakeJohannesburg.backend_name" />

### backend\_name

`= 'fake_johannesburg'`

<span id="qiskit.providers.fake_provider.FakeJohannesburg.conf_filename" />

### conf\_filename

`= 'conf_johannesburg.json'`

<span id="qiskit.providers.fake_provider.FakeJohannesburg.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/qiskit/providers/fake_provider/backends/johannesburg'`

<span id="qiskit.providers.fake_provider.FakeJohannesburg.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.fake_provider.FakeJohannesburg.run "qiskit.providers.fake_provider.FakeJohannesburg.run") method.

<span id="qiskit.providers.fake_provider.FakeJohannesburg.props_filename" />

### props\_filename

`= 'props_johannesburg.json'`

<span id="qiskit.providers.fake_provider.FakeJohannesburg.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeJohannesburg.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeJohannesburg.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### properties

<span id="qiskit.providers.fake_provider.FakeJohannesburg.properties" />

`properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeJohannesburg.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeJohannesburg.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeJohannesburg.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeJohannesburg.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

