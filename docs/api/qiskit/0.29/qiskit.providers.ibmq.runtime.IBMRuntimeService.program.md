# qiskit.providers.ibmq.runtime.IBMRuntimeService.program

`IBMRuntimeService.program(program_id, refresh=False)`

Retrieve a runtime program.

Currently only program metadata is returned.

**Parameters**

*   **program\_id** (`str`) – Program ID.
*   **refresh** (`bool`) – If `True`, re-query the server for the program. Otherwise return the cached value.

**Return type**

`RuntimeProgram`

**Returns**

Runtime program.

**Raises**

*   **RuntimeProgramNotFound** – If the program does not exist.
*   **QiskitRuntimeError** – If the request failed.
