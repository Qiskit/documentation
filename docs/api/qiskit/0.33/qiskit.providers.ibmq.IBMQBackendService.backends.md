# qiskit.providers.ibmq.IBMQBackendService.backends

`IBMQBackendService.backends(name=None, filters=None, timeout=None, min_num_qubits=None, input_allowed=None, **kwargs)`

Return all backends accessible via this provider, subject to optional filtering.

**Parameters**

*   **name** (`Optional`\[`str`]) – Backend name to filter by.

*   **filters** (`Optional`\[`Callable`\[\[`List`\[`IBMQBackend`]], `bool`]]) –

    More complex filters, such as lambda functions. For example:

    ```python
    AccountProvider.backends(
        filters=lambda b: b.configuration().quantum_volume > 16)
    ```

*   **timeout** (`Optional`\[`float`]) – Maximum number of seconds to wait for the discovery of remote backends.

*   **min\_num\_qubits** (`Optional`\[`int`]) – Minimum number of qubits the backend has to have.

*   **input\_allowed** (`Union`\[`str`, `List`\[`str`], `None`]) – Filter by the types of input the backend supports. Valid input types are `job` (circuit job) and `runtime` (Qiskit Runtime). For example, `inputs_allowed='runtime'` will return all backends that support Qiskit Runtime. If a list is given, the backend must support all types specified in the list.

*   **kwargs** (`Any`) –

    Simple filters that specify a `True`/`False` criteria in the backend configuration, backends status, or provider credentials. An example to get the operational backends with 5 qubits:

    ```python
    AccountProvider.backends(n_qubits=5, operational=True)
    ```

**Return type**

`List`\[`IBMQBackend`]

**Returns**

The list of available backends that match the filter.
