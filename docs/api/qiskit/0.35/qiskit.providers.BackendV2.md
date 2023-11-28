# BackendV2

<span id="undefined" />

`BackendV2(provider=None, name=None, description=None, online_date=None, backend_version=None, **fields)`

Bases: `qiskit.providers.backend.Backend`, `abc.ABC`

Abstract class for Backends

This abstract class is to be used for all Backend objects created by a provider. This version differs from earlier abstract Backend classes in that the configuration attribute no longer exists. Instead, attributes exposing equivalent required immutable properties of the backend device are added. For example `backend.configuration().n_qubits` is accessible from `backend.num_qubits` now.

The `options` attribute of the backend is used to contain the dynamic user configurable options of the backend. It should be used more for runtime options that configure how the backend is used. For example, something like a `shots` field for a backend that runs experiments which would contain an int for how many shots to execute.

If migrating a provider from [`BackendV1`](qiskit.providers.BackendV1#qiskit.providers.BackendV1 "qiskit.providers.BackendV1") or [`BaseBackend`](qiskit.providers.BaseBackend#qiskit.providers.BaseBackend "qiskit.providers.BaseBackend") one thing to keep in mind is for backwards compatibility you might need to add a configuration method that will build a [`BackendConfiguration`](qiskit.providers.models.BackendConfiguration#qiskit.providers.models.BackendConfiguration "qiskit.providers.models.BackendConfiguration") object and [`BackendProperties`](qiskit.providers.models.BackendProperties#qiskit.providers.models.BackendProperties "qiskit.providers.models.BackendProperties") from the attributes defined in this class for backwards compatibility.

Initialize a BackendV2 based backend

**Parameters**

*   **provider** (`Optional`\[`Provider`]) – An optional backwards reference to the [`Provider`](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider") object that the backend is from
*   **name** (`Optional`\[`str`]) – An optional name for the backend
*   **description** (`Optional`\[`str`]) – An optional description of the backend
*   **online\_date** (`Optional`\[`datetime`]) – An optional datetime the backend was brought online
*   **backend\_version** (`Optional`\[`str`]) – An optional backend version string. This differs from the [`version`](#qiskit.providers.BackendV2.version "qiskit.providers.BackendV2.version") attribute as [`version`](#qiskit.providers.BackendV2.version "qiskit.providers.BackendV2.version") is for the abstract [`Backend`](qiskit.providers.Backend#qiskit.providers.Backend "qiskit.providers.Backend") abstract interface version of the object while `backend_version` is for versioning the backend itself.
*   **fields** – kwargs for the values to use to override the default options.

**Raises**

**AttributeError** – If a field is specified that’s outside the backend’s options

## Methods

|                                                                                                                                                             |                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| [`acquire_channel`](qiskit.providers.BackendV2.acquire_channel#qiskit.providers.BackendV2.acquire_channel "qiskit.providers.BackendV2.acquire_channel")     | Return the acquisition channel for the given qubit.      |
| [`control_channel`](qiskit.providers.BackendV2.control_channel#qiskit.providers.BackendV2.control_channel "qiskit.providers.BackendV2.control_channel")     | Return the secondary drive channel for the given qubit   |
| [`drive_channel`](qiskit.providers.BackendV2.drive_channel#qiskit.providers.BackendV2.drive_channel "qiskit.providers.BackendV2.drive_channel")             | Return the drive channel for the given qubit.            |
| [`measure_channel`](qiskit.providers.BackendV2.measure_channel#qiskit.providers.BackendV2.measure_channel "qiskit.providers.BackendV2.measure_channel")     | Return the measure stimulus channel for the given qubit. |
| [`qubit_properties`](qiskit.providers.BackendV2.qubit_properties#qiskit.providers.BackendV2.qubit_properties "qiskit.providers.BackendV2.qubit_properties") | Return QubitProperties for a given qubit.                |
| [`run`](qiskit.providers.BackendV2.run#qiskit.providers.BackendV2.run "qiskit.providers.BackendV2.run")                                                     | Run on the backend.                                      |
| [`set_options`](qiskit.providers.BackendV2.set_options#qiskit.providers.BackendV2.set_options "qiskit.providers.BackendV2.set_options")                     | Set the options fields for the backend                   |

## Attributes

<span id="undefined" />

### coupling\_map

Return the [`CouplingMap`](qiskit.transpiler.CouplingMap#qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap") object

<span id="undefined" />

### dt

Return the system time resolution of input signals

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The input signal timestep in seconds. If the backend doesn’t define `dt` `None` will be returned

**Return type**

dt

<span id="undefined" />

### dtm

Return the system time resolution of output signals

**Returns**

The output signal timestep in seconds.

**Return type**

dtm

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the output signal timestep

<span id="undefined" />

### instruction\_durations

Return the [`InstructionDurations`](qiskit.transpiler.InstructionDurations#qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations") object.

<span id="undefined" />

### instruction\_schedule\_map

Return the [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap#qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap") for the instructions defined in this backend’s target.

<span id="undefined" />

### instructions

A list of Instruction tuples on the backend of the form `(instruction, (qubits)`

**Return type**

`List`\[`Tuple`\[`Instruction`, `Tuple`\[`int`]]]

<span id="undefined" />

### max\_circuits

The maximum number of circuits (or Pulse schedules) that can be run in a single job.

If there is no limit this will return None

<span id="undefined" />

### meas\_map

Return the grouping of measurements which are multiplexed

This is required to be implemented if the backend supports Pulse scheduling.

**Returns**

The grouping of measurements which are multiplexed

**Return type**

meas\_map

**Raises**

**NotImplementedError** – if the backend doesn’t support querying the measurement mapping

<span id="undefined" />

### num\_qubits

Return the number of qubits the backend has.

**Return type**

`int`

<span id="undefined" />

### operation\_names

A list of instruction names that the backend supports.

**Return type**

`List`\[`str`]

<span id="undefined" />

### operations

A list of [`Instruction`](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction") instances that the backend supports.

**Return type**

`List`\[`Instruction`]

<span id="undefined" />

### options

Return the options for the backend

The options of a backend are the dynamic parameters defining how the backend is used. These are used to control the [`run()`](qiskit.providers.BackendV2.run#qiskit.providers.BackendV2.run "qiskit.providers.BackendV2.run") method.

<span id="undefined" />

### provider

Return the backend Provider.

**Returns**

the Provider responsible for the backend.

**Return type**

[Provider](qiskit.providers.Provider#qiskit.providers.Provider "qiskit.providers.Provider")

<span id="undefined" />

### target

A [`qiskit.transpiler.Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") object for the backend.

**Return type**

[Target](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target")

<span id="undefined" />

### version

`= 2`
