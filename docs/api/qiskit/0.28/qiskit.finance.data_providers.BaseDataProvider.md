---
title: BaseDataProvider
description: API reference for qiskit.finance.data_providers.BaseDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.BaseDataProvider
---

# qiskit.finance.data\_providers.BaseDataProvider

<span id="qiskit.finance.data_providers.BaseDataProvider" />

`BaseDataProvider`

The abstract base class for data\_provider modules within Qiskit’s finance module.

To create add-on data\_provider module subclass the BaseDataProvider class in this module. Doing so requires that the required driver interface is implemented.

To use the subclasses, please see [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb)

### \_\_init\_\_

<span id="qiskit.finance.data_providers.BaseDataProvider.__init__" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

### get\_coordinates

<span id="qiskit.finance.data_providers.BaseDataProvider.get_coordinates" />

`get_coordinates()`

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

### get\_covariance\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix" />

`get_covariance_matrix()`

Returns the covariance matrix.

**Return type**

`ndarray`

**Returns**

an asset-to-asset covariance matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_mean\_vector

<span id="qiskit.finance.data_providers.BaseDataProvider.get_mean_vector" />

`get_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_covariance\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix" />

`get_period_return_covariance_matrix()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_mean\_vector

<span id="qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector" />

`get_period_return_mean_vector()`

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_similarity\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix" />

`get_similarity_matrix()`

Returns time-series similarity matrix computed using dynamic time warping.

**Return type**

`ndarray`

**Returns**

an asset-to-asset similarity matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### run

<span id="qiskit.finance.data_providers.BaseDataProvider.run" />

`abstract run()`

Loads data.

**Return type**

`None`

