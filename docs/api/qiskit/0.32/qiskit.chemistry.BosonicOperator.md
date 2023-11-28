# BosonicOperator

<span id="undefined" />

`BosonicOperator(h, basis)`

Bases: `object`

A set of functions to map bosonic Hamiltonians to qubit Hamiltonians.

References:

*   *Veis Libor, et al., International Journal of Quantum Chemistry 116.18 (2016): 1328-1336.*
*   *McArdle Sam, et al., Chemical science 10.22 (2019): 5725-5735.*
*   *Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.*

The Bosonic operator in this class is written in the n-mode second quantization format (Eq. 10 in Ref. Ollitrault Pauline J., Chemical science 11 (2020): 6842-6855.) The second quantization operators act on a given modal in a given mode. self.\_degree is the truncation degree of the expansion (n).

**Parameters**

*   **h** (`List`\[`List`\[`Tuple`\[`List`\[`List`\[`int`]], `float`]]]) – Matrix elements for the n-body expansion. The format is as follows: h is a self.\_degree (n) dimensional array. For each degree n, h\[n] contains the list \[\[indices, coeff]\_0, \[indices, coeff]\_1, …] where the indices is a n-entry list and each entry is of the shape \[mode, modal1, modal2] which define the indices of the corresponding raising (mode, modal1) and lowering (mode, modal2) operators.
*   **basis** (`List`\[`int`]) – Is a list defining the number of modals per mode. E.g. for a 3 modes system with 4 modals per mode basis = \[4,4,4].

## Methods

|                                                                                                                                                                                                                                                       |                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`direct_mapping_filtering_criterion`](qiskit.chemistry.BosonicOperator.direct_mapping_filtering_criterion#qiskit.chemistry.BosonicOperator.direct_mapping_filtering_criterion "qiskit.chemistry.BosonicOperator.direct_mapping_filtering_criterion") | Filters out the states of irrelevant symmetries                                                |
| [`mapping`](qiskit.chemistry.BosonicOperator.mapping#qiskit.chemistry.BosonicOperator.mapping "qiskit.chemistry.BosonicOperator.mapping")                                                                                                             | Maps a bosonic operator into a qubit operator.                                                 |
| [`number_occupied_modals_per_mode`](qiskit.chemistry.BosonicOperator.number_occupied_modals_per_mode#qiskit.chemistry.BosonicOperator.number_occupied_modals_per_mode "qiskit.chemistry.BosonicOperator.number_occupied_modals_per_mode")             | A bosonic operator which can be used to evaluate the number of occupied modals in a given mode |
