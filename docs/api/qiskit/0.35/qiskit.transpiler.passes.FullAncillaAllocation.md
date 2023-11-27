# FullAncillaAllocation[¶](#fullancillaallocation "Permalink to this headline")

<span id="undefined" />

`FullAncillaAllocation(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.AnalysisPass`

Allocate all idle nodes from the coupling map as ancilla on the layout.

A pass for allocating all idle physical qubits (those that exist in coupling map but not the dag circuit) as ancilla. It will also choose new virtual qubits to correspond to those physical ancilla.

<Admonition title="Note" type="note">
  This is an analysis pass, and only responsible for choosing physical ancilla locations and their corresponding virtual qubits. A separate transformation pass must add those virtual qubits to the circuit.
</Admonition>

FullAncillaAllocation initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

## Methods

|                                                                                                                                                                                                                     |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`name`](qiskit.transpiler.passes.FullAncillaAllocation.name#qiskit.transpiler.passes.FullAncillaAllocation.name "qiskit.transpiler.passes.FullAncillaAllocation.name")                                             | Return the name of the pass.                                          |
| [`run`](qiskit.transpiler.passes.FullAncillaAllocation.run#qiskit.transpiler.passes.FullAncillaAllocation.run "qiskit.transpiler.passes.FullAncillaAllocation.run")                                                 | Run the FullAncillaAllocation pass on dag.                            |
| [`validate_layout`](qiskit.transpiler.passes.FullAncillaAllocation.validate_layout#qiskit.transpiler.passes.FullAncillaAllocation.validate_layout "qiskit.transpiler.passes.FullAncillaAllocation.validate_layout") | Checks if all the qregs in layout\_qregs already exist in dag\_qregs. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
