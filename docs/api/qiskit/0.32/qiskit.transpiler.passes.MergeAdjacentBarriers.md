# MergeAdjacentBarriers

<span id="undefined" />

`MergeAdjacentBarriers(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Return a circuit with any adjacent barriers merged together.

Only barriers which can be merged without affecting the barrier structure of the DAG will be merged.

Not all redundant barriers will necessarily be merged, only adjacent barriers are merged.

For example, the circuit:

```python
qr = QuantumRegister(3, 'q')
circuit = QuantumCircuit(qr)
circuit.barrier(qr[0])
circuit.barrier(qr[1])
circuit.barrier(qr)
```

Will be transformed into a circuit corresponding to:

```python
circuit.barrier(qr[0])
circuit.barrier(qr)
```

after one iteration of the pass. These two barriers were not merged by the first pass as they are not adjacent in the initial circuit.

The pass then can be reapplied to merge the newly adjacent barriers.

## Methods

|                                                                                                                                                                         |                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`name`](qiskit.transpiler.passes.MergeAdjacentBarriers.name#qiskit.transpiler.passes.MergeAdjacentBarriers.name "qiskit.transpiler.passes.MergeAdjacentBarriers.name") | Return the name of the pass.               |
| [`run`](qiskit.transpiler.passes.MergeAdjacentBarriers.run#qiskit.transpiler.passes.MergeAdjacentBarriers.run "qiskit.transpiler.passes.MergeAdjacentBarriers.run")     | Run the MergeAdjacentBarriers pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
