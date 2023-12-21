---
title: CommutativeCancellation
description: API reference for qiskit.transpiler.passes.CommutativeCancellation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CommutativeCancellation
---

# CommutativeCancellation

<span id="qiskit.transpiler.passes.CommutativeCancellation" />

`CommutativeCancellation(*args, **kwargs)`

Cancel the redundant (self-adjoint) gates through commutation relations.

Pass for cancelling self-inverse gates/rotations. The cancellation utilizes the commutation relations in the circuit. Gates considered include:

```python
H, X, Y, Z, CX, CY, CZ
```

## Attributes

|                                                                                                                                                                                                       |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CommutativeCancellation.is_analysis_pass`](qiskit.transpiler.passes.CommutativeCancellation.is_analysis_pass "qiskit.transpiler.passes.CommutativeCancellation.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CommutativeCancellation.is_transformation_pass`](qiskit.transpiler.passes.CommutativeCancellation.is_transformation_pass "qiskit.transpiler.passes.CommutativeCancellation.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                                   |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`CommutativeCancellation.name`](qiskit.transpiler.passes.CommutativeCancellation.name "qiskit.transpiler.passes.CommutativeCancellation.name")() | Return the name of the pass.                 |
| [`CommutativeCancellation.run`](qiskit.transpiler.passes.CommutativeCancellation.run "qiskit.transpiler.passes.CommutativeCancellation.run")(dag) | Run the CommutativeCancellation pass on dag. |

