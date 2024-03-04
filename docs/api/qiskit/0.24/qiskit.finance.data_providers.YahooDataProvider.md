---
title: YahooDataProvider
description: API reference for qiskit.finance.data_providers.YahooDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.YahooDataProvider
---

<span id="qiskit-finance-data-providers-yahoodataprovider" />

# qiskit.finance.data\_providers.YahooDataProvider

<span id="qiskit.finance.data_providers.YahooDataProvider" />

`YahooDataProvider(tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/finance/data_providers/yahoo_data_provider.py "view source code")

Yahoo data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/master/legacy\_tutorials/aqua/finance/data\_providers/time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/legacy_tutorials/aqua/finance/data_providers/time_series.ipynb) for instructions on use.

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: start time :type end: `datetime` :param end: end time

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – YFinance not installed

### \_\_init\_\_

<span id="qiskit.finance.data_providers.YahooDataProvider.__init__" />

`__init__(tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))`

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: start time :type end: `datetime` :param end: end time

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – YFinance not installed

## Methods

|                                                                                                                                                                                                                       |                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.data_providers.YahooDataProvider.__init__ "qiskit.finance.data_providers.YahooDataProvider.__init__")(\[tickers, start, end])                                                            | Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: start time :type end: `datetime` :param end: end time |
| [`get_coordinates`](#qiskit.finance.data_providers.YahooDataProvider.get_coordinates "qiskit.finance.data_providers.YahooDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                                                                                                                                 |
| [`get_covariance_matrix`](#qiskit.finance.data_providers.YahooDataProvider.get_covariance_matrix "qiskit.finance.data_providers.YahooDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                                                                                                                                         |
| [`get_mean_vector`](#qiskit.finance.data_providers.YahooDataProvider.get_mean_vector "qiskit.finance.data_providers.YahooDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                                                                                                                              |
| [`get_period_return_covariance_matrix`](#qiskit.finance.data_providers.YahooDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.YahooDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                                                                                                                              |
| [`get_period_return_mean_vector`](#qiskit.finance.data_providers.YahooDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.YahooDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                                                                                                                              |
| [`get_similarity_matrix`](#qiskit.finance.data_providers.YahooDataProvider.get_similarity_matrix "qiskit.finance.data_providers.YahooDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping.                                                                                                             |
| [`run`](#qiskit.finance.data_providers.YahooDataProvider.run "qiskit.finance.data_providers.YahooDataProvider.run")()                                                                                                 | Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.                                                                               |

### get\_coordinates

<span id="qiskit.finance.data_providers.YahooDataProvider.get_coordinates" />

`get_coordinates()`

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`float`, `float`]

### get\_covariance\_matrix

<span id="qiskit.finance.data_providers.YahooDataProvider.get_covariance_matrix" />

`get_covariance_matrix()`

Returns the covariance matrix.

**Return type**

`ndarray`

**Returns**

an asset-to-asset covariance matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_mean\_vector

<span id="qiskit.finance.data_providers.YahooDataProvider.get_mean_vector" />

`get_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_covariance\_matrix

<span id="qiskit.finance.data_providers.YahooDataProvider.get_period_return_covariance_matrix" />

`get_period_return_covariance_matrix()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_mean\_vector

<span id="qiskit.finance.data_providers.YahooDataProvider.get_period_return_mean_vector" />

`get_period_return_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_similarity\_matrix

<span id="qiskit.finance.data_providers.YahooDataProvider.get_similarity_matrix" />

`get_similarity_matrix()`

Returns time-series similarity matrix computed using dynamic time warping.

**Return type**

`ndarray`

**Returns**

an asset-to-asset similarity matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### run

<span id="qiskit.finance.data_providers.YahooDataProvider.run" />

`run()`

Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.

**Return type**

`None`

