---
title: TrotterizationBase
description: API reference for qiskit.aqua.operators.evolutions.TrotterizationBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.TrotterizationBase
---

# TrotterizationBase

<span id="qiskit.aqua.operators.evolutions.TrotterizationBase" />

`TrotterizationBase(reps=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/evolutions/trotterizations/trotterization_base.py "view source code")

A base for Trotterization methods, algorithms for approximating exponentiations of operator sums by compositions of exponentiations.

## Attributes

### reps

<span id="qiskit.aqua.operators.evolutions.TrotterizationBase.reps" />

`int`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

## Methods

### convert

<span id="qiskit.aqua.operators.evolutions.TrotterizationBase.convert" />

`abstract TrotterizationBase.convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `SummedOp` to evolve.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

