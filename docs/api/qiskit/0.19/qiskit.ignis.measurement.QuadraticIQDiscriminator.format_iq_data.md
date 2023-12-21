---
title: format_iq_data
description: API reference for qiskit.ignis.measurement.QuadraticIQDiscriminator.format_iq_data
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.ignis.measurement.QuadraticIQDiscriminator.format_iq_data
---

# format\_iq\_data

<span id="qiskit.ignis.measurement.QuadraticIQDiscriminator.format_iq_data" />

`QuadraticIQDiscriminator.format_iq_data(iq_data)`

Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. Each sub list is IQ data where the first half of the list is the I data and the second half of the list is the Q data.

**Parameters**

**iq\_data** (*np.ndarray*) – data obtained from get\_memory().

**Return type**

`List`\[`List`\[`float`]]

**Returns**

A list of shots where each entry is a list of IQ points.

**Raises**

[**PulseError**](qiskit.pulse.PulseError "qiskit.pulse.PulseError") – if the measurement return type is unknown

