---
title: BasicAerProvider
description: API reference for qiskit.providers.basicaer.BasicAerProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerProvider
---

# BasicAerProvider

<span id="qiskit.providers.basicaer.BasicAerProvider" />

`BasicAerProvider(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/providers/basicaer/basicaerprovider.py "view source code")

Provider for Basic Aer backends.

## Methods

### backends

<span id="qiskit.providers.basicaer.BasicAerProvider.backends" />

`BasicAerProvider.backends(name=None, filters=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[BaseBackend](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")]

### get\_backend

<span id="qiskit.providers.basicaer.BasicAerProvider.get_backend" />

`BasicAerProvider.get_backend(name=None, **kwargs)`

Return a single backend matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

a backend matching the filtering.

**Return type**

[BaseBackend](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")

**Raises**

[**QiskitBackendNotFoundError**](qiskit.providers.QiskitBackendNotFoundError "qiskit.providers.QiskitBackendNotFoundError") – if no backend could be found or more than one backend matches the filtering criteria.

