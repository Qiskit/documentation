<span id="qiskit-chemistry-algorithms-pes-samplers-polynomialextrapolator" />

# qiskit.chemistry.algorithms.pes\_samplers.PolynomialExtrapolator

<span id="undefined" />

`PolynomialExtrapolator(degree=1)`

An extrapolator based on fitting each parameter to a polynomial function of a user-specified degree.

WARNING: Should only be used with window. Using no window includes points after the point being extrapolated in the data window.

Constructor.

**Parameters**

**degree** (`int`) – Degree of polynomial to use for fitting in extrapolation.

<span id="undefined" />

`__init__(degree=1)`

Constructor.

**Parameters**

**degree** (`int`) – Degree of polynomial to use for fitting in extrapolation.

## Methods

|                                                                                                                                                                                                  |                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.__init__ "qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.__init__")(\[degree])                    | Constructor.                                                                      |
| [`extrapolate`](#qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.extrapolate")(points, param\_dict) | Extrapolate at specified point of interest given a set of variational parameters. |
| [`factory`](#qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.PolynomialExtrapolator.factory")(mode, \*\*kwargs)                | Factory method for constructing extrapolators.                                    |

<span id="undefined" />

`extrapolate(points, param_dict)`

Extrapolate at specified point of interest given a set of variational parameters. Extrapolation is based on a polynomial function/spline fitting with a user-specified degree.

**Parameters**

*   **points** (`List`\[`float`]) – List of point(s) to be used for extrapolation. Can represent some degree of freedom, ex, interatomic distance.
*   **param\_dict** (`Optional`\[`Dict`\[`float`, `List`\[`float`]]]) – Dictionary of variational parameters. Each key is the point and the value is a list of the variational parameters.

**Return type**

`Dict`\[`float`, `List`\[`float`]]

**Returns**

Dictionary of variational parameters for extrapolated point(s).

<span id="undefined" />

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

[**AquaError**](qiskit.aqua.AquaError#qiskit.aqua.AquaError "qiskit.aqua.AquaError") – if specified mode is unknown.
