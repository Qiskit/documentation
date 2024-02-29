---
title: Variable
description: API reference for qiskit.optimization.problems.Variable
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.problems.Variable
---

# Variable

<span id="qiskit.optimization.problems.Variable" />

`Variable(quadratic_program, name, lowerbound=0, upperbound=1e+20, vartype=VarType.CONTINUOUS)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.7/qiskit/optimization/problems/variable.py "view source code")

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

### lowerbound

<span id="qiskit.optimization.problems.Variable.lowerbound" />

`Union[float, int]`

Returns the lowerbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The lower bound of the variable.

### name

<span id="qiskit.optimization.problems.Variable.name" />

`str`

Returns the name of the variable.

**Return type**

`str`

**Returns**

The name of the variable.

### quadratic\_program

<span id="qiskit.optimization.problems.Variable.quadratic_program" />

`Any`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

### upperbound

<span id="qiskit.optimization.problems.Variable.upperbound" />

`Union[float, int]`

Returns the upperbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The upperbound of the variable.

### vartype

<span id="qiskit.optimization.problems.Variable.vartype" />

`qiskit.optimization.problems.variable.VarType`

Returns the type of the variable.

**Return type**

`VarType`

**Returns**

The variable type.

## Methods

### as\_tuple

<span id="qiskit.optimization.problems.Variable.as_tuple" />

`Variable.as_tuple()`

Returns a tuple corresponding to this variable.

**Return type**

`Tuple`\[`str`, `Union`\[`float`, `int`], `Union`\[`float`, `int`], `VarType`]

**Returns**

A tuple corresponding to this variable consisting of name, lowerbound, upperbound and variable type.

