# qiskit.circuit.QuantumCircuit.if\_else

`QuantumCircuit.if_else(condition, true_body, false_body, qubits, clbits, label=None)`

Apply `IfElseOp`.

<Admonition title="Note" type="note">
  This method does not have an associated context-manager form, because it is already handled by the [`if_test()`](qiskit.circuit.QuantumCircuit.if_test#qiskit.circuit.QuantumCircuit.if_test "qiskit.circuit.QuantumCircuit.if_test") method. You can use the `else` part of that with something such as:

  ```python
  from qiskit.circuit import QuantumCircuit, Qubit, Clbit
  bits = [Qubit(), Qubit(), Clbit()]
  qc = QuantumCircuit(bits)
  qc.h(0)
  qc.cx(0, 1)
  qc.measure(0, 0)
  with qc.if_test((bits[2], 0)) as else_:
      qc.h(0)
  with else_:
      qc.x(0)
  ```
</Admonition>

**Parameters**

*   **condition** (`Union`\[`Tuple`\[`ClassicalRegister`, `int`], `Tuple`\[`Clbit`, `int`], `Tuple`\[`Clbit`, `bool`]]) – A condition to be evaluated at circuit runtime which, if true, will trigger the evaluation of `true_body`. Can be specified as either a tuple of a `ClassicalRegister` to be tested for equality with a given `int`, or as a tuple of a `Clbit` to be compared to either a `bool` or an `int`.
*   **true\_body** (`QuantumCircuit`) – The circuit body to be run if `condition` is true.
*   **false\_body** (`QuantumCircuit`) – The circuit to be run if `condition` is false.
*   **qubits** (`Sequence`\[`Union`\[`Qubit`, `QuantumRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Qubit`, `int`]]]]) – The circuit qubits over which the if/else should be run.
*   **clbits** (`Sequence`\[`Union`\[`Clbit`, `ClassicalRegister`, `int`, `slice`, `Sequence`\[`Union`\[`Clbit`, `int`]]]]) – The circuit clbits over which the if/else should be run.
*   **label** (`Optional`\[`str`]) – The string label of the instruction in the circuit.

**Raises**

**CircuitError** – If the provided condition references Clbits outside the enclosing circuit.

**Return type**

`InstructionSet`

**Returns**

A handle to the instruction created.
