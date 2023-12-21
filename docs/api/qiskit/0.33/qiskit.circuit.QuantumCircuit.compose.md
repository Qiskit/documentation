# qiskit.circuit.QuantumCircuit.compose

`QuantumCircuit.compose(other, qubits=None, clbits=None, front=False, inplace=False, wrap=False)`

Compose circuit with `other` circuit or instruction, optionally permuting wires.

`other` can be narrower or of equal width to `self`.

**Parameters**

*   **other** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – (sub)circuit or instruction to compose onto self. If not a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), this can be anything that [`append`](qiskit.circuit.QuantumCircuit.append#qiskit.circuit.QuantumCircuit.append "qiskit.circuit.QuantumCircuit.append") will accept.
*   **qubits** (*list\[Qubit|int]*) – qubits of self to compose onto.
*   **clbits** (*list\[Clbit|int]*) – clbits of self to compose onto.
*   **front** (*bool*) – If True, front composition will be performed (not implemented yet).
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.
*   **wrap** (*bool*) – If True, wraps the other circuit into a gate (or instruction, depending on whether it contains only unitary instructions) before composing it onto self.

**Returns**

the composed circuit (returns None if inplace==True).

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **CircuitError** – if composing on the front.
*   **QiskitError** – if `other` is wider or there are duplicate edge mappings.

Examples:

```python
lhs.compose(rhs, qubits=[3, 2], inplace=True)

.. parsed-literal::

                ┌───┐                   ┌─────┐                ┌───┐
    lqr_1_0: ───┤ H ├───    rqr_0: ──■──┤ Tdg ├    lqr_1_0: ───┤ H ├───────────────
                ├───┤              ┌─┴─┐└─────┘                ├───┤
    lqr_1_1: ───┤ X ├───    rqr_1: ┤ X ├───────    lqr_1_1: ───┤ X ├───────────────
             ┌──┴───┴──┐           └───┘                    ┌──┴───┴──┐┌───┐
    lqr_1_2: ┤ U1(0.1) ├  +                     =  lqr_1_2: ┤ U1(0.1) ├┤ X ├───────
             └─────────┘                                    └─────────┘└─┬─┘┌─────┐
    lqr_2_0: ─────■─────                           lqr_2_0: ─────■───────■──┤ Tdg ├
                ┌─┴─┐                                          ┌─┴─┐        └─────┘
    lqr_2_1: ───┤ X ├───                           lqr_2_1: ───┤ X ├───────────────
                └───┘                                          └───┘
    lcr_0: 0 ═══════════                           lcr_0: 0 ═══════════════════════

    lcr_1: 0 ═══════════                           lcr_1: 0 ═══════════════════════
```
