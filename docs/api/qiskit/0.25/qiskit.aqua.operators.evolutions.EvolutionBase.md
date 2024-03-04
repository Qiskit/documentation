---
title: EvolutionBase
description: API reference for qiskit.aqua.operators.evolutions.EvolutionBase
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.operators.evolutions.EvolutionBase
---

# qiskit.aqua.operators.evolutions.EvolutionBase

<span id="qiskit.aqua.operators.evolutions.EvolutionBase" />

`EvolutionBase` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/aqua/operators/evolutions/evolution_base.py "view source code")

A base for Evolution converters. Evolutions are converters which traverse an Operator tree, replacing any `EvolvedOp` e with a Schrodinger equation-style evolution `CircuitOp` equalling or approximating the matrix exponential of -i \* the Operator contained inside (e.primitive). The Evolutions are essentially implementations of Hamiltonian Simulation algorithms, including various methods for Trotterization.

### \_\_init\_\_

<span id="qiskit.aqua.operators.evolutions.EvolutionBase.__init__" />

`__init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                         |                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.operators.evolutions.EvolutionBase.__init__ "qiskit.aqua.operators.evolutions.EvolutionBase.__init__")()      | Initialize self.                                                                                  |
| [`convert`](#qiskit.aqua.operators.evolutions.EvolutionBase.convert "qiskit.aqua.operators.evolutions.EvolutionBase.convert")(operator) | Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`. |

### convert

<span id="qiskit.aqua.operators.evolutions.EvolutionBase.convert" />

`convert(operator)`

Traverse the operator, replacing any `EvolutionOps` with their equivalent evolution `CircuitOps`.

> **Args:**
>
> operator: The Operator to convert.

**Return type**

`OperatorBase`

**Returns**

The converted Operator, with `EvolutionOps` replaced by `CircuitOps`.

