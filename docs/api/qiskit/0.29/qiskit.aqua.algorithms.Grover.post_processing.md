# qiskit.aqua.algorithms.Grover.post\_processing

`Grover.post_processing(measurement)`

Do the post-processing to the measurement result

**Parameters**

**measurement** (`List`\[`int`]) – The measurement as list of int.

**Return type**

`List`\[`int`]

**Returns**

Do the post-processing based on the post\_processing argument. If the post\_processing argument is None and the Oracle class is used as its oracle, oracle.evaluate\_classically is used as the post\_processing. Otherwise, just return the input bitstr
