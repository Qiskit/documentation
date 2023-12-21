# qiskit.transpiler.passes.BIPMapping.run

`BIPMapping.run(dag)`

Run the BIPMapping pass on dag, assuming the number of virtual qubits (defined in dag) and the number of physical qubits (defined in coupling\_map) are the same.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to map.

**Returns**

**A mapped DAG. If there is no 2q-gate in DAG or it fails to map,**

returns the original dag.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if the number of virtual and physical qubits are not the same.
*   **AssertionError** – if the final layout is not valid.
