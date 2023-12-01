# qiskit.ignis.characterization.rabi\_schedules

<span id="undefined" />

`rabi_schedules(amp_list, qubits, pulse_width, pulse_sigma=None, width_sigma_ratio=4, drives=None, inst_map=None, meas_map=None)`

Generates schedules for a rabi experiment using a Gaussian pulse

**Parameters**

*   **amp\_list** (*list*) – A list of floats of amplitudes for the Gaussian pulse \[-1,1]
*   **qubits** (*list*) – A list of integers for indices of the qubits to perform a rabi
*   **pulse\_width** (*float*) – width of gaussian (in dt units)
*   **pulse\_sigma** (*float*) – sigma of gaussian
*   **width\_sigma\_ratio** (*int*) – set sigma to a certain ratio of the width (use if pulse\_sigma is None)
*   **drives** (*list*) – list of [`DriveChannel`](qiskit.pulse.DriveChannel#qiskit.pulse.DriveChannel "qiskit.pulse.DriveChannel") objects
*   **inst\_map** ([*qiskit.pulse.InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")) – InstructionScheduleMap object to use
*   **meas\_map** (*list*) – meas\_map to use

**Returns**

A list of QuantumSchedules xdata: a list of amps

**Raises**

**QiskitError** – when necessary variables are not supplied.
