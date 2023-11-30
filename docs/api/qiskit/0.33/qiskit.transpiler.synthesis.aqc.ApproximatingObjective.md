# ApproximatingObjective

<span id="undefined" />

`ApproximatingObjective`

Bases: `abc.ABC`

A base class for an optimization problem definition. An implementing class must provide at least an implementation of the `objective` method. In such case only gradient free optimizers can be used. Both method, `objective` and `gradient`, preferable to have in an implementation.

## Methods Defined Here

|                                                                                                                                                                                                                     |                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [`gradient`](qiskit.transpiler.synthesis.aqc.ApproximatingObjective.gradient#qiskit.transpiler.synthesis.aqc.ApproximatingObjective.gradient "qiskit.transpiler.synthesis.aqc.ApproximatingObjective.gradient")     | Computes a gradient with respect to parameters given a vector of parameter values. |
| [`objective`](qiskit.transpiler.synthesis.aqc.ApproximatingObjective.objective#qiskit.transpiler.synthesis.aqc.ApproximatingObjective.objective "qiskit.transpiler.synthesis.aqc.ApproximatingObjective.objective") | Computes a value of the objective function given a vector of parameter values.     |

## Attributes

<span id="undefined" />

### num\_thetas

Returns: the number of parameters in this optimization problem.

**Return type**

`int`

<span id="undefined" />

### target\_matrix

Returns: a matrix being approximated

**Return type**

`ndarray`
