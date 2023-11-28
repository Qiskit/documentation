# UnitarySynthesis

<span id="undefined" />

`UnitarySynthesis(basis_gates, approximation_degree=1, coupling_map=None, backend_props=None, pulse_optimize=None, natural_direction=None, synth_gates=None)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Synthesize gates according to their basis gates.

Synthesize unitaries over some basis gates.

This pass can approximate 2-qubit unitaries given some approximation closeness measure (expressed as approximation\_degree). Other unitaries are synthesized exactly.

**Parameters**

*   **basis\_gates** (*list\[str]*) – List of gate names to target.
*   **approximation\_degree** (*float*) – Closeness of approximation (0: lowest, 1: highest).
*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – the coupling map of the backend in case synthesis is done on a physical circuit. The directionality of the coupling\_map will be taken into account if pulse\_optimize is True/None and natural\_direction is True/None.
*   **backend\_props** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – Properties of a backend to synthesize for (e.g. gate fidelities).
*   **pulse\_optimize** (*bool*) – Whether to optimize pulses during synthesis. A value of None will attempt it but fall back if it doesn’t succeed. A value of True will raise an error if pulse-optimized synthesis does not succeed.
*   **natural\_direction** (*bool*) – Whether to apply synthesis considering directionality of 2-qubit gates. Only applies when pulse\_optimize is True or None. The natural direction is determined by first checking to see whether the coupling map is unidirectional. If there is no coupling map or the coupling map is bidirectional, the gate direction with the shorter duration from the backend properties will be used. If set to True, and a natural direction can not be determined, raises TranspileError. If set to None, no exception will be raised if a natural direction can not be determined.
*   **synth\_gates** (*list\[str]*) – List of gates to synthesize. If None and pulse\_optimize is False or None, default to \[‘unitary’]. If None and pulse\_optimzie == True, default to \[‘unitary’, ‘swap’]

## Methods

|                                                                                                                                                          |                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`name`](qiskit.transpiler.passes.UnitarySynthesis.name#qiskit.transpiler.passes.UnitarySynthesis.name "qiskit.transpiler.passes.UnitarySynthesis.name") | Return the name of the pass.          |
| [`run`](qiskit.transpiler.passes.UnitarySynthesis.run#qiskit.transpiler.passes.UnitarySynthesis.run "qiskit.transpiler.passes.UnitarySynthesis.run")     | Run the UnitarySynthesis pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
