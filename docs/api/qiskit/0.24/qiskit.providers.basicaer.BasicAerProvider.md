---
title: BasicAerProvider
description: API reference for qiskit.providers.basicaer.BasicAerProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.basicaer.BasicAerProvider
---

<span id="qiskit-providers-basicaer-basicaerprovider" />

# qiskit.providers.basicaer.BasicAerProvider

<span id="qiskit.providers.basicaer.BasicAerProvider" />

`BasicAerProvider(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/providers/basicaer/basicaerprovider.py "view source code")

Provider for Basic Aer backends.

### \_\_init\_\_

<span id="qiskit.providers.basicaer.BasicAerProvider.__init__" />

`__init__(*args, **kwargs)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                              |                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`__init__`](#qiskit.providers.basicaer.BasicAerProvider.__init__ "qiskit.providers.basicaer.BasicAerProvider.__init__")(\*args, \*\*kwargs) | Initialize self.                                            |
| [`backends`](#qiskit.providers.basicaer.BasicAerProvider.backends "qiskit.providers.basicaer.BasicAerProvider.backends")(\[name, filters])   | Return a list of backends matching the specified filtering. |
| [`get_backend`](#qiskit.providers.basicaer.BasicAerProvider.get_backend "qiskit.providers.basicaer.BasicAerProvider.get_backend")(\[name])   | Return a single backend matching the specified filtering.   |

### backends

<span id="qiskit.providers.basicaer.BasicAerProvider.backends" />

`backends(name=None, filters=None, **kwargs)`

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

`get_backend(name=None, **kwargs)`

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

