# qiskit.aqua.components.variational\_forms.VariationalForm

<span id="undefined" />

`VariationalForm`

Base class for VariationalForms.

This method should initialize the module and use an exception if a component of the module is not available.

<span id="undefined" />

`abstract __init__()`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                                                             |                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`__init__`](#qiskit.aqua.components.variational_forms.VariationalForm.__init__ "qiskit.aqua.components.variational_forms.VariationalForm.__init__")()                                                                      | Initialize self.                                      |
| [`construct_circuit`](#qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit "qiskit.aqua.components.variational_forms.VariationalForm.construct_circuit")(parameters\[, q])                           | Construct the variational form, given its parameters. |
| [`get_entangler_map`](#qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.get_entangler_map")(map\_type, num\_qubits\[, offset])          | returns entangler map                                 |
| [`validate_entangler_map`](#qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map "qiskit.aqua.components.variational_forms.VariationalForm.validate_entangler_map")(entangler\_map, num\_qubits) | validate entangler map                                |

## Attributes

|                                                                                                                                                                                                                     |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`num_parameters`](#qiskit.aqua.components.variational_forms.VariationalForm.num_parameters "qiskit.aqua.components.variational_forms.VariationalForm.num_parameters")                                              | Number of parameters of the variational form.               |
| [`num_qubits`](#qiskit.aqua.components.variational_forms.VariationalForm.num_qubits "qiskit.aqua.components.variational_forms.VariationalForm.num_qubits")                                                          | Number of qubits of the variational form.                   |
| [`parameter_bounds`](#qiskit.aqua.components.variational_forms.VariationalForm.parameter_bounds "qiskit.aqua.components.variational_forms.VariationalForm.parameter_bounds")                                        | Parameter bounds.                                           |
| [`preferred_init_points`](#qiskit.aqua.components.variational_forms.VariationalForm.preferred_init_points "qiskit.aqua.components.variational_forms.VariationalForm.preferred_init_points")                         | Return preferred init points.                               |
| [`setting`](#qiskit.aqua.components.variational_forms.VariationalForm.setting "qiskit.aqua.components.variational_forms.VariationalForm.setting")                                                                   |                                                             |
| [`support_parameterized_circuit`](#qiskit.aqua.components.variational_forms.VariationalForm.support_parameterized_circuit "qiskit.aqua.components.variational_forms.VariationalForm.support_parameterized_circuit") | Whether or not the sub-class support parameterized circuit. |

<span id="undefined" />

`abstract construct_circuit(parameters, q=None)`

Construct the variational form, given its parameters.

**Parameters**

*   **parameters** (`Union`\[`List`\[`float`], `ndarray`]) – circuit parameters.
*   **q** (`Optional`\[`QuantumRegister`]) – Quantum Register for the circuit.

**Returns**

A quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

<span id="undefined" />

`static get_entangler_map(map_type, num_qubits, offset=0)`

returns entangler map

<span id="undefined" />

`property num_parameters`

Number of parameters of the variational form.

**Returns**

An integer indicating the number of parameters.

**Return type**

int

<span id="undefined" />

`property num_qubits`

Number of qubits of the variational form.

**Returns**

An integer indicating the number of qubits.

**Return type**

int

<span id="undefined" />

`property parameter_bounds`

Parameter bounds.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

**Return type**

list

<span id="undefined" />

`property preferred_init_points`

Return preferred init points.

If an initial state is provided then the variational form may provide back this set of parameters which when used on the variational form should result in the overall state being that defined by the initial state

<span id="undefined" />

`property setting`

<span id="undefined" />

`property support_parameterized_circuit`

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean

<span id="undefined" />

`static validate_entangler_map(entangler_map, num_qubits)`

validate entangler map
