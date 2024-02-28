---
title: SaveExpectationValueVariance
description: API reference for qiskit.providers.aer.library.SaveExpectationValueVariance
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.providers.aer.library.SaveExpectationValueVariance
---

# SaveExpectationValueVariance

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance" />

`SaveExpectationValueVariance(operator, label='expectation_value_variance', unnormalized=False, pershot=False, conditional=False)` [GitHub](https://github.com/qiskit/qiskit-aer/tree/stable/0.10/qiskit/providers/aer/library/save_instructions/save_expectation_value.py "view source code")

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveAverageData`

Save expectation value and variance of an operator.

Instruction to save the expectation value and variance of a Hermitian operator.

The expectation value of a Hermitian operator $H$ for a simulator in quantum state :math\`rho\`is given by $\langle H\rangle = \mbox{Tr}[H.\rho]$. The variance is given by $\sigma^2 = \langle H^2 \rangle - \langle H \rangle>^2$.

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

### add\_decomposition

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.add_decomposition" />

`SaveExpectationValueVariance.add_decomposition(decomposition)`

Add a decomposition of the instruction to the SessionEquivalenceLibrary.

### assemble

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.assemble" />

`SaveExpectationValueVariance.assemble()`

Return the QasmQobjInstruction for the intructions.

### broadcast\_arguments

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.broadcast_arguments" />

`SaveExpectationValueVariance.broadcast_arguments(qargs, cargs)`

Validation of the arguments.

**Parameters**

*   **qargs** (*List*) – List of quantum bit arguments.
*   **cargs** (*List*) – List of classical bit arguments.

**Yields**

*Tuple(List, List)* – A tuple with single arguments.

**Raises**

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.c_if" />

`SaveExpectationValueVariance.c_if(classical, val)`

Set a classical equality condition on this instruction between the register or cbit `classical` and value `val`.

<Admonition title="Note" type="note">
  This is a setter method, not an additive one. Calling this multiple times will silently override any previously set condition; it does not stack.
</Admonition>

### copy

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.copy" />

`SaveExpectationValueVariance.copy(name=None)`

Copy of the instruction.

**Parameters**

**name** (*str*) – name to be given to the copied circuit, if None then the name stays the same.

**Returns**

**a copy of the current instruction, with the name**

updated if it was provided

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### inverse

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.inverse" />

`SaveExpectationValueVariance.inverse()`

Special case. Return self.

### is\_parameterized

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.is_parameterized" />

`SaveExpectationValueVariance.is_parameterized()`

Return True .IFF. instruction is parameterized else False

### qasm

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.qasm" />

`SaveExpectationValueVariance.qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.repeat" />

`SaveExpectationValueVariance.repeat(n)`

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

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.reverse_ops" />

`SaveExpectationValueVariance.reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### soft\_compare

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.soft_compare" />

`SaveExpectationValueVariance.soft_compare(other)`

Soft comparison between gates. Their names, number of qubits, and classical bit numbers must match. The number of parameters must match. Each parameter is compared. If one is a ParameterExpression then it is not taken into account.

**Parameters**

**other** (*instruction*) – other instruction.

**Returns**

are self and other equal up to parameter expressions.

**Return type**

bool

### validate\_parameter

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.validate_parameter" />

`SaveExpectationValueVariance.validate_parameter(parameter)`

Instruction parameters has no validation or normalization.

## Attributes

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.condition_bits" />

### condition\_bits

Get Clbits in condition.

**Return type**

`List`\[`Clbit`]

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.decompositions" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.definition" />

### definition

Return definition in terms of other basic gates.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.duration" />

### duration

Get the duration.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.label" />

### label

Return instruction label

**Return type**

`str`

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.name" />

### name

Return the name.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.num_clbits" />

### num\_clbits

Return the number of clbits.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.num_qubits" />

### num\_qubits

Return the number of qubits.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.params" />

### params

return instruction params.

<span id="qiskit.providers.aer.library.SaveExpectationValueVariance.unit" />

### unit

Get the time unit of duration.

