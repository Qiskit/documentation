# QuadraticProgram

<span id="undefined" />

`QuadraticProgram(name='')`

Bases: `object`

Quadratically Constrained Quadratic Program representation.

This representation supports inequality and equality constraints, as well as continuous, binary, and integer variables.

**Parameters**

**name** (`str`) – The name of the quadratic program.

## Methods

|                                                                                                                                                                                                                                                                          |                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [`binary_var`](qiskit.optimization.problems.QuadraticProgram.binary_var#qiskit.optimization.problems.QuadraticProgram.binary_var "qiskit.optimization.problems.QuadraticProgram.binary_var")                                                                             | Adds a binary variable to the quadratic program.                                                                    |
| [`binary_var_dict`](qiskit.optimization.problems.QuadraticProgram.binary_var_dict#qiskit.optimization.problems.QuadraticProgram.binary_var_dict "qiskit.optimization.problems.QuadraticProgram.binary_var_dict")                                                         | Uses ‘var\_dict’ to construct a dictionary of binary variables                                                      |
| [`binary_var_list`](qiskit.optimization.problems.QuadraticProgram.binary_var_list#qiskit.optimization.problems.QuadraticProgram.binary_var_list "qiskit.optimization.problems.QuadraticProgram.binary_var_list")                                                         | Uses ‘var\_list’ to construct a list of binary variables                                                            |
| [`clear`](qiskit.optimization.problems.QuadraticProgram.clear#qiskit.optimization.problems.QuadraticProgram.clear "qiskit.optimization.problems.QuadraticProgram.clear")                                                                                                 | Clears the quadratic program, i.e., deletes all variables, constraints, the objective function as well as the name. |
| [`continuous_var`](qiskit.optimization.problems.QuadraticProgram.continuous_var#qiskit.optimization.problems.QuadraticProgram.continuous_var "qiskit.optimization.problems.QuadraticProgram.continuous_var")                                                             | Adds a continuous variable to the quadratic program.                                                                |
| [`continuous_var_dict`](qiskit.optimization.problems.QuadraticProgram.continuous_var_dict#qiskit.optimization.problems.QuadraticProgram.continuous_var_dict "qiskit.optimization.problems.QuadraticProgram.continuous_var_dict")                                         | Uses ‘var\_dict’ to construct a dictionary of continuous variables                                                  |
| [`continuous_var_list`](qiskit.optimization.problems.QuadraticProgram.continuous_var_list#qiskit.optimization.problems.QuadraticProgram.continuous_var_list "qiskit.optimization.problems.QuadraticProgram.continuous_var_list")                                         | Uses ‘var\_list’ to construct a list of continuous variables                                                        |
| [`export_as_lp_string`](qiskit.optimization.problems.QuadraticProgram.export_as_lp_string#qiskit.optimization.problems.QuadraticProgram.export_as_lp_string "qiskit.optimization.problems.QuadraticProgram.export_as_lp_string")                                         | Returns the quadratic program as a string of LP format.                                                             |
| [`from_docplex`](qiskit.optimization.problems.QuadraticProgram.from_docplex#qiskit.optimization.problems.QuadraticProgram.from_docplex "qiskit.optimization.problems.QuadraticProgram.from_docplex")                                                                     | Loads this quadratic program from a docplex model.                                                                  |
| [`from_ising`](qiskit.optimization.problems.QuadraticProgram.from_ising#qiskit.optimization.problems.QuadraticProgram.from_ising "qiskit.optimization.problems.QuadraticProgram.from_ising")                                                                             | Create a quadratic program from a qubit operator and a shift value.                                                 |
| [`get_feasibility_info`](qiskit.optimization.problems.QuadraticProgram.get_feasibility_info#qiskit.optimization.problems.QuadraticProgram.get_feasibility_info "qiskit.optimization.problems.QuadraticProgram.get_feasibility_info")                                     | Returns whether a solution is feasible or not along with the violations.                                            |
| [`get_linear_constraint`](qiskit.optimization.problems.QuadraticProgram.get_linear_constraint#qiskit.optimization.problems.QuadraticProgram.get_linear_constraint "qiskit.optimization.problems.QuadraticProgram.get_linear_constraint")                                 | Returns a linear constraint for a given name or index.                                                              |
| [`get_num_binary_vars`](qiskit.optimization.problems.QuadraticProgram.get_num_binary_vars#qiskit.optimization.problems.QuadraticProgram.get_num_binary_vars "qiskit.optimization.problems.QuadraticProgram.get_num_binary_vars")                                         | Returns the total number of binary variables.                                                                       |
| [`get_num_continuous_vars`](qiskit.optimization.problems.QuadraticProgram.get_num_continuous_vars#qiskit.optimization.problems.QuadraticProgram.get_num_continuous_vars "qiskit.optimization.problems.QuadraticProgram.get_num_continuous_vars")                         | Returns the total number of continuous variables.                                                                   |
| [`get_num_integer_vars`](qiskit.optimization.problems.QuadraticProgram.get_num_integer_vars#qiskit.optimization.problems.QuadraticProgram.get_num_integer_vars "qiskit.optimization.problems.QuadraticProgram.get_num_integer_vars")                                     | Returns the total number of integer variables.                                                                      |
| [`get_num_linear_constraints`](qiskit.optimization.problems.QuadraticProgram.get_num_linear_constraints#qiskit.optimization.problems.QuadraticProgram.get_num_linear_constraints "qiskit.optimization.problems.QuadraticProgram.get_num_linear_constraints")             | Returns the number of linear constraints.                                                                           |
| [`get_num_quadratic_constraints`](qiskit.optimization.problems.QuadraticProgram.get_num_quadratic_constraints#qiskit.optimization.problems.QuadraticProgram.get_num_quadratic_constraints "qiskit.optimization.problems.QuadraticProgram.get_num_quadratic_constraints") | Returns the number of quadratic constraints.                                                                        |
| [`get_num_vars`](qiskit.optimization.problems.QuadraticProgram.get_num_vars#qiskit.optimization.problems.QuadraticProgram.get_num_vars "qiskit.optimization.problems.QuadraticProgram.get_num_vars")                                                                     | Returns the total number of variables or the number of variables of the specified type.                             |
| [`get_quadratic_constraint`](qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint#qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint "qiskit.optimization.problems.QuadraticProgram.get_quadratic_constraint")                     | Returns a quadratic constraint for a given name or index.                                                           |
| [`get_variable`](qiskit.optimization.problems.QuadraticProgram.get_variable#qiskit.optimization.problems.QuadraticProgram.get_variable "qiskit.optimization.problems.QuadraticProgram.get_variable")                                                                     | Returns a variable for a given name or index.                                                                       |
| [`integer_var`](qiskit.optimization.problems.QuadraticProgram.integer_var#qiskit.optimization.problems.QuadraticProgram.integer_var "qiskit.optimization.problems.QuadraticProgram.integer_var")                                                                         | Adds an integer variable to the quadratic program.                                                                  |
| [`integer_var_dict`](qiskit.optimization.problems.QuadraticProgram.integer_var_dict#qiskit.optimization.problems.QuadraticProgram.integer_var_dict "qiskit.optimization.problems.QuadraticProgram.integer_var_dict")                                                     | Uses ‘var\_dict’ to construct a dictionary of integer variables                                                     |
| [`integer_var_list`](qiskit.optimization.problems.QuadraticProgram.integer_var_list#qiskit.optimization.problems.QuadraticProgram.integer_var_list "qiskit.optimization.problems.QuadraticProgram.integer_var_list")                                                     | Uses ‘var\_list’ to construct a dictionary of integer variables                                                     |
| [`is_feasible`](qiskit.optimization.problems.QuadraticProgram.is_feasible#qiskit.optimization.problems.QuadraticProgram.is_feasible "qiskit.optimization.problems.QuadraticProgram.is_feasible")                                                                         | Returns whether a solution is feasible or not.                                                                      |
| [`linear_constraint`](qiskit.optimization.problems.QuadraticProgram.linear_constraint#qiskit.optimization.problems.QuadraticProgram.linear_constraint "qiskit.optimization.problems.QuadraticProgram.linear_constraint")                                                 | Adds a linear equality constraint to the quadratic program of the form:                                             |
| [`maximize`](qiskit.optimization.problems.QuadraticProgram.maximize#qiskit.optimization.problems.QuadraticProgram.maximize "qiskit.optimization.problems.QuadraticProgram.maximize")                                                                                     | Sets a quadratic objective to be maximized.                                                                         |
| [`minimize`](qiskit.optimization.problems.QuadraticProgram.minimize#qiskit.optimization.problems.QuadraticProgram.minimize "qiskit.optimization.problems.QuadraticProgram.minimize")                                                                                     | Sets a quadratic objective to be minimized.                                                                         |
| [`pprint_as_string`](qiskit.optimization.problems.QuadraticProgram.pprint_as_string#qiskit.optimization.problems.QuadraticProgram.pprint_as_string "qiskit.optimization.problems.QuadraticProgram.pprint_as_string")                                                     | DEPRECATED Returns the quadratic program as a string in Docplex’s pretty print format.                              |
| [`prettyprint`](qiskit.optimization.problems.QuadraticProgram.prettyprint#qiskit.optimization.problems.QuadraticProgram.prettyprint "qiskit.optimization.problems.QuadraticProgram.prettyprint")                                                                         | DEPRECATED Pretty prints the quadratic program to a given output stream (None = default).                           |
| [`quadratic_constraint`](qiskit.optimization.problems.QuadraticProgram.quadratic_constraint#qiskit.optimization.problems.QuadraticProgram.quadratic_constraint "qiskit.optimization.problems.QuadraticProgram.quadratic_constraint")                                     | Adds a quadratic equality constraint to the quadratic program of the form:                                          |
| [`read_from_lp_file`](qiskit.optimization.problems.QuadraticProgram.read_from_lp_file#qiskit.optimization.problems.QuadraticProgram.read_from_lp_file "qiskit.optimization.problems.QuadraticProgram.read_from_lp_file")                                                 | Loads the quadratic program from a LP file.                                                                         |
| [`remove_linear_constraint`](qiskit.optimization.problems.QuadraticProgram.remove_linear_constraint#qiskit.optimization.problems.QuadraticProgram.remove_linear_constraint "qiskit.optimization.problems.QuadraticProgram.remove_linear_constraint")                     | Remove a linear constraint                                                                                          |
| [`remove_quadratic_constraint`](qiskit.optimization.problems.QuadraticProgram.remove_quadratic_constraint#qiskit.optimization.problems.QuadraticProgram.remove_quadratic_constraint "qiskit.optimization.problems.QuadraticProgram.remove_quadratic_constraint")         | Remove a quadratic constraint                                                                                       |
| [`substitute_variables`](qiskit.optimization.problems.QuadraticProgram.substitute_variables#qiskit.optimization.problems.QuadraticProgram.substitute_variables "qiskit.optimization.problems.QuadraticProgram.substitute_variables")                                     | Substitutes variables with constants or other variables.                                                            |
| [`to_docplex`](qiskit.optimization.problems.QuadraticProgram.to_docplex#qiskit.optimization.problems.QuadraticProgram.to_docplex "qiskit.optimization.problems.QuadraticProgram.to_docplex")                                                                             | Returns a docplex model corresponding to this quadratic program.                                                    |
| [`to_ising`](qiskit.optimization.problems.QuadraticProgram.to_ising#qiskit.optimization.problems.QuadraticProgram.to_ising "qiskit.optimization.problems.QuadraticProgram.to_ising")                                                                                     | Return the Ising Hamiltonian of this problem.                                                                       |
| [`write_to_lp_file`](qiskit.optimization.problems.QuadraticProgram.write_to_lp_file#qiskit.optimization.problems.QuadraticProgram.write_to_lp_file "qiskit.optimization.problems.QuadraticProgram.write_to_lp_file")                                                     | Writes the quadratic program to an LP file.                                                                         |

## Attributes

<span id="undefined" />

### linear\_constraints

Returns the list of linear constraints of the quadratic program.

**Return type**

`List`\[`LinearConstraint`]

**Returns**

List of linear constraints.

<span id="undefined" />

### linear\_constraints\_index

Returns the dictionary that maps the name of a linear constraint to its index.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

The linear constraint index dictionary.

<span id="undefined" />

### name

Returns the name of the quadratic program.

**Return type**

`str`

**Returns**

The name of the quadratic program.

<span id="undefined" />

### objective

Returns the quadratic objective.

**Return type**

`QuadraticObjective`

**Returns**

The quadratic objective.

<span id="undefined" />

### quadratic\_constraints

Returns the list of quadratic constraints of the quadratic program.

**Return type**

`List`\[`QuadraticConstraint`]

**Returns**

List of quadratic constraints.

<span id="undefined" />

### quadratic\_constraints\_index

Returns the dictionary that maps the name of a quadratic constraint to its index.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

The quadratic constraint index dictionary.

<span id="undefined" />

### status

Status of the quadratic program. It can be infeasible due to variable substitution.

**Return type**

`QuadraticProgramStatus`

**Returns**

The status of the quadratic program

<span id="undefined" />

### variables

Returns the list of variables of the quadratic program.

**Return type**

`List`\[`Variable`]

**Returns**

List of variables.

<span id="undefined" />

### variables\_index

Returns the dictionary that maps the name of a variable to its index.

**Return type**

`Dict`\[`str`, `int`]

**Returns**

The variable index dictionary.
