# qiskit.providers.aer.pulse.PulseSystemModel.calculate\_channel\_frequencies

`PulseSystemModel.calculate_channel_frequencies(qubit_lo_freq=None)`

Calculate frequencies for each channel given qubit\_lo\_freq.

**Parameters**

**qubit\_lo\_freq** (*list or None*) – list of qubit linear oscillator drive frequencies.

**Returns**

a dictionary of channel frequencies.

**Return type**

OrderedDict

**Raises**

**ValueError** – If channel or u\_channel\_lo are invalid.
