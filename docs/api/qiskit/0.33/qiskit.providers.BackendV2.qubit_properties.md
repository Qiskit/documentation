# qiskit.providers.BackendV2.qubit\_properties

`BackendV2.qubit_properties(qubit)`

Return QubitProperties for a given qubit.

If there are no defined or the backend doesn’t support querying these details this method does not need to be implemented.

**Parameters**

**qubit** (`Union`\[`int`, `List`\[`int`]]) – The qubit to get the `QubitProperties` object for. This can be a single integer for 1 qubit or a list of qubits and a list of `QubitProperties` objects will be returned in the same order

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the qubit properties

**Return type**

`Union`\[`QubitProperties`, `List`\[`QubitProperties`]]
