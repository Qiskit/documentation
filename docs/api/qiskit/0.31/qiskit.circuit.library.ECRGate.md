# ECRGate

<span id="undefined" />

`ECRGate`

Bases: `qiskit.circuit.gate.Gate`

An echoed RZX(pi/2) gate implemented using RZX(pi/4) and RZX(-pi/4).

This gate is maximally entangling and is equivalent to a CNOT up to single-qubit pre-rotations. The echoing procedure mitigates some unwanted terms (terms other than ZX) to cancel in an experiment.

**Circuit Symbol:**

```python
     ┌─────────┐            ┌────────────┐┌────────┐┌─────────────┐
q_0: ┤0        ├       q_0: ┤0           ├┤ RX(pi) ├┤0            ├
     │   ECR   │   =        │  RZX(pi/4) │└────────┘│  RZX(-pi/4) │
q_1: ┤1        ├       q_1: ┤1           ├──────────┤1            ├
     └─────────┘            └────────────┘          └─────────────┘
```

**Matrix Representation:**

$$
\begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
    \begin{pmatrix}
        0   & 1   &  0  & i \\
        1   & 0   &  -i & 0 \\
        0   & i   &  0  & 1 \\
        -i  & 0   &  1  & 0
    \end{pmatrix}\end{split}
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in the $X \otimes Z$ tensor order. Instead, if we apply it on (q\_1, q\_0), the matrix will be $Z \otimes X$:

  ```python
       ┌─────────┐
  q_0: ┤1        ├
       │   ECR   │
  q_1: ┤0        ├
       └─────────┘
  ```

  $$
  \begin{split}ECR\ q_0, q_1 = \frac{1}{\sqrt{2}}
      \begin{pmatrix}
          0   & 0   &  1  & i \\
          0   & 0   &  i  & 1 \\
          1   & -i  &  0  & 0 \\
          -i  & 1   &  0  & 0
      \end{pmatrix}\end{split}
  $$
</Admonition>

Create new ECR gate.

## Methods Defined Here

|                                                                                                                                             |                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`to_matrix`](qiskit.circuit.library.ECRGate.to_matrix#qiskit.circuit.library.ECRGate.to_matrix "qiskit.circuit.library.ECRGate.to_matrix") | Return a numpy.array for the ECR gate. |

## Attributes

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
