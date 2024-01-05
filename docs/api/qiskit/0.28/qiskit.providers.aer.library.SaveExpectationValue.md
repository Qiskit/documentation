---
title: SaveExpectationValue
description: API reference for qiskit.providers.aer.library.SaveExpectationValue
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SaveExpectationValue
---

# qiskit.providers.aer.library.SaveExpectationValue

<span id="qiskit.providers.aer.library.SaveExpectationValue" />

`SaveExpectationValue(operator, label='expectation_value', unnormalized=False, pershot=False, conditional=False)`

Save expectation value of an operator.

Instruction to save the expectation value of a Hermitian operator.

The expectation value of a Hermitian operator $H$ for a simulator in quantum state :math\`rho\`is given by $\langle H\rangle = \mbox{Tr}[H.\rho]$.

**Parameters**

*   **operator** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *or*[*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Hermitian operator.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated expectation value over all shot \[Default: False].
*   **pershot** (*bool*) – if True save a list of expectation values for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

**Raises**

**ExtensionError** – if the input operator is invalid or not Hermitian.

<Admonition title="Note" type="note">
  This instruction can be directly appended to a circuit using the [`save_expectation_value()`](qiskit.providers.aer.library.save_expectation_value "qiskit.providers.aer.library.save_expectation_value") circuit method.
</Admonition>

### \_\_init\_\_

<span id="qiskit.providers.aer.library.SaveExpectationValue.__init__" />

`__init__(operator, label='expectation_value', unnormalized=False, pershot=False, conditional=False)`

Instruction to save the expectation value of a Hermitian operator.

The expectation value of a Hermitian operator $H$ for a simulator in quantum state :math\`rho\`is given by $\langle H\rangle = \mbox{Tr}[H.\rho]$.

**Parameters**

*   **operator** ([*Pauli*](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *or*[*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Hermitian operator.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated expectation value over all shot \[Default: False].
*   **pershot** (*bool*) – if True save a list of expectation values for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

**Raises**

**ExtensionError** – if the input operator is invalid or not Hermitian.

<Admonition title="Note" type="note">
  This instruction can be directly appended to a circuit using the [`save_expectation_value()`](qiskit.providers.aer.library.save_expectation_value "qiskit.providers.aer.library.save_expectation_value") circuit method.
</Admonition>

## Methods

## Attributes

### add\_decomposition

<span id="qiskit.providers.aer.library.SaveExpectationValue.add_decomposition" />

`add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SaveExpectationValue.assemble" />

`assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SaveExpectationValue.broadcast_arguments" />

`broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.library.SaveExpectationValue.c_if" />

`c_if(classical, val)`

Add classical condition on register or cbit classical and value val.

### copy

<span id="qiskit.providers.aer.library.SaveExpectationValue.copy" />

`copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### decompositions

<span id="qiskit.providers.aer.library.SaveExpectationValue.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.providers.aer.library.SaveExpectationValue.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.providers.aer.library.SaveExpectationValue.duration" />

`property duration`

Get the duration.

### inverse

<span id="qiskit.providers.aer.library.SaveExpectationValue.inverse" />

`inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.library.SaveExpectationValue.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### label

<span id="qiskit.providers.aer.library.SaveExpectationValue.label" />

`property label`

Return instruction label

**Return type**

`str`

### mirror

<span id="qiskit.providers.aer.library.SaveExpectationValue.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.providers.aer.library.SaveExpectationValue.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.providers.aer.library.SaveExpectationValue.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SaveExpectationValue.repeat" />

`repeat(n)`

Creates an instruction with gate repeated n amount of times.

**Parameters**

**n** (*int*) – Number of times to repeat the instruction

**Returns**

Containing the definition.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

**Raises**

**CircuitError** – If n \< 1.

### reverse\_ops

<span id="qiskit.providers.aer.library.SaveExpectationValue.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SaveExpectationValue.soft_compare" />

`soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### unit

<span id="qiskit.providers.aer.library.SaveExpectationValue.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.providers.aer.library.SaveExpectationValue.validate_parameter" />

`validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

