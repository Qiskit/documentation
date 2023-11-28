# MCMT

<span id="undefined" />

`MCMT(gate, num_ctrl_qubits, num_target_qubits, label=None)`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

The multi-controlled multi-target gate, for an arbitrary singly controlled target gate.

For example, the H gate controlled on 3 qubits and acting on 2 target qubit is represented as:

```python
───■────
   │
───■────
   │
───■────
┌──┴───┐
┤0     ├
│  2-H │
┤1     ├
└──────┘
```

This default implementations requires no ancilla qubits, by broadcasting the target gate to the number of target qubits and using Qiskit’s generic control routine to control the broadcasted target on the control qubits. If ancilla qubits are available, a more efficient variant using the so-called V-chain decomposition can be used. This is implemented in [`MCMTVChain`](qiskit.circuit.library.MCMTVChain#qiskit.circuit.library.MCMTVChain "qiskit.circuit.library.MCMTVChain").

Create a new multi-control multi-target gate.

**Parameters**

*   **gate** (`Union`\[`Gate`, `Callable`\[\[`QuantumCircuit`, `Qubit`, `Qubit`], `Instruction`]]) – The gate to be applied controlled on the control qubits and applied to the target qubits. Can be either a Gate or a circuit method. If it is a callable, it will be casted to a Gate.
*   **num\_ctrl\_qubits** (`int`) – The number of control qubits.
*   **num\_target\_qubits** (`int`) – The number of target qubits.
*   **label** (`Optional`\[`str`]) – The name for the controlled circuit block. If None, set to C-name where name is gate.name.

**Raises**

*   **AttributeError** – If the gate cannot be casted to a controlled gate.
*   **AttributeError** – If the number of controls or targets is 0.

## Methods Defined Here

|                                                                                                                            |                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [`control`](qiskit.circuit.library.MCMT.control#qiskit.circuit.library.MCMT.control "qiskit.circuit.library.MCMT.control") | Return the controlled version of the MCMT circuit. |
| [`inverse`](qiskit.circuit.library.MCMT.inverse#qiskit.circuit.library.MCMT.inverse "qiskit.circuit.library.MCMT.inverse") | Return the inverse MCMT circuit, which is itself.  |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

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

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="undefined" />

### num\_ancilla\_qubits

Return the number of ancillas.

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="undefined" />

### num\_clbits

Return number of classical bits.

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

<span id="undefined" />

### num\_qubits

Return number of qubits.

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.
