# qiskit.providers.ibmq.runtime.IBMRuntimeService.update\_program

`IBMRuntimeService.update_program(program_id, data=None, metadata=None, name=None, description=None, max_execution_time=None, spec=None)`

Update a runtime program.

Program metadata can be specified using the metadata parameter or individual parameters, such as name and description. If the same metadata field is specified in both places, the individual parameter takes precedence.

**Parameters**

*   **program\_id** (`str`) – Program ID.
*   **data** (`Optional`\[`str`]) – Program data or path of the file containing program data to upload.
*   **metadata** (`Union`\[`Dict`, `str`, `None`]) – Name of the program metadata file or metadata dictionary.
*   **name** (`Optional`\[`str`]) – New program name.
*   **description** (`Optional`\[`str`]) – New program description.
*   **max\_execution\_time** (`Optional`\[`int`]) – New maximum execution time.
*   **spec** (`Optional`\[`Dict`]) – New specifications for backend characteristics, input parameters, interim results and final result.

**Raises**

*   **RuntimeProgramNotFound** – If the program doesn’t exist.
*   **QiskitRuntimeError** – If the request failed.

**Return type**

`None`
