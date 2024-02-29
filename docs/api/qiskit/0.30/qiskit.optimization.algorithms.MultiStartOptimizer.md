---
title: MultiStartOptimizer
description: API reference for qiskit.optimization.algorithms.MultiStartOptimizer
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.optimization.algorithms.MultiStartOptimizer
---

# MultiStartOptimizer

<span id="qiskit.optimization.algorithms.MultiStartOptimizer" />

`MultiStartOptimizer(trials=1, clip=100.0)` [GitHub](https://github.com/qiskit-community/qiskit-aqua/tree/stable/0.9/qiskit/optimization/algorithms/multistart_optimizer.py "view source code")

Bases: `qiskit.optimization.algorithms.optimization_algorithm.OptimizationAlgorithm`, `abc.ABC`

An abstract class that implements multi start optimization and should be sub-classed by other optimizers.

Constructs an instance of this optimizer.

**Parameters**

*   **trials** (`int`) – The number of trials for multi-start method. The first trial is solved with the initial guess of zero. If more than one trial is specified then initial guesses are uniformly drawn from `[lowerbound, upperbound]` with potential clipping.
*   **clip** (`float`) – Clipping parameter for the initial guesses in the multi-start method. If a variable is unbounded then the lower bound and/or upper bound are replaced with the `-clip` or `clip` values correspondingly for the initial guesses.

## Methods

### get\_compatibility\_msg

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.get_compatibility_msg" />

`abstract MultiStartOptimizer.get_compatibility_msg(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`str`

**Returns**

Returns the incompatibility message. If the message is empty no issues were found.

### is\_compatible

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.is_compatible" />

`MultiStartOptimizer.is_compatible(problem)`

Checks whether a given problem can be solved with the optimizer implementing this method.

**Parameters**

**problem** (`QuadraticProgram`) – The optimization problem to check compatibility.

**Return type**

`bool`

**Returns**

Returns True if the problem is compatible, False otherwise.

### multi\_start\_solve

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.multi_start_solve" />

`MultiStartOptimizer.multi_start_solve(minimize, problem)`

Applies a multi start method given a local optimizer.

**Parameters**

*   **minimize** (`Callable`\[\[`ndarray`], `Tuple`\[`ndarray`, `Any`]]) – A callable object that minimizes the problem specified
*   **problem** (`QuadraticProgram`) – A problem to solve

**Return type**

`OptimizationResult`

**Returns**

The result of the multi start algorithm applied to the problem.

### solve

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.solve" />

`abstract MultiStartOptimizer.solve(problem)`

Tries to solves the given problem using the optimizer.

Runs the optimizer to try to solve the optimization problem.

**Parameters**

**problem** (`QuadraticProgram`) – The problem to be solved.

**Return type**

`OptimizationResult`

**Returns**

The result of the optimizer applied to the problem.

**Raises**

[**QiskitOptimizationError**](qiskit.optimization.QiskitOptimizationError "qiskit.optimization.QiskitOptimizationError") – If the problem is incompatible with the optimizer.

## Attributes

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.clip" />

### clip

Returns the clip value for this optimizer.

**Return type**

`float`

**Returns**

The clip value.

<span id="qiskit.optimization.algorithms.MultiStartOptimizer.trials" />

### trials

Returns the number of trials for this optimizer.

**Return type**

`int`

**Returns**

The number of trials.

