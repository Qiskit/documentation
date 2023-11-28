# WikipediaDataProvider

<span id="undefined" />

`WikipediaDataProvider(token=None, tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))`

Bases: `qiskit.finance.data_providers._base_data_provider.BaseDataProvider`

Wikipedia data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb) for instructions on use.

Initializer :type token: `Optional`\[`str`] :param token: quandl access token, which is not needed, strictly speaking :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: start time :type end: `datetime` :param end: end time

> **Raises:**
>
> MissingOptionalLibraryError: Quandl not installed

## Methods

|                                                                                                                                                                                                                                                                                                                    |                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| [`get_coordinates`](qiskit.finance.data_providers.WikipediaDataProvider.get_coordinates#qiskit.finance.data_providers.WikipediaDataProvider.get_coordinates "qiskit.finance.data_providers.WikipediaDataProvider.get_coordinates")                                                                                 | Returns random coordinates for visualisation purposes.                                                   |
| [`get_covariance_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_covariance_matrix#qiskit.finance.data_providers.WikipediaDataProvider.get_covariance_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_covariance_matrix")                                                         | Returns the covariance matrix.                                                                           |
| [`get_mean_vector`](qiskit.finance.data_providers.WikipediaDataProvider.get_mean_vector#qiskit.finance.data_providers.WikipediaDataProvider.get_mean_vector "qiskit.finance.data_providers.WikipediaDataProvider.get_mean_vector")                                                                                 | Returns a vector containing the mean value of each asset.                                                |
| [`get_period_return_covariance_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_covariance_matrix#qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_covariance_matrix") | Returns a vector containing the mean value of each asset.                                                |
| [`get_period_return_mean_vector`](qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_mean_vector#qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_mean_vector")                         | Returns a vector containing the mean value of each asset.                                                |
| [`get_similarity_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_similarity_matrix#qiskit.finance.data_providers.WikipediaDataProvider.get_similarity_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_similarity_matrix")                                                         | Returns time-series similarity matrix computed using dynamic time warping.                               |
| [`run`](qiskit.finance.data_providers.WikipediaDataProvider.run#qiskit.finance.data_providers.WikipediaDataProvider.run "qiskit.finance.data_providers.WikipediaDataProvider.run")                                                                                                                                 | Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class. |
