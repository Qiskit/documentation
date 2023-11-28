# qiskit.tools.parallel\_map

<span id="undefined" />

`parallel_map(task, values, task_args=(), task_kwargs={}, num_processes=2)`

Parallel execution of a mapping of values to the function task. This is functionally equivalent to:

```python
result = [task(value, *task_args, **task_kwargs) for value in values]
```

On Windows this function defaults to a serial implementation to avoid the overhead from spawning processes in Windows.

**Parameters**

*   **task** (*func*) – Function that is to be called for each value in `values`.
*   **values** (*array\_like*) – List or array of values for which the `task` function is to be evaluated.
*   **task\_args** (*list*) – Optional additional arguments to the `task` function.
*   **task\_kwargs** (*dict*) – Optional additional keyword argument to the `task` function.
*   **num\_processes** (*int*) – Number of processes to spawn.

**Returns**

**The result list contains the value of**

**`task(value, *task_args, **task_kwargs)` for**

each value in `values`.

**Return type**

result

**Raises**

**QiskitError** – If user interrupts via keyboard.

## Events:

terra.parallel.start: The collection of parallel tasks are about to start. terra.parallel.update: One of the parallel task has finished. terra.parallel.finish: All the parallel tasks have finished.
