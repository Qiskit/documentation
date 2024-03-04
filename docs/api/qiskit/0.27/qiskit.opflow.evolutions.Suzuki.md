---
title: Suzuki
description: API reference for qiskit.opflow.evolutions.Suzuki
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Suzuki
---

# qiskit.opflow\.evolutions.Suzuki

<span id="qiskit.opflow.evolutions.Suzuki" />

`Suzuki(reps=1, order=2)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.17/qiskit/opflow/evolutions/trotterizations/suzuki.py "view source code")

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

### \_\_init\_\_

<span id="qiskit.opflow.evolutions.Suzuki.__init__" />

`__init__(reps=1, order=2)`

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Methods

|                                                                                                                    |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.evolutions.Suzuki.__init__ "qiskit.opflow.evolutions.Suzuki.__init__")(\[reps, order]) | **type reps**`int`                                                                                              |
| [`convert`](#qiskit.opflow.evolutions.Suzuki.convert "qiskit.opflow.evolutions.Suzuki.convert")(operator)          | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

|                                                                                           |                                                                                               |
| ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`order`](#qiskit.opflow.evolutions.Suzuki.order "qiskit.opflow.evolutions.Suzuki.order") | returns order                                                                                 |
| [`reps`](#qiskit.opflow.evolutions.Suzuki.reps "qiskit.opflow.evolutions.Suzuki.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

### convert

<span id="qiskit.opflow.evolutions.Suzuki.convert" />

`convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** (`OperatorBase`) – The `SummedOp` to evolve.

**Return type**

`OperatorBase`

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

### order

<span id="qiskit.opflow.evolutions.Suzuki.order" />

`property order`

returns order

**Return type**

`int`

### reps

<span id="qiskit.opflow.evolutions.Suzuki.reps" />

`property reps`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

