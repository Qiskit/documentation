---
title: Trotter
description: API reference for qiskit.aqua.operators.evolutions.Trotter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.Trotter
---

# Trotter

<span id="qiskit.aqua.operators.evolutions.Trotter" />

`Trotter(reps=1)`

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Attributes

|                                                                                                                    |                                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [`Trotter.order`](qiskit.aqua.operators.evolutions.Trotter.order "qiskit.aqua.operators.evolutions.Trotter.order") | returns order                                                                                 |
| [`Trotter.reps`](qiskit.aqua.operators.evolutions.Trotter.reps "qiskit.aqua.operators.evolutions.Trotter.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

## Methods

|                                                                                                                                    |                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`Trotter.convert`](qiskit.aqua.operators.evolutions.Trotter.convert "qiskit.aqua.operators.evolutions.Trotter.convert")(operator) | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

