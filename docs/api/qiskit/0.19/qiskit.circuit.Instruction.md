---
title: Instruction
description: API reference for qiskit.circuit.Instruction
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.Instruction
---

# Instruction

<span id="qiskit.circuit.Instruction" />

`Instruction(name, num_qubits, num_clbits, params)`

Generic quantum instruction.

Create a new instruction.

**Parameters**

*   **name** (*str*) – instruction name
*   **num\_qubits** (*int*) – instruction’s qubit width
*   **num\_clbits** (*int*) – instruction’s clbit width
*   **params** (*list\[int|float|complex|str|ndarray|list|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")*]*) – list of parameters

**Raises**

**CircuitError** – when the register is not in the correct format.

## Attributes

|                                                                                                                       |                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`Instruction.decompositions`](qiskit.circuit.Instruction.decompositions "qiskit.circuit.Instruction.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`Instruction.definition`](qiskit.circuit.Instruction.definition "qiskit.circuit.Instruction.definition")             | Return definition in terms of other basic gates.                              |
| [`Instruction.params`](qiskit.circuit.Instruction.params "qiskit.circuit.Instruction.params")                         | return instruction params.                                                    |

## Methods

|                                                                                                                                                    |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`Instruction.add_decomposition`](qiskit.circuit.Instruction.add_decomposition "qiskit.circuit.Instruction.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary. |
| [`Instruction.assemble`](qiskit.circuit.Instruction.assemble "qiskit.circuit.Instruction.assemble")()                                              | Assemble a QasmQobjInstruction                                           |
| [`Instruction.broadcast_arguments`](qiskit.circuit.Instruction.broadcast_arguments "qiskit.circuit.Instruction.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                             |
| [`Instruction.c_if`](qiskit.circuit.Instruction.c_if "qiskit.circuit.Instruction.c_if")(classical, val)                                            | Add classical condition on register classical and value val.             |
| [`Instruction.copy`](qiskit.circuit.Instruction.copy "qiskit.circuit.Instruction.copy")(\[name])                                                   | Copy of the instruction.                                                 |
| [`Instruction.inverse`](qiskit.circuit.Instruction.inverse "qiskit.circuit.Instruction.inverse")()                                                 | Invert this instruction.                                                 |
| [`Instruction.is_parameterized`](qiskit.circuit.Instruction.is_parameterized "qiskit.circuit.Instruction.is_parameterized")()                      | Return True .IFF.                                                        |
| [`Instruction.mirror`](qiskit.circuit.Instruction.mirror "qiskit.circuit.Instruction.mirror")()                                                    | For a composite instruction, reverse the order of sub-gates.             |
| [`Instruction.qasm`](qiskit.circuit.Instruction.qasm "qiskit.circuit.Instruction.qasm")()                                                          | Return a default OpenQASM string for the instruction.                    |
| [`Instruction.repeat`](qiskit.circuit.Instruction.repeat "qiskit.circuit.Instruction.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.             |

