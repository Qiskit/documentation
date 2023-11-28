<span id="qiskit-optimization-applications-ising-exact-cover" />

# qiskit.optimization.applications.ising.exact\_cover

exact cover

## Functions

|                                                                                                                                                                                                                 |                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`check_solution_satisfiability`](#qiskit.optimization.applications.ising.exact_cover.check_solution_satisfiability "qiskit.optimization.applications.ising.exact_cover.check_solution_satisfiability")(sol, …) | check solution satisfiability                           |
| [`get_operator`](#qiskit.optimization.applications.ising.exact_cover.get_operator "qiskit.optimization.applications.ising.exact_cover.get_operator")(list\_of\_subsets)                                         | Construct the Hamiltonian for the exact solver problem. |
| [`get_solution`](#qiskit.optimization.applications.ising.exact_cover.get_solution "qiskit.optimization.applications.ising.exact_cover.get_solution")(x)                                                         | **param x**binary string as numpy array.                |

<span id="undefined" />

`check_solution_satisfiability(sol, list_of_subsets)`

check solution satisfiability

<span id="undefined" />

`get_operator(list_of_subsets)`

Construct the Hamiltonian for the exact solver problem.

<Admonition title="Note" type="note">
  Assumption: the union of the subsets contains all the elements to cover.

  The Hamiltonian is:

  sum\_\{each element e}\{(1-sum\_\{every subset\_i that contains e}\{Xi})^2},

  where Xi (Xi=1 or 0) means whether should include the subset i.
</Admonition>

**Parameters**

**list\_of\_subsets** (*list*) – list of lists (i.e., subsets)

**Returns**

operator for the Hamiltonian, a constant shift for the obj function.

**Return type**

tuple([WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator#qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator"), float)

<span id="undefined" />

`get_solution(x)`

**Parameters**

**x** (*numpy.ndarray*) – binary string as numpy array.

**Returns**

graph solution as binary numpy array.

**Return type**

numpy.ndarray
