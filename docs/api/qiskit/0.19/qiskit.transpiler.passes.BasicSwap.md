---
title: BasicSwap
description: API reference for qiskit.transpiler.passes.BasicSwap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.BasicSwap
---

# BasicSwap

<span id="qiskit.transpiler.passes.BasicSwap" />

`BasicSwap(*args, **kwargs)`

Map (with minimum effort) a DAGCircuit onto a coupling\_map adding swap gates.

The basic mapper is a minimum effort to insert swap gates to map the DAG onto a coupling map. When a cx is not in the coupling map possibilities, it inserts one or more swaps in front to make it compatible.

BasicSwap initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph represented a coupling map.

## Attributes

|                                                                                                                                                             |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`BasicSwap.is_analysis_pass`](qiskit.transpiler.passes.BasicSwap.is_analysis_pass "qiskit.transpiler.passes.BasicSwap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`BasicSwap.is_transformation_pass`](qiskit.transpiler.passes.BasicSwap.is_transformation_pass "qiskit.transpiler.passes.BasicSwap.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                         |                                |
| ------------------------------------------------------------------------------------------------------- | ------------------------------ |
| [`BasicSwap.name`](qiskit.transpiler.passes.BasicSwap.name "qiskit.transpiler.passes.BasicSwap.name")() | Return the name of the pass.   |
| [`BasicSwap.run`](qiskit.transpiler.passes.BasicSwap.run "qiskit.transpiler.passes.BasicSwap.run")(dag) | Run the BasicSwap pass on dag. |

