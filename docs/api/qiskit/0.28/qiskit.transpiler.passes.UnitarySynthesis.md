# qiskit.transpiler.passes.UnitarySynthesis

<span id="undefined" />

`UnitarySynthesis(basis_gates, approximation_degree=1, coupling_map=None, backend_props=None, pulse_optimize=None, natural_direction=None, synth_gates=None)`

Synthesize gates according to their basis gates.

Synthesize unitaries over some basis gates.

This pass can approximate 2-qubit unitaries given some approximation closeness measure (expressed as approximation\_degree). Other unitaries are synthesized exactly.

**Parameters**

*   **basis\_gates** (`List`\[`str`]) – List of gate names to target.
*   **approximation\_degree** (`float`) – Closeness of approximation (0: lowest, 1: highest).
*   **backend\_props** (`Optional`\[`BackendProperties`]) – Properties of a backend to synthesize for (e.g. gate fidelities).
*   **pulse\_optimize** (`Optional`\[`bool`]) – Whether to optimize pulses during synthesis. A value of None will attempt it but fall back if it doesn’t succeed.
*   **natural\_direction** (`Optional`\[`bool`]) – Whether to apply synthesis considering directionality of 2-qubit gates. Only applies when pulse\_optimize == True. The natural direction is determined by first checking to see whether the coupling map is unidirectional. If there is no coupling map or the coupling map is bidirectional, the gate direction with the shorter duration from the backend properties will be used. If set to True, and a natural direction can not be determined, raises TranspileError. If set to None, no exception will be raised if a natural direction can not be determined.
*   **synth\_gates** (`Optional`\[`List`\[`str`]]) – List of gates to synthesize. If None and pulse\_optimize is False or None, default to \[‘unitary’]. If None and pulse\_optimzie == True, default to \[‘unitary’, ‘swap’]

<span id="undefined" />

`__init__(basis_gates, approximation_degree=1, coupling_map=None, backend_props=None, pulse_optimize=None, natural_direction=None, synth_gates=None)`

Synthesize unitaries over some basis gates.

This pass can approximate 2-qubit unitaries given some approximation closeness measure (expressed as approximation\_degree). Other unitaries are synthesized exactly.

**Parameters**

*   **basis\_gates** (`List`\[`str`]) – List of gate names to target.
*   **approximation\_degree** (`float`) – Closeness of approximation (0: lowest, 1: highest).
*   **backend\_props** (`Optional`\[`BackendProperties`]) – Properties of a backend to synthesize for (e.g. gate fidelities).
*   **pulse\_optimize** (`Optional`\[`bool`]) – Whether to optimize pulses during synthesis. A value of None will attempt it but fall back if it doesn’t succeed.
*   **natural\_direction** (`Optional`\[`bool`]) – Whether to apply synthesis considering directionality of 2-qubit gates. Only applies when pulse\_optimize == True. The natural direction is determined by first checking to see whether the coupling map is unidirectional. If there is no coupling map or the coupling map is bidirectional, the gate direction with the shorter duration from the backend properties will be used. If set to True, and a natural direction can not be determined, raises TranspileError. If set to None, no exception will be raised if a natural direction can not be determined.
*   **synth\_gates** (`Optional`\[`List`\[`str`]]) – List of gates to synthesize. If None and pulse\_optimize is False or None, default to \[‘unitary’]. If None and pulse\_optimzie == True, default to \[‘unitary’, ‘swap’]

## Methods

|                                                                                                                                            |                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| [`__init__`](#qiskit.transpiler.passes.UnitarySynthesis.__init__ "qiskit.transpiler.passes.UnitarySynthesis.__init__")(basis\_gates\[, …]) | Synthesize unitaries over some basis gates. |
| [`name`](#qiskit.transpiler.passes.UnitarySynthesis.name "qiskit.transpiler.passes.UnitarySynthesis.name")()                               | Return the name of the pass.                |
| [`run`](#qiskit.transpiler.passes.UnitarySynthesis.run "qiskit.transpiler.passes.UnitarySynthesis.run")(dag)                               | Run the UnitarySynthesis pass on dag.       |

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

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") –

1.  pulse\_optimize is True but pulse optimal decomposition is not known for requested basis. 2. pulse\_optimize is True and natural\_direction is True but a preferred gate direction can’t be determined from the coupling map or the relative gate lengths.
