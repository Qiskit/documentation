---
title: BasePassManager
description: API reference for qiskit.passmanager.BasePassManager
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.passmanager.BasePassManager
---

# BasePassManager

<span id="qiskit.passmanager.BasePassManager" />

`qiskit.passmanager.BasePassManager(tasks=(), max_iteration=1000)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/1.0/qiskit/passmanager/passmanager.py "view source code")

Bases: [`ABC`](https://docs.python.org/3/library/abc.html#abc.ABC "(in Python v3.12)")

Pass manager base class.

Initialize an empty pass manager object.

**Parameters**

*   **tasks** (*Task |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[Task]*) – A pass set to be added to the pass manager schedule.
*   **max\_iteration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The maximum number of iterations the schedule will be looped if the condition is not met.

## Methods

### append

<span id="qiskit.passmanager.BasePassManager.append" />

`append(tasks)`

Append tasks to the schedule of passes.

**Parameters**

**tasks** (*Task |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[Task]*) – A set of pass manager tasks to be added to schedule.

**Raises**

[**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – When any element of tasks is not a subclass of passmanager Task.

### remove

<span id="qiskit.passmanager.BasePassManager.remove" />

`remove(index)`

Removes a particular pass in the scheduler.

**Parameters**

**index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Pass index to remove, based on the position in `passes()`.

**Raises**

[**PassManagerError**](passmanager#qiskit.passmanager.PassManagerError "qiskit.passmanager.PassManagerError") – If the index is not found.

### replace

<span id="qiskit.passmanager.BasePassManager.replace" />

`replace(index, tasks)`

Replace a particular pass in the scheduler.

**Parameters**

*   **index** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Task index to replace, based on the position in `tasks()`
*   **tasks** (*Task |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[Task]*) – A set of pass manager tasks to be added to schedule.

**Raises**

*   [**TypeError**](https://docs.python.org/3/library/exceptions.html#TypeError "(in Python v3.12)") – When any element of tasks is not a subclass of passmanager Task.
*   [**PassManagerError**](passmanager#qiskit.passmanager.PassManagerError "qiskit.passmanager.PassManagerError") – If the index is not found.

### run

<span id="qiskit.passmanager.BasePassManager.run" />

`run(in_programs, callback=None, num_processes=None, **kwargs)`

Run all the passes on the specified `in_programs`.

**Parameters**

*   **in\_programs** (*Any |* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*\[Any]*) – Input programs to transform via all the registered passes. A single input object cannot be a Python builtin list object. A list object is considered as multiple input objects to optimize.

*   **callback** (*Callable*) –

    A callback function that will be called after each pass execution. The function will be called with 4 keyword arguments:

    ```python
    task (GenericPass): the pass being run
    passmanager_ir (Any): depending on pass manager subclass
    property_set (PropertySet): the property set
    running_time (float): the time to execute the pass
    count (int): the index for the pass execution
    ```

    The exact arguments pass expose the internals of the pass manager and are subject to change as the pass manager internals change. If you intend to reuse a callback function over multiple releases be sure to check that the arguments being passed are the same.

    To use the callback feature you define a function that will take in kwargs dict and access the variables. For example:

    ```python
    def callback_func(**kwargs):
        task = kwargs['task']
        passmanager_ir = kwargs['passmanager_ir']
        property_set = kwargs['property_set']
        running_time = kwargs['running_time']
        count = kwargs['count']
        ...
    ```

*   **num\_processes** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – The maximum number of parallel processes to launch if parallel execution is enabled. This argument overrides `num_processes` in the user configuration file, and the `QISKIT_NUM_PROCS` environment variable. If set to `None` the system default or local user configuration will be used.

*   **kwargs** – Arbitrary arguments passed to the compiler frontend and backend.

**Returns**

The transformed program(s).

**Return type**

Any

### to\_flow\_controller

<span id="qiskit.passmanager.BasePassManager.to_flow_controller" />

`to_flow_controller()`

Linearize this manager into a single [`FlowControllerLinear`](qiskit.passmanager.FlowControllerLinear "qiskit.passmanager.FlowControllerLinear"), so that it can be nested inside another pass manager.

**Returns**

A linearized pass manager.

**Return type**

[*FlowControllerLinear*](qiskit.passmanager.FlowControllerLinear "qiskit.passmanager.flow_controllers.FlowControllerLinear")

