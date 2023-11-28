# PassManager

<span id="undefined" />

`PassManager(passes=None, max_iteration=1000)`

Bases: `object`

Manager for a set of Passes and their scheduling during transpilation.

Initialize an empty PassManager object (with no passes scheduled).

**Parameters**

*   **passes** (`Union`\[`BasePass`, `List`\[`BasePass`], `None`]) – A pass set (as defined in [`qiskit.transpiler.PassManager.append()`](qiskit.transpiler.PassManager.append#qiskit.transpiler.PassManager.append "qiskit.transpiler.PassManager.append")) to be added to the pass manager schedule.
*   **max\_iteration** (`int`) – The maximum number of iterations the schedule will be looped if the condition is not met.

## Methods

|                                                                                                                                  |                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`append`](qiskit.transpiler.PassManager.append#qiskit.transpiler.PassManager.append "qiskit.transpiler.PassManager.append")     | Append a Pass Set to the schedule of passes.                    |
| [`draw`](qiskit.transpiler.PassManager.draw#qiskit.transpiler.PassManager.draw "qiskit.transpiler.PassManager.draw")             | Draw the pass manager.                                          |
| [`passes`](qiskit.transpiler.PassManager.passes#qiskit.transpiler.PassManager.passes "qiskit.transpiler.PassManager.passes")     | Return a list structure of the appended passes and its options. |
| [`remove`](qiskit.transpiler.PassManager.remove#qiskit.transpiler.PassManager.remove "qiskit.transpiler.PassManager.remove")     | Removes a particular pass in the scheduler.                     |
| [`replace`](qiskit.transpiler.PassManager.replace#qiskit.transpiler.PassManager.replace "qiskit.transpiler.PassManager.replace") | Replace a particular pass in the scheduler.                     |
| [`run`](qiskit.transpiler.PassManager.run#qiskit.transpiler.PassManager.run "qiskit.transpiler.PassManager.run")                 | Run all the passes on the specified `circuits`.                 |
