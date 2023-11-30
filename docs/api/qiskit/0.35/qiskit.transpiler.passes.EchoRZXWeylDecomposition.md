# EchoRZXWeylDecomposition

<span id="undefined" />

`EchoRZXWeylDecomposition(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Rewrite two-qubit gates using the Weyl decomposition.

This transpiler pass rewrites two-qubit gates in terms of echoed cross-resonance gates according to the Weyl decomposition. A two-qubit gate will be replaced with at most six non-echoed RZXGates. Each pair of RZXGates forms an echoed RZXGate.

EchoRZXWeylDecomposition pass.

**Parameters**

**instruction\_schedule\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – the mapping from circuit [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and arguments to [`Schedule`](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")s.

## Methods

|                                                                                                                                                                                  |                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`name`](qiskit.transpiler.passes.EchoRZXWeylDecomposition.name#qiskit.transpiler.passes.EchoRZXWeylDecomposition.name "qiskit.transpiler.passes.EchoRZXWeylDecomposition.name") | Return the name of the pass.                  |
| [`run`](qiskit.transpiler.passes.EchoRZXWeylDecomposition.run#qiskit.transpiler.passes.EchoRZXWeylDecomposition.run "qiskit.transpiler.passes.EchoRZXWeylDecomposition.run")     | Run the EchoRZXWeylDecomposition pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
