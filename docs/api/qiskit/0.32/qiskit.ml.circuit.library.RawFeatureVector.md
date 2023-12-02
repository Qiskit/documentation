# RawFeatureVector

<span id="undefined" />

`RawFeatureVector(feature_dimension)`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

The raw feature vector circuit.

This circuit acts as parameterized initialization for statevectors with `feature_dimension` dimensions, thus with `log2(feature_dimension)` qubits. As long as there are free parameters, this circuit holds a placeholder instruction and can not be decomposed. Once all parameters are bound, the placeholder is replaced by a state initialization and can be unrolled.

In ML, this circuit can be used to load the training data into qubit amplitudes. It does not apply an kernel transformation. (Therefore, it is a “raw” feature vector.)

Examples:

```python
from qiskit.ml.circuit.library import RawFeatureVector
circuit = RawFeatureVector(4)
print(circuit.num_qubits)
# prints: 2

print(circuit.draw(output='text'))
# prints:
#      ┌──────┐
# q_0: ┤0     ├
#      │  Raw │
# q_1: ┤1     ├
#      └──────┘

print(circuit.ordered_parameters)
# prints: [Parameter(p[0]), Parameter(p[1]), Parameter(p[2]), Parameter(p[3])]

import numpy as np
state = np.array([1, 0, 0, 1]) / np.sqrt(2)
bound = circuit.assign_parameters(state)
print(bound.draw())
# prints:
#      ┌──────────────────────────────────┐
# q_0: ┤0                                 ├
#      │  initialize(0.70711,0,0,0.70711) │
# q_1: ┤1                                 ├
#      └──────────────────────────────────┘
```

**Parameters**

**feature\_dimension** (`Optional`\[`int`]) – The feature dimension and number of qubits.

## Methods

|                                                                                                                                                                                                                                                                         |                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`add_bits`](qiskit.ml.circuit.library.RawFeatureVector.add_bits#qiskit.ml.circuit.library.RawFeatureVector.add_bits "qiskit.ml.circuit.library.RawFeatureVector.add_bits")                                                                                             | Add Bits to the circuit.                                                                                                            |
| [`add_calibration`](qiskit.ml.circuit.library.RawFeatureVector.add_calibration#qiskit.ml.circuit.library.RawFeatureVector.add_calibration "qiskit.ml.circuit.library.RawFeatureVector.add_calibration")                                                                 | Register a low-level, custom pulse definition for the given gate.                                                                   |
| [`add_register`](qiskit.ml.circuit.library.RawFeatureVector.add_register#qiskit.ml.circuit.library.RawFeatureVector.add_register "qiskit.ml.circuit.library.RawFeatureVector.add_register")                                                                             | Add registers.                                                                                                                      |
| [`append`](qiskit.ml.circuit.library.RawFeatureVector.append#qiskit.ml.circuit.library.RawFeatureVector.append "qiskit.ml.circuit.library.RawFeatureVector.append")                                                                                                     | Append one or more instructions to the end of the circuit, modifying the circuit in place.                                          |
| [`assign_parameters`](qiskit.ml.circuit.library.RawFeatureVector.assign_parameters#qiskit.ml.circuit.library.RawFeatureVector.assign_parameters "qiskit.ml.circuit.library.RawFeatureVector.assign_parameters")                                                         | Call the initialize instruction.                                                                                                    |
| [`barrier`](qiskit.ml.circuit.library.RawFeatureVector.barrier#qiskit.ml.circuit.library.RawFeatureVector.barrier "qiskit.ml.circuit.library.RawFeatureVector.barrier")                                                                                                 | Apply `Barrier`.                                                                                                                    |
| [`bind_parameters`](qiskit.ml.circuit.library.RawFeatureVector.bind_parameters#qiskit.ml.circuit.library.RawFeatureVector.bind_parameters "qiskit.ml.circuit.library.RawFeatureVector.bind_parameters")                                                                 | Bind parameters.                                                                                                                    |
| [`cast`](qiskit.ml.circuit.library.RawFeatureVector.cast#qiskit.ml.circuit.library.RawFeatureVector.cast "qiskit.ml.circuit.library.RawFeatureVector.cast")                                                                                                             | Best effort to cast value to type.                                                                                                  |
| [`cbit_argument_conversion`](qiskit.ml.circuit.library.RawFeatureVector.cbit_argument_conversion#qiskit.ml.circuit.library.RawFeatureVector.cbit_argument_conversion "qiskit.ml.circuit.library.RawFeatureVector.cbit_argument_conversion")                             | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits.                        |
| [`ccx`](qiskit.ml.circuit.library.RawFeatureVector.ccx#qiskit.ml.circuit.library.RawFeatureVector.ccx "qiskit.ml.circuit.library.RawFeatureVector.ccx")                                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`ch`](qiskit.ml.circuit.library.RawFeatureVector.ch#qiskit.ml.circuit.library.RawFeatureVector.ch "qiskit.ml.circuit.library.RawFeatureVector.ch")                                                                                                                     | Apply [`CHGate`](qiskit.circuit.library.CHGate#qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                      |
| [`cls_instances`](qiskit.ml.circuit.library.RawFeatureVector.cls_instances#qiskit.ml.circuit.library.RawFeatureVector.cls_instances "qiskit.ml.circuit.library.RawFeatureVector.cls_instances")                                                                         | Return the current number of instances of this class, useful for auto naming.                                                       |
| [`cls_prefix`](qiskit.ml.circuit.library.RawFeatureVector.cls_prefix#qiskit.ml.circuit.library.RawFeatureVector.cls_prefix "qiskit.ml.circuit.library.RawFeatureVector.cls_prefix")                                                                                     | Return the prefix to use for auto naming.                                                                                           |
| [`cnot`](qiskit.ml.circuit.library.RawFeatureVector.cnot#qiskit.ml.circuit.library.RawFeatureVector.cnot "qiskit.ml.circuit.library.RawFeatureVector.cnot")                                                                                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`combine`](qiskit.ml.circuit.library.RawFeatureVector.combine#qiskit.ml.circuit.library.RawFeatureVector.combine "qiskit.ml.circuit.library.RawFeatureVector.combine")                                                                                                 | DEPRECATED - Returns rhs appended to self if self contains compatible registers.                                                    |
| [`compose`](qiskit.ml.circuit.library.RawFeatureVector.compose#qiskit.ml.circuit.library.RawFeatureVector.compose "qiskit.ml.circuit.library.RawFeatureVector.compose")                                                                                                 | Compose circuit with `other` circuit or instruction, optionally permuting wires.                                                    |
| [`control`](qiskit.ml.circuit.library.RawFeatureVector.control#qiskit.ml.circuit.library.RawFeatureVector.control "qiskit.ml.circuit.library.RawFeatureVector.control")                                                                                                 | Control this circuit on `num_ctrl_qubits` qubits.                                                                                   |
| [`copy`](qiskit.ml.circuit.library.RawFeatureVector.copy#qiskit.ml.circuit.library.RawFeatureVector.copy "qiskit.ml.circuit.library.RawFeatureVector.copy")                                                                                                             | Copy the circuit.                                                                                                                   |
| [`count_ops`](qiskit.ml.circuit.library.RawFeatureVector.count_ops#qiskit.ml.circuit.library.RawFeatureVector.count_ops "qiskit.ml.circuit.library.RawFeatureVector.count_ops")                                                                                         | Count each operation kind in the circuit.                                                                                           |
| [`cp`](qiskit.ml.circuit.library.RawFeatureVector.cp#qiskit.ml.circuit.library.RawFeatureVector.cp "qiskit.ml.circuit.library.RawFeatureVector.cp")                                                                                                                     | Apply [`CPhaseGate`](qiskit.circuit.library.CPhaseGate#qiskit.circuit.library.CPhaseGate "qiskit.circuit.library.CPhaseGate").      |
| [`crx`](qiskit.ml.circuit.library.RawFeatureVector.crx#qiskit.ml.circuit.library.RawFeatureVector.crx "qiskit.ml.circuit.library.RawFeatureVector.crx")                                                                                                                 | Apply [`CRXGate`](qiskit.circuit.library.CRXGate#qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                  |
| [`cry`](qiskit.ml.circuit.library.RawFeatureVector.cry#qiskit.ml.circuit.library.RawFeatureVector.cry "qiskit.ml.circuit.library.RawFeatureVector.cry")                                                                                                                 | Apply [`CRYGate`](qiskit.circuit.library.CRYGate#qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                  |
| [`crz`](qiskit.ml.circuit.library.RawFeatureVector.crz#qiskit.ml.circuit.library.RawFeatureVector.crz "qiskit.ml.circuit.library.RawFeatureVector.crz")                                                                                                                 | Apply [`CRZGate`](qiskit.circuit.library.CRZGate#qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                  |
| [`cswap`](qiskit.ml.circuit.library.RawFeatureVector.cswap#qiskit.ml.circuit.library.RawFeatureVector.cswap "qiskit.ml.circuit.library.RawFeatureVector.cswap")                                                                                                         | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`csx`](qiskit.ml.circuit.library.RawFeatureVector.csx#qiskit.ml.circuit.library.RawFeatureVector.csx "qiskit.ml.circuit.library.RawFeatureVector.csx")                                                                                                                 | Apply [`CSXGate`](qiskit.circuit.library.CSXGate#qiskit.circuit.library.CSXGate "qiskit.circuit.library.CSXGate").                  |
| [`cu`](qiskit.ml.circuit.library.RawFeatureVector.cu#qiskit.ml.circuit.library.RawFeatureVector.cu "qiskit.ml.circuit.library.RawFeatureVector.cu")                                                                                                                     | Apply [`CUGate`](qiskit.circuit.library.CUGate#qiskit.circuit.library.CUGate "qiskit.circuit.library.CUGate").                      |
| [`cu1`](qiskit.ml.circuit.library.RawFeatureVector.cu1#qiskit.ml.circuit.library.RawFeatureVector.cu1 "qiskit.ml.circuit.library.RawFeatureVector.cu1")                                                                                                                 | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate#qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                  |
| [`cu3`](qiskit.ml.circuit.library.RawFeatureVector.cu3#qiskit.ml.circuit.library.RawFeatureVector.cu3 "qiskit.ml.circuit.library.RawFeatureVector.cu3")                                                                                                                 | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate#qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                  |
| [`cx`](qiskit.ml.circuit.library.RawFeatureVector.cx#qiskit.ml.circuit.library.RawFeatureVector.cx "qiskit.ml.circuit.library.RawFeatureVector.cx")                                                                                                                     | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`cy`](qiskit.ml.circuit.library.RawFeatureVector.cy#qiskit.ml.circuit.library.RawFeatureVector.cy "qiskit.ml.circuit.library.RawFeatureVector.cy")                                                                                                                     | Apply [`CYGate`](qiskit.circuit.library.CYGate#qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                      |
| [`cz`](qiskit.ml.circuit.library.RawFeatureVector.cz#qiskit.ml.circuit.library.RawFeatureVector.cz "qiskit.ml.circuit.library.RawFeatureVector.cz")                                                                                                                     | Apply [`CZGate`](qiskit.circuit.library.CZGate#qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                      |
| [`dcx`](qiskit.ml.circuit.library.RawFeatureVector.dcx#qiskit.ml.circuit.library.RawFeatureVector.dcx "qiskit.ml.circuit.library.RawFeatureVector.dcx")                                                                                                                 | Apply [`DCXGate`](qiskit.circuit.library.DCXGate#qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                  |
| [`decompose`](qiskit.ml.circuit.library.RawFeatureVector.decompose#qiskit.ml.circuit.library.RawFeatureVector.decompose "qiskit.ml.circuit.library.RawFeatureVector.decompose")                                                                                         | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                                              |
| [`delay`](qiskit.ml.circuit.library.RawFeatureVector.delay#qiskit.ml.circuit.library.RawFeatureVector.delay "qiskit.ml.circuit.library.RawFeatureVector.delay")                                                                                                         | Apply [`Delay`](qiskit.circuit.Delay#qiskit.circuit.Delay "qiskit.circuit.Delay").                                                  |
| [`depth`](qiskit.ml.circuit.library.RawFeatureVector.depth#qiskit.ml.circuit.library.RawFeatureVector.depth "qiskit.ml.circuit.library.RawFeatureVector.depth")                                                                                                         | Return circuit depth (i.e., length of critical path).                                                                               |
| [`diagonal`](qiskit.ml.circuit.library.RawFeatureVector.diagonal#qiskit.ml.circuit.library.RawFeatureVector.diagonal "qiskit.ml.circuit.library.RawFeatureVector.diagonal")                                                                                             | Attach a diagonal gate to a circuit.                                                                                                |
| [`draw`](qiskit.ml.circuit.library.RawFeatureVector.draw#qiskit.ml.circuit.library.RawFeatureVector.draw "qiskit.ml.circuit.library.RawFeatureVector.draw")                                                                                                             | Draw the quantum circuit.                                                                                                           |
| [`ecr`](qiskit.ml.circuit.library.RawFeatureVector.ecr#qiskit.ml.circuit.library.RawFeatureVector.ecr "qiskit.ml.circuit.library.RawFeatureVector.ecr")                                                                                                                 | Apply [`ECRGate`](qiskit.circuit.library.ECRGate#qiskit.circuit.library.ECRGate "qiskit.circuit.library.ECRGate").                  |
| [`extend`](qiskit.ml.circuit.library.RawFeatureVector.extend#qiskit.ml.circuit.library.RawFeatureVector.extend "qiskit.ml.circuit.library.RawFeatureVector.extend")                                                                                                     | DEPRECATED - Append QuantumCircuit to the RHS if it contains compatible registers.                                                  |
| [`fredkin`](qiskit.ml.circuit.library.RawFeatureVector.fredkin#qiskit.ml.circuit.library.RawFeatureVector.fredkin "qiskit.ml.circuit.library.RawFeatureVector.fredkin")                                                                                                 | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`from_qasm_file`](qiskit.ml.circuit.library.RawFeatureVector.from_qasm_file#qiskit.ml.circuit.library.RawFeatureVector.from_qasm_file "qiskit.ml.circuit.library.RawFeatureVector.from_qasm_file")                                                                     | Take in a QASM file and generate a QuantumCircuit object.                                                                           |
| [`from_qasm_str`](qiskit.ml.circuit.library.RawFeatureVector.from_qasm_str#qiskit.ml.circuit.library.RawFeatureVector.from_qasm_str "qiskit.ml.circuit.library.RawFeatureVector.from_qasm_str")                                                                         | Take in a QASM string and generate a QuantumCircuit object.                                                                         |
| [`get_instructions`](qiskit.ml.circuit.library.RawFeatureVector.get_instructions#qiskit.ml.circuit.library.RawFeatureVector.get_instructions "qiskit.ml.circuit.library.RawFeatureVector.get_instructions")                                                             | Get instructions matching name.                                                                                                     |
| [`h`](qiskit.ml.circuit.library.RawFeatureVector.h#qiskit.ml.circuit.library.RawFeatureVector.h "qiskit.ml.circuit.library.RawFeatureVector.h")                                                                                                                         | Apply [`HGate`](qiskit.circuit.library.HGate#qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                          |
| [`hamiltonian`](qiskit.ml.circuit.library.RawFeatureVector.hamiltonian#qiskit.ml.circuit.library.RawFeatureVector.hamiltonian "qiskit.ml.circuit.library.RawFeatureVector.hamiltonian")                                                                                 | Apply hamiltonian evolution to qubits.                                                                                              |
| [`has_register`](qiskit.ml.circuit.library.RawFeatureVector.has_register#qiskit.ml.circuit.library.RawFeatureVector.has_register "qiskit.ml.circuit.library.RawFeatureVector.has_register")                                                                             | Test if this circuit has the register r.                                                                                            |
| [`i`](qiskit.ml.circuit.library.RawFeatureVector.i#qiskit.ml.circuit.library.RawFeatureVector.i "qiskit.ml.circuit.library.RawFeatureVector.i")                                                                                                                         | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`id`](qiskit.ml.circuit.library.RawFeatureVector.id#qiskit.ml.circuit.library.RawFeatureVector.id "qiskit.ml.circuit.library.RawFeatureVector.id")                                                                                                                     | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`initialize`](qiskit.ml.circuit.library.RawFeatureVector.initialize#qiskit.ml.circuit.library.RawFeatureVector.initialize "qiskit.ml.circuit.library.RawFeatureVector.initialize")                                                                                     | Initialize qubits in a specific state.                                                                                              |
| [`inverse`](qiskit.ml.circuit.library.RawFeatureVector.inverse#qiskit.ml.circuit.library.RawFeatureVector.inverse "qiskit.ml.circuit.library.RawFeatureVector.inverse")                                                                                                 | Invert (take adjoint of) this circuit.                                                                                              |
| [`iso`](qiskit.ml.circuit.library.RawFeatureVector.iso#qiskit.ml.circuit.library.RawFeatureVector.iso "qiskit.ml.circuit.library.RawFeatureVector.iso")                                                                                                                 | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`isometry`](qiskit.ml.circuit.library.RawFeatureVector.isometry#qiskit.ml.circuit.library.RawFeatureVector.isometry "qiskit.ml.circuit.library.RawFeatureVector.isometry")                                                                                             | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`iswap`](qiskit.ml.circuit.library.RawFeatureVector.iswap#qiskit.ml.circuit.library.RawFeatureVector.iswap "qiskit.ml.circuit.library.RawFeatureVector.iswap")                                                                                                         | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate#qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").          |
| [`mcp`](qiskit.ml.circuit.library.RawFeatureVector.mcp#qiskit.ml.circuit.library.RawFeatureVector.mcp "qiskit.ml.circuit.library.RawFeatureVector.mcp")                                                                                                                 | Apply [`MCPhaseGate`](qiskit.circuit.library.MCPhaseGate#qiskit.circuit.library.MCPhaseGate "qiskit.circuit.library.MCPhaseGate").  |
| [`mcrx`](qiskit.ml.circuit.library.RawFeatureVector.mcrx#qiskit.ml.circuit.library.RawFeatureVector.mcrx "qiskit.ml.circuit.library.RawFeatureVector.mcrx")                                                                                                             | Apply Multiple-Controlled X rotation gate                                                                                           |
| [`mcry`](qiskit.ml.circuit.library.RawFeatureVector.mcry#qiskit.ml.circuit.library.RawFeatureVector.mcry "qiskit.ml.circuit.library.RawFeatureVector.mcry")                                                                                                             | Apply Multiple-Controlled Y rotation gate                                                                                           |
| [`mcrz`](qiskit.ml.circuit.library.RawFeatureVector.mcrz#qiskit.ml.circuit.library.RawFeatureVector.mcrz "qiskit.ml.circuit.library.RawFeatureVector.mcrz")                                                                                                             | Apply Multiple-Controlled Z rotation gate                                                                                           |
| [`mct`](qiskit.ml.circuit.library.RawFeatureVector.mct#qiskit.ml.circuit.library.RawFeatureVector.mct "qiskit.ml.circuit.library.RawFeatureVector.mct")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`mcu1`](qiskit.ml.circuit.library.RawFeatureVector.mcu1#qiskit.ml.circuit.library.RawFeatureVector.mcu1 "qiskit.ml.circuit.library.RawFeatureVector.mcu1")                                                                                                             | Apply `MCU1Gate`.                                                                                                                   |
| [`mcx`](qiskit.ml.circuit.library.RawFeatureVector.mcx#qiskit.ml.circuit.library.RawFeatureVector.mcx "qiskit.ml.circuit.library.RawFeatureVector.mcx")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`measure`](qiskit.ml.circuit.library.RawFeatureVector.measure#qiskit.ml.circuit.library.RawFeatureVector.measure "qiskit.ml.circuit.library.RawFeatureVector.measure")                                                                                                 | Measure quantum bit into classical bit (tuples).                                                                                    |
| [`measure_active`](qiskit.ml.circuit.library.RawFeatureVector.measure_active#qiskit.ml.circuit.library.RawFeatureVector.measure_active "qiskit.ml.circuit.library.RawFeatureVector.measure_active")                                                                     | Adds measurement to all non-idle qubits.                                                                                            |
| [`measure_all`](qiskit.ml.circuit.library.RawFeatureVector.measure_all#qiskit.ml.circuit.library.RawFeatureVector.measure_all "qiskit.ml.circuit.library.RawFeatureVector.measure_all")                                                                                 | Adds measurement to all qubits.                                                                                                     |
| [`ms`](qiskit.ml.circuit.library.RawFeatureVector.ms#qiskit.ml.circuit.library.RawFeatureVector.ms "qiskit.ml.circuit.library.RawFeatureVector.ms")                                                                                                                     | Apply [`MSGate`](qiskit.circuit.library.MSGate#qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").                      |
| [`num_connected_components`](qiskit.ml.circuit.library.RawFeatureVector.num_connected_components#qiskit.ml.circuit.library.RawFeatureVector.num_connected_components "qiskit.ml.circuit.library.RawFeatureVector.num_connected_components")                             | How many non-entangled subcircuits can the circuit be factored to.                                                                  |
| [`num_nonlocal_gates`](qiskit.ml.circuit.library.RawFeatureVector.num_nonlocal_gates#qiskit.ml.circuit.library.RawFeatureVector.num_nonlocal_gates "qiskit.ml.circuit.library.RawFeatureVector.num_nonlocal_gates")                                                     | Return number of non-local gates (i.e.                                                                                              |
| [`num_tensor_factors`](qiskit.ml.circuit.library.RawFeatureVector.num_tensor_factors#qiskit.ml.circuit.library.RawFeatureVector.num_tensor_factors "qiskit.ml.circuit.library.RawFeatureVector.num_tensor_factors")                                                     | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`num_unitary_factors`](qiskit.ml.circuit.library.RawFeatureVector.num_unitary_factors#qiskit.ml.circuit.library.RawFeatureVector.num_unitary_factors "qiskit.ml.circuit.library.RawFeatureVector.num_unitary_factors")                                                 | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`p`](qiskit.ml.circuit.library.RawFeatureVector.p#qiskit.ml.circuit.library.RawFeatureVector.p "qiskit.ml.circuit.library.RawFeatureVector.p")                                                                                                                         | Apply [`PhaseGate`](qiskit.circuit.library.PhaseGate#qiskit.circuit.library.PhaseGate "qiskit.circuit.library.PhaseGate").          |
| [`pauli`](qiskit.ml.circuit.library.RawFeatureVector.pauli#qiskit.ml.circuit.library.RawFeatureVector.pauli "qiskit.ml.circuit.library.RawFeatureVector.pauli")                                                                                                         | Apply [`PauliGate`](qiskit.circuit.library.PauliGate#qiskit.circuit.library.PauliGate "qiskit.circuit.library.PauliGate").          |
| [`power`](qiskit.ml.circuit.library.RawFeatureVector.power#qiskit.ml.circuit.library.RawFeatureVector.power "qiskit.ml.circuit.library.RawFeatureVector.power")                                                                                                         | Raise this circuit to the power of `power`.                                                                                         |
| [`qasm`](qiskit.ml.circuit.library.RawFeatureVector.qasm#qiskit.ml.circuit.library.RawFeatureVector.qasm "qiskit.ml.circuit.library.RawFeatureVector.qasm")                                                                                                             | Return OpenQASM string.                                                                                                             |
| [`qbit_argument_conversion`](qiskit.ml.circuit.library.RawFeatureVector.qbit_argument_conversion#qiskit.ml.circuit.library.RawFeatureVector.qbit_argument_conversion "qiskit.ml.circuit.library.RawFeatureVector.qbit_argument_conversion")                             | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                                        |
| [`qubit_duration`](qiskit.ml.circuit.library.RawFeatureVector.qubit_duration#qiskit.ml.circuit.library.RawFeatureVector.qubit_duration "qiskit.ml.circuit.library.RawFeatureVector.qubit_duration")                                                                     | Return the duration between the start and stop time of the first and last instructions, excluding delays, over the supplied qubits. |
| [`qubit_start_time`](qiskit.ml.circuit.library.RawFeatureVector.qubit_start_time#qiskit.ml.circuit.library.RawFeatureVector.qubit_start_time "qiskit.ml.circuit.library.RawFeatureVector.qubit_start_time")                                                             | Return the start time of the first instruction, excluding delays, over the supplied qubits.                                         |
| [`qubit_stop_time`](qiskit.ml.circuit.library.RawFeatureVector.qubit_stop_time#qiskit.ml.circuit.library.RawFeatureVector.qubit_stop_time "qiskit.ml.circuit.library.RawFeatureVector.qubit_stop_time")                                                                 | Return the stop time of the last instruction, excluding delays, over the supplied qubits.                                           |
| [`r`](qiskit.ml.circuit.library.RawFeatureVector.r#qiskit.ml.circuit.library.RawFeatureVector.r "qiskit.ml.circuit.library.RawFeatureVector.r")                                                                                                                         | Apply [`RGate`](qiskit.circuit.library.RGate#qiskit.circuit.library.RGate "qiskit.circuit.library.RGate").                          |
| [`rcccx`](qiskit.ml.circuit.library.RawFeatureVector.rcccx#qiskit.ml.circuit.library.RawFeatureVector.rcccx "qiskit.ml.circuit.library.RawFeatureVector.rcccx")                                                                                                         | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate#qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").              |
| [`rccx`](qiskit.ml.circuit.library.RawFeatureVector.rccx#qiskit.ml.circuit.library.RawFeatureVector.rccx "qiskit.ml.circuit.library.RawFeatureVector.rccx")                                                                                                             | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate#qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").              |
| [`remove_final_measurements`](qiskit.ml.circuit.library.RawFeatureVector.remove_final_measurements#qiskit.ml.circuit.library.RawFeatureVector.remove_final_measurements "qiskit.ml.circuit.library.RawFeatureVector.remove_final_measurements")                         | Removes final measurement on all qubits if they are present.                                                                        |
| [`repeat`](qiskit.ml.circuit.library.RawFeatureVector.repeat#qiskit.ml.circuit.library.RawFeatureVector.repeat "qiskit.ml.circuit.library.RawFeatureVector.repeat")                                                                                                     | Repeat this circuit `reps` times.                                                                                                   |
| [`reset`](qiskit.ml.circuit.library.RawFeatureVector.reset#qiskit.ml.circuit.library.RawFeatureVector.reset "qiskit.ml.circuit.library.RawFeatureVector.reset")                                                                                                         | Reset q.                                                                                                                            |
| [`reverse_bits`](qiskit.ml.circuit.library.RawFeatureVector.reverse_bits#qiskit.ml.circuit.library.RawFeatureVector.reverse_bits "qiskit.ml.circuit.library.RawFeatureVector.reverse_bits")                                                                             | Return a circuit with the opposite order of wires.                                                                                  |
| [`reverse_ops`](qiskit.ml.circuit.library.RawFeatureVector.reverse_ops#qiskit.ml.circuit.library.RawFeatureVector.reverse_ops "qiskit.ml.circuit.library.RawFeatureVector.reverse_ops")                                                                                 | Reverse the circuit by reversing the order of instructions.                                                                         |
| [`rv`](qiskit.ml.circuit.library.RawFeatureVector.rv#qiskit.ml.circuit.library.RawFeatureVector.rv "qiskit.ml.circuit.library.RawFeatureVector.rv")                                                                                                                     | Apply [`RVGate`](qiskit.circuit.library.RVGate#qiskit.circuit.library.RVGate "qiskit.circuit.library.RVGate").                      |
| [`rx`](qiskit.ml.circuit.library.RawFeatureVector.rx#qiskit.ml.circuit.library.RawFeatureVector.rx "qiskit.ml.circuit.library.RawFeatureVector.rx")                                                                                                                     | Apply [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                      |
| [`rxx`](qiskit.ml.circuit.library.RawFeatureVector.rxx#qiskit.ml.circuit.library.RawFeatureVector.rxx "qiskit.ml.circuit.library.RawFeatureVector.rxx")                                                                                                                 | Apply [`RXXGate`](qiskit.circuit.library.RXXGate#qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                  |
| [`ry`](qiskit.ml.circuit.library.RawFeatureVector.ry#qiskit.ml.circuit.library.RawFeatureVector.ry "qiskit.ml.circuit.library.RawFeatureVector.ry")                                                                                                                     | Apply [`RYGate`](qiskit.circuit.library.RYGate#qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                      |
| [`ryy`](qiskit.ml.circuit.library.RawFeatureVector.ryy#qiskit.ml.circuit.library.RawFeatureVector.ryy "qiskit.ml.circuit.library.RawFeatureVector.ryy")                                                                                                                 | Apply [`RYYGate`](qiskit.circuit.library.RYYGate#qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                  |
| [`rz`](qiskit.ml.circuit.library.RawFeatureVector.rz#qiskit.ml.circuit.library.RawFeatureVector.rz "qiskit.ml.circuit.library.RawFeatureVector.rz")                                                                                                                     | Apply [`RZGate`](qiskit.circuit.library.RZGate#qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                      |
| [`rzx`](qiskit.ml.circuit.library.RawFeatureVector.rzx#qiskit.ml.circuit.library.RawFeatureVector.rzx "qiskit.ml.circuit.library.RawFeatureVector.rzx")                                                                                                                 | Apply [`RZXGate`](qiskit.circuit.library.RZXGate#qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                  |
| [`rzz`](qiskit.ml.circuit.library.RawFeatureVector.rzz#qiskit.ml.circuit.library.RawFeatureVector.rzz "qiskit.ml.circuit.library.RawFeatureVector.rzz")                                                                                                                 | Apply [`RZZGate`](qiskit.circuit.library.RZZGate#qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                  |
| [`s`](qiskit.ml.circuit.library.RawFeatureVector.s#qiskit.ml.circuit.library.RawFeatureVector.s "qiskit.ml.circuit.library.RawFeatureVector.s")                                                                                                                         | Apply [`SGate`](qiskit.circuit.library.SGate#qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                          |
| [`save_amplitudes`](qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes#qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes "qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes")                                                                 | Save complex statevector amplitudes.                                                                                                |
| [`save_amplitudes_squared`](qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes_squared#qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes_squared "qiskit.ml.circuit.library.RawFeatureVector.save_amplitudes_squared")                                 | Save squared statevector amplitudes (probabilities).                                                                                |
| [`save_density_matrix`](qiskit.ml.circuit.library.RawFeatureVector.save_density_matrix#qiskit.ml.circuit.library.RawFeatureVector.save_density_matrix "qiskit.ml.circuit.library.RawFeatureVector.save_density_matrix")                                                 | Save the current simulator quantum state as a density matrix.                                                                       |
| [`save_expectation_value`](qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value#qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value "qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value")                                     | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_expectation_value_variance`](qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value_variance#qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value_variance "qiskit.ml.circuit.library.RawFeatureVector.save_expectation_value_variance") | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_matrix_product_state`](qiskit.ml.circuit.library.RawFeatureVector.save_matrix_product_state#qiskit.ml.circuit.library.RawFeatureVector.save_matrix_product_state "qiskit.ml.circuit.library.RawFeatureVector.save_matrix_product_state")                         | Save the current simulator quantum state as a matrix product state.                                                                 |
| [`save_probabilities`](qiskit.ml.circuit.library.RawFeatureVector.save_probabilities#qiskit.ml.circuit.library.RawFeatureVector.save_probabilities "qiskit.ml.circuit.library.RawFeatureVector.save_probabilities")                                                     | Save measurement outcome probabilities vector.                                                                                      |
| [`save_probabilities_dict`](qiskit.ml.circuit.library.RawFeatureVector.save_probabilities_dict#qiskit.ml.circuit.library.RawFeatureVector.save_probabilities_dict "qiskit.ml.circuit.library.RawFeatureVector.save_probabilities_dict")                                 | Save measurement outcome probabilities vector.                                                                                      |
| [`save_stabilizer`](qiskit.ml.circuit.library.RawFeatureVector.save_stabilizer#qiskit.ml.circuit.library.RawFeatureVector.save_stabilizer "qiskit.ml.circuit.library.RawFeatureVector.save_stabilizer")                                                                 | Save the current stabilizer simulator quantum state as a Clifford.                                                                  |
| [`save_state`](qiskit.ml.circuit.library.RawFeatureVector.save_state#qiskit.ml.circuit.library.RawFeatureVector.save_state "qiskit.ml.circuit.library.RawFeatureVector.save_state")                                                                                     | Save the current simulator quantum state.                                                                                           |
| [`save_statevector`](qiskit.ml.circuit.library.RawFeatureVector.save_statevector#qiskit.ml.circuit.library.RawFeatureVector.save_statevector "qiskit.ml.circuit.library.RawFeatureVector.save_statevector")                                                             | Save the current simulator quantum state as a statevector.                                                                          |
| [`save_statevector_dict`](qiskit.ml.circuit.library.RawFeatureVector.save_statevector_dict#qiskit.ml.circuit.library.RawFeatureVector.save_statevector_dict "qiskit.ml.circuit.library.RawFeatureVector.save_statevector_dict")                                         | Save the current simulator quantum state as a statevector as a dict.                                                                |
| [`save_superop`](qiskit.ml.circuit.library.RawFeatureVector.save_superop#qiskit.ml.circuit.library.RawFeatureVector.save_superop "qiskit.ml.circuit.library.RawFeatureVector.save_superop")                                                                             | Save the current state of the superop simulator.                                                                                    |
| [`save_unitary`](qiskit.ml.circuit.library.RawFeatureVector.save_unitary#qiskit.ml.circuit.library.RawFeatureVector.save_unitary "qiskit.ml.circuit.library.RawFeatureVector.save_unitary")                                                                             | Save the current state of the unitary simulator.                                                                                    |
| [`sdg`](qiskit.ml.circuit.library.RawFeatureVector.sdg#qiskit.ml.circuit.library.RawFeatureVector.sdg "qiskit.ml.circuit.library.RawFeatureVector.sdg")                                                                                                                 | Apply [`SdgGate`](qiskit.circuit.library.SdgGate#qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                  |
| [`set_density_matrix`](qiskit.ml.circuit.library.RawFeatureVector.set_density_matrix#qiskit.ml.circuit.library.RawFeatureVector.set_density_matrix "qiskit.ml.circuit.library.RawFeatureVector.set_density_matrix")                                                     | Set the density matrix state of the simulator.                                                                                      |
| [`set_matrix_product_state`](qiskit.ml.circuit.library.RawFeatureVector.set_matrix_product_state#qiskit.ml.circuit.library.RawFeatureVector.set_matrix_product_state "qiskit.ml.circuit.library.RawFeatureVector.set_matrix_product_state")                             | Set the matrix product state of the simulator.                                                                                      |
| [`set_stabilizer`](qiskit.ml.circuit.library.RawFeatureVector.set_stabilizer#qiskit.ml.circuit.library.RawFeatureVector.set_stabilizer "qiskit.ml.circuit.library.RawFeatureVector.set_stabilizer")                                                                     | Set the Clifford stabilizer state of the simulator.                                                                                 |
| [`set_statevector`](qiskit.ml.circuit.library.RawFeatureVector.set_statevector#qiskit.ml.circuit.library.RawFeatureVector.set_statevector "qiskit.ml.circuit.library.RawFeatureVector.set_statevector")                                                                 | Set the statevector state of the simulator.                                                                                         |
| [`set_superop`](qiskit.ml.circuit.library.RawFeatureVector.set_superop#qiskit.ml.circuit.library.RawFeatureVector.set_superop "qiskit.ml.circuit.library.RawFeatureVector.set_superop")                                                                                 | Set the superop state of the simulator.                                                                                             |
| [`set_unitary`](qiskit.ml.circuit.library.RawFeatureVector.set_unitary#qiskit.ml.circuit.library.RawFeatureVector.set_unitary "qiskit.ml.circuit.library.RawFeatureVector.set_unitary")                                                                                 | Set the state state of the simulator.                                                                                               |
| [`size`](qiskit.ml.circuit.library.RawFeatureVector.size#qiskit.ml.circuit.library.RawFeatureVector.size "qiskit.ml.circuit.library.RawFeatureVector.size")                                                                                                             | Returns total number of gate operations in circuit.                                                                                 |
| [`snapshot`](qiskit.ml.circuit.library.RawFeatureVector.snapshot#qiskit.ml.circuit.library.RawFeatureVector.snapshot "qiskit.ml.circuit.library.RawFeatureVector.snapshot")                                                                                             | Take a statevector snapshot of the internal simulator representation.                                                               |
| [`snapshot_density_matrix`](qiskit.ml.circuit.library.RawFeatureVector.snapshot_density_matrix#qiskit.ml.circuit.library.RawFeatureVector.snapshot_density_matrix "qiskit.ml.circuit.library.RawFeatureVector.snapshot_density_matrix")                                 | Take a density matrix snapshot of simulator state.                                                                                  |
| [`snapshot_expectation_value`](qiskit.ml.circuit.library.RawFeatureVector.snapshot_expectation_value#qiskit.ml.circuit.library.RawFeatureVector.snapshot_expectation_value "qiskit.ml.circuit.library.RawFeatureVector.snapshot_expectation_value")                     | Take a snapshot of expectation value \<O> of an Operator.                                                                           |
| [`snapshot_probabilities`](qiskit.ml.circuit.library.RawFeatureVector.snapshot_probabilities#qiskit.ml.circuit.library.RawFeatureVector.snapshot_probabilities "qiskit.ml.circuit.library.RawFeatureVector.snapshot_probabilities")                                     | Take a probability snapshot of the simulator state.                                                                                 |
| [`snapshot_stabilizer`](qiskit.ml.circuit.library.RawFeatureVector.snapshot_stabilizer#qiskit.ml.circuit.library.RawFeatureVector.snapshot_stabilizer "qiskit.ml.circuit.library.RawFeatureVector.snapshot_stabilizer")                                                 | Take a stabilizer snapshot of the simulator state.                                                                                  |
| [`snapshot_statevector`](qiskit.ml.circuit.library.RawFeatureVector.snapshot_statevector#qiskit.ml.circuit.library.RawFeatureVector.snapshot_statevector "qiskit.ml.circuit.library.RawFeatureVector.snapshot_statevector")                                             | Take a statevector snapshot of the simulator state.                                                                                 |
| [`squ`](qiskit.ml.circuit.library.RawFeatureVector.squ#qiskit.ml.circuit.library.RawFeatureVector.squ "qiskit.ml.circuit.library.RawFeatureVector.squ")                                                                                                                 | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                                                      |
| [`swap`](qiskit.ml.circuit.library.RawFeatureVector.swap#qiskit.ml.circuit.library.RawFeatureVector.swap "qiskit.ml.circuit.library.RawFeatureVector.swap")                                                                                                             | Apply [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").              |
| [`sx`](qiskit.ml.circuit.library.RawFeatureVector.sx#qiskit.ml.circuit.library.RawFeatureVector.sx "qiskit.ml.circuit.library.RawFeatureVector.sx")                                                                                                                     | Apply [`SXGate`](qiskit.circuit.library.SXGate#qiskit.circuit.library.SXGate "qiskit.circuit.library.SXGate").                      |
| [`sxdg`](qiskit.ml.circuit.library.RawFeatureVector.sxdg#qiskit.ml.circuit.library.RawFeatureVector.sxdg "qiskit.ml.circuit.library.RawFeatureVector.sxdg")                                                                                                             | Apply [`SXdgGate`](qiskit.circuit.library.SXdgGate#qiskit.circuit.library.SXdgGate "qiskit.circuit.library.SXdgGate").              |
| [`t`](qiskit.ml.circuit.library.RawFeatureVector.t#qiskit.ml.circuit.library.RawFeatureVector.t "qiskit.ml.circuit.library.RawFeatureVector.t")                                                                                                                         | Apply [`TGate`](qiskit.circuit.library.TGate#qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                          |
| [`tdg`](qiskit.ml.circuit.library.RawFeatureVector.tdg#qiskit.ml.circuit.library.RawFeatureVector.tdg "qiskit.ml.circuit.library.RawFeatureVector.tdg")                                                                                                                 | Apply [`TdgGate`](qiskit.circuit.library.TdgGate#qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                  |
| [`tensor`](qiskit.ml.circuit.library.RawFeatureVector.tensor#qiskit.ml.circuit.library.RawFeatureVector.tensor "qiskit.ml.circuit.library.RawFeatureVector.tensor")                                                                                                     | Tensor `self` with `other`.                                                                                                         |
| [`to_gate`](qiskit.ml.circuit.library.RawFeatureVector.to_gate#qiskit.ml.circuit.library.RawFeatureVector.to_gate "qiskit.ml.circuit.library.RawFeatureVector.to_gate")                                                                                                 | Create a Gate out of this circuit.                                                                                                  |
| [`to_instruction`](qiskit.ml.circuit.library.RawFeatureVector.to_instruction#qiskit.ml.circuit.library.RawFeatureVector.to_instruction "qiskit.ml.circuit.library.RawFeatureVector.to_instruction")                                                                     | Create an Instruction out of this circuit.                                                                                          |
| [`toffoli`](qiskit.ml.circuit.library.RawFeatureVector.toffoli#qiskit.ml.circuit.library.RawFeatureVector.toffoli "qiskit.ml.circuit.library.RawFeatureVector.toffoli")                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`u`](qiskit.ml.circuit.library.RawFeatureVector.u#qiskit.ml.circuit.library.RawFeatureVector.u "qiskit.ml.circuit.library.RawFeatureVector.u")                                                                                                                         | Apply [`UGate`](qiskit.circuit.library.UGate#qiskit.circuit.library.UGate "qiskit.circuit.library.UGate").                          |
| [`u1`](qiskit.ml.circuit.library.RawFeatureVector.u1#qiskit.ml.circuit.library.RawFeatureVector.u1 "qiskit.ml.circuit.library.RawFeatureVector.u1")                                                                                                                     | Apply [`U1Gate`](qiskit.circuit.library.U1Gate#qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                      |
| [`u2`](qiskit.ml.circuit.library.RawFeatureVector.u2#qiskit.ml.circuit.library.RawFeatureVector.u2 "qiskit.ml.circuit.library.RawFeatureVector.u2")                                                                                                                     | Apply [`U2Gate`](qiskit.circuit.library.U2Gate#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                      |
| [`u3`](qiskit.ml.circuit.library.RawFeatureVector.u3#qiskit.ml.circuit.library.RawFeatureVector.u3 "qiskit.ml.circuit.library.RawFeatureVector.u3")                                                                                                                     | Apply [`U3Gate`](qiskit.circuit.library.U3Gate#qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                      |
| [`uc`](qiskit.ml.circuit.library.RawFeatureVector.uc#qiskit.ml.circuit.library.RawFeatureVector.uc "qiskit.ml.circuit.library.RawFeatureVector.uc")                                                                                                                     | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                                                   |
| [`ucrx`](qiskit.ml.circuit.library.RawFeatureVector.ucrx#qiskit.ml.circuit.library.RawFeatureVector.ucrx "qiskit.ml.circuit.library.RawFeatureVector.ucrx")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                                              |
| [`ucry`](qiskit.ml.circuit.library.RawFeatureVector.ucry#qiskit.ml.circuit.library.RawFeatureVector.ucry "qiskit.ml.circuit.library.RawFeatureVector.ucry")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                                              |
| [`ucrz`](qiskit.ml.circuit.library.RawFeatureVector.ucrz#qiskit.ml.circuit.library.RawFeatureVector.ucrz "qiskit.ml.circuit.library.RawFeatureVector.ucrz")                                                                                                             | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                                        |
| [`unitary`](qiskit.ml.circuit.library.RawFeatureVector.unitary#qiskit.ml.circuit.library.RawFeatureVector.unitary "qiskit.ml.circuit.library.RawFeatureVector.unitary")                                                                                                 | Apply unitary gate to q.                                                                                                            |
| [`width`](qiskit.ml.circuit.library.RawFeatureVector.width#qiskit.ml.circuit.library.RawFeatureVector.width "qiskit.ml.circuit.library.RawFeatureVector.width")                                                                                                         | Return number of qubits plus clbits in circuit.                                                                                     |
| [`x`](qiskit.ml.circuit.library.RawFeatureVector.x#qiskit.ml.circuit.library.RawFeatureVector.x "qiskit.ml.circuit.library.RawFeatureVector.x")                                                                                                                         | Apply [`XGate`](qiskit.circuit.library.XGate#qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                          |
| [`y`](qiskit.ml.circuit.library.RawFeatureVector.y#qiskit.ml.circuit.library.RawFeatureVector.y "qiskit.ml.circuit.library.RawFeatureVector.y")                                                                                                                         | Apply [`YGate`](qiskit.circuit.library.YGate#qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                          |
| [`z`](qiskit.ml.circuit.library.RawFeatureVector.z#qiskit.ml.circuit.library.RawFeatureVector.z "qiskit.ml.circuit.library.RawFeatureVector.z")                                                                                                                         | Apply [`ZGate`](qiskit.circuit.library.ZGate#qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                          |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

<span id="undefined" />

### data

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### feature\_dimension

Return the feature dimension.

**Return type**

`int`

**Returns**

The feature dimension, which is `2 ** num_qubits`.

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 16`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

<span id="undefined" />

### num\_clbits

Return number of classical bits.

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Returns the number of qubits in this circuit.

**Return type**

`int`

**Returns**

The number of qubits.

<span id="undefined" />

### ordered\_parameters

Return the free parameters in the RawFeatureVector.

**Return type**

`List`\[`ParameterExpression`]

**Returns**

A list of the free parameters.

<span id="undefined" />

### parameters

Return the free parameters in the RawFeatureVector.

**Return type**

`Set`\[`ParameterExpression`]

**Returns**

A set of the free parameters.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.
