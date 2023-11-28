<span id="qiskit-optimization-problems-variable" />

# qiskit.optimization.problems.Variable

<span id="undefined" />

`Variable(quadratic_program, name, lowerbound=0, upperbound=1e+20, vartype=<VarType.CONTINUOUS: 0>)`

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

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if lowerbound is greater than upperbound.

<span id="undefined" />

`__init__(quadratic_program, name, lowerbound=0, upperbound=1e+20, vartype=<VarType.CONTINUOUS: 0>)`

Creates a new Variable.

The variables is exposed by the top-level QuadraticProgram class in QuadraticProgram.variables. This constructor is not meant to be used externally.

**Parameters**

*   **quadratic\_program** (`Any`) – The parent QuadraticProgram.
*   **name** (`str`) – The variable name.
*   **lowerbound** (`Union`\[`float`, `int`]) – The variable lowerbound.
*   **upperbound** (`Union`\[`float`, `int`]) – The variable upperbound.
*   **vartype** (`VarType`) – The variable type.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError#qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – if lowerbound is greater than upperbound.

## Methods

|                                                                                                                                                |                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`__init__`](#qiskit.optimization.problems.Variable.__init__ "qiskit.optimization.problems.Variable.__init__")(quadratic\_program, name\[, …]) | Creates a new Variable.                         |
| [`as_tuple`](#qiskit.optimization.problems.Variable.as_tuple "qiskit.optimization.problems.Variable.as_tuple")()                               | Returns a tuple corresponding to this variable. |

## Attributes

|                                                                                                                                           |                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`lowerbound`](#qiskit.optimization.problems.Variable.lowerbound "qiskit.optimization.problems.Variable.lowerbound")                      | Returns the lowerbound of the variable. |
| [`name`](#qiskit.optimization.problems.Variable.name "qiskit.optimization.problems.Variable.name")                                        | Returns the name of the variable.       |
| [`quadratic_program`](#qiskit.optimization.problems.Variable.quadratic_program "qiskit.optimization.problems.Variable.quadratic_program") | Returns the parent QuadraticProgram.    |
| [`upperbound`](#qiskit.optimization.problems.Variable.upperbound "qiskit.optimization.problems.Variable.upperbound")                      | Returns the upperbound of the variable. |
| [`vartype`](#qiskit.optimization.problems.Variable.vartype "qiskit.optimization.problems.Variable.vartype")                               | Returns the type of the variable.       |

<span id="undefined" />

### Type

alias of `VarType`

<span id="undefined" />

`as_tuple()`

Returns a tuple corresponding to this variable.

**Return type**

`Tuple`\[`str`, `Union`\[`float`, `int`], `Union`\[`float`, `int`], `VarType`]

**Returns**

A tuple corresponding to this variable consisting of name, lowerbound, upperbound and variable type.

<span id="undefined" />

`property lowerbound`

Returns the lowerbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The lower bound of the variable.

<span id="undefined" />

`property name`

Returns the name of the variable.

**Return type**

`str`

**Returns**

The name of the variable.

<span id="undefined" />

`property quadratic_program`

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

<span id="undefined" />

`property upperbound`

Returns the upperbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The upperbound of the variable.

<span id="undefined" />

`property vartype`

Returns the type of the variable.

**Return type**

`VarType`

**Returns**

The variable type.
