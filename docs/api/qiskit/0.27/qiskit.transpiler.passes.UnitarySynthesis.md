# qiskit.transpiler.passes.UnitarySynthesis

<span id="undefined" />

`UnitarySynthesis(basis_gates, approximation_degree=1)`

Synthesize gates according to their basis gates.

Synthesize unitaries over some basis gates.

This pass can approximate 2-qubit unitaries given some approximation closeness measure (expressed as approximation\_degree). Other unitaries are synthesized exactly.

**Parameters**

*   **basis\_gates** (`List`\[`str`]) – List of gate names to target.
*   **approximation\_degree** (`float`) – closeness of approximation (0: lowest, 1: highest).

<span id="undefined" />

`__init__(basis_gates, approximation_degree=1)`

Synthesize unitaries over some basis gates.

This pass can approximate 2-qubit unitaries given some approximation closeness measure (expressed as approximation\_degree). Other unitaries are synthesized exactly.

**Parameters**

*   **basis\_gates** (`List`\[`str`]) – List of gate names to target.
*   **approximation\_degree** (`float`) – closeness of approximation (0: lowest, 1: highest).

## Methods

|                                                                                                                                                                |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.UnitarySynthesis.__init__ "qiskit.transpiler.passes.UnitarySynthesis.__init__")(basis\_gates\[, approximation\_degree]) | Synthesize unitaries over some basis gates. |
| [`name`](#qiskit.transpiler.passes.UnitarySynthesis.name "qiskit.transpiler.passes.UnitarySynthesis.name")()                                                   | Return the name of the pass.                |
| [`run`](#qiskit.transpiler.passes.UnitarySynthesis.run "qiskit.transpiler.passes.UnitarySynthesis.run")(dag)                                                   | Run the UnitarySynthesis pass on dag.       |

## Attributes

|                                                                                                                                                                  |                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`is_analysis_pass`](#qiskit.transpiler.passes.UnitarySynthesis.is_analysis_pass "qiskit.transpiler.passes.UnitarySynthesis.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`is_transformation_pass`](#qiskit.transpiler.passes.UnitarySynthesis.is_transformation_pass "qiskit.transpiler.passes.UnitarySynthesis.is_transformation_pass") | Check if the pass is a transformation pass. |

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

Run the UnitarySynthesis pass on dag.

**Parameters**

**dag** (`DAGCircuit`) – input dag.

**Return type**

`DAGCircuit`

**Returns**

Output dag with UnitaryGates synthesized to target basis.
