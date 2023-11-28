# qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter

<span id="undefined" />

`ExpvalMeasMitigatorFitter(result, metadata)`

Expectation value measurement error mitigator calibration fitter.

See [`qiskit.ignis.mitigation.expval_meas_mitigator_circuits()`](qiskit.ignis.mitigation.expval_meas_mitigator_circuits#qiskit.ignis.mitigation.expval_meas_mitigator_circuits "qiskit.ignis.mitigation.expval_meas_mitigator_circuits") for additional documentation.

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

<span id="undefined" />

`__init__(result, metadata)`

Fit a measurement error mitigator object from experiment data.

**Parameters**

*   **result** (`Result`) – Qiskit result object.
*   **metadata** (`List`\[`Dict`\[`str`, `any`]]) – mitigation generator metadata.

## Methods

|                                                                                                                                                          |                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| [`__init__`](#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.__init__ "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.__init__")(result, metadata) | Fit a measurement error mitigator object from experiment data. |
| [`fit`](#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.fit")(\[method, generators])           | Fit and return the Mitigator object from the calibration data. |

## Attributes

|                                                                                                                                           |                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`mitigator`](#qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.mitigator "qiskit.ignis.mitigation.ExpvalMeasMitigatorFitter.mitigator") | Return the fitted mitigator object |

<span id="undefined" />

`fit(method=None, generators=None)`

Fit and return the Mitigator object from the calibration data.

**Return type**

`Union`\[`CompleteExpvalMeasMitigator`, `TensoredExpvalMeasMitigator`, `CTMPExpvalMeasMitigator`]

<span id="undefined" />

`property mitigator`

Return the fitted mitigator object
