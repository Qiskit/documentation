---
title: Optimize1qGates
description: API reference for qiskit.transpiler.passes.Optimize1qGates
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Optimize1qGates
---

# Optimize1qGates

<span id="qiskit.transpiler.passes.Optimize1qGates" />

`Optimize1qGates(*args, **kwargs)`

Optimize chains of single-qubit u1, u2, u3 gates by combining them into a single gate.

Optimize1qGates initializer.

**Parameters**

**basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the set \{‘u1’,’u2’,’u3’}.

## Attributes

|                                                                                                                                                                               |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Optimize1qGates.is_analysis_pass`](qiskit.transpiler.passes.Optimize1qGates.is_analysis_pass "qiskit.transpiler.passes.Optimize1qGates.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Optimize1qGates.is_transformation_pass`](qiskit.transpiler.passes.Optimize1qGates.is_transformation_pass "qiskit.transpiler.passes.Optimize1qGates.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                                               |                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`Optimize1qGates.compose_u3`](qiskit.transpiler.passes.Optimize1qGates.compose_u3 "qiskit.transpiler.passes.Optimize1qGates.compose_u3")(theta1, phi1, …)    | Return a triple theta, phi, lambda for the product. |
| [`Optimize1qGates.name`](qiskit.transpiler.passes.Optimize1qGates.name "qiskit.transpiler.passes.Optimize1qGates.name")()                                     | Return the name of the pass.                        |
| [`Optimize1qGates.run`](qiskit.transpiler.passes.Optimize1qGates.run "qiskit.transpiler.passes.Optimize1qGates.run")(dag)                                     | Run the Optimize1qGates pass on dag.                |
| [`Optimize1qGates.yzy_to_zyz`](qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz "qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz")(xi, theta1, theta2) | Express a Y.Z.Y single qubit gate as a Z.Y.Z gate.  |

