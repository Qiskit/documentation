---
title: Width
description: API reference for qiskit.transpiler.passes.Width
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Width
---

# Width

<span id="qiskit.transpiler.passes.Width" />

`Width(*args, **kwargs)`

Calculate the width of a DAG circuit.

The result is saved in `property_set['width']` as an integer that contains the number of qubits + the number of clbits.

## Attributes

|                                                                                                                                                 |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Width.is_analysis_pass`](qiskit.transpiler.passes.Width.is_analysis_pass "qiskit.transpiler.passes.Width.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Width.is_transformation_pass`](qiskit.transpiler.passes.Width.is_transformation_pass "qiskit.transpiler.passes.Width.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                             |                              |
| ------------------------------------------------------------------------------------------- | ---------------------------- |
| [`Width.name`](qiskit.transpiler.passes.Width.name "qiskit.transpiler.passes.Width.name")() | Return the name of the pass. |
| [`Width.run`](qiskit.transpiler.passes.Width.run "qiskit.transpiler.passes.Width.run")(dag) | Run the Width pass on dag.   |

