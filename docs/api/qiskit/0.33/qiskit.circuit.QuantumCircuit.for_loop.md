# qiskit.circuit.QuantumCircuit.for\_loop

`QuantumCircuit.for_loop(indexset: Iterable[int], loop_parameter: Optional[qiskit.circuit.parameter.Parameter], body: None, qubits: None, clbits: None, *, label: Optional[str]) → qiskit.circuit.controlflow.for_loop.ForLoopContext`

`QuantumCircuit.for_loop(indexset: Iterable[int], loop_parameter: Optional[qiskit.circuit.parameter.Parameter], body: QuantumCircuit, qubits: Sequence[Union[qiskit.circuit.quantumregister.Qubit, qiskit.circuit.quantumregister.QuantumRegister, int, slice, Sequence[Union[qiskit.circuit.quantumregister.Qubit, int]]]], clbits: Sequence[Union[qiskit.circuit.classicalregister.Clbit, qiskit.circuit.classicalregister.ClassicalRegister, int, slice, Sequence[Union[qiskit.circuit.classicalregister.Clbit, int]]]], *, label: Optional[str]) → qiskit.circuit.instructionset.InstructionSet`

Create a `for` loop on this circuit.

There are two forms for calling this function. If called with all its arguments (with the possible exception of `label`), it will create a `ForLoopOp` with the given `body`. If `body` (and `qubits` and `clbits`) are *not* passed, then this acts as a context manager, which, when entered, provides a loop variable (unless one is given, in which case it will be reused) and will automatically build a `ForLoopOp` when the scope finishes. In this form, you do not need to keep track of the qubits or clbits you are using, because the scope will handle it for you.

For example:

```python
from qiskit import QuantumCircuit
qc = QuantumCircuit(2, 1)

with qc.for_loop(range(5)) as i:
    qc.h(0)
    qc.cx(0, 1)
    qc.measure(0, 0)
    qc.break_loop().c_if(0, True)
```

**Parameters**

*   **indexset** (*Iterable\[int]*) – A collection of integers to loop over. Always necessary.

*   **loop\_parameter** (*Optional\[*[*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*]*) –

    The parameter used within `body` to which the values from `indexset` will be assigned. In the context-manager form, if this argument is not supplied, then a loop parameter will be allocated for you and returned as the value of the `with` statement. This will only be bound into the circuit if it is used within the body.

    If this argument is `None` in the manual form of this method, `body` will be repeated once for each of the items in `indexset` but their values will be ignored.

*   **body** (*Optional\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – The loop body to be repeatedly executed. Omit this to use the context-manager mode.

*   **qubits** (*Optional\[Sequence\[QubitSpecifier]]*) – The circuit qubits over which the loop body should be run. Omit this to use the context-manager mode.

*   **clbits** (*Optional\[Sequence\[ClbitSpecifier]]*) – The circuit clbits over which the loop body should be run. Omit this to use the context-manager mode.

*   **label** (*Optional\[str]*) – The string label of the instruction in the circuit.

**Returns**

depending on the call signature, either a context manager for creating the for loop (it will automatically be added to the circuit at the end of the block), or an [`InstructionSet`](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet") handle to the appended loop operation.

**Return type**

[InstructionSet](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet") or ForLoopContext

**Raises**

**CircuitError** – if an incorrect calling convention is used.
