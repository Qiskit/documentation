---
title: RYRZ
description: API reference for qiskit.aqua.components.variational_forms.RYRZ
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.aqua.components.variational_forms.RYRZ
---

# RYRZ

<span id="qiskit.aqua.components.variational_forms.RYRZ" />

`RYRZ(num_qubits, depth=3, entangler_map=None, entanglement='full', initial_state=None, entanglement_gate='cz', skip_unentangled_qubits=False)`

DEPRECATED. The RYRZ Variational Form.

The RYRZ trial wave function is layers of $y$ plus $z$ rotations with entanglements. When none of qubits are unentangled to other qubits, the number of optimizer parameters this form creates and uses is given by $q \times (d + 1) \times 2$, where $q$ is the total number of qubits and $d$ is the depth of the circuit. Nonetheless, in some cases, if an entangler\_map does not include all qubits, that is, some qubits are not entangled by other qubits. The number of parameters is reduced by $d \times q' \times 2$ where $q'$ is the number of unentangled qubits. This is because adding more parameters to the unentangled qubits only introduce overhead without bringing any benefit; furthermore, theoretically, applying multiple Ry and Rz gates in a row can be reduced to a single Ry gate and one Rz gate with the summed rotation angles.

See [`RY`](qiskit.aqua.components.variational_forms.RY "qiskit.aqua.components.variational_forms.RY") for more detail on entangler\_map and entanglement which apply here too but note RYRZ only supports ‘full’ and ‘linear’ values.

**Parameters**

*   **num\_qubits** (`int`) – Number of qubits, has a minimum value of 1.
*   **depth** (`int`) – Number of rotation layers, has a minimum value of 1.
*   **entangler\_map** (`Optional`\[`List`\[`List`\[`int`]]]) – Describe the connectivity of qubits, each list pair describes \[source, target], or None for as defined by entanglement. Note that the order is the list is the order of applying the two-qubit gate.
*   **entanglement** (`str`) – (‘full’ | ‘linear’) overridden by ‘entangler\_map\` if its provided. ‘full’ is all-to-all entanglement, ‘linear’ is nearest-neighbor.
*   **initial\_state** (`Optional`\[[`InitialState`](qiskit.aqua.components.initial_states.InitialState "qiskit.aqua.components.initial_states.initial_state.InitialState")]) – An initial state object
*   **entanglement\_gate** (`str`) – (‘cz’ | ‘cx’)
*   **skip\_unentangled\_qubits** (`bool`) – Skip the qubits not in the entangler\_map

## Attributes

|                                                                                                                                                                                                   |                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [`RYRZ.num_parameters`](qiskit.aqua.components.variational_forms.RYRZ.num_parameters "qiskit.aqua.components.variational_forms.RYRZ.num_parameters")                                              | Number of parameters of the variational form.               |
| [`RYRZ.num_qubits`](qiskit.aqua.components.variational_forms.RYRZ.num_qubits "qiskit.aqua.components.variational_forms.RYRZ.num_qubits")                                                          | Number of qubits of the variational form.                   |
| [`RYRZ.parameter_bounds`](qiskit.aqua.components.variational_forms.RYRZ.parameter_bounds "qiskit.aqua.components.variational_forms.RYRZ.parameter_bounds")                                        | Parameter bounds.                                           |
| [`RYRZ.preferred_init_points`](qiskit.aqua.components.variational_forms.RYRZ.preferred_init_points "qiskit.aqua.components.variational_forms.RYRZ.preferred_init_points")                         | Return preferred init points.                               |
| [`RYRZ.setting`](qiskit.aqua.components.variational_forms.RYRZ.setting "qiskit.aqua.components.variational_forms.RYRZ.setting")                                                                   |                                                             |
| [`RYRZ.support_parameterized_circuit`](qiskit.aqua.components.variational_forms.RYRZ.support_parameterized_circuit "qiskit.aqua.components.variational_forms.RYRZ.support_parameterized_circuit") | Whether or not the sub-class support parameterized circuit. |

## Methods

|                                                                                                                                                                                                 |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`RYRZ.construct_circuit`](qiskit.aqua.components.variational_forms.RYRZ.construct_circuit "qiskit.aqua.components.variational_forms.RYRZ.construct_circuit")(parameters\[, q])                 | Construct the variational form, given its parameters. |
| [`RYRZ.get_entangler_map`](qiskit.aqua.components.variational_forms.RYRZ.get_entangler_map "qiskit.aqua.components.variational_forms.RYRZ.get_entangler_map")(map\_type, num\_qubits)           | returns entangler map                                 |
| [`RYRZ.validate_entangler_map`](qiskit.aqua.components.variational_forms.RYRZ.validate_entangler_map "qiskit.aqua.components.variational_forms.RYRZ.validate_entangler_map")(entangler\_map, …) | validate entangler map                                |

