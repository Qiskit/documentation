# qiskit.finance.data\_providers.ExchangeDataProvider

<span id="undefined" />

`ExchangeDataProvider(token, tickers, stockmarket=<StockMarket.LONDON: 'XLON'>, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))`

Exchange data provider.

Please see: [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb) for instructions on use, which involve obtaining a Quandl access token.

Initializer :type token: `str` :param token: quandl access token :type tickers: `Union`\[`str`, `List`\[`str`]] :param tickers: tickers :type stockmarket: `StockMarket` :param stockmarket: LONDON, EURONEXT, or SINGAPORE :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Quandl not installed
*   [**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – provider doesn’t support given stock market

<span id="undefined" />

`__init__(token, tickers, stockmarket=<StockMarket.LONDON: 'XLON'>, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0))`

Initializer :type token: `str` :param token: quandl access token :type tickers: `Union`\[`str`, `List`\[`str`]] :param tickers: tickers :type stockmarket: `StockMarket` :param stockmarket: LONDON, EURONEXT, or SINGAPORE :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date

**Raises**

*   [**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Quandl not installed
*   [**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – provider doesn’t support given stock market

## Methods

|                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.data_providers.ExchangeDataProvider.__init__ "qiskit.finance.data_providers.ExchangeDataProvider.__init__")(token, tickers\[, stockmarket, …])                                                 | Initializer :type token: `str` :param token: quandl access token :type tickers: `Union`\[`str`, `List`\[`str`]] :param tickers: tickers :type stockmarket: `StockMarket` :param stockmarket: LONDON, EURONEXT, or SINGAPORE :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date |
| [`get_coordinates`](#qiskit.finance.data_providers.ExchangeDataProvider.get_coordinates "qiskit.finance.data_providers.ExchangeDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                                                                                                                                                                                                                                                                                                  |
| [`get_covariance_matrix`](#qiskit.finance.data_providers.ExchangeDataProvider.get_covariance_matrix "qiskit.finance.data_providers.ExchangeDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                                                                                                                                                                                                                                                                                                          |
| [`get_mean_vector`](#qiskit.finance.data_providers.ExchangeDataProvider.get_mean_vector "qiskit.finance.data_providers.ExchangeDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                                                                               |
| [`get_period_return_covariance_matrix`](#qiskit.finance.data_providers.ExchangeDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.ExchangeDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                                                                               |
| [`get_period_return_mean_vector`](#qiskit.finance.data_providers.ExchangeDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.ExchangeDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                                                                               |
| [`get_similarity_matrix`](#qiskit.finance.data_providers.ExchangeDataProvider.get_similarity_matrix "qiskit.finance.data_providers.ExchangeDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping.                                                                                                                                                                                                                                                                              |
| [`run`](#qiskit.finance.data_providers.ExchangeDataProvider.run "qiskit.finance.data_providers.ExchangeDataProvider.run")()                                                                                                 | Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.                                                                                                                                                                                                                                                |

<span id="undefined" />

`get_coordinates()`

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

<span id="undefined" />

`get_covariance_matrix()`

Returns the covariance matrix.

**Return type**

`ndarray`

**Returns**

an asset-to-asset covariance matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

<span id="undefined" />

`get_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

<span id="undefined" />

`get_period_return_covariance_matrix()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

<span id="undefined" />

`get_period_return_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

<span id="undefined" />

`get_similarity_matrix()`

Returns time-series similarity matrix computed using dynamic time warping.

**Return type**

`ndarray`

**Returns**

an asset-to-asset similarity matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError#qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

<span id="undefined" />

`run()`

Loads data, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.

**Return type**

`None`
