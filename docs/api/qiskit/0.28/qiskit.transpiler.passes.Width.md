# qiskit.transpiler.passes.Width

<span id="undefined" />

`Width(*args, **kwargs)`

Calculate the width of a DAG circuit.

The result is saved in `property_set['width']` as an integer that contains the number of qubits + the number of clbits.

<span id="undefined" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                    |                              |
| -------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Width.__init__ "qiskit.transpiler.passes.Width.__init__")() | Initialize self.             |
| [`name`](#qiskit.transpiler.passes.Width.name "qiskit.transpiler.passes.Width.name")()             | Return the name of the pass. |
| [`run`](#qiskit.transpiler.passes.Width.run "qiskit.transpiler.passes.Width.run")(dag)             | Run the Width pass on dag.   |

## Attributes

|                                                                                                                                            |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Width.is_analysis_pass "qiskit.transpiler.passes.Width.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Width.is_transformation_pass "qiskit.transpiler.passes.Width.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the Width pass on dag.
