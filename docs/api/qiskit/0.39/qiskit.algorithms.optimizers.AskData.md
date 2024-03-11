---
title: AskData
description: API reference for qiskit.algorithms.optimizers.AskData
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.AskData
---

# AskData

<span id="qiskit.algorithms.optimizers.AskData" />

`AskData(x_fun=None, x_jac=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.22/qiskit/algorithms/optimizers/steppable_optimizer.py "view source code")

Bases: `abc.ABC`

Base class for return type of [`ask()`](qiskit.algorithms.optimizers.SteppableOptimizer#ask "qiskit.algorithms.optimizers.SteppableOptimizer.ask").

**Parameters**

*   **x\_fun** (`Union`\[`float`, `ndarray`, `List`\[`Union`\[`float`, `ndarray`]], `None`]) – Point or list of points where the function needs to be evaluated to compute the next
*   **optimizer.** (*the next state of the*) –
*   **x\_jac** (`Union`\[`float`, `ndarray`, `List`\[`Union`\[`float`, `ndarray`]], `None`]) – Point or list of points where the gradient/jacobian needs to be evaluated to compute
*   **optimizer.** –

## Attributes

<span id="qiskit.algorithms.optimizers.AskData.x_fun" />

### x\_fun

`Optional[Union[float, numpy.ndarray, List[Union[float, numpy.ndarray]]]]`

`= None`

<span id="qiskit.algorithms.optimizers.AskData.x_jac" />

### x\_jac

`Optional[Union[float, numpy.ndarray, List[Union[float, numpy.ndarray]]]]`

`= None`

