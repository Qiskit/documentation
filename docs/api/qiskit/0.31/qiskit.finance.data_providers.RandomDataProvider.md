# RandomDataProvider

<span id="undefined" />

`RandomDataProvider(tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), seed=None)`

Bases: `qiskit.finance.data_providers._base_data_provider.BaseDataProvider`

Pseudo-randomly generated mock stock-market data provider.

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date :type seed: `Optional`\[`int`] :param seed: shall a seed be used?

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pandas not installed

## Methods

|                                                                                                                                                                                                                                                                                                           |                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`get_coordinates`](qiskit.finance.data_providers.RandomDataProvider.get_coordinates#qiskit.finance.data_providers.RandomDataProvider.get_coordinates "qiskit.finance.data_providers.RandomDataProvider.get_coordinates")                                                                                 | Returns random coordinates for visualisation purposes.                                                                       |
| [`get_covariance_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix#qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix")                                                         | Returns the covariance matrix.                                                                                               |
| [`get_mean_vector`](qiskit.finance.data_providers.RandomDataProvider.get_mean_vector#qiskit.finance.data_providers.RandomDataProvider.get_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_mean_vector")                                                                                 | Returns a vector containing the mean value of each asset.                                                                    |
| [`get_period_return_covariance_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix#qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix") | Returns a vector containing the mean value of each asset.                                                                    |
| [`get_period_return_mean_vector`](qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector#qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector")                         | Returns a vector containing the mean value of each asset.                                                                    |
| [`get_similarity_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix#qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix "qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix")                                                         | Returns time-series similarity matrix computed using dynamic time warping.                                                   |
| [`run`](qiskit.finance.data_providers.RandomDataProvider.run#qiskit.finance.data_providers.RandomDataProvider.run "qiskit.finance.data_providers.RandomDataProvider.run")                                                                                                                                 | Generates data pseudo-randomly, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class. |
