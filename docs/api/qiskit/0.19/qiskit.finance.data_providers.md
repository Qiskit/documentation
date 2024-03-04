---
title: data_providers
description: API reference for qiskit.finance.data_providers
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.finance.data_providers
---

<span id="module-qiskit.finance.data_providers" />

<span id="qiskit-finance-data-providers" />

# Data Providers

<span id="module-qiskit.finance.data_providers" />

`qiskit.finance.data_providers`

A selection of providers for financial data. These may be backed by an external service that sources the actual data; please refer to the specific provider class below, for more information in that regard.

# Data Provider Base Class

|                                                                                                                       |                                                                                    |
| --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`BaseDataProvider`](qiskit.finance.data_providers.BaseDataProvider "qiskit.finance.data_providers.BaseDataProvider") | The abstract base class for data\_provider modules within Qiskit’s finance module. |

# Data Provider Types

|                                                                                                        |                   |
| ------------------------------------------------------------------------------------------------------ | ----------------- |
| [`DataType`](qiskit.finance.data_providers.DataType "qiskit.finance.data_providers.DataType")          | Data Type Enum    |
| [`StockMarket`](qiskit.finance.data_providers.StockMarket "qiskit.finance.data_providers.StockMarket") | Stock Market enum |

# Data Providers

|                                                                                                                                      |                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| [`DataOnDemandProvider`](qiskit.finance.data_providers.DataOnDemandProvider "qiskit.finance.data_providers.DataOnDemandProvider")    | NASDAQ Data on Demand data provider.                       |
| [`ExchangeDataProvider`](qiskit.finance.data_providers.ExchangeDataProvider "qiskit.finance.data_providers.ExchangeDataProvider")    | Exchange data provider.                                    |
| [`WikipediaDataProvider`](qiskit.finance.data_providers.WikipediaDataProvider "qiskit.finance.data_providers.WikipediaDataProvider") | Wikipedia data provider.                                   |
| [`RandomDataProvider`](qiskit.finance.data_providers.RandomDataProvider "qiskit.finance.data_providers.RandomDataProvider")          | Pseudo-randomly generated mock stock-market data provider. |

