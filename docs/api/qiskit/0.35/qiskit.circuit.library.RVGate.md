# RVGate



`RVGate(v_x, v_y, v_z, basis='U')`

Bases: `qiskit.circuit.gate.Gate`

Rotation around arbitrary rotation axis $v$ where $|v|$ is angle of rotation in radians.

**Circuit symbol:**

```python
     ┌─────────────────┐
q_0: ┤ RV(v_x,v_y,v_z) ├
     └─────────────────┘
```

**Matrix Representation:**

$$
\begin{split}\newcommand{\th}{|\vec{v}|}
\newcommand{\sinc}{\text{sinc}}
    R(\vec{v}) = e^{-i \vec{v}\cdot\vec{\sigma}} =
        \begin{pmatrix}
            \cos{\th} -i v_z \sinc(\th) & -(i v_x + v_y) \sinc(\th) \\
            -(i v_x - v_y) \sinc(\th) & \cos(\th) + i v_z \sinc(\th)
        \end{pmatrix}\end{split}
$$

Create new rv single-qubit gate.

**Parameters**

*   **v\_x** (*float*) – x-component
*   **v\_y** (*float*) – y-component
*   **v\_z** (*float*) – z-component
*   **basis** (*str, optional*) – basis (see `OneQubitEulerDecomposer`)

## Methods Defined Here

|                                                                                                                                          |                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| [`inverse`](qiskit.circuit.library.RVGate.inverse#qiskit.circuit.library.RVGate.inverse "qiskit.circuit.library.RVGate.inverse")         | Invert this gate.                       |
| [`to_matrix`](qiskit.circuit.library.RVGate.to_matrix#qiskit.circuit.library.RVGate.to_matrix "qiskit.circuit.library.RVGate.to_matrix") | Return a numpy.array for the R(v) gate. |

## Attributes



### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]



### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.



### definition

Return definition in terms of other basic gates.



### duration

Get the duration.



### label

Return instruction label

**Return type**

`str`



### name

Return the name.



### num\_clbits

Return the number of clbits.



### num\_qubits

Return the number of qubits.



### params

return instruction params.



### unit

Get the time unit of duration.
