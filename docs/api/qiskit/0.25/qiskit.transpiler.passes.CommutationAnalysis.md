# qiskit.transpiler.passes.CommutationAnalysis

<span id="undefined" />

`CommutationAnalysis(*args, **kwargs)`

Analysis pass to find commutation relations between DAG nodes.

Property\_set\[‘commutation\_set’] is a dictionary that describes the commutation relations on a given wire, all the gates on a wire are grouped into a set of gates that commute.

TODO: the current pass determines commutativity through matrix multiplication. A rule-based analysis would be potentially faster, but more limited.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                |                                          |
| ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.CommutationAnalysis.__init__ "qiskit.transpiler.passes.CommutationAnalysis.__init__")() | Initialize self.                         |
| [`name`](#qiskit.transpiler.passes.CommutationAnalysis.name "qiskit.transpiler.passes.CommutationAnalysis.name")()             | Return the name of the pass.             |
| [`run`](#qiskit.transpiler.passes.CommutationAnalysis.run "qiskit.transpiler.passes.CommutationAnalysis.run")(dag)             | Run the CommutationAnalysis pass on dag. |

## Attributes

|                                                                                                                                                                        |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass "qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass "qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the CommutationAnalysis pass on dag.

Run the pass on the DAG, and write the discovered commutation relations into the property\_set.
