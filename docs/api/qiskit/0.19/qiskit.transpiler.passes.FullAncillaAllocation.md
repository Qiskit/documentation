---
title: FullAncillaAllocation
description: API reference for qiskit.transpiler.passes.FullAncillaAllocation
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.FullAncillaAllocation
---

# FullAncillaAllocation

<span id="qiskit.transpiler.passes.FullAncillaAllocation" />

`FullAncillaAllocation(*args, **kwargs)`

Allocate all idle nodes from the coupling map as ancilla on the layout.

A pass for allocating all idle physical qubits (those that exist in coupling map but not the dag circuit) as ancilla. It will also choose new virtual qubits to correspond to those physical ancilla.

<Admonition title="Note" type="note">
  This is an analysis pass, and only responsible for choosing physical ancilla locations and their corresponding virtual qubits. A separate transformation pass must add those virtual qubits to the circuit.
</Admonition>

FullAncillaAllocation initializer.

**Parameters**

**coupling\_map** (*Coupling*) – directed graph representing a coupling map.

## Attributes

|                                                                                                                                                                                                 |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`FullAncillaAllocation.is_analysis_pass`](qiskit.transpiler.passes.FullAncillaAllocation.is_analysis_pass "qiskit.transpiler.passes.FullAncillaAllocation.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`FullAncillaAllocation.is_transformation_pass`](qiskit.transpiler.passes.FullAncillaAllocation.is_transformation_pass "qiskit.transpiler.passes.FullAncillaAllocation.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                                             |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| [`FullAncillaAllocation.name`](qiskit.transpiler.passes.FullAncillaAllocation.name "qiskit.transpiler.passes.FullAncillaAllocation.name")() | Return the name of the pass.               |
| [`FullAncillaAllocation.run`](qiskit.transpiler.passes.FullAncillaAllocation.run "qiskit.transpiler.passes.FullAncillaAllocation.run")(dag) | Run the FullAncillaAllocation pass on dag. |

