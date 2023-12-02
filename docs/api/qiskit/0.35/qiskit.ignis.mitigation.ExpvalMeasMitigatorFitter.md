# ExpvalMeasMitigatorFitter

<span id="undefined" />

`ExpvalMeasMitigatorFitter(result, metadata)`

Bases: `object`

Expectation value measurement error mitigator calibration fitter.

See [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits#qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") for additional documentation.

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

## Methods

|                                                                                                                                                                              |                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`fit`](qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit") | Fit and return the Mitigator object from the calibration data. |

## Attributes

<span id="undefined" />

### mitigator

Return the fitted mitigator object
