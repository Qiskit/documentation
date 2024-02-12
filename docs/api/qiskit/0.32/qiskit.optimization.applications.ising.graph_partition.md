<span id="qiskit-optimization-applications-ising-graph-partition" />

# qiskit.optimization.applications.ising.graph\_partition

Convert graph partitioning instances into Pauli list Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/)

**Functions**

|                                |                                                 |
| ------------------------------ | ----------------------------------------------- |
| `get_graph_solution`(x)        | Get graph solution from binary string.          |
| `get_operator`(weight\_matrix) | Generate Hamiltonian for the graph partitioning |
| `objective_value`(x, w)        | Compute the value of a cut.                     |
