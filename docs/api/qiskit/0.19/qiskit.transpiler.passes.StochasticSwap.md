---
title: StochasticSwap
description: API reference for qiskit.transpiler.passes.StochasticSwap
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.StochasticSwap
---

# StochasticSwap

<span id="qiskit.transpiler.passes.StochasticSwap" />

`StochasticSwap(*args, **kwargs)`

Map a DAGCircuit onto a coupling\_map adding swap gates.

Uses a randomized algorithm.

## Notes

1.  Measurements may occur and be followed by swaps that result in repeated measurement of the same qubit. Near-term experiments cannot implement these circuits, so some care is required when using this mapper with experimental backend targets.
2.  We do not use the fact that the input state is zero to simplify the circuit.

StochasticSwap initializer.

The coupling map is a connected graph

If these are not satisfied, the behavior is undefined.

**Parameters**

*   **coupling\_map** ([*CouplingMap*](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")) – Directed graph representing a coupling map.
*   **trials** (*int*) – maximum number of iterations to attempt
*   **seed** (*int*) – seed for random number generator

## Attributes

|                                                                                                                                                                            |                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| [`StochasticSwap.is_analysis_pass`](qiskit.transpiler.passes.StochasticSwap.is_analysis_pass "qiskit.transpiler.passes.StochasticSwap.is_analysis_pass")                   | Check if the pass is an analysis pass.      |
| [`StochasticSwap.is_transformation_pass`](qiskit.transpiler.passes.StochasticSwap.is_transformation_pass "qiskit.transpiler.passes.StochasticSwap.is_transformation_pass") | Check if the pass is a transformation pass. |

## Methods

|                                                                                                                        |                                     |
| ---------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`StochasticSwap.name`](qiskit.transpiler.passes.StochasticSwap.name "qiskit.transpiler.passes.StochasticSwap.name")() | Return the name of the pass.        |
| [`StochasticSwap.run`](qiskit.transpiler.passes.StochasticSwap.run "qiskit.transpiler.passes.StochasticSwap.run")(dag) | Run the StochasticSwap pass on dag. |

