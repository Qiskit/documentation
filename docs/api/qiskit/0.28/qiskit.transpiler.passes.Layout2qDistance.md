# qiskit.transpiler.passes.Layout2qDistance

<span id="undefined" />

`Layout2qDistance(*args, **kwargs)`

Evaluate how good the layout selection was.

Saves in property\_set\[‘layout\_score’] (or the property name in property\_name) the sum of distances for each circuit CX. The lower the number, the better the selection. Therefore, 0 is a perfect layout selection. No CX direction is considered.

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

<span id="undefined" />

`__init__(coupling_map, property_name='layout_score')`

Layout2qDistance initializer.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.
*   **property\_name** (*str*) – The property name to save the score. Default: layout\_score

## Methods

|                                                                                                                                                          |                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.Layout2qDistance.__init__ "qiskit.transpiler.passes.Layout2qDistance.__init__")(coupling\_map\[, property\_name]) | Layout2qDistance initializer.         |
| [`name`](#qiskit.transpiler.passes.Layout2qDistance.name "qiskit.transpiler.passes.Layout2qDistance.name")()                                             | Return the name of the pass.          |
| [`run`](#qiskit.transpiler.passes.Layout2qDistance.run "qiskit.transpiler.passes.Layout2qDistance.run")(dag)                                             | Run the Layout2qDistance pass on dag. |

## Attributes

|                                                                                                                                                                  |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass "qiskit.transpiler.passes.Layout2qDistance.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass "qiskit.transpiler.passes.Layout2qDistance.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the Layout2qDistance pass on dag. :param dag: DAG to evaluate. :type dag: DAGCircuit
