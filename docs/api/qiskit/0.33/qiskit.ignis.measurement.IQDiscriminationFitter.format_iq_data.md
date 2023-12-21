# qiskit.ignis.measurement.IQDiscriminationFitter.format\_iq\_data

`IQDiscriminationFitter.format_iq_data(iq_data)`

Takes IQ data obtained from get\_memory(), applies the qubit mask and formats the data as a list of lists. Each sub list is IQ data where the first half of the list is the I data and the second half of the list is the Q data.

**Parameters**

**iq\_data** (*np.ndarray*) – data obtained from get\_memory().

**Return type**

`List`\[`List`\[`float`]]

**Returns**

A list of shots where each entry is a list of IQ points.

**Raises**

[**PulseError**](pulse#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – if the measurement return type is unknown
