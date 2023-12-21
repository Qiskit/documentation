---
title: backends
description: API reference for qiskit.providers.BaseProvider.backends
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.BaseProvider.backends
---

# backends

<span id="qiskit.providers.BaseProvider.backends" />

`abstract BaseProvider.backends(name=None, **kwargs)`

Return a list of backends matching the specified filtering.

**Parameters**

*   **name** (*str*) – name of the backend.
*   **\*\*kwargs** – dict used for filtering.

**Returns**

**a list of Backends that match the filtering**

criteria.

**Return type**

list\[[BaseBackend](qiskit.providers.BaseBackend "qiskit.providers.BaseBackend")]

