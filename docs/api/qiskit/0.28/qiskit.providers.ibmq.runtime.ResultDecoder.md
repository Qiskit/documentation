# qiskit.providers.ibmq.runtime.ResultDecoder

<span id="undefined" />

`ResultDecoder`

Runtime job result decoder.

You can subclass this class and overwrite the [`decode()`](#qiskit.providers.ibmq.runtime.ResultDecoder.decode "qiskit.providers.ibmq.runtime.ResultDecoder.decode") method to create a custom result decoder for the results of your runtime program. For example:

```python
class MyResultDecoder(ResultDecoder):

    @classmethod
    def decode(cls, data):
        decoded = super().decode(data)
        custom_processing(decoded)  # perform custom processing
```

Users of your program will need to pass in the subclass when invoking [`qiskit.providers.ibmq.runtime.RuntimeJob.result()`](qiskit.providers.ibmq.runtime.RuntimeJob#qiskit.providers.ibmq.runtime.RuntimeJob.result "qiskit.providers.ibmq.runtime.RuntimeJob.result") or [`qiskit.providers.ibmq.runtime.IBMRuntimeService.run()`](qiskit.providers.ibmq.runtime.IBMRuntimeService#qiskit.providers.ibmq.runtime.IBMRuntimeService.run "qiskit.providers.ibmq.runtime.IBMRuntimeService.run").

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                              |                         |
| ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [`__init__`](#qiskit.providers.ibmq.runtime.ResultDecoder.__init__ "qiskit.providers.ibmq.runtime.ResultDecoder.__init__")() | Initialize self.        |
| [`decode`](#qiskit.providers.ibmq.runtime.ResultDecoder.decode "qiskit.providers.ibmq.runtime.ResultDecoder.decode")(data)   | Decode the result data. |

<span id="undefined" />

`classmethod decode(data)`

Decode the result data.

**Parameters**

**data** (`str`) – Result data to be decoded.

**Return type**

`Any`

**Returns**

Decoded result data.
