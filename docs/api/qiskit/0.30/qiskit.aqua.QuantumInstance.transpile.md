# qiskit.aqua.QuantumInstance.transpile

`QuantumInstance.transpile(circuits)`

A wrapper to transpile circuits to allow algorithm access the transpiled circuits. :type circuits: `Union`\[`QuantumCircuit`, `List`\[`QuantumCircuit`]] :param circuits: circuits to transpile

**Return type**

`List`\[`QuantumCircuit`]

**Returns**

The transpiled circuits, it is always a list even though the length is one.
