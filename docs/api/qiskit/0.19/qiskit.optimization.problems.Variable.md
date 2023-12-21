---
title: Variable
description: API reference for qiskit.optimization.problems.Variable
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.Variable
---

# Variable

<span id="qiskit.optimization.problems.Variable" />

`Variable(quadratic_program, name, lowerbound=0, upperbound=1e+20, vartype=VarType.CONTINUOUS)`

Representation of a variable.

Creates a new Variable.

The variables is exposed by the top-level QuadraticProgram class in QuadraticProgram.variables. This constructor is not meant to be used externally.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The variable name.
*   **lowerbound** (`Union`\[`float`, `int`]) – The variable lowerbound.
*   **upperbound** (`Union`\[`float`, `int`]) – The variable upperbound.
*   **vartype** (`VarType`) – The variable type.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if lowerbound is greater than upperbound.

## Attributes

|                                                                                                                                                   |                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`Variable.lowerbound`](qiskit.optimization.problems.Variable.lowerbound "qiskit.optimization.problems.Variable.lowerbound")                      | Returns the lowerbound of the variable. |
| [`Variable.name`](qiskit.optimization.problems.Variable.name "qiskit.optimization.problems.Variable.name")                                        | Returns the name of the variable.       |
| [`Variable.quadratic_program`](qiskit.optimization.problems.Variable.quadratic_program "qiskit.optimization.problems.Variable.quadratic_program") | Returns the parent QuadraticProgram.    |
| [`Variable.upperbound`](qiskit.optimization.problems.Variable.upperbound "qiskit.optimization.problems.Variable.upperbound")                      | Returns the upperbound of the variable. |
| [`Variable.vartype`](qiskit.optimization.problems.Variable.vartype "qiskit.optimization.problems.Variable.vartype")                               | Returns the type of the variable.       |

## Methods

|                                                                                                                          |                                                 |
| ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`Variable.as_tuple`](qiskit.optimization.problems.Variable.as_tuple "qiskit.optimization.problems.Variable.as_tuple")() | Returns a tuple corresponding to this variable. |

