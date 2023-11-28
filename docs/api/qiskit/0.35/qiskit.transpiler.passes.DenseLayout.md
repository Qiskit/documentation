# DenseLayout

<span id="undefined" />

`DenseLayout(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Choose a Layout by finding the most connected subset of qubits.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit).

<Admonition title="Note" type="note">
  Even though a ‘layout’ is not strictly a property of the DAG, in the transpiler architecture it is best passed around between passes by being set in property\_set.
</Admonition>

DenseLayout initializer.

**Parameters**

*   **coupling\_map** (*Coupling*) – directed graph representing a coupling map.
*   **backend\_prop** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – backend properties object
*   **target** ([*Target*](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")) – A target representing the target backend.

## Methods

|                                                                                                                                           |                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`name`](qiskit.transpiler.passes.DenseLayout.name#qiskit.transpiler.passes.DenseLayout.name "qiskit.transpiler.passes.DenseLayout.name") | Return the name of the pass.     |
| [`run`](qiskit.transpiler.passes.DenseLayout.run#qiskit.transpiler.passes.DenseLayout.run "qiskit.transpiler.passes.DenseLayout.run")     | Run the DenseLayout pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
