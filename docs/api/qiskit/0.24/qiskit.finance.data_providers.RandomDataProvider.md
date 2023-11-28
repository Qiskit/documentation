<span id="qiskit-finance-data-providers-randomdataprovider" />

# qiskit.finance.data\_providers.RandomDataProvider

<span id="undefined" />

`RandomDataProvider(tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), seed=None)`

Pseudo-randomly generated mock stock-market data provider.

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date :type seed: `Optional`\[`int`] :param seed: shall a seed be used?

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pandas not installed

<span id="undefined" />

`__init__(tickers=None, start=datetime.datetime(2016, 1, 1, 0, 0), end=datetime.datetime(2016, 1, 30, 0, 0), seed=None)`

Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date :type seed: `Optional`\[`int`] :param seed: shall a seed be used?

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – Pandas not installed

## Methods

|                                                                                                                                                                                                                         |                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.data_providers.RandomDataProvider.__init__ "qiskit.finance.data_providers.RandomDataProvider.__init__")(\[tickers, start, end, seed])                                                      | Initializer :type tickers: `Union`\[`str`, `List`\[`str`], `None`] :param tickers: tickers :type start: `datetime` :param start: first data point :type end: `datetime` :param end: last data point precedes this date :type seed: `Optional`\[`int`] :param seed: shall a seed be used? |
| [`get_coordinates`](#qiskit.finance.data_providers.RandomDataProvider.get_coordinates "qiskit.finance.data_providers.RandomDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                                                                                                                                                                                                                                   |
| [`get_covariance_matrix`](#qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                                                                                                                                                                                                                                           |
| [`get_mean_vector`](#qiskit.finance.data_providers.RandomDataProvider.get_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                |
| [`get_period_return_covariance_matrix`](#qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.RandomDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                |
| [`get_period_return_mean_vector`](#qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.RandomDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                                                                                                                                                                                                                                |
| [`get_similarity_matrix`](#qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix "qiskit.finance.data_providers.RandomDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping.                                                                                                                                                                                                               |
| [`run`](#qiskit.finance.data_providers.RandomDataProvider.run "qiskit.finance.data_providers.RandomDataProvider.run")()                                                                                                 | Generates data pseudo-randomly, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.                                                                                                                                                             |

<span id="undefined" />

`get_coordinates()`

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`float`, `float`]

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

Generates data pseudo-randomly, thus enabling get\_similarity\_matrix and get\_covariance\_matrix methods in the base class.

**Return type**

`None`
