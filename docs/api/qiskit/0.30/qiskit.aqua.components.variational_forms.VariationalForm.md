# VariationalForm



`VariationalForm`

Bases: `abc.ABC`

Base class for VariationalForms.

This method should initialize the module and use an exception if a component of the module is not available.

## Methods

|                                                                                                                                                                                                                                                                               |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit#qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit "qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit")                     | Construct the variational form, given its parameters. |
| [`get_entangler_map`](qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map#qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map")                     | returns entangler map                                 |
| [`validate_entangler_map`](qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map#qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map") | validate entangler map                                |

## Attributes



### num\_parameters

Number of parameters of the variational form.

**Returns**

An integer indicating the number of parameters.

**Return type**

int



### num\_qubits

Number of qubits of the variational form.

**Returns**

An integer indicating the number of qubits.

**Return type**

int



### parameter\_bounds

Parameter bounds.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

**Return type**

list



### preferred\_init\_points

Return preferred init points.

If an initial state is provided then the variational form may provide back this set of parameters which when used on the variational form should result in the overall state being that defined by the initial state



### setting



### support\_parameterized\_circuit

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean
