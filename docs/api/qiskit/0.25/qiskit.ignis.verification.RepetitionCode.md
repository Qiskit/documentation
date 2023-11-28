# qiskit.ignis.verification.RepetitionCode

<span id="undefined" />

`RepetitionCode(d, T=0)`

Implementation of a distance d repetition code, implemented over T syndrome measurement rounds.

Creates the circuits corresponding to a logical 0 and 1 encoded using a repetition code.

**Parameters**

*   **d** (*int*) – Number of code qubits (and hence repetitions) used.
*   **T** (*int*) – Number of rounds of ancilla-assisted syndrome measurement.

**Additional information:**

No measurements are added to the circuit if T=0. Otherwise T rounds are added, followed by measurement of the code qubits (corresponding to a logical measurement and final syndrome measurement round).

<span id="undefined" />

`__init__(d, T=0)`

Creates the circuits corresponding to a logical 0 and 1 encoded using a repetition code.

**Parameters**

*   **d** (*int*) – Number of code qubits (and hence repetitions) used.
*   **T** (*int*) – Number of rounds of ancilla-assisted syndrome measurement.

**Additional information:**

No measurements are added to the circuit if T=0. Otherwise T rounds are added, followed by measurement of the code qubits (corresponding to a logical measurement and final syndrome measurement round).

## Methods

|                                                                                                                                                                             |                                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.verification.RepetitionCode.__init__ "qiskit.ignis.verification.RepetitionCode.__init__")(d\[, T])                                               | Creates the circuits corresponding to a logical 0 and 1 encoded using a repetition code.                                                     |
| [`get_circuit_list`](#qiskit.ignis.verification.RepetitionCode.get_circuit_list "qiskit.ignis.verification.RepetitionCode.get_circuit_list")()                              | **returns**self.circuit as a list, with                                                                                                      |
| [`process_results`](#qiskit.ignis.verification.RepetitionCode.process_results "qiskit.ignis.verification.RepetitionCode.process_results")(raw\_results)                     | **param raw\_results**A dictionary whose keys are logical values,                                                                            |
| [`readout`](#qiskit.ignis.verification.RepetitionCode.readout "qiskit.ignis.verification.RepetitionCode.readout")()                                                         | Readout of all code qubits, which corresponds to a logical measurement as well as allowing for a measurement of the syndrome to be inferred. |
| [`syndrome_measurement`](#qiskit.ignis.verification.RepetitionCode.syndrome_measurement "qiskit.ignis.verification.RepetitionCode.syndrome_measurement")(\[reset, barrier]) | Application of a syndrome measurement round.                                                                                                 |
| [`x`](#qiskit.ignis.verification.RepetitionCode.x "qiskit.ignis.verification.RepetitionCode.x")(\[logs, barrier])                                                           | Applies a logical x to the circuits for the given logical values.                                                                            |

<span id="undefined" />

`get_circuit_list()`

**Returns**

self.circuit as a list, with circuit\_list\[0] = circuit\[‘0’] circuit\_list\[1] = circuit\[‘1’]

**Return type**

circuit\_list

<span id="undefined" />

`process_results(raw_results)`

**Parameters**

**raw\_results** (*dict*) – A dictionary whose keys are logical values, and whose values are standard counts dictionaries, (as obtained from the get\_counts method of a `qiskit.Result` object).

**Returns**

**Dictionary with the same structure as the input, but with**

the bit strings used as keys in the counts dictionaries converted to the form required by the decoder.

**Return type**

results

**Additional information:**

The circuits must be executed outside of this class, so that their is full freedom to compile, choose a backend, use a noise model, etc. The results from these executions should then be used to create the input for this method.

<span id="undefined" />

`readout()`

Readout of all code qubits, which corresponds to a logical measurement as well as allowing for a measurement of the syndrome to be inferred.

<span id="undefined" />

`syndrome_measurement(reset=True, barrier=False)`

Application of a syndrome measurement round.

**Parameters**

*   **reset** (*bool*) – If set to true add a boolean at the end of each round
*   **barrier** (*bool*) – Boolean denoting whether to include a barrier at the end.

<span id="undefined" />

`x(logs=('0', '1'), barrier=False)`

Applies a logical x to the circuits for the given logical values.

**Parameters**

*   **logs** (*list or tuple*) – List or tuple of logical values expressed as strings.
*   **barrier** (*bool*) – Boolean denoting whether to include a barrier at the end.
