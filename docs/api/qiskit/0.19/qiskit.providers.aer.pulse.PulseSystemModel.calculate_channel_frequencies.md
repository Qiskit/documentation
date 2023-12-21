---
title: calculate_channel_frequencies
description: API reference for qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies
---

# calculate\_channel\_frequencies

<span id="qiskit.providers.aer.pulse.PulseSystemModel.calculate_channel_frequencies" />

`PulseSystemModel.calculate_channel_frequencies(qubit_lo_freq=None)`

Calculate frequencies for each channel given qubit\_lo\_freq.

**Parameters**

**qubit\_lo\_freq** (*list or None*) – list of qubit linear oscillator drive frequencies. If None these will be calculated using self.\_qubit\_freq\_est.

**Returns**

a dictionary of channel frequencies.

**Return type**

OrderedDict

**Raises**

**ValueError** – If channel or u\_channel\_lo are invalid.

