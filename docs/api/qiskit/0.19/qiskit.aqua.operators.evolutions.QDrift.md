---
title: QDrift
description: API reference for qiskit.aqua.operators.evolutions.QDrift
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.QDrift
---

# QDrift

<span id="qiskit.aqua.operators.evolutions.QDrift" />

`QDrift(reps=1)`

The QDrift Trotterization method, which selects each each term in the Trotterization randomly, with a probability proportional to its weight. Based on the work of Earl Campbell in [https://arxiv.org/abs/1811.08017](https://arxiv.org/abs/1811.08017).

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Attributes

|                                                                                                              |                                                                                               |
| ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`QDrift.reps`](qiskit.aqua.operators.evolutions.QDrift.reps "qiskit.aqua.operators.evolutions.QDrift.reps") | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

## Methods

|                                                                                                                                 |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`QDrift.convert`](qiskit.aqua.operators.evolutions.QDrift.convert "qiskit.aqua.operators.evolutions.QDrift.convert")(operator) | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

