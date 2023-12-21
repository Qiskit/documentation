# qiskit.dagcircuit.DAGDependency.add\_op\_node

`DAGDependency.add_op_node(operation, qargs, cargs)`

Add a DAGDepNode to the graph and update the edges.

**Parameters**

*   **operation** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – operation as a quantum gate.
*   **qargs** (*list\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of qubits on which the operation acts
*   **cargs** (*list\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]*) – list of classical wires to attach to.
