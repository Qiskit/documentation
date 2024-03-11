---
title: ConfigurableFakeBackend
description: API reference for qiskit.providers.fake_provider.ConfigurableFakeBackend
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.fake_provider.ConfigurableFakeBackend
---

# ConfigurableFakeBackend

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend" />

`qiskit.providers.fake_provider.ConfigurableFakeBackend(name, n_qubits, version=None, coupling_map=None, basis_gates=None, qubit_t1=None, qubit_t2=None, qubit_frequency=None, qubit_readout_error=None, single_qubit_gates=None, dt=None, std=None, seed=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.45/qiskit/providers/fake_provider/utils/configurable_backend.py "view source code")

Bases: [`FakeBackend`](providers_fake_provider#qiskit.providers.fake_provider.FakeBackend "qiskit.providers.fake_provider.fake_backend.FakeBackend")

Configurable backend.

Creates backend based on provided configuration.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of the backend.
*   **n\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of qubits in the backend.
*   **version** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Version of the fake backend.
*   **coupling\_map** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]] | None*) – Coupling map.
*   **basis\_gates** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*] | None*) – Basis gates of the backend.
*   **qubit\_t1** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – Longitudinal coherence times.
*   **qubit\_t2** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – Transverse coherence times.
*   **qubit\_frequency** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – Frequency of qubits.
*   **qubit\_readout\_error** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – Readout error of qubits.
*   **single\_qubit\_gates** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*] | None*) – List of single qubit gates for backend properties.
*   **dt** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – Discretization of the input time sequences.
*   **std** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – Standard deviation of the generated distributions.
*   **seed** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – Random seed.

## Attributes

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.options" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](#qiskit.providers.fake_provider.ConfigurableFakeBackend.run "qiskit.providers.fake_provider.ConfigurableFakeBackend.run") method.

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.version" />

### version

`= 1`

## Methods

### configuration

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.configuration" />

`configuration()`

Return the backend configuration.

**Returns**

the configuration for the backend.

**Return type**

[BackendConfiguration](qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration")

### defaults

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.defaults" />

`defaults()`

Return backend defaults.

### name

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.name" />

`name()`

Return the backend name.

**Returns**

the name of the backend.

**Return type**

[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")

### properties

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.properties" />

`properties()`

Return backend properties

### provider

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.provider" />

`provider()`

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider "qiskit.providers.Provider")

### run

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.run" />

`run(run_input, **kwargs)`

Main job in simulator

### set\_options

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.set_options" />

`set_options(**fields)`

Set the options fields for the backend

This method is used to update the options of a backend. If you need to change any of the options prior to running just pass in the kwarg with the new value for the options.

**Parameters**

**fields** – The fields to update the options

**Raises**

[**AttributeError**](https://docs.python.org/3/library/exceptions.html#AttributeError "(in Python v3.12)") – If the field passed in is not part of the options

### status

<span id="qiskit.providers.fake_provider.ConfigurableFakeBackend.status" />

`status()`

Return the backend status.

**Returns**

the status of the backend.

**Return type**

[BackendStatus](qiskit.providers.models.BackendStatus "qiskit.providers.models.BackendStatus")

