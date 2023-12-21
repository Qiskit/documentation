# qiskit.providers.ibmq.AccountProvider.backends

`AccountProvider.backends(name=None, filters=None, **kwargs)`

Return all backends accessible via this provider, subject to optional filtering.

**Parameters**

*   **name** (`Optional`\[`str`]) – Backend name to filter by.

*   **filters** (`Optional`\[`Callable`\[\[`List`\[`IBMQBackend`]], `bool`]]) –

    More complex filters, such as lambda functions. For example:

    ```python
    AccountProvider.backends(filters=lambda b: b.configuration().n_qubits > 5)
    ```

*   **kwargs** (`Any`) –

    Simple filters that specify a `True`/`False` criteria in the backend configuration, backends status, or provider credentials. An example to get the operational backends with 5 qubits:

    ```python
    AccountProvider.backends(n_qubits=5, operational=True)
    ```

**Return type**

`List`\[`IBMQBackend`]

**Returns**

The list of available backends that match the filter.
