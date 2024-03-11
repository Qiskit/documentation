---
title: TellData
description: API reference for qiskit.algorithms.optimizers.TellData
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.TellData
---

# TellData

<span id="qiskit.algorithms.optimizers.TellData" />

`TellData(eval_fun=None, eval_jac=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.23/qiskit/algorithms/optimizers/steppable_optimizer.py "view source code")

Bases: `abc.ABC`

Base class for argument type of [`tell()`](qiskit.algorithms.optimizers.SteppableOptimizer#tell "qiskit.algorithms.optimizers.SteppableOptimizer.tell").

**Parameters**

*   **eval\_fun** (`Union`\[`float`, `List`\[`float`], `None`]) – Image of the function at `x_fun`.
*   **eval\_jac** (`Union`\[`float`, `ndarray`, `List`\[`Union`\[`float`, `ndarray`]], `None`]) – Image of the gradient-jacobian at `x_jac`.

## Attributes

<span id="qiskit.algorithms.optimizers.TellData.eval_fun" />

### eval\_fun

`Optional[Union[float, List[float]]]`

`= None`

<span id="qiskit.algorithms.optimizers.TellData.eval_jac" />

### eval\_jac

`Optional[Union[float, numpy.ndarray, List[Union[float, numpy.ndarray]]]]`

`= None`

