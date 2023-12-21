# qiskit.utils.mitigation.CompleteMeasFitter.readout\_fidelity

`CompleteMeasFitter.readout_fidelity(label_list=None)`

Based on the results, output the readout fidelity which is the normalized trace of the calibration matrix

**Parameters**

**label\_list** (*bool*) – If None, returns the average assignment fidelity of a single state. Otherwise it returns the assignment fidelity to be in any one of these states averaged over the second index.

**Returns**

readout fidelity (assignment fidelity)

**Return type**

numpy.array

## Additional Information:

The on-diagonal elements of the calibration matrix are the probabilities of measuring state ‘x’ given preparation of state ‘x’ and so the normalized trace is the average assignment fidelity
