---
title: GlobalPhaseGate
description: API reference for qiskit.circuit.library.GlobalPhaseGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.GlobalPhaseGate
---

# GlobalPhaseGate

<span id="qiskit.circuit.library.GlobalPhaseGate" />

`GlobalPhaseGate(phase, label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.24/qiskit/circuit/library/standard_gates/global_phase.py "view source code")

Bases: [`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate")

The global phase gate ($e^{i\theta}$).

Can be applied to a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Mathematical Representation:**

$$
\text{GlobalPhaseGate}\ =
    \begin{pmatrix}
        e^{i\theta}
    \end{pmatrix}
$$

**Parameters**

*   **phase** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression") *| float*) – The value of phase it takes.
*   **label** (*str | None*) – An optional label for the gate.

## Methods Defined Here

<span id="qiskit-circuit-library-globalphasegate-inverse" />

### inverse

<span id="qiskit.circuit.library.GlobalPhaseGate.inverse" />

`GlobalPhaseGate.inverse()`

Return inverted GLobalPhaseGate gate.

$\text{GlobalPhaseGate}(\lambda)^{\dagger} = \text{GlobalPhaseGate}(-\lambda)$

## Attributes

<span id="qiskit.circuit.library.GlobalPhaseGate.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.circuit.library.GlobalPhaseGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.GlobalPhaseGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.GlobalPhaseGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.GlobalPhaseGate.label" />

### label

Return instruction label

<span id="qiskit.circuit.library.GlobalPhaseGate.name" />

### name

Return the name.

<span id="qiskit.circuit.library.GlobalPhaseGate.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.circuit.library.GlobalPhaseGate.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.circuit.library.GlobalPhaseGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.GlobalPhaseGate.unit" />

### unit

Get the time unit of duration.

