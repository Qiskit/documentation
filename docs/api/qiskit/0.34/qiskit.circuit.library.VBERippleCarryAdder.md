# VBERippleCarryAdder

<span id="undefined" />

`VBERippleCarryAdder(num_state_qubits, kind='full', name='VBERippleCarryAdder')`

Bases: `qiskit.circuit.library.arithmetic.adders.adder.Adder`

The VBE ripple carry adder \[1].

This circuit performs inplace addition of two equally-sized quantum registers. As an example, a classical adder circuit that performs full addition (i.e. including a carry-in bit) on two 2-qubit sized registers is as follows:

```python
          ┌────────┐                       ┌───────────┐┌──────┐
   cin_0: ┤0       ├───────────────────────┤0          ├┤0     ├
          │        │                       │           ││      │
     a_0: ┤1       ├───────────────────────┤1          ├┤1     ├
          │        │┌────────┐     ┌──────┐│           ││  Sum │
     a_1: ┤        ├┤1       ├──■──┤1     ├┤           ├┤      ├
          │        ││        │  │  │      ││           ││      │
     b_0: ┤2 Carry ├┤        ├──┼──┤      ├┤2 Carry_dg ├┤2     ├
          │        ││        │┌─┴─┐│      ││           │└──────┘
     b_1: ┤        ├┤2 Carry ├┤ X ├┤2 Sum ├┤           ├────────
          │        ││        │└───┘│      ││           │
  cout_0: ┤        ├┤3       ├─────┤      ├┤           ├────────
          │        ││        │     │      ││           │
helper_0: ┤3       ├┤0       ├─────┤0     ├┤3          ├────────
          └────────┘└────────┘     └──────┘└───────────┘
```

Here *Carry* and *Sum* gates correspond to the gates introduced in \[1]. *Carry\_dg* correspond to the inverse of the *Carry* gate. Note that in this implementation the input register qubits are ordered as all qubits from the first input register, followed by all qubits from the second input register. This is different ordering as compared to Figure 2 in \[1], which leads to a different drawing of the circuit.

**References:**

\[1] Vedral et al., Quantum Networks for Elementary Arithmetic Operations, 1995. [arXiv:quant-ph/9511018](https://arxiv.org/pdf/quant-ph/9511018.pdf)

**Parameters**

*   **num\_state\_qubits** (`int`) – The size of the register.
*   **kind** (`str`) – The kind of adder, can be `'full'` for a full adder, `'half'` for a half adder, or `'fixed'` for a fixed-sized adder. A full adder includes both carry-in and carry-out, a half only carry-out, and a fixed-sized adder neither carry-in nor carry-out.
*   **name** (`str`) – The name of the circuit.

**Raises**

**ValueError** – If `num_state_qubits` is lower than 1.

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

### num\_state\_qubits

The number of state qubits, i.e. the number of bits in each input register.

**Return type**

`int`

**Returns**

The number of state qubits.

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
