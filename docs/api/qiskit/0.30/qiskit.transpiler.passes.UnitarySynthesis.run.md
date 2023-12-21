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

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") –

1.  pulse\_optimize is True but pulse optimal decomposition is not known for requested basis. 2. pulse\_optimize is True and natural\_direction is True but a preferred gate direction can’t be determined from the coupling map or the relative gate lengths.
