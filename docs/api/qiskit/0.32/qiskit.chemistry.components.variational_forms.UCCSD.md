# UCCSD

<span id="undefined" />

`UCCSD(num_orbitals, num_particles, reps=1, active_occupied=None, active_unoccupied=None, initial_state=None, qubit_mapping='parity', two_qubit_reduction=True, num_time_slices=1, shallow_circuit_concat=True, z2_symmetries=None, method_singles='both', method_doubles='ucc', excitation_type='sd', same_spin_doubles=True, skip_commute_test=False)`

Bases: `qiskit.aqua.components.variational_forms.variational_form.VariationalForm`

This trial wavefunction is a Unitary Coupled-Cluster Single and Double excitations variational form. For more information, see [https://arxiv.org/abs/1805.04340](https://arxiv.org/abs/1805.04340) And for the singlet q-UCCD (full) and pair q-UCCD) see: [https://arxiv.org/abs/1911.10864](https://arxiv.org/abs/1911.10864)

Constructor.

**Parameters**

*   **num\_orbitals** (`int`) – number of spin orbitals, has a min. value of 1.

*   **num\_particles** (`Union`\[`Tuple`\[`int`, `int`], `List`\[`int`], `int`]) – number of particles, if it is a list, the first number is alpha and the second number if beta.

*   **reps** (`int`) – number of repetitions of basic module, has a min. value of 1.

*   **active\_occupied** (`Optional`\[`List`\[`int`]]) – list of occupied orbitals to consider as active space.

*   **active\_unoccupied** (`Optional`\[`List`\[`int`]]) – list of unoccupied orbitals to consider as active space.

*   **initial\_state** (`Union`\[`QuantumCircuit`, `InitialState`, `None`]) – An initial state object.

*   **qubit\_mapping** (`str`) – qubit mapping type.

*   **two\_qubit\_reduction** (`bool`) – two qubit reduction is applied or not.

*   **num\_time\_slices** (`int`) – parameters for dynamics, has a min. value of 1.

*   **shallow\_circuit\_concat** (`bool`) – indicate whether to use shallow (cheap) mode for circuit concatenation.

*   **z2\_symmetries** (`Optional`\[`Z2Symmetries`]) – represent the Z2 symmetries, including symmetries, sq\_paulis, sq\_list, tapering\_values, and cliffords.

*   **method\_singles** (`str`) – specify the single excitation considered. ‘alpha’, ‘beta’, ‘both’ only alpha or beta spin-orbital single excitations or both (all of them).

*   **method\_doubles** (`str`) – specify the single excitation considered. ‘ucc’ (conventional ucc), succ (singlet ucc), succ\_full (singlet ucc full), pucc (pair ucc).

*   **excitation\_type** (`str`) – specify the excitation type ‘sd’, ‘s’, ‘d’ respectively for single and double, only single, only double excitations.

*   **same\_spin\_doubles** (`bool`) – enable double excitations of the same spin.

*   **skip\_commute\_test** (`bool`) –

    **when tapering excitation operators we test and exclude any that do**

    not commute with symmetries. This test can be skipped to include all tapered excitation operators whether they commute or not.

    **Raises:**

    ValueError: Num particles list is not 2 entries

## Methods

|                                                                                                                                                                                                                                                                                                                        |                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`compute_excitation_lists`](qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists#qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists "qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists")                                                 | Computes single and double excitation lists.                                                                                                                                                                                                |
| [`compute_excitation_lists_singlet`](qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet#qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet "qiskit.chemistry.components.variational_forms.UCCSD.compute_excitation_lists_singlet")                 | Outputs the list of lists of grouped excitation.                                                                                                                                                                                            |
| [`construct_circuit`](qiskit.chemistry.components.variational_forms.UCCSD.construct_circuit#qiskit.chemistry.components.variational_forms.UCCSD.construct_circuit "qiskit.chemistry.components.variational_forms.UCCSD.construct_circuit")                                                                             | Construct the variational form, given its parameters.                                                                                                                                                                                       |
| [`get_entangler_map`](qiskit.chemistry.components.variational_forms.UCCSD.get_entangler_map#qiskit.chemistry.components.variational_forms.UCCSD.get_entangler_map "qiskit.chemistry.components.variational_forms.UCCSD.get_entangler_map")                                                                             | returns entangler map                                                                                                                                                                                                                       |
| [`group_excitations`](qiskit.chemistry.components.variational_forms.UCCSD.group_excitations#qiskit.chemistry.components.variational_forms.UCCSD.group_excitations "qiskit.chemistry.components.variational_forms.UCCSD.group_excitations")                                                                             | Groups the excitations and gives out the remaining ones in the list\_de\_temp list because those excitations are controlled by the same parameter in full singlet UCCSD unlike in usual UCCSD where every excitation has its own parameter. |
| [`group_excitations_if_same_ao`](qiskit.chemistry.components.variational_forms.UCCSD.group_excitations_if_same_ao#qiskit.chemistry.components.variational_forms.UCCSD.group_excitations_if_same_ao "qiskit.chemistry.components.variational_forms.UCCSD.group_excitations_if_same_ao")                                 | Define that, given list of double excitations list\_de and number of spin-orbitals num\_orbitals, which excitations involve the same spatial orbitals for full singlet UCCSD.                                                               |
| [`manage_hopping_operators`](qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators#qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators "qiskit.chemistry.components.variational_forms.UCCSD.manage_hopping_operators")                                                 | Triggers the adaptive behavior of this UCCSD instance.                                                                                                                                                                                      |
| [`order_labels_for_hopping_ops`](qiskit.chemistry.components.variational_forms.UCCSD.order_labels_for_hopping_ops#qiskit.chemistry.components.variational_forms.UCCSD.order_labels_for_hopping_ops "qiskit.chemistry.components.variational_forms.UCCSD.order_labels_for_hopping_ops")                                 | Orders the hopping operators according to the grouped excitations for the full singlet UCCSD.                                                                                                                                               |
| [`pop_hopping_operator`](qiskit.chemistry.components.variational_forms.UCCSD.pop_hopping_operator#qiskit.chemistry.components.variational_forms.UCCSD.pop_hopping_operator "qiskit.chemistry.components.variational_forms.UCCSD.pop_hopping_operator")                                                                 | Pops the hopping operator that was added last.                                                                                                                                                                                              |
| [`push_hopping_operator`](qiskit.chemistry.components.variational_forms.UCCSD.push_hopping_operator#qiskit.chemistry.components.variational_forms.UCCSD.push_hopping_operator "qiskit.chemistry.components.variational_forms.UCCSD.push_hopping_operator")                                                             | Pushes a new hopping operator.                                                                                                                                                                                                              |
| [`same_ao_double_excitation_block_spin`](qiskit.chemistry.components.variational_forms.UCCSD.same_ao_double_excitation_block_spin#qiskit.chemistry.components.variational_forms.UCCSD.same_ao_double_excitation_block_spin "qiskit.chemistry.components.variational_forms.UCCSD.same_ao_double_excitation_block_spin") | Regroups the excitations that involve same spatial orbitals for example, with labeling.                                                                                                                                                     |
| [`validate_entangler_map`](qiskit.chemistry.components.variational_forms.UCCSD.validate_entangler_map#qiskit.chemistry.components.variational_forms.UCCSD.validate_entangler_map "qiskit.chemistry.components.variational_forms.UCCSD.validate_entangler_map")                                                         | validate entangler map                                                                                                                                                                                                                      |

## Attributes

<span id="undefined" />

### double\_excitations

Getter of double excitation list :returns: double excitation list :rtype: list\[list\[int]]

<span id="undefined" />

### excitation\_pool

Returns the full list of available excitations (called the pool).

**Return type**

`List`\[`WeightedPauliOperator`]

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

Getter of preferred initial points based on the given initial state.

<span id="undefined" />

### setting

<span id="undefined" />

### single\_excitations

Getter of single excitation list :returns: single excitation list :rtype: list\[list\[int]]

<span id="undefined" />

### support\_parameterized\_circuit

Whether or not the sub-class support parameterized circuit.

**Returns**

indicate the sub-class support parameterized circuit

**Return type**

boolean
