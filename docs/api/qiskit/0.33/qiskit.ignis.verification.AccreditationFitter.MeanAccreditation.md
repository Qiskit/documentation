# qiskit.ignis.verification.AccreditationFitter.MeanAccreditation

`AccreditationFitter.MeanAccreditation(confidence)`

This function computes the bound on variation distance based and the confidence interval desired. This protocol is from \[2] and assumes Markovianity but gives an improved bound

**Parameters**

**confidence** (*float*) – number between 0 and 1

**Returns**

dict of corrected target counts float: 1-norm bound from noiseless samples float: confidence

**Return type**

dict
