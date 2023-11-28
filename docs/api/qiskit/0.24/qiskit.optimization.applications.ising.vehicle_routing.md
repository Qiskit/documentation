---
title: vehicle_routing
description: API reference for qiskit.optimization.applications.ising.vehicle_routing
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.optimization.applications.ising.vehicle_routing
---

<span id="module-qiskit.optimization.applications.ising.vehicle_routing" />

<span id="qiskit-optimization-applications-ising-vehicle-routing" />

# qiskit.optimization.applications.ising.vehicle\_routing

Converts vehicle routing instances into a list of Paulis, and provides some related routines (extracting a solution, checking its objective function value).

## Functions

|                                                                                                                                                                                                                              |                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [`get_operator`](#qiskit.optimization.applications.ising.vehicle_routing.get_operator "qiskit.optimization.applications.ising.vehicle_routing.get_operator")(instance, n, K)                                                 | Converts an instance of a vehicle routing problem into a list of Paulis.     |
| [`get_vehiclerouting_cost`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_cost "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_cost")(instance, n, K, x\_sol)        | Computes the cost of a solution to an instance of a vehicle routing problem. |
| [`get_vehiclerouting_matrices`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_matrices "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_matrices")(instance, n, K)    | Constructs auxiliary matrices from a vehicle routing instance,               |
| [`get_vehiclerouting_solution`](#qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_solution "qiskit.optimization.applications.ising.vehicle_routing.get_vehiclerouting_solution")(instance, n, K, …) | Tries to obtain a feasible solution (in vector form) of an instance          |

<span id="undefined" />

`get_operator(instance, n, K)`

Converts an instance of a vehicle routing problem into a list of Paulis.

**Parameters**

*   **instance** (`ndarray`) – a customers-to-customers distance matrix.
*   **n** (`int`) – the number of customers.
*   **K** (`int`) – the number of vehicles available.

**Return type**

`WeightedPauliOperator`

**Returns**

operator for the Hamiltonian.

<span id="undefined" />

`get_vehiclerouting_cost(instance, n, K, x_sol)`

Computes the cost of a solution to an instance of a vehicle routing problem.

**Parameters**

*   **instance** (`ndarray`) – a customers-to-customers distance matrix.
*   **n** (`int`) – the number of customers.
*   **K** (`int`) – the number of vehicles available.
*   **x\_sol** (`ndarray`) – a solution, i.e., a path, in its binary representation.

**Return type**

`float`

**Returns**

objective function value.

<span id="undefined" />

`get_vehiclerouting_matrices(instance, n, K)`

**Constructs auxiliary matrices from a vehicle routing instance,**

which represent the encoding into a binary quadratic program. This is used in the construction of the qubit ops and computation of the solution cost.

**Parameters**

*   **instance** (`ndarray`) – a customers-to-customers distance matrix.
*   **n** (`int`) – the number of customers.
*   **K** (`int`) – the number of vehicles available.

**Return type**

`Tuple`\[`ndarray`, `ndarray`, `float`]

**Returns**

a matrix defining the interactions between variables. a matrix defining the contribution from the individual variables. the constant offset.

<span id="undefined" />

`get_vehiclerouting_solution(instance, n, K, result)`

**Tries to obtain a feasible solution (in vector form) of an instance**

of vehicle routing from the results dictionary.

**Parameters**

*   **instance** (`ndarray`) – a customers-to-customers distance matrix.
*   **n** (`int`) – the number of customers.
*   **K** (`int`) – the number of vehicles available.
*   **result** (`MinimumEigensolverResult`) – a result obtained by QAOA.run or VQE.run.

**Return type**

`ndarray`

**Returns**

a solution, i.e., a path, in its binary representation.

**#TODO: support statevector simulation, results should be a statevector or counts format, not**

a result from algorithm run

