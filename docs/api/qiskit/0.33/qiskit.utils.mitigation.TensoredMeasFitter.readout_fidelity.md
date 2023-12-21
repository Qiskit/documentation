# qiskit.utils.mitigation.TensoredMeasFitter.readout\_fidelity

`TensoredMeasFitter.readout_fidelity(cal_index=0, label_list=None)`

Based on the results, output the readout fidelity, which is the average of the diagonal entries in the calibration matrices.

**Parameters**

*   **cal\_index** (*integer*) – readout fidelity for this index in \_cal\_matrices
*   **label\_list** (*list*) – Returns the average fidelity over of the groups f states. In the form of a list of lists of states. If None, then each state used in the construction of the calibration matrices forms a group of size 1

**Returns**

The readout fidelity (assignment fidelity)

**Return type**

numpy.array

**Raises**

**QiskitError** – If the calibration matrix has not been set for the object.

## Additional Information:

The on-diagonal elements of the calibration matrices are the probabilities of measuring state ‘x’ given preparation of state ‘x’.
