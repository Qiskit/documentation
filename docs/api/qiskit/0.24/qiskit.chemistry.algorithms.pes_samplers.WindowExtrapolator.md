---
title: WindowExtrapolator
description: API reference for qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator
---

<span id="qiskit-chemistry-algorithms-pes-samplers-windowextrapolator" />

# qiskit.chemistry.algorithms.pes\_samplers.WindowExtrapolator

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator" />

`WindowExtrapolator(extrapolator=None, window=2)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.8/qiskit/chemistry/algorithms/pes_samplers/extrapolator.py "view source code")

An extrapolator which wraps another extrapolator, limiting the internal extrapolator’s ground truth parameter set to a fixed window size.

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window
*   **window** (`int`) – Number of previous points to use for extrapolation. A value of zero indicates that all previous points will be used for bootstrapping.

### \_\_init\_\_

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.__init__" />

`__init__(extrapolator=None, window=2)`

Constructor.

**Parameters**

*   **extrapolator** (`Union`\[`PolynomialExtrapolator`, `DifferentialExtrapolator`, `None`]) – ‘internal’ extrapolator that performs extrapolation on variational parameters based on data window
*   **window** (`int`) – Number of previous points to use for extrapolation. A value of zero indicates that all previous points will be used for bootstrapping.

## Methods

|                                                                                                                                                                                          |                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.__init__ "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.__init__")(\[extrapolator, window])      | Constructor.                                                                      |
| [`extrapolate`](#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate")(points, param\_dict) | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory")(mode, \*\*kwargs)                | Factory method for constructing extrapolators.                                    |

## Attributes

|                                                                                                                                                                        |                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`extrapolator`](#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolator "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolator") | Returns the internal extrapolator. |
| [`window`](#qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.window "qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.window")                   | Returns the size of the window.    |

### extrapolate

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolate" />

`extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Based on the specified window, a subset of the data points will be used for extrapolation. A default window of 2 points is used, while a value of zero indicates that all previous points will be used for extrapolation. This method defines the data window before performing the internal extrapolation.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).

### extrapolator

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.extrapolator" />

`property extrapolator`

Returns the internal extrapolator.

**Return type**

`Extrapolator`

**Returns**

The internal extrapolator.

### factory

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.factory" />

`static factory(mode, **kwargs)`

Factory method for constructing extrapolators.

**Parameters**

*   **mode** (`str`) – Extrapolator to instantiate. Can be one of: - ‘window’ - ‘poly’ - ‘diff\_model’ - ‘pca’ - ‘l1’
*   **kwargs** – arguments to be passed to the constructor of an extrapolator

**Return type**

`Extrapolator`

**Returns**

A newly created extrapolator instance.

**Raises**

[**AquaError**](qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.

### window

<span id="qiskit.chemistry.algorithms.pes_samplers.WindowExtrapolator.window" />

`property window`

Returns the size of the window.

**Return type**

`int`

**Returns**

The size of the window.

