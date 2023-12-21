# qiskit.providers.ibmq.runtime.IBMRuntimeService.pprint\_programs

`IBMRuntimeService.pprint_programs(refresh=False, detailed=False, limit=20, skip=0)`

Pretty print information about available runtime programs.

**Parameters**

*   **refresh** (`bool`) – If `True`, re-query the server for the programs. Otherwise return the cached value.
*   **detailed** (`bool`) – If `True` print all details about available runtime programs.
*   **limit** (`int`) – The number of programs returned at a time. Default and maximum value of 20.
*   **skip** (`int`) – The number of programs to skip.

**Return type**

`None`
