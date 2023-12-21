---
title: PassManager
description: API reference for qiskit.transpiler.PassManager
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.PassManager
---

# PassManager

<span id="qiskit.transpiler.PassManager" />

`PassManager(passes=None, max_iteration=1000, callback=None)`

Manager for a set of Passes and their scheduling during transpilation.

Initialize an empty PassManager object (with no passes scheduled).

**Parameters**

*   **passes** (`Union`\[`BasePass`, `List`\[`BasePass`], `None`]) – A pass set (as defined in [`qiskit.transpiler.PassManager.append()`](qiskit.transpiler.PassManager.append "qiskit.transpiler.PassManager.append")) to be added to the pass manager schedule.
*   **max\_iteration** (`int`) – The maximum number of iterations the schedule will be looped if the condition is not met.
*   **callback** (`Optional`\[`Callable`]) – DEPRECATED - A callback function that will be called after each pass execution.

<Admonition title="Deprecated since version 0.13.0" type="danger">
  The `callback` parameter is deprecated in favor of `PassManager.run(..., callback=callback, ...)`.
</Admonition>

## Methods

|                                                                                                                                |                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`PassManager.__getitem__`](qiskit.transpiler.PassManager.__getitem__ "qiskit.transpiler.PassManager.__getitem__")(index)      |                                                                 |
| [`PassManager.__len__`](qiskit.transpiler.PassManager.__len__ "qiskit.transpiler.PassManager.__len__")()                       |                                                                 |
| [`PassManager.append`](qiskit.transpiler.PassManager.append "qiskit.transpiler.PassManager.append")(passes\[, max\_iteration]) | Append a Pass Set to the schedule of passes.                    |
| [`PassManager.draw`](qiskit.transpiler.PassManager.draw "qiskit.transpiler.PassManager.draw")(\[filename, style, raw])         | Draw the pass manager.                                          |
| [`PassManager.passes`](qiskit.transpiler.PassManager.passes "qiskit.transpiler.PassManager.passes")()                          | Return a list structure of the appended passes and its options. |
| [`PassManager.replace`](qiskit.transpiler.PassManager.replace "qiskit.transpiler.PassManager.replace")(index, passes\[, …])    | Replace a particular pass in the scheduler.                     |
| [`PassManager.run`](qiskit.transpiler.PassManager.run "qiskit.transpiler.PassManager.run")(circuits\[, output\_name, …])       | Run all the passes on the specified `circuits`.                 |

