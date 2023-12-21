# Variable

`Variable(quadratic_program, name, lowerbound=0, upperbound=1e+20, vartype=<VarType.CONTINUOUS: 0>)`

Bases: `qiskit.optimization.problems.quadratic_program_element.QuadraticProgramElement`

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

## Methods

|                                                                                                                                                              |                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| [`as_tuple`](qiskit.optimization.problems.Variable.as_tuple#qiskit.optimization.problems.Variable.as_tuple "qiskit.optimization.problems.Variable.as_tuple") | Returns a tuple corresponding to this variable. |

## Attributes

### lowerbound

Returns the lowerbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The lower bound of the variable.

### name

Returns the name of the variable.

**Return type**

`str`

**Returns**

The name of the variable.

### quadratic\_program

Returns the parent QuadraticProgram.

**Return type**

`Any`

**Returns**

The parent QuadraticProgram.

### upperbound

Returns the upperbound of the variable.

**Return type**

`Union`\[`float`, `int`]

**Returns**

The upperbound of the variable.

### vartype

Returns the type of the variable.

**Return type**

`VarType`

**Returns**

The variable type.
