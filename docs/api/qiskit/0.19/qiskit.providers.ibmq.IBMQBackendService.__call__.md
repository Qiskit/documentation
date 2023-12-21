---
title: __call__
description: API reference for qiskit.providers.ibmq.IBMQBackendService.__call__
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.ibmq.IBMQBackendService.__call__
---

# \_\_call\_\_

<span id="qiskit.providers.ibmq.IBMQBackendService.__call__" />

`IBMQBackendService.__call__(name=None, filters=None, timeout=None, **kwargs)`

Return all backends accessible via this provider, subject to optional filtering.

**Parameters**

*   **name** (`Optional`\[`str`]) – Backend name to filter by.

*   **filters** (`Optional`\[`Callable`\[\[`List`\[[`IBMQBackend`](qiskit.providers.ibmq.IBMQBackend "qiskit.providers.ibmq.ibmqbackend.IBMQBackend")]], `bool`]]) –

    More complex filters, such as lambda functions. For example:

    ```python
    AccountProvider.backends(filters=lambda b: b.configuration().n_qubits > 5)
    ```

*   **timeout** (`Optional`\[`float`]) – Maximum number of seconds to wait for the discovery of remote backends.

*   **kwargs** (`Any`) –

    Simple filters that specify a `True`/`False` criteria in the backend configuration, backends status, or provider credentials. An example to get the operational backends with 5 qubits:

    ```python
    AccountProvider.backends(n_qubits=5, operational=True)
    ```

**Return type**

`List`\[[`IBMQBackend`](qiskit.providers.ibmq.IBMQBackend "qiskit.providers.ibmq.ibmqbackend.IBMQBackend")]

**Returns**

The list of available backends that match the filter.

