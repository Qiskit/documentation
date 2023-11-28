# UVCC

<span id="undefined" />

`UVCC(num_qubits, basis, degrees, reps=1, excitations=None, initial_state=None, qubit_mapping='direct', num_time_slices=1, shallow_circuit_concat=True)`

Bases: `qiskit.aqua.components.variational_forms.variational_form.VariationalForm`

This trial wavefunction is a Unitary Vibrational Coupled-Cluster Single and Double excitations variational form. For more information, see Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.

**Parameters**

*   **num\_qubits** (`int`) – number of qubits
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4]
*   **degrees** (`List`\[`int`]) – degree of excitation to be included (for single and double excitations degrees=\[0,1])
*   **reps** (`int`) – number of replica of basic module
*   **excitations** (`Optional`\[`List`\[`List`\[`List`\[`int`]]]]) – The excitations to be included in the circuit. If not provided the default is to compute all singles and doubles.
*   **initial\_state** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An initial state object.
*   **qubit\_mapping** (`str`) – the qubits mapping type. Only ‘direct’ is supported at the moment.
*   **num\_time\_slices** (`int`) – parameters for dynamics.
*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation

## Methods

|                                                                                                                                                                                                                                                                                 |                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`compute_excitation_lists`](qiskit.chemistry.components.variational_forms.UVCC.compute_excitation_lists#qiskit.chemistry.components.variational_forms.UVCC.compute_excitation_lists "qiskit.chemistry.components.variational_forms.UVCC.compute_excitation_lists")             | Compute the list with all possible excitation for given orders        |
| [`construct_circuit`](qiskit.chemistry.components.variational_forms.UVCC.construct_circuit#qiskit.chemistry.components.variational_forms.UVCC.construct_circuit "qiskit.chemistry.components.variational_forms.UVCC.construct_circuit")                                         | Construct the variational form, given its parameters.                 |
| [`excitations_in_qubit_format`](qiskit.chemistry.components.variational_forms.UVCC.excitations_in_qubit_format#qiskit.chemistry.components.variational_forms.UVCC.excitations_in_qubit_format "qiskit.chemistry.components.variational_forms.UVCC.excitations_in_qubit_format") | Gives the list of excitation indexes in terms of qubit indexes rather |
| [`get_entangler_map`](qiskit.chemistry.components.variational_forms.UVCC.get_entangler_map#qiskit.chemistry.components.variational_forms.UVCC.get_entangler_map "qiskit.chemistry.components.variational_forms.UVCC.get_entangler_map")                                         | returns entangler map                                                 |
| [`validate_entangler_map`](qiskit.chemistry.components.variational_forms.UVCC.validate_entangler_map#qiskit.chemistry.components.variational_forms.UVCC.validate_entangler_map "qiskit.chemistry.components.variational_forms.UVCC.validate_entangler_map")                     | validate entangler map                                                |

## Attributes

<span id="undefined" />

### num\_parameters

Number of parameters of the variational form.

**Returns**

An integer indicating the number of parameters.

**Return type**

int

<span id="undefined" />

### num\_qubits

Number of qubits of the variational form.

**Returns**

An integer indicating the number of qubits.

**Return type**

int

<span id="undefined" />

### parameter\_bounds

Parameter bounds.

**Returns**

A list of pairs indicating the bounds, as (lower, upper). None indicates an unbounded parameter in the corresponding direction. If None is returned, problem is fully unbounded.

**Return type**

list

<span id="undefined" />

### preferred\_init\_points

Return preferred init points.

If an initial state is provided then the variational form may provide back this set of parameters which when used on the variational form should result in the overall state being that defined by the initial state

<span id="undefined" />

### setting

<span id="undefined" />

### support\_parameterized\_circuit

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean
