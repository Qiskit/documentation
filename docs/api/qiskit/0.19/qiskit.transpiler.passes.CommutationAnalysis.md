---
title: CommutationAnalysis
description: API reference for qiskit.transpiler.passes.CommutationAnalysis
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CommutationAnalysis
---

# CommutationAnalysis

<span id="qiskit.transpiler.passes.CommutationAnalysis" />

`CommutationAnalysis(*args, **kwargs)`

Analysis pass to find commutation relations between DAG nodes.

Property\_set\[‘commutation\_set’] is a dictionary that describes the commutation relations on a given wire, all the gates on a wire are grouped into a set of gates that commute.

TODO: the current pass determines commutativity through matrix multiplication. A rule-based analysis would be potentially faster, but more limited.

## Attributes

|                                                                                                                                                                                           |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CommutationAnalysis.is_analysis_pass`](qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass "qiskit.transpiler.passes.CommutationAnalysis.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CommutationAnalysis.is_transformation_pass`](qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass "qiskit.transpiler.passes.CommutationAnalysis.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                       |                                          |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [`CommutationAnalysis.name`](qiskit.transpiler.passes.CommutationAnalysis.name "qiskit.transpiler.passes.CommutationAnalysis.name")() | Return the name of the pass.             |
| [`CommutationAnalysis.run`](qiskit.transpiler.passes.CommutationAnalysis.run "qiskit.transpiler.passes.CommutationAnalysis.run")(dag) | Run the CommutationAnalysis pass on dag. |

