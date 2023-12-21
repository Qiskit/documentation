---
title: WikipediaDataProvider
description: API reference for qiskit.finance.data_providers.WikipediaDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.WikipediaDataProvider
---

# WikipediaDataProvider

<span id="qiskit.finance.data_providers.WikipediaDataProvider" />

`WikipediaDataProvider(token=None, tickers=None, stockmarket=StockMarket.NASDAQ, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))`

Wikipedia data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/stable/0.14.x/qiskit/advanced/aqua/finance/data\_providers/time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/stable/0.14.x/qiskit/advanced/aqua/finance/data_providers/time_series.ipynb) for instructions on use.

Initializer :type token: `Optional`\[`str`] :param token: quandl access token, which is not needed, strictly speaking :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type stockmarket: [`StockMarket`](qiskit.finance.data_providers.StockMarket "qiskit.finance.data_providers._base_data_provider.StockMarket") :param stockmarket: NASDAQ, NYSE :type start: \<module ‘datetime’ from ‘/usr/lib/python3.7/datetime.py’> :param start: start time :type end: \<module ‘datetime’ from ‘/usr/lib/python3.7/datetime.py’> :param end: end time

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – provider doesn’t support stock market input

## Methods

|                                                                                                                                                                                                                                                    |                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`WikipediaDataProvider.get_coordinates`](qiskit.finance.data_providers.WikipediaDataProvider.get_coordinates "qiskit.finance.data_providers.WikipediaDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                                                   |
| [`WikipediaDataProvider.get_covariance_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_covariance_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                                                           |
| [`WikipediaDataProvider.get_mean_vector`](qiskit.finance.data_providers.WikipediaDataProvider.get_mean_vector "qiskit.finance.data_providers.WikipediaDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                                                |
| [`WikipediaDataProvider.get_period_return_covariance_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                                                |
| [`WikipediaDataProvider.get_period_return_mean_vector`](qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.WikipediaDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                                                |
| [`WikipediaDataProvider.get_similarity_matrix`](qiskit.finance.data_providers.WikipediaDataProvider.get_similarity_matrix "qiskit.finance.data_providers.WikipediaDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping.                               |
| [`WikipediaDataProvider.run`](qiskit.finance.data_providers.WikipediaDataProvider.run "qiskit.finance.data_providers.WikipediaDataProvider.run")()                                                                                                 | Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class. |

