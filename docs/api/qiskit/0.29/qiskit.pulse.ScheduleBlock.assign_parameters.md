# qiskit.pulse.ScheduleBlock.assign\_parameters

`ScheduleBlock.assign_parameters(value_dict, inplace=True)`

Assign the parameters in this schedule according to the input.

**Parameters**

*   **value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.
*   **inplace** (`bool`) – Set `True` to override this instance with new parameter.

**Return type**

`ScheduleBlock`

**Returns**

Schedule with updated parameters.
