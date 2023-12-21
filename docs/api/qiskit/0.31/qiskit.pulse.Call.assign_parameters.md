# qiskit.pulse.Call.assign\_parameters

`Call.assign_parameters(value_dict)`

Store parameters which will be later assigned to the subroutine.

Parameter values are not immediately assigned. The subroutine with parameters assigned according to the populated parameter table will be generated only when `inline_subroutines()` function is applied to this instruction. Note that parameter assignment logic creates a copy of subroutine to avoid the mutation problem. This function is usually applied by the Qiskit compiler when the program is submitted to the backend.

**Parameters**

**value\_dict** (`Dict`\[`ParameterExpression`, `Union`\[`ParameterExpression`, `float`]]) – A mapping from Parameters to either numeric values or another Parameter expression.

**Return type**

`Call`

**Returns**

Self with updated parameters.
