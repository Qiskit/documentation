<span id="qiskit-optimization-applications-ising-clique" />

# qiskit.optimization.applications.ising.clique

Convert clique instances into Pauli list

Deal with Gset format. See [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/)

## Functions

|                                   |                                        |
| --------------------------------- | -------------------------------------- |
| `get_graph_solution`(x)           | Get graph solution from binary string. |
| `get_operator`(weight\_matrix, K) | Generate Hamiltonian for the clique.   |
| `satisfy_or_not`(x, w, K)         | Compute the value of a cut.            |
