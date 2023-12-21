# qiskit.transpiler.passes.EchoRZXWeylDecomposition.run

`EchoRZXWeylDecomposition.run(dag)`

Run the EchoRZXWeylDecomposition pass on dag.

Rewrites two-qubit gates in an arbitrary circuit in terms of echoed cross-resonance gates by computing the Weyl decomposition of the corresponding unitary. Modifies the input dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to rewrite.

**Returns**

The modified dag.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – If the circuit cannot be rewritten.
