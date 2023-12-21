# qiskit.ml.circuit.library.RawFeatureVector.qubit\_duration

`RawFeatureVector.qubit_duration(*qubits)`

Return the duration between the start and stop time of the first and last instructions, excluding delays, over the supplied qubits. Its time unit is `self.unit`.

**Parameters**

**\*qubits** – Qubits within `self` to include.

**Return type**

`float`

**Returns**

Return the duration between the first start and last stop time of non-delay instructions
