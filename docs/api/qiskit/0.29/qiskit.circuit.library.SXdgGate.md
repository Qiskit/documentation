---
title: SXdgGate
description: API reference for qiskit.circuit.library.SXdgGate
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.SXdgGate
---

# SXdgGate

<span id="qiskit.circuit.library.SXdgGate" />

`SXdgGate(label=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/standard_gates/sx.py "view source code")

Bases: `qiskit.circuit.gate.Gate`

The inverse single-qubit Sqrt(X) gate.

$$
\begin{split}\sqrt{X}^{\dagger} = \frac{1}{2} \begin{pmatrix}
        1 - i & 1 + i \\
        1 + i & 1 - i
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  A global phase difference exists between the definitions of $RX(-\pi/2)$ and $\sqrt{X}^{\dagger}$.

  $$
  \begin{split}RX(-\pi/2) = \frac{1}{\sqrt{2}} \begin{pmatrix}
              1 & i \\
              i & 1
            \end{pmatrix}
          = e^{-i pi/4} \sqrt{X}^{\dagger}\end{split}
  $$
</Admonition>

Create new SXdg gate.

## Methods Defined Here

### inverse

<span id="qiskit.circuit.library.SXdgGate.inverse" />

`SXdgGate.inverse()`

Return inverse SXdg gate (i.e. SX).

## Attributes

<span id="qiskit.circuit.library.SXdgGate.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.circuit.library.SXdgGate.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.circuit.library.SXdgGate.duration" />

### duration

Get the duration.

<span id="qiskit.circuit.library.SXdgGate.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.circuit.library.SXdgGate.params" />

### params

return instruction params.

<span id="qiskit.circuit.library.SXdgGate.unit" />

### unit

Get the time unit of duration.

