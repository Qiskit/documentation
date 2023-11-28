---
title: get_operator
description: API reference for qiskit.finance.applications.ising.portfolio_diversification.get_operator
in_page_toc_min_heading_level: 1
python_api_type: function
python_api_name: qiskit.finance.applications.ising.portfolio_diversification.get_operator
---

<span id="qiskit-finance-applications-ising-portfolio-diversification" />

# qiskit.finance.applications.ising.portfolio\_diversification

portfolio diversification

## Functions

|                                                                                                                                                                                                                                                           |                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`get_operator`](#qiskit.finance.applications.ising.portfolio_diversification.get_operator "qiskit.finance.applications.ising.portfolio_diversification.get_operator")(rho, n, q)                                                                         | Converts an instance of portfolio optimization into a list of Paulis.                                                         |
| [`get_portfoliodiversification_solution`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution")(rho, …) | Tries to obtain a feasible solution (in vector form) of an instance of portfolio diversification from the results dictionary. |
| [`get_portfoliodiversification_value`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value")(rho, n, …)       | Evaluates an objective function of an instance of portfolio diversification and its solution (in vector form).                |

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_operator" />

`get_operator(rho, n, q)`

Converts an instance of portfolio optimization into a list of Paulis.

**Parameters**

*   **rho** (*numpy.ndarray*) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (*integer*) – the number of assets.
*   **q** (*integer*) – the number of clusters of assets to output.

**Returns**

operator for the Hamiltonian

**Return type**

[WeightedPauliOperator](qiskit.aqua.operators.legacy.WeightedPauliOperator "qiskit.aqua.operators.legacy.WeightedPauliOperator")

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution" />

`get_portfoliodiversification_solution(rho, n, q, result)`

Tries to obtain a feasible solution (in vector form) of an instance of portfolio diversification from the results dictionary.

**Parameters**

*   **rho** (*numpy.ndarray*) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (*integer*) – the number of assets.
*   **q** (*integer*) – the number of clusters of assets to output.
*   **result** (*dictionary*) – a dictionary obtained by QAOA.run or VQE.run containing key ‘eigvecs’.

**Returns**

a vector describing the solution.

**Return type**

numpy.ndarray

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value" />

`get_portfoliodiversification_value(rho, n, q, x_state)`

Evaluates an objective function of an instance of portfolio diversification and its solution (in vector form).

**Parameters**

*   **rho** (*numpy.ndarray*) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (*integer*) – the number of assets.
*   **q** (*integer*) – the number of clusters of assets to output.
*   **x\_state** (*numpy.ndarray*) – a vector describing the solution.

**Returns**

cost of the solution.

**Return type**

float

