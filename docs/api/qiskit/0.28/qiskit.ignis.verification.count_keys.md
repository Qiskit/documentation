# qiskit.ignis.verification.count\_keys

<span id="undefined" />

`count_keys(num_qubits)`

Return ordered count keys.

**Parameters**

**num\_qubits** (`int`) – The number of qubits in the generated list.

**Return type**

`List`\[`str`]

**Returns**

The strings of all 0/1 combinations of the given number of qubits

## Example

```python
>>> count_keys(3)
['000', '001', '010', '011', '100', '101', '110', '111']
```
