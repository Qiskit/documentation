# qiskit.finance.data\_providers.BaseDataProvider

<span id="undefined" />

`BaseDataProvider`

The abstract base class for data\_provider modules within Qiskit’s finance module.

To create add-on data\_provider module subclass the BaseDataProvider class in this module. Doing so requires that the required driver interface is implemented.

To use the subclasses, please see [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb)

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                                     |                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`__init__`](#qiskit.finance.data_providers.BaseDataProvider.__init__ "qiskit.finance.data_providers.BaseDataProvider.__init__")()                                                                                  | Initialize self.                                                           |
| [`get_coordinates`](#qiskit.finance.data_providers.BaseDataProvider.get_coordinates "qiskit.finance.data_providers.BaseDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                     |
| [`get_covariance_matrix`](#qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix "qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                             |
| [`get_mean_vector`](#qiskit.finance.data_providers.BaseDataProvider.get_mean_vector "qiskit.finance.data_providers.BaseDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                  |
| [`get_period_return_covariance_matrix`](#qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                  |
| [`get_period_return_mean_vector`](#qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                  |
| [`get_similarity_matrix`](#qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix "qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping. |
| [`run`](#qiskit.finance.data_providers.BaseDataProvider.run "qiskit.finance.data_providers.BaseDataProvider.run")()                                                                                                 | Loads data.                                                                |

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

`abstract run()`

Loads data.

**Return type**

`None`
