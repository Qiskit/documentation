# ResultDecoder

<span id="undefined" />

`ResultDecoder`

Bases: `object`

Runtime job result decoder.

You can subclass this class and overwrite the [`decode()`](qiskit.providers.ibmq.runtime.ResultDecoder.decode#qiskit.providers.ibmq.runtime.ResultDecoder.decode "qiskit.providers.ibmq.runtime.ResultDecoder.decode") method to create a custom result decoder for the results of your runtime program. For example:

```python
class MyResultDecoder(ResultDecoder):

    @classmethod
    def decode(cls, data):
        decoded = super().decode(data)
        custom_processing(decoded)  # perform custom processing
```

Users of your program will need to pass in the subclass when invoking [`qiskit.providers.ibmq.runtime.RuntimeJob.result()`](qiskit.providers.ibmq.runtime.RuntimeJob.result#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result") or [`qiskit.providers.ibmq.runtime.IBMRuntimeService.run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService.run#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run").

## Methods

|                                                                                                                                                                        |                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [`decode`](qiskit.providers.ibmq.runtime.ResultDecoder.decode#qiskit.providers.ibmq.runtime.ResultDecoder.decode "qiskit.providers.ibmq.runtime.ResultDecoder.decode") | Decode the result data. |
