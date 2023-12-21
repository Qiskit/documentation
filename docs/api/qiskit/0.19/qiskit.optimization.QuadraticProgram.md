---
title: QuadraticProgram
description: API reference for qiskit.optimization.QuadraticProgram
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.QuadraticProgram
---

# QuadraticProgram

<span id="qiskit.optimization.QuadraticProgram" />

`QuadraticProgram(name='')`

Quadratically Constrained Quadratic Program representation.

This representation supports inequality and equality constraints, as well as continuous, binary, and integer variables.

**Parameters**

**name** (`str`) – The name of the quadratic program.

## Attributes

|                                                                                                                                                                                       |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`QuadraticProgram.linear_constraints`](qiskit.optimization.QuadraticProgram.linear_constraints "qiskit.optimization.QuadraticProgram.linear_constraints")                            | Returns the list of linear constraints of the quadratic program.                  |
| [`QuadraticProgram.linear_constraints_index`](qiskit.optimization.QuadraticProgram.linear_constraints_index "qiskit.optimization.QuadraticProgram.linear_constraints_index")          | Returns the dictionary that maps the name of a linear constraint to its index.    |
| [`QuadraticProgram.name`](qiskit.optimization.QuadraticProgram.name "qiskit.optimization.QuadraticProgram.name")                                                                      | Returns the name of the quadratic program.                                        |
| [`QuadraticProgram.objective`](qiskit.optimization.QuadraticProgram.objective "qiskit.optimization.QuadraticProgram.objective")                                                       | Returns the quadratic objective.                                                  |
| [`QuadraticProgram.quadratic_constraints`](qiskit.optimization.QuadraticProgram.quadratic_constraints "qiskit.optimization.QuadraticProgram.quadratic_constraints")                   | Returns the list of quadratic constraints of the quadratic program.               |
| [`QuadraticProgram.quadratic_constraints_index`](qiskit.optimization.QuadraticProgram.quadratic_constraints_index "qiskit.optimization.QuadraticProgram.quadratic_constraints_index") | Returns the dictionary that maps the name of a quadratic constraint to its index. |
| [`QuadraticProgram.status`](qiskit.optimization.QuadraticProgram.status "qiskit.optimization.QuadraticProgram.status")                                                                | Status of the quadratic program.                                                  |
| [`QuadraticProgram.variables`](qiskit.optimization.QuadraticProgram.variables "qiskit.optimization.QuadraticProgram.variables")                                                       | Returns the list of variables of the quadratic program.                           |
| [`QuadraticProgram.variables_index`](qiskit.optimization.QuadraticProgram.variables_index "qiskit.optimization.QuadraticProgram.variables_index")                                     | Returns the dictionary that maps the name of a variable to its index.             |

## Methods

|                                                                                                                                                                                               |                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`QuadraticProgram.binary_var`](qiskit.optimization.QuadraticProgram.binary_var "qiskit.optimization.QuadraticProgram.binary_var")(\[name])                                                   | Adds a binary variable to the quadratic program.                                                                    |
| [`QuadraticProgram.clear`](qiskit.optimization.QuadraticProgram.clear "qiskit.optimization.QuadraticProgram.clear")()                                                                         | Clears the quadratic program, i.e., deletes all variables, constraints, the objective function as well as the name. |
| [`QuadraticProgram.continuous_var`](qiskit.optimization.QuadraticProgram.continuous_var "qiskit.optimization.QuadraticProgram.continuous_var")(\[…])                                          | Adds a continuous variable to the quadratic program.                                                                |
| [`QuadraticProgram.export_as_lp_string`](qiskit.optimization.QuadraticProgram.export_as_lp_string "qiskit.optimization.QuadraticProgram.export_as_lp_string")()                               | Returns the quadratic program as a string of LP format.                                                             |
| [`QuadraticProgram.from_docplex`](qiskit.optimization.QuadraticProgram.from_docplex "qiskit.optimization.QuadraticProgram.from_docplex")(model)                                               | Loads this quadratic program from a docplex model.                                                                  |
| [`QuadraticProgram.get_linear_constraint`](qiskit.optimization.QuadraticProgram.get_linear_constraint "qiskit.optimization.QuadraticProgram.get_linear_constraint")(i)                        | Returns a linear constraint for a given name or index.                                                              |
| [`QuadraticProgram.get_num_binary_vars`](qiskit.optimization.QuadraticProgram.get_num_binary_vars "qiskit.optimization.QuadraticProgram.get_num_binary_vars")()                               | Returns the total number of binary variables.                                                                       |
| [`QuadraticProgram.get_num_continuous_vars`](qiskit.optimization.QuadraticProgram.get_num_continuous_vars "qiskit.optimization.QuadraticProgram.get_num_continuous_vars")()                   | Returns the total number of continuous variables.                                                                   |
| [`QuadraticProgram.get_num_integer_vars`](qiskit.optimization.QuadraticProgram.get_num_integer_vars "qiskit.optimization.QuadraticProgram.get_num_integer_vars")()                            | Returns the total number of integer variables.                                                                      |
| [`QuadraticProgram.get_num_linear_constraints`](qiskit.optimization.QuadraticProgram.get_num_linear_constraints "qiskit.optimization.QuadraticProgram.get_num_linear_constraints")()          | Returns the number of linear constraints.                                                                           |
| [`QuadraticProgram.get_num_quadratic_constraints`](qiskit.optimization.QuadraticProgram.get_num_quadratic_constraints "qiskit.optimization.QuadraticProgram.get_num_quadratic_constraints")() | Returns the number of quadratic constraints.                                                                        |
| [`QuadraticProgram.get_num_vars`](qiskit.optimization.QuadraticProgram.get_num_vars "qiskit.optimization.QuadraticProgram.get_num_vars")(\[vartype])                                          | Returns the total number of variables or the number of variables of the specified type.                             |
| [`QuadraticProgram.get_quadratic_constraint`](qiskit.optimization.QuadraticProgram.get_quadratic_constraint "qiskit.optimization.QuadraticProgram.get_quadratic_constraint")(i)               | Returns a quadratic constraint for a given name or index.                                                           |
| [`QuadraticProgram.get_variable`](qiskit.optimization.QuadraticProgram.get_variable "qiskit.optimization.QuadraticProgram.get_variable")(i)                                                   | Returns a variable for a given name or index.                                                                       |
| [`QuadraticProgram.integer_var`](qiskit.optimization.QuadraticProgram.integer_var "qiskit.optimization.QuadraticProgram.integer_var")(\[lowerbound, …])                                       | Adds an integer variable to the quadratic program.                                                                  |
| [`QuadraticProgram.linear_constraint`](qiskit.optimization.QuadraticProgram.linear_constraint "qiskit.optimization.QuadraticProgram.linear_constraint")(\[linear, …])                         | Adds a linear equality constraint to the quadratic program of the form:                                             |
| [`QuadraticProgram.maximize`](qiskit.optimization.QuadraticProgram.maximize "qiskit.optimization.QuadraticProgram.maximize")(\[constant, …])                                                  | Sets a quadratic objective to be maximized.                                                                         |
| [`QuadraticProgram.minimize`](qiskit.optimization.QuadraticProgram.minimize "qiskit.optimization.QuadraticProgram.minimize")(\[constant, …])                                                  | Sets a quadratic objective to be minimized.                                                                         |
| [`QuadraticProgram.pprint_as_string`](qiskit.optimization.QuadraticProgram.pprint_as_string "qiskit.optimization.QuadraticProgram.pprint_as_string")()                                        | Returns the quadratic program as a string in Docplex’s pretty print format.                                         |
| [`QuadraticProgram.prettyprint`](qiskit.optimization.QuadraticProgram.prettyprint "qiskit.optimization.QuadraticProgram.prettyprint")(\[out])                                                 | Pretty prints the quadratic program to a given output stream (None = default).                                      |
| [`QuadraticProgram.quadratic_constraint`](qiskit.optimization.QuadraticProgram.quadratic_constraint "qiskit.optimization.QuadraticProgram.quadratic_constraint")(\[…])                        | Adds a quadratic equality constraint to the quadratic program of the form:                                          |
| [`QuadraticProgram.read_from_lp_file`](qiskit.optimization.QuadraticProgram.read_from_lp_file "qiskit.optimization.QuadraticProgram.read_from_lp_file")(filename)                             | Loads the quadratic program from a LP file.                                                                         |
| [`QuadraticProgram.remove_linear_constraint`](qiskit.optimization.QuadraticProgram.remove_linear_constraint "qiskit.optimization.QuadraticProgram.remove_linear_constraint")(i)               | Remove a linear constraint                                                                                          |
| [`QuadraticProgram.remove_quadratic_constraint`](qiskit.optimization.QuadraticProgram.remove_quadratic_constraint "qiskit.optimization.QuadraticProgram.remove_quadratic_constraint")(i)      | Remove a quadratic constraint                                                                                       |
| [`QuadraticProgram.substitute_variables`](qiskit.optimization.QuadraticProgram.substitute_variables "qiskit.optimization.QuadraticProgram.substitute_variables")(\[…])                        | Substitutes variables with constants or other variables.                                                            |
| [`QuadraticProgram.to_docplex`](qiskit.optimization.QuadraticProgram.to_docplex "qiskit.optimization.QuadraticProgram.to_docplex")()                                                          | Returns a docplex model corresponding to this quadratic program.                                                    |
| [`QuadraticProgram.write_to_lp_file`](qiskit.optimization.QuadraticProgram.write_to_lp_file "qiskit.optimization.QuadraticProgram.write_to_lp_file")(filename)                                | Writes the quadratic program to an LP file.                                                                         |

