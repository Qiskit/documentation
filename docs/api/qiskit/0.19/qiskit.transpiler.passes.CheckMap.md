---
title: CheckMap
description: API reference for qiskit.transpiler.passes.CheckMap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.CheckMap
---

# CheckMap

<span id="qiskit.transpiler.passes.CheckMap" />

`CheckMap(*args, **kwargs)`

Check if a DAG circuit is already mapped to a coupling map.

Check if a DAGCircuit is mapped to coupling\_map by checking that all 2-qubit interactions are laid out to be physically close, setting the property `is_swap_mapped` to `True` or `False` accordingly.

CheckMap initializer.

**Parameters**

**coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.

## Attributes

|                                                                                                                                                          |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`CheckMap.is_analysis_pass`](qiskit.transpiler.passes.CheckMap.is_analysis_pass "qiskit.transpiler.passes.CheckMap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`CheckMap.is_transformation_pass`](qiskit.transpiler.passes.CheckMap.is_transformation_pass "qiskit.transpiler.passes.CheckMap.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                      |                               |
| ---------------------------------------------------------------------------------------------------- | ----------------------------- |
| [`CheckMap.name`](qiskit.transpiler.passes.CheckMap.name "qiskit.transpiler.passes.CheckMap.name")() | Return the name of the pass.  |
| [`CheckMap.run`](qiskit.transpiler.passes.CheckMap.run "qiskit.transpiler.passes.CheckMap.run")(dag) | Run the CheckMap pass on dag. |

