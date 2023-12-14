<span id="qiskit-transpiler-passes-unroll3qormore" />

# qiskit.transpiler.passes.Unroll3qOrMore



`Unroll3qOrMore(*args, **kwargs)`

Recursively expands 3q+ gates until the circuit only contains 2q or 1q gates.



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                      |                                     |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Unroll3qOrMore.__init__ "qiskit.transpiler.passes.Unroll3qOrMore.__init__")() | Initialize self.                    |
| [`name`](#qiskit.transpiler.passes.Unroll3qOrMore.name "qiskit.transpiler.passes.Unroll3qOrMore.name")()             | Return the name of the pass.        |
| [`run`](#qiskit.transpiler.passes.Unroll3qOrMore.run "qiskit.transpiler.passes.Unroll3qOrMore.run")(dag)             | Run the Unroll3qOrMore pass on dag. |

## Attributes

|                                                                                                                                                              |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Unroll3qOrMore.is_analysis_pass "qiskit.transpiler.passes.Unroll3qOrMore.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Unroll3qOrMore.is_transformation_pass "qiskit.transpiler.passes.Unroll3qOrMore.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the Unroll3qOrMore pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – input dag

**Returns**

output dag with maximum node degrees of 2

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit#qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

**QiskitError** – if a 3q+ gate is not decomposable
