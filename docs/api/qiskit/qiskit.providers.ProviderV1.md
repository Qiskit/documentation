---
title: ProviderV1
description: API reference for qiskit.providers.ProviderV1
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.ProviderV1
---

# ProviderV1

<span id="qiskit.providers.ProviderV1" />

`qiskit.providers.ProviderV1` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/providers/provider.py "view source code")

Bases: [`Provider`](qiskit.providers.Provider "qiskit.providers.provider.Provider"), [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Base class for a Backend Provider.

## Attributes

<span id="qiskit.providers.ProviderV1.version" />

### version

`= 1`

## Methods

### backends

<span id="qiskit.providers.ProviderV1.backends" />

`abstract backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

[list](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")\[[Backend](qiskit.providers.Backend "qiskit.providers.Backend")]

### get\_backend

<span id="qiskit.providers.ProviderV1.get_backend" />

`get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[Backend](qiskit.providers.Backend "qiskit.providers.Backend")

**Raises**

[**QiskitBackendNotFoundError**](providers#qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.

