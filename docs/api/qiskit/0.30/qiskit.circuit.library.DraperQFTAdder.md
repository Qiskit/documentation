---
title: DraperQFTAdder
description: API reference for qiskit.circuit.library.DraperQFTAdder
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.DraperQFTAdder
---

# DraperQFTAdder

<span id="qiskit.circuit.library.DraperQFTAdder" />

`DraperQFTAdder(num_state_qubits, kind='fixed', name='DraperQFTAdder')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.18/qiskit/circuit/library/arithmetic/adders/draper_qft_adder.py "view source code")

Bases: `qiskit.circuit.library.arithmetic.adders.adder.Adder`

A circuit that uses QFT to perform in-place addition on two qubit registers.

For registers with $n$ qubits, the QFT adder can perform addition modulo $2^n$ (with `kind="fixed"`) or ordinary addition by adding a carry qubits (with `kind="half"`).

As an example, a non-fixed\_point QFT adder circuit that performs addition on two 2-qubit sized registers is as follows:

```python
 a_0:   ─────────■──────■────────────────────────■────────────────
                 │      │                        │
 a_1:   ─────────┼──────┼────────■──────■────────┼────────────────
        ┌──────┐ │P(π)  │        │      │        │       ┌───────┐
 b_0:   ┤0     ├─■──────┼────────┼──────┼────────┼───────┤0      ├
        │      │        │P(π/2)  │P(π)  │        │       │       │
 b_1:   ┤1 qft ├────────■────────■──────┼────────┼───────┤1 iqft ├
        │      │                        │P(π/2)  │P(π/4) │       │
cout_0: ┤2     ├────────────────────────■────────■───────┤2      ├
        └──────┘                                         └───────┘
```

**References:**

\[1] T. G. Draper, Addition on a Quantum Computer, 2000. [arXiv:quant-ph/0008033](https://arxiv.org/pdf/quant-ph/0008033.pdf)

\[2] Ruiz-Perez et al., Quantum arithmetic with the Quantum Fourier Transform, 2017. [arXiv:1411.5949](https://arxiv.org/pdf/1411.5949.pdf)

\[3] Vedral et al., Quantum Networks for Elementary Arithmetic Operations, 1995. [arXiv:quant-ph/9511018](https://arxiv.org/pdf/quant-ph/9511018.pdf)

**Parameters**

*   **num\_state\_qubits** (`int`) – The number of qubits in either input register for state $|a\rangle$ or $|b\rangle$. The two input registers must have the same number of qubits.
*   **kind** (`str`) – The kind of adder, can be `'half'` for a half adder or `'fixed'` for a fixed-sized adder. A half adder contains a carry-out to represent the most-significant bit, but the fixed-sized adder doesn’t and hence performs addition modulo `2 ** num_state_qubits`.
*   **name** (`str`) – The name of the circuit object.

**Raises**

**ValueError** – If `num_state_qubits` is lower than 1.

## Attributes

<span id="qiskit.circuit.library.DraperQFTAdder.ancillas" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="qiskit.circuit.library.DraperQFTAdder.calibrations" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="qiskit.circuit.library.DraperQFTAdder.clbits" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="qiskit.circuit.library.DraperQFTAdder.data" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="qiskit.circuit.library.DraperQFTAdder.extension_lib" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="qiskit.circuit.library.DraperQFTAdder.global_phase" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="qiskit.circuit.library.DraperQFTAdder.header" />

### header

`= 'OPENQASM 2.0;'`

<span id="qiskit.circuit.library.DraperQFTAdder.instances" />

### instances

`= 16`

<span id="qiskit.circuit.library.DraperQFTAdder.metadata" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="qiskit.circuit.library.DraperQFTAdder.num_ancillas" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="qiskit.circuit.library.DraperQFTAdder.num_clbits" />

### num\_clbits

Return number of classical bits.

<span id="qiskit.circuit.library.DraperQFTAdder.num_parameters" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="qiskit.circuit.library.DraperQFTAdder.num_qubits" />

### num\_qubits

Return number of qubits.

<span id="qiskit.circuit.library.DraperQFTAdder.num_state_qubits" />

### num\_state\_qubits

The number of state qubits, i.e. the number of bits in each input register.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="qiskit.circuit.library.DraperQFTAdder.parameters" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="qiskit.circuit.library.DraperQFTAdder.prefix" />

### prefix

`= 'circuit'`

<span id="qiskit.circuit.library.DraperQFTAdder.qubits" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

