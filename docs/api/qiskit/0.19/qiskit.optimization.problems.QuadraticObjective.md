---
title: QuadraticObjective
description: API reference for qiskit.optimization.problems.QuadraticObjective
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.QuadraticObjective
---

# QuadraticObjective

<span id="qiskit.optimization.problems.QuadraticObjective" />

`QuadraticObjective(quadratic_program, constant=0.0, linear=None, quadratic=None, sense=ObjSense.MINIMIZE)`

Representation of quadratic objective function of the form: constant + linear \* x + x \* quadratic \* x.

Constructs a quadratic objective function.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent quadratic program.
*   **constant** (`float`) – The constant offset of the objective.
*   **linear** (`Union`\[`ndarray`, `spmatrix`, `List`\[`float`], `Dict`\[`Union`\[`int`, `str`], `float`], `None`]) – The coefficients of the linear part of the objective.
*   **quadratic** (`Union`\[`ndarray`, `spmatrix`, `List`\[`List`\[`float`]], `Dict`\[`Tuple`\[`Union`\[`int`, `str`], `Union`\[`int`, `str`]], `float`], `None`]) – The coefficients of the quadratic part of the objective.
*   **sense** (`ObjSense`) – The optimization sense of the objective.

## Attributes

|                                                                                                                                                                                 |                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`QuadraticObjective.constant`](qiskit.optimization.problems.QuadraticObjective.constant "qiskit.optimization.problems.QuadraticObjective.constant")                            | Returns the constant part of the objective function.  |
| [`QuadraticObjective.linear`](qiskit.optimization.problems.QuadraticObjective.linear "qiskit.optimization.problems.QuadraticObjective.linear")                                  | Returns the linear part of the objective function.    |
| [`QuadraticObjective.quadratic`](qiskit.optimization.problems.QuadraticObjective.quadratic "qiskit.optimization.problems.QuadraticObjective.quadratic")                         | Returns the quadratic part of the objective function. |
| [`QuadraticObjective.quadratic_program`](qiskit.optimization.problems.QuadraticObjective.quadratic_program "qiskit.optimization.problems.QuadraticObjective.quadratic_program") | Returns the parent QuadraticProgram.                  |
| [`QuadraticObjective.sense`](qiskit.optimization.problems.QuadraticObjective.sense "qiskit.optimization.problems.QuadraticObjective.sense")                                     | Returns the sense of the objective function.          |

## Methods

|                                                                                                                                                         |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`QuadraticObjective.evaluate`](qiskit.optimization.problems.QuadraticObjective.evaluate "qiskit.optimization.problems.QuadraticObjective.evaluate")(x) | Evaluate the quadratic objective for given variable values. |

