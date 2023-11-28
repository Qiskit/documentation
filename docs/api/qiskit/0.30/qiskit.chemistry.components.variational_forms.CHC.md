# CHC

<span id="undefined" />

`CHC(num_qubits=None, reps=1, ladder=False, excitations=None, entanglement='full', initial_state=None)`

Bases: `qiskit.aqua.components.variational_forms.variational_form.VariationalForm`

This trial wavefunction is the Compact Heuristic for Chemistry.

The trial wavefunction is as defined in Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855. It aims at approximating the UCC Ansatz for a lower CNOT count.

<Admonition title="Note" type="note">
  It is not particle number conserving and the accuracy of the approximation decreases with the number of excitations.
</Admonition>

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – number of qubits
*   **reps** (`int`) – number of replica of basic module
*   **ladder** (`bool`) – use ladder of CNOTs between to indices in the entangling block
*   **excitations** (`Optional`\[`List`\[`List`\[`int`]]]) – indices corresponding to the excitations to include in the circuit
*   **entanglement** (`Union`\[`str`, `List`\[`int`]]) – physical connections between the qubits
*   **initial\_state** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – an initial state to prepend to the variational form

## Methods

|                                                                                                                                                                                                                                                          |                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`construct_circuit`](qiskit.chemistry.components.variational_forms.CHC.construct_circuit#qiskit.chemistry.components.variational_forms.CHC.construct_circuit "qiskit.chemistry.components.variational_forms.CHC.construct_circuit")                     | Construct the variational form, given its parameters. |
| [`get_entangler_map`](qiskit.chemistry.components.variational_forms.CHC.get_entangler_map#qiskit.chemistry.components.variational_forms.CHC.get_entangler_map "qiskit.chemistry.components.variational_forms.CHC.get_entangler_map")                     | returns entangler map                                 |
| [`validate_entangler_map`](qiskit.chemistry.components.variational_forms.CHC.validate_entangler_map#qiskit.chemistry.components.variational_forms.CHC.validate_entangler_map "qiskit.chemistry.components.variational_forms.CHC.validate_entangler_map") | validate entangler map                                |

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
