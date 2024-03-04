---
title: MCMTVChain
description: API reference for qiskit.circuit.library.MCMTVChain
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.circuit.library.MCMTVChain
---

# MCMTVChain

<span id="qiskit.circuit.library.MCMTVChain" />

`MCMTVChain(gate, num_ctrl_qubits, num_target_qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.14/qiskit/circuit/library/generalized_gates/mcmt.py "view source code")

The MCMT implementation using the CCX V-chain.

Create a new multi-control multi-target gate.

**Parameters**

*   **gate** (`Union`\[[`Gate`](qiskit.circuit.Gate "qiskit.circuit.gate.Gate"), `Callable`\[\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), [`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit"), [`Qubit`](qiskit.circuit.Qubit "qiskit.circuit.quantumregister.Qubit")], [`Instruction`](qiskit.circuit.Instruction "qiskit.circuit.instruction.Instruction")]]) – The gate to be applied controlled on the control qubits and applied to the target qubits. Can be either a Gate or a circuit method. If it is a callable, it will be casted to a Gate.
*   **num\_ctrl\_qubits** (`int`) – The number of control qubits.
*   **num\_target\_qubits** (`int`) – The number of target qubits.

**Raises**

*   **AttributeError** – If the gate cannot be casted to a controlled gate.
*   **AttributeError** – If the number of controls or targets is 0.

## Attributes

### clbits

Returns a list of classical bits in the order that the registers were added.

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

### extension\_lib

<span id="qiskit.circuit.library.MCMTVChain.extension_lib" />

`= 'include "qelib1.inc";'`

### header

<span id="qiskit.circuit.library.MCMTVChain.header" />

`= 'OPENQASM 2.0;'`

### instances

<span id="qiskit.circuit.library.MCMTVChain.instances" />

`= 8`

### n\_qubits

Deprecated, use `num_qubits` instead. Return number of qubits.

### num\_ancilla\_qubits

Return the number of ancilla qubits required.

### num\_clbits

Return number of classical bits.

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

### num\_qubits

Return number of qubits.

### parameters

Convenience function to get the parameters defined in the parameter table.

### prefix

<span id="qiskit.circuit.library.MCMTVChain.prefix" />

`= 'circuit'`

### qubits

Returns a list of quantum bits in the order that the registers were added.

## Methods

### AND

<span id="qiskit.circuit.library.MCMTVChain.AND" />

`MCMTVChain.AND(qr_variables, qb_target, qr_ancillae, flags=None, mct_mode='no-ancilla')`

Build a collective conjunction (AND) circuit in place using mct.

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to build the conjunction on.
*   **qr\_variables** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The QuantumRegister holding the variable qubits.
*   **qb\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit to hold the conjunction result.
*   **qr\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The ancillary QuantumRegister for building the mct.
*   **flags** (*list\[int]*) – A list of +1/-1/0 to mark negations or omissions of qubits.
*   **mct\_mode** (*str*) – The mct building mode.

### OR

<span id="qiskit.circuit.library.MCMTVChain.OR" />

`MCMTVChain.OR(qr_variables, qb_target, qr_ancillae, flags=None, mct_mode='basic')`

Build a collective disjunction (OR) circuit in place using mct.

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to build the disjunction on.
*   **qr\_variables** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The QuantumRegister holding the variable qubits.
*   **flags** (*list\[int]*) – A list of +1/-1/0 to mark negations or omissions of qubits.
*   **qb\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit to hold the disjunction result.
*   **qr\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")) – The ancillary QuantumRegister for building the mct.
*   **mct\_mode** (*str*) – The mct building mode.

### \_\_getitem\_\_

<span id="qiskit.circuit.library.MCMTVChain.__getitem__" />

`MCMTVChain.__getitem__(item)`

Return indexed operation.

### \_\_len\_\_

<span id="qiskit.circuit.library.MCMTVChain.__len__" />

`MCMTVChain.__len__()`

Return number of operations in circuit.

### add\_register

<span id="qiskit.circuit.library.MCMTVChain.add_register" />

`MCMTVChain.add_register(*regs)`

Add registers.

### append

<span id="qiskit.circuit.library.MCMTVChain.append" />

`MCMTVChain.append(instruction, qargs=None, cargs=None)`

Append one or more instructions to the end of the circuit, modifying the circuit in place. Expands qargs and cargs.

**Parameters**

*   **instruction** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")) – Instruction instance to append
*   **qargs** (*list(argument)*) – qubits to attach instruction to
*   **cargs** (*list(argument)*) – clbits to attach instruction to

**Returns**

a handle to the instruction that was just added

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### assign\_parameters

<span id="qiskit.circuit.library.MCMTVChain.assign_parameters" />

`MCMTVChain.assign_parameters(param_dict, inplace=False)`

Assign parameters to new parameters or values.

The keys of the parameter dictionary must be Parameter instances in the current circuit. The values of the dictionary can either be numeric values or new parameter objects. The values can be assigned to the current circuit object or to a copy of it.

**Parameters**

*   **param\_dict** (*dict*) – A dictionary specifying the mapping from `current_parameter` to `new_parameter`, where `new_parameter` can be a new parameter object or a numeric value.
*   **inplace** (*bool*) – If False, a copy of the circuit with the bound parameters is returned. If True the circuit instance itself is modified.

**Raises**

**CircuitError** – If param\_dict contains parameters not present in the circuit

**Returns**

**A copy of the circuit with bound parameters, if**

`inplace` is True, otherwise None.

**Return type**

optional([QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"))

**Examples**

```python
>>> from qiskit.circuit import QuantumCircuit, Parameter
>>> circuit = QuantumCircuit(2)
>>> params = [Parameter('A'), Parameter('B'), Parameter('C')]
>>> circuit.ry(params[0], 0)
>>> circuit.crx(params[1], 0, 1)
>>> circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(A) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(B) ├
                 └───────┘
>>> circuit.assign_parameters({params[0]: params[2]}, inplace=True)
>>> circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(C) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(B) ├
                 └───────┘
>>> bound_circuit = circuit.assign_parameters({params[1]: 1, params[2]: 2})
>>> bound_circuit.draw()
        ┌───────┐
q_0: |0>┤ Ry(2) ├────■────
        └───────┘┌───┴───┐
q_1: |0>─────────┤ Rx(1) ├
                 └───────┘
>>> bound_circuit.parameters  # this one has no free parameters anymore
set()
>>> circuit.parameters  # the original one is still parameterized
{Parameter(A), Parameter(C)}
```

### barrier

<span id="qiskit.circuit.library.MCMTVChain.barrier" />

`MCMTVChain.barrier(*qargs)`

Apply `Barrier`. If qargs is None, applies to all.

### bind\_parameters

<span id="qiskit.circuit.library.MCMTVChain.bind_parameters" />

`MCMTVChain.bind_parameters(value_dict)`

Assign numeric parameters to values yielding a new circuit.

To assign new Parameter objects or bind the values in-place, without yielding a new circuit, use the assign\_parameters method.

**Parameters**

**value\_dict** (*dict*) – \{parameter: value, …}

**Raises**

*   **CircuitError** – If value\_dict contains parameters not present in the circuit
*   **TypeError** – If value\_dict contains a ParameterExpression in the values.

**Returns**

copy of self with assignment substitution.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### cast

<span id="qiskit.circuit.library.MCMTVChain.cast" />

`static MCMTVChain.cast(value, _type)`

Best effort to cast value to type. Otherwise, returns the value.

### cbit\_argument\_conversion

<span id="qiskit.circuit.library.MCMTVChain.cbit_argument_conversion" />

`MCMTVChain.cbit_argument_conversion(clbit_representation)`

Converts several classical bit representations (such as indexes, range, etc.) into a list of classical bits.

**Parameters**

**clbit\_representation** (*Object*) – representation to expand

**Returns**

Where each tuple is a classical bit.

**Return type**

List(tuple)

### ccx

<span id="qiskit.circuit.library.MCMTVChain.ccx" />

`MCMTVChain.ccx(control_qubit1, control_qubit2, target_qubit, *, ctl1=None, ctl2=None, tgt=None)`

Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").

### ch

<span id="qiskit.circuit.library.MCMTVChain.ch" />

`MCMTVChain.ch(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate").

### cls\_instances

<span id="qiskit.circuit.library.MCMTVChain.cls_instances" />

`classmethod MCMTVChain.cls_instances()`

Return the current number of instances of this class, useful for auto naming.

### cls\_prefix

<span id="qiskit.circuit.library.MCMTVChain.cls_prefix" />

`classmethod MCMTVChain.cls_prefix()`

Return the prefix to use for auto naming.

### cnot

<span id="qiskit.circuit.library.MCMTVChain.cnot" />

`MCMTVChain.cnot(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").

### combine

<span id="qiskit.circuit.library.MCMTVChain.combine" />

`MCMTVChain.combine(rhs)`

Append rhs to self if self contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Return self + rhs as a new object.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns a new QuantumCircuit object

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

### compose

<span id="qiskit.circuit.library.MCMTVChain.compose" />

`MCMTVChain.compose(other, qubits=None, clbits=None, front=False, inplace=False)`

Compose circuit with `other` circuit or instruction, optionally permuting wires.

`other` can be narrower or of equal width to `self`.

**Parameters**

*   **other** ([*qiskit.circuit.Instruction*](qiskit.circuit.Instruction "qiskit.circuit.Instruction")  *or*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") *or BaseOperator*) – (sub)circuit to compose onto self.
*   **qubits** (*list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*|int]*) – qubits of self to compose onto.
*   **clbits** (*list\[*[*Clbit*](qiskit.circuit.Clbit "qiskit.circuit.Clbit")*|int]*) – clbits of self to compose onto.
*   **front** (*bool*) – If True, front composition will be performed (not implemented yet).
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.

**Returns**

the composed circuit (returns None if inplace==True).

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

*   **CircuitError** – if composing on the front.
*   **QiskitError** – if `other` is wider or there are duplicate edge mappings.

**Examples**

```python
>>> lhs.compose(rhs, qubits=[3, 2], inplace=True)
```

```python
            ┌───┐                   ┌─────┐                ┌───┐
lqr_1_0: ───┤ H ├───    rqr_0: ──■──┤ Tdg ├    lqr_1_0: ───┤ H ├───────────────
            ├───┤              ┌─┴─┐└─────┘                ├───┤
lqr_1_1: ───┤ X ├───    rqr_1: ┤ X ├───────    lqr_1_1: ───┤ X ├───────────────
         ┌──┴───┴──┐           └───┘                    ┌──┴───┴──┐┌───┐
lqr_1_2: ┤ U1(0.1) ├  +                     =  lqr_1_2: ┤ U1(0.1) ├┤ X ├───────
         └─────────┘                                    └─────────┘└─┬─┘┌─────┐
lqr_2_0: ─────■─────                           lqr_2_0: ─────■───────■──┤ Tdg ├
            ┌─┴─┐                                          ┌─┴─┐        └─────┘
lqr_2_1: ───┤ X ├───                           lqr_2_1: ───┤ X ├───────────────
            └───┘                                          └───┘
lcr_0: 0 ═══════════                           lcr_0: 0 ═══════════════════════

lcr_1: 0 ═══════════                           lcr_1: 0 ═══════════════════════
```

### control

<span id="qiskit.circuit.library.MCMTVChain.control" />

`MCMTVChain.control(num_ctrl_qubits=1)`

Return the controlled version of the MCMT circuit.

### copy

<span id="qiskit.circuit.library.MCMTVChain.copy" />

`MCMTVChain.copy(name=None)`

Copy the circuit.

**Parameters**

**name** (*str*) – name to be given to the copied circuit. If None, then the name stays the same

**Returns**

a deepcopy of the current circuit, with the specified name

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### count\_ops

<span id="qiskit.circuit.library.MCMTVChain.count_ops" />

`MCMTVChain.count_ops()`

Count each operation kind in the circuit.

**Returns**

a breakdown of how many operations of each kind, sorted by amount.

**Return type**

OrderedDict

### crx

<span id="qiskit.circuit.library.MCMTVChain.crx" />

`MCMTVChain.crx(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate").

### cry

<span id="qiskit.circuit.library.MCMTVChain.cry" />

`MCMTVChain.cry(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate").

### crz

<span id="qiskit.circuit.library.MCMTVChain.crz" />

`MCMTVChain.crz(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate").

### cswap

<span id="qiskit.circuit.library.MCMTVChain.cswap" />

`MCMTVChain.cswap(control_qubit, target_qubit1, target_qubit2, *, label=None, ctrl_state=None, ctl=None, tgt1=None, tgt2=None)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

### cu1

<span id="qiskit.circuit.library.MCMTVChain.cu1" />

`MCMTVChain.cu1(theta, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate").

### cu3

<span id="qiskit.circuit.library.MCMTVChain.cu3" />

`MCMTVChain.cu3(theta, phi, lam, control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate").

### cx

<span id="qiskit.circuit.library.MCMTVChain.cx" />

`MCMTVChain.cx(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate").

### cy

<span id="qiskit.circuit.library.MCMTVChain.cy" />

`MCMTVChain.cy(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate").

### cz

<span id="qiskit.circuit.library.MCMTVChain.cz" />

`MCMTVChain.cz(control_qubit, target_qubit, *, label=None, ctrl_state=None, ctl=None, tgt=None)`

Apply [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate").

### dcx

<span id="qiskit.circuit.library.MCMTVChain.dcx" />

`MCMTVChain.dcx(qubit1, qubit2)`

Apply [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate").

### decompose

<span id="qiskit.circuit.library.MCMTVChain.decompose" />

`MCMTVChain.decompose()`

Call a decomposition pass on this circuit, to decompose one level (shallow decompose).

**Returns**

a circuit one level decomposed

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### depth

<span id="qiskit.circuit.library.MCMTVChain.depth" />

`MCMTVChain.depth()`

Return circuit depth (i.e., length of critical path). This does not include compiler or simulator directives such as ‘barrier’ or ‘snapshot’.

**Returns**

Depth of circuit.

**Return type**

int

**Notes**

The circuit depth and the DAG depth need not be the same.

### diag\_gate

<span id="qiskit.circuit.library.MCMTVChain.diag_gate" />

`MCMTVChain.diag_gate(diag, qubit)`

Deprecated version of QuantumCircuit.diagonal.

### diagonal

<span id="qiskit.circuit.library.MCMTVChain.diagonal" />

`MCMTVChain.diagonal(diag, qubit)`

Attach a diagonal gate to a circuit.

The decomposition is based on Theorem 7 given in “Synthesis of Quantum Logic Circuits” by Shende et al. ([https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf)).

**Parameters**

*   **diag** (*list*) – list of the 2^k diagonal entries (for a diagonal gate on k qubits). Must contain at least two entries
*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list*) – list of k qubits the diagonal is acting on (the order of the qubits specifies the computational basis in which the diagonal gate is provided: the first element in diag acts on the state where all the qubits in q are in the state 0, the second entry acts on the state where all the qubits q\[1],…,q\[k-1] are in the state zero and q\[0] is in the state 1, and so on)

**Returns**

the diagonal gate which was attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list of the diagonal entries or the qubit list is in bad format; if the number of diagonal entries is not 2^k, where k denotes the number of qubits

### draw

<span id="qiskit.circuit.library.MCMTVChain.draw" />

`MCMTVChain.draw(output=None, scale=0.7, filename=None, style=None, interactive=False, line_length=None, plot_barriers=True, reverse_bits=False, justify=None, vertical_compression='medium', idle_wires=True, with_layout=True, fold=None, ax=None, initial_state=False, cregbundle=False)`

Draw the quantum circuit.

**text**: ASCII art TextDrawing that can be printed in the console.

**latex**: high-quality images compiled via LaTeX.

**latex\_source**: raw uncompiled LaTeX output.

**matplotlib**: images with color rendered purely in Python.

**Parameters**

*   **output** (*str*) – Select the output method to use for drawing the circuit. Valid choices are `text`, `latex`, `latex_source`, or `mpl`. By default the ‘text’ drawer is used unless a user config file has an alternative backend set as the default. If the output kwarg is set, that backend will always be used over the default in a user config file.
*   **scale** (*float*) – scale of image to draw (shrink if \< 1)
*   **filename** (*str*) – file path to save image to
*   **style** (*dict or str*) – dictionary of style or file name of style file. This option is only used by the `mpl` output type. If a str is passed in that is the path to a json file which contains a dictionary of style, then that will be opened, parsed, and used as the input dict. See: [Style Dict Doc](qiskit.circuit.library.ZZFeatureMap#draw) for more information on the contents.
*   **interactive** (*bool*) – when set true show the circuit in a new window (for mpl this depends on the matplotlib backend being used supporting this). Note when used with either the text or the latex\_source output type this has no effect and will be silently ignored.
*   **line\_length** (*int*) – Deprecated; see fold which supersedes this option. Sets the length of the lines generated by text output type. This is useful when the drawing does not fit in the console. If None (default), it will try to guess the console width using `shutil.get_terminal_size()`. However, if you’re running in jupyter, the default line length is set to 80 characters. If you don’t want pagination at all, set `line_length=-1`.
*   **reverse\_bits** (*bool*) – When set to True, reverse the bit order inside registers for the output visualization.
*   **plot\_barriers** (*bool*) – Enable/disable drawing barriers in the output circuit. Defaults to True.
*   **justify** (*string*) – Options are `left`, `right` or `none`. If anything else is supplied it defaults to left justified. It refers to where gates should be placed in the output circuit if there is an option. `none` results in each gate being placed in its own column.
*   **vertical\_compression** (*string*) – `high`, `medium` or `low`. It merges the lines generated by the `text` output so the drawing will take less vertical room. Default is `medium`. Only used by the `text` output, will be silently ignored otherwise.
*   **idle\_wires** (*bool*) – Include idle wires (wires with no circuit elements) in output visualization. Default is True.
*   **with\_layout** (*bool*) – Include layout information, with labels on the physical layout. Default is True.
*   **fold** (*int*) – Sets pagination. It can be disabled using -1. In text, sets the length of the lines. This is useful when the drawing does not fit in the console. If None (default), it will try to guess the console width using `shutil. get_terminal_size()`. However, if running in jupyter, the default line length is set to 80 characters. In `mpl` is the number of (visual) layers before folding. Default is 25.
*   **ax** (*matplotlib.axes.Axes*) – An optional Axes object to be used for the visualization output. If none is specified, a new matplotlib Figure will be created and used. Additionally, if specified, there will be no returned Figure since it is redundant. This is only used when the `output` kwarg is set to use the `mpl` backend. It will be silently ignored with all other outputs.
*   **initial\_state** (*bool*) – Optional. Adds `|0>` in the beginning of the wire. Only used by the `text`, `latex` and `latex_source` outputs. Default: `False`.
*   **cregbundle** (*bool*) – Optional. If set True bundle classical registers. Only used by the `text` output. Default: `False`.

**Returns**

`PIL.Image` or `matplotlib.figure` or `str` or `TextDrawing`:

*   **PIL.Image (output=’latex’)**

    an in-memory representation of the image of the circuit diagram.

*   **matplotlib.figure.Figure (output=’mpl’)**

    a matplotlib figure object for the circuit diagram.

*   **str (output=’latex\_source’)**

    The LaTeX source code for visualizing the circuit diagram.

*   **TextDrawing (output=’text’)**

    A drawing that can be printed as ASCII art.

**Raises**

*   [**VisualizationError**](qiskit.visualization.VisualizationError "qiskit.visualization.VisualizationError") – when an invalid output method is selected
*   **ImportError** – when the output methods require non-installed libraries

**Style Dict Details**

The style dict kwarg contains numerous options that define the style of the output circuit visualization. The style dict is only used by the `mpl` output. The options available in the style dict are defined below:

**Parameters**

*   **textcolor** (*str*) – The color code to use for text. Defaults to ‘#000000’

*   **subtextcolor** (*str*) – The color code to use for subtext. Defaults to ‘#000000’

*   **linecolor** (*str*) – The color code to use for lines. Defaults to ‘#000000’

*   **creglinecolor** (*str*) – The color code to use for classical register lines. Defaults to ‘#778899’

*   **gatetextcolor** (*str*) – The color code to use for gate text. Defaults to ‘#000000’

*   **gatefacecolor** (*str*) – The color code to use for gates. Defaults to ‘#ffffff’

*   **barrierfacecolor** (*str*) – The color code to use for barriers. Defaults to ‘#bdbdbd’

*   **backgroundcolor** (*str*) – The color code to use for the background. Defaults to ‘#ffffff’

*   **fontsize** (*int*) – The font size to use for text. Defaults to 13.

*   **subfontsize** (*int*) – The font size to use for subtext. Defaults to 8.

*   **displaytext** (*dict*) –

    A dictionary of the text to use for each element type in the output visualization. The default values are:

    ```python
    {
        'id': 'id',
        'u0': 'U_0',
        'u1': 'U_1',
        'u2': 'U_2',
        'u3': 'U_3',
        'x': 'X',
        'y': 'Y',
        'z': 'Z',
        'h': 'H',
        's': 'S',
        'sdg': 'S^\dagger',
        't': 'T',
        'tdg': 'T^\dagger',
        'rx': 'R_x',
        'ry': 'R_y',
        'rz': 'R_z',
        'reset': '\left|0\right\rangle'
    }
    ```

    You must specify all the necessary values if using this. There is no provision for passing an incomplete dict in.

*   **displaycolor** (*dict*) –

    **The color codes to use for each circuit**

    element. The default values are:

    ```python
    {
        'id': '#F0E442',
        'u0': '#E7AB3B',
        'u1': '#E7AB3B',
        'u2': '#E7AB3B',
        'u3': '#E7AB3B',
        'x': '#58C698',
        'y': '#58C698',
        'z': '#58C698',
        'h': '#70B7EB',
        's': '#E0722D',
        'sdg': '#E0722D',
        't': '#E0722D',
        'tdg': '#E0722D',
        'rx': '#ffffff',
        'ry': '#ffffff',
        'rz': '#ffffff',
        'reset': '#D188B4',
        'target': '#70B7EB',
        'meas': '#D188B4'
    }
    ```

    Also, just like displaytext there is no provision for an incomplete dict passed in.

*   **latexdrawerstyle** (*bool*) – When set to True, enable LaTeX mode, which will draw gates like the latex output modes.

*   **usepiformat** (*bool*) – When set to True, use radians for output.

*   **fold** (*int*) – The number of circuit elements to fold the circuit at. Defaults to 20.

*   **cregbundle** (*bool*) – If set True, bundle classical registers

*   **showindex** (*bool*) – If set True, draw an index.

*   **compress** (*bool*) – If set True, draw a compressed circuit.

*   **figwidth** (*int*) – The maximum width (in inches) for the output figure.

*   **dpi** (*int*) – The DPI to use for the output image. Defaults to 150.

*   **margin** (*list*) – A list of margin values to adjust spacing around output image. Takes a list of 4 ints: \[x left, x right, y bottom, y top].

*   **creglinestyle** (*str*) – The style of line to use for classical registers. Choices are ‘solid’, ‘doublet’, or any valid matplotlib linestyle kwarg value. Defaults to doublet

### extend

<span id="qiskit.circuit.library.MCMTVChain.extend" />

`MCMTVChain.extend(rhs)`

Append QuantumCircuit to the right hand side if it contains compatible registers.

Two circuits are compatible if they contain the same registers or if they contain different registers with unique names. The returned circuit will contain all unique registers between both circuits.

Modify and return self.

**Parameters**

**rhs** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The quantum circuit to append to the right hand side.

**Returns**

Returns this QuantumCircuit object (which has been modified)

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the rhs circuit is not compatible

### fredkin

<span id="qiskit.circuit.library.MCMTVChain.fredkin" />

`MCMTVChain.fredkin(control_qubit, target_qubit1, target_qubit2, *, ctl=None, tgt1=None, tgt2=None)`

Apply [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate").

### from\_qasm\_file

<span id="qiskit.circuit.library.MCMTVChain.from_qasm_file" />

`static MCMTVChain.from_qasm_file(path)`

Take in a QASM file and generate a QuantumCircuit object.

**Parameters**

**path** (*str*) – Path to the file for a QASM program

**Returns**

The QuantumCircuit object for the input QASM

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### from\_qasm\_str

<span id="qiskit.circuit.library.MCMTVChain.from_qasm_str" />

`static MCMTVChain.from_qasm_str(qasm_str)`

Take in a QASM string and generate a QuantumCircuit object.

**Parameters**

**qasm\_str** (*str*) – A QASM program string

**Returns**

The QuantumCircuit object for the input QASM

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### h

<span id="qiskit.circuit.library.MCMTVChain.h" />

`MCMTVChain.h(qubit, *, q=None)`

Apply [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate").

### hamiltonian

<span id="qiskit.circuit.library.MCMTVChain.hamiltonian" />

`MCMTVChain.hamiltonian(operator, time, qubits, label=None)`

Apply hamiltonian evolution to to qubits.

### has\_register

<span id="qiskit.circuit.library.MCMTVChain.has_register" />

`MCMTVChain.has_register(register)`

Test if this circuit has the register r.

**Parameters**

**register** (*Register*) – a quantum or classical register.

**Returns**

True if the register is contained in this circuit.

**Return type**

bool

### i

<span id="qiskit.circuit.library.MCMTVChain.i" />

`MCMTVChain.i(qubit, *, q=None)`

Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").

### id

<span id="qiskit.circuit.library.MCMTVChain.id" />

`MCMTVChain.id(qubit, *, q=None)`

Apply [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate").

### iden

<span id="qiskit.circuit.library.MCMTVChain.iden" />

`MCMTVChain.iden(qubit, *, q=None)`

Deprecated identity gate.

### initialize

<span id="qiskit.circuit.library.MCMTVChain.initialize" />

`MCMTVChain.initialize(params, qubits)`

Apply initialize to circuit.

### inverse

<span id="qiskit.circuit.library.MCMTVChain.inverse" />

`MCMTVChain.inverse()`

Return the inverse MCMT circuit, which is itself.

### iso

<span id="qiskit.circuit.library.MCMTVChain.iso" />

`MCMTVChain.iso(isometry, q_input, q_ancillas_for_output, q_ancillas_zero=None, q_ancillas_dirty=None)`

Attach an arbitrary isometry from m to n qubits to a circuit. In particular, this allows to attach arbitrary unitaries on n qubits (m=n) or to prepare any state on n qubits (m=0). The decomposition used here was introduced by Iten et al. in [https://arxiv.org/abs/1501.06911](https://arxiv.org/abs/1501.06911).

**Parameters**

*   **isometry** (*ndarray*) – an isometry from m to n qubits, i.e., a (complex) ndarray of dimension 2^n×2^m with orthonormal columns (given in the computational basis specified by the order of the ancillas and the input qubits, where the ancillas are considered to be more significant than the input qubits.).
*   **q\_input** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of m qubits where the input to the isometry is fed in (empty list for state preparation).
*   **q\_ancillas\_for\_output** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of n-m ancilla qubits that are used for the output of the isometry and which are assumed to start in the zero state. The qubits are listed with increasing significance.
*   **q\_ancillas\_zero** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which are assumed to start in the zero state. Default is q\_ancillas\_zero = None.
*   **q\_ancillas\_dirty** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which can start in an arbitrary state. Default is q\_ancillas\_dirty = None.

**Returns**

the isometry is attached to the quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the array is not an isometry of the correct size corresponding to the provided number of qubits.

### isometry

<span id="qiskit.circuit.library.MCMTVChain.isometry" />

`MCMTVChain.isometry(isometry, q_input, q_ancillas_for_output, q_ancillas_zero=None, q_ancillas_dirty=None)`

Attach an arbitrary isometry from m to n qubits to a circuit. In particular, this allows to attach arbitrary unitaries on n qubits (m=n) or to prepare any state on n qubits (m=0). The decomposition used here was introduced by Iten et al. in [https://arxiv.org/abs/1501.06911](https://arxiv.org/abs/1501.06911).

**Parameters**

*   **isometry** (*ndarray*) – an isometry from m to n qubits, i.e., a (complex) ndarray of dimension 2^n×2^m with orthonormal columns (given in the computational basis specified by the order of the ancillas and the input qubits, where the ancillas are considered to be more significant than the input qubits.).
*   **q\_input** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of m qubits where the input to the isometry is fed in (empty list for state preparation).
*   **q\_ancillas\_for\_output** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of n-m ancilla qubits that are used for the output of the isometry and which are assumed to start in the zero state. The qubits are listed with increasing significance.
*   **q\_ancillas\_zero** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which are assumed to start in the zero state. Default is q\_ancillas\_zero = None.
*   **q\_ancillas\_dirty** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of ancilla qubits which can start in an arbitrary state. Default is q\_ancillas\_dirty = None.

**Returns**

the isometry is attached to the quantum circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the array is not an isometry of the correct size corresponding to the provided number of qubits.

### iswap

<span id="qiskit.circuit.library.MCMTVChain.iswap" />

`MCMTVChain.iswap(qubit1, qubit2)`

Apply [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate").

### mcmt

<span id="qiskit.circuit.library.MCMTVChain.mcmt" />

`MCMTVChain.mcmt(gate, control_qubits, target_qubits, ancilla_qubits=None, mode='no-ancilla', *, single_control_gate_fun=None, q_controls=None, q_ancillae=None, q_targets=None)`

Apply a multi-control, multi-target using a generic gate.

This can also be used to implement a generic multi-control gate, as the target could also be of length 1.

### mcrx

<span id="qiskit.circuit.library.MCMTVChain.mcrx" />

`MCMTVChain.mcrx(theta, q_controls, q_target, use_basis_gates=False)`

Apply Multiple-Controlled X rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcrx gate on.
*   **theta** (*float*) – angle theta
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mcry

<span id="qiskit.circuit.library.MCMTVChain.mcry" />

`MCMTVChain.mcry(theta, q_controls, q_target, q_ancillae, mode='basic', use_basis_gates=False)`

Apply Multiple-Controlled Y rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcry gate on.
*   **theta** (*float*) – angle theta
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **q\_ancillae** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *or tuple(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*, int)*) – The list of ancillary qubits.
*   **mode** (*string*) – The implementation mode to use
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mcrz

<span id="qiskit.circuit.library.MCMTVChain.mcrz" />

`MCMTVChain.mcrz(lam, q_controls, q_target, use_basis_gates=False)`

Apply Multiple-Controlled Z rotation gate

**Parameters**

*   **self** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The QuantumCircuit object to apply the mcrz gate on.
*   **lam** (*float*) – angle lambda
*   **q\_controls** (*list(*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*)*) – The list of control qubits
*   **q\_target** ([*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The target qubit
*   **use\_basis\_gates** (*bool*) – use u1, u2, u3, cx, id

**Raises**

**QiskitError** – parameter errors

### mct

<span id="qiskit.circuit.library.MCMTVChain.mct" />

`MCMTVChain.mct(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply `MCXGate`.

### mcu1

<span id="qiskit.circuit.library.MCMTVChain.mcu1" />

`MCMTVChain.mcu1(lam, control_qubits, target_qubit)`

Apply `MCU1Gate`.

### mcx

<span id="qiskit.circuit.library.MCMTVChain.mcx" />

`MCMTVChain.mcx(control_qubits, target_qubit, ancilla_qubits=None, mode='noancilla')`

Apply `MCXGate`.

The multi-cX gate can be implemented using different techniques, which use different numbers of ancilla qubits and have varying circuit depth. These modes are: - ‘no-ancilla’: Requires 0 ancilla qubits. - ‘recursion’: Requires 1 ancilla qubit if more than 4 controls are used, otherwise 0. - ‘v-chain’: Requires 2 less ancillas than the number of control qubits. - ‘v-chain-dirty’: Same as for the clean ancillas (but the circuit will be longer).

### measure

<span id="qiskit.circuit.library.MCMTVChain.measure" />

`MCMTVChain.measure(qubit, cbit)`

Measure quantum bit into classical bit (tuples).

**Parameters**

*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list|tuple*) – quantum register
*   **cbit** ([*ClassicalRegister*](qiskit.circuit.ClassicalRegister "qiskit.circuit.ClassicalRegister")*|list|tuple*) – classical register

**Returns**

the attached measure instruction.

**Return type**

qiskit.Instruction

**Raises**

**CircuitError** – if qubit is not in this circuit or bad format; if cbit is not in this circuit or not creg.

### measure\_active

<span id="qiskit.circuit.library.MCMTVChain.measure_active" />

`MCMTVChain.measure_active(inplace=True)`

Adds measurement to all non-idle qubits. Creates a new ClassicalRegister with a size equal to the number of non-idle qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### measure\_all

<span id="qiskit.circuit.library.MCMTVChain.measure_all" />

`MCMTVChain.measure_all(inplace=True)`

Adds measurement to all qubits. Creates a new ClassicalRegister with a size equal to the number of qubits being measured.

Returns a new circuit with measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements inplace or return new circuit.

**Returns**

Returns circuit with measurements when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### mirror

<span id="qiskit.circuit.library.MCMTVChain.mirror" />

`MCMTVChain.mirror()`

Mirror the circuit by reversing the instructions.

This is done by recursively mirroring all instructions. It does not invert any gate.

**Returns**

the mirrored circuit

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### ms

<span id="qiskit.circuit.library.MCMTVChain.ms" />

`MCMTVChain.ms(theta, qubits)`

Apply [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate").

### num\_connected\_components

<span id="qiskit.circuit.library.MCMTVChain.num_connected_components" />

`MCMTVChain.num_connected_components(unitary_only=False)`

How many non-entangled subcircuits can the circuit be factored to.

**Parameters**

**unitary\_only** (*bool*) – Compute only unitary part of graph.

**Returns**

Number of connected components in circuit.

**Return type**

int

### num\_nonlocal\_gates

<span id="qiskit.circuit.library.MCMTVChain.num_nonlocal_gates" />

`MCMTVChain.num_nonlocal_gates()`

Return number of non-local gates (i.e. involving 2+ qubits).

Conditional nonlocal gates are also included.

### num\_tensor\_factors

<span id="qiskit.circuit.library.MCMTVChain.num_tensor_factors" />

`MCMTVChain.num_tensor_factors()`

Computes the number of tensor factors in the unitary (quantum) part of the circuit only.

**Notes**

This is here for backwards compatibility, and will be removed in a future release of Qiskit. You should call num\_unitary\_factors instead.

### num\_unitary\_factors

<span id="qiskit.circuit.library.MCMTVChain.num_unitary_factors" />

`MCMTVChain.num_unitary_factors()`

Computes the number of tensor factors in the unitary (quantum) part of the circuit only.

### qasm

<span id="qiskit.circuit.library.MCMTVChain.qasm" />

`MCMTVChain.qasm(formatted=False, filename=None)`

Return OpenQASM string.

**Parameters**

*   **formatted** (*bool*) – Return formatted Qasm string.
*   **filename** (*str*) – Save Qasm to file with name ‘filename’.

**Returns**

If formatted=False.

**Return type**

str

**Raises**

**ImportError** – If pygments is not installed and `formatted` is `True`.

### qbit\_argument\_conversion

<span id="qiskit.circuit.library.MCMTVChain.qbit_argument_conversion" />

`MCMTVChain.qbit_argument_conversion(qubit_representation)`

Converts several qubit representations (such as indexes, range, etc.) into a list of qubits.

**Parameters**

**qubit\_representation** (*Object*) – representation to expand

**Returns**

Where each tuple is a qubit.

**Return type**

List(tuple)

### r

<span id="qiskit.circuit.library.MCMTVChain.r" />

`MCMTVChain.r(theta, phi, qubit, *, q=None)`

Apply `RGate`.

### rcccx

<span id="qiskit.circuit.library.MCMTVChain.rcccx" />

`MCMTVChain.rcccx(control_qubit1, control_qubit2, control_qubit3, target_qubit)`

Apply [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate").

### rccx

<span id="qiskit.circuit.library.MCMTVChain.rccx" />

`MCMTVChain.rccx(control_qubit1, control_qubit2, target_qubit)`

Apply [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate").

### remove\_final\_measurements

<span id="qiskit.circuit.library.MCMTVChain.remove_final_measurements" />

`MCMTVChain.remove_final_measurements(inplace=True)`

Removes final measurement on all qubits if they are present. Deletes the ClassicalRegister that was used to store the values from these measurements if it is idle.

Returns a new circuit without measurements if inplace=False.

**Parameters**

**inplace** (*bool*) – All measurements removed inplace or return new circuit.

**Returns**

Returns circuit with measurements removed when inplace = False.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

### reset

<span id="qiskit.circuit.library.MCMTVChain.reset" />

`MCMTVChain.reset(qubit)`

Reset q.

### rx

<span id="qiskit.circuit.library.MCMTVChain.rx" />

`MCMTVChain.rx(theta, qubit, *, label=None, q=None)`

Apply [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate").

### rxx

<span id="qiskit.circuit.library.MCMTVChain.rxx" />

`MCMTVChain.rxx(theta, qubit1, qubit2)`

Apply [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate").

### ry

<span id="qiskit.circuit.library.MCMTVChain.ry" />

`MCMTVChain.ry(theta, qubit, *, label=None, q=None)`

Apply [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate").

### ryy

<span id="qiskit.circuit.library.MCMTVChain.ryy" />

`MCMTVChain.ryy(theta, qubit1, qubit2)`

Apply [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate").

### rz

<span id="qiskit.circuit.library.MCMTVChain.rz" />

`MCMTVChain.rz(phi, qubit, *, q=None)`

Apply [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate").

### rzx

<span id="qiskit.circuit.library.MCMTVChain.rzx" />

`MCMTVChain.rzx(theta, qubit1, qubit2)`

Apply [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate").

### rzz

<span id="qiskit.circuit.library.MCMTVChain.rzz" />

`MCMTVChain.rzz(theta, qubit1, qubit2)`

Apply [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate").

### s

<span id="qiskit.circuit.library.MCMTVChain.s" />

`MCMTVChain.s(qubit, *, q=None)`

Apply [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate").

### sdg

<span id="qiskit.circuit.library.MCMTVChain.sdg" />

`MCMTVChain.sdg(qubit, *, q=None)`

Apply [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate").

### size

<span id="qiskit.circuit.library.MCMTVChain.size" />

`MCMTVChain.size()`

Returns total number of gate operations in circuit.

**Returns**

Total number of gate operations.

**Return type**

int

### snapshot

<span id="qiskit.circuit.library.MCMTVChain.snapshot" />

`MCMTVChain.snapshot(label, snapshot_type='statevector', qubits=None, params=None)`

Take a statevector snapshot of the internal simulator representation. Works on all qubits, and prevents reordering (like barrier). :param label: a snapshot label to report the result :type label: str :param snapshot\_type: the type of the snapshot. :type snapshot\_type: str :param qubits: the qubits to apply snapshot to \[Default: None]. :type qubits: list or None :param params: the parameters for snapshot\_type \[Default: None]. :type params: list or None

**Returns**

with attached command

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – malformed command

### snapshot\_density\_matrix

<span id="qiskit.circuit.library.MCMTVChain.snapshot_density_matrix" />

`MCMTVChain.snapshot_density_matrix(label, qubits=None)`

Take a density matrix snapshot of simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list or None*) – the qubits to apply snapshot to. If None all qubits will be snapshot \[Default: None].

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_expectation\_value

<span id="qiskit.circuit.library.MCMTVChain.snapshot_expectation_value" />

`MCMTVChain.snapshot_expectation_value(label, op, qubits, single_shot=False, variance=False)`

Take a snapshot of expectation value \<O> of an Operator.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **op** ([*Operator*](qiskit.quantum_info.Operator "qiskit.quantum_info.Operator")) – operator to snapshot
*   **qubits** (*list*) – the qubits to snapshot.
*   **single\_shot** (*bool*) – return list for each shot rather than average \[Default: False]
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_probabilities

<span id="qiskit.circuit.library.MCMTVChain.snapshot_probabilities" />

`MCMTVChain.snapshot_probabilities(label, qubits, variance=False)`

Take a probability snapshot of the simulator state.

**Parameters**

*   **label** (*str*) – a snapshot label to report the result
*   **qubits** (*list*) – the qubits to snapshot.
*   **variance** (*bool*) – compute variance of probabilities \[Default: False]

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

### snapshot\_stabilizer

<span id="qiskit.circuit.library.MCMTVChain.snapshot_stabilizer" />

`MCMTVChain.snapshot_stabilizer(label)`

Take a stabilizer snapshot of the simulator state.

**Parameters**

**label** (*str*) – a snapshot label to report the result.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

#### Additional Information:

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

### snapshot\_statevector

<span id="qiskit.circuit.library.MCMTVChain.snapshot_statevector" />

`MCMTVChain.snapshot_statevector(label)`

Take a statevector snapshot of the simulator state.

**Parameters**

**label** (*str*) – a snapshot label to report the result.

**Returns**

with attached instruction.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**ExtensionError** – if snapshot is invalid.

#### Additional Information:

This snapshot is always performed on all qubits in a circuit. The number of qubits parameter specifies the size of the instruction as a barrier and should be set to the number of qubits in the circuit.

### squ

<span id="qiskit.circuit.library.MCMTVChain.squ" />

`MCMTVChain.squ(unitary_matrix, qubit, mode='ZYZ', up_to_diagonal=False, *, u=None)`

Decompose an arbitrary 2\*2 unitary into three rotation gates.

Note that the decomposition is up to a global phase shift. (This is a well known decomposition, which can be found for example in Nielsen and Chuang’s book “Quantum computation and quantum information”.)

**Parameters**

*   **unitary\_matrix** (*ndarray*) – 2\*2 unitary (given as a (complex) ndarray).
*   **qubit** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")  *|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – The qubit which the gate is acting on.
*   **mode** (*string*) – determines the used decomposition by providing the rotation axes. The allowed modes are: “ZYZ” (default)
*   **up\_to\_diagonal** (*bool*) – if set to True, the single-qubit unitary is decomposed up to a diagonal matrix, i.e. a unitary u’ is implemented such that there exists a 2\*2 diagonal gate d with u = d.dot(u’)
*   **u** (*ndarray*) – Deprecated, use `unitary_matrix` instead.

**Returns**

The single-qubit unitary instruction attached to the circuit.

**Return type**

[InstructionSet](qiskit.circuit.InstructionSet "qiskit.circuit.InstructionSet")

**Raises**

**QiskitError** – if the format is wrong; if the array u is not unitary

### swap

<span id="qiskit.circuit.library.MCMTVChain.swap" />

`MCMTVChain.swap(qubit1, qubit2)`

Apply [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate").

### t

<span id="qiskit.circuit.library.MCMTVChain.t" />

`MCMTVChain.t(qubit, *, q=None)`

Apply [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate").

### tdg

<span id="qiskit.circuit.library.MCMTVChain.tdg" />

`MCMTVChain.tdg(qubit, *, q=None)`

Apply [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate").

### to\_gate

<span id="qiskit.circuit.library.MCMTVChain.to_gate" />

`MCMTVChain.to_gate(parameter_map=None)`

Create a Gate out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the gate. If None, existing circuit parameters will also parameterize the gate.

**Returns**

a composite gate encapsulating this circuit (can be decomposed back)

**Return type**

[Gate](qiskit.circuit.Gate "qiskit.circuit.Gate")

### to\_instruction

<span id="qiskit.circuit.library.MCMTVChain.to_instruction" />

`MCMTVChain.to_instruction(parameter_map=None)`

Create an Instruction out of this circuit.

**Parameters**

**parameter\_map** (*dict*) – For parameterized circuits, a mapping from parameters in the circuit to parameters to be used in the instruction. If None, existing circuit parameters will also parameterize the instruction.

**Returns**

a composite instruction encapsulating this circuit (can be decomposed back)

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction "qiskit.circuit.Instruction")

### toffoli

<span id="qiskit.circuit.library.MCMTVChain.toffoli" />

`MCMTVChain.toffoli(control_qubit1, control_qubit2, target_qubit, *, ctl1=None, ctl2=None, tgt=None)`

Apply [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate").

### u1

<span id="qiskit.circuit.library.MCMTVChain.u1" />

`MCMTVChain.u1(theta, qubit, *, q=None)`

Apply [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate").

### u2

<span id="qiskit.circuit.library.MCMTVChain.u2" />

`MCMTVChain.u2(phi, lam, qubit, *, q=None)`

Apply [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate").

### u3

<span id="qiskit.circuit.library.MCMTVChain.u3" />

`MCMTVChain.u3(theta, phi, lam, qubit, *, q=None)`

Apply [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate").

### uc

<span id="qiskit.circuit.library.MCMTVChain.uc" />

`MCMTVChain.uc(gate_list, q_controls, q_target, up_to_diagonal=False)`

Attach a uniformly controlled gates (also called multiplexed gates) to a circuit.

The decomposition was introduced by Bergholm et al. in [https://arxiv.org/pdf/quant-ph/0410066.pdf](https://arxiv.org/pdf/quant-ph/0410066.pdf).

**Parameters**

*   **gate\_list** (*list\[ndarray]*) – list of two qubit unitaries \[U\_0,…,U\_\{2^k-1}], where each single-qubit unitary U\_i is a given as a 2\*2 array
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*,int)]*) – list of k control qubits. The qubits are ordered according to their significance in the computational basis. For example if q\_controls=\[q\[1],q\[2]] (with q = QuantumRegister(2)), the unitary U\_0 is performed if q\[1] and q\[2] are in the state zero, U\_1 is performed if q\[2] is in the state zero and q\[1] is in the state one, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|(*[*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*,int)*) – target qubit, where we act on with the single-qubit gates.
*   **up\_to\_diagonal** (*bool*) – If set to True, the uniformly controlled gate is decomposed up to a diagonal gate, i.e. a unitary u’ is implemented such that there exists a diagonal gate d with u = d.dot(u’), where the unitary u describes the uniformly controlled gate

**Returns**

the uniformly controlled gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucg

<span id="qiskit.circuit.library.MCMTVChain.ucg" />

`MCMTVChain.ucg(angle_list, q_controls, q_target, up_to_diagonal=False)`

Deprecated version of uc.

### ucrx

<span id="qiskit.circuit.library.MCMTVChain.ucrx" />

`MCMTVChain.ucrx(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed) Rx rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list*) – list of (real) rotation angles $[a_0,...,a_{2^k-1}]$
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if `q_controls=[q[0],q[1]]` (with `q = QuantumRegister(2)`), the rotation `Rx(a_0)` is performed if `q[0]` and `q[1]` are in the state zero, the rotation `Rx(a_1)` is performed if `q[0]` is in the state one and `q[1]` is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucry

<span id="qiskit.circuit.library.MCMTVChain.ucry" />

`MCMTVChain.ucry(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed) Ry rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list\[numbers*) – list of (real) rotation angles $[a_0,...,a_{2^k-1}]$
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if `q_controls=[q[0],q[1]]` (with `q = QuantumRegister(2)`), the rotation `Ry(a_0)` is performed if `q[0]` and `q[1]` are in the state zero, the rotation `Ry(a_1)` is performed if `q[0]` is in the state one and `q[1]` is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucrz

<span id="qiskit.circuit.library.MCMTVChain.ucrz" />

`MCMTVChain.ucrz(angle_list, q_controls, q_target)`

Attach a uniformly controlled (also called multiplexed gates) Rz rotation gate to a circuit.

The decomposition is base on [https://arxiv.org/pdf/quant-ph/0406176.pdf](https://arxiv.org/pdf/quant-ph/0406176.pdf) by Shende et al.

**Parameters**

*   **angle\_list** (*list\[numbers*) – list of (real) rotation angles \[a\_0,…,a\_\{2^k-1}]
*   **q\_controls** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|list\[*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")*]*) – list of k control qubits (or empty list if no controls). The control qubits are ordered according to their significance in increasing order: For example if q\_controls=\[q\[1],q\[2]] (with q = QuantumRegister(2)), the rotation Rz(a\_0)is performed if q\[1] and q\[2] are in the state zero, the rotation Rz(a\_1) is performed if q\[1] is in the state one and q\[2] is in the state zero, and so on
*   **q\_target** ([*QuantumRegister*](qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister")*|*[*Qubit*](qiskit.circuit.Qubit "qiskit.circuit.Qubit")) – target qubit, where we act on with the single-qubit rotation gates

**Returns**

the uniformly controlled rotation gate is attached to the circuit.

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")

**Raises**

**QiskitError** – if the list number of control qubits does not correspond to the provided number of single-qubit unitaries; if an input is of the wrong type

### ucx

<span id="qiskit.circuit.library.MCMTVChain.ucx" />

`MCMTVChain.ucx(angle_list, q_controls, q_target)`

Deprecated version of ucrx.

### ucy

<span id="qiskit.circuit.library.MCMTVChain.ucy" />

`MCMTVChain.ucy(angle_list, q_controls, q_target)`

Deprecated version of ucry.

### ucz

<span id="qiskit.circuit.library.MCMTVChain.ucz" />

`MCMTVChain.ucz(angle_list, q_controls, q_target)`

Deprecated version of ucrz.

### unitary

<span id="qiskit.circuit.library.MCMTVChain.unitary" />

`MCMTVChain.unitary(obj, qubits, label=None)`

Apply unitary gate to q.

### width

<span id="qiskit.circuit.library.MCMTVChain.width" />

`MCMTVChain.width()`

Return number of qubits plus clbits in circuit.

**Returns**

Width of circuit.

**Return type**

int

### x

<span id="qiskit.circuit.library.MCMTVChain.x" />

`MCMTVChain.x(qubit, *, label=None, ctrl_state=None, q=None)`

Apply [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate").

### y

<span id="qiskit.circuit.library.MCMTVChain.y" />

`MCMTVChain.y(qubit, *, q=None)`

Apply [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate").

### z

<span id="qiskit.circuit.library.MCMTVChain.z" />

`MCMTVChain.z(qubit, *, q=None)`

Apply [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate").

