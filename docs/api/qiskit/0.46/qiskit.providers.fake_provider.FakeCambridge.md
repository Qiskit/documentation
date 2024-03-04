---
title: FakeCambridge
description: API reference for qiskit.providers.fake_provider.FakeCambridge
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.FakeCambridge
---

# FakeCambridge

<span id="qiskit.providers.fake_provider.FakeCambridge" />

`qiskit.providers.fake_provider.FakeCambridge` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/providers/fake_provider/backends/cambridge/fake_cambridge.py "view source code")

Bases: [`FakeQasmBackend`](providers_fake_provider#qiskit.providers.fake_provider.FakeQasmBackend "qiskit.providers.fake_provider.fake_qasm_backend.FakeQasmBackend")

A fake Cambridge backend.

```python
          00 ↔ 01 ↔ 02 ↔ 03 ↔ 04
          ↕                    ↕
          05                  06
          ↕                    ↕
07 ↔ 08 ↔ 09 ↔ 10 ↔ 11 ↔ 12 ↔ 13 ↔ 14 ↔ 15
↕                   ↕                    ↕
16                  17                  18
↕                   ↕                    ↕
19 ↔ 20 ↔ 21 ↔ 22 ↔ 23 ↔ 24 ↔ 25 ↔ 26 ↔ 27
```

FakeBackend initializer.

**Parameters**

*   **configuration** ([*BackendConfiguration*](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")) – backend configuration
*   **time\_alive** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – time to wait before returning result

## Attributes

<span id="qiskit.providers.fake_provider.FakeCambridge.backend_name" />

### backend\_name

`= 'fake_cambridge'`

<span id="qiskit.providers.fake_provider.FakeCambridge.conf_filename" />

### conf\_filename

`= 'conf_cambridge.json'`

<span id="qiskit.providers.fake_provider.FakeCambridge.dirname" />

### dirname

`= '/home/runner/work/qiskit/qiskit/qiskit/providers/fake_provider/backends/cambridge'`

<span id="qiskit.providers.fake_provider.FakeCambridge.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.fake_provider.FakeCambridge.run "qiskit.providers.fake_provider.FakeCambridge.run") method.

<span id="qiskit.providers.fake_provider.FakeCambridge.props_filename" />

### props\_filename

`= 'props_cambridge.json'`

<span id="qiskit.providers.fake_provider.FakeCambridge.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit.providers.fake_provider.FakeCambridge.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### name

<span id="qiskit.providers.fake_provider.FakeCambridge.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### properties

<span id="qiskit.providers.fake_provider.FakeCambridge.properties" />

`properties()`

Returns a snapshot of device properties

### provider

<span id="qiskit.providers.fake_provider.FakeCambridge.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.FakeCambridge.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.FakeCambridge.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.FakeCambridge.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

