# qiskit.transpiler.passes.UnitarySynthesis.run

`UnitarySynthesis.run(dag)`

Run the UnitarySynthesis pass on dag.

**Parameters**

**dag** (`DAGCircuit`) – input dag.

**Return type**

`DAGCircuit`

**Returns**

Output dag with UnitaryGates synthesized to target basis.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if a ‘method’ was specified for the class and is not found in the installed plugins list. The list of installed plugins can be queried with [`unitary_synthesis_plugin_names()`](qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names#qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names "qiskit.transpiler.passes.synthesis.plugin.unitary_synthesis_plugin_names")
