# qiskit.transpiler.passes.CountOps

<span id="undefined" />

`CountOps(*args, **kwargs)`

Count the operations in a DAG circuit.

The result is saved in `property_set['count_ops']` as an integer.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                          |                               |
| -------------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CountOps.__init__ "qiskit.transpiler.passes.CountOps.__init__")() | Initialize self.              |
| [`name`](#qiskit.transpiler.passes.CountOps.name "qiskit.transpiler.passes.CountOps.name")()             | Return the name of the pass.  |
| [`run`](#qiskit.transpiler.passes.CountOps.run "qiskit.transpiler.passes.CountOps.run")(dag)             | Run the CountOps pass on dag. |

## Attributes

|                                                                                                                                                  |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CountOps.is_analysis_pass "qiskit.transpiler.passes.CountOps.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CountOps.is_transformation_pass "qiskit.transpiler.passes.CountOps.is_transformation_pass") | Check if the pass is a transformation pass. |

<span id="undefined" />

`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

<span id="undefined" />

`name()`

Return the name of the pass.

<span id="undefined" />

`run(dag)`

Run the CountOps pass on dag.
