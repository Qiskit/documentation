<span id="qiskit-transpiler-passes-unitarysynthesis" />

# qiskit.transpiler.passes.UnitarySynthesis



`UnitarySynthesis(basis_gates)`

Synthesize gates according to their basis gates.

SynthesizeUnitaries initializer.

**Parameters**

**basis\_gates** (`List`\[`str`]) – List of gate names to target.



`__init__(basis_gates)`

SynthesizeUnitaries initializer.

**Parameters**

**basis\_gates** (`List`\[`str`]) – List of gate names to target.

## Methods

|                                                                                                                                      |                                       |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.UnitarySynthesis.__init__ "qiskit.transpiler.passes.UnitarySynthesis.__init__")(basis\_gates) | SynthesizeUnitaries initializer.      |
| [`name`](#qiskit.transpiler.passes.UnitarySynthesis.name "qiskit.transpiler.passes.UnitarySynthesis.name")()                         | Return the name of the pass.          |
| [`run`](#qiskit.transpiler.passes.UnitarySynthesis.run "qiskit.transpiler.passes.UnitarySynthesis.run")(dag)                         | Run the UnitarySynthesis pass on dag. |

## Attributes

|                                                                                                                                                                  |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.UnitarySynthesis.is_analysis_pass "qiskit.transpiler.passes.UnitarySynthesis.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.UnitarySynthesis.is_transformation_pass "qiskit.transpiler.passes.UnitarySynthesis.is_transformation_pass") | Check if the pass is a transformation pass. |



`property is_analysis_pass`

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.



`property is_transformation_pass`

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).



`name()`

Return the name of the pass.



`run(dag)`

Run the UnitarySynthesis pass on dag.

**Parameters**

**dag** (`DAGCircuit`) – input dag.

**Return type**

`DAGCircuit`

**Returns**

Output dag with UnitaryGates synthesized to target basis.
