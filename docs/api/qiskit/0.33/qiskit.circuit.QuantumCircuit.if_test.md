# qiskit.circuit.QuantumCircuit.if\_test

`QuantumCircuit.if_test(condition: Tuple[Union[qiskit.circuit.classicalregister.ClassicalRegister, qiskit.circuit.classicalregister.Clbit], int], true_body: None, qubits: None, clbits: None, *, label: Optional[str]) → qiskit.circuit.controlflow.if_else.IfContext`

`QuantumCircuit.if_test(condition: Tuple[Union[qiskit.circuit.classicalregister.ClassicalRegister, qiskit.circuit.classicalregister.Clbit], int], true_body: QuantumCircuit, qubits: Sequence[Union[qiskit.circuit.quantumregister.Qubit, qiskit.circuit.quantumregister.QuantumRegister, int, slice, Sequence[Union[qiskit.circuit.quantumregister.Qubit, int]]]], clbits: Sequence[Union[qiskit.circuit.classicalregister.Clbit, qiskit.circuit.classicalregister.ClassicalRegister, int, slice, Sequence[Union[qiskit.circuit.classicalregister.Clbit, int]]]], *, label: Optional[str] = 'None') → qiskit.circuit.instructionset.InstructionSet`

Create an `if` statement on this circuit.

There are two forms for calling this function. If called with all its arguments (with the possible exception of `label`), it will create a `IfElseOp` with the given `true_body`, and there will be no branch for the `false` condition (see also the [`if_else()`](qiskit.circuit.QuantumCircuit.if_else#qiskit.circuit.QuantumCircuit.if_else "qiskit.circuit.QuantumCircuit.if_else") method). However, if `true_body` (and `qubits` and `clbits`) are *not* passed, then this acts as a context manager, which can be used to build `if` statements. The return value of the `with` statement is a chainable context manager, which can be used to create subsequent `else` blocks. In this form, you do not need to keep track of the qubits or clbits you are using, because the scope will handle it for you.

For example:

```python
from qiskit.circuit import QuantumCircuit, Qubit, Clbit
bits = [Qubit(), Qubit(), Qubit(), Clbit(), Clbit()]
qc = QuantumCircuit(bits)

qc.h(0)
qc.cx(0, 1)
qc.measure(0, 0)
qc.h(0)
qc.cx(0, 1)
qc.measure(0, 1)

with qc.if_test((bits[3], 0)) as else_:
    qc.x(2)
with else_:
    qc.h(2)
    qc.z(2)
```

**Parameters**

*   **condition** (*Tuple\[Union\[*[*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*,* [*Clbit*](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit")*], int]*) – A condition to be evaluated at circuit runtime which, if true, will trigger the evaluation of `true_body`. Can be specified as either a tuple of a `ClassicalRegister` to be tested for equality with a given `int`, or as a tuple of a `Clbit` to be compared to either a `bool` or an `int`.
*   **true\_body** (*Optional\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*]*) – The circuit body to be run if `condition` is true.
*   **qubits** (*Optional\[Sequence\[QubitSpecifier]]*) – The circuit qubits over which the if/else should be run.
*   **clbits** (*Optional\[Sequence\[ClbitSpecifier]]*) – The circuit clbits over which the if/else should be run.
*   **label** (*Optional\[str]*) – The string label of the instruction in the circuit.

**Returns**

depending on the call signature, either a context manager for creating the `if` block (it will automatically be added to the circuit at the end of the block), or an [`InstructionSet`](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet") handle to the appended conditional operation.

**Return type**

[InstructionSet](qiskit.circuit.InstructionSet#qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet") or IfContext

**Raises**

*   **CircuitError** – If the provided condition references Clbits outside the enclosing circuit.
*   **CircuitError** – if an incorrect calling convention is used.

**Returns**

A handle to the instruction created.
