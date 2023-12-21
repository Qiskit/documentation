# qiskit.circuit.library.PhaseOracle.evaluate\_bitstring

`PhaseOracle.evaluate_bitstring(bitstring)`

Evaluate the oracle on a bitstring. This evaluation is done classically without any quantum circuit.

**Parameters**

**bitstring** (`str`) – The bitstring for which to evaluate. The input bitstring is expected to be in little-endian order.

**Return type**

`bool`

**Returns**

True if the bitstring is a good state, False otherwise.
