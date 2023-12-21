---
title: BaseDataProvider
description: API reference for qiskit.finance.data_providers.BaseDataProvider
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.finance.data_providers.BaseDataProvider
---

# BaseDataProvider

<span id="qiskit.finance.data_providers.BaseDataProvider" />

`BaseDataProvider`

The abstract base class for data\_provider modules within Qiskit’s finance module.

To create add-on data\_provider module subclass the BaseDataProvider class in this module. Doing so requires that the required driver interface is implemented.

To use the subclasses, please see [https://github.com/Qiskit/qiskit-tutorials/qiskit/finance/data\_providers/time\_series.ipynb](https://github.com/Qiskit/qiskit-tutorials/qiskit/finance/data_providers/time_series.ipynb)

## Methods

|                                                                                                                                                                                                                                     |                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [`BaseDataProvider.get_coordinates`](qiskit.finance.data_providers.BaseDataProvider.get_coordinates "qiskit.finance.data_providers.BaseDataProvider.get_coordinates")()                                                             | Returns random coordinates for visualisation purposes.                     |
| [`BaseDataProvider.get_covariance_matrix`](qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix "qiskit.finance.data_providers.BaseDataProvider.get_covariance_matrix")()                                           | Returns the covariance matrix.                                             |
| [`BaseDataProvider.get_mean_vector`](qiskit.finance.data_providers.BaseDataProvider.get_mean_vector "qiskit.finance.data_providers.BaseDataProvider.get_mean_vector")()                                                             | Returns a vector containing the mean value of each asset.                  |
| [`BaseDataProvider.get_period_return_covariance_matrix`](qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix "qiskit.finance.data_providers.BaseDataProvider.get_period_return_covariance_matrix")() | Returns a vector containing the mean value of each asset.                  |
| [`BaseDataProvider.get_period_return_mean_vector`](qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector "qiskit.finance.data_providers.BaseDataProvider.get_period_return_mean_vector")()                   | Returns a vector containing the mean value of each asset.                  |
| [`BaseDataProvider.get_similarity_matrix`](qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix "qiskit.finance.data_providers.BaseDataProvider.get_similarity_matrix")()                                           | Returns time-series similarity matrix computed using dynamic time warping. |
| [`BaseDataProvider.run`](qiskit.finance.data_providers.BaseDataProvider.run "qiskit.finance.data_providers.BaseDataProvider.run")()                                                                                                 | Loads data.                                                                |

