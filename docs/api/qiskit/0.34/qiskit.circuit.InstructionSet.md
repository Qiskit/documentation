# InstructionSet[¶](#instructionset "Permalink to this headline")

<span id="undefined" />

`InstructionSet(circuit_cregs=None, *, resource_requester=None)`

Bases: `object`

Instruction collection, and their contexts.

New collection of instructions.

The context (qargs and cargs that each instruction is attached to) is also stored separately for each instruction.

**Parameters**

*   **circuit\_cregs** (*list\[*[*ClassicalRegister*](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*]*) –

    Optional. List of cregs of the circuit to which the instruction is added. Default: None.

    <Admonition title="Deprecated since version qiskit-terra" type="danger">
      0.19 The classical registers are insufficient to access all classical resources in a circuit, as there may be loose classical bits as well. It can also cause integer indices to be resolved incorrectly if any registers overlap. Instead, pass a complete requester to the `resource_requester` argument.
    </Admonition>

*   **resource\_requester** (`Optional`\[`Callable`]) –

    A callable that takes in the classical resource used in the condition, verifies that it is present in the attached circuit, resolves any indices into concrete [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit") instances, and returns the concrete resource. If this is not given, specifying a condition with an index is forbidden, and all concrete [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit") and [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") resources will be assumed to be valid.

    <Admonition title="Note" type="note">
      The callback `resource_requester` is called once for each call to [`c_if()`](qiskit.circuit.InstructionSet.c_if#qiskit.circuit.InstructionSet.c_if "qiskit.circuit.InstructionSet.c_if"), and assumes that a call implies that the resource will now be used. It may throw an error if the resource is not valid for usage.
    </Admonition>

**Raises**

**CircuitError** – if both `resource_requester` and `circuit_cregs` are passed. Only one of these may be passed, and it should be `resource_requester`.

## Methods

|                                                                                                                                  |                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add`](qiskit.circuit.InstructionSet.add#qiskit.circuit.InstructionSet.add "qiskit.circuit.InstructionSet.add")                 | Add an instruction and its context (where it is attached).                                                                                                                                                                                                                                                                 |
| [`c_if`](qiskit.circuit.InstructionSet.c_if#qiskit.circuit.InstructionSet.c_if "qiskit.circuit.InstructionSet.c_if")             | Set a classical equality condition on all the instructions in this set between the [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") or [`Clbit`](qiskit.circuit.Clbit#qiskit.circuit.Clbit "qiskit.circuit.Clbit") `classical` and value `val`. |
| [`inverse`](qiskit.circuit.InstructionSet.inverse#qiskit.circuit.InstructionSet.inverse "qiskit.circuit.InstructionSet.inverse") | Invert all instructions.                                                                                                                                                                                                                                                                                                   |

## Attributes

<span id="undefined" />

### cargs

<span id="undefined" />

### instructions

<span id="undefined" />

### qargs
