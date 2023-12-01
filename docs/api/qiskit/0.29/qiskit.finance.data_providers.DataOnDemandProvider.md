# DataOnDemandProvider

<span id="undefined" />

`DataOnDemandProvider(token, tickers, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), verify=None)`

Bases: `qiskit.finance.data_providers._base_data_provider.BaseDataProvider`

NASDAQ Data on Demand data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb) for instructions on use, which involve obtaining a NASDAQ DOD access token.

**Parameters**

*   **token** (`str`) – data on demand access token
*   **tickers** (`Union`\[`str`, `List`\[`str`]]) – tickers
*   **start** (`datetime`) – first data point
*   **end** (`datetime`) – last data point precedes this date
*   **verify** (`Union`\[`str`, `bool`, `None`]) – if verify is None, certify certificates will be used (default); if this is False, no certificates will be checked; if this is a string, it should be pointing to a certificate for the HTTPS connection to NASDAQ (dataondemand.nasdaq.com), either in the form of a CA\_BUNDLE file or a directory wherein to look.

## Methods

|                                                                                                                                                                                                                                                                                                                 |                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`get_coordinates`](qiskit.finance.data_providers.DataOnDemandProvider.get_coordinates#qiskit.finance.data_providers.DataOnDemandProvider.get_coordinates "qiskit.finance.data_providers.DataOnDemandProvider.get_coordinates")                                                                                 | Returns random coordinates for visualisation purposes.                                                   |
| [`get_covariance_matrix`](qiskit.finance.data_providers.DataOnDemandProvider.get_covariance_matrix#qiskit.finance.data_providers.DataOnDemandProvider.get_covariance_matrix "qiskit.finance.data_providers.DataOnDemandProvider.get_covariance_matrix")                                                         | Returns the covariance matrix.                                                                           |
| [`get_mean_vector`](qiskit.finance.data_providers.DataOnDemandProvider.get_mean_vector#qiskit.finance.data_providers.DataOnDemandProvider.get_mean_vector "qiskit.finance.data_providers.DataOnDemandProvider.get_mean_vector")                                                                                 | Returns a vector containing the mean value of each asset.                                                |
| [`get_period_return_covariance_matrix`](qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_covariance_matrix#qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_covariance_matrix") | Returns a vector containing the mean value of each asset.                                                |
| [`get_period_return_mean_vector`](qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_mean_vector#qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_mean_vector "qiskit.finance.data_providers.DataOnDemandProvider.get_period_return_mean_vector")                         | Returns a vector containing the mean value of each asset.                                                |
| [`get_similarity_matrix`](qiskit.finance.data_providers.DataOnDemandProvider.get_similarity_matrix#qiskit.finance.data_providers.DataOnDemandProvider.get_similarity_matrix "qiskit.finance.data_providers.DataOnDemandProvider.get_similarity_matrix")                                                         | Returns time-series similarity matrix computed using dynamic time warping.                               |
| [`run`](qiskit.finance.data_providers.DataOnDemandProvider.run#qiskit.finance.data_providers.DataOnDemandProvider.run "qiskit.finance.data_providers.DataOnDemandProvider.run")                                                                                                                                 | Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class. |
