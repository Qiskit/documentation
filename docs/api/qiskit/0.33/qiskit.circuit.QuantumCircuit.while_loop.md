# qiskit.circuit.QuantumCircuit.while\_loop

`QuantumCircuit.while_loop(condition: Tuple[Union[qiskit.circuit.classicalregister.ClassicalRegister, qiskit.circuit.classicalregister.Clbit], int], body: None, qubits: None, clbits: None, *, label: Optional[str]) → qiskit.circuit.controlflow.while_loop.WhileLoopContext`

`QuantumCircuit.while_loop(condition: Tuple[Union[qiskit.circuit.classicalregister.ClassicalRegister, qiskit.circuit.classicalregister.Clbit], int], body: QuantumCircuit, qubits: Sequence[Union[qiskit.circuit.quantumregister.Qubit, qiskit.circuit.quantumregister.QuantumRegister, int, slice, Sequence[Union[qiskit.circuit.quantumregister.Qubit, int]]]], clbits: Sequence[Union[qiskit.circuit.classicalregister.Clbit, qiskit.circuit.classicalregister.ClassicalRegister, int, slice, Sequence[Union[qiskit.circuit.classicalregister.Clbit, int]]]], *, label: Optional[str]) → qiskit.circuit.instructionset.InstructionSet`

Create a `while` loop on this circuit.

There are two forms for calling this function. If called with all its arguments (with the possible exception of `label`), it will create a `WhileLoopOp` with the given `body`. If `body` (and `qubits` and `clbits`) are *not* passed, then this acts as a context manager, which will automatically build a `WhileLoopOp` when the scope finishes. In this form, you do not need to keep track of the qubits or clbits you are using, because the scope will handle it for you.

Example usage:

```python
from qiskit.circuit import QuantumCircuit, Clbit, Qubit
bits = [Qubit(), Qubit(), Clbit()]
qc = QuantumCircuit(bits)

with qc.while_loop((bits[2], 0)):
    qc.h(0)
    qc.cx(0, 1)
    qc.measure(0, 0)
```

**Parameters**

*   **condition** (*Tuple\[Union\[*[*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*,* [*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*], int]*) – An equality condition to be checked prior to executing `body`. The left-hand side of the condition must be a [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") or a [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit"), and the right-hand side must be an integer or boolean.
*   **body** (*Optional\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – The loop body to be repeatedly executed. Omit this to use the context-manager mode.
*   **qubits** (*Optional\[Sequence\[*[*Qubit*](qiskit.circuit.Qubit#qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]]*) – The circuit qubits over which the loop body should be run. Omit this to use the context-manager mode.
*   **clbits** (*Optional\[Sequence\[*[*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*]]*) – The circuit clbits over which the loop body should be run. Omit this to use the context-manager mode.
*   **label** (*Optional\[str]*) – The string label of the instruction in the circuit.

**Returns**

If used in context-manager mode, then this should be used as a `with` resource, which will infer the block content and operands on exit. If the full form is used, then this returns a handle to the instructions created.

**Return type**

[InstructionSet](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet") or WhileLoopContext

**Raises**

**CircuitError** – if an incorrect calling convention is used.
