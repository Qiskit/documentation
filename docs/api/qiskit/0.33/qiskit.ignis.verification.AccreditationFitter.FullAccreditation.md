# qiskit.ignis.verification.AccreditationFitter.FullAccreditation

`AccreditationFitter.FullAccreditation(confidence)`

This function computes the bound on variation distance based and the confidence interval desired. This protocol is from \[1] and fully treats non-Markovian errors

**Parameters**

**confidence** (*float*) – number between 0 and 1

**Returns**

dict of postselected target counts float: 1-norm bound from noiseless samples float: confidence

**Return type**

dict

**Raises**

**QiskitError** – If no runs are accepted or confidence is outside of 0,1
