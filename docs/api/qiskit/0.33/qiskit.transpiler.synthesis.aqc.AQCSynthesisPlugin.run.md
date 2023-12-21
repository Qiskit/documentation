# qiskit.transpiler.synthesis.aqc.AQCSynthesisPlugin.run

`AQCSynthesisPlugin.run(unitary, **options)`

Run synthesis for the given unitary matrix

**Parameters**

*   **unitary** (*numpy.ndarray*) – The unitary matrix to synthesize to a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") object
*   **options** – The optional kwargs that are passed based on the output the `support_*` methods on the class. Refer to the documentation for these methods on [`UnitarySynthesisPlugin`](qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin#qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin "qiskit.transpiler.passes.synthesis.plugin.UnitarySynthesisPlugin") to see what the keys and values are.

**Returns**

The dag circuit representation of the unitary. Alternatively, you can return a tuple of the form `(dag, wires)` where `dag` is the dag circuit representation of the circuit representation of the unitary and `wires` is the mapping wires to use for [`qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag()`](qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag#qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag "qiskit.dagcircuit.DAGCircuit.substitute_node_with_dag"). If you return a tuple and `wires` is `None` this will behave just as if only a [`DAGCircuit`](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit") was returned. Additionally if this returns `None` no substitution will be made.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")
