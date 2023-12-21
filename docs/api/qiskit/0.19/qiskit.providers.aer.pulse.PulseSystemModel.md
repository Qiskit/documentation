---
title: PulseSystemModel
description: API reference for qiskit.providers.aer.pulse.PulseSystemModel
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.pulse.PulseSystemModel
---

# PulseSystemModel

<span id="qiskit.providers.aer.pulse.PulseSystemModel" />

`PulseSystemModel(hamiltonian=None, qubit_freq_est=None, meas_freq_est=None, u_channel_lo=None, control_channel_labels=None, subsystem_list=None, dt=None)`

Physical model object for pulse simulator.

This class contains model information required by the [`PulseSimulator`](qiskit.providers.aer.PulseSimulator "qiskit.providers.aer.PulseSimulator"). It contains:

> *   `"hamiltonian"`: a `HamiltonianModel` object representing the Hamiltonian of the system.
> *   `"qubit_freq_est"` and `"meas_freq_est"`: optional default values for qubit and measurement frequencies.
> *   `"u_channel_lo"`: A description of `ControlChannel` local oscillator frequencies in terms of qubit local oscillator frequencies.
> *   `"control_channel_labels"`: Optional list of identifying information for each `ControlChannel` that the model supports.
> *   `"subsystem_list"`: List of subsystems in the model.
> *   `"dt"`: Sample width size for OpenPulse instructions.

A model can be instantiated from the helper function [`duffing_system_model()`](qiskit.providers.aer.pulse.duffing_system_model "qiskit.providers.aer.pulse.duffing_system_model"), or using the [`PulseSystemModel.from_backend()`](qiskit.providers.aer.pulse.PulseSystemModel.from_backend "qiskit.providers.aer.pulse.PulseSystemModel.from_backend") constructor.

**Example**

Constructing from a backend:

Initialize a PulseSystemModel.

**Parameters**

*   **hamiltonian** (*HamiltonianModel*) – The Hamiltonian of the system.
*   **qubit\_freq\_est** (*list*) – list of qubit lo frequencies defaults to be used in simulation if none are specified in the PulseQobj.
*   **meas\_freq\_est** (*list*) – list of qubit meas frequencies defaults to be used in simulation if none are specified in the PulseQobj.
*   **u\_channel\_lo** (*list*) – list of ControlChannel frequency specifications.
*   **control\_channel\_labels** (*list*) – list of labels for control channels, which can be of any type.
*   **subsystem\_list** (*list*) – list of valid qubit indicies for the model.
*   **dt** (*float*) – pixel size for pulse Instructions.

**Raises**

[**AerError**](qiskit.providers.aer.AerError "qiskit.providers.aer.AerError") – if hamiltonian is not None or a HamiltonianModel

## Methods

|                                                                                                                                                                                                                 |                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`PulseSystemModel.calculate_channel_frequencies`](qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies "qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies")(\[…]) | Calculate frequencies for each channel given qubit\_lo\_freq.                    |
| [`PulseSystemModel.control_channel_index`](qiskit.providers.aer.pulse.PulseSystemModel.control_channel_index "qiskit.providers.aer.pulse.PulseSystemModel.control_channel_index")(label)                        | Return the index of the control channel with identifying label.                  |
| [`PulseSystemModel.from_backend`](qiskit.providers.aer.pulse.PulseSystemModel.from_backend "qiskit.providers.aer.pulse.PulseSystemModel.from_backend")(backend\[, …])                                           | Returns a PulseSystemModel constructed from an OpenPulse enabled backend object. |

