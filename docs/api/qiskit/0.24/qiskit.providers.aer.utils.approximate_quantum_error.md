<span id="qiskit-providers-aer-utils-approximate-quantum-error" />

# qiskit.providers.aer.utils.approximate\_quantum\_error

<span id="undefined" />

`approximate_quantum_error(error, *, operator_string=None, operator_dict=None, operator_list=None)`

Return an approximate QuantumError bases on the Hilbert-Schmidt metric.

Currently this is only implemented for 1-qubit QuantumErrors.

**Parameters**

*   **error** ([*QuantumError*](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")) – the error to be approximated.
*   **operator\_string** (*string or None*) – a name for a pre-made set of building blocks for the output channel (Default: None).
*   **operator\_dict** (*dict or None*) – a dictionary whose values are the building blocks for the output channel (Default: None).
*   **operator\_list** (*dict or None*) – list of building blocks for the output channel (Default: None).

**Returns**

the approximate quantum error.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")

**Raises**

*   **NoiseError** – if number of qubits is not supported or approximation failed.
*   **RuntimeError** – If there’s no information about the noise type.

## Additional Information:

The operator input precedence is: `list` \< `dict` \< `str`. If a string is given, dict is overwritten; if a dict is given, list is overwritten. Oossible values for string are `'pauli'`, `'reset'`, `'clifford'`. For further information see `NoiseTransformer.named_operators()`.
