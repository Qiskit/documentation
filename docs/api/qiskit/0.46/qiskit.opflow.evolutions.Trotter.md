---
title: Trotter
description: API reference for qiskit.opflow.evolutions.Trotter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Trotter
---

# Trotter

<span id="qiskit.opflow.evolutions.Trotter" />

`qiskit.opflow.evolutions.Trotter(reps=1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/opflow/evolutions/trotterizations/trotter.py "view source code")

Bases: [`Suzuki`](qiskit.opflow.evolutions.Suzuki "qiskit.opflow.evolutions.trotterizations.suzuki.Suzuki")

Deprecated: Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

<Admonition title="Deprecated since version 0.24.0" type="danger">
  The class `qiskit.opflow.evolutions.trotterizations.trotter.Trotter` is deprecated as of qiskit-terra 0.24.0. It will be removed in the Qiskit 1.0 release. For code migration guidelines, visit [https://qisk.it/opflow\_migration](https://qisk.it/opflow_migration).
</Admonition>

**Parameters**

**reps** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The number of times to repeat the Trotterization circuit.

## Attributes

<span id="qiskit.opflow.evolutions.Trotter.order" />

### order

returns order

<span id="qiskit.opflow.evolutions.Trotter.reps" />

### reps

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

