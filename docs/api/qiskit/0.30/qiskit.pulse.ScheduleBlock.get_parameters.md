# qiskit.pulse.ScheduleBlock.get\_parameters

`ScheduleBlock.get_parameters(parameter_name)`

Get parameter object bound to this schedule by string name.

Because different `Parameter` objects can have the same name, this method returns a list of `Parameter` s for the provided name.

**Parameters**

**parameter\_name** (`str`) – Name of parameter.

**Return type**

`List`\[`Parameter`]

**Returns**

Parameter objects that have corresponding name.
