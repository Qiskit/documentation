# qiskit.providers.ibmq.runtime.RuntimeJob.stream\_results

`RuntimeJob.stream_results(callback, decoder=None)`

Start streaming job results.

**Parameters**

*   **callback** (`Callable`) –

    Callback function to be invoked for any interim results. The callback function will receive 2 positional parameters:

    > 1.  Job ID
    > 2.  Job interim result.

*   **decoder** (`Optional`\[`Type`\[`ResultDecoder`]]) – A [`ResultDecoder`](qiskit.providers.ibmq.runtime.ResultDecoder#qiskit.providers.ibmq.runtime.ResultDecoder "qiskit.providers.ibmq.runtime.ResultDecoder") subclass used to decode job results.

**Raises**

**RuntimeInvalidStateError** – If a callback function is already streaming results or if the job already finished.

**Return type**

`None`
