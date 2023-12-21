---
title: SetLayout
description: API reference for qiskit.transpiler.passes.SetLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.SetLayout
---

# SetLayout

<span id="qiskit.transpiler.passes.SetLayout" />

`SetLayout(*args, **kwargs)`

Set the `layout` property to the given layout.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit) in increasing order.

SetLayout initializer.

**Parameters**

**layout** ([*Layout*](qiskit.transpiler.Layout "qiskit.transpiler.Layout")) – the layout to set.

## Attributes

|                                                                                                                                                             |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`SetLayout.is_analysis_pass`](qiskit.transpiler.passes.SetLayout.is_analysis_pass "qiskit.transpiler.passes.SetLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`SetLayout.is_transformation_pass`](qiskit.transpiler.passes.SetLayout.is_transformation_pass "qiskit.transpiler.passes.SetLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                         |                                |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`SetLayout.name`](qiskit.transpiler.passes.SetLayout.name "qiskit.transpiler.passes.SetLayout.name")() | Return the name of the pass.   |
| [`SetLayout.run`](qiskit.transpiler.passes.SetLayout.run "qiskit.transpiler.passes.SetLayout.run")(dag) | Run the SetLayout pass on dag. |

