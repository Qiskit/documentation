---
title: BarrierBeforeFinalMeasurements
description: API reference for qiskit.transpiler.passes.BarrierBeforeFinalMeasurements
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.BarrierBeforeFinalMeasurements
---

# BarrierBeforeFinalMeasurements

<span id="qiskit.transpiler.passes.BarrierBeforeFinalMeasurements" />

`BarrierBeforeFinalMeasurements(*args, **kwargs)`

Add a barrier before final measurements.

This pass adds a barrier before the set of final measurements. Measurements are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Attributes

|                                                                                                                                                                                                                            |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`BarrierBeforeFinalMeasurements.is_analysis_pass`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_analysis_pass "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`BarrierBeforeFinalMeasurements.is_transformation_pass`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_transformation_pass "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                                                        |                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [`BarrierBeforeFinalMeasurements.name`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.name")() | Return the name of the pass.                        |
| [`BarrierBeforeFinalMeasurements.run`](qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run "qiskit.transpiler.passes.BarrierBeforeFinalMeasurements.run")(dag) | Run the BarrierBeforeFinalMeasurements pass on dag. |

