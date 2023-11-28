# QuantumCircuit

<span id="undefined" />

`QuantumCircuit(*regs, name=None, global_phase=0, metadata=None)`

Bases: `object`

Create a new circuit.

A circuit is a list of instructions bound to some registers.

**Parameters**

*   **regs** (list(`Register`) or list(`int`) or list(list(`Bit`))) –

    The registers to be included in the circuit.

    *   If a list of `Register` objects, represents the [`QuantumRegister`](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") and/or [`ClassicalRegister`](qiskit.circuit.ClassicalRegister#qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister") objects to include in the circuit.

        For example:

        > *   `QuantumCircuit(QuantumRegister(4))`
        > *   `QuantumCircuit(QuantumRegister(4), ClassicalRegister(3))`
        > *   `QuantumCircuit(QuantumRegister(4, 'qr0'), QuantumRegister(2, 'qr1'))`

    *   If a list of `int`, the amount of qubits and/or classical bits to include in the circuit. It can either be a single int for just the number of quantum bits, or 2 ints for the number of quantum bits and classical bits, respectively.

        For example:

        > *   `QuantumCircuit(4) # A QuantumCircuit with 4 qubits`
        > *   `QuantumCircuit(4, 3) # A QuantumCircuit with 4 qubits and 3 classical bits`

    *   If a list of python lists containing `Bit` objects, a collection of `Bit` s to be added to the circuit.

*   **name** (*str*) – the name of the quantum circuit. If not set, an automatically generated string will be assigned.

*   **global\_phase** (*float or* [*ParameterExpression*](qiskit.circuit.ParameterExpression#qiskit.circuit.ParameterExpression "qiskit.circuit.ParameterExpression")) – The global phase of the circuit in radians.

*   **metadata** (*dict*) – Arbitrary key value metadata to associate with the circuit. This gets stored as free-form data in a dict in the [`metadata`](#qiskit.circuit.QuantumCircuit.metadata "qiskit.circuit.QuantumCircuit.metadata") attribute. It will not be directly used in the circuit.

**Raises**

**CircuitError** – if the circuit name, if given, is not valid.

## Examples

Construct a simple Bell state circuit.

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])
qc.draw()
```

```python
     ┌───┐     ┌─┐   
q_0: ┤ H ├──■──┤M├───
     └───┘┌─┴─┐└╥┘┌─┐
q_1: ─────┤ X ├─╫─┤M├
          └───┘ ║ └╥┘
c: 2/═══════════╩══╩═
                0  1 
```

Construct a 5-qubit GHZ circuit.

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(5)
qc.h(0)
qc.cx(0, range(1, 5))
qc.measure_all()
```

Construct a 4-qubit Bernstein-Vazirani circuit using registers.

```python
from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit

qr = QuantumRegister(3, 'q')
anc = QuantumRegister(1, 'ancilla')
cr = ClassicalRegister(3, 'c')
qc = QuantumCircuit(qr, anc, cr)

qc.x(anc[0])
qc.h(anc[0])
qc.h(qr[0:3])
qc.cx(qr[0:3], anc[0])
qc.h(qr[0:3])
qc.barrier(qr)
qc.measure(qr, cr)

qc.draw()
```

```python
         ┌───┐          ┌───┐           ░ ┌─┐      
    q_0: ┤ H ├───────■──┤ H ├───────────░─┤M├──────
         ├───┤       │  └───┘┌───┐      ░ └╥┘┌─┐   
    q_1: ┤ H ├───────┼────■──┤ H ├──────░──╫─┤M├───
         ├───┤       │    │  └───┘┌───┐ ░  ║ └╥┘┌─┐
    q_2: ┤ H ├───────┼────┼────■──┤ H ├─░──╫──╫─┤M├
         ├───┤┌───┐┌─┴─┐┌─┴─┐┌─┴─┐└───┘ ░  ║  ║ └╥┘
ancilla: ┤ X ├┤ H ├┤ X ├┤ X ├┤ X ├─────────╫──╫──╫─
         └───┘└───┘└───┘└───┘└───┘         ║  ║  ║ 
    c: 3/══════════════════════════════════╩══╩══╩═
                                           0  1  2 
```

## Methods

|                                                                                                                                                                                                                                  |                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`add_bits`](qiskit.circuit.QuantumCircuit.add_bits#qiskit.circuit.QuantumCircuit.add_bits "qiskit.circuit.QuantumCircuit.add_bits")                                                                                             | Add Bits to the circuit.                                                                                                            |
| [`add_calibration`](qiskit.circuit.QuantumCircuit.add_calibration#qiskit.circuit.QuantumCircuit.add_calibration "qiskit.circuit.QuantumCircuit.add_calibration")                                                                 | Register a low-level, custom pulse definition for the given gate.                                                                   |
| [`add_register`](qiskit.circuit.QuantumCircuit.add_register#qiskit.circuit.QuantumCircuit.add_register "qiskit.circuit.QuantumCircuit.add_register")                                                                             | Add registers.                                                                                                                      |
| [`append`](qiskit.circuit.QuantumCircuit.append#qiskit.circuit.QuantumCircuit.append "qiskit.circuit.QuantumCircuit.append")                                                                                                     | Append one or more instructions to the end of the circuit, modifying the circuit in place.                                          |
| [`assign_parameters`](qiskit.circuit.QuantumCircuit.assign_parameters#qiskit.circuit.QuantumCircuit.assign_parameters "qiskit.circuit.QuantumCircuit.assign_parameters")                                                         | Assign parameters to new parameters or values.                                                                                      |
| [`barrier`](qiskit.circuit.QuantumCircuit.barrier#qiskit.circuit.QuantumCircuit.barrier "qiskit.circuit.QuantumCircuit.barrier")                                                                                                 | Apply [`Barrier`](qiskit.circuit.Barrier#qiskit.circuit.Barrier "qiskit.circuit.Barrier").                                          |
| [`bind_parameters`](qiskit.circuit.QuantumCircuit.bind_parameters#qiskit.circuit.QuantumCircuit.bind_parameters "qiskit.circuit.QuantumCircuit.bind_parameters")                                                                 | Assign numeric parameters to values yielding a new circuit.                                                                         |
| [`break_loop`](qiskit.circuit.QuantumCircuit.break_loop#qiskit.circuit.QuantumCircuit.break_loop "qiskit.circuit.QuantumCircuit.break_loop")                                                                                     | Apply `BreakLoopOp`.                                                                                                                |
| [`cast`](qiskit.circuit.QuantumCircuit.cast#qiskit.circuit.QuantumCircuit.cast "qiskit.circuit.QuantumCircuit.cast")                                                                                                             | Best effort to cast value to type.                                                                                                  |
| [`cbit_argument_conversion`](qiskit.circuit.QuantumCircuit.cbit_argument_conversion#qiskit.circuit.QuantumCircuit.cbit_argument_conversion "qiskit.circuit.QuantumCircuit.cbit_argument_conversion")                             | Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits.                        |
| [`ccx`](qiskit.circuit.QuantumCircuit.ccx#qiskit.circuit.QuantumCircuit.ccx "qiskit.circuit.QuantumCircuit.ccx")                                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`ch`](qiskit.circuit.QuantumCircuit.ch#qiskit.circuit.QuantumCircuit.ch "qiskit.circuit.QuantumCircuit.ch")                                                                                                                     | Apply [`CHGate`](qiskit.circuit.library.CHGate#qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").                      |
| [`cls_instances`](qiskit.circuit.QuantumCircuit.cls_instances#qiskit.circuit.QuantumCircuit.cls_instances "qiskit.circuit.QuantumCircuit.cls_instances")                                                                         | Return the current number of instances of this class, useful for auto naming.                                                       |
| [`cls_prefix`](qiskit.circuit.QuantumCircuit.cls_prefix#qiskit.circuit.QuantumCircuit.cls_prefix "qiskit.circuit.QuantumCircuit.cls_prefix")                                                                                     | Return the prefix to use for auto naming.                                                                                           |
| [`cnot`](qiskit.circuit.QuantumCircuit.cnot#qiskit.circuit.QuantumCircuit.cnot "qiskit.circuit.QuantumCircuit.cnot")                                                                                                             | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`combine`](qiskit.circuit.QuantumCircuit.combine#qiskit.circuit.QuantumCircuit.combine "qiskit.circuit.QuantumCircuit.combine")                                                                                                 | DEPRECATED - Returns rhs appended to self if self contains compatible registers.                                                    |
| [`compose`](qiskit.circuit.QuantumCircuit.compose#qiskit.circuit.QuantumCircuit.compose "qiskit.circuit.QuantumCircuit.compose")                                                                                                 | Compose circuit with `other` circuit or instruction, optionally permuting wires.                                                    |
| [`continue_loop`](qiskit.circuit.QuantumCircuit.continue_loop#qiskit.circuit.QuantumCircuit.continue_loop "qiskit.circuit.QuantumCircuit.continue_loop")                                                                         | Apply `ContinueLoopOp`.                                                                                                             |
| [`control`](qiskit.circuit.QuantumCircuit.control#qiskit.circuit.QuantumCircuit.control "qiskit.circuit.QuantumCircuit.control")                                                                                                 | Control this circuit on `num_ctrl_qubits` qubits.                                                                                   |
| [`copy`](qiskit.circuit.QuantumCircuit.copy#qiskit.circuit.QuantumCircuit.copy "qiskit.circuit.QuantumCircuit.copy")                                                                                                             | Copy the circuit.                                                                                                                   |
| [`count_ops`](qiskit.circuit.QuantumCircuit.count_ops#qiskit.circuit.QuantumCircuit.count_ops "qiskit.circuit.QuantumCircuit.count_ops")                                                                                         | Count each operation kind in the circuit.                                                                                           |
| [`cp`](qiskit.circuit.QuantumCircuit.cp#qiskit.circuit.QuantumCircuit.cp "qiskit.circuit.QuantumCircuit.cp")                                                                                                                     | Apply [`CPhaseGate`](qiskit.circuit.library.CPhaseGate#qiskit.circuit.library.CPhaseGate "qiskit.circuit.library.CPhaseGate").      |
| [`crx`](qiskit.circuit.QuantumCircuit.crx#qiskit.circuit.QuantumCircuit.crx "qiskit.circuit.QuantumCircuit.crx")                                                                                                                 | Apply [`CRXGate`](qiskit.circuit.library.CRXGate#qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").                  |
| [`cry`](qiskit.circuit.QuantumCircuit.cry#qiskit.circuit.QuantumCircuit.cry "qiskit.circuit.QuantumCircuit.cry")                                                                                                                 | Apply [`CRYGate`](qiskit.circuit.library.CRYGate#qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").                  |
| [`crz`](qiskit.circuit.QuantumCircuit.crz#qiskit.circuit.QuantumCircuit.crz "qiskit.circuit.QuantumCircuit.crz")                                                                                                                 | Apply [`CRZGate`](qiskit.circuit.library.CRZGate#qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").                  |
| [`cswap`](qiskit.circuit.QuantumCircuit.cswap#qiskit.circuit.QuantumCircuit.cswap "qiskit.circuit.QuantumCircuit.cswap")                                                                                                         | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`csx`](qiskit.circuit.QuantumCircuit.csx#qiskit.circuit.QuantumCircuit.csx "qiskit.circuit.QuantumCircuit.csx")                                                                                                                 | Apply [`CSXGate`](qiskit.circuit.library.CSXGate#qiskit.circuit.library.CSXGate "qiskit.circuit.library.CSXGate").                  |
| [`cu`](qiskit.circuit.QuantumCircuit.cu#qiskit.circuit.QuantumCircuit.cu "qiskit.circuit.QuantumCircuit.cu")                                                                                                                     | Apply [`CUGate`](qiskit.circuit.library.CUGate#qiskit.circuit.library.CUGate "qiskit.circuit.library.CUGate").                      |
| [`cu1`](qiskit.circuit.QuantumCircuit.cu1#qiskit.circuit.QuantumCircuit.cu1 "qiskit.circuit.QuantumCircuit.cu1")                                                                                                                 | Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate#qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").                  |
| [`cu3`](qiskit.circuit.QuantumCircuit.cu3#qiskit.circuit.QuantumCircuit.cu3 "qiskit.circuit.QuantumCircuit.cu3")                                                                                                                 | Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate#qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").                  |
| [`cx`](qiskit.circuit.QuantumCircuit.cx#qiskit.circuit.QuantumCircuit.cx "qiskit.circuit.QuantumCircuit.cx")                                                                                                                     | Apply [`CXGate`](qiskit.circuit.library.CXGate#qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").                      |
| [`cy`](qiskit.circuit.QuantumCircuit.cy#qiskit.circuit.QuantumCircuit.cy "qiskit.circuit.QuantumCircuit.cy")                                                                                                                     | Apply [`CYGate`](qiskit.circuit.library.CYGate#qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").                      |
| [`cz`](qiskit.circuit.QuantumCircuit.cz#qiskit.circuit.QuantumCircuit.cz "qiskit.circuit.QuantumCircuit.cz")                                                                                                                     | Apply [`CZGate`](qiskit.circuit.library.CZGate#qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").                      |
| [`dcx`](qiskit.circuit.QuantumCircuit.dcx#qiskit.circuit.QuantumCircuit.dcx "qiskit.circuit.QuantumCircuit.dcx")                                                                                                                 | Apply [`DCXGate`](qiskit.circuit.library.DCXGate#qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").                  |
| [`decompose`](qiskit.circuit.QuantumCircuit.decompose#qiskit.circuit.QuantumCircuit.decompose "qiskit.circuit.QuantumCircuit.decompose")                                                                                         | Call a decomposition pass on this circuit, to decompose one level (shallow decompose).                                              |
| [`delay`](qiskit.circuit.QuantumCircuit.delay#qiskit.circuit.QuantumCircuit.delay "qiskit.circuit.QuantumCircuit.delay")                                                                                                         | Apply [`Delay`](qiskit.circuit.Delay#qiskit.circuit.Delay "qiskit.circuit.Delay").                                                  |
| [`depth`](qiskit.circuit.QuantumCircuit.depth#qiskit.circuit.QuantumCircuit.depth "qiskit.circuit.QuantumCircuit.depth")                                                                                                         | Return circuit depth (i.e., length of critical path).                                                                               |
| [`diagonal`](qiskit.circuit.QuantumCircuit.diagonal#qiskit.circuit.QuantumCircuit.diagonal "qiskit.circuit.QuantumCircuit.diagonal")                                                                                             | Attach a diagonal gate to a circuit.                                                                                                |
| [`draw`](qiskit.circuit.QuantumCircuit.draw#qiskit.circuit.QuantumCircuit.draw "qiskit.circuit.QuantumCircuit.draw")                                                                                                             | Draw the quantum circuit.                                                                                                           |
| [`ecr`](qiskit.circuit.QuantumCircuit.ecr#qiskit.circuit.QuantumCircuit.ecr "qiskit.circuit.QuantumCircuit.ecr")                                                                                                                 | Apply [`ECRGate`](qiskit.circuit.library.ECRGate#qiskit.circuit.library.ECRGate "qiskit.circuit.library.ECRGate").                  |
| [`extend`](qiskit.circuit.QuantumCircuit.extend#qiskit.circuit.QuantumCircuit.extend "qiskit.circuit.QuantumCircuit.extend")                                                                                                     | DEPRECATED - Append QuantumCircuit to the RHS if it contains compatible registers.                                                  |
| [`find_bit`](qiskit.circuit.QuantumCircuit.find_bit#qiskit.circuit.QuantumCircuit.find_bit "qiskit.circuit.QuantumCircuit.find_bit")                                                                                             | Find locations in the circuit which can be used to reference a given `Bit`.                                                         |
| [`for_loop`](qiskit.circuit.QuantumCircuit.for_loop#qiskit.circuit.QuantumCircuit.for_loop "qiskit.circuit.QuantumCircuit.for_loop")                                                                                             | Create a `for` loop on this circuit.                                                                                                |
| [`fredkin`](qiskit.circuit.QuantumCircuit.fredkin#qiskit.circuit.QuantumCircuit.fredkin "qiskit.circuit.QuantumCircuit.fredkin")                                                                                                 | Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate#qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").          |
| [`from_qasm_file`](qiskit.circuit.QuantumCircuit.from_qasm_file#qiskit.circuit.QuantumCircuit.from_qasm_file "qiskit.circuit.QuantumCircuit.from_qasm_file")                                                                     | Take in a QASM file and generate a QuantumCircuit object.                                                                           |
| [`from_qasm_str`](qiskit.circuit.QuantumCircuit.from_qasm_str#qiskit.circuit.QuantumCircuit.from_qasm_str "qiskit.circuit.QuantumCircuit.from_qasm_str")                                                                         | Take in a QASM string and generate a QuantumCircuit object.                                                                         |
| [`get_instructions`](qiskit.circuit.QuantumCircuit.get_instructions#qiskit.circuit.QuantumCircuit.get_instructions "qiskit.circuit.QuantumCircuit.get_instructions")                                                             | Get instructions matching name.                                                                                                     |
| [`h`](qiskit.circuit.QuantumCircuit.h#qiskit.circuit.QuantumCircuit.h "qiskit.circuit.QuantumCircuit.h")                                                                                                                         | Apply [`HGate`](qiskit.circuit.library.HGate#qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").                          |
| [`hamiltonian`](qiskit.circuit.QuantumCircuit.hamiltonian#qiskit.circuit.QuantumCircuit.hamiltonian "qiskit.circuit.QuantumCircuit.hamiltonian")                                                                                 | Apply hamiltonian evolution to qubits.                                                                                              |
| [`has_register`](qiskit.circuit.QuantumCircuit.has_register#qiskit.circuit.QuantumCircuit.has_register "qiskit.circuit.QuantumCircuit.has_register")                                                                             | Test if this circuit has the register r.                                                                                            |
| [`i`](qiskit.circuit.QuantumCircuit.i#qiskit.circuit.QuantumCircuit.i "qiskit.circuit.QuantumCircuit.i")                                                                                                                         | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`id`](qiskit.circuit.QuantumCircuit.id#qiskit.circuit.QuantumCircuit.id "qiskit.circuit.QuantumCircuit.id")                                                                                                                     | Apply [`IGate`](qiskit.circuit.library.IGate#qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").                          |
| [`if_else`](qiskit.circuit.QuantumCircuit.if_else#qiskit.circuit.QuantumCircuit.if_else "qiskit.circuit.QuantumCircuit.if_else")                                                                                                 | Apply `IfElseOp`.                                                                                                                   |
| [`if_test`](qiskit.circuit.QuantumCircuit.if_test#qiskit.circuit.QuantumCircuit.if_test "qiskit.circuit.QuantumCircuit.if_test")                                                                                                 | Create an `if` statement on this circuit.                                                                                           |
| [`initialize`](qiskit.circuit.QuantumCircuit.initialize#qiskit.circuit.QuantumCircuit.initialize "qiskit.circuit.QuantumCircuit.initialize")                                                                                     | Initialize qubits in a specific state.                                                                                              |
| [`inverse`](qiskit.circuit.QuantumCircuit.inverse#qiskit.circuit.QuantumCircuit.inverse "qiskit.circuit.QuantumCircuit.inverse")                                                                                                 | Invert (take adjoint of) this circuit.                                                                                              |
| [`iso`](qiskit.circuit.QuantumCircuit.iso#qiskit.circuit.QuantumCircuit.iso "qiskit.circuit.QuantumCircuit.iso")                                                                                                                 | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`isometry`](qiskit.circuit.QuantumCircuit.isometry#qiskit.circuit.QuantumCircuit.isometry "qiskit.circuit.QuantumCircuit.isometry")                                                                                             | Attach an arbitrary isometry from m to n qubits to a circuit.                                                                       |
| [`iswap`](qiskit.circuit.QuantumCircuit.iswap#qiskit.circuit.QuantumCircuit.iswap "qiskit.circuit.QuantumCircuit.iswap")                                                                                                         | Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate#qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").          |
| [`mcp`](qiskit.circuit.QuantumCircuit.mcp#qiskit.circuit.QuantumCircuit.mcp "qiskit.circuit.QuantumCircuit.mcp")                                                                                                                 | Apply [`MCPhaseGate`](qiskit.circuit.library.MCPhaseGate#qiskit.circuit.library.MCPhaseGate "qiskit.circuit.library.MCPhaseGate").  |
| [`mcrx`](qiskit.circuit.QuantumCircuit.mcrx#qiskit.circuit.QuantumCircuit.mcrx "qiskit.circuit.QuantumCircuit.mcrx")                                                                                                             | Apply Multiple-Controlled X rotation gate                                                                                           |
| [`mcry`](qiskit.circuit.QuantumCircuit.mcry#qiskit.circuit.QuantumCircuit.mcry "qiskit.circuit.QuantumCircuit.mcry")                                                                                                             | Apply Multiple-Controlled Y rotation gate                                                                                           |
| [`mcrz`](qiskit.circuit.QuantumCircuit.mcrz#qiskit.circuit.QuantumCircuit.mcrz "qiskit.circuit.QuantumCircuit.mcrz")                                                                                                             | Apply Multiple-Controlled Z rotation gate                                                                                           |
| [`mct`](qiskit.circuit.QuantumCircuit.mct#qiskit.circuit.QuantumCircuit.mct "qiskit.circuit.QuantumCircuit.mct")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`mcu1`](qiskit.circuit.QuantumCircuit.mcu1#qiskit.circuit.QuantumCircuit.mcu1 "qiskit.circuit.QuantumCircuit.mcu1")                                                                                                             | Apply `MCU1Gate`.                                                                                                                   |
| [`mcx`](qiskit.circuit.QuantumCircuit.mcx#qiskit.circuit.QuantumCircuit.mcx "qiskit.circuit.QuantumCircuit.mcx")                                                                                                                 | Apply [`MCXGate`](qiskit.circuit.library.MCXGate#qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate").                  |
| [`measure`](qiskit.circuit.QuantumCircuit.measure#qiskit.circuit.QuantumCircuit.measure "qiskit.circuit.QuantumCircuit.measure")                                                                                                 | Measure quantum bit into classical bit (tuples).                                                                                    |
| [`measure_active`](qiskit.circuit.QuantumCircuit.measure_active#qiskit.circuit.QuantumCircuit.measure_active "qiskit.circuit.QuantumCircuit.measure_active")                                                                     | Adds measurement to all non-idle qubits.                                                                                            |
| [`measure_all`](qiskit.circuit.QuantumCircuit.measure_all#qiskit.circuit.QuantumCircuit.measure_all "qiskit.circuit.QuantumCircuit.measure_all")                                                                                 | Adds measurement to all qubits.                                                                                                     |
| [`ms`](qiskit.circuit.QuantumCircuit.ms#qiskit.circuit.QuantumCircuit.ms "qiskit.circuit.QuantumCircuit.ms")                                                                                                                     | Apply `MSGate`.                                                                                                                     |
| [`num_connected_components`](qiskit.circuit.QuantumCircuit.num_connected_components#qiskit.circuit.QuantumCircuit.num_connected_components "qiskit.circuit.QuantumCircuit.num_connected_components")                             | How many non-entangled subcircuits can the circuit be factored to.                                                                  |
| [`num_nonlocal_gates`](qiskit.circuit.QuantumCircuit.num_nonlocal_gates#qiskit.circuit.QuantumCircuit.num_nonlocal_gates "qiskit.circuit.QuantumCircuit.num_nonlocal_gates")                                                     | Return number of non-local gates (i.e.                                                                                              |
| [`num_tensor_factors`](qiskit.circuit.QuantumCircuit.num_tensor_factors#qiskit.circuit.QuantumCircuit.num_tensor_factors "qiskit.circuit.QuantumCircuit.num_tensor_factors")                                                     | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`num_unitary_factors`](qiskit.circuit.QuantumCircuit.num_unitary_factors#qiskit.circuit.QuantumCircuit.num_unitary_factors "qiskit.circuit.QuantumCircuit.num_unitary_factors")                                                 | Computes the number of tensor factors in the unitary (quantum) part of the circuit only.                                            |
| [`p`](qiskit.circuit.QuantumCircuit.p#qiskit.circuit.QuantumCircuit.p "qiskit.circuit.QuantumCircuit.p")                                                                                                                         | Apply [`PhaseGate`](qiskit.circuit.library.PhaseGate#qiskit.circuit.library.PhaseGate "qiskit.circuit.library.PhaseGate").          |
| [`pauli`](qiskit.circuit.QuantumCircuit.pauli#qiskit.circuit.QuantumCircuit.pauli "qiskit.circuit.QuantumCircuit.pauli")                                                                                                         | Apply [`PauliGate`](qiskit.circuit.library.PauliGate#qiskit.circuit.library.PauliGate "qiskit.circuit.library.PauliGate").          |
| [`power`](qiskit.circuit.QuantumCircuit.power#qiskit.circuit.QuantumCircuit.power "qiskit.circuit.QuantumCircuit.power")                                                                                                         | Raise this circuit to the power of `power`.                                                                                         |
| [`prepare_state`](qiskit.circuit.QuantumCircuit.prepare_state#qiskit.circuit.QuantumCircuit.prepare_state "qiskit.circuit.QuantumCircuit.prepare_state")                                                                         | Prepare qubits in a specific state.                                                                                                 |
| [`qasm`](qiskit.circuit.QuantumCircuit.qasm#qiskit.circuit.QuantumCircuit.qasm "qiskit.circuit.QuantumCircuit.qasm")                                                                                                             | Return OpenQASM string.                                                                                                             |
| [`qbit_argument_conversion`](qiskit.circuit.QuantumCircuit.qbit_argument_conversion#qiskit.circuit.QuantumCircuit.qbit_argument_conversion "qiskit.circuit.QuantumCircuit.qbit_argument_conversion")                             | Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.                                        |
| [`qubit_duration`](qiskit.circuit.QuantumCircuit.qubit_duration#qiskit.circuit.QuantumCircuit.qubit_duration "qiskit.circuit.QuantumCircuit.qubit_duration")                                                                     | Return the duration between the start and stop time of the first and last instructions, excluding delays, over the supplied qubits. |
| [`qubit_start_time`](qiskit.circuit.QuantumCircuit.qubit_start_time#qiskit.circuit.QuantumCircuit.qubit_start_time "qiskit.circuit.QuantumCircuit.qubit_start_time")                                                             | Return the start time of the first instruction, excluding delays, over the supplied qubits.                                         |
| [`qubit_stop_time`](qiskit.circuit.QuantumCircuit.qubit_stop_time#qiskit.circuit.QuantumCircuit.qubit_stop_time "qiskit.circuit.QuantumCircuit.qubit_stop_time")                                                                 | Return the stop time of the last instruction, excluding delays, over the supplied qubits.                                           |
| [`r`](qiskit.circuit.QuantumCircuit.r#qiskit.circuit.QuantumCircuit.r "qiskit.circuit.QuantumCircuit.r")                                                                                                                         | Apply [`RGate`](qiskit.circuit.library.RGate#qiskit.circuit.library.RGate "qiskit.circuit.library.RGate").                          |
| [`rcccx`](qiskit.circuit.QuantumCircuit.rcccx#qiskit.circuit.QuantumCircuit.rcccx "qiskit.circuit.QuantumCircuit.rcccx")                                                                                                         | Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate#qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").              |
| [`rccx`](qiskit.circuit.QuantumCircuit.rccx#qiskit.circuit.QuantumCircuit.rccx "qiskit.circuit.QuantumCircuit.rccx")                                                                                                             | Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate#qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").              |
| [`remove_final_measurements`](qiskit.circuit.QuantumCircuit.remove_final_measurements#qiskit.circuit.QuantumCircuit.remove_final_measurements "qiskit.circuit.QuantumCircuit.remove_final_measurements")                         | Removes final measurements and barriers on all qubits if they are present.                                                          |
| [`repeat`](qiskit.circuit.QuantumCircuit.repeat#qiskit.circuit.QuantumCircuit.repeat "qiskit.circuit.QuantumCircuit.repeat")                                                                                                     | Repeat this circuit `reps` times.                                                                                                   |
| [`reset`](qiskit.circuit.QuantumCircuit.reset#qiskit.circuit.QuantumCircuit.reset "qiskit.circuit.QuantumCircuit.reset")                                                                                                         | Reset the quantum bit(s) to their default state.                                                                                    |
| [`reverse_bits`](qiskit.circuit.QuantumCircuit.reverse_bits#qiskit.circuit.QuantumCircuit.reverse_bits "qiskit.circuit.QuantumCircuit.reverse_bits")                                                                             | Return a circuit with the opposite order of wires.                                                                                  |
| [`reverse_ops`](qiskit.circuit.QuantumCircuit.reverse_ops#qiskit.circuit.QuantumCircuit.reverse_ops "qiskit.circuit.QuantumCircuit.reverse_ops")                                                                                 | Reverse the circuit by reversing the order of instructions.                                                                         |
| [`rv`](qiskit.circuit.QuantumCircuit.rv#qiskit.circuit.QuantumCircuit.rv "qiskit.circuit.QuantumCircuit.rv")                                                                                                                     | Apply [`RVGate`](qiskit.circuit.library.RVGate#qiskit.circuit.library.RVGate "qiskit.circuit.library.RVGate").                      |
| [`rx`](qiskit.circuit.QuantumCircuit.rx#qiskit.circuit.QuantumCircuit.rx "qiskit.circuit.QuantumCircuit.rx")                                                                                                                     | Apply [`RXGate`](qiskit.circuit.library.RXGate#qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").                      |
| [`rxx`](qiskit.circuit.QuantumCircuit.rxx#qiskit.circuit.QuantumCircuit.rxx "qiskit.circuit.QuantumCircuit.rxx")                                                                                                                 | Apply [`RXXGate`](qiskit.circuit.library.RXXGate#qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").                  |
| [`ry`](qiskit.circuit.QuantumCircuit.ry#qiskit.circuit.QuantumCircuit.ry "qiskit.circuit.QuantumCircuit.ry")                                                                                                                     | Apply [`RYGate`](qiskit.circuit.library.RYGate#qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").                      |
| [`ryy`](qiskit.circuit.QuantumCircuit.ryy#qiskit.circuit.QuantumCircuit.ryy "qiskit.circuit.QuantumCircuit.ryy")                                                                                                                 | Apply [`RYYGate`](qiskit.circuit.library.RYYGate#qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").                  |
| [`rz`](qiskit.circuit.QuantumCircuit.rz#qiskit.circuit.QuantumCircuit.rz "qiskit.circuit.QuantumCircuit.rz")                                                                                                                     | Apply [`RZGate`](qiskit.circuit.library.RZGate#qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").                      |
| [`rzx`](qiskit.circuit.QuantumCircuit.rzx#qiskit.circuit.QuantumCircuit.rzx "qiskit.circuit.QuantumCircuit.rzx")                                                                                                                 | Apply [`RZXGate`](qiskit.circuit.library.RZXGate#qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").                  |
| [`rzz`](qiskit.circuit.QuantumCircuit.rzz#qiskit.circuit.QuantumCircuit.rzz "qiskit.circuit.QuantumCircuit.rzz")                                                                                                                 | Apply [`RZZGate`](qiskit.circuit.library.RZZGate#qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").                  |
| [`s`](qiskit.circuit.QuantumCircuit.s#qiskit.circuit.QuantumCircuit.s "qiskit.circuit.QuantumCircuit.s")                                                                                                                         | Apply [`SGate`](qiskit.circuit.library.SGate#qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").                          |
| [`save_amplitudes`](qiskit.circuit.QuantumCircuit.save_amplitudes#qiskit.circuit.QuantumCircuit.save_amplitudes "qiskit.circuit.QuantumCircuit.save_amplitudes")                                                                 | Save complex statevector amplitudes.                                                                                                |
| [`save_amplitudes_squared`](qiskit.circuit.QuantumCircuit.save_amplitudes_squared#qiskit.circuit.QuantumCircuit.save_amplitudes_squared "qiskit.circuit.QuantumCircuit.save_amplitudes_squared")                                 | Save squared statevector amplitudes (probabilities).                                                                                |
| [`save_clifford`](qiskit.circuit.QuantumCircuit.save_clifford#qiskit.circuit.QuantumCircuit.save_clifford "qiskit.circuit.QuantumCircuit.save_clifford")                                                                         | Save the current stabilizer simulator quantum state as a Clifford.                                                                  |
| [`save_density_matrix`](qiskit.circuit.QuantumCircuit.save_density_matrix#qiskit.circuit.QuantumCircuit.save_density_matrix "qiskit.circuit.QuantumCircuit.save_density_matrix")                                                 | Save the current simulator quantum state as a density matrix.                                                                       |
| [`save_expectation_value`](qiskit.circuit.QuantumCircuit.save_expectation_value#qiskit.circuit.QuantumCircuit.save_expectation_value "qiskit.circuit.QuantumCircuit.save_expectation_value")                                     | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_expectation_value_variance`](qiskit.circuit.QuantumCircuit.save_expectation_value_variance#qiskit.circuit.QuantumCircuit.save_expectation_value_variance "qiskit.circuit.QuantumCircuit.save_expectation_value_variance") | Save the expectation value of a Hermitian operator.                                                                                 |
| [`save_matrix_product_state`](qiskit.circuit.QuantumCircuit.save_matrix_product_state#qiskit.circuit.QuantumCircuit.save_matrix_product_state "qiskit.circuit.QuantumCircuit.save_matrix_product_state")                         | Save the current simulator quantum state as a matrix product state.                                                                 |
| [`save_probabilities`](qiskit.circuit.QuantumCircuit.save_probabilities#qiskit.circuit.QuantumCircuit.save_probabilities "qiskit.circuit.QuantumCircuit.save_probabilities")                                                     | Save measurement outcome probabilities vector.                                                                                      |
| [`save_probabilities_dict`](qiskit.circuit.QuantumCircuit.save_probabilities_dict#qiskit.circuit.QuantumCircuit.save_probabilities_dict "qiskit.circuit.QuantumCircuit.save_probabilities_dict")                                 | Save measurement outcome probabilities vector.                                                                                      |
| [`save_stabilizer`](qiskit.circuit.QuantumCircuit.save_stabilizer#qiskit.circuit.QuantumCircuit.save_stabilizer "qiskit.circuit.QuantumCircuit.save_stabilizer")                                                                 | Save the current stabilizer simulator quantum state as a StabilizerState.                                                           |
| [`save_state`](qiskit.circuit.QuantumCircuit.save_state#qiskit.circuit.QuantumCircuit.save_state "qiskit.circuit.QuantumCircuit.save_state")                                                                                     | Save the current simulator quantum state.                                                                                           |
| [`save_statevector`](qiskit.circuit.QuantumCircuit.save_statevector#qiskit.circuit.QuantumCircuit.save_statevector "qiskit.circuit.QuantumCircuit.save_statevector")                                                             | Save the current simulator quantum state as a statevector.                                                                          |
| [`save_statevector_dict`](qiskit.circuit.QuantumCircuit.save_statevector_dict#qiskit.circuit.QuantumCircuit.save_statevector_dict "qiskit.circuit.QuantumCircuit.save_statevector_dict")                                         | Save the current simulator quantum state as a statevector as a dict.                                                                |
| [`save_superop`](qiskit.circuit.QuantumCircuit.save_superop#qiskit.circuit.QuantumCircuit.save_superop "qiskit.circuit.QuantumCircuit.save_superop")                                                                             | Save the current state of the superop simulator.                                                                                    |
| [`save_unitary`](qiskit.circuit.QuantumCircuit.save_unitary#qiskit.circuit.QuantumCircuit.save_unitary "qiskit.circuit.QuantumCircuit.save_unitary")                                                                             | Save the current state of the unitary simulator.                                                                                    |
| [`sdg`](qiskit.circuit.QuantumCircuit.sdg#qiskit.circuit.QuantumCircuit.sdg "qiskit.circuit.QuantumCircuit.sdg")                                                                                                                 | Apply [`SdgGate`](qiskit.circuit.library.SdgGate#qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").                  |
| [`set_density_matrix`](qiskit.circuit.QuantumCircuit.set_density_matrix#qiskit.circuit.QuantumCircuit.set_density_matrix "qiskit.circuit.QuantumCircuit.set_density_matrix")                                                     | Set the density matrix state of the simulator.                                                                                      |
| [`set_matrix_product_state`](qiskit.circuit.QuantumCircuit.set_matrix_product_state#qiskit.circuit.QuantumCircuit.set_matrix_product_state "qiskit.circuit.QuantumCircuit.set_matrix_product_state")                             | Set the matrix product state of the simulator.                                                                                      |
| [`set_stabilizer`](qiskit.circuit.QuantumCircuit.set_stabilizer#qiskit.circuit.QuantumCircuit.set_stabilizer "qiskit.circuit.QuantumCircuit.set_stabilizer")                                                                     | Set the Clifford stabilizer state of the simulator.                                                                                 |
| [`set_statevector`](qiskit.circuit.QuantumCircuit.set_statevector#qiskit.circuit.QuantumCircuit.set_statevector "qiskit.circuit.QuantumCircuit.set_statevector")                                                                 | Set the statevector state of the simulator.                                                                                         |
| [`set_superop`](qiskit.circuit.QuantumCircuit.set_superop#qiskit.circuit.QuantumCircuit.set_superop "qiskit.circuit.QuantumCircuit.set_superop")                                                                                 | Set the superop state of the simulator.                                                                                             |
| [`set_unitary`](qiskit.circuit.QuantumCircuit.set_unitary#qiskit.circuit.QuantumCircuit.set_unitary "qiskit.circuit.QuantumCircuit.set_unitary")                                                                                 | Set the state state of the simulator.                                                                                               |
| [`size`](qiskit.circuit.QuantumCircuit.size#qiskit.circuit.QuantumCircuit.size "qiskit.circuit.QuantumCircuit.size")                                                                                                             | Returns total number of instructions in circuit.                                                                                    |
| [`snapshot`](qiskit.circuit.QuantumCircuit.snapshot#qiskit.circuit.QuantumCircuit.snapshot "qiskit.circuit.QuantumCircuit.snapshot")                                                                                             | Take a statevector snapshot of the internal simulator representation.                                                               |
| [`snapshot_density_matrix`](qiskit.circuit.QuantumCircuit.snapshot_density_matrix#qiskit.circuit.QuantumCircuit.snapshot_density_matrix "qiskit.circuit.QuantumCircuit.snapshot_density_matrix")                                 | Take a density matrix snapshot of simulator state.                                                                                  |
| [`snapshot_expectation_value`](qiskit.circuit.QuantumCircuit.snapshot_expectation_value#qiskit.circuit.QuantumCircuit.snapshot_expectation_value "qiskit.circuit.QuantumCircuit.snapshot_expectation_value")                     | Take a snapshot of expectation value \<O> of an Operator.                                                                           |
| [`snapshot_probabilities`](qiskit.circuit.QuantumCircuit.snapshot_probabilities#qiskit.circuit.QuantumCircuit.snapshot_probabilities "qiskit.circuit.QuantumCircuit.snapshot_probabilities")                                     | Take a probability snapshot of the simulator state.                                                                                 |
| [`snapshot_stabilizer`](qiskit.circuit.QuantumCircuit.snapshot_stabilizer#qiskit.circuit.QuantumCircuit.snapshot_stabilizer "qiskit.circuit.QuantumCircuit.snapshot_stabilizer")                                                 | Take a stabilizer snapshot of the simulator state.                                                                                  |
| [`snapshot_statevector`](qiskit.circuit.QuantumCircuit.snapshot_statevector#qiskit.circuit.QuantumCircuit.snapshot_statevector "qiskit.circuit.QuantumCircuit.snapshot_statevector")                                             | Take a statevector snapshot of the simulator state.                                                                                 |
| [`squ`](qiskit.circuit.QuantumCircuit.squ#qiskit.circuit.QuantumCircuit.squ "qiskit.circuit.QuantumCircuit.squ")                                                                                                                 | Decompose an arbitrary 2\*2 unitary into three rotation gates.                                                                      |
| [`swap`](qiskit.circuit.QuantumCircuit.swap#qiskit.circuit.QuantumCircuit.swap "qiskit.circuit.QuantumCircuit.swap")                                                                                                             | Apply [`SwapGate`](qiskit.circuit.library.SwapGate#qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").              |
| [`sx`](qiskit.circuit.QuantumCircuit.sx#qiskit.circuit.QuantumCircuit.sx "qiskit.circuit.QuantumCircuit.sx")                                                                                                                     | Apply [`SXGate`](qiskit.circuit.library.SXGate#qiskit.circuit.library.SXGate "qiskit.circuit.library.SXGate").                      |
| [`sxdg`](qiskit.circuit.QuantumCircuit.sxdg#qiskit.circuit.QuantumCircuit.sxdg "qiskit.circuit.QuantumCircuit.sxdg")                                                                                                             | Apply [`SXdgGate`](qiskit.circuit.library.SXdgGate#qiskit.circuit.library.SXdgGate "qiskit.circuit.library.SXdgGate").              |
| [`t`](qiskit.circuit.QuantumCircuit.t#qiskit.circuit.QuantumCircuit.t "qiskit.circuit.QuantumCircuit.t")                                                                                                                         | Apply [`TGate`](qiskit.circuit.library.TGate#qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").                          |
| [`tdg`](qiskit.circuit.QuantumCircuit.tdg#qiskit.circuit.QuantumCircuit.tdg "qiskit.circuit.QuantumCircuit.tdg")                                                                                                                 | Apply [`TdgGate`](qiskit.circuit.library.TdgGate#qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").                  |
| [`tensor`](qiskit.circuit.QuantumCircuit.tensor#qiskit.circuit.QuantumCircuit.tensor "qiskit.circuit.QuantumCircuit.tensor")                                                                                                     | Tensor `self` with `other`.                                                                                                         |
| [`to_gate`](qiskit.circuit.QuantumCircuit.to_gate#qiskit.circuit.QuantumCircuit.to_gate "qiskit.circuit.QuantumCircuit.to_gate")                                                                                                 | Create a Gate out of this circuit.                                                                                                  |
| [`to_instruction`](qiskit.circuit.QuantumCircuit.to_instruction#qiskit.circuit.QuantumCircuit.to_instruction "qiskit.circuit.QuantumCircuit.to_instruction")                                                                     | Create an Instruction out of this circuit.                                                                                          |
| [`toffoli`](qiskit.circuit.QuantumCircuit.toffoli#qiskit.circuit.QuantumCircuit.toffoli "qiskit.circuit.QuantumCircuit.toffoli")                                                                                                 | Apply [`CCXGate`](qiskit.circuit.library.CCXGate#qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").                  |
| [`u`](qiskit.circuit.QuantumCircuit.u#qiskit.circuit.QuantumCircuit.u "qiskit.circuit.QuantumCircuit.u")                                                                                                                         | Apply [`UGate`](qiskit.circuit.library.UGate#qiskit.circuit.library.UGate "qiskit.circuit.library.UGate").                          |
| [`u1`](qiskit.circuit.QuantumCircuit.u1#qiskit.circuit.QuantumCircuit.u1 "qiskit.circuit.QuantumCircuit.u1")                                                                                                                     | Apply [`U1Gate`](qiskit.circuit.library.U1Gate#qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").                      |
| [`u2`](qiskit.circuit.QuantumCircuit.u2#qiskit.circuit.QuantumCircuit.u2 "qiskit.circuit.QuantumCircuit.u2")                                                                                                                     | Apply [`U2Gate`](qiskit.circuit.library.U2Gate#qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").                      |
| [`u3`](qiskit.circuit.QuantumCircuit.u3#qiskit.circuit.QuantumCircuit.u3 "qiskit.circuit.QuantumCircuit.u3")                                                                                                                     | Apply [`U3Gate`](qiskit.circuit.library.U3Gate#qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").                      |
| [`uc`](qiskit.circuit.QuantumCircuit.uc#qiskit.circuit.QuantumCircuit.uc "qiskit.circuit.QuantumCircuit.uc")                                                                                                                     | Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.                                                   |
| [`ucrx`](qiskit.circuit.QuantumCircuit.ucrx#qiskit.circuit.QuantumCircuit.ucrx "qiskit.circuit.QuantumCircuit.ucrx")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.                                              |
| [`ucry`](qiskit.circuit.QuantumCircuit.ucry#qiskit.circuit.QuantumCircuit.ucry "qiskit.circuit.QuantumCircuit.ucry")                                                                                                             | Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.                                              |
| [`ucrz`](qiskit.circuit.QuantumCircuit.ucrz#qiskit.circuit.QuantumCircuit.ucrz "qiskit.circuit.QuantumCircuit.ucrz")                                                                                                             | Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.                                        |
| [`unitary`](qiskit.circuit.QuantumCircuit.unitary#qiskit.circuit.QuantumCircuit.unitary "qiskit.circuit.QuantumCircuit.unitary")                                                                                                 | Apply unitary gate to q.                                                                                                            |
| [`while_loop`](qiskit.circuit.QuantumCircuit.while_loop#qiskit.circuit.QuantumCircuit.while_loop "qiskit.circuit.QuantumCircuit.while_loop")                                                                                     | Create a `while` loop on this circuit.                                                                                              |
| [`width`](qiskit.circuit.QuantumCircuit.width#qiskit.circuit.QuantumCircuit.width "qiskit.circuit.QuantumCircuit.width")                                                                                                         | Return number of qubits plus clbits in circuit.                                                                                     |
| [`x`](qiskit.circuit.QuantumCircuit.x#qiskit.circuit.QuantumCircuit.x "qiskit.circuit.QuantumCircuit.x")                                                                                                                         | Apply [`XGate`](qiskit.circuit.library.XGate#qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").                          |
| [`y`](qiskit.circuit.QuantumCircuit.y#qiskit.circuit.QuantumCircuit.y "qiskit.circuit.QuantumCircuit.y")                                                                                                                         | Apply [`YGate`](qiskit.circuit.library.YGate#qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").                          |
| [`z`](qiskit.circuit.QuantumCircuit.z#qiskit.circuit.QuantumCircuit.z "qiskit.circuit.QuantumCircuit.z")                                                                                                                         | Apply [`ZGate`](qiskit.circuit.library.ZGate#qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").                          |

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

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

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

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
