---
title: Unroller
description: API reference for qiskit.transpiler.passes.Unroller
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Unroller
---

# Unroller

<span id="qiskit.transpiler.passes.Unroller" />

`Unroller(*args, **kwargs)`

Unroll a circuit to a given basis.

Unroll (expand) non-basis, non-opaque instructions recursively to a desired basis, using decomposition rules defined for each instruction.

Unroller initializer.

**Parameters**

**basis** (*list\[str] or None*) – Target basis names to unroll to, e.g. \[‘u3’, ‘cx’] . If None, does not unroll any gate.

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Unroller.is_analysis_pass`](qiskit.transpiler.passes.Unroller.is_analysis_pass "qiskit.transpiler.passes.Unroller.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Unroller.is_transformation_pass`](qiskit.transpiler.passes.Unroller.is_transformation_pass "qiskit.transpiler.passes.Unroller.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                      |                               |
| ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`Unroller.name`](qiskit.transpiler.passes.Unroller.name "qiskit.transpiler.passes.Unroller.name")() | Return the name of the pass.  |
| [`Unroller.run`](qiskit.transpiler.passes.Unroller.run "qiskit.transpiler.passes.Unroller.run")(dag) | Run the Unroller pass on dag. |

