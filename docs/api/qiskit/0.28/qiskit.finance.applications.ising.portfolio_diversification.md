<span id="qiskit-finance-applications-ising-portfolio-diversification" />

# qiskit.finance.applications.ising.portfolio\_diversification

portfolio diversification

## Functions

|                                                                                                                                                                                                                                                           |                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`get_operator`](#qiskit.finance.applications.ising.portfolio_diversification.get_operator "qiskit.finance.applications.ising.portfolio_diversification.get_operator")(rho, n, q)                                                                         | Converts an instance of portfolio optimization into a list of Paulis.                                                         |
| [`get_portfoliodiversification_solution`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_solution")(rho, …) | Tries to obtain a feasible solution (in vector form) of an instance of portfolio diversification from the results dictionary. |
| [`get_portfoliodiversification_value`](#qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value "qiskit.finance.applications.ising.portfolio_diversification.get_portfoliodiversification_value")(rho, n, …)       | Evaluates an objective function of an instance of portfolio diversification and its solution (in vector form).                |

<span id="undefined" />

`get_operator(rho, n, q)`

Converts an instance of portfolio optimization into a list of Paulis.

**Parameters**

*   **rho** (`ndarray`) – an asset-to-asset similarity matrix, such as the covariance matrix.
*   **n** (`int`) – the number of assets.
*   **q** (`int`) – the number of clusters of assets to output.

**Return type**

`WeightedPauliOperator`

**Returns**

operator for the Hamiltonian

<span id="undefined" />

`get_portfoliodiversification_solution(rho, n, q, result)`

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

<span id="undefined" />

`get_portfoliodiversification_value(rho, n, q, x_state)`

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
