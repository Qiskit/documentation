---
title: DenseLayout
description: API reference for qiskit.transpiler.passes.DenseLayout
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.DenseLayout
---

# DenseLayout

<span id="qiskit.transpiler.passes.DenseLayout" />

`DenseLayout(*args, **kwargs)`

Choose a Layout by finding the most connected subset of qubits.

This pass associates a physical qubit (int) to each virtual qubit of the circuit (Qubit).

<Admonition title="Note" type="note">
  Even though a ‘layout’ is not strictly a property of the DAG, in the transpiler architecture it is best passed around between passes by being set in property\_set.
</Admonition>

DenseLayout initializer.

**Parameters**

*   **coupling\_map** (*Coupling*) – directed graph representing a coupling map.
*   **backend\_prop** ([*BackendProperties*](qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – backend properties object

## Attributes

|                                                                                                                                                                   |                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`DenseLayout.is_analysis_pass`](qiskit.transpiler.passes.DenseLayout.is_analysis_pass "qiskit.transpiler.passes.DenseLayout.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`DenseLayout.is_transformation_pass`](qiskit.transpiler.passes.DenseLayout.is_transformation_pass "qiskit.transpiler.passes.DenseLayout.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                               |                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| [`DenseLayout.name`](qiskit.transpiler.passes.DenseLayout.name "qiskit.transpiler.passes.DenseLayout.name")() | Return the name of the pass.     |
| [`DenseLayout.run`](qiskit.transpiler.passes.DenseLayout.run "qiskit.transpiler.passes.DenseLayout.run")(dag) | Run the DenseLayout pass on dag. |

