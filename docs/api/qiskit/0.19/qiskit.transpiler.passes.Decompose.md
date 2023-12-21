---
title: Decompose
description: API reference for qiskit.transpiler.passes.Decompose
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Decompose
---

# Decompose

<span id="qiskit.transpiler.passes.Decompose" />

`Decompose(gate=None)`

Expand a gate in a circuit using its decomposition rules.

Decompose initializer.

**Parameters**

**gate** (`Optional`\[`Type`\[[`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")]]) – gate to decompose.

## Attributes

|                                                                                                                                                             |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`Decompose.is_analysis_pass`](qiskit.transpiler.passes.Decompose.is_analysis_pass "qiskit.transpiler.passes.Decompose.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`Decompose.is_transformation_pass`](qiskit.transpiler.passes.Decompose.is_transformation_pass "qiskit.transpiler.passes.Decompose.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                         |                                |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`Decompose.name`](qiskit.transpiler.passes.Decompose.name "qiskit.transpiler.passes.Decompose.name")() | Return the name of the pass.   |
| [`Decompose.run`](qiskit.transpiler.passes.Decompose.run "qiskit.transpiler.passes.Decompose.run")(dag) | Run the Decompose pass on dag. |

