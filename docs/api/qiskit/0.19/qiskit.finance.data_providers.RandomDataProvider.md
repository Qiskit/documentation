---
title: RandomDataProvider
description: API reference for qiskit.finance.data_providers.RandomDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.RandomDataProvider
---

# RandomDataProvider

<span id="qiskit.finance.data_providers.RandomDataProvider" />

`RandomDataProvider(tickers=None, stockmarket=StockMarket.RANDOM, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), seed=None)`

Pseudo-randomly generated mock stock-market data provider.

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type stockmarket: [`StockMarket`](qiskit.finance.data_providers.StockMarket "qiskit.finance.data_providers._base_data_provider.StockMarket") :param stockmarket: RANDOM :type start: \<module ‘datetime’ from ‘/usr/lib/python3.7/datetime.py’> :param start: first data point :type end: \<module ‘datetime’ from ‘/usr/lib/python3.7/datetime.py’> :param end: last data point precedes this date :type seed: `Optional`\[`int`] :param seed: shall a seed be used?

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – provider doesn’t support stock market value

## Methods

|                                                                                                                                                                                                                                           |                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`RandomDataProvider.get_coordinates`](qiskit.finance.data_providers.RandomDataProvider.get_coordinates "qiskit.finance.data_providers.RandomDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                                                                       |
| [`RandomDataProvider.get_covariance_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                                                                               |
| [`RandomDataProvider.get_mean_vector`](qiskit.finance.data_providers.RandomDataProvider.get_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                                                                    |
| [`RandomDataProvider.get_period_return_covariance_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                                                                    |
| [`RandomDataProvider.get_period_return_mean_vector`](qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                                                                    |
| [`RandomDataProvider.get_similarity_matrix`](qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix "qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping.                                                   |
| [`RandomDataProvider.run`](qiskit.finance.data_providers.RandomDataProvider.run "qiskit.finance.data_providers.RandomDataProvider.run")()                                                                                                 | Generates data pseudo-randomly, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class. |

