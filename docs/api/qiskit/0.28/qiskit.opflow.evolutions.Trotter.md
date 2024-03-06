---
title: Trotter
description: API reference for qiskit.opflow.evolutions.Trotter
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.opflow.evolutions.Trotter
---

# qiskit.opflow\.evolutions.Trotter

<span id="qiskit.opflow.evolutions.Trotter" />

`Trotter(reps=1)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/opflow/evolutions/trotterizations/trotter.py "view source code")

Simple Trotter expansion, composing the evolution circuits of each Operator in the sum together `reps` times and dividing the evolution time of each by `reps`.

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

### \_\_init\_\_

<span id="qiskit.opflow.evolutions.Trotter.__init__" />

`__init__(reps=1)`

**Parameters**

**reps** (`int`) – The number of times to repeat the Trotterization circuit.

## Methods

|                                                                                                               |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.opflow.evolutions.Trotter.__init__ "qiskit.opflow.evolutions.Trotter.__init__")(\[reps]) | **type reps**`int`                                                                                              |
| [`convert`](#qiskit.opflow.evolutions.Trotter.convert "qiskit.opflow.evolutions.Trotter.convert")(operator)   | Convert a `SummedOp` into a `ComposedOp` or `CircuitOp` representing an approximation of e^-i\*\`\`op\_sum\`\`. |

## Attributes

|                                                                                             |                                                                                               |
| ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [`order`](#qiskit.opflow.evolutions.Trotter.order "qiskit.opflow.evolutions.Trotter.order") | returns order                                                                                 |
| [`reps`](#qiskit.opflow.evolutions.Trotter.reps "qiskit.opflow.evolutions.Trotter.reps")    | The number of repetitions to use in the Trotterization, improving the approximation accuracy. |

### convert

<span id="qiskit.opflow.evolutions.Trotter.convert" />

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

<span id="qiskit.opflow.evolutions.Trotter.order" />

`property order`

returns order

**Return type**

`int`

### reps

<span id="qiskit.opflow.evolutions.Trotter.reps" />

`property reps`

The number of repetitions to use in the Trotterization, improving the approximation accuracy.

**Return type**

`int`

