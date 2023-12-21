# qiskit.opflow\.primitive\_ops.CircuitOp.tensor

`CircuitOp.tensor(other)`

Return tensor product between self and other, overloaded by `^`. Note: You must be conscious of Qiskit’s big-endian bit printing convention. Meaning, X.tensor(Y) produces an X on qubit 0 and an Y on qubit 1, or X⨂Y, but would produce a QuantumCircuit which looks like

> -\[Y]- -\[X]-

Because Terra prints circuits and results with qubit 0 at the end of the string or circuit.

**Parameters**

**other** (`OperatorBase`) – The `OperatorBase` to tensor product with self.

**Return type**

`Union`\[`CircuitOp`, `TensoredOp`]

**Returns**

An `OperatorBase` equivalent to the tensor product of self and other.
