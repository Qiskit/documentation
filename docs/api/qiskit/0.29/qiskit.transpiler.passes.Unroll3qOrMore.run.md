# qiskit.transpiler.passes.Unroll3qOrMore.run

`Unroll3qOrMore.run(dag)`

Run the Unroll3qOrMore pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Returns**

output dag with maximum node degrees of 2

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

**QiskitError** – if a 3q+ gate is not decomposable
