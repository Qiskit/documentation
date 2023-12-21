# qiskit.transpiler.passes.FullAncillaAllocation.run

`FullAncillaAllocation.run(dag)`

Run the FullAncillaAllocation pass on dag.

Extend the layout with new (physical qubit, virtual qubit) pairs. The dag signals which virtual qubits are already in the circuit. This pass will allocate new virtual qubits such that no collision occurs (i.e. Layout bijectivity is preserved)

The coupling\_map and layout together determine which physical qubits are free.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – circuit to analyze

**Returns**

returns the same dag circuit, unmodified

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If there is not layout in the property set or not set at init time.
