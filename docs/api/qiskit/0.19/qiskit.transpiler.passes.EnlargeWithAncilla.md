---
title: EnlargeWithAncilla
description: API reference for qiskit.transpiler.passes.EnlargeWithAncilla
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.EnlargeWithAncilla
---

# EnlargeWithAncilla

<span id="qiskit.transpiler.passes.EnlargeWithAncilla" />

`EnlargeWithAncilla(*args, **kwargs)`

Extend the dag with virtual qubits that are in layout but not in the circuit yet.

Extend the DAG circuit with new virtual qubits (ancilla) that are specified in the layout, but not present in the circuit. Which qubits to add are previously allocated in the `layout` property, by a previous pass.

## Attributes

|                                                                                                                                                                                        |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`EnlargeWithAncilla.is_analysis_pass`](qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`EnlargeWithAncilla.is_transformation_pass`](qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass "qiskit.transpiler.passes.EnlargeWithAncilla.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                    |                                         |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`EnlargeWithAncilla.name`](qiskit.transpiler.passes.EnlargeWithAncilla.name "qiskit.transpiler.passes.EnlargeWithAncilla.name")() | Return the name of the pass.            |
| [`EnlargeWithAncilla.run`](qiskit.transpiler.passes.EnlargeWithAncilla.run "qiskit.transpiler.passes.EnlargeWithAncilla.run")(dag) | Run the EnlargeWithAncilla pass on dag. |

