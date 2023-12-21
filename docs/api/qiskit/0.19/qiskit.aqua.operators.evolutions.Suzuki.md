---
title: Suzuki
description: API reference for qiskit.aqua.operators.evolutions.Suzuki
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.Suzuki
---

# Suzuki

<span id="qiskit.aqua.operators.evolutions.Suzuki" />

`Suzuki(reps=1, order=2)`

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Attributes

|                                                                                                                 |                                                                                               |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`Suzuki.order`](qiskit.aqua.operators.evolutions.Suzuki.order "qiskit.aqua.operators.evolutions.Suzuki.order") | returns order                                                                                 |
| [`Suzuki.reps`](qiskit.aqua.operators.evolutions.Suzuki.reps "qiskit.aqua.operators.evolutions.Suzuki.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

## Methods

|                                                                                                                                 |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`Suzuki.convert`](qiskit.aqua.operators.evolutions.Suzuki.convert "qiskit.aqua.operators.evolutions.Suzuki.convert")(operator) | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

