# qiskit.circuit.QuantumCircuit.break\_loop

`QuantumCircuit.break_loop()`

Apply `BreakLoopOp`.

<Admonition title="Warning" type="caution">
  If you are using the context-manager “builder” forms of [`if_test()`](qiskit.circuit.QuantumCircuit.if_test#qiskit.circuit.QuantumCircuit.if_test "qiskit.circuit.QuantumCircuit.if_test"), [`for_loop()`](qiskit.circuit.QuantumCircuit.for_loop#qiskit.circuit.QuantumCircuit.for_loop "qiskit.circuit.QuantumCircuit.for_loop") or [`while_loop()`](qiskit.circuit.QuantumCircuit.while_loop#qiskit.circuit.QuantumCircuit.while_loop "qiskit.circuit.QuantumCircuit.while_loop"), you can only call this method if you are within a loop context, because otherwise the “resource width” of the operation cannot be determined. This would quickly lead to invalid circuits, and so if you are trying to construct a reusable loop body (without the context managers), you must also use the non-context-manager form of [`if_test()`](qiskit.circuit.QuantumCircuit.if_test#qiskit.circuit.QuantumCircuit.if_test "qiskit.circuit.QuantumCircuit.if_test") and [`if_else()`](qiskit.circuit.QuantumCircuit.if_else#qiskit.circuit.QuantumCircuit.if_else "qiskit.circuit.QuantumCircuit.if_else"). Take care that the [`BreakLoopOp`](qiskit.circuit.BreakLoopOp#qiskit.circuit.BreakLoopOp "qiskit.circuit.BreakLoopOp") instruction must span all the resources of its containing loop, not just the immediate scope.
</Admonition>

**Return type**

`InstructionSet`

**Returns**

A handle to the instruction created.

**Raises**

**CircuitError** – if this method was called within a builder context, but not contained within a loop.
