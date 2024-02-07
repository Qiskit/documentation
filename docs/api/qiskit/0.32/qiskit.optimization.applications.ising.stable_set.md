<span id="qiskit-optimization-applications-ising-stable-set" />

# qiskit.optimization.applications.ising.stable\_set

Convert stable set instances into Pauli list. We read instances in the Gset format, see [https://web.stanford.edu/\~yyye/yyye/Gset/](https://web.stanford.edu/~yyye/yyye/Gset/) , for compatibility with the maxcut format, but the weights on the edges as they are not really used and are always assumed to be 1. The graph is represented by an adjacency matrix.

**Functions**

|                          |                                                             |
| ------------------------ | ----------------------------------------------------------- |
| `get_graph_solution`(x)  | Get graph solution from binary string.                      |
| `get_operator`(w)        | Generate Hamiltonian for the maximum stable set in a graph. |
| `stable_set_value`(x, w) | Compute the value of a stable set, and its feasibility.     |
