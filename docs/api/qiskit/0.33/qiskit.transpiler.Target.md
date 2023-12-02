# Target

<span id="undefined" />

`Target(description=None, num_qubits=0, dt=None, granularity=1, min_length=1, pulse_alignment=1, aquire_alignment=1)`

Bases: `collections.abc.Mapping`

The intent of the `Target` object is to inform Qiskit’s compiler about the constraints of a particular backend so the compiler can compile an input circuit to something that works and is optimized for a device. It currently contains a description of instructions on a backend and their properties as well as some timing information. However, this exact interface may evolve over time as the needs of the compiler change. These changes will be done in a backwards compatible and controlled manner when they are made (either through versioning, subclassing, or mixins) to add on to the set of information exposed by a target.

As a basic example, let’s assume backend has two qubits, supports [`UGate`](qiskit.circuit.library.UGate#qiskit.circuit.library.UGate "qiskit.circuit.library.UGate") on both qubits and [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate") in both directions. To model this you would create the target like:

```python
from qiskit.transpiler import Target, InstructionProperties
from qiskit.circuit.library import UGate, CXGate
from qiskit.circuit import Parameter

gmap = Target()
theta = Parameter('theta')
phi = Parameter('phi')
lam = Parameter('lambda')
u_props = {
    (0,): InstructionProperties(duration=5.23e-8, error=0.00038115),
    (1,): InstructionProperties(duration=4.52e-8, error=0.00032115),
}
gmap.add_instruction(UGate(theta, phi, lam), u_props)
cx_props = {
    (0,1): InstructionProperties(duration=5.23e-7, error=0.00098115),
    (1,0): InstructionProperties(duration=4.52e-7, error=0.00132115),
}
gmap.add_instruction(CXGate(), cx_props)
```

Each instruction in the Target is indexed by a unique string name that uniquely identifies that instance of an [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") object in the Target. There is a 1:1 mapping between a name and an [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") instance in the target and each name must be unique. By default the name is the `name` attribute of the instruction, but can be set to anything. This lets a single target have multiple instances of the same instruction class with different parameters. For example, if a backend target has two instances of an [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate") one is parameterized over any theta while the other is tuned up for a theta of pi/6 you can add these by doing something like:

```python
import math

from qiskit.transpiler import Target, InstructionProperties
from qiskit.circuit.library import RXGate
from qiskit.circuit import Parameter

target = Target()
theta = Parameter('theta')
rx_props = {
    (0,): InstructionProperties(duration=5.23e-8, error=0.00038115),
}
target.add_instruction(RXGate(theta), rx_props)
rx_30_props = {
    (0,): InstructionProperties(duration=1.74e-6, error=.00012)
}
target.add_instruction(RXGate(math.pi / 6), rx_30_props, name='rx_30')
```

Then in the `target` object accessing by `rx_30` will get the fixed angle [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate") while `rx` will get the parameterized [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").

<Admonition title="Note" type="note">
  This class assumes that qubit indices start at 0 and are a contiguous set if you want a submapping the bits will need to be reindexed in a new\`\`Target\`\` object.
</Admonition>

<Admonition title="Note" type="note">
  This class only supports additions of gates, qargs, and qubits. If you need to remove one of these the best option is to iterate over an existing object and create a new subset (or use one of the methods to do this). The object internally caches different views and these would potentially be invalidated by removals.
</Admonition>

Create a new Target object

**Parameters**

*   **description** (*str*) – An optional string to describe the Target.
*   **num\_qubits** (*int*) – An optional int to specify the number of qubits the backend target has. If not set it will be implicitly set based on the qargs when `add_instruction()` is called. Note this must be set if the backend target is for a noiseless simulator that doesn’t have constraints on the instructions so the transpiler knows how many qubits are available.
*   **dt** (*float*) – The system time resolution of input signals in seconds
*   **granularity** (*int*) – An integer value representing minimum pulse gate resolution in units of `dt`. A user-defined pulse gate should have duration of a multiple of this granularity value.
*   **min\_length** (*int*) – An integer value representing minimum pulse gate length in units of `dt`. A user-defined pulse gate should be longer than this length.
*   **pulse\_alignment** (*int*) – An integer value representing a time resolution of gate instruction starting time. Gate instruction should start at time which is a multiple of the alignment value.
*   **acquire\_alignment** (*int*) – An integer value representing a time resolution of measure instruction starting time. Measure instruction should start at time which is a multiple of the alignment value.

## Methods

|                                                                                                                                                                                                                                       |                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`add_instruction`](qiskit.transpiler.Target.add_instruction#qiskit.transpiler.Target.add_instruction "qiskit.transpiler.Target.add_instruction")                                                                                     | Add a new instruction to the [`Target`](#qiskit.transpiler.Target "qiskit.transpiler.Target")                                                                                                                         |
| [`build_coupling_map`](qiskit.transpiler.Target.build_coupling_map#qiskit.transpiler.Target.build_coupling_map "qiskit.transpiler.Target.build_coupling_map")                                                                         | Get a [`CouplingMap`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") from this target.                                                                                  |
| [`durations`](qiskit.transpiler.Target.durations#qiskit.transpiler.Target.durations "qiskit.transpiler.Target.durations")                                                                                                             | Get an InstructionDurations object from the target                                                                                                                                                                    |
| [`get`](qiskit.transpiler.Target.get#qiskit.transpiler.Target.get "qiskit.transpiler.Target.get")                                                                                                                                     |                                                                                                                                                                                                                       |
| [`get_non_global_operation_names`](qiskit.transpiler.Target.get_non_global_operation_names#qiskit.transpiler.Target.get_non_global_operation_names "qiskit.transpiler.Target.get_non_global_operation_names")                         | Return the non-global operation names for the target                                                                                                                                                                  |
| [`instruction_properties`](qiskit.transpiler.Target.instruction_properties#qiskit.transpiler.Target.instruction_properties "qiskit.transpiler.Target.instruction_properties")                                                         | Get the instruction properties for a specific instruction tuple                                                                                                                                                       |
| [`instruction_schedule_map`](qiskit.transpiler.Target.instruction_schedule_map#qiskit.transpiler.Target.instruction_schedule_map "qiskit.transpiler.Target.instruction_schedule_map")                                                 | Return an [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions in the target with a pulse schedule defined. |
| [`items`](qiskit.transpiler.Target.items#qiskit.transpiler.Target.items "qiskit.transpiler.Target.items")                                                                                                                             |                                                                                                                                                                                                                       |
| [`keys`](qiskit.transpiler.Target.keys#qiskit.transpiler.Target.keys "qiskit.transpiler.Target.keys")                                                                                                                                 |                                                                                                                                                                                                                       |
| [`operation_from_name`](qiskit.transpiler.Target.operation_from_name#qiskit.transpiler.Target.operation_from_name "qiskit.transpiler.Target.operation_from_name")                                                                     | Get the operation class object for a given name                                                                                                                                                                       |
| [`operations_for_qargs`](qiskit.transpiler.Target.operations_for_qargs#qiskit.transpiler.Target.operations_for_qargs "qiskit.transpiler.Target.operations_for_qargs")                                                                 | Get the operation class object for a specified qarg                                                                                                                                                                   |
| [`qargs_for_operation_name`](qiskit.transpiler.Target.qargs_for_operation_name#qiskit.transpiler.Target.qargs_for_operation_name "qiskit.transpiler.Target.qargs_for_operation_name")                                                 | Get the qargs for a given operation name                                                                                                                                                                              |
| [`timing_constraints`](qiskit.transpiler.Target.timing_constraints#qiskit.transpiler.Target.timing_constraints "qiskit.transpiler.Target.timing_constraints")                                                                         | Get an `TimingConstraints` object from the target                                                                                                                                                                     |
| [`update_from_instruction_schedule_map`](qiskit.transpiler.Target.update_from_instruction_schedule_map#qiskit.transpiler.Target.update_from_instruction_schedule_map "qiskit.transpiler.Target.update_from_instruction_schedule_map") | Update the target from an instruction schedule map.                                                                                                                                                                   |
| [`update_instruction_properties`](qiskit.transpiler.Target.update_instruction_properties#qiskit.transpiler.Target.update_instruction_properties "qiskit.transpiler.Target.update_instruction_properties")                             | Update the property object for an instruction qarg pair already in the Target                                                                                                                                         |
| [`values`](qiskit.transpiler.Target.values#qiskit.transpiler.Target.values "qiskit.transpiler.Target.values")                                                                                                                         |                                                                                                                                                                                                                       |

## Attributes

<span id="undefined" />

### aquire\_alignment

<span id="undefined" />

### description

<span id="undefined" />

### dt

<span id="undefined" />

### granularity

<span id="undefined" />

### instructions

Get the list of tuples ``(:class:`~qiskit.circuit.Instruction`, (qargs))`` for the target

<span id="undefined" />

### min\_length

<span id="undefined" />

### num\_qubits

<span id="undefined" />

### operation\_names

Get the operation names in the target.

<span id="undefined" />

### operations

Get the operation class objects in the target.

<span id="undefined" />

### physical\_qubits

Returns a sorted list of physical\_qubits

<span id="undefined" />

### pulse\_alignment

<span id="undefined" />

### qargs

The set of qargs in the target.
