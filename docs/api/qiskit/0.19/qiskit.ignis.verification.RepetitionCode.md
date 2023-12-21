---
title: RepetitionCode
description: API reference for qiskit.ignis.verification.RepetitionCode
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.ignis.verification.RepetitionCode
---

# RepetitionCode

<span id="qiskit.ignis.verification.RepetitionCode" />

`RepetitionCode(d, T=0)`

Implementation of a distance d repetition code, implemented over T syndrome measurement rounds.

Creates the circuits corresponding to a logical 0 and 1 encoded using a repetition code.

**Parameters**

*   **d** (*int*) – Number of code qubits (and hence repetitions) used.
*   **T** (*int*) – Number of rounds of ancilla-assisted syndrome measurement.

**Additional information:**

No measurements are added to the circuit if T=0. Otherwise T rounds are added, followed by measurement of the code qubits (corresponding to a logical measurement and final syndrome measurement round).

## Methods

|                                                                                                                                                                                     |                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [`RepetitionCode.get_circuit_list`](qiskit.ignis.verification.RepetitionCode.get_circuit_list "qiskit.ignis.verification.RepetitionCode.get_circuit_list")()                        | **returns**self.circuit as a list, with                                                                                                      |
| [`RepetitionCode.process_results`](qiskit.ignis.verification.RepetitionCode.process_results "qiskit.ignis.verification.RepetitionCode.process_results")(raw\_results)               | **param raw\_results**A dictionary whose keys are logical values,                                                                            |
| [`RepetitionCode.readout`](qiskit.ignis.verification.RepetitionCode.readout "qiskit.ignis.verification.RepetitionCode.readout")()                                                   | Readout of all code qubits, which corresponds to a logical measurement as well as allowing for a measurement of the syndrome to be inferred. |
| [`RepetitionCode.syndrome_measurement`](qiskit.ignis.verification.RepetitionCode.syndrome_measurement "qiskit.ignis.verification.RepetitionCode.syndrome_measurement")(\[reset, …]) | Application of a syndrome measurement round.                                                                                                 |
| [`RepetitionCode.x`](qiskit.ignis.verification.RepetitionCode.x "qiskit.ignis.verification.RepetitionCode.x")(\[logs, barrier])                                                     | Applies a logical x to the circuits for the given logical values.                                                                            |

