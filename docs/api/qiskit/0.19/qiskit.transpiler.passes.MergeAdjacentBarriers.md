---
title: MergeAdjacentBarriers
description: API reference for qiskit.transpiler.passes.MergeAdjacentBarriers
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.MergeAdjacentBarriers
---

# MergeAdjacentBarriers

<span id="qiskit.transpiler.passes.MergeAdjacentBarriers" />

`MergeAdjacentBarriers(*args, **kwargs)`

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

## Attributes

|                                                                                                                                                                                                 |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`MergeAdjacentBarriers.is_analysis_pass`](qiskit.transpiler.passes.MergeAdjacentBarriers.is_analysis_pass "qiskit.transpiler.passes.MergeAdjacentBarriers.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`MergeAdjacentBarriers.is_transformation_pass`](qiskit.transpiler.passes.MergeAdjacentBarriers.is_transformation_pass "qiskit.transpiler.passes.MergeAdjacentBarriers.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                             |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`MergeAdjacentBarriers.name`](qiskit.transpiler.passes.MergeAdjacentBarriers.name "qiskit.transpiler.passes.MergeAdjacentBarriers.name")() | Return the name of the pass.               |
| [`MergeAdjacentBarriers.run`](qiskit.transpiler.passes.MergeAdjacentBarriers.run "qiskit.transpiler.passes.MergeAdjacentBarriers.run")(dag) | Run the MergeAdjacentBarriers pass on dag. |

