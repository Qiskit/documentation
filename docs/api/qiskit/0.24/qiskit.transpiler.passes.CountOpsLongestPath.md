<span id="qiskit-transpiler-passes-countopslongestpath" />

# qiskit.transpiler.passes.CountOpsLongestPath



`CountOpsLongestPath(*args, **kwargs)`

Count the operations on the longest path in a DAGcircuit.

The result is saved in `property_set['count_ops_longest_path']` as an integer.



`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                |                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CountOpsLongestPath.__init__ "qiskit.transpiler.passes.CountOpsLongestPath.__init__")() | Initialize self.                         |
| [`name`](#qiskit.transpiler.passes.CountOpsLongestPath.name "qiskit.transpiler.passes.CountOpsLongestPath.name")()             | Return the name of the pass.             |
| [`run`](#qiskit.transpiler.passes.CountOpsLongestPath.run "qiskit.transpiler.passes.CountOpsLongestPath.run")(dag)             | Run the CountOpsLongestPath pass on dag. |

## Attributes

|                                                                                                                                                                        |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CountOpsLongestPath.is_analysis_pass "qiskit.transpiler.passes.CountOpsLongestPath.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CountOpsLongestPath.is_transformation_pass "qiskit.transpiler.passes.CountOpsLongestPath.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the CountOpsLongestPath pass on dag.
