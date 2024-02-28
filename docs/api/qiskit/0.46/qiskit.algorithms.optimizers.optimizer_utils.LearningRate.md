---
title: LearningRate
description: API reference for qiskit.algorithms.optimizers.optimizer_utils.LearningRate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.algorithms.optimizers.optimizer_utils.LearningRate
---

# LearningRate

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate" />

`qiskit.algorithms.optimizers.optimizer_utils.LearningRate(learning_rate)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.46/qiskit/algorithms/optimizers/optimizer_utils/learning_rate.py "view source code")

Bases: [`Generator`](https://docs.python.org/3/library/collections.abc.html#collections.abc.Generator "(in Python v3.12)")

Represents a Learning Rate. Will be an attribute of [`GradientDescentState`](qiskit.algorithms.optimizers.GradientDescentState "qiskit.algorithms.optimizers.GradientDescentState"). Note that [`GradientDescent`](qiskit.algorithms.optimizers.GradientDescent "qiskit.algorithms.optimizers.GradientDescent") also has a learning rate. That learning rate can be a float, a list, an array, a function returning a generator and will be used to create a generator to be used during the optimization process. This class wraps `Generator` so that we can also access the last yielded value.

**Parameters**

**learning\_rate** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | np.ndarray | Callable\[\[], Generator\[*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*, None, None]]*) – Used to create a generator to iterate on.

## Attributes

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.current" />

### current

Returns the current value of the learning rate.

## Methods

### close

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.close" />

`close()`

Raise GeneratorExit inside generator.

### send

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.send" />

`send(value)`

Send a value into the generator. Return next yielded value or raise StopIteration.

### throw

<span id="qiskit.algorithms.optimizers.optimizer_utils.LearningRate.throw" />

`throw(typ, val=None, tb=None)`

Raise an exception in the generator. Return next yielded value or raise StopIteration.

