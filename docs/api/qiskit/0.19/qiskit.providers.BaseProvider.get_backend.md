---
title: get_backend
description: API reference for qiskit.providers.BaseProvider.get_backend
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.BaseProvider.get_backend
---

# get\_backend

<span id="qiskit.providers.BaseProvider.get_backend" />

`BaseProvider.get_backend(name=None, **kwargs)`

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

