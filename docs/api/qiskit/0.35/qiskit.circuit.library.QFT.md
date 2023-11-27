# QFT[¶](#qft "Permalink to this headline")

<span id="undefined" />

`QFT(num_qubits=None, approximation_degree=0, do_swaps=True, inverse=False, insert_barriers=False, name=None)`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

Quantum Fourier Transform Circuit.

The Quantum Fourier Transform (QFT) on $n$ qubits is the operation

$$
|j\rangle \mapsto \frac{1}{2^{n/2}} \sum_{k=0}^{2^n - 1} e^{2\pi ijk / 2^n} |k\rangle
$$

The circuit that implements this transformation can be implemented using Hadamard gates on each qubit, a series of controlled-U1 (or Z, depending on the phase) gates and a layer of Swap gates. The layer of Swap gates can in principle be dropped if the QFT appears at the end of the circuit, since then the re-ordering can be done classically. They can be turned off using the `do_swaps` attribute.

For 4 qubits, the circuit that implements this transformation is:

The inverse QFT can be obtained by calling the `inverse` method on this class. The respective circuit diagram is:

One method to reduce circuit depth is to implement the QFT approximately by ignoring controlled-phase rotations where the angle is beneath a threshold. This is discussed in more detail in [https://arxiv.org/abs/quant-ph/9601018](https://arxiv.org/abs/quant-ph/9601018) or [https://arxiv.org/abs/quant-ph/0403071](https://arxiv.org/abs/quant-ph/0403071).

Here, this can be adjusted using the `approximation_degree` attribute: the smallest `approximation_degree` rotation angles are dropped from the QFT. For instance, a QFT on 5 qubits with approximation degree 2 yields (the barriers are dropped in this example):

Construct a new QFT circuit.

**Parameters**

*   **num\_qubits** (`Optional`\[`int`]) – The number of qubits on which the QFT acts.
*   **approximation\_degree** (`int`) – The degree of approximation (0 for no approximation).
*   **do\_swaps** (`bool`) – Whether to include the final swaps in the QFT.
*   **inverse** (`bool`) – If True, the inverse Fourier transform is constructed.
*   **insert\_barriers** (`bool`) – If True, barriers are inserted as visualization improvement.
*   **name** (`Optional`\[`str`]) – The name of the circuit.

## Methods Defined Here

|                                                                                                                                     |                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [`inverse`](qiskit.circuit.library.QFT.inverse#qiskit.circuit.library.QFT.inverse "qiskit.circuit.library.QFT.inverse")             | Invert this circuit.                                  |
| [`is_inverse`](qiskit.circuit.library.QFT.is_inverse#qiskit.circuit.library.QFT.is_inverse "qiskit.circuit.library.QFT.is_inverse") | Whether the inverse Fourier transform is implemented. |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### approximation\_degree

The approximation degree of the QFT.

**Return type**

`int`

**Returns**

The currently set approximation degree.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

<span id="undefined" />

### do\_swaps

Whether the final swaps of the QFT are applied or not.

**Return type**

`bool`

**Returns**

True, if the final swaps are applied, False if not.

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### insert\_barriers

Whether barriers are inserted for better visualization or not.

**Return type**

`bool`

**Returns**

True, if barriers are inserted, False if not.

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_qubits

The number of qubits in the QFT circuit.

**Return type**

`int`

**Returns**

The number of qubits in the circuit.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
