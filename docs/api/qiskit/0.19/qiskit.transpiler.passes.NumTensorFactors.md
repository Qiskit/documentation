---
title: NumTensorFactors
description: API reference for qiskit.transpiler.passes.NumTensorFactors
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.NumTensorFactors
---

# NumTensorFactors

<span id="qiskit.transpiler.passes.NumTensorFactors" />

`NumTensorFactors(*args, **kwargs)`

Calculate the number of tensor factors of a DAG circuit.

The result is saved in `property_set['num_tensor_factors']` as an integer.

## Attributes

|                                                                                                                                                                                  |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`NumTensorFactors.is_analysis_pass`](qiskit.transpiler.passes.NumTensorFactors.is_analysis_pass "qiskit.transpiler.passes.NumTensorFactors.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`NumTensorFactors.is_transformation_pass`](qiskit.transpiler.passes.NumTensorFactors.is_transformation_pass "qiskit.transpiler.passes.NumTensorFactors.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                              |                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| [`NumTensorFactors.name`](qiskit.transpiler.passes.NumTensorFactors.name "qiskit.transpiler.passes.NumTensorFactors.name")() | Return the name of the pass.          |
| [`NumTensorFactors.run`](qiskit.transpiler.passes.NumTensorFactors.run "qiskit.transpiler.passes.NumTensorFactors.run")(dag) | Run the NumTensorFactors pass on dag. |

