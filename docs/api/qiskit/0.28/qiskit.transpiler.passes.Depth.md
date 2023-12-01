# qiskit.transpiler.passes.Depth

<span id="undefined" />

`Depth(*args, **kwargs)`

Calculate the depth of a DAG circuit.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                    |                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Depth.__init__ "qiskit.transpiler.passes.Depth.__init__")() | Initialize self.             |
| [`name`](#qiskit.transpiler.passes.Depth.name "qiskit.transpiler.passes.Depth.name")()             | Return the name of the pass. |
| [`run`](#qiskit.transpiler.passes.Depth.run "qiskit.transpiler.passes.Depth.run")(dag)             | Run the Depth pass on dag.   |

## Attributes

|                                                                                                                                            |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Depth.is_analysis_pass "qiskit.transpiler.passes.Depth.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Depth.is_transformation_pass "qiskit.transpiler.passes.Depth.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the Depth pass on dag.
