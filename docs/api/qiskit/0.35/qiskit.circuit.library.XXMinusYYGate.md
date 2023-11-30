# XXMinusYYGate

<span id="undefined" />

`XXMinusYYGate(theta, beta=0, label='{XX-YY}')`

Bases: `qiskit.circuit.gate.Gate`

XX-YY interaction gate.

A 2-qubit parameterized XX-YY interaction. Its action is to induce a coherent rotation by some angle between $|00\rangle$ and $|11\rangle$.

**Circuit Symbol:**

```python
     ┌───────────────┐
q_0: ┤0              ├
     │  {XX-YY}(θ,β) │
q_1: ┤1              ├
     └───────────────┘
```

**Matrix Representation:**

$$
 \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX-YY}(\theta, \beta) q_0, q_1 =
  RZ_1(\beta) \cdot exp(-i \frac{\theta}{2} \frac{XX-YY}{2}) \cdot RZ_1(-\beta) =
    \begin{pmatrix}
        \cos(\th)             & 0 & 0 & -i\sin(\th)e^{-i\beta}  \\
        0                     & 1 & 0 & 0  \\
        0                     & 0 & 1 & 0  \\
        -i\sin(\th)e^{i\beta} & 0 & 0 & \cos(\th)
    \end{pmatrix}\end{split}\end{aligned}\end{align} 
$$

<Admonition title="Note" type="note">
  In Qiskit’s convention, higher qubit indices are more significant (little endian convention). In the above example we apply the gate on (q\_0, q\_1) which results in adding the (optional) phase defined by $beta$ on q\_1. Instead, if we apply it on (q\_1, q\_0), the phase is added on q\_0. If $beta$ is set to its default value of $0$, the gate is equivalent in big and little endian.

  ```python
       ┌───────────────┐
  q_0: ┤1              ├
       │  {XX-YY}(θ,β) │
  q_1: ┤0              ├
       └───────────────┘
  ```

  $$
   \begin{align}\begin{aligned}\newcommand{\th}{\frac{\theta}{2}}\\\begin{split}R_{XX-YY}(\theta, \beta) q_1, q_0 =
  RZ_0(\beta) \cdot exp(-i \frac{\theta}{2} \frac{XX-YY}{2}) \cdot RZ_0(-\beta) =
      \begin{pmatrix}
          \cos(\th)             & 0 & 0 & -i\sin(\th)e^{i\beta}  \\
          0                     & 1 & 0 & 0  \\
          0                     & 0 & 1 & 0  \\
          -i\sin(\th)e^{-i\beta} & 0 & 0 & \cos(\th)
      \end{pmatrix}\end{split}\end{aligned}\end{align} 
  $$
</Admonition>

Create new XX-YY gate.

**Parameters**

*   **theta** (`Union`\[`ParameterExpression`, `float`]) – The rotation angle.
*   **beta** (`Union`\[`ParameterExpression`, `float`]) – The phase angle.
*   **label** (`Optional`\[`str`]) – The label of the gate.

## Methods Defined Here

|                                                                                                                                                       |               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| [`inverse`](qiskit.circuit.library.XXMinusYYGate.inverse#qiskit.circuit.library.XXMinusYYGate.inverse "qiskit.circuit.library.XXMinusYYGate.inverse") | Inverse gate. |

## Attributes

<span id="undefined" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

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

### name

Return the name.

<span id="undefined" />

### num\_clbits

Return the number of clbits.

<span id="undefined" />

### num\_qubits

Return the number of qubits.

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
