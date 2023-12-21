# qiskit.providers.ibmq.runtime.IBMRuntimeService.run

`IBMRuntimeService.run(program_id, options, inputs, callback=None, result_decoder=None, image='')`

Execute the runtime program.

**Parameters**

*   **program\_id** (`str`) – Program ID.

*   **options** (`Dict`) – Runtime options that control the execution environment. Currently the only available option is `backend_name`, which is required.

*   **inputs** (`Union`\[`Dict`, `ParameterNamespace`]) – Program input parameters. These input values are passed to the runtime program.

*   **callback** (`Optional`\[`Callable`]) –

    Callback function to be invoked for any interim results. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job interim result.

*   **result\_decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results. `ResultDecoder` is used if not specified.

*   **image** (`Optional`\[`str`]) – The runtime image used to execute the program, specified in the form of image\_name:tag. Not all accounts are authorized to select a different image.

**Return type**

`RuntimeJob`

**Returns**

A `RuntimeJob` instance representing the execution.

**Raises**

**IBMQInputValueError** – If input is invalid.
