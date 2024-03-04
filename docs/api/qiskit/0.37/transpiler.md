---
title: transpiler
description: API reference for qiskit.transpiler
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.transpiler
---

<span id="module-qiskit.transpiler" />

<span id="qiskit-transpiler" />

# Transpiler

<span id="module-qiskit.transpiler" />

`qiskit.transpiler`

## Overview

Transpilation is the process of rewriting a given input circuit to match the topology of a specific quantum device, and/or to optimize the circuit for execution on present day noisy quantum systems.

Most circuits must undergo a series of transformations that make them compatible with a given target device, and optimize them to reduce the effects of noise on the resulting outcomes. Rewriting quantum circuits to match hardware constraints and optimizing for performance can be far from trivial. The flow of logic in the rewriting tool chain need not be linear, and can often have iterative sub-loops, conditional branches, and other complex behaviors. That being said, the basic building blocks follow the structure given below:

![../\_images/transpiling\_core\_steps.png](/images/api/qiskit/0.37/transpiling_core_steps.png)

Qiskit has four pre-built transpilation pipelines available here: [`qiskit.transpiler.preset_passmanagers`](transpiler_preset#module-qiskit.transpiler.preset_passmanagers "qiskit.transpiler.preset_passmanagers"). Unless the reader is familiar with quantum circuit optimization methods and their usage, it is best to use one of these ready-made routines.

<span id="transpiler-supplemental" />

## Supplementary Information

### Basis gates

When writing a quantum circuit you are free to use any quantum gate (unitary operator) that you like, along with a collection of non-gate operations such as qubit measurements and reset operations. However, when running a circuit on a real quantum device one no longer has this flexibility. Due to limitations in, for example, the physical interactions between qubits, difficulty in implementing multi-qubit gates, control electronics etc, a quantum computing device can only natively support a handful of quantum gates and non-gate operations. In the present case of IBM Q devices, the native gate set can be found by querying the devices themselves, and looking for the corresponding attribute in their configuration:

```python
backend.configuration().basis_gates
```

```python
['id', 'rz', 'sx', 'x', 'cx']
```

Every quantum circuit run on an IBM Q device must be expressed using only these basis gates. For example, suppose one wants to run a simple phase estimation circuit:

```python
import numpy as np
from qiskit import QuantumCircuit
qc = QuantumCircuit(2, 1)

qc.h(0)
qc.x(1)
qc.cp(np.pi/4, 0, 1)
qc.h(0)
qc.measure([0], [0])
qc.draw(output='mpl')
```

![../\_images/transpiler\_2\_0.png](/images/api/qiskit/0.37/transpiler_2_0.png)

We have $H$, $X$, and controlled-$P$ gates, all of which are not in our devices basis gate set, and must be expanded. This expansion is taken care of for us in the `qiskit.execute()` function. However, we can decompose the circuit to show what it would look like in the native gate set of the IBM Quantum devices:

```python
from qiskit import transpile

qc_basis = transpile(qc, backend)
qc_basis.draw(output='mpl')
```

![../\_images/transpiler\_3\_0.png](/images/api/qiskit/0.37/transpiler_3_0.png)

A few things to highlight. First, the circuit has gotten longer with respect to the initial one. This can be verified by checking the depth of the circuits:

```python
print('Original depth:', qc.depth(), 'Decomposed Depth:', qc_basis.depth())
```

```python
Original depth: 4 Decomposed Depth: 10
```

Second, although we had a single controlled gate, the fact that it was not in the basis set means that, when expanded, it requires more than a single cx gate to implement. All said, unrolling to the basis set of gates leads to an increase in the depth of a quantum circuit and the number of gates.

It is important to highlight two special cases:

1.  A SWAP gate is not a native gate on the IBM Q devices, and must be decomposed into three CNOT gates:

    ```python
    swap_circ = QuantumCircuit(2)
    swap_circ.swap(0, 1)
    swap_circ.decompose().draw(output='mpl')
    ```

    ![../\_images/transpiler\_5\_0.png](/images/api/qiskit/0.37/transpiler_5_0.png)

    As a product of three CNOT gates, SWAP gates are expensive operations to perform on a noisy quantum devices. However, such operations are usually necessary for embedding a circuit into the limited entangling gate connectivities of actual devices. Thus, minimizing the number of SWAP gates in a circuit is a primary goal in the transpilation process.

2.  A Toffoli, or controlled-controlled-not gate (ccx), is a three-qubit gate. Given that our basis gate set includes only single- and two-qubit gates, it is obvious that this gate must be decomposed. This decomposition is quite costly:

    ```python
    ccx_circ = QuantumCircuit(3)
    ccx_circ.ccx(0, 1, 2)
    ccx_circ.decompose().draw(output='mpl')
    ```

    ![../\_images/transpiler\_6\_0.png](/images/api/qiskit/0.37/transpiler_6_0.png)

    For every Toffoli gate in a quantum circuit, the IBM Quantum hardware may execute up to six CNOT gates, and a handful of single-qubit gates. From this example, it should be clear that any algorithm that makes use of multiple Toffoli gates will end up as a circuit with large depth and will therefore be appreciably affected by noise and gate errors.

### Initial layout

Quantum circuits are abstract entities whose qubits are “virtual” representations of actual qubits used in computations. We need to be able to map these virtual qubits in a one-to-one manner to the “physical” qubits in an actual quantum device.

![../\_images/mapping.png](/images/api/qiskit/0.37/mapping.png)

By default, qiskit will do this mapping for you. The choice of mapping depends on the properties of the circuit, the particular device you are targeting, and the optimization level that is chosen. The basic mapping strategies are the following:

*   **Trivial layout**: Map virtual qubits to the same numbered physical qubit on the device, i.e. \[0,1,2,3,4] -> \[0,1,2,3,4] (default in optimization\_level=0 and optimization\_level=1).
*   **Dense layout**: Find the sub-graph of the device with same number of qubits as the circuit with the greatest connectivity (default in optimization\_level=2 and optimization\_level=3).

The choice of initial layout is extremely important when:

1.  Computing the number of SWAP operations needed to map the input circuit onto the device topology.
2.  Taking into account the noise properties of the device.

The choice of initial\_layout can mean the difference between getting a result, and getting nothing but noise.

Lets see what layouts are automatically picked at various optimization levels. The modified circuits returned by [`qiskit.compiler.transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") have this initial layout information in them, and we can view this layout selection graphically using [`qiskit.visualization.plot_circuit_layout()`](qiskit.visualization.plot_circuit_layout "qiskit.visualization.plot_circuit_layout"):

```python
from qiskit import QuantumCircuit, transpile
from qiskit.visualization import plot_circuit_layout
from qiskit.providers.fake_provider import FakeVigo
backend = FakeVigo()

ghz = QuantumCircuit(3, 3)
ghz.h(0)
ghz.cx(0,range(1,3))
ghz.barrier()
ghz.measure(range(3), range(3))
ghz.draw(output='mpl')
```

![../\_images/transpiler\_7\_0.png](/images/api/qiskit/0.37/transpiler_7_0.png)

*   **Layout Using Optimization Level 0**

    ```python
    new_circ_lv0 = transpile(ghz, backend=backend, optimization_level=0)
    plot_circuit_layout(new_circ_lv0, backend)
    ```

    ![../\_images/transpiler\_8\_0.png](/images/api/qiskit/0.37/transpiler_8_0.png)

*   **Layout Using Optimization Level 3**

    ```python
    new_circ_lv3 = transpile(ghz, backend=backend, optimization_level=3)
    plot_circuit_layout(new_circ_lv3, backend)
    ```

    ![../\_images/transpiler\_9\_0.png](/images/api/qiskit/0.37/transpiler_9_0.png)

It is completely possible to specify your own initial layout. To do so we can pass a list of integers to [`qiskit.compiler.transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") via the initial\_layout keyword argument, where the index labels the virtual qubit in the circuit and the corresponding value is the label for the physical qubit to map onto:

```python
# Virtual -> physical
#    0    ->    3
#    1    ->    4
#    2    ->    2

my_ghz = transpile(ghz, backend, initial_layout=[3, 4, 2])
plot_circuit_layout(my_ghz, backend)
```

![../\_images/transpiler\_10\_0.png](/images/api/qiskit/0.37/transpiler_10_0.png)

### Mapping circuits to hardware topology

In order to implement a CNOT gate between qubits in a quantum circuit that are not directly connected on a quantum device one or more SWAP gates must be inserted into the circuit to move the qubit states around until they are adjacent on the device gate map. Each SWAP gate is decomposed into three CNOT gates on the IBM Quantum devices, and represents an expensive and noisy operation to perform. Thus, finding the minimum number of SWAP gates needed to map a circuit onto a given device, is an important step (if not the most important) in the whole execution process.

However, as with many important things in life, finding the optimal SWAP mapping is hard. In fact it is in a class of problems called NP-Hard, and is thus prohibitively expensive to compute for all but the smallest quantum devices and input circuits. To get around this, by default Qiskit uses a stochastic heuristic algorithm called `Qiskit.transpiler.passes.StochasticSwap` to compute a good, but not necessarily minimal SWAP count. The use of a stochastic method means the circuits generated by `Qiskit.compiler.transpile()` (or `Qiskit.execute()` that calls transpile internally) are not guaranteed to be the same over repeated runs. Indeed, running the same circuit repeatedly will in general result in a distribution of circuit depths and gate counts at the output.

In order to highlight this, we run a GHZ circuit 100 times, using a “bad” (disconnected) initial\_layout:

```python
import matplotlib.pyplot as plt
from qiskit import QuantumCircuit, transpile
from qiskit.providers.fake_provider import FakeBoeblingen
backend = FakeBoeblingen()

ghz = QuantumCircuit(5)
ghz.h(0)
ghz.cx(0,range(1,5))
ghz.draw(output='mpl')
```

![../\_images/transpiler\_11\_0.png](/images/api/qiskit/0.37/transpiler_11_0.png)

```python
depths = []
for _ in range(100):
   depths.append(transpile(ghz,
                           backend,
                           initial_layout=[7, 0, 4, 15, 19],
                          ).depth())

plt.figure(figsize=(8, 6))
plt.hist(depths, bins=list(range(14,36)), align='left', color='#AC557C')
plt.xlabel('Depth', fontsize=14)
plt.ylabel('Counts', fontsize=14);
```

![../\_images/transpiler\_12\_0.png](/images/api/qiskit/0.37/transpiler_12_0.png)

This distribution is quite wide, signaling the difficultly the SWAP mapper is having in computing the best mapping. Most circuits will have a distribution of depths, perhaps not as wide as this one, due to the stochastic nature of the default SWAP mapper. Of course, we want the best circuit we can get, especially in cases where the depth is critical to success or failure. In cases like this, it is best to `transpile()` a circuit several times, e.g. 10, and take the one with the lowest depth. The `transpile()` function will automatically run in parallel mode, making this procedure relatively speedy in most cases.

### Gate optimization

Decomposing quantum circuits into the basis gate set of the IBM Quantum devices, and the addition of SWAP gates needed to match hardware topology, conspire to increase the depth and gate count of quantum circuits. Fortunately many routines for optimizing circuits by combining or eliminating gates exist. In some cases these methods are so effective the output circuits have lower depth than the inputs. In other cases, not much can be done, and the computation may be difficult to perform on noisy devices. Different gate optimizations are turned on with different optimization\_level values. Below we show the benefits gained from setting the optimization level higher:

<Admonition title="Important" type="danger">
  The output from `transpile()` varies due to the stochastic swap mapper. So the numbers below will likely change each time you run the code.
</Admonition>

```python
import matplotlib.pyplot as plt
from qiskit import QuantumCircuit, transpile
from qiskit.providers.fake_provider import FakeBoeblingen
backend = FakeBoeblingen()

ghz = QuantumCircuit(5)
ghz.h(0)
ghz.cx(0,range(1,5))
ghz.draw(output='mpl')
```

![../\_images/transpiler\_13\_0.png](/images/api/qiskit/0.37/transpiler_13_0.png)

```python
for kk in range(4):
   circ = transpile(ghz, backend, optimization_level=kk)
   print('Optimization Level {}'.format(kk))
   print('Depth:', circ.depth())
   print('Gate counts:', circ.count_ops())
   print()
```

```python
Optimization Level 0
Depth: 14
Gate counts: OrderedDict([('cx', 16), ('u2', 1)])

Optimization Level 1
Depth: 10
Gate counts: OrderedDict([('cx', 18), ('u2', 1)])

Optimization Level 2
Depth: 10
Gate counts: OrderedDict([('cx', 18), ('u2', 1)])

Optimization Level 3
Depth: 8
Gate counts: OrderedDict([('cx', 7), ('u2', 1)])
```

### Scheduling

After the circuit has been translated to the target basis, mapped to the device, and optimized, a scheduling phase can be applied to optionally account for all the idle time in the circuit. At a high level the scheduling can be thought of as inserting delays into the circuit to account for idle time on the qubits between the execution of instructions. For example, if we start with a circuit such as:

```python
from qiskit import QuantumCircuit, transpile
from qiskit.providers.fake_provider import FakeBoeblingen
backend = FakeBoeblingen()

ghz = QuantumCircuit(5)
ghz.h(0)
ghz.cx(0,range(1,5))
ghz.draw(output='mpl')
```

![../\_images/transpiler\_15\_0.png](/images/api/qiskit/0.37/transpiler_15_0.png)

we can then call [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") on it with `scheduling_method` set:

```python
circ = transpile(ghz, backend, scheduling_method="asap")
circ.draw(output='mpl')
```

![../\_images/transpiler\_16\_0.png](/images/api/qiskit/0.37/transpiler_16_0.png)

You can see here that the transpiler inserted [`Delay`](qiskit.circuit.Delay "qiskit.circuit.Delay") instructions to account for idle time on each qubit. To get a better idea of the timing of the circuit we can also look at it with the [`timeline.draw()`](qiskit.visualization.timeline.draw "qiskit.visualization.timeline.draw") function:

```python
from qiskit.visualization.timeline import draw as timeline_draw

timeline_draw(circ)
```

![../\_images/transpiler\_17\_0.png](/images/api/qiskit/0.37/transpiler_17_0.png)

The scheduling of a circuit involves two parts, analysis and constraint mapping followed by a padding pass. The first part requires running a scheduling analysis pass such as `ALAPSchedulingAnalysis` or `ASAPSchedulingAnalysis` which analyzes the circuit and records the start time of each instruction in the circuit using a scheduling algorithm (“as late as possible” for `ALAPSchedulingAnalysis` and “as soon as possible” for `ASAPSchedulingAnalysis`) in the property set. Once the circuit has an initial scheduling additional passes can be run to account for any timing constraints on the target backend, such as alignment constraints. This is typically done with the [`ConstrainedReschedule`](qiskit.transpiler.passes.ConstrainedReschedule "qiskit.transpiler.passes.ConstrainedReschedule") pass which will adjust the scheduling set in the property set to the contraints of the target backend. Once all the scheduling and adjustments/rescheduling are finished a padding pass, such as [`PadDelay`](qiskit.transpiler.passes.PadDelay "qiskit.transpiler.passes.PadDelay") or [`PadDynamicalDecoupling`](qiskit.transpiler.passes.PadDynamicalDecoupling "qiskit.transpiler.passes.PadDynamicalDecoupling") is run to insert the instructions into the circuit, which completes the scheduling.

Scheduling Anaylsis with control flow instructions:

When scheduling analysis passes run there are additional constraints on classical conditions and control flow instructions in a circuit. This section covers the details of these additional constraints that any scheduling pass will need to account for.

Policy of topological node ordering in scheduling:

The DAG representation of `QuantumCircuit` respects the node ordering also in the classical register wires, though theoretically two conditional instructions conditioned on the same register are commute, i.e. read-access to the classical register doesn’t change its state.

```python
qc = QuantumCircuit(2, 1)
qc.delay(100, 0)
qc.x(0).c_if(0, True)
qc.x(1).c_if(0, True)
```

The scheduler SHOULD comply with above topological ordering policy of the DAG circuit. Accordingly, the asap-scheduled circuit will become

```python
     ┌────────────────┐   ┌───┐
q_0: ┤ Delay(100[dt]) ├───┤ X ├──────────────
     ├────────────────┤   └─╥─┘      ┌───┐
q_1: ┤ Delay(100[dt]) ├─────╫────────┤ X ├───
     └────────────────┘     ║        └─╥─┘
                       ┌────╨────┐┌────╨────┐
c: 1/══════════════════╡ c_0=0x1 ╞╡ c_0=0x1 ╞
                       └─────────┘└─────────┘
```

Note that this scheduling might be inefficient in some cases, because the second conditional operation can start without waiting the delay of 100 dt. However, such optimization should be done by another pass, otherwise scheduling may break topological ordering of the original circuit.

Realistic control flow scheduling respecting for microarcitecture:

In the dispersive QND readout scheme, qubit is measured with microwave stimulus to qubit (Q) followed by resonator ring-down (depopulation). This microwave signal is recorded in the buffer memory (B) with hardware kernel, then a discriminated (D) binary value is moved to the classical register (C). The sequence from t0 to t1 of the measure instruction interval might be modeled as follows:

```python
Q ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
B ░░▒▒▒▒▒▒▒▒░░░░░░░░░
D ░░░░░░░░░░▒▒▒▒▒▒░░░
C ░░░░░░░░░░░░░░░░▒▒░
```

However, `QuantumCircuit` representation is not enough accurate to represent this model. In the circuit representation, thus `Qubit` is occupied by the stimulus microwave signal during the first half of the interval, and `Clbit` is only occupied at the very end of the interval.

This precise model may induce weird edge case.

```python
        ┌───┐
q_0: ───┤ X ├──────
        └─╥─┘   ┌─┐
q_1: ─────╫─────┤M├
     ┌────╨────┐└╥┘
c: 1/╡ c_0=0x1 ╞═╩═
     └─────────┘ 0
```

In this example, user may intend to measure the state of `q_1`, after `XGate` is applied to the `q_0`. This is correct interpretation from viewpoint of the topological node ordering, i.e. x gate node come in front of the measure node. However, according to the measurement model above, the data in the register is unchanged during the stimulus, thus two nodes are simultaneously operated. If one alap-schedule this circuit, it may return following circuit.

```python
     ┌────────────────┐   ┌───┐
q_0: ┤ Delay(500[dt]) ├───┤ X ├──────
     └────────────────┘   └─╥─┘   ┌─┐
q_1: ───────────────────────╫─────┤M├
                       ┌────╨────┐└╥┘
c: 1/══════════════════╡ c_0=0x1 ╞═╩═
                       └─────────┘ 0
```

Note that there is no delay on `q_1` wire, and the measure instruction immediately start after t=0, while the conditional gate starts after the delay. It looks like the topological ordering between the nodes are flipped in the scheduled view. This behavior can be understood by considering the control flow model described above,

```python
: Quantum Circuit, first-measure
0 ░░░░░░░░░░░░▒▒▒▒▒▒░
1 ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░

: In wire q0
Q ░░░░░░░░░░░░░░░▒▒▒░
C ░░░░░░░░░░░░▒▒░░░░░

: In wire q1
Q ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
B ░░▒▒▒▒▒▒▒▒░░░░░░░░░
D ░░░░░░░░░░▒▒▒▒▒▒░░░
C ░░░░░░░░░░░░░░░░▒▒░
```

Since there is no qubit register (Q0, Q1) overlap, the node ordering is determined by the shared classical register C. As you can see, the execution order is still preserved on C, i.e. read C then apply `XGate`, finally store the measured outcome in C. Because `DAGOpNode` cannot define different durations for associated registers, the time ordering of two nodes is inverted anyways.

This behavior can be controlled by `clbit_write_latency` and `conditional_latency`. The former parameter determines the delay of the register write-access from the beginning of the measure instruction t0, and another parameter determines the delay of conditional gate operation from t0 which comes from the register read-access. These information might be found in the backend configuration and then should be copied to the pass manager property set before the pass is called.

By default latencies, the alap-scheduled circuit of above example may become

```python
        ┌───┐
q_0: ───┤ X ├──────
        └─╥─┘   ┌─┐
q_1: ─────╫─────┤M├
     ┌────╨────┐└╥┘
c: 1/╡ c_0=0x1 ╞═╩═
     └─────────┘ 0
```

If the backend microarchitecture supports smart scheduling of the control flow, i.e. it may separately schedule qubit and classical register, insertion of the delay yields unnecessary longer total execution time.

```python
: Quantum Circuit, first-xgate
0 ░▒▒▒░░░░░░░░░░░░░░░
1 ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░

: In wire q0
Q ░▒▒▒░░░░░░░░░░░░░░░
C ░░░░░░░░░░░░░░░░░░░ (zero latency)

: In wire q1
Q ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
C ░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░ (zero latency, scheduled after C0 read-access)
```

However this result is much more intuitive in the topological ordering view. If finite conditional latency is provided, for example, 30 dt, the circuit is scheduled as follows.

```python
     ┌───────────────┐   ┌───┐
q_0: ┤ Delay(30[dt]) ├───┤ X ├──────
     ├───────────────┤   └─╥─┘   ┌─┐
q_1: ┤ Delay(30[dt]) ├─────╫─────┤M├
     └───────────────┘┌────╨────┐└╥┘
c: 1/═════════════════╡ c_0=0x1 ╞═╩═
                      └─────────┘ 0
```

with the timing model:

```python
: Quantum Circuit, first-xgate
0 ░░▒▒▒░░░░░░░░░░░░░░░
1 ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░

: In wire q0
Q ░░▒▒▒░░░░░░░░░░░░░░░
C ░▒░░░░░░░░░░░░░░░░░░ (30dt latency)

: In wire q1
Q ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
C ░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░
```

See [https://arxiv.org/abs/2102.01682](https://arxiv.org/abs/2102.01682) for more details.

### Working with preset [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")

By default Qiskit includes functions to build preset [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") objects. These preset passmangers are what get used by the [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") function for each optimization level. If you’d like to work directly with a preset pass manager you can use the [`generate_preset_pass_manager()`](qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager "qiskit.transpiler.preset_passmanagers.generate_preset_pass_manager") function to easily generate one. For example:

```python
from qiskit.transpiler.preset_passmanager import generate_preset_pass_manager
from qiskit.providers.fake_provider import FakeLagosV2

backend = FakeLagosV2()
pass_manager = generate_preset_pass_manager(3, backend)
```

which will generate a [`StagedPassManager`](qiskit.transpiler.StagedPassManager "qiskit.transpiler.StagedPassManager") object for optimization level 3 targetting the [`FakeLagosV2`](qiskit.providers.fake_provider.FakeLagosV2 "qiskit.providers.fake_provider.FakeLagosV2") backend (equivalent to what is used internally by [`transpile()`](qiskit.compiler.transpile "qiskit.compiler.transpile") with `backend=FakeLagosV2()` and `optimization_level=3`). You can use this just like working with any other [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager"). However, because it is a [`StagedPassManager`](qiskit.transpiler.StagedPassManager "qiskit.transpiler.StagedPassManager") it also makes it easy to compose and/or replace stages of the pipeline. For example, if you wanted to run a custom scheduling stage using dynamical decoupling (via the [`PadDynamicalDecoupling`](qiskit.transpiler.passes.PadDynamicalDecoupling "qiskit.transpiler.passes.PadDynamicalDecoupling") pass) and also add initial logical optimization prior to routing you would do something like (building off the previous example):

```python
from qiskit.circuit.library import XGate, HGate, RXGate, PhaseGate, TGate, TdgGate
from qiskit.transpiler import PassManager
from qiskit.transpiler.passes import ALAPScheduleAnalysis, PadDynamicalDecoupling
from qiskit.transpiler.passes import CXCancellation, InverseCancellation

backend_durations = backend.target.durations()
dd_sequence = [XGate(), XGate()]
scheduling_pm = PassManager([
    ALAPScheduleAnalysis(backend_durations),
    PadDynamicalDecoupling(backend_durations, dd_sequence),
])
inverse_gate_list = [
    HGate(),
    (RXGate(np.pi / 4), RXGate(-np.pi / 4)),
    (PhaseGate(np.pi / 4), PhaseGate(-np.pi / 4)),
    (TGate(), TdgGate()),

])
logical_opt = PassManager([
    CXCancellation(),
    InverseCancellation([HGate(), (RXGate(np.pi / 4), RXGate(-np.pi / 4))
])


# Add pre-layout stage to run extra logical optimization
pass_manager.pre_layout = logical_opt
# Set scheduling stage to custom pass manager
pass_manager.scheduling = scheduling_pm
```

Then when [`run()`](qiskit.transpiler.StagedPassManager#run "qiskit.transpiler.StagedPassManager.run") is called on `pass_manager` the `logical_opt` [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") will be called prior to the `layout` stage and for the `scheduling` stage our custom [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager") `scheduling_pm` will be used.

## Transpiler API

### Transpiler Target

|                                                                                                                                       |                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`Target`](qiskit.transpiler.Target "qiskit.transpiler.Target")(\[description, num\_qubits, dt, ...])                                 | The intent of the `Target` object is to inform Qiskit's compiler about the constraints of a particular backend so the compiler can compile an input circuit to something that works and is optimized for a device. |
| [`InstructionProperties`](qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties")(\[duration, error, ...]) | A representation of the properties of a gate implementation.                                                                                                                                                       |

### Pass Manager Construction

|                                                                                                                                       |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [`StagedPassManager`](qiskit.transpiler.StagedPassManager "qiskit.transpiler.StagedPassManager")(\[stages])                           | A Pass manager pipeline built up of individual stages                  |
| [`PassManager`](qiskit.transpiler.PassManager "qiskit.transpiler.PassManager")(\[passes, max\_iteration])                             | Manager for a set of Passes and their scheduling during transpilation. |
| [`PassManagerConfig`](qiskit.transpiler.PassManagerConfig "qiskit.transpiler.PassManagerConfig")(\[initial\_layout, ...])             | Pass Manager Configuration.                                            |
| [`PropertySet`](qiskit.transpiler.PropertySet "qiskit.transpiler.PropertySet")                                                        | A default dictionary-like object                                       |
| [`FlowController`](qiskit.transpiler.FlowController "qiskit.transpiler.FlowController")(passes, options, ...)                         | Base class for multiple types of working list.                         |
| [`ConditionalController`](qiskit.transpiler.ConditionalController "qiskit.transpiler.ConditionalController")(passes\[, options, ...]) | Implements a set of passes under a certain condition.                  |
| [`DoWhileController`](qiskit.transpiler.DoWhileController "qiskit.transpiler.DoWhileController")(passes\[, options, do\_while])       | Implements a set of passes in a do-while loop.                         |

### Layout and Topology

|                                                                                                              |                                           |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------- |
| [`Layout`](qiskit.transpiler.Layout "qiskit.transpiler.Layout")(\[input\_dict])                              | Two-ways dict to represent a Layout.      |
| [`CouplingMap`](qiskit.transpiler.CouplingMap "qiskit.transpiler.CouplingMap")(\[couplinglist, description]) | Directed graph specifying fixed coupling. |

### Scheduling

|                                                                                                                                          |                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [`InstructionDurations`](qiskit.transpiler.InstructionDurations "qiskit.transpiler.InstructionDurations")(\[instruction\_durations, dt]) | Helper class to provide durations of instructions for scheduling. |

### Fenced Objects

|                                                                                                                           |                                                              |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`FencedDAGCircuit`](qiskit.transpiler.FencedDAGCircuit "qiskit.transpiler.FencedDAGCircuit")(dag\_circuit\_instance)     | A dag circuit that cannot be modified (via remove\_op\_node) |
| [`FencedPropertySet`](qiskit.transpiler.FencedPropertySet "qiskit.transpiler.FencedPropertySet")(property\_set\_instance) | A property set that cannot be written (via \_\_setitem\_\_)  |

### Abstract Passes

|                                                                                                                         |                                                      |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.TransformationPass")(\*args, \*\*kwargs) | A transformation pass: change DAG, not property set. |
| [`AnalysisPass`](qiskit.transpiler.AnalysisPass "qiskit.transpiler.AnalysisPass")(\*args, \*\*kwargs)                   | An analysis pass: change property set, not DAG.      |

### Exceptions

|                                                                                                                         |                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| [`TranspilerError`](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError")(\*message)                   | Exceptions raised during transpilation.                         |
| [`TranspilerAccessError`](qiskit.transpiler.TranspilerAccessError "qiskit.transpiler.TranspilerAccessError")(\*message) | DEPRECATED: Exception of access error in the transpiler passes. |

