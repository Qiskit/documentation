# qiskit.providers.ibmq.runtime.IBMRuntimeService.upload\_program

`IBMRuntimeService.upload_program(data, metadata=None)`

Upload a runtime program.

In addition to program data, the following program metadata is also required:

> *   name
> *   max\_execution\_time
> *   description

Program metadata can be specified using the metadata parameter or individual parameter (for example, name and description). If the same metadata field is specified in both places, the individual parameter takes precedence. For example, if you specify:

```python
upload_program(metadata={"name": "name1"}, name="name2")
```

`name2` will be used as the program name.

**Parameters**

*   **data** (`str`) – Program data or path of the file containing program data to upload.

*   **metadata** (`Union`\[`Dict`, `str`, `None`]) –

    Name of the program metadata file or metadata dictionary. A metadata file needs to be in the JSON format. The `parameters`, `return_values`, and `interim_results` should be defined as JSON Schema. See `program/program_metadata_sample.json` for an example. The fields in metadata are explained below.

    *   name: Name of the program. Required.

    *   max\_execution\_time: Maximum execution time in seconds. Required.

    *   description: Program description. Required.

    *   **is\_public: Whether the runtime program should be visible to the public.**

        The default is `False`.

    *   **spec: Specifications for backend characteristics and input parameters**

        required to run the program, interim results and final result.

        *   backend\_requirements: Backend requirements.
        *   parameters: Program input parameters in JSON schema format.
        *   return\_values: Program return values in JSON schema format.
        *   interim\_results: Program interim results in JSON schema format.

**Return type**

`str`

**Returns**

Program ID.

**Raises**

*   **IBMQInputValueError** – If required metadata is missing.
*   **RuntimeDuplicateProgramError** – If a program with the same name already exists.
*   **IBMQNotAuthorizedError** – If you are not authorized to upload programs.
*   **QiskitRuntimeError** – If the upload failed.
