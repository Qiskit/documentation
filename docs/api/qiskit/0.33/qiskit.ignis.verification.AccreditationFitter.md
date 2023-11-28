# AccreditationFitter

<span id="undefined" />

`AccreditationFitter`

Bases: `object`

Class for fitters for accreditation

Implementation follows the methods from \[1] FullAccreditation and \[2] MeanAccreditation.

Data can be input either as qiskit result objects, or as lists of bitstrings (the latter is useful for batch jobs).

## References

1.  S. Ferracin, T. Kapourniotis, A. Datta. *Accrediting outputs of noisy intermediate-scale quantum computing devices*, New Journal of Physics, Volume 21, 113038. (2019). [NJP 113038](https://iopscience.iop.org/article/10.1088/1367-2630/ab4fd6)
2.  S. Ferracin, S. Merkel, D. McKay, A. Datta. *Experimental accreditation of outputs of noisy quantum computers*, arxiv:2103.06603 (2021). [arXiv:quant-ph/2103.06603](https://arxiv.org/abs/2103.06603)

## Methods

|                                                                                                                                                                                                                                                      |                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`AppendResults`](qiskit.ignis.verification.AccreditationFitter.AppendResults#qiskit.ignis.verification.AccreditationFitter.AppendResults "qiskit.ignis.verification.AccreditationFitter.AppendResults")                                             | Single run of accreditation protocol, data input as qiskit result object assumed to be single shot                                                                                                                                                                       |
| [`AppendStrings`](qiskit.ignis.verification.AccreditationFitter.AppendStrings#qiskit.ignis.verification.AccreditationFitter.AppendStrings "qiskit.ignis.verification.AccreditationFitter.AppendStrings")                                             | Single run of accreditation protocol, data input as a list of output strings                                                                                                                                                                                             |
| [`FullAccreditation`](qiskit.ignis.verification.AccreditationFitter.FullAccreditation#qiskit.ignis.verification.AccreditationFitter.FullAccreditation "qiskit.ignis.verification.AccreditationFitter.FullAccreditation")                             | This function computes the bound on variation distance based and the confidence interval desired.                                                                                                                                                                        |
| [`MeanAccreditation`](qiskit.ignis.verification.AccreditationFitter.MeanAccreditation#qiskit.ignis.verification.AccreditationFitter.MeanAccreditation "qiskit.ignis.verification.AccreditationFitter.MeanAccreditation")                             | This function computes the bound on variation distance based and the confidence interval desired.                                                                                                                                                                        |
| [`Reset`](qiskit.ignis.verification.AccreditationFitter.Reset#qiskit.ignis.verification.AccreditationFitter.Reset "qiskit.ignis.verification.AccreditationFitter.Reset")                                                                             | Reset the accreditation class object                                                                                                                                                                                                                                     |
| [`bound_variation_distance`](qiskit.ignis.verification.AccreditationFitter.bound_variation_distance#qiskit.ignis.verification.AccreditationFitter.bound_variation_distance "qiskit.ignis.verification.AccreditationFitter.bound_variation_distance") | DEPRECATED-This function computes the bound on variation distance based and the confidence :param theta: number between 0 and 1 :type theta: float                                                                                                                       |
| [`single_protocol_run`](qiskit.ignis.verification.AccreditationFitter.single_protocol_run#qiskit.ignis.verification.AccreditationFitter.single_protocol_run "qiskit.ignis.verification.AccreditationFitter.single_protocol_run")                     | DEPRECATED-Single protocol run of accreditation protocol :param results: results of the quantum job :type results: Result :param postp\_list: list of strings used to post-process outputs :type postp\_list: list :param v\_zero: position of target :type v\_zero: int |
