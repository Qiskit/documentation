---
title: Trotter
description: API reference for qiskit.opflow.evolutions.Trotter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Trotter
---

# Trotter

<span id="qiskit.opflow.evolutions.Trotter" />

`Trotter(reps=1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/opflow/evolutions/trotterizations/trotter.py "view source code")

Bases: [`qiskit.opflow.evolutions.trotterizations.suzuki.Suzuki`](qiskit.opflow.evolutions.Suzuki "qiskit.opflow.evolutions.trotterizations.suzuki.Suzuki")

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Attributes

<span id="qiskit.opflow.evolutions.Trotter.order" />

### order

returns order

**Return type**

`int`

<span id="qiskit.opflow.evolutions.Trotter.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

