# RemoveBarriers[¶](#removebarriers "Permalink to this headline")

<span id="undefined" />

`RemoveBarriers(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Return a circuit with any barrier removed.

This transformation is not semantics preserving.

## Example

```python
from qiskit import QuantumCircuit
from qiskit.transpiler.passes import RemoveBarriers

circuit = QuantumCircuit(1)
circuit.x(0)
circuit.barrier()
circuit.h(0)

circuit = RemoveBarriers()(circuit)
circuit.draw()
```

```python
   ┌───┐┌───┐
q: ┤ X ├┤ H ├
   └───┘└───┘
```

## Methods

|                                                                                                                                                    |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`name`](qiskit.transpiler.passes.RemoveBarriers.name#qiskit.transpiler.passes.RemoveBarriers.name "qiskit.transpiler.passes.RemoveBarriers.name") | Return the name of the pass.        |
| [`run`](qiskit.transpiler.passes.RemoveBarriers.run#qiskit.transpiler.passes.RemoveBarriers.run "qiskit.transpiler.passes.RemoveBarriers.run")     | Run the RemoveBarriers pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
