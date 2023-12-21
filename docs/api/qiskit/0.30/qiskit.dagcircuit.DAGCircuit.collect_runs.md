# qiskit.dagcircuit.DAGCircuit.collect\_runs

`DAGCircuit.collect_runs(namelist)`

Return a set of non-conditional runs of “op” nodes with the given names.

For example, “… h q\[0]; cx q\[0],q\[1]; cx q\[0],q\[1]; h q\[1]; ..” would produce the tuple of cx nodes as an element of the set returned from a call to collect\_runs(\[“cx”]). If instead the cx nodes were “cx q\[0],q\[1]; cx q\[1],q\[0];”, the method would still return the pair in a tuple. The namelist can contain names that are not in the circuit’s basis.

Nodes must have only one successor to continue the run.
