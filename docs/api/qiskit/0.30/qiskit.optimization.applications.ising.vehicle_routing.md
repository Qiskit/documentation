<span id="qiskit-optimization-applications-ising-vehicle-routing" />

# qiskit.optimization.applications.ising.vehicle\_routing

Converts vehicle routing instances into a list of Paulis, and provides some related routines (extracting a solution, checking its objective function value).

**Functions**

|                                                   |                                                                              |
| ------------------------------------------------- | ---------------------------------------------------------------------------- |
| `get_operator`(instance, n, K)                    | Converts an instance of a vehicle routing problem into a list of Paulis.     |
| `get_vehiclerouting_cost`(instance, n, K, x\_sol) | Computes the cost of a solution to an instance of a vehicle routing problem. |
| `get_vehiclerouting_matrices`(instance, n, K)     | Constructs auxiliary matrices from a vehicle routing instance,               |
| `get_vehiclerouting_solution`(instance, n, K, …)  | Tries to obtain a feasible solution (in vector form) of an instance          |
