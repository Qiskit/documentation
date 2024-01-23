---
title: BaseDataProvider
description: API reference for qiskit.finance.data_providers.BaseDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.BaseDataProvider
---

# BaseDataProvider

<span id="qiskit.finance.data_providers.BaseDataProvider" />

`BaseDataProvider`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Bases: `abc.ABC`

The abstract base class for data\_provider modules within Qiskit’s finance module.

To create add-on data\_provider module subclass the BaseDataProvider class in this module. Doing so requires that the required driver interface is implemented.

To use the subclasses, please see [https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11\_time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/blob/master/tutorials/finance/11_time_series.ipynb)

## Methods

### get\_coordinates

<span id="qiskit.finance.data_providers.BaseDataProvider.get_coordinates" />

`BaseDataProvider.get_coordinates()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns random coordinates for visualisation purposes.

**Return type**

`Tuple`\[`ndarray`, `ndarray`]

### get\_covariance\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix" />

`BaseDataProvider.get_covariance_matrix()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns the covariance matrix.

**Return type**

`ndarray`

**Returns**

an asset-to-asset covariance matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_mean\_vector

<span id="qiskit.finance.data_providers.BaseDataProvider.get_mean_vector" />

`BaseDataProvider.get_mean_vector()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_covariance\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix" />

`BaseDataProvider.get_period_return_covariance_matrix()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_period\_return\_mean\_vector

<span id="qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector" />

`BaseDataProvider.get_period_return_mean_vector()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns a vector containing the mean value of each asset.

**Return type**

`ndarray`

**Returns**

a per-asset mean vector.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### get\_similarity\_matrix

<span id="qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix" />

`BaseDataProvider.get_similarity_matrix()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Returns time-series similarity matrix computed using dynamic time warping.

**Return type**

`ndarray`

**Returns**

an asset-to-asset similarity matrix.

**Raises**

[**QiskitFinanceError**](qiskit.finance.QiskitFinanceError "qiskit.finance.QiskitFinanceError") – no data loaded

### run

<span id="qiskit.finance.data_providers.BaseDataProvider.run" />

`abstract BaseDataProvider.run()`[GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/finance/data_providers/_base_data_provider.py "view source code")

Loads data.

**Return type**

`None`

