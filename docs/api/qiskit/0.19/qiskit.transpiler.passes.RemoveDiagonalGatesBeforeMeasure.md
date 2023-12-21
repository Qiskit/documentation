---
title: RemoveDiagonalGatesBeforeMeasure
description: API reference for qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure
---

# RemoveDiagonalGatesBeforeMeasure

<span id="qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure" />

`RemoveDiagonalGatesBeforeMeasure(*args, **kwargs)`

Remove diagonal gates (including diagonal 2Q gates) before a measurement.

Transpiler pass to remove diagonal gates (like RZ, T, Z, etc) before a measurement. Including diagonal 2Q gates.

## Attributes

|                                                                                                                                                                                                                                  |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`RemoveDiagonalGatesBeforeMeasure.is_analysis_pass`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_analysis_pass "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`RemoveDiagonalGatesBeforeMeasure.is_transformation_pass`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_transformation_pass "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                                                              |                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`RemoveDiagonalGatesBeforeMeasure.name`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.name")() | Return the name of the pass.                          |
| [`RemoveDiagonalGatesBeforeMeasure.run`](qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run "qiskit.transpiler.passes.RemoveDiagonalGatesBeforeMeasure.run")(dag) | Run the RemoveDiagonalGatesBeforeMeasure pass on dag. |

