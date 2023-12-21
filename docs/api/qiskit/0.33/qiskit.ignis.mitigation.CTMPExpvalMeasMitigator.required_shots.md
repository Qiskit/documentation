# qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.required\_shots

`CTMPExpvalMeasMitigator.required_shots(delta, qubits=None)`

Return the number of shots required for expectation value estimation.

This is the number of shots required so that $|\langle O \rangle_{est} - \langle O \rangle_{true}| < \delta$ with high probability (at least 2/3) and is given by $4\delta^2 \Gamma^2$ where $\Gamma^2$ is the [`mitigation_overhead()`](qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead#qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead "qiskit.ignis.mitigation.CTMPExpvalMeasMitigator.mitigation_overhead").

**Parameters**

*   **delta** (`float`) – Error tolerance for expectation value estimator.
*   **qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured for operator expval.

**Returns**

the required shots.

**Return type**

int
