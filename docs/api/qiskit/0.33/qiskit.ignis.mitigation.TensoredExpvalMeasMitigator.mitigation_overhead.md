# qiskit.ignis.mitigation.TensoredExpvalMeasMitigator.mitigation\_overhead

`TensoredExpvalMeasMitigator.mitigation_overhead(qubits=None)`

Return the mitigation overhead for expectation value estimation.

This is the multiplicative factor of extra shots required for estimating a mitigated expectation value with the same accuracy as an unmitigated expectation value.

**Parameters**

**qubits** (`Optional`\[`List`\[`int`]]) – Optional, qubits being measured for operator expval.

**Returns**

the mitigation overhead factor.

**Return type**

int
