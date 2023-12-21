# qiskit.transpiler.CouplingMap.compute\_distance\_matrix

`CouplingMap.compute_distance_matrix()`

Compute the full distance matrix on pairs of nodes.

The distance map self.\_dist\_matrix is computed from the graph using all\_pairs\_shortest\_path\_length. This is normally handled internally by the [`distance_matrix`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap.distance_matrix "qiskit.transpiler.CouplingMap.distance_matrix") attribute or the [`distance()`](qiskit.transpiler.CouplingMap.distance#qiskit.transpiler.CouplingMap.distance "qiskit.transpiler.CouplingMap.distance") method but can be called if you’re accessing the distance matrix outside of those or want to pre-generate it.
