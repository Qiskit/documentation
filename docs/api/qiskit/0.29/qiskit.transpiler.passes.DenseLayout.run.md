# qiskit.transpiler.passes.DenseLayout.run

`DenseLayout.run(dag)`

Run the DenseLayout pass on dag.

Pick a convenient layout depending on the best matching qubit connectivity, and set the property layout.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to find layout for.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if dag wider than self.coupling\_map
