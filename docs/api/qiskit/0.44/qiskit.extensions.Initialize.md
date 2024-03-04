---
title: Initialize
description: API reference for qiskit.extensions.Initialize
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Initialize
---

# Initialize

<span id="qiskit.extensions.Initialize" />

`qiskit.extensions.Initialize(params, num_qubits=None, normalize=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/extensions/quantum_initializer/initializer.py "view source code")

Bases: [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")

Complex amplitude initialization.

Class that initializes some flexible collection of qubit registers, implemented by calling the `qiskit.extensions.StatePreparation` Class. Note that Initialize is an Instruction and not a Gate since it contains a reset instruction, which is not unitary.

Create new initialize composite.

**Parameters**

*   **params** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*,* [*list*](https://docs.python.org/3/library/stdtypes.html#list "(in Python v3.12)")*,* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *or*[*Statevector*](qiskit.quantum_info.Statevector "qiskit.quantum_info.Statevector")) –

    *   Statevector: Statevector to initialize to.
    *   list: vector of complex amplitudes to initialize to.
    *   string: labels of basis states of the Pauli eigenstates Z, X, Y. See [`Statevector.from_label()`](qiskit.quantum_info.Statevector#from_label "qiskit.quantum_info.Statevector.from_label"). Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to $|1\rangle$ and the qubit one to $|0\rangle$.
    *   int: an integer that is used as a bitmap indicating which qubits to initialize to $|1\rangle$. Example: setting params to 5 would initialize qubit 0 and qubit 2 to $|1\rangle$ and qubit 1 to $|0\rangle$.

*   **num\_qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – This parameter is only used if params is an int. Indicates the total number of qubits in the initialize call. Example: initialize covers 5 qubits and params is 3. This allows qubits 0 and 1 to be initialized to $|1\rangle$ and the remaining 3 qubits to be initialized to $|0\rangle$.

*   **normalize** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Whether to normalize an input array to a unit vector.

## Attributes

<span id="qiskit.extensions.Initialize.condition_bits" />

### condition\_bits

Get Clbits in condition.

<span id="qiskit.extensions.Initialize.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.extensions.Initialize.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.extensions.Initialize.duration" />

### duration

Get the duration.

<span id="qiskit.extensions.Initialize.label" />

### label

Return instruction label

<span id="qiskit.extensions.Initialize.name" />

### name

Return the name.

<span id="qiskit.extensions.Initialize.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.extensions.Initialize.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.extensions.Initialize.params" />

### params

Return initialize params.

<span id="qiskit.extensions.Initialize.unit" />

### unit

Get the time unit of duration.

## Methods

### add\_decomposition

<span id="qiskit.extensions.Initialize.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.extensions.Initialize.assemble" />

`assemble()`

Assemble a QasmQobjInstruction

### broadcast\_arguments

<span id="qiskit.extensions.Initialize.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.Initialize.c_if" />

`c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.extensions.Initialize.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – name to be given to the copied circuit, if `None` then the name stays the same.

**Returns**

a copy of the current instruction, with the name updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### gates\_to\_uncompute

<span id="qiskit.extensions.Initialize.gates_to_uncompute" />

`gates_to_uncompute()`

Call to create a circuit with gates that take the desired vector to zero.

**Returns**

circuit to take self.params vector to $|{00\ldots0}\rangle$

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### inverse

<span id="qiskit.extensions.Initialize.inverse" />

`inverse()`

Invert this instruction.

If the instruction is composite (i.e. has a definition), then its definition will be recursively inverted.

Special instructions inheriting from Instruction can implement their own inverse (e.g. T and Tdg, Barrier, etc.)

**Returns**

a fresh instruction for the inverse

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.extensions.Initialize.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.extensions.Initialize.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. `measure q[0] -> c[0];`).

<Admonition title="Deprecated since version 0.25.0" type="danger">
  The method `qiskit.circuit.instruction.Instruction.qasm()` is deprecated as of qiskit-terra 0.25.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>

### repeat

<span id="qiskit.extensions.Initialize.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

[**CircuitError**](circuit#qiskit.circuit.CircuitError "qiskit.circuit.CircuitError") – If n \< 1.

### reverse\_ops

<span id="qiskit.extensions.Initialize.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.extensions.Initialize.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

[bool](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")

### validate\_parameter

<span id="qiskit.extensions.Initialize.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

