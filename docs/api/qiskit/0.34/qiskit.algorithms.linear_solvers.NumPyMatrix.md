# NumPyMatrix[¶](#numpymatrix "Permalink to this headline")

<span id="undefined" />

`NumPyMatrix(matrix, tolerance=0.01, evolution_time=1.0, name='np_matrix')`

Bases: `qiskit.algorithms.linear_solvers.matrices.linear_system_matrix.LinearSystemMatrix`

Class of matrices given as a numpy array.

## Examples

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.algorithms.linear_solvers.matrices.numpy_matrix import NumPyMatrix

matrix = NumPyMatrix(np.array([[1 / 2, 1 / 6, 0, 0], [1 / 6, 1 / 2, 1 / 6, 0],
                   [0, 1 / 6, 1 / 2, 1 / 6], [0, 0, 1 / 6, 1 / 2]]))
power = 2

num_qubits = matrix.num_state_qubits
# Controlled power (as used within QPE)
pow_circ = matrix.power(power).control()
circ_qubits = pow_circ.num_qubits
qc = QuantumCircuit(circ_qubits)
qc.append(matrix.power(power).control(), list(range(circ_qubits)))
```

```python
<qiskit.circuit.instructionset.InstructionSet at 0x7faca8f211c0>
```

**Parameters**

*   **matrix** (`ndarray`) – The matrix defining the linear system problem.
*   **tolerance** (`float`) – The accuracy desired for the approximation.
*   **evolution\_time** (`float`) – The time of the Hamiltonian simulation.
*   **name** (`str`) – The name of the object.

## Methods

|                                                                                                                                                                                                                                                                               |                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`add_bits`](qiskit.algorithms.linear_solvers.NumPyMatrix.add_bits#qiskit.algorithms.linear_solvers.NumPyMatrix.add_bits "qiskit.algorithms.linear_solvers.NumPyMatrix.add_bits")                                                                                             | Add Bits to the circuit.                                                                                                            |
| [`add_calibration`](qiskit.algorithms.linear_solvers.NumPyMatrix.add_calibration#qiskit.algorithms.linear_solvers.NumPyMatrix.add_calibration "qiskit.algorithms.linear_solvers.NumPyMatrix.add_calibration")                                                                 | Register a low-level, custom pulse definition for the given gate.                                                                   |
| [`add_register`](qiskit.algorithms.linear_solvers.NumPyMatrix.add_register#qiskit.algorithms.linear_solvers.NumPyMatrix.add_register "qiskit.algorithms.linear_solvers.NumPyMatrix.add_register")                                                                             | Add registers.                                                                                                                      |
| [`append`](qiskit.algorithms.linear_solvers.NumPyMatrix.append#qiskit.algorithms.linear_solvers.NumPyMatrix.append "qiskit.algorithms.linear_solvers.NumPyMatrix.append")                                                                                                     | Append one or more instructions to the end of the circuit, modifying the circuit in place.                                          |
| [`assign_parameters`](qiskit.algorithms.linear_solvers.NumPyMatrix.assign_parameters#qiskit.algorithms.linear_solvers.NumPyMatrix.assign_parameters "qiskit.algorithms.linear_solvers.NumPyMatrix.assign_parameters")                                                         | Assign parameters to new parameters or values.                                                                                      |
| [`barrier`](qiskit.algorithms.linear_solvers.NumPyMatrix.barrier#qiskit.algorithms.linear_solvers.NumPyMatrix.barrier "qiskit.algorithms.linear_solvers.NumPyMatrix.barrier")                                                                                                 | Apply [`Barrier`](qiskit.circuit.Barrier#qiskit.circuit.Barrier "qiskit.circuit.Barrier").                                          |
| [`bind_parameters`](qiskit.algorithms.linear_solvers.NumPyMatrix.bind_parameters#qiskit.algorithms.linear_solvers.NumPyMatrix.bind_parameters "qiskit.algorithms.linear_solvers.NumPyMatrix.bind_parameters")                                                                 | Assign numeric parameters to values yielding a new circuit.                                                                         |
| [`break_loop`](qiskit.algorithms.linear_solvers.NumPyMatrix.break_loop#qiskit.algorithms.linear_solvers.NumPyMatrix.break_loop "qiskit.algorithms.linear_solvers.NumPyMatrix.break_loop")                                                                                     | Apply `BreakLoopOp`.                                                                                                                |
| [`cast`](qiskit.algorithms.linear_solvers.NumPyMatrix.cast#qiskit.algorithms.linear_solvers.NumPyMatrix.cast "qiskit.algorithms.linear_solvers.NumPyMatrix.cast")                                                                                                             | Best effort to cast value to type.                                                                                                  |
| [`cbit_argument_conversion`](qiskit.algorithms.linear_solvers.NumPyMatrix.cbit_argument_conversion#qiskit.algorithms.linear_solvers.NumPyMatrix.cbit_argument_conversion "qiskit.algorithms.linear_solvers.NumPyMatrix.cbit_argument_conversion")                             | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits.                        |
| [`ccx`](qiskit.algorithms.linear_solvers.NumPyMatrix.ccx#qiskit.algorithms.linear_solvers.NumPyMatrix.ccx "qiskit.algorithms.linear_solvers.NumPyMatrix.ccx")                                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`ch`](qiskit.algorithms.linear_solvers.NumPyMatrix.ch#qiskit.algorithms.linear_solvers.NumPyMatrix.ch "qiskit.algorithms.linear_solvers.NumPyMatrix.ch")                                                                                                                     | Apply [`CHGate`](qiskit.circuit.library.CHGate#qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                      |
| [`cls_instances`](qiskit.algorithms.linear_solvers.NumPyMatrix.cls_instances#qiskit.algorithms.linear_solvers.NumPyMatrix.cls_instances "qiskit.algorithms.linear_solvers.NumPyMatrix.cls_instances")                                                                         | Return the current number of instances of this class, useful for auto naming.                                                       |
| [`cls_prefix`](qiskit.algorithms.linear_solvers.NumPyMatrix.cls_prefix#qiskit.algorithms.linear_solvers.NumPyMatrix.cls_prefix "qiskit.algorithms.linear_solvers.NumPyMatrix.cls_prefix")                                                                                     | Return the prefix to use for auto naming.                                                                                           |
| [`cnot`](qiskit.algorithms.linear_solvers.NumPyMatrix.cnot#qiskit.algorithms.linear_solvers.NumPyMatrix.cnot "qiskit.algorithms.linear_solvers.NumPyMatrix.cnot")                                                                                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`combine`](qiskit.algorithms.linear_solvers.NumPyMatrix.combine#qiskit.algorithms.linear_solvers.NumPyMatrix.combine "qiskit.algorithms.linear_solvers.NumPyMatrix.combine")                                                                                                 | DEPRECATED - Returns rhs appended to self if self contains compatible registers.                                                    |
| [`compose`](qiskit.algorithms.linear_solvers.NumPyMatrix.compose#qiskit.algorithms.linear_solvers.NumPyMatrix.compose "qiskit.algorithms.linear_solvers.NumPyMatrix.compose")                                                                                                 | Compose circuit with `other` circuit or instruction, optionally permuting wires.                                                    |
| [`condition_bounds`](qiskit.algorithms.linear_solvers.NumPyMatrix.condition_bounds#qiskit.algorithms.linear_solvers.NumPyMatrix.condition_bounds "qiskit.algorithms.linear_solvers.NumPyMatrix.condition_bounds")                                                             | Return lower and upper bounds on the condition number of the matrix.                                                                |
| [`continue_loop`](qiskit.algorithms.linear_solvers.NumPyMatrix.continue_loop#qiskit.algorithms.linear_solvers.NumPyMatrix.continue_loop "qiskit.algorithms.linear_solvers.NumPyMatrix.continue_loop")                                                                         | Apply `ContinueLoopOp`.                                                                                                             |
| [`control`](qiskit.algorithms.linear_solvers.NumPyMatrix.control#qiskit.algorithms.linear_solvers.NumPyMatrix.control "qiskit.algorithms.linear_solvers.NumPyMatrix.control")                                                                                                 | Control this circuit on `num_ctrl_qubits` qubits.                                                                                   |
| [`copy`](qiskit.algorithms.linear_solvers.NumPyMatrix.copy#qiskit.algorithms.linear_solvers.NumPyMatrix.copy "qiskit.algorithms.linear_solvers.NumPyMatrix.copy")                                                                                                             | Copy the circuit.                                                                                                                   |
| [`count_ops`](qiskit.algorithms.linear_solvers.NumPyMatrix.count_ops#qiskit.algorithms.linear_solvers.NumPyMatrix.count_ops "qiskit.algorithms.linear_solvers.NumPyMatrix.count_ops")                                                                                         | Count each operation kind in the circuit.                                                                                           |
| [`cp`](qiskit.algorithms.linear_solvers.NumPyMatrix.cp#qiskit.algorithms.linear_solvers.NumPyMatrix.cp "qiskit.algorithms.linear_solvers.NumPyMatrix.cp")                                                                                                                     | Apply [`CPhaseGate`](qiskit.circuit.library.CPhaseGate#qiskit.circuit.library.CPhaseGate "qiskit.circuit.library.CPhaseGate").      |
| [`crx`](qiskit.algorithms.linear_solvers.NumPyMatrix.crx#qiskit.algorithms.linear_solvers.NumPyMatrix.crx "qiskit.algorithms.linear_solvers.NumPyMatrix.crx")                                                                                                                 | Apply [`CRXGate`](qiskit.circuit.library.CRXGate#qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                  |
| [`cry`](qiskit.algorithms.linear_solvers.NumPyMatrix.cry#qiskit.algorithms.linear_solvers.NumPyMatrix.cry "qiskit.algorithms.linear_solvers.NumPyMatrix.cry")                                                                                                                 | Apply [`CRYGate`](qiskit.circuit.library.CRYGate#qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                  |
| [`crz`](qiskit.algorithms.linear_solvers.NumPyMatrix.crz#qiskit.algorithms.linear_solvers.NumPyMatrix.crz "qiskit.algorithms.linear_solvers.NumPyMatrix.crz")                                                                                                                 | Apply [`CRZGate`](qiskit.circuit.library.CRZGate#qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                  |
| [`cswap`](qiskit.algorithms.linear_solvers.NumPyMatrix.cswap#qiskit.algorithms.linear_solvers.NumPyMatrix.cswap "qiskit.algorithms.linear_solvers.NumPyMatrix.cswap")                                                                                                         | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`csx`](qiskit.algorithms.linear_solvers.NumPyMatrix.csx#qiskit.algorithms.linear_solvers.NumPyMatrix.csx "qiskit.algorithms.linear_solvers.NumPyMatrix.csx")                                                                                                                 | Apply [`CSXGate`](qiskit.circuit.library.CSXGate#qiskit.circuit.library.CSXGate "qiskit.circuit.library.CSXGate").                  |
| [`cu`](qiskit.algorithms.linear_solvers.NumPyMatrix.cu#qiskit.algorithms.linear_solvers.NumPyMatrix.cu "qiskit.algorithms.linear_solvers.NumPyMatrix.cu")                                                                                                                     | Apply [`CUGate`](qiskit.circuit.library.CUGate#qiskit.circuit.library.CUGate "qiskit.circuit.library.CUGate").                      |
| [`cu1`](qiskit.algorithms.linear_solvers.NumPyMatrix.cu1#qiskit.algorithms.linear_solvers.NumPyMatrix.cu1 "qiskit.algorithms.linear_solvers.NumPyMatrix.cu1")                                                                                                                 | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate#qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                  |
| [`cu3`](qiskit.algorithms.linear_solvers.NumPyMatrix.cu3#qiskit.algorithms.linear_solvers.NumPyMatrix.cu3 "qiskit.algorithms.linear_solvers.NumPyMatrix.cu3")                                                                                                                 | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate#qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                  |
| [`cx`](qiskit.algorithms.linear_solvers.NumPyMatrix.cx#qiskit.algorithms.linear_solvers.NumPyMatrix.cx "qiskit.algorithms.linear_solvers.NumPyMatrix.cx")                                                                                                                     | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`cy`](qiskit.algorithms.linear_solvers.NumPyMatrix.cy#qiskit.algorithms.linear_solvers.NumPyMatrix.cy "qiskit.algorithms.linear_solvers.NumPyMatrix.cy")                                                                                                                     | Apply [`CYGate`](qiskit.circuit.library.CYGate#qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                      |
| [`cz`](qiskit.algorithms.linear_solvers.NumPyMatrix.cz#qiskit.algorithms.linear_solvers.NumPyMatrix.cz "qiskit.algorithms.linear_solvers.NumPyMatrix.cz")                                                                                                                     | Apply [`CZGate`](qiskit.circuit.library.CZGate#qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                      |
| [`dcx`](qiskit.algorithms.linear_solvers.NumPyMatrix.dcx#qiskit.algorithms.linear_solvers.NumPyMatrix.dcx "qiskit.algorithms.linear_solvers.NumPyMatrix.dcx")                                                                                                                 | Apply [`DCXGate`](qiskit.circuit.library.DCXGate#qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                  |
| [`decompose`](qiskit.algorithms.linear_solvers.NumPyMatrix.decompose#qiskit.algorithms.linear_solvers.NumPyMatrix.decompose "qiskit.algorithms.linear_solvers.NumPyMatrix.decompose")                                                                                         | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                                              |
| [`delay`](qiskit.algorithms.linear_solvers.NumPyMatrix.delay#qiskit.algorithms.linear_solvers.NumPyMatrix.delay "qiskit.algorithms.linear_solvers.NumPyMatrix.delay")                                                                                                         | Apply [`Delay`](qiskit.circuit.Delay#qiskit.circuit.Delay "qiskit.circuit.Delay").                                                  |
| [`depth`](qiskit.algorithms.linear_solvers.NumPyMatrix.depth#qiskit.algorithms.linear_solvers.NumPyMatrix.depth "qiskit.algorithms.linear_solvers.NumPyMatrix.depth")                                                                                                         | Return circuit depth (i.e., length of critical path).                                                                               |
| [`diagonal`](qiskit.algorithms.linear_solvers.NumPyMatrix.diagonal#qiskit.algorithms.linear_solvers.NumPyMatrix.diagonal "qiskit.algorithms.linear_solvers.NumPyMatrix.diagonal")                                                                                             | Attach a diagonal gate to a circuit.                                                                                                |
| [`draw`](qiskit.algorithms.linear_solvers.NumPyMatrix.draw#qiskit.algorithms.linear_solvers.NumPyMatrix.draw "qiskit.algorithms.linear_solvers.NumPyMatrix.draw")                                                                                                             | Draw the quantum circuit.                                                                                                           |
| [`ecr`](qiskit.algorithms.linear_solvers.NumPyMatrix.ecr#qiskit.algorithms.linear_solvers.NumPyMatrix.ecr "qiskit.algorithms.linear_solvers.NumPyMatrix.ecr")                                                                                                                 | Apply [`ECRGate`](qiskit.circuit.library.ECRGate#qiskit.circuit.library.ECRGate "qiskit.circuit.library.ECRGate").                  |
| [`eigs_bounds`](qiskit.algorithms.linear_solvers.NumPyMatrix.eigs_bounds#qiskit.algorithms.linear_solvers.NumPyMatrix.eigs_bounds "qiskit.algorithms.linear_solvers.NumPyMatrix.eigs_bounds")                                                                                 | Return lower and upper bounds on the eigenvalues of the matrix.                                                                     |
| [`extend`](qiskit.algorithms.linear_solvers.NumPyMatrix.extend#qiskit.algorithms.linear_solvers.NumPyMatrix.extend "qiskit.algorithms.linear_solvers.NumPyMatrix.extend")                                                                                                     | DEPRECATED - Append QuantumCircuit to the RHS if it contains compatible registers.                                                  |
| [`find_bit`](qiskit.algorithms.linear_solvers.NumPyMatrix.find_bit#qiskit.algorithms.linear_solvers.NumPyMatrix.find_bit "qiskit.algorithms.linear_solvers.NumPyMatrix.find_bit")                                                                                             | Find locations in the circuit which can be used to reference a given `Bit`.                                                         |
| [`for_loop`](qiskit.algorithms.linear_solvers.NumPyMatrix.for_loop#qiskit.algorithms.linear_solvers.NumPyMatrix.for_loop "qiskit.algorithms.linear_solvers.NumPyMatrix.for_loop")                                                                                             | Create a `for` loop on this circuit.                                                                                                |
| [`fredkin`](qiskit.algorithms.linear_solvers.NumPyMatrix.fredkin#qiskit.algorithms.linear_solvers.NumPyMatrix.fredkin "qiskit.algorithms.linear_solvers.NumPyMatrix.fredkin")                                                                                                 | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`from_qasm_file`](qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_file#qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_file "qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_file")                                                                     | Take in a QASM file and generate a QuantumCircuit object.                                                                           |
| [`from_qasm_str`](qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_str#qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_str "qiskit.algorithms.linear_solvers.NumPyMatrix.from_qasm_str")                                                                         | Take in a QASM string and generate a QuantumCircuit object.                                                                         |
| [`get_instructions`](qiskit.algorithms.linear_solvers.NumPyMatrix.get_instructions#qiskit.algorithms.linear_solvers.NumPyMatrix.get_instructions "qiskit.algorithms.linear_solvers.NumPyMatrix.get_instructions")                                                             | Get instructions matching name.                                                                                                     |
| [`h`](qiskit.algorithms.linear_solvers.NumPyMatrix.h#qiskit.algorithms.linear_solvers.NumPyMatrix.h "qiskit.algorithms.linear_solvers.NumPyMatrix.h")                                                                                                                         | Apply [`HGate`](qiskit.circuit.library.HGate#qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                          |
| [`hamiltonian`](qiskit.algorithms.linear_solvers.NumPyMatrix.hamiltonian#qiskit.algorithms.linear_solvers.NumPyMatrix.hamiltonian "qiskit.algorithms.linear_solvers.NumPyMatrix.hamiltonian")                                                                                 | Apply hamiltonian evolution to qubits.                                                                                              |
| [`has_register`](qiskit.algorithms.linear_solvers.NumPyMatrix.has_register#qiskit.algorithms.linear_solvers.NumPyMatrix.has_register "qiskit.algorithms.linear_solvers.NumPyMatrix.has_register")                                                                             | Test if this circuit has the register r.                                                                                            |
| [`i`](qiskit.algorithms.linear_solvers.NumPyMatrix.i#qiskit.algorithms.linear_solvers.NumPyMatrix.i "qiskit.algorithms.linear_solvers.NumPyMatrix.i")                                                                                                                         | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`id`](qiskit.algorithms.linear_solvers.NumPyMatrix.id#qiskit.algorithms.linear_solvers.NumPyMatrix.id "qiskit.algorithms.linear_solvers.NumPyMatrix.id")                                                                                                                     | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`if_else`](qiskit.algorithms.linear_solvers.NumPyMatrix.if_else#qiskit.algorithms.linear_solvers.NumPyMatrix.if_else "qiskit.algorithms.linear_solvers.NumPyMatrix.if_else")                                                                                                 | Apply `IfElseOp`.                                                                                                                   |
| [`if_test`](qiskit.algorithms.linear_solvers.NumPyMatrix.if_test#qiskit.algorithms.linear_solvers.NumPyMatrix.if_test "qiskit.algorithms.linear_solvers.NumPyMatrix.if_test")                                                                                                 | Create an `if` statement on this circuit.                                                                                           |
| [`initialize`](qiskit.algorithms.linear_solvers.NumPyMatrix.initialize#qiskit.algorithms.linear_solvers.NumPyMatrix.initialize "qiskit.algorithms.linear_solvers.NumPyMatrix.initialize")                                                                                     | Initialize qubits in a specific state.                                                                                              |
| [`inverse`](qiskit.algorithms.linear_solvers.NumPyMatrix.inverse#qiskit.algorithms.linear_solvers.NumPyMatrix.inverse "qiskit.algorithms.linear_solvers.NumPyMatrix.inverse")                                                                                                 | Invert (take adjoint of) this circuit.                                                                                              |
| [`iso`](qiskit.algorithms.linear_solvers.NumPyMatrix.iso#qiskit.algorithms.linear_solvers.NumPyMatrix.iso "qiskit.algorithms.linear_solvers.NumPyMatrix.iso")                                                                                                                 | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`isometry`](qiskit.algorithms.linear_solvers.NumPyMatrix.isometry#qiskit.algorithms.linear_solvers.NumPyMatrix.isometry "qiskit.algorithms.linear_solvers.NumPyMatrix.isometry")                                                                                             | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`iswap`](qiskit.algorithms.linear_solvers.NumPyMatrix.iswap#qiskit.algorithms.linear_solvers.NumPyMatrix.iswap "qiskit.algorithms.linear_solvers.NumPyMatrix.iswap")                                                                                                         | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate#qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").          |
| [`mcp`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcp#qiskit.algorithms.linear_solvers.NumPyMatrix.mcp "qiskit.algorithms.linear_solvers.NumPyMatrix.mcp")                                                                                                                 | Apply [`MCPhaseGate`](qiskit.circuit.library.MCPhaseGate#qiskit.circuit.library.MCPhaseGate "qiskit.circuit.library.MCPhaseGate").  |
| [`mcrx`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcrx#qiskit.algorithms.linear_solvers.NumPyMatrix.mcrx "qiskit.algorithms.linear_solvers.NumPyMatrix.mcrx")                                                                                                             | Apply Multiple-Controlled X rotation gate                                                                                           |
| [`mcry`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcry#qiskit.algorithms.linear_solvers.NumPyMatrix.mcry "qiskit.algorithms.linear_solvers.NumPyMatrix.mcry")                                                                                                             | Apply Multiple-Controlled Y rotation gate                                                                                           |
| [`mcrz`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcrz#qiskit.algorithms.linear_solvers.NumPyMatrix.mcrz "qiskit.algorithms.linear_solvers.NumPyMatrix.mcrz")                                                                                                             | Apply Multiple-Controlled Z rotation gate                                                                                           |
| [`mct`](qiskit.algorithms.linear_solvers.NumPyMatrix.mct#qiskit.algorithms.linear_solvers.NumPyMatrix.mct "qiskit.algorithms.linear_solvers.NumPyMatrix.mct")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`mcu1`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcu1#qiskit.algorithms.linear_solvers.NumPyMatrix.mcu1 "qiskit.algorithms.linear_solvers.NumPyMatrix.mcu1")                                                                                                             | Apply `MCU1Gate`.                                                                                                                   |
| [`mcx`](qiskit.algorithms.linear_solvers.NumPyMatrix.mcx#qiskit.algorithms.linear_solvers.NumPyMatrix.mcx "qiskit.algorithms.linear_solvers.NumPyMatrix.mcx")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`measure`](qiskit.algorithms.linear_solvers.NumPyMatrix.measure#qiskit.algorithms.linear_solvers.NumPyMatrix.measure "qiskit.algorithms.linear_solvers.NumPyMatrix.measure")                                                                                                 | Measure quantum bit into classical bit (tuples).                                                                                    |
| [`measure_active`](qiskit.algorithms.linear_solvers.NumPyMatrix.measure_active#qiskit.algorithms.linear_solvers.NumPyMatrix.measure_active "qiskit.algorithms.linear_solvers.NumPyMatrix.measure_active")                                                                     | Adds measurement to all non-idle qubits.                                                                                            |
| [`measure_all`](qiskit.algorithms.linear_solvers.NumPyMatrix.measure_all#qiskit.algorithms.linear_solvers.NumPyMatrix.measure_all "qiskit.algorithms.linear_solvers.NumPyMatrix.measure_all")                                                                                 | Adds measurement to all qubits.                                                                                                     |
| [`ms`](qiskit.algorithms.linear_solvers.NumPyMatrix.ms#qiskit.algorithms.linear_solvers.NumPyMatrix.ms "qiskit.algorithms.linear_solvers.NumPyMatrix.ms")                                                                                                                     | Apply `MSGate`.                                                                                                                     |
| [`num_connected_components`](qiskit.algorithms.linear_solvers.NumPyMatrix.num_connected_components#qiskit.algorithms.linear_solvers.NumPyMatrix.num_connected_components "qiskit.algorithms.linear_solvers.NumPyMatrix.num_connected_components")                             | How many non-entangled subcircuits can the circuit be factored to.                                                                  |
| [`num_nonlocal_gates`](qiskit.algorithms.linear_solvers.NumPyMatrix.num_nonlocal_gates#qiskit.algorithms.linear_solvers.NumPyMatrix.num_nonlocal_gates "qiskit.algorithms.linear_solvers.NumPyMatrix.num_nonlocal_gates")                                                     | Return number of non-local gates (i.e.                                                                                              |
| [`num_tensor_factors`](qiskit.algorithms.linear_solvers.NumPyMatrix.num_tensor_factors#qiskit.algorithms.linear_solvers.NumPyMatrix.num_tensor_factors "qiskit.algorithms.linear_solvers.NumPyMatrix.num_tensor_factors")                                                     | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`num_unitary_factors`](qiskit.algorithms.linear_solvers.NumPyMatrix.num_unitary_factors#qiskit.algorithms.linear_solvers.NumPyMatrix.num_unitary_factors "qiskit.algorithms.linear_solvers.NumPyMatrix.num_unitary_factors")                                                 | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`p`](qiskit.algorithms.linear_solvers.NumPyMatrix.p#qiskit.algorithms.linear_solvers.NumPyMatrix.p "qiskit.algorithms.linear_solvers.NumPyMatrix.p")                                                                                                                         | Apply [`PhaseGate`](qiskit.circuit.library.PhaseGate#qiskit.circuit.library.PhaseGate "qiskit.circuit.library.PhaseGate").          |
| [`pauli`](qiskit.algorithms.linear_solvers.NumPyMatrix.pauli#qiskit.algorithms.linear_solvers.NumPyMatrix.pauli "qiskit.algorithms.linear_solvers.NumPyMatrix.pauli")                                                                                                         | Apply [`PauliGate`](qiskit.circuit.library.PauliGate#qiskit.circuit.library.PauliGate "qiskit.circuit.library.PauliGate").          |
| [`power`](qiskit.algorithms.linear_solvers.NumPyMatrix.power#qiskit.algorithms.linear_solvers.NumPyMatrix.power "qiskit.algorithms.linear_solvers.NumPyMatrix.power")                                                                                                         | Build powers of the circuit.                                                                                                        |
| [`prepare_state`](qiskit.algorithms.linear_solvers.NumPyMatrix.prepare_state#qiskit.algorithms.linear_solvers.NumPyMatrix.prepare_state "qiskit.algorithms.linear_solvers.NumPyMatrix.prepare_state")                                                                         | Prepare qubits in a specific state.                                                                                                 |
| [`qasm`](qiskit.algorithms.linear_solvers.NumPyMatrix.qasm#qiskit.algorithms.linear_solvers.NumPyMatrix.qasm "qiskit.algorithms.linear_solvers.NumPyMatrix.qasm")                                                                                                             | Return OpenQASM string.                                                                                                             |
| [`qbit_argument_conversion`](qiskit.algorithms.linear_solvers.NumPyMatrix.qbit_argument_conversion#qiskit.algorithms.linear_solvers.NumPyMatrix.qbit_argument_conversion "qiskit.algorithms.linear_solvers.NumPyMatrix.qbit_argument_conversion")                             | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                                        |
| [`qubit_duration`](qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_duration#qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_duration "qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_duration")                                                                     | Return the duration between the start and stop time of the first and last instructions, excluding delays, over the supplied qubits. |
| [`qubit_start_time`](qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_start_time#qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_start_time "qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_start_time")                                                             | Return the start time of the first instruction, excluding delays, over the supplied qubits.                                         |
| [`qubit_stop_time`](qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_stop_time#qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_stop_time "qiskit.algorithms.linear_solvers.NumPyMatrix.qubit_stop_time")                                                                 | Return the stop time of the last instruction, excluding delays, over the supplied qubits.                                           |
| [`r`](qiskit.algorithms.linear_solvers.NumPyMatrix.r#qiskit.algorithms.linear_solvers.NumPyMatrix.r "qiskit.algorithms.linear_solvers.NumPyMatrix.r")                                                                                                                         | Apply [`RGate`](qiskit.circuit.library.RGate#qiskit.circuit.library.RGate "qiskit.circuit.library.RGate").                          |
| [`rcccx`](qiskit.algorithms.linear_solvers.NumPyMatrix.rcccx#qiskit.algorithms.linear_solvers.NumPyMatrix.rcccx "qiskit.algorithms.linear_solvers.NumPyMatrix.rcccx")                                                                                                         | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate#qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").              |
| [`rccx`](qiskit.algorithms.linear_solvers.NumPyMatrix.rccx#qiskit.algorithms.linear_solvers.NumPyMatrix.rccx "qiskit.algorithms.linear_solvers.NumPyMatrix.rccx")                                                                                                             | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate#qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").              |
| [`remove_final_measurements`](qiskit.algorithms.linear_solvers.NumPyMatrix.remove_final_measurements#qiskit.algorithms.linear_solvers.NumPyMatrix.remove_final_measurements "qiskit.algorithms.linear_solvers.NumPyMatrix.remove_final_measurements")                         | Removes final measurements and barriers on all qubits if they are present.                                                          |
| [`repeat`](qiskit.algorithms.linear_solvers.NumPyMatrix.repeat#qiskit.algorithms.linear_solvers.NumPyMatrix.repeat "qiskit.algorithms.linear_solvers.NumPyMatrix.repeat")                                                                                                     | Repeat this circuit `reps` times.                                                                                                   |
| [`reset`](qiskit.algorithms.linear_solvers.NumPyMatrix.reset#qiskit.algorithms.linear_solvers.NumPyMatrix.reset "qiskit.algorithms.linear_solvers.NumPyMatrix.reset")                                                                                                         | Reset the quantum bit(s) to their default state.                                                                                    |
| [`reverse_bits`](qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_bits#qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_bits "qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_bits")                                                                             | Return a circuit with the opposite order of wires.                                                                                  |
| [`reverse_ops`](qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_ops#qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_ops "qiskit.algorithms.linear_solvers.NumPyMatrix.reverse_ops")                                                                                 | Reverse the circuit by reversing the order of instructions.                                                                         |
| [`rv`](qiskit.algorithms.linear_solvers.NumPyMatrix.rv#qiskit.algorithms.linear_solvers.NumPyMatrix.rv "qiskit.algorithms.linear_solvers.NumPyMatrix.rv")                                                                                                                     | Apply [`RVGate`](qiskit.circuit.library.RVGate#qiskit.circuit.library.RVGate "qiskit.circuit.library.RVGate").                      |
| [`rx`](qiskit.algorithms.linear_solvers.NumPyMatrix.rx#qiskit.algorithms.linear_solvers.NumPyMatrix.rx "qiskit.algorithms.linear_solvers.NumPyMatrix.rx")                                                                                                                     | Apply [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                      |
| [`rxx`](qiskit.algorithms.linear_solvers.NumPyMatrix.rxx#qiskit.algorithms.linear_solvers.NumPyMatrix.rxx "qiskit.algorithms.linear_solvers.NumPyMatrix.rxx")                                                                                                                 | Apply [`RXXGate`](qiskit.circuit.library.RXXGate#qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                  |
| [`ry`](qiskit.algorithms.linear_solvers.NumPyMatrix.ry#qiskit.algorithms.linear_solvers.NumPyMatrix.ry "qiskit.algorithms.linear_solvers.NumPyMatrix.ry")                                                                                                                     | Apply [`RYGate`](qiskit.circuit.library.RYGate#qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                      |
| [`ryy`](qiskit.algorithms.linear_solvers.NumPyMatrix.ryy#qiskit.algorithms.linear_solvers.NumPyMatrix.ryy "qiskit.algorithms.linear_solvers.NumPyMatrix.ryy")                                                                                                                 | Apply [`RYYGate`](qiskit.circuit.library.RYYGate#qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                  |
| [`rz`](qiskit.algorithms.linear_solvers.NumPyMatrix.rz#qiskit.algorithms.linear_solvers.NumPyMatrix.rz "qiskit.algorithms.linear_solvers.NumPyMatrix.rz")                                                                                                                     | Apply [`RZGate`](qiskit.circuit.library.RZGate#qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                      |
| [`rzx`](qiskit.algorithms.linear_solvers.NumPyMatrix.rzx#qiskit.algorithms.linear_solvers.NumPyMatrix.rzx "qiskit.algorithms.linear_solvers.NumPyMatrix.rzx")                                                                                                                 | Apply [`RZXGate`](qiskit.circuit.library.RZXGate#qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                  |
| [`rzz`](qiskit.algorithms.linear_solvers.NumPyMatrix.rzz#qiskit.algorithms.linear_solvers.NumPyMatrix.rzz "qiskit.algorithms.linear_solvers.NumPyMatrix.rzz")                                                                                                                 | Apply [`RZZGate`](qiskit.circuit.library.RZZGate#qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                  |
| [`s`](qiskit.algorithms.linear_solvers.NumPyMatrix.s#qiskit.algorithms.linear_solvers.NumPyMatrix.s "qiskit.algorithms.linear_solvers.NumPyMatrix.s")                                                                                                                         | Apply [`SGate`](qiskit.circuit.library.SGate#qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                          |
| [`save_amplitudes`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes#qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes "qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes")                                                                 | Save complex statevector amplitudes.                                                                                                |
| [`save_amplitudes_squared`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes_squared#qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes_squared "qiskit.algorithms.linear_solvers.NumPyMatrix.save_amplitudes_squared")                                 | Save squared statevector amplitudes (probabilities).                                                                                |
| [`save_clifford`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_clifford#qiskit.algorithms.linear_solvers.NumPyMatrix.save_clifford "qiskit.algorithms.linear_solvers.NumPyMatrix.save_clifford")                                                                         | Save the current stabilizer simulator quantum state as a Clifford.                                                                  |
| [`save_density_matrix`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_density_matrix#qiskit.algorithms.linear_solvers.NumPyMatrix.save_density_matrix "qiskit.algorithms.linear_solvers.NumPyMatrix.save_density_matrix")                                                 | Save the current simulator quantum state as a density matrix.                                                                       |
| [`save_expectation_value`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value#qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value "qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value")                                     | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_expectation_value_variance`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value_variance#qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value_variance "qiskit.algorithms.linear_solvers.NumPyMatrix.save_expectation_value_variance") | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_matrix_product_state`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_matrix_product_state#qiskit.algorithms.linear_solvers.NumPyMatrix.save_matrix_product_state "qiskit.algorithms.linear_solvers.NumPyMatrix.save_matrix_product_state")                         | Save the current simulator quantum state as a matrix product state.                                                                 |
| [`save_probabilities`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities#qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities "qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities")                                                     | Save measurement outcome probabilities vector.                                                                                      |
| [`save_probabilities_dict`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities_dict#qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities_dict "qiskit.algorithms.linear_solvers.NumPyMatrix.save_probabilities_dict")                                 | Save measurement outcome probabilities vector.                                                                                      |
| [`save_stabilizer`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_stabilizer#qiskit.algorithms.linear_solvers.NumPyMatrix.save_stabilizer "qiskit.algorithms.linear_solvers.NumPyMatrix.save_stabilizer")                                                                 | Save the current stabilizer simulator quantum state as a StabilizerState.                                                           |
| [`save_state`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_state#qiskit.algorithms.linear_solvers.NumPyMatrix.save_state "qiskit.algorithms.linear_solvers.NumPyMatrix.save_state")                                                                                     | Save the current simulator quantum state.                                                                                           |
| [`save_statevector`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector#qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector "qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector")                                                             | Save the current simulator quantum state as a statevector.                                                                          |
| [`save_statevector_dict`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector_dict#qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector_dict "qiskit.algorithms.linear_solvers.NumPyMatrix.save_statevector_dict")                                         | Save the current simulator quantum state as a statevector as a dict.                                                                |
| [`save_superop`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_superop#qiskit.algorithms.linear_solvers.NumPyMatrix.save_superop "qiskit.algorithms.linear_solvers.NumPyMatrix.save_superop")                                                                             | Save the current state of the superop simulator.                                                                                    |
| [`save_unitary`](qiskit.algorithms.linear_solvers.NumPyMatrix.save_unitary#qiskit.algorithms.linear_solvers.NumPyMatrix.save_unitary "qiskit.algorithms.linear_solvers.NumPyMatrix.save_unitary")                                                                             | Save the current state of the unitary simulator.                                                                                    |
| [`sdg`](qiskit.algorithms.linear_solvers.NumPyMatrix.sdg#qiskit.algorithms.linear_solvers.NumPyMatrix.sdg "qiskit.algorithms.linear_solvers.NumPyMatrix.sdg")                                                                                                                 | Apply [`SdgGate`](qiskit.circuit.library.SdgGate#qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                  |
| [`set_density_matrix`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_density_matrix#qiskit.algorithms.linear_solvers.NumPyMatrix.set_density_matrix "qiskit.algorithms.linear_solvers.NumPyMatrix.set_density_matrix")                                                     | Set the density matrix state of the simulator.                                                                                      |
| [`set_matrix_product_state`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_matrix_product_state#qiskit.algorithms.linear_solvers.NumPyMatrix.set_matrix_product_state "qiskit.algorithms.linear_solvers.NumPyMatrix.set_matrix_product_state")                             | Set the matrix product state of the simulator.                                                                                      |
| [`set_stabilizer`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_stabilizer#qiskit.algorithms.linear_solvers.NumPyMatrix.set_stabilizer "qiskit.algorithms.linear_solvers.NumPyMatrix.set_stabilizer")                                                                     | Set the Clifford stabilizer state of the simulator.                                                                                 |
| [`set_statevector`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_statevector#qiskit.algorithms.linear_solvers.NumPyMatrix.set_statevector "qiskit.algorithms.linear_solvers.NumPyMatrix.set_statevector")                                                                 | Set the statevector state of the simulator.                                                                                         |
| [`set_superop`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_superop#qiskit.algorithms.linear_solvers.NumPyMatrix.set_superop "qiskit.algorithms.linear_solvers.NumPyMatrix.set_superop")                                                                                 | Set the superop state of the simulator.                                                                                             |
| [`set_unitary`](qiskit.algorithms.linear_solvers.NumPyMatrix.set_unitary#qiskit.algorithms.linear_solvers.NumPyMatrix.set_unitary "qiskit.algorithms.linear_solvers.NumPyMatrix.set_unitary")                                                                                 | Set the state state of the simulator.                                                                                               |
| [`size`](qiskit.algorithms.linear_solvers.NumPyMatrix.size#qiskit.algorithms.linear_solvers.NumPyMatrix.size "qiskit.algorithms.linear_solvers.NumPyMatrix.size")                                                                                                             | Returns total number of instructions in circuit.                                                                                    |
| [`snapshot`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot")                                                                                             | Take a statevector snapshot of the internal simulator representation.                                                               |
| [`snapshot_density_matrix`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_density_matrix#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_density_matrix "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_density_matrix")                                 | Take a density matrix snapshot of simulator state.                                                                                  |
| [`snapshot_expectation_value`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_expectation_value#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_expectation_value "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_expectation_value")                     | Take a snapshot of expectation value \<O> of an Operator.                                                                           |
| [`snapshot_probabilities`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_probabilities#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_probabilities "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_probabilities")                                     | Take a probability snapshot of the simulator state.                                                                                 |
| [`snapshot_stabilizer`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_stabilizer#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_stabilizer "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_stabilizer")                                                 | Take a stabilizer snapshot of the simulator state.                                                                                  |
| [`snapshot_statevector`](qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_statevector#qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_statevector "qiskit.algorithms.linear_solvers.NumPyMatrix.snapshot_statevector")                                             | Take a statevector snapshot of the simulator state.                                                                                 |
| [`squ`](qiskit.algorithms.linear_solvers.NumPyMatrix.squ#qiskit.algorithms.linear_solvers.NumPyMatrix.squ "qiskit.algorithms.linear_solvers.NumPyMatrix.squ")                                                                                                                 | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                                                      |
| [`swap`](qiskit.algorithms.linear_solvers.NumPyMatrix.swap#qiskit.algorithms.linear_solvers.NumPyMatrix.swap "qiskit.algorithms.linear_solvers.NumPyMatrix.swap")                                                                                                             | Apply [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").              |
| [`sx`](qiskit.algorithms.linear_solvers.NumPyMatrix.sx#qiskit.algorithms.linear_solvers.NumPyMatrix.sx "qiskit.algorithms.linear_solvers.NumPyMatrix.sx")                                                                                                                     | Apply [`SXGate`](qiskit.circuit.library.SXGate#qiskit.circuit.library.SXGate "qiskit.circuit.library.SXGate").                      |
| [`sxdg`](qiskit.algorithms.linear_solvers.NumPyMatrix.sxdg#qiskit.algorithms.linear_solvers.NumPyMatrix.sxdg "qiskit.algorithms.linear_solvers.NumPyMatrix.sxdg")                                                                                                             | Apply [`SXdgGate`](qiskit.circuit.library.SXdgGate#qiskit.circuit.library.SXdgGate "qiskit.circuit.library.SXdgGate").              |
| [`t`](qiskit.algorithms.linear_solvers.NumPyMatrix.t#qiskit.algorithms.linear_solvers.NumPyMatrix.t "qiskit.algorithms.linear_solvers.NumPyMatrix.t")                                                                                                                         | Apply [`TGate`](qiskit.circuit.library.TGate#qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                          |
| [`tdg`](qiskit.algorithms.linear_solvers.NumPyMatrix.tdg#qiskit.algorithms.linear_solvers.NumPyMatrix.tdg "qiskit.algorithms.linear_solvers.NumPyMatrix.tdg")                                                                                                                 | Apply [`TdgGate`](qiskit.circuit.library.TdgGate#qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                  |
| [`tensor`](qiskit.algorithms.linear_solvers.NumPyMatrix.tensor#qiskit.algorithms.linear_solvers.NumPyMatrix.tensor "qiskit.algorithms.linear_solvers.NumPyMatrix.tensor")                                                                                                     | Tensor `self` with `other`.                                                                                                         |
| [`to_gate`](qiskit.algorithms.linear_solvers.NumPyMatrix.to_gate#qiskit.algorithms.linear_solvers.NumPyMatrix.to_gate "qiskit.algorithms.linear_solvers.NumPyMatrix.to_gate")                                                                                                 | Create a Gate out of this circuit.                                                                                                  |
| [`to_instruction`](qiskit.algorithms.linear_solvers.NumPyMatrix.to_instruction#qiskit.algorithms.linear_solvers.NumPyMatrix.to_instruction "qiskit.algorithms.linear_solvers.NumPyMatrix.to_instruction")                                                                     | Create an Instruction out of this circuit.                                                                                          |
| [`toffoli`](qiskit.algorithms.linear_solvers.NumPyMatrix.toffoli#qiskit.algorithms.linear_solvers.NumPyMatrix.toffoli "qiskit.algorithms.linear_solvers.NumPyMatrix.toffoli")                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`u`](qiskit.algorithms.linear_solvers.NumPyMatrix.u#qiskit.algorithms.linear_solvers.NumPyMatrix.u "qiskit.algorithms.linear_solvers.NumPyMatrix.u")                                                                                                                         | Apply [`UGate`](qiskit.circuit.library.UGate#qiskit.circuit.library.UGate "qiskit.circuit.library.UGate").                          |
| [`u1`](qiskit.algorithms.linear_solvers.NumPyMatrix.u1#qiskit.algorithms.linear_solvers.NumPyMatrix.u1 "qiskit.algorithms.linear_solvers.NumPyMatrix.u1")                                                                                                                     | Apply [`U1Gate`](qiskit.circuit.library.U1Gate#qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                      |
| [`u2`](qiskit.algorithms.linear_solvers.NumPyMatrix.u2#qiskit.algorithms.linear_solvers.NumPyMatrix.u2 "qiskit.algorithms.linear_solvers.NumPyMatrix.u2")                                                                                                                     | Apply [`U2Gate`](qiskit.circuit.library.U2Gate#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                      |
| [`u3`](qiskit.algorithms.linear_solvers.NumPyMatrix.u3#qiskit.algorithms.linear_solvers.NumPyMatrix.u3 "qiskit.algorithms.linear_solvers.NumPyMatrix.u3")                                                                                                                     | Apply [`U3Gate`](qiskit.circuit.library.U3Gate#qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                      |
| [`uc`](qiskit.algorithms.linear_solvers.NumPyMatrix.uc#qiskit.algorithms.linear_solvers.NumPyMatrix.uc "qiskit.algorithms.linear_solvers.NumPyMatrix.uc")                                                                                                                     | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                                                   |
| [`ucrx`](qiskit.algorithms.linear_solvers.NumPyMatrix.ucrx#qiskit.algorithms.linear_solvers.NumPyMatrix.ucrx "qiskit.algorithms.linear_solvers.NumPyMatrix.ucrx")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                                              |
| [`ucry`](qiskit.algorithms.linear_solvers.NumPyMatrix.ucry#qiskit.algorithms.linear_solvers.NumPyMatrix.ucry "qiskit.algorithms.linear_solvers.NumPyMatrix.ucry")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                                              |
| [`ucrz`](qiskit.algorithms.linear_solvers.NumPyMatrix.ucrz#qiskit.algorithms.linear_solvers.NumPyMatrix.ucrz "qiskit.algorithms.linear_solvers.NumPyMatrix.ucrz")                                                                                                             | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                                        |
| [`unitary`](qiskit.algorithms.linear_solvers.NumPyMatrix.unitary#qiskit.algorithms.linear_solvers.NumPyMatrix.unitary "qiskit.algorithms.linear_solvers.NumPyMatrix.unitary")                                                                                                 | Apply unitary gate to q.                                                                                                            |
| [`while_loop`](qiskit.algorithms.linear_solvers.NumPyMatrix.while_loop#qiskit.algorithms.linear_solvers.NumPyMatrix.while_loop "qiskit.algorithms.linear_solvers.NumPyMatrix.while_loop")                                                                                     | Create a `while` loop on this circuit.                                                                                              |
| [`width`](qiskit.algorithms.linear_solvers.NumPyMatrix.width#qiskit.algorithms.linear_solvers.NumPyMatrix.width "qiskit.algorithms.linear_solvers.NumPyMatrix.width")                                                                                                         | Return number of qubits plus clbits in circuit.                                                                                     |
| [`x`](qiskit.algorithms.linear_solvers.NumPyMatrix.x#qiskit.algorithms.linear_solvers.NumPyMatrix.x "qiskit.algorithms.linear_solvers.NumPyMatrix.x")                                                                                                                         | Apply [`XGate`](qiskit.circuit.library.XGate#qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                          |
| [`y`](qiskit.algorithms.linear_solvers.NumPyMatrix.y#qiskit.algorithms.linear_solvers.NumPyMatrix.y "qiskit.algorithms.linear_solvers.NumPyMatrix.y")                                                                                                                         | Apply [`YGate`](qiskit.circuit.library.YGate#qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                          |
| [`z`](qiskit.algorithms.linear_solvers.NumPyMatrix.z#qiskit.algorithms.linear_solvers.NumPyMatrix.z "qiskit.algorithms.linear_solvers.NumPyMatrix.z")                                                                                                                         | Apply [`ZGate`](qiskit.circuit.library.ZGate#qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                          |

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

<span id="undefined" />

### evolution\_time

Return the time of the evolution.

**Return type**

`float`

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### matrix

Return the matrix.

**Return type**

`ndarray`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="undefined" />

### tolerance

Return the error tolerance

**Return type**

`float`
