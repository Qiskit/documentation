---
title: Trotter
description: API reference for qiskit.aqua.operators.evolutions.Trotter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.Trotter
---

# Trotter

<span id="qiskit.aqua.operators.evolutions.Trotter" />

`Trotter(reps=1)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/aqua/operators/evolutions/trotterizations/trotter.py "view source code")

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Attributes

### order

<span id="qiskit.aqua.operators.evolutions.Trotter.order" />

`int`

returns order

**Return type**

`int`

### reps

<span id="qiskit.aqua.operators.evolutions.Trotter.reps" />

`int`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

## Methods

### convert

<span id="qiskit.aqua.operators.evolutions.Trotter.convert" />

`Trotter.convert(operator)`

Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`.

**Parameters**

**operator** ([`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")) – The `SummedOp` to evolve.

**Return type**

[`OperatorBase`](qiskit.aqua.operators.OperatorBase "qiskit.aqua.operators.operator_base.OperatorBase")

**Returns**

The Operator approximating op\_sum’s evolution.

**Raises**

**TypeError** – A non-SummedOps Operator is passed into `convert`.

