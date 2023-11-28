# InnerProduct

<span id="undefined" />

`InnerProduct(num_qubits)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A 2n-qubit Boolean function that computes the inner product of two n-qubit vectors over $F_2$.

This implementation is a phase oracle which computes the following transform.

$$
\mathcal{IP}_{2n} : F_2^{2n} \rightarrow {-1, 1}
\mathcal{IP}_{2n}(x_1, \cdots, x_n, y_1, \cdots, y_n) = (-1)^{x.y}
$$

The corresponding unitary is a diagonal, which induces a -1 phase on any inputs where the inner product of the top and bottom registers is 1. Otherwise it keeps the input intact.

```python
q0_0: ─■──────────
       │
q0_1: ─┼──■───────
       │  │
q0_2: ─┼──┼──■────
       │  │  │
q0_3: ─┼──┼──┼──■─
       │  │  │  │
q1_0: ─■──┼──┼──┼─
          │  │  │
q1_1: ────■──┼──┼─
             │  │
q1_2: ───────■──┼─
                │
q1_3: ──────────■─
```

**Reference Circuit:**

Return a circuit to compute the inner product of 2 n-qubit registers.

**Parameters**

**num\_qubits** (`int`) – width of top and bottom registers (half total circuit width)

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

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

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

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

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
