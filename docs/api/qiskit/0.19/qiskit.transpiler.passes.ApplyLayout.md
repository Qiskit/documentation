---
title: ApplyLayout
description: API reference for qiskit.transpiler.passes.ApplyLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.ApplyLayout
---

# ApplyLayout

<span id="qiskit.transpiler.passes.ApplyLayout" />

`ApplyLayout(*args, **kwargs)`

Transform a circuit with virtual qubits into a circuit with physical qubits.

Transforms a DAGCircuit with virtual qubits into a DAGCircuit with physical qubits by applying the Layout given in property\_set. Requires either of passes to set/select Layout, e.g. SetLayout, TrivialLayout. Assumes the Layout has full physical qubits.

## Attributes

|                                                                                                                                                                   |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`ApplyLayout.is_analysis_pass`](qiskit.transpiler.passes.ApplyLayout.is_analysis_pass "qiskit.transpiler.passes.ApplyLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`ApplyLayout.is_transformation_pass`](qiskit.transpiler.passes.ApplyLayout.is_transformation_pass "qiskit.transpiler.passes.ApplyLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                               |                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`ApplyLayout.name`](qiskit.transpiler.passes.ApplyLayout.name "qiskit.transpiler.passes.ApplyLayout.name")() | Return the name of the pass.     |
| [`ApplyLayout.run`](qiskit.transpiler.passes.ApplyLayout.run "qiskit.transpiler.passes.ApplyLayout.run")(dag) | Run the ApplyLayout pass on dag. |

