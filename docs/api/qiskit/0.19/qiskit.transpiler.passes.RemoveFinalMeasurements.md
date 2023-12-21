---
title: RemoveFinalMeasurements
description: API reference for qiskit.transpiler.passes.RemoveFinalMeasurements
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.RemoveFinalMeasurements
---

# RemoveFinalMeasurements

<span id="qiskit.transpiler.passes.RemoveFinalMeasurements" />

`RemoveFinalMeasurements(*args, **kwargs)`

Remove final measurements and barriers at the end of a circuit.

This pass removes final barriers and final measurements, as well as the ClassicalRegisters they are connected to if the ClassicalRegister is unused. Measurements and barriers are considered final if they are followed by no other operations (aside from other measurements or barriers.)

## Attributes

|                                                                                                                                                                                                       |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`RemoveFinalMeasurements.is_analysis_pass`](qiskit.transpiler.passes.RemoveFinalMeasurements.is_analysis_pass "qiskit.transpiler.passes.RemoveFinalMeasurements.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`RemoveFinalMeasurements.is_transformation_pass`](qiskit.transpiler.passes.RemoveFinalMeasurements.is_transformation_pass "qiskit.transpiler.passes.RemoveFinalMeasurements.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                                   |                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [`RemoveFinalMeasurements.name`](qiskit.transpiler.passes.RemoveFinalMeasurements.name "qiskit.transpiler.passes.RemoveFinalMeasurements.name")() | Return the name of the pass.                 |
| [`RemoveFinalMeasurements.run`](qiskit.transpiler.passes.RemoveFinalMeasurements.run "qiskit.transpiler.passes.RemoveFinalMeasurements.run")(dag) | Run the RemoveFinalMeasurements pass on dag. |

