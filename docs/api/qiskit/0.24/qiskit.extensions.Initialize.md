---
title: Initialize
description: API reference for qiskit.extensions.Initialize
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.extensions.Initialize
---

<span id="qiskit-extensions-initialize" />

# qiskit.extensions.Initialize

<span id="qiskit.extensions.Initialize" />

`Initialize(params)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.16/qiskit/extensions/quantum_initializer/initializer.py "view source code")

Complex amplitude initialization.

Class that implements the (complex amplitude) initialization of some flexible collection of qubit registers (assuming the qubits are in the zero state). Note that Initialize is an Instruction and not a Gate since it contains a reset instruction, which is not unitary.

Create new initialize composite.

params (list): vector of complex amplitudes to initialize to

### \_\_init\_\_

<span id="qiskit.extensions.Initialize.__init__" />

`__init__(params)`

Create new initialize composite.

params (list): vector of complex amplitudes to initialize to

## Methods

|                                                                                                                                             |                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`__init__`](#qiskit.extensions.Initialize.__init__ "qiskit.extensions.Initialize.__init__")(params)                                        | Create new initialize composite.                                          |
| [`add_decomposition`](#qiskit.extensions.Initialize.add_decomposition "qiskit.extensions.Initialize.add_decomposition")(decomposition)      | Add a decomposition of the instruction to the SessionEquivalenceLibrary.  |
| [`assemble`](#qiskit.extensions.Initialize.assemble "qiskit.extensions.Initialize.assemble")()                                              | Assemble a QasmQobjInstruction                                            |
| [`broadcast_arguments`](#qiskit.extensions.Initialize.broadcast_arguments "qiskit.extensions.Initialize.broadcast_arguments")(qargs, cargs) | Validation of the arguments.                                              |
| [`c_if`](#qiskit.extensions.Initialize.c_if "qiskit.extensions.Initialize.c_if")(classical, val)                                            | Add classical condition on register classical and value val.              |
| [`copy`](#qiskit.extensions.Initialize.copy "qiskit.extensions.Initialize.copy")(\[name])                                                   | Copy of the instruction.                                                  |
| [`gates_to_uncompute`](#qiskit.extensions.Initialize.gates_to_uncompute "qiskit.extensions.Initialize.gates_to_uncompute")()                | Call to create a circuit with gates that take the desired vector to zero. |
| [`inverse`](#qiskit.extensions.Initialize.inverse "qiskit.extensions.Initialize.inverse")()                                                 | Invert this instruction.                                                  |
| [`is_parameterized`](#qiskit.extensions.Initialize.is_parameterized "qiskit.extensions.Initialize.is_parameterized")()                      | Return True .IFF.                                                         |
| [`mirror`](#qiskit.extensions.Initialize.mirror "qiskit.extensions.Initialize.mirror")()                                                    | DEPRECATED: use instruction.reverse\_ops().                               |
| [`qasm`](#qiskit.extensions.Initialize.qasm "qiskit.extensions.Initialize.qasm")()                                                          | Return a default OpenQASM string for the instruction.                     |
| [`repeat`](#qiskit.extensions.Initialize.repeat "qiskit.extensions.Initialize.repeat")(n)                                                   | Creates an instruction with gate repeated n amount of times.              |
| [`reverse_ops`](#qiskit.extensions.Initialize.reverse_ops "qiskit.extensions.Initialize.reverse_ops")()                                     | For a composite instruction, reverse the order of sub-instructions.       |
| [`validate_parameter`](#qiskit.extensions.Initialize.validate_parameter "qiskit.extensions.Initialize.validate_parameter")(parameter)       | Initialize instruction parameter can be int, float, and complex.          |

## Attributes

|                                                                                                                |                                                                               |
| -------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`decompositions`](#qiskit.extensions.Initialize.decompositions "qiskit.extensions.Initialize.decompositions") | Get the decompositions of the instruction from the SessionEquivalenceLibrary. |
| [`definition`](#qiskit.extensions.Initialize.definition "qiskit.extensions.Initialize.definition")             | Return definition in terms of other basic gates.                              |
| [`duration`](#qiskit.extensions.Initialize.duration "qiskit.extensions.Initialize.duration")                   | Get the duration.                                                             |
| [`params`](#qiskit.extensions.Initialize.params "qiskit.extensions.Initialize.params")                         | return instruction params.                                                    |
| [`unit`](#qiskit.extensions.Initialize.unit "qiskit.extensions.Initialize.unit")                               | Get the time unit of duration.                                                |

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

**CircuitError** – If the input is not valid. For example, the number of arguments does not match the gate expectation.

### c\_if

<span id="qiskit.extensions.Initialize.c_if" />

`c_if(classical, val)`

Add classical condition on register classical and value val.

### copy

<span id="qiskit.extensions.Initialize.copy" />

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

<span id="qiskit.extensions.Initialize.decompositions" />

`property decompositions`

Get the decompositions of the instruction from the SessionEquivalenceLibrary.

### definition

<span id="qiskit.extensions.Initialize.definition" />

`property definition`

Return definition in terms of other basic gates.

### duration

<span id="qiskit.extensions.Initialize.duration" />

`property duration`

Get the duration.

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

**CircuitError** – if the instruction is not composite and an inverse has not been implemented for it.

### is\_parameterized

<span id="qiskit.extensions.Initialize.is_parameterized" />

`is_parameterized()`

Return True .IFF. instruction is parameterized else False

### mirror

<span id="qiskit.extensions.Initialize.mirror" />

`mirror()`

DEPRECATED: use instruction.reverse\_ops().

**Returns**

**a new instruction with sub-instructions**

reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### params

<span id="qiskit.extensions.Initialize.params" />

`property params`

return instruction params.

### qasm

<span id="qiskit.extensions.Initialize.qasm" />

`qasm()`

Return a default OpenQASM string for the instruction.

Derived instructions may override this to print in a different format (e.g. measure q\[0] -> c\[0];).

### repeat

<span id="qiskit.extensions.Initialize.repeat" />

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

<span id="qiskit.extensions.Initialize.reverse_ops" />

`reverse_ops()`

For a composite instruction, reverse the order of sub-instructions.

This is done by recursively reversing all sub-instructions. It does not invert any gate.

**Returns**

**a new instruction with**

sub-instructions reversed.

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### unit

<span id="qiskit.extensions.Initialize.unit" />

`property unit`

Get the time unit of duration.

### validate\_parameter

<span id="qiskit.extensions.Initialize.validate_parameter" />

`validate_parameter(parameter)`

Initialize instruction parameter can be int, float, and complex.

