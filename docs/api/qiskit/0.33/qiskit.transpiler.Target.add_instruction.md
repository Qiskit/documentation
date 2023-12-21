# qiskit.transpiler.Target.add\_instruction

`Target.add_instruction(instruction, properties=None, name=None)`

Add a new instruction to the [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")

As `Target` objects are strictly additive this is the primary method for modifying a `Target`. Typically you will use this to fully populate a `Target` before using it in [`BackendV2`](qiskit.providers.BackendV2#qiskit.providers.BackendV2 "qiskit.providers.BackendV2"). For example:

```python
from qiskit.circuit.library import CXGate
from qiskit.transpiler import Target, InstructionProperties

target = Target()
cx_properties = {
    (0, 1): None,
    (1, 0): None,
    (0, 2): None,
    (2, 0): None,
    (0, 3): None,
    (2, 3): None,
    (3, 0): None,
    (3, 2): None
}
target.add_instruction(CXGate(), cx_properties)
```

Will add a [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate") to the target with no properties (duration, error, etc) with the coupling edge list: `(0, 1), (1, 0), (0, 2), (2, 0), (0, 3), (2, 3), (3, 0), (3, 2)`. If there are properties available for the instruction you can replace the `None` value in the properties dictionary with an [`InstructionProperties`](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties") object. This pattern is repeated for each [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") the target supports.

**Parameters**

*   **instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – The operation object to add to the map. If it’s paramerterized any value of the parameter can be set
*   **properties** (*dict*) – A dictionary of qarg entries to an [`InstructionProperties`](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties") object for that instruction implementation on the backend. Properties are optional for any instruction implementation, if there are no [`InstructionProperties`](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties") available for the backend the value can be None. If there are no constraints on the instruction (as in a noisless/ideal simulation) this can be set to `{None, None}` which will indicate it runs on all qubits (or all available permutations of qubits for multi-qubit gates). The first `None` indicates it applies to all qubits and the second `None` indicates there are no [`InstructionProperties`](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties") for the instruction. By default, if properties is not set it is equivalent to passing `{None: None}`.
*   **name** (*str*) – An optional name to use for identifying the instruction. If not specified the `name` attribute of `gate` will be used. All gates in the `Target` need unique names. Backends can differentiate between different parameterizations of a single gate by providing a unique name for each (e.g. “rx30”, “rx60”, \`”rx90”\`\` similar to the example in the documentation for the [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") class).

**Raises**

**AttributeError** – If gate is already in map
