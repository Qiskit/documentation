# qiskit.dagcircuit.DAGCircuit.compose

`DAGCircuit.compose(other, edge_map=None, qubits=None, clbits=None, front=False, inplace=True)`

Compose the `other` circuit onto the output of this circuit.

A subset of input wires of `other` are mapped to a subset of output wires of this circuit.

`other` can be narrower or of equal width to `self`.

**Parameters**

*   **other** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – circuit to compose with self
*   **edge\_map** (*dict*) – DEPRECATED - a \{Bit: Bit} map from input wires of other to output wires of self (i.e. rhs->lhs). The key, value pairs can be either Qubit or Clbit mappings.
*   **qubits** (*list\[Qubit|int]*) – qubits of self to compose onto.
*   **clbits** (*list\[Clbit|int]*) – clbits of self to compose onto.
*   **front** (*bool*) – If True, front composition will be performed (not implemented yet)
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.

**Returns**

the composed dag (returns None if inplace==True).

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – if `other` is wider or there are duplicate edge mappings.
