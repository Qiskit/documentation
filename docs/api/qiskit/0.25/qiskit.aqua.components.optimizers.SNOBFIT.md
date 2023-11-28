# qiskit.aqua.components.optimizers.SNOBFIT

<span id="undefined" />

`SNOBFIT(maxiter=1000, maxfail=10, maxmp=None, verbose=False)`

Stable Noisy Optimization by Branch and FIT algorithm.

SnobFit is used for the optimization of derivative-free, noisy objective functions providing robust and fast solutions of problems with continuous variables varying within bound.

Uses skquant.opt installed with pip install scikit-quant. For further detail, please refer to [https://github.com/scikit-quant/scikit-quant](https://github.com/scikit-quant/scikit-quant) and [https://qat4chem.lbl.gov/software](https://qat4chem.lbl.gov/software).

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed

<span id="undefined" />

`__init__(maxiter=1000, maxfail=10, maxmp=None, verbose=False)`

**Parameters**

*   **maxiter** (`int`) – Maximum number of function evaluations.
*   **maxmp** (`Optional`\[`int`]) – Maximum number of model points requested for the local fit. Default = 2 \* number of parameters + 6 set to this value when None.
*   **maxfail** (`int`) – Maximum number of failures to improve the solution. Stops the algorithm after maxfail is reached.
*   **verbose** (`bool`) – Provide verbose (debugging) output.

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – scikit-quant or SQSnobFit not installed

## Methods

|                                                                                                                                                                                |                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.optimizers.SNOBFIT.__init__ "qiskit.aqua.components.optimizers.SNOBFIT.__init__")(\[maxiter, maxfail, maxmp, verbose])                    | **type maxiter**`int`                                                                                     |
| [`get_support_level`](#qiskit.aqua.components.optimizers.SNOBFIT.get_support_level "qiskit.aqua.components.optimizers.SNOBFIT.get_support_level")()                            | Returns support level dictionary.                                                                         |
| [`gradient_num_diff`](#qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff "qiskit.aqua.components.optimizers.SNOBFIT.gradient_num_diff")(x\_center, f, epsilon\[, …]) | We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center. |
| [`optimize`](#qiskit.aqua.components.optimizers.SNOBFIT.optimize "qiskit.aqua.components.optimizers.SNOBFIT.optimize")(num\_vars, objective\_function\[, …])                   | Runs the optimization.                                                                                    |
| [`print_options`](#qiskit.aqua.components.optimizers.SNOBFIT.print_options "qiskit.aqua.components.optimizers.SNOBFIT.print_options")()                                        | Print algorithm-specific options.                                                                         |
| [`set_max_evals_grouped`](#qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped "qiskit.aqua.components.optimizers.SNOBFIT.set_max_evals_grouped")(limit)           | Set max evals grouped                                                                                     |
| [`set_options`](#qiskit.aqua.components.optimizers.SNOBFIT.set_options "qiskit.aqua.components.optimizers.SNOBFIT.set_options")(\*\*kwargs)                                    | Sets or updates values in the options dictionary.                                                         |
| [`wrap_function`](#qiskit.aqua.components.optimizers.SNOBFIT.wrap_function "qiskit.aqua.components.optimizers.SNOBFIT.wrap_function")(function, args)                          | Wrap the function to implicitly inject the args at the call of the function.                              |

## Attributes

|                                                                                                                                                                                 |                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`bounds_support_level`](#qiskit.aqua.components.optimizers.SNOBFIT.bounds_support_level "qiskit.aqua.components.optimizers.SNOBFIT.bounds_support_level")                      | Returns bounds support level        |
| [`gradient_support_level`](#qiskit.aqua.components.optimizers.SNOBFIT.gradient_support_level "qiskit.aqua.components.optimizers.SNOBFIT.gradient_support_level")                | Returns gradient support level      |
| [`initial_point_support_level`](#qiskit.aqua.components.optimizers.SNOBFIT.initial_point_support_level "qiskit.aqua.components.optimizers.SNOBFIT.initial_point_support_level") | Returns initial point support level |
| [`is_bounds_ignored`](#qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_ignored "qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_ignored")                               | Returns is bounds ignored           |
| [`is_bounds_required`](#qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_required "qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_required")                            | Returns is bounds required          |
| [`is_bounds_supported`](#qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_supported "qiskit.aqua.components.optimizers.SNOBFIT.is_bounds_supported")                         | Returns is bounds supported         |
| [`is_gradient_ignored`](#qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_ignored "qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_ignored")                         | Returns is gradient ignored         |
| [`is_gradient_required`](#qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_required "qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_required")                      | Returns is gradient required        |
| [`is_gradient_supported`](#qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_supported "qiskit.aqua.components.optimizers.SNOBFIT.is_gradient_supported")                   | Returns is gradient supported       |
| [`is_initial_point_ignored`](#qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_ignored "qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_ignored")          | Returns is initial point ignored    |
| [`is_initial_point_required`](#qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_required "qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_required")       | Returns is initial point required   |
| [`is_initial_point_supported`](#qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_supported "qiskit.aqua.components.optimizers.SNOBFIT.is_initial_point_supported")    | Returns is initial point supported  |
| [`setting`](#qiskit.aqua.components.optimizers.SNOBFIT.setting "qiskit.aqua.components.optimizers.SNOBFIT.setting")                                                             | Return setting                      |

<span id="undefined" />

`property bounds_support_level`

Returns bounds support level

<span id="undefined" />

`get_support_level()`

Returns support level dictionary.

<span id="undefined" />

`static gradient_num_diff(x_center, f, epsilon, max_evals_grouped=1)`

We compute the gradient with the numeric differentiation in the parallel way, around the point x\_center.

**Parameters**

*   **x\_center** (*ndarray*) – point around which we compute the gradient
*   **f** (*func*) – the function of which the gradient is to be computed.
*   **epsilon** (*float*) – the epsilon used in the numeric differentiation.
*   **max\_evals\_grouped** (*int*) – max evals grouped

**Returns**

the gradient computed

**Return type**

grad

<span id="undefined" />

`property gradient_support_level`

Returns gradient support level

<span id="undefined" />

`property initial_point_support_level`

Returns initial point support level

<span id="undefined" />

`property is_bounds_ignored`

Returns is bounds ignored

<span id="undefined" />

`property is_bounds_required`

Returns is bounds required

<span id="undefined" />

`property is_bounds_supported`

Returns is bounds supported

<span id="undefined" />

`property is_gradient_ignored`

Returns is gradient ignored

<span id="undefined" />

`property is_gradient_required`

Returns is gradient required

<span id="undefined" />

`property is_gradient_supported`

Returns is gradient supported

<span id="undefined" />

`property is_initial_point_ignored`

Returns is initial point ignored

<span id="undefined" />

`property is_initial_point_required`

Returns is initial point required

<span id="undefined" />

`property is_initial_point_supported`

Returns is initial point supported

<span id="undefined" />

`optimize(num_vars, objective_function, gradient_function=None, variable_bounds=None, initial_point=None)`

Runs the optimization.

<span id="undefined" />

`print_options()`

Print algorithm-specific options.

<span id="undefined" />

`set_max_evals_grouped(limit)`

Set max evals grouped

<span id="undefined" />

`set_options(**kwargs)`

Sets or updates values in the options dictionary.

The options dictionary may be used internally by a given optimizer to pass additional optional values for the underlying optimizer/optimization function used. The options dictionary may be initially populated with a set of key/values when the given optimizer is constructed.

**Parameters**

**kwargs** (*dict*) – options, given as name=value.

<span id="undefined" />

`property setting`

Return setting

<span id="undefined" />

`static wrap_function(function, args)`

Wrap the function to implicitly inject the args at the call of the function.

**Parameters**

*   **function** (*func*) – the target function
*   **args** (*tuple*) – the args to be injected

**Returns**

wrapper

**Return type**

function\_wrapper
