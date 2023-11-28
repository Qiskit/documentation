# QVFitter[¶](#qvfitter "Permalink to this headline")

<span id="undefined" />

`QVFitter(backend_result=None, statevector_result=None, qubit_lists=None)`

Bases: `object`

Class for fitters for quantum volume.

**Parameters**

*   **backend\_result** (*list*) – list of results (qiskit.Result).
*   **statevector\_result** (*list*) – the ideal statevectors of each circuit
*   **qubit\_lists** (*list*) – list of qubit lists (what was passed to the circuit generation)

## Methods

|                                                                                                                                                                                                         |                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`add_data`](qiskit.ignis.verification.QVFitter.add_data#qiskit.ignis.verification.QVFitter.add_data "qiskit.ignis.verification.QVFitter.add_data")                                                     | Add a new result.                                                                                                                      |
| [`add_statevectors`](qiskit.ignis.verification.QVFitter.add_statevectors#qiskit.ignis.verification.QVFitter.add_statevectors "qiskit.ignis.verification.QVFitter.add_statevectors")                     | Add the ideal results and convert to the heavy outputs.                                                                                |
| [`calc_confidence_level`](qiskit.ignis.verification.QVFitter.calc_confidence_level#qiskit.ignis.verification.QVFitter.calc_confidence_level "qiskit.ignis.verification.QVFitter.calc_confidence_level") | Calculate confidence level using z value.                                                                                              |
| [`calc_data`](qiskit.ignis.verification.QVFitter.calc_data#qiskit.ignis.verification.QVFitter.calc_data "qiskit.ignis.verification.QVFitter.calc_data")                                                 | Make a count dictionary for each unique circuit from all the results.                                                                  |
| [`calc_statistics`](qiskit.ignis.verification.QVFitter.calc_statistics#qiskit.ignis.verification.QVFitter.calc_statistics "qiskit.ignis.verification.QVFitter.calc_statistics")                         | Convert the heavy outputs in the different trials into mean and error for plotting.                                                    |
| [`calc_z_value`](qiskit.ignis.verification.QVFitter.calc_z_value#qiskit.ignis.verification.QVFitter.calc_z_value "qiskit.ignis.verification.QVFitter.calc_z_value")                                     | Calculate z value using mean and sigma.                                                                                                |
| [`plot_hop_accumulative`](qiskit.ignis.verification.QVFitter.plot_hop_accumulative#qiskit.ignis.verification.QVFitter.plot_hop_accumulative "qiskit.ignis.verification.QVFitter.plot_hop_accumulative") | Plot individual and accumulative heavy output probability (HOP) as a function of number of trials.                                     |
| [`plot_qv_data`](qiskit.ignis.verification.QVFitter.plot_qv_data#qiskit.ignis.verification.QVFitter.plot_qv_data "qiskit.ignis.verification.QVFitter.plot_qv_data")                                     | Plot the qv data as a function of depth                                                                                                |
| [`plot_qv_trial`](qiskit.ignis.verification.QVFitter.plot_qv_trial#qiskit.ignis.verification.QVFitter.plot_qv_trial "qiskit.ignis.verification.QVFitter.plot_qv_trial")                                 | Plot individual trial.                                                                                                                 |
| [`quantum_volume`](qiskit.ignis.verification.QVFitter.quantum_volume#qiskit.ignis.verification.QVFitter.quantum_volume "qiskit.ignis.verification.QVFitter.quantum_volume")                             | Return the volume for each depth.                                                                                                      |
| [`qv_success`](qiskit.ignis.verification.QVFitter.qv_success#qiskit.ignis.verification.QVFitter.qv_success "qiskit.ignis.verification.QVFitter.qv_success")                                             | Return whether each depth was successful (> 2/3 with confidence level > 0.977 corresponding to z\_value = 2) and the confidence level. |

## Attributes

<span id="undefined" />

### depths

Return depth list.

<span id="undefined" />

### heavy\_output\_counts

Return the number of heavy output counts as measured.

<span id="undefined" />

### heavy\_output\_prob\_ideal

Return the heavy output probability ideally.

<span id="undefined" />

### heavy\_outputs

Return the ideal heavy outputs dictionary.

<span id="undefined" />

### qubit\_lists

Return depth list.

<span id="undefined" />

### results

Return all the results.

<span id="undefined" />

### ydata

Return the average and std of the output probability.
