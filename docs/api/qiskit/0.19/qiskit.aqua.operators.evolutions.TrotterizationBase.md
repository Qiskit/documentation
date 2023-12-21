---
title: TrotterizationBase
description: API reference for qiskit.aqua.operators.evolutions.TrotterizationBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.TrotterizationBase
---

# TrotterizationBase

<span id="qiskit.aqua.operators.evolutions.TrotterizationBase" />

`TrotterizationBase(reps=1)`

A base for Trotterization methods, algorithms for approximating exponentiations of operator sums by compositions of exponentiations.

## Attributes

|                                                                                                                                                  |                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`TrotterizationBase.reps`](qiskit.aqua.operators.evolutions.TrotterizationBase.reps "qiskit.aqua.operators.evolutions.TrotterizationBase.reps") | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

## Methods

|                                                                                                                                                                     |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`TrotterizationBase.convert`](qiskit.aqua.operators.evolutions.TrotterizationBase.convert "qiskit.aqua.operators.evolutions.TrotterizationBase.convert")(operator) | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

