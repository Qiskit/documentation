# qiskit.providers.aer.noise.device.thermal\_relaxation\_values[¶](#qiskit-providers-aer-noise-device-thermal-relaxation-values "Permalink to this headline")

<span id="undefined" />

`thermal_relaxation_values(properties)`

Return T1, T2 and frequency values from a devices BackendProperties.

**Parameters**

**properties** ([*BackendProperties*](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties")) – device backend properties

**Returns**

A list of tuples `(T1, T2, freq)` for each qubit in the device. If $T_1$, $T_2$, or frequency cannot be found for qubit a value of `Numpy.inf` will be used.

**Return type**

list

## Additional Information:

$T_1$ and $T_2$ values are returned in microsecond (µs) units. Frequency is returned in gigahertz (GHz) units.
