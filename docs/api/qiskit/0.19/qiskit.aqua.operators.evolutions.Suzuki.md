---
title: Suzuki
description: API reference for qiskit.aqua.operators.evolutions.Suzuki
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.Suzuki
---

# Suzuki

<span id="qiskit.aqua.operators.evolutions.Suzuki" />

`Suzuki(reps=1, order=2)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/evolutions/trotterizations/suzuki.py "view source code")

Suzuki Trotter expansion, composing the evolution circuits of each Operator in the sum together by a recursive “bookends” strategy, repeating the whole composed circuit `reps` times.

Detailed in [https://arxiv.org/pdf/quant-ph/0508139.pdf](https://arxiv.org/pdf/quant-ph/0508139.pdf).

**Parameters**

*   **reps** (`int`) – The number of times to repeat the expansion circuit.
*   **order** (`int`) – The order of the expansion to perform.

## Attributes

### order

<span id="qiskit.aqua.operators.evolutions.Suzuki.order" />

`int`

returns order

**Return type**

`int`

### reps

<span id="qiskit.aqua.operators.evolutions.Suzuki.reps" />

`int`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

## Methods

### convert

<span id="qiskit.aqua.operators.evolutions.Suzuki.convert" />

`Suzuki.convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `SummedOp` to evolve.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

