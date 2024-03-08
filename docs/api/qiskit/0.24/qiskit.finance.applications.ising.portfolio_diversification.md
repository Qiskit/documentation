---
title: portfolio_diversification
description: API reference for qiskit.finance.applications.ising.portfolio_diversification
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.finance.applications.ising.portfolio_diversification
---

<span id="module-qiskit.finance.applications.ising.portfolio_diversification" />

<span id="qiskit-finance-applications-ising-portfolio-diversification" />

# qiskit.finance.applications.ising.portfolio\_diversification

portfolio diversification

**Functions**

|                                                                                                                                                                                                                                                           |                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`get_operator`](#qiskit.finance.applications.ising.portfolio_diversification.get_operator "qiskit.finance.applications.ising.portfolio_diversification.get_operator")(rho, n, q)                                                                         | Converts an instance of portfolio optimization into a list of Paulis.                                                         |
| [`get_portfoliodiversification_solution`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution")(rho, …) | Tries to obtain a feasible solution (in vector form) of an instance of portfolio diversification from the results dictionary. |
| [`get_portfoliodiversification_value`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value")(rho, n, …)       | Evaluates an objective function of an instance of portfolio diversification and its solution (in vector form).                |

### get\_operator

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_operator" />

`get_operator(rho, n, q)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/finance/applications/ising/portfolio_diversification.py "view source code")

Converts an instance of portfolio optimization into a list of Paulis.

**Parameters**

*   **rho** (`ndarray`) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (`int`) – the number of assets.
*   **q** (`int`) – the number of clusters of assets to output.

**Return type**

`WeightedPauliOperator`

**Returns**

operator for the Hamiltonian

### get\_portfoliodiversification\_solution

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution" />

`get_portfoliodiversification_solution(rho, n, q, result)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/finance/applications/ising/portfolio_diversification.py "view source code")

Tries to obtain a feasible solution (in vector form) of an instance of portfolio diversification from the results dictionary.

**Parameters**

*   **rho** (`ndarray`) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (`int`) – the number of assets.
*   **q** (`int`) – the number of clusters of assets to output.
*   **result** (`MinimumEigensolverResult`) – a result obtained by QAOA.run or VQE.run containing key ‘eigvecs’.

**Return type**

`ndarray`

**Returns**

a vector describing the solution.

### get\_portfoliodiversification\_value

<span id="qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value" />

`get_portfoliodiversification_value(rho, n, q, x_state)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/finance/applications/ising/portfolio_diversification.py "view source code")

Evaluates an objective function of an instance of portfolio diversification and its solution (in vector form).

**Parameters**

*   **rho** (`ndarray`) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (`int`) – the number of assets.
*   **q** (`int`) – the number of clusters of assets to output.
*   **x\_state** (`ndarray`) – a vector describing the solution.

**Return type**

`float`

**Returns**

cost of the solution.

