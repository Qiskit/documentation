# qiskit.dagcircuit.DAGCircuit.from\_networkx

`classmethod DAGCircuit.from_networkx(graph)`

Take a networkx MultiDigraph and create a new DAGCircuit.

**Parameters**

**graph** (*networkx.MultiDiGraph*) – The graph to create a DAGCircuit object from. The format of this MultiDiGraph format must be in the same format as returned by to\_networkx.

**Returns**

**The dagcircuit object created from the networkx**

MultiDiGraph.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If networkx is not installed
*   [**DAGCircuitError**](qiskit.dagcircuit.DAGCircuitError#qiskit.dagcircuit.DAGCircuitError "qiskit.dagcircuit.DAGCircuitError") – If input networkx graph is malformed
