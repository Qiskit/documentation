# qiskit.transpiler.PassManager.replace

`PassManager.replace(index, passes, max_iteration=None, **flow_controller_conditions)`

Replace a particular pass in the scheduler.

**Parameters**

*   **index** (`int`) – Pass index to replace, based on the position in passes().
*   **passes** (`Union`\[`BasePass`, `List`\[`BasePass`]]) – A pass set (as defined in [`qiskit.transpiler.PassManager.append()`](qiskit.transpiler.PassManager.append#qiskit.transpiler.PassManager.append "qiskit.transpiler.PassManager.append")) to be added to the pass manager schedule.
*   **max\_iteration** (`Optional`\[`int`]) – max number of iterations of passes.
*   **flow\_controller\_conditions** (`Any`) – control flow plugins.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if a pass in passes is not a proper pass or index not found.

<Admonition title="See also" type="note">
  `RunningPassManager.add_flow_controller()` for more information about the control flow plugins.
</Admonition>

**Return type**

`None`
