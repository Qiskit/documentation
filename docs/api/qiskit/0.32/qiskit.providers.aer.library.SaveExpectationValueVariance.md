# SaveExpectationValueVariance

<span id="undefined" />

`SaveExpectationValueVariance(operator, label='expectation_value_variance', unnormalized=False, pershot=False, conditional=False)`

Bases: `qiskit.providers.aer.library.save_instructions.save_data.SaveAverageData`

Save expectation value and variance of an operator.

Instruction to save the expectation value and variance of a Hermitian operator.

The expectation value of a Hermitian operator $H$ for a simulator in quantum state :math\`rho\`is given by $\langle H\rangle = \mbox{Tr}[H.\rho]$. The variance is given by $\sigma^2 = \langle H^2 \rangle - \langle H \rangle>^2$.

**Parameters**

*   **operator** ([*Pauli*](qiskit.quantum_info.Pauli#qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli")  *or*[*SparsePauliOp*](qiskit.quantum_info.SparsePauliOp#qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp")  *or*[*Operator*](qiskit.quantum_info.Operator#qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – a Hermitian operator.
*   **label** (*str*) – the key for retrieving saved data from results.
*   **unnormalized** (*bool*) – If True return save the unnormalized accumulated or conditional accumulated expectation value over all shot \[Default: False].
*   **pershot** (*bool*) – if True save a list of expectation values for each shot of the simulation rather than the average over all shots \[Default: False].
*   **conditional** (*bool*) – if True save the average or pershot data conditional on the current classical register values \[Default: False].

**Raises**

**ExtensionError** – if the input operator is invalid or not Hermitian.

<Admonition title="Note" type="note">
  This instruction can be directly appended to a circuit using the [`save_expectation_value()`](qiskit.providers.aer.library.save_expectation_value#qiskit.providers.aer.library.save_expectation_value "qiskit.providers.aer.library.save_expectation_value") circuit method.
</Admonition>

## Methods

|                                                                                                                                                                                                                                                                      |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`add_decomposition`](qiskit.providers.aer.library.SaveExpectationValueVariance.add_decomposition#qiskit.providers.aer.library.SaveExpectationValueVariance.add_decomposition "qiskit.providers.aer.library.SaveExpectationValueVariance.add_decomposition")         | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`assemble`](qiskit.providers.aer.library.SaveExpectationValueVariance.assemble#qiskit.providers.aer.library.SaveExpectationValueVariance.assemble "qiskit.providers.aer.library.SaveExpectationValueVariance.assemble")                                             | Return the QasmQobjInstruction for the intructions.                      |
| [`broadcast_arguments`](qiskit.providers.aer.library.SaveExpectationValueVariance.broadcast_arguments#qiskit.providers.aer.library.SaveExpectationValueVariance.broadcast_arguments "qiskit.providers.aer.library.SaveExpectationValueVariance.broadcast_arguments") | Validation of the arguments.                                             |
| [`c_if`](qiskit.providers.aer.library.SaveExpectationValueVariance.c_if#qiskit.providers.aer.library.SaveExpectationValueVariance.c_if "qiskit.providers.aer.library.SaveExpectationValueVariance.c_if")                                                             | Add classical condition on register or cbit classical and value val.     |
| [`copy`](qiskit.providers.aer.library.SaveExpectationValueVariance.copy#qiskit.providers.aer.library.SaveExpectationValueVariance.copy "qiskit.providers.aer.library.SaveExpectationValueVariance.copy")                                                             | Copy of the instruction.                                                 |
| [`inverse`](qiskit.providers.aer.library.SaveExpectationValueVariance.inverse#qiskit.providers.aer.library.SaveExpectationValueVariance.inverse "qiskit.providers.aer.library.SaveExpectationValueVariance.inverse")                                                 | Special case.                                                            |
| [`is_parameterized`](qiskit.providers.aer.library.SaveExpectationValueVariance.is_parameterized#qiskit.providers.aer.library.SaveExpectationValueVariance.is_parameterized "qiskit.providers.aer.library.SaveExpectationValueVariance.is_parameterized")             | Return True .IFF.                                                        |
| [`mirror`](qiskit.providers.aer.library.SaveExpectationValueVariance.mirror#qiskit.providers.aer.library.SaveExpectationValueVariance.mirror "qiskit.providers.aer.library.SaveExpectationValueVariance.mirror")                                                     | DEPRECATED: use instruction.reverse\_ops().                              |
| [`qasm`](qiskit.providers.aer.library.SaveExpectationValueVariance.qasm#qiskit.providers.aer.library.SaveExpectationValueVariance.qasm "qiskit.providers.aer.library.SaveExpectationValueVariance.qasm")                                                             | Return a default OpenQASM string for the instruction.                    |
| [`repeat`](qiskit.providers.aer.library.SaveExpectationValueVariance.repeat#qiskit.providers.aer.library.SaveExpectationValueVariance.repeat "qiskit.providers.aer.library.SaveExpectationValueVariance.repeat")                                                     | Creates an instruction with gate repeated n amount of times.             |
| [`reverse_ops`](qiskit.providers.aer.library.SaveExpectationValueVariance.reverse_ops#qiskit.providers.aer.library.SaveExpectationValueVariance.reverse_ops "qiskit.providers.aer.library.SaveExpectationValueVariance.reverse_ops")                                 | For a composite instruction, reverse the order of sub-instructions.      |
| [`soft_compare`](qiskit.providers.aer.library.SaveExpectationValueVariance.soft_compare#qiskit.providers.aer.library.SaveExpectationValueVariance.soft_compare "qiskit.providers.aer.library.SaveExpectationValueVariance.soft_compare")                             | Soft comparison between gates.                                           |
| [`validate_parameter`](qiskit.providers.aer.library.SaveExpectationValueVariance.validate_parameter#qiskit.providers.aer.library.SaveExpectationValueVariance.validate_parameter "qiskit.providers.aer.library.SaveExpectationValueVariance.validate_parameter")     | Instruction parameters has no validation or normalization.               |

## Attributes

<span id="undefined" />

### decompositions

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

<span id="undefined" />

### definition

Return definition in terms of other basic gates.

<span id="undefined" />

### duration

Get the duration.

<span id="undefined" />

### label

Return instruction label

**Return type**

`str`

<span id="undefined" />

### params

return instruction params.

<span id="undefined" />

### unit

Get the time unit of duration.
