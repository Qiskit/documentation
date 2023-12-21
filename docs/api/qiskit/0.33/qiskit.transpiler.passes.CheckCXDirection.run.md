# qiskit.transpiler.passes.CheckCXDirection.run

`CheckCXDirection.run(dag)`

Run the CheckGateDirection pass on dag.

If dag is mapped and the direction is correct the property is\_direction\_mapped is set to True (or to False otherwise).

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – DAG to check.
