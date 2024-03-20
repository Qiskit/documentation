---
title: pulse
description: API reference for qiskit.pulse
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.pulse
---

<span id="module-qiskit.pulse" />

<span id="qiskit-pulse" />

<span id="pulse-qiskit-pulse" />

# Pulse

<span id="module-qiskit.pulse" />

`qiskit.pulse`

Qiskit-Pulse is a pulse-level quantum programming kit. This lower level of programming offers the user more control than programming with [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")s.

Extracting the greatest performance from quantum hardware requires real-time pulse-level instructions. Pulse answers that need: it enables the quantum physicist *user* to specify the exact time dynamics of an experiment. It is especially powerful for error mitigation techniques.

The input is given as arbitrary, time-ordered signals (see: [Instructions](#pulse-insts)) scheduled in parallel over multiple virtual hardware or simulator resources (see: [Channels](#pulse-channels)). The system also allows the user to recover the time dynamics of the measured output.

This is sufficient to allow the quantum physicist to explore and correct for noise in a quantum system.

<span id="module-qiskit.pulse.configuration" />

Configurations for pulse experiments.

<span id="module-qiskit.pulse.instructions" />

<span id="instructions-qiskit-pulse-instructions" />

<span id="pulse-insts" />

## Instructions

<span id="module-qiskit.pulse" />

`qiskit.pulse.instructions`

The `instructions` module holds the various [`Instruction`](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.Instruction")s which are supported by Qiskit Pulse. Instructions have operands, which typically include at least one [`Channel`](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") specifying where the instruction will be applied.

Every instruction has a duration, whether explicitly included as an operand or implicitly defined. For instance, a [`ShiftPhase`](qiskit.pulse.instructions.ShiftPhase "qiskit.pulse.instructions.ShiftPhase") instruction can be instantiated with operands *phase* and *channel*, for some float `phase` and a [`Channel`](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") `channel`:

```python
ShiftPhase(phase, channel)
```

The duration of this instruction is implicitly zero. On the other hand, the [`Delay`](qiskit.pulse.instructions.Delay "qiskit.pulse.instructions.Delay") instruction takes an explicit duration:

```python
Delay(duration, channel)
```

An instruction can be added to a [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule"), which is a sequence of scheduled Pulse `Instruction` s over many channels. `Instruction` s and `Schedule` s implement the same interface.

|                                                                                                                                      |                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Acquire`](qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.Acquire")(duration, channel\[, mem\_slot, ...])             | The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g.                                                                                   |
| [`Call`](qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call")(subroutine\[, value\_dict, name])                          | Pulse `Call` instruction.                                                                                                                                                     |
| [`Reference`](qiskit.pulse.instructions.Reference "qiskit.pulse.instructions.Reference")(name, \*extra\_keys)                        | Pulse compiler directive that refers to a subroutine.                                                                                                                         |
| [`Delay`](qiskit.pulse.instructions.Delay "qiskit.pulse.instructions.Delay")(duration, channel\[, name])                             | A blocking instruction with no other effect.                                                                                                                                  |
| [`Play`](qiskit.pulse.instructions.Play "qiskit.pulse.instructions.Play")(pulse, channel\[, name])                                   | This instruction is responsible for applying a pulse on a channel.                                                                                                            |
| [`RelativeBarrier`](qiskit.pulse.instructions.RelativeBarrier "qiskit.pulse.instructions.RelativeBarrier")(\*channels\[, name])      | Pulse `RelativeBarrier` directive.                                                                                                                                            |
| [`SetFrequency`](qiskit.pulse.instructions.SetFrequency "qiskit.pulse.instructions.SetFrequency")(frequency, channel\[, name])       | Set the channel frequency.                                                                                                                                                    |
| [`ShiftFrequency`](qiskit.pulse.instructions.ShiftFrequency "qiskit.pulse.instructions.ShiftFrequency")(frequency, channel\[, name]) | Shift the channel frequency away from the current frequency.                                                                                                                  |
| [`SetPhase`](qiskit.pulse.instructions.SetPhase "qiskit.pulse.instructions.SetPhase")(phase, channel\[, name])                       | The set phase instruction sets the phase of the proceeding pulses on that channel to `phase` radians.                                                                         |
| [`ShiftPhase`](qiskit.pulse.instructions.ShiftPhase "qiskit.pulse.instructions.ShiftPhase")(phase, channel\[, name])                 | The shift phase instruction updates the modulation phase of proceeding pulses played on the same [`Channel`](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel"). |
| [`Snapshot`](qiskit.pulse.instructions.Snapshot "qiskit.pulse.instructions.Snapshot")(label\[, snapshot\_type, name])                | An instruction targeted for simulators, to capture a moment in the simulation.                                                                                                |
| [`TimeBlockade`](qiskit.pulse.instructions.TimeBlockade "qiskit.pulse.instructions.TimeBlockade")(duration, channel\[, name])        | Pulse `TimeBlockade` directive.                                                                                                                                               |

These are all instances of the same base class:

<span id="qiskit.pulse.instructions.Instruction" />

`qiskit.pulse.instructions.Instruction(operands, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/instructions/instruction.py "view source code")

The smallest schedulable unit: a single instruction. It has a fixed duration and specified channels.

Instruction initializer.

**Parameters**

*   **operands** ([*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")) – The argument list.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Optional display name for this instruction.

<span id="module-qiskit.pulse.library" />

<span id="pulse-library-qiskit-pulse-library" />

## Pulse Library

<span id="module-qiskit.pulse" />

`qiskit.pulse.library`

This library provides Pulse users with convenient methods to build Pulse waveforms.

A pulse programmer can choose from one of several [Pulse Models](#pulse-models) such as [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform") and [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse") to create a pulse program. The [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform") model directly stores the waveform data points in each class instance. This model provides the most flexibility to express arbitrary waveforms and allows a rapid prototyping of new control techniques. However, this model is typically memory inefficient and might be hard to scale to large-size quantum processors. Several waveform subclasses are defined by [Waveform Pulse Representation](#waveforms), but a user can also directly instantiate the [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform") class with `samples` argument which is usually a complex numpy array or any kind of array-like data.

In contrast, the [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse") model only stores the function and its parameters that generate the waveform in a class instance. It thus provides greater memory efficiency at the price of less flexibility in the waveform. This model also defines a small set of pulse subclasses in [Parametric Pulse Representation](#symbolic-pulses) which are commonly used in superconducting quantum processors. An instance of these subclasses can be serialized in the [QPY Format](qpy#qpy-format) while keeping the memory-efficient parametric representation of waveforms. Note that [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform") object can be generated from an instance of a [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse") which will set values for the parameters and sample the parametric expression to create the [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

<span id="id1" />

### Pulse Models

|                                                                                                                                                |                                                                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform")(samples\[, name, epsilon, ...])                                    | A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.             |
| [`ScalableSymbolicPulse`](qiskit.pulse.library.ScalableSymbolicPulse "qiskit.pulse.library.ScalableSymbolicPulse")(pulse\_type, duration, ...) | Subclass of [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse") for pulses with scalable envelope. |
| [`SymbolicPulse`](qiskit.pulse.library.SymbolicPulse "qiskit.pulse.library.SymbolicPulse")(pulse\_type, duration\[, ...])                      | The pulse representation model with parameters and symbolic expressions.                                                                  |
| [`ParametricPulse`](qiskit.pulse.library.ParametricPulse "qiskit.pulse.library.ParametricPulse")(duration\[, name, ...])                       | The abstract superclass for parametric pulses.                                                                                            |

<span id="waveforms" />

### Waveform Pulse Representation

### constant

<span id="qiskit.pulse.library.constant" />

`qiskit.pulse.library.constant(duration, amp, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates constant-sampled [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, samples from the function:

$$
f(x) = A
$$

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.constant()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including constant() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Constant(…).get\_waveform(). Note that complex value support for the amp parameter is pending deprecation in the SymbolicPulse library. It is therefore recommended to use two float values for (amp, angle) instead of complex amp
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Complex pulse amplitude.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### zero

<span id="qiskit.pulse.library.zero" />

`qiskit.pulse.library.zero(duration, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates zero-sampled [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

Samples from the function:

$$
f(x) = 0
$$

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.zero()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including zero() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Constant(amp=0,…).get\_waveform().
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### square

<span id="qiskit.pulse.library.square" />

`qiskit.pulse.library.square(duration, amp, freq=None, phase=0, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates square wave [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $T=$ `period`, and $\phi=$ `phase`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A \text{sign}\left[ \sin\left(\frac{2 \pi x}{T} + 2\phi\right) \right]
$$

with the convention $\text{sign}(0) = 1$.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.square()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including square() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Square(…).get\_waveform(). Note that pulse.Square() does not support complex values for amp, and that the phase is defined differently. See documentation.
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude. Wave range is $[-$ `amp` $,$ `amp` $]$.
*   **freq** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse frequency, units of 1./dt. If `None` defaults to 1./duration.
*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse phase.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### sawtooth

<span id="qiskit.pulse.library.sawtooth" />

`qiskit.pulse.library.sawtooth(duration, amp, freq=None, phase=0, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates sawtooth wave [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $T=$ `period`, and $\phi=$ `phase`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = 2 A \left( g(x) - \left\lfloor \frac{1}{2} + g(x) \right\rfloor\right)
$$

where $g(x) = x/T + \phi/\pi$.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.sawtooth()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including sawtooth() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Sawtooth(…).get\_waveform(). Note that pulse.Sawtooth() does not support complex values for amp. Instead, use two float values for (amp, angle). Also note that the phase is defined differently, such that 2\*pi phase shifts by a full cycle.
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude. Wave range is $[-$ `amp` $,$ `amp` $]$.
*   **freq** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse frequency, units of 1./dt. If `None` defaults to 1./duration.
*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse phase.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

**Example**

```python
import matplotlib.pyplot as plt
from qiskit.pulse.library import sawtooth
import numpy as np

duration = 100
amp = 1
freq = 1 / duration
sawtooth_wave = np.real(sawtooth(duration, amp, freq).samples)
plt.plot(range(duration), sawtooth_wave)
plt.show()
```

![../\_images/pulse-1.png](/images/api/qiskit/0.44/pulse-1.png)

### triangle

<span id="qiskit.pulse.library.triangle" />

`qiskit.pulse.library.triangle(duration, amp, freq=None, phase=0, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates triangle wave [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $T=$ `period`, and $\phi=$ `phase`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A \left(-2\left|\text{sawtooth}(x, A, T, \phi)\right| + 1\right)
$$

This a non-sinusoidal wave with linear ramping.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.triangle()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including triangle() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Triangle(…).get\_waveform(). Note that pulse.Triangle() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude. Wave range is $[-$ `amp` $,$ `amp` $]$.
*   **freq** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse frequency, units of 1./dt. If `None` defaults to 1./duration.
*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse phase.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

**Example**

```python
import matplotlib.pyplot as plt
from qiskit.pulse.library import triangle
import numpy as np

duration = 100
amp = 1
freq = 1 / duration
triangle_wave = np.real(triangle(duration, amp, freq).samples)
plt.plot(range(duration), triangle_wave)
plt.show()
```

![../\_images/pulse-2.png](/images/api/qiskit/0.44/pulse-2.png)

### cos

<span id="qiskit.pulse.library.cos" />

`qiskit.pulse.library.cos(duration, amp, freq=None, phase=0, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates cosine wave [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $\omega=$ `freq`, and $\phi=$ `phase`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A \cos(2 \pi \omega x + \phi)
$$

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.cos()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including cos() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Cos(…).get\_waveform(). Note that pulse.Cos() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude.
*   **freq** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse frequency, units of 1/dt. If `None` defaults to single cycle.
*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse phase.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### sin

<span id="qiskit.pulse.library.sin" />

`qiskit.pulse.library.sin(duration, amp, freq=None, phase=0, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates sine wave [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $\omega=$ `freq`, and $\phi=$ `phase`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A \sin(2 \pi \omega x + \phi)
$$

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.sin()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including sin() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Sin(…).get\_waveform(). Note that pulse.Sin() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude.
*   **freq** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse frequency, units of 1/dt. If `None` defaults to single cycle.
*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Pulse phase.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### gaussian

<span id="qiskit.pulse.library.gaussian" />

`qiskit.pulse.library.gaussian(duration, amp, sigma, name=None, zero_ends=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates unnormalized gaussian [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp` and $\sigma=$ `sigma`, applies the `midpoint` sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A\exp\left(\left(\frac{x - \mu}{2\sigma}\right)^2 \right),
$$

with the center $\mu=$ `duration/2`.

If `zero_ends==True`, each output sample $y$ is modified according to:

$$
y \mapsto A\frac{y-y^*}{A-y^*},
$$

where $y^*$ is the value of the endpoint samples. This sets the endpoints to $0$ while preserving the amplitude at the center. If $A=y^*$, $y$ is set to $1$. By default, the endpoints are at `x = -1, x = duration + 1`.

Integrated area under the full curve is `amp * np.sqrt(2*np.pi*sigma**2)`

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.gaussian()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including gaussian() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Gaussian(…).get\_waveform(). Note that complex value support for the amp parameter is pending deprecation in the SymbolicPulse library. It is therefore recommended to use two float values for (amp, angle) instead of complex amp
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude at `duration/2`.
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of pulse.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.
*   **zero\_ends** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True, zero ends at `x = -1, x = duration + 1`, but rescale to preserve amp.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### gaussian\_deriv

<span id="qiskit.pulse.library.gaussian_deriv" />

`qiskit.pulse.library.gaussian_deriv(duration, amp, sigma, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates unnormalized gaussian derivative [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp` and $\sigma=$ `sigma` applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = -A\frac{(x - \mu)}{\sigma^2}\exp
    \left(-\frac{1}{2}\left(\frac{x - \mu}{\sigma}\right)^2 \right)
$$

i.e. the derivative of the Gaussian function, with center $\mu=$ `duration/2`.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.gaussian_deriv()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including gaussian\_deriv() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.GaussianDeriv(…).get\_waveform(). Note that pulse.GaussianDeriv() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude of corresponding Gaussian at the pulse center (`duration/2`).
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of pulse.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### sech

<span id="qiskit.pulse.library.sech" />

`qiskit.pulse.library.sech(duration, amp, sigma, name=None, zero_ends=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates unnormalized sech [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp` and $\sigma=$ `sigma`, applies the `midpoint` sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = A\text{sech}\left(\frac{x-\mu}{\sigma} \right)
$$

with the center $\mu=$ `duration/2`.

If `zero_ends==True`, each output sample $y$ is modified according to:

$$
y \mapsto A\frac{y-y^*}{A-y^*},
$$

where $y^*$ is the value of the endpoint samples. This sets the endpoints to $0$ while preserving the amplitude at the center. If $A=y^*$, $y$ is set to $1$. By default, the endpoints are at `x = -1, x = duration + 1`.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.sech()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including sech() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Sech(…).get\_waveform(). Note that pulse.Sech() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude at duration/2.
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of pulse.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of pulse.
*   **zero\_ends** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True, zero ends at `x = -1, x = duration + 1`, but rescale to preserve amp.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### sech\_deriv

<span id="qiskit.pulse.library.sech_deriv" />

`qiskit.pulse.library.sech_deriv(duration, amp, sigma, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates unnormalized sech derivative [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $A=$ `amp`, $\sigma=$ `sigma`, and center $\mu=$ `duration/2`, applies the midpoint sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = \frac{d}{dx}\left[A\text{sech}\left(\frac{x-\mu}{\sigma} \right)\right],
$$

i.e. the derivative of $\text{sech}$.

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.sech_deriv()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including sech\_deriv() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.SechDeriv(…).get\_waveform(). Note that pulse.SechDeriv() does not support complex values for amp. Instead, use two float values for (amp, angle).
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude at center.
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of pulse.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of pulse.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### gaussian\_square

<span id="qiskit.pulse.library.gaussian_square" />

`qiskit.pulse.library.gaussian_square(duration, amp, sigma, risefall=None, width=None, name=None, zero_ends=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates gaussian square [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform").

For $d=$ `duration`, $A=$ `amp`, $\sigma=$ `sigma`, and $r=$ `risefall`, applies the `midpoint` sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
\begin{split}f(x) = \begin{cases}
            g(x - r) ) & x\leq r \\
            A & r\leq x\leq d-r \\
            g(x - (d - r)) & d-r\leq x
        \end{cases}\end{split}
$$

where $g(x)$ is the Gaussian function sampled from in [`gaussian()`](#qiskit.pulse.library.gaussian "qiskit.pulse.library.gaussian") with $A=$ `amp`, $\mu=1$, and $\sigma=$ `sigma`. I.e. $f(x)$ represents a square pulse with smooth Gaussian edges.

If `zero_ends == True`, the samples for the Gaussian ramps are remapped as in [`gaussian()`](#qiskit.pulse.library.gaussian "qiskit.pulse.library.gaussian").

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.gaussian_square()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including gaussian\_square() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.GaussianSquare(…).get\_waveform(). Note that complex value support for the amp parameter is pending deprecation in the SymbolicPulse library. It is therefore recommended to use two float values for (amp, angle) instead of complex amp
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude.
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of Gaussian rise/fall portion of the pulse.
*   **risefall** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – Number of samples over which pulse rise and fall happen. Width of square portion of pulse will be `duration-2*risefall`.
*   **width** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") *| None*) – The duration of the embedded square pulse. Only one of `width` or `risefall` should be specified as the functional form requires `width = duration - 2 * risefall`.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.
*   **zero\_ends** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True, zero ends at `x = -1, x = duration + 1`, but rescale to preserve amp.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If `risefall` and `width` arguments are inconsistent or not enough info.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

### drag

<span id="qiskit.pulse.library.drag" />

`qiskit.pulse.library.drag(duration, amp, sigma, beta, name=None, zero_ends=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/library/discrete.py "view source code")

Generates Y-only correction DRAG [`Waveform`](qiskit.pulse.library.Waveform "qiskit.pulse.library.Waveform") for standard nonlinear oscillator (SNO) \[1].

For $A=$ `amp`, $\sigma=$ `sigma`, and $\beta=$ `beta`, applies the `midpoint` sampling strategy to generate a discrete pulse sampled from the continuous function:

$$
f(x) = g(x) + i \beta h(x),
$$

where $g(x)$ is the function sampled in [`gaussian()`](#qiskit.pulse.library.gaussian "qiskit.pulse.library.gaussian"), and $h(x)$ is the function sampled in [`gaussian_deriv()`](#qiskit.pulse.library.gaussian_deriv "qiskit.pulse.library.gaussian_deriv").

If `zero_ends == True`, the samples from $g(x)$ are remapped as in [`gaussian()`](#qiskit.pulse.library.gaussian "qiskit.pulse.library.gaussian").

<Admonition title="Deprecated since version 0.25.0_pending" type="danger">
  The function `qiskit.pulse.library.discrete.drag()` is pending deprecation as of qiskit-terra 0.25.0. It will be marked deprecated in a future release, and then removed no earlier than 3 months after the release date. The discrete pulses library, including drag() is pending deprecation. Instead, use the SymbolicPulse library to create the waveform with pulse.Drag(…).get\_waveform(). Note that complex value support for the amp parameter is pending deprecation in the SymbolicPulse library. It is therefore recommended to use two float values for (amp, angle) instead of complex amp
</Admonition>

**References**

1.  [*Gambetta, J. M., Motzoi, F., Merkel, S. T. & Wilhelm, F. K. “Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator.” Phys. Rev. A 83, 012308 (2011).*](http://dx.doi.org/10.1103/PhysRevA.83.012308)

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration of pulse. Must be greater than zero.
*   **amp** ([*complex*](https://docs.python.org/3/library/functions.html#complex "(in Python v3.12)")) – Pulse amplitude at center `duration/2`.
*   **sigma** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Width (standard deviation) of pulse.
*   **beta** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Y correction amplitude. For the SNO this is $\beta=-\frac{\lambda_1^2}{4\Delta_2}$. Where $\lambda_1$ is the relative coupling strength between the first excited and second excited states and $\Delta_2$ is the detuning between the respective excited states.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse.
*   **zero\_ends** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – If True, zero ends at `x = -1, x = duration + 1`, but rescale to preserve amp.

**Return type**

[*Waveform*](qiskit.pulse.library.Waveform "qiskit.pulse.library.waveform.Waveform")

<span id="symbolic-pulses" />

### Parametric Pulse Representation

|                                                                                                                                                          |                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Constant`](qiskit.pulse.library.Constant_class.rst#qiskit.pulse.library.Constant "qiskit.pulse.library.Constant")(duration, amp\[, angle, name, ...])  | A simple constant pulse, with an amplitude value and a duration:                                                                                         |
| [`Drag`](qiskit.pulse.library.Drag_class.rst#qiskit.pulse.library.Drag "qiskit.pulse.library.Drag")(duration, amp, sigma, beta\[, angle, ...])           | The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component and lifting applied. |
| [`Gaussian`](qiskit.pulse.library.Gaussian_class.rst#qiskit.pulse.library.Gaussian "qiskit.pulse.library.Gaussian")(duration, amp, sigma\[, angle, ...]) | A lifted and truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2):        |
| [`GaussianSquare`](qiskit.pulse.library.GaussianSquare "qiskit.pulse.library.GaussianSquare")(duration, amp, sigma\[, ...])                              | A square pulse with a Gaussian shaped risefall on both sides lifted such that its first sample is zero.                                                  |
| [`GaussianSquareDrag`](qiskit.pulse.library.GaussianSquareDrag "qiskit.pulse.library.GaussianSquareDrag")(duration, amp, sigma, beta)                    | A square pulse with a Drag shaped rise and fall                                                                                                          |
| [`gaussian_square_echo`](qiskit.pulse.library.gaussian_square_echo "qiskit.pulse.library.gaussian_square_echo")(duration, amp, sigma\[, ...])            | An echoed Gaussian square pulse with an active tone overlaid on it.                                                                                      |
| [`GaussianDeriv`](qiskit.pulse.library.GaussianDeriv "qiskit.pulse.library.GaussianDeriv")(duration, amp, sigma\[, angle, ...])                          | An unnormalized Gaussian derivative pulse.                                                                                                               |
| [`Sin`](qiskit.pulse.library.Sin_class.rst#qiskit.pulse.library.Sin "qiskit.pulse.library.Sin")(duration, amp, phase\[, freq, angle, ...])               | A sinusoidal pulse.                                                                                                                                      |
| [`Cos`](qiskit.pulse.library.Cos_class.rst#qiskit.pulse.library.Cos "qiskit.pulse.library.Cos")(duration, amp, phase\[, freq, angle, ...])               | A cosine pulse.                                                                                                                                          |
| [`Sawtooth`](qiskit.pulse.library.Sawtooth_class.rst#qiskit.pulse.library.Sawtooth "qiskit.pulse.library.Sawtooth")(duration, amp, phase\[, freq, ...])  | A sawtooth pulse.                                                                                                                                        |
| [`Triangle`](qiskit.pulse.library.Triangle_class.rst#qiskit.pulse.library.Triangle "qiskit.pulse.library.Triangle")(duration, amp, phase\[, freq, ...])  | A triangle wave pulse.                                                                                                                                   |
| [`Square`](qiskit.pulse.library.Square_fun.rst#qiskit.pulse.library.Square "qiskit.pulse.library.Square")(duration, amp, phase\[, freq, angle, ...])     | A square wave pulse.                                                                                                                                     |
| [`Sech`](qiskit.pulse.library.Sech_fun.rst#qiskit.pulse.library.Sech "qiskit.pulse.library.Sech")(duration, amp, sigma\[, angle, name, ...])             | An unnormalized sech pulse.                                                                                                                              |
| [`SechDeriv`](qiskit.pulse.library.SechDeriv "qiskit.pulse.library.SechDeriv")(duration, amp, sigma\[, angle, ...])                                      | An unnormalized sech derivative pulse.                                                                                                                   |

<span id="module-qiskit.pulse.channels" />

<span id="channels-qiskit-pulse-channels" />

<span id="pulse-channels" />

## Channels

<span id="module-qiskit.pulse" />

`qiskit.pulse.channels`

Pulse is meant to be agnostic to the underlying hardware implementation, while still allowing low-level control. Therefore, our signal channels are *virtual* hardware channels. The backend which executes our programs is responsible for mapping these virtual channels to the proper physical channel within the quantum control hardware.

Channels are characterized by their type and their index. Channels include:

*   transmit channels, which should subclass `PulseChannel`
*   receive channels, such as [`AcquireChannel`](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")
*   non-signal “channels” such as [`SnapshotChannel`](qiskit.pulse.channels.SnapshotChannel "qiskit.pulse.channels.SnapshotChannel"), [`MemorySlot`](qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot") and `RegisterChannel`.

Novel channel types can often utilize the [`ControlChannel`](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel"), but if this is not sufficient, new channel types can be created. Then, they must be supported in the PulseQobj schema and the assembler. Channels are characterized by their type and their index. See each channel type below to learn more.

|                                                                                                                        |                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`DriveChannel`](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")(\*args, \*\*kwargs)          | Drive channels transmit signals to qubits which enact gate operations.                         |
| [`MeasureChannel`](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")(\*args, \*\*kwargs)    | Measure channels transmit measurement stimulus pulses for readout.                             |
| [`AcquireChannel`](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")(\*args, \*\*kwargs)    | Acquire channels are used to collect data.                                                     |
| [`ControlChannel`](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")(\*args, \*\*kwargs)    | Control channels provide supplementary control over the qubit to the drive channel.            |
| [`RegisterSlot`](qiskit.pulse.channels.RegisterSlot "qiskit.pulse.channels.RegisterSlot")(\*args, \*\*kwargs)          | Classical resister slot channels represent classical registers (low-latency classical memory). |
| [`MemorySlot`](qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")(\*args, \*\*kwargs)                | Memory slot channels represent classical memory storage.                                       |
| [`SnapshotChannel`](qiskit.pulse.channels.SnapshotChannel "qiskit.pulse.channels.SnapshotChannel")(\*args, \*\*kwargs) | Snapshot channels are used to specify instructions for simulators.                             |

All channels are children of the same abstract base class:

<span id="qiskit.pulse.channels.Channel" />

`qiskit.pulse.channels.Channel(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/channels.py "view source code")

Base class of channels. Channels provide a Qiskit-side label for typical quantum control hardware signal channels. The final label -> physical channel mapping is the responsibility of the hardware backend. For instance, `DriveChannel(0)` holds instructions which the backend should map to the signal line driving gate operations on the qubit labeled (indexed) 0.

When serialized channels are identified by their serialized name `<prefix><index>`. The type of the channel is interpreted from the prefix, and the index often (but not always) maps to the qubit index. All concrete channel classes must have a `prefix` class attribute (and instances of that class have an index attribute). Base classes which have `prefix` set to `None` are prevented from being instantiated.

To implement a new channel inherit from [`Channel`](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel") and provide a unique string identifier for the `prefix` class attribute.

Channel class.

**Parameters**

**index** – Index of channel.

<span id="module-qiskit.pulse.schedule" />

## Schedules

Schedules are Pulse programs. They describe instruction sequences for the control hardware. The Schedule is one of the most fundamental objects to this pulse-level programming module. A `Schedule` is a representation of a *program* in Pulse. Each schedule tracks the time of each instruction occuring in parallel over multiple signal *channels*.

|                                                                                                    |                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule")(\*schedules\[, name, metadata])        | A quantum program *schedule* with exact time constraints for its instructions, operating over all input signal *channels* and supporting special syntaxes for building. |
| [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")(\[name, metadata, ...]) | Time-ordered sequence of instructions with alignment context.                                                                                                           |

<span id="module-qiskit.pulse.transforms" />

<span id="pulse-transforms-qiskit-pulse-transforms" />

## Pulse Transforms

<span id="module-qiskit.pulse" />

`qiskit.pulse.transforms`

The pulse transforms provide transformation routines to reallocate and optimize pulse programs for backends.

<span id="pulse-alignments" />

### Alignments

The alignment transforms define alignment policies of instructions in [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock"). These transformations are called to create [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule")s from [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock")s.

|                                                                                                                  |                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`AlignEquispaced`](qiskit.pulse.transforms.AlignEquispaced "qiskit.pulse.transforms.AlignEquispaced")(duration) | Align instructions with equispaced interval within a specified duration. |
| [`AlignFunc`](qiskit.pulse.transforms.AlignFunc "qiskit.pulse.transforms.AlignFunc")(duration, func)             | Allocate instructions at position specified by callback function.        |
| [`AlignLeft`](qiskit.pulse.transforms.AlignLeft "qiskit.pulse.transforms.AlignLeft")()                           | Align instructions in as-soon-as-possible manner.                        |
| [`AlignRight`](qiskit.pulse.transforms.AlignRight "qiskit.pulse.transforms.AlignRight")()                        | Align instructions in as-late-as-possible manner.                        |
| [`AlignSequential`](qiskit.pulse.transforms.AlignSequential "qiskit.pulse.transforms.AlignSequential")()         | Align instructions sequentially.                                         |

These are all subtypes of the abstract base class [`AlignmentKind`](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.AlignmentKind").

<span id="qiskit.pulse.transforms.AlignmentKind" />

`qiskit.pulse.transforms.AlignmentKind(context_params)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/alignments.py "view source code")

An abstract class for schedule alignment.

Create new context.

<span id="pulse-canonical-transform" />

### Canonicalization

The canonicalization transforms convert schedules to a form amenable for execution on OpenPulse backends.

### add\_implicit\_acquires

<span id="qiskit.pulse.transforms.add_implicit_acquires" />

`qiskit.pulse.transforms.add_implicit_acquires(schedule, meas_map)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Return a new schedule with implicit acquires from the measurement mapping replaced by explicit ones.

<Admonition title="Warning" type="caution">
  Since new acquires are being added, Memory Slots will be set to match the qubit index. This may overwrite your specification.
</Admonition>

**Parameters**

*   **schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")  *|*[*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")) – Schedule to be aligned.
*   **meas\_map** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]]*) – List of lists of qubits that are measured together.

**Returns**

A `Schedule` with the additional acquisition instructions.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### align\_measures

<span id="qiskit.pulse.transforms.align_measures" />

`qiskit.pulse.transforms.align_measures(schedules, inst_map=None, cal_gate='u3', max_calibration_duration=None, align_time=None, align_all=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Return new schedules where measurements occur at the same physical time.

This transformation will align the first [`Acquire`](qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.Acquire") on every channel to occur at the same time.

Minimum measurement wait time (to allow for calibration pulses) is enforced and may be set with `max_calibration_duration`.

By default only instructions containing a [`AcquireChannel`](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel") or [`MeasureChannel`](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel") will be shifted. If you wish to keep the relative timing of all instructions in the schedule set `align_all=True`.

This method assumes that `MeasureChannel(i)` and `AcquireChannel(i)` correspond to the same qubit and the acquire/play instructions should be shifted together on these channels.

```python
from qiskit import pulse
from qiskit.pulse import transforms

d0 = pulse.DriveChannel(0)
m0 = pulse.MeasureChannel(0)
a0 = pulse.AcquireChannel(0)
mem0 = pulse.MemorySlot(0)

sched = pulse.Schedule()
sched.append(pulse.Play(pulse.Constant(10, 0.5), d0), inplace=True)
sched.append(pulse.Play(pulse.Constant(10, 1.), m0).shift(sched.duration), inplace=True)
sched.append(pulse.Acquire(20, a0, mem0).shift(sched.duration), inplace=True)

sched_shifted = sched << 20

aligned_sched, aligned_sched_shifted = transforms.align_measures([sched, sched_shifted])

assert aligned_sched == aligned_sched_shifted
```

If it is desired to only shift acquisition and measurement stimulus instructions set the flag `align_all=False`:

```python
aligned_sched, aligned_sched_shifted = transforms.align_measures(
    [sched, sched_shifted],
    align_all=False,
)

assert aligned_sched != aligned_sched_shifted
```

**Parameters**

*   **schedules** ([*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")  *|*[*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")*]*) – Collection of schedules to be aligned together
*   **inst\_map** ([*InstructionScheduleMap*](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.instruction_schedule_map.InstructionScheduleMap") *| None*) – Mapping of circuit operations to pulse schedules
*   **cal\_gate** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – The name of the gate to inspect for the calibration time
*   **max\_calibration\_duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – If provided, inst\_map and cal\_gate will be ignored
*   **align\_time** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – If provided, this will be used as final align time.
*   **align\_all** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)") *| None*) – Shift all instructions in the schedule such that they maintain their relative alignment with the shifted acquisition instruction. If `False` only the acquisition and measurement pulse instructions will be shifted.

**Returns**

The input list of schedules transformed to have their measurements aligned.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – If the provided alignment time is negative.

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]

### block\_to\_schedule

<span id="qiskit.pulse.transforms.block_to_schedule" />

`qiskit.pulse.transforms.block_to_schedule(block)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Convert `ScheduleBlock` to `Schedule`.

**Parameters**

**block** ([*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")) – A `ScheduleBlock` to convert.

**Returns**

Scheduled pulse program.

**Raises**

*   [**UnassignedDurationError**](#qiskit.pulse.UnassignedDurationError "qiskit.pulse.UnassignedDurationError") – When any instruction duration is not assigned.
*   [**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When the alignment context duration is shorter than the schedule duration.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

<Admonition title="Note" type="note">
  This transform may insert barriers in between contexts.
</Admonition>

### compress\_pulses

<span id="qiskit.pulse.transforms.compress_pulses" />

`qiskit.pulse.transforms.compress_pulses(schedules)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Optimization pass to replace identical pulses.

**Parameters**

**schedules** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")*]*) – Schedules to compress.

**Returns**

Compressed schedules.

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")]

### flatten

<span id="qiskit.pulse.transforms.flatten" />

`qiskit.pulse.transforms.flatten(program)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Flatten (inline) any called nodes into a Schedule tree with no nested children.

**Parameters**

**program** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Pulse program to remove nested structure.

**Returns**

Flatten pulse program.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When invalid data format is given.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### inline\_subroutines

<span id="qiskit.pulse.transforms.inline_subroutines" />

`qiskit.pulse.transforms.inline_subroutines(program)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Recursively remove call instructions and inline the respective subroutine instructions.

Assigned parameter values, which are stored in the parameter table, are also applied. The subroutine is copied before the parameter assignment to avoid mutation problem.

**Parameters**

**program** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")  *|*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")) – A program which may contain the subroutine, i.e. `Call` instruction.

**Returns**

A schedule without subroutine.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When input program is not valid data format.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule") | [*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")

### pad

<span id="qiskit.pulse.transforms.pad" />

`qiskit.pulse.transforms.pad(schedule, channels=None, until=None, inplace=False, pad_with=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Pad the input Schedule with `Delay``s on all unoccupied timeslots until ``schedule.duration` or `until` if not `None`.

**Parameters**

*   **schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – Schedule to pad.
*   **channels** ([*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*Channel*](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")*] | None*) – Channels to pad. Defaults to all channels in `schedule` if not provided. If the supplied channel is not a member of `schedule` it will be added.
*   **until** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") *| None*) – Time to pad until. Defaults to `schedule.duration` if not provided.
*   **inplace** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Pad this schedule by mutating rather than returning a new schedule.
*   **pad\_with** ([*Type*](https://docs.python.org/3/library/typing.html#typing.Type "(in Python v3.12)")*\[*[*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")*] | None*) – Pulse `Instruction` subclass to be used for padding. Default to [`Delay`](qiskit.pulse.instructions.Delay "qiskit.pulse.instructions.Delay") instruction.

**Returns**

The padded schedule.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When non pulse instruction is set to pad\_with.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### remove\_directives

<span id="qiskit.pulse.transforms.remove_directives" />

`qiskit.pulse.transforms.remove_directives(schedule)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Remove directives.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – A schedule to remove compiler directives.

**Returns**

A schedule without directives.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

### remove\_trivial\_barriers

<span id="qiskit.pulse.transforms.remove_trivial_barriers" />

`qiskit.pulse.transforms.remove_trivial_barriers(schedule)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/canonicalization.py "view source code")

Remove trivial barriers with 0 or 1 channels.

**Parameters**

**schedule** ([*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")) – A schedule to remove trivial barriers.

**Returns**

A schedule without trivial barriers

**Return type**

schedule

<span id="pulse-dag" />

### DAG

The DAG transforms create DAG representation of input program. This can be used for optimization of instructions and equality checks.

### block\_to\_dag

<span id="qiskit.pulse.transforms.block_to_dag" />

`qiskit.pulse.transforms.block_to_dag(block)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/dag.py "view source code")

Convert schedule block instruction into DAG.

`ScheduleBlock` can be represented as a DAG as needed. For example, equality of two programs are efficiently checked on DAG representation.

```python
with pulse.build() as sched1:
    with pulse.align_left():
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
        pulse.shift_phase(1.57, pulse.DriveChannel(2))
        pulse.play(my_gaussian1, pulse.DriveChannel(1))

with pulse.build() as sched2:
    with pulse.align_left():
        pulse.shift_phase(1.57, pulse.DriveChannel(2))
        pulse.play(my_gaussian1, pulse.DriveChannel(1))
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
```

Here the `sched1 `` and ``sched2` are different implementations of the same program, but it is difficult to confirm on the list representation.

Another example is instruction optimization.

```python
with pulse.build() as sched:
    with pulse.align_left():
        pulse.shift_phase(1.57, pulse.DriveChannel(1))
        pulse.play(my_gaussian0, pulse.DriveChannel(0))
        pulse.shift_phase(-1.57, pulse.DriveChannel(1))
```

In above program two `shift_phase` instructions can be cancelled out because they are consecutive on the same drive channel. This can be easily found on the DAG representation.

**Parameters**

**block** (*"ScheduleBlock"*) – A schedule block to be converted.

**Returns**

Instructions in DAG representation.

**Raises**

[**PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.PulseError") – When the context is invalid subclass.

**Return type**

[*PyDAG*](https://qiskit.org/ecosystem/rustworkx/apiref/rustworkx.PyDAG.html#rustworkx.PyDAG "(in rustworkx v0.13.2)")

<span id="pulse-transform-chain" />

### Composite transform

A sequence of transformations to generate a target code.

### target\_qobj\_transform

<span id="qiskit.pulse.transforms.target_qobj_transform" />

`qiskit.pulse.transforms.target_qobj_transform(sched, remove_directives=True)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/transforms/base_transforms.py "view source code")

A basic pulse program transformation for OpenPulse API execution.

**Parameters**

*   **sched** ([*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")  *|*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")  *|*[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*,* [*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")*] |* [*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*Tuple*](https://docs.python.org/3/library/typing.html#typing.Tuple "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*,* [*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")*] |* [*Instruction*](#qiskit.pulse.instructions.Instruction "qiskit.pulse.instructions.instruction.Instruction")*]*) – Input program to transform.
*   **remove\_directives** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Set True to remove compiler directives.

**Returns**

Transformed program for execution.

**Return type**

[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")

<span id="module-qiskit.pulse.builder" />

<span id="id2" />

## Pulse Builder

Use the pulse builder DSL to write pulse programs with an imperative syntax.

<Admonition title="Warning" type="caution">
  The pulse builder interface is still in active development. It may have breaking API changes without deprecation warnings in future releases until otherwise indicated.
</Admonition>

The pulse builder provides an imperative API for writing pulse programs with less difficulty than the [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") API. It contextually constructs a pulse schedule and then emits the schedule for execution. For example, to play a series of pulses on channels is as simple as:

```python
from qiskit import pulse

dc = pulse.DriveChannel
d0, d1, d2, d3, d4 = dc(0), dc(1), dc(2), dc(3), dc(4)

with pulse.build(name='pulse_programming_in') as pulse_prog:
    pulse.play([1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1], d0)
    pulse.play([1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], d1)
    pulse.play([1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0], d2)
    pulse.play([1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0], d3)
    pulse.play([1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0], d4)

pulse_prog.draw()
```

![../\_images/pulse-3.png](/images/api/qiskit/0.44/pulse-3.png)

To begin pulse programming we must first initialize our program builder context with [`build()`](#qiskit.pulse.builder.build "qiskit.pulse.builder.build"), after which we can begin adding program statements. For example, below we write a simple program that [`play()`](#qiskit.pulse.builder.play "qiskit.pulse.builder.play")s a pulse:

```python
from qiskit import execute, pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.play(pulse.Constant(100, 1.0), d0)

pulse_prog.draw()
```

![../\_images/pulse-4.png](/images/api/qiskit/0.44/pulse-4.png)

The builder initializes a [`pulse.Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule"), `pulse_prog` and then begins to construct the program within the context. The output pulse schedule will survive after the context is exited and can be executed like a normal Qiskit schedule using `qiskit.execute(pulse_prog, backend)`.

Pulse programming has a simple imperative style. This leaves the programmer to worry about the raw experimental physics of pulse programming and not constructing cumbersome data structures.

We can optionally pass a [`Backend`](qiskit.providers.Backend "qiskit.providers.Backend") to [`build()`](#qiskit.pulse.builder.build "qiskit.pulse.builder.build") to enable enhanced functionality. Below, we prepare a Bell state by automatically compiling the required pulses from their gate-level representations, while simultaneously applying a long decoupling pulse to a neighboring qubit. We terminate the experiment with a measurement to observe the state we prepared. This program which mixes circuits and pulses will be automatically lowered to be run as a pulse program:

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse3Q

# TODO: This example should use a real mock backend.
backend = FakeOpenPulse3Q()

d2 = pulse.DriveChannel(2)

with pulse.build(backend) as bell_prep:
    pulse.u2(0, math.pi, 0)
    pulse.cx(0, 1)

with pulse.build(backend) as decoupled_bell_prep_and_measure:
    # We call our bell state preparation schedule constructed above.
    with pulse.align_right():
        pulse.call(bell_prep)
        pulse.play(pulse.Constant(bell_prep.duration, 0.02), d2)
        pulse.barrier(0, 1, 2)
        registers = pulse.measure_all()

decoupled_bell_prep_and_measure.draw()
```

![../\_images/pulse-5.png](/images/api/qiskit/0.44/pulse-5.png)

With the pulse builder we are able to blend programming on qubits and channels. While the pulse schedule is based on instructions that operate on channels, the pulse builder automatically handles the mapping from qubits to channels for you.

In the example below we demonstrate some more features of the pulse builder:

```python
import math

from qiskit import pulse, QuantumCircuit
from qiskit.pulse import library
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    # Create a pulse.
    gaussian_pulse = library.gaussian(10, 1.0, 2)
    # Get the qubit's corresponding drive channel from the backend.
    d0 = pulse.drive_channel(0)
    d1 = pulse.drive_channel(1)
    # Play a pulse at t=0.
    pulse.play(gaussian_pulse, d0)
    # Play another pulse directly after the previous pulse at t=10.
    pulse.play(gaussian_pulse, d0)
    # The default scheduling behavior is to schedule pulses in parallel
    # across channels. For example, the statement below
    # plays the same pulse on a different channel at t=0.
    pulse.play(gaussian_pulse, d1)

    # We also provide pulse scheduling alignment contexts.
    # The default alignment context is align_left.

    # The sequential context schedules pulse instructions sequentially in time.
    # This context starts at t=10 due to earlier pulses above.
    with pulse.align_sequential():
        pulse.play(gaussian_pulse, d0)
        # Play another pulse after at t=20.
        pulse.play(gaussian_pulse, d1)

        # We can also nest contexts as each instruction is
        # contained in its local scheduling context.
        # The output of a child context is a context-schedule
        # with the internal instructions timing fixed relative to
        # one another. This is schedule is then called in the parent context.

        # Context starts at t=30.
        with pulse.align_left():
            # Start at t=30.
            pulse.play(gaussian_pulse, d0)
            # Start at t=30.
            pulse.play(gaussian_pulse, d1)
        # Context ends at t=40.

        # Alignment context where all pulse instructions are
        # aligned to the right, ie., as late as possible.
        with pulse.align_right():
            # Shift the phase of a pulse channel.
            pulse.shift_phase(math.pi, d1)
            # Starts at t=40.
            pulse.delay(100, d0)
            # Ends at t=140.

            # Starts at t=130.
            pulse.play(gaussian_pulse, d1)
            # Ends at t=140.

        # Acquire data for a qubit and store in a memory slot.
        pulse.acquire(100, 0, pulse.MemorySlot(0))

        # We also support a variety of macros for common operations.

        # Measure all qubits.
        pulse.measure_all()

        # Delay on some qubits.
        # This requires knowledge of which channels belong to which qubits.
        # delay for 100 cycles on qubits 0 and 1.
        pulse.delay_qubits(100, 0, 1)

        # Call a quantum circuit. The pulse builder lazily constructs a quantum
        # circuit which is then transpiled and scheduled before inserting into
        # a pulse schedule.
        # NOTE: Quantum register indices correspond to physical qubit indices.
        qc = QuantumCircuit(2, 2)
        qc.cx(0, 1)
        pulse.call(qc)
        # Calling a small set of standard gates and decomposing to pulses is
        # also supported with more natural syntax.
        pulse.u3(0, math.pi, 0, 0)
        pulse.cx(0, 1)


        # It is also be possible to call a preexisting schedule
        tmp_sched = pulse.Schedule()
        tmp_sched += pulse.Play(gaussian_pulse, d0)
        pulse.call(tmp_sched)

        # We also support:

        # frequency instructions
        pulse.set_frequency(5.0e9, d0)

        # phase instructions
        pulse.shift_phase(0.1, d0)

        # offset contexts
        with pulse.phase_offset(math.pi, d0):
            pulse.play(gaussian_pulse, d0)
```

The above is just a small taste of what is possible with the builder. See the rest of the module documentation for more information on its capabilities.

### build

<span id="qiskit.pulse.builder.build" />

`qiskit.pulse.builder.build(backend=None, schedule=None, name=None, default_alignment='left', default_transpiler_settings=None, default_circuit_scheduler_settings=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Create a context manager for launching the imperative pulse builder DSL.

To enter a building context and starting building a pulse program:

```python
from qiskit import execute, pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.play(pulse.Constant(100, 0.5), d0)
```

While the output program `pulse_prog` cannot be executed as we are using a mock backend. If a real backend is being used, executing the program is done with:

```python
qiskit.execute(pulse_prog, backend)
```

**Parameters**

*   **backend** ([*Backend*](qiskit.providers.Backend "qiskit.providers.Backend")) – A Qiskit backend. If not supplied certain builder functionality will be unavailable.
*   **schedule** ([*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock") *| None*) – A pulse `ScheduleBlock` in which your pulse program will be built.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of pulse program to be built.
*   **default\_alignment** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")  *|*[*AlignmentKind*](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind") *| None*) – Default scheduling alignment for builder. One of `left`, `right`, `sequential` or an alignment context.
*   **default\_transpiler\_settings** ([*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*,* [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*] | None*) – Default settings for the transpiler.
*   **default\_circuit\_scheduler\_settings** ([*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")*\[*[*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")*,* [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")*] | None*) – Default settings for the circuit to pulse scheduler.

**Returns**

A new builder context which has the active builder initialized.

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock")]

### Channels

Methods to return the correct channels for the respective qubit indices.

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeArmonk

backend = FakeArmonk()

with pulse.build(backend) as drive_sched:
    d0 = pulse.drive_channel(0)
    print(d0)
```

```python
DriveChannel(0)
```

### acquire\_channel

<span id="qiskit.pulse.builder.acquire_channel" />

`qiskit.pulse.builder.acquire_channel(qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return `AcquireChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.acquire_channel(0) == pulse.AcquireChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[*AcquireChannel*](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")

### control\_channels

<span id="qiskit.pulse.builder.control_channels" />

`qiskit.pulse.builder.control_channels(*qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return `ControlChannel` for `qubit` on the active builder backend.

Return the secondary drive channel for the given qubit – typically utilized for controlling multi-qubit interactions.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()
with pulse.build(backend):
    assert pulse.control_channels(0, 1) == [pulse.ControlChannel(0)]
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Parameters**

**qubits** ([*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – Tuple or list of ordered qubits of the form (control\_qubit, target\_qubit).

**Returns**

List of control channels associated with the supplied ordered list of qubits.

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[[*ControlChannel*](qiskit.pulse.channels.ControlChannel "qiskit.pulse.channels.ControlChannel")]

### drive\_channel

<span id="qiskit.pulse.builder.drive_channel" />

`qiskit.pulse.builder.drive_channel(qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return `DriveChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.drive_channel(0) == pulse.DriveChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[*DriveChannel*](qiskit.pulse.channels.DriveChannel "qiskit.pulse.channels.DriveChannel")

### measure\_channel

<span id="qiskit.pulse.builder.measure_channel" />

`qiskit.pulse.builder.measure_channel(qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return `MeasureChannel` for `qubit` on the active builder backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    assert pulse.measure_channel(0) == pulse.MeasureChannel(0)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[*MeasureChannel*](qiskit.pulse.channels.MeasureChannel "qiskit.pulse.channels.MeasureChannel")

### Instructions

Pulse instructions are available within the builder interface. Here’s an example:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeArmonk

backend = FakeArmonk()

with pulse.build(backend) as drive_sched:
    d0 = pulse.drive_channel(0)
    a0 = pulse.acquire_channel(0)

    pulse.play(pulse.library.Constant(10, 1.0), d0)
    pulse.delay(20, d0)
    pulse.shift_phase(3.14/2, d0)
    pulse.set_phase(3.14, d0)
    pulse.shift_frequency(1e7, d0)
    pulse.set_frequency(5e9, d0)

    with pulse.build() as temp_sched:
        pulse.play(pulse.library.Gaussian(20, 1.0, 3.0), d0)
        pulse.play(pulse.library.Gaussian(20, -1.0, 3.0), d0)

    pulse.call(temp_sched)
    pulse.acquire(30, a0, pulse.MemorySlot(0))

drive_sched.draw()
```

![../\_images/pulse-6.png](/images/api/qiskit/0.44/pulse-6.png)

### acquire

<span id="qiskit.pulse.builder.acquire" />

`qiskit.pulse.builder.acquire(duration, qubit_or_channel, register, **metadata)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Acquire for a `duration` on a `channel` and store the result in a `register`.

Examples:

```python
from qiskit import pulse

acq0 = pulse.AcquireChannel(0)
mem0 = pulse.MemorySlot(0)

with pulse.build() as pulse_prog:
    pulse.acquire(100, acq0, mem0)

    # measurement metadata
    kernel = pulse.configuration.Kernel('linear_discriminator')
    pulse.acquire(100, acq0, mem0, kernel=kernel)
```

<Admonition title="Note" type="note">
  The type of data acquire will depend on the execution `meas_level`.
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration to acquire data for
*   **qubit\_or\_channel** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*AcquireChannel*](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel")) – Either the qubit to acquire data for or the specific [`AcquireChannel`](qiskit.pulse.channels.AcquireChannel "qiskit.pulse.channels.AcquireChannel") to acquire on.
*   **register** (*StorageLocation*) – Location to store measured result.
*   **metadata** (*Kernel | Discriminator*) – Additional metadata for measurement. See [`Acquire`](qiskit.pulse.instructions.Acquire "qiskit.pulse.instructions.Acquire") for more information.

**Raises**

[**exceptions.PulseError**](#qiskit.pulse.PulseError "qiskit.pulse.exceptions.PulseError") – If the register type is not supported.

### barrier

<span id="qiskit.pulse.builder.barrier" />

`qiskit.pulse.builder.barrier(*channels_or_qubits, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Barrier directive for a set of channels and qubits.

This directive prevents the compiler from moving instructions across the barrier. Consider the case where we want to enforce that one pulse happens after another on separate channels, this can be done with:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build(backend) as barrier_pulse_prog:
    pulse.play(pulse.Constant(10, 1.0), d0)
    pulse.barrier(d0, d1)
    pulse.play(pulse.Constant(10, 1.0), d1)
```

Of course this could have been accomplished with:

```python
from qiskit.pulse import transforms

with pulse.build(backend) as aligned_pulse_prog:
    with pulse.align_sequential():
        pulse.play(pulse.Constant(10, 1.0), d0)
        pulse.play(pulse.Constant(10, 1.0), d1)

barrier_pulse_prog = transforms.target_qobj_transform(barrier_pulse_prog)
aligned_pulse_prog = transforms.target_qobj_transform(aligned_pulse_prog)

assert barrier_pulse_prog == aligned_pulse_prog
```

The barrier allows the pulse compiler to take care of more advanced scheduling alignment operations across channels. For example in the case where we are calling an outside circuit or schedule and want to align a pulse at the end of one call:

```python
import math

d0 = pulse.DriveChannel(0)

with pulse.build(backend) as pulse_prog:
    with pulse.align_right():
        pulse.x(1)
        # Barrier qubit 1 and d0.
        pulse.barrier(1, d0)
        # Due to barrier this will play before the gate on qubit 1.
        pulse.play(pulse.Constant(10, 1.0), d0)
        # This will end at the same time as the pulse above due to
        # the barrier.
        pulse.x(1)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set if qubits are barriered on.
</Admonition>

**Parameters**

*   **channels\_or\_qubits** ([*Channel*](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")  *|*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Channels or qubits to barrier.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name for the barrier

### call

<span id="qiskit.pulse.builder.call" />

`qiskit.pulse.builder.call(target, name=None, value_dict=None, **kw_params)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call the subroutine within the currently active builder context with arbitrary parameters which will be assigned to the target program.

<Admonition title="Note" type="note">
  If the `target` program is a [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock"), then a [`Reference`](qiskit.pulse.instructions.Reference "qiskit.pulse.instructions.Reference") instruction will be created and appended to the current context. The `target` program will be immediately assigned to the current scope as a subroutine. If the `target` program is [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule"), it will be wrapped by the [`Call`](qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call") instruction and appended to the current context to avoid a mixed representation of [`ScheduleBlock`](qiskit.pulse.ScheduleBlock "qiskit.pulse.ScheduleBlock") and [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule"). If the `target` program is a [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") it will be scheduled and the new [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") will be added as a [`Call`](qiskit.pulse.instructions.Call "qiskit.pulse.instructions.Call") instruction.
</Admonition>

**Examples**

1.  Calling a schedule block (recommended)

```python
from qiskit import circuit, pulse
from qiskit.providers.fake_provider import FakeBogotaV2

backend = FakeBogotaV2()

with pulse.build() as x_sched:
    pulse.play(pulse.Gaussian(160, 0.1, 40), pulse.DriveChannel(0))

with pulse.build() as pulse_prog:
    pulse.call(x_sched)

print(pulse_prog)
```

```python
ScheduleBlock(
    ScheduleBlock(
        Play(
            Gaussian(duration=160, amp=(0.1+0j), sigma=40),
            DriveChannel(0)
        ),
        name="block0",
        transform=AlignLeft()
    ),
    name="block1",
    transform=AlignLeft()
)
```

The actual program is stored in the reference table attached to the schedule.

```python
print(pulse_prog.references)
```

```python
ReferenceManager:
  - ('block0', '634b3b50bd684e26a673af1fbd2d6c81'): ScheduleBlock(Play(Gaussian(...
```

In addition, you can call a parameterized target program with parameter assignment.

```python
amp = circuit.Parameter("amp")

with pulse.build() as subroutine:
    pulse.play(pulse.Gaussian(160, amp, 40), pulse.DriveChannel(0))

with pulse.build() as pulse_prog:
    pulse.call(subroutine, amp=0.1)
    pulse.call(subroutine, amp=0.3)

print(pulse_prog)
```

```python
ScheduleBlock(
    ScheduleBlock(
        Play(
            Gaussian(duration=160, amp=(0.1+0j), sigma=40),
            DriveChannel(0)
        ),
        name="block2",
        transform=AlignLeft()
    ),
    ScheduleBlock(
        Play(
            Gaussian(duration=160, amp=(0.3+0j), sigma=40),
            DriveChannel(0)
        ),
        name="block2",
        transform=AlignLeft()
    ),
    name="block3",
    transform=AlignLeft()
)
```

If there is a name collision between parameters, you can distinguish them by specifying each parameter object in a python dictionary. For example,

```python
amp1 = circuit.Parameter('amp')
amp2 = circuit.Parameter('amp')

with pulse.build() as subroutine:
    pulse.play(pulse.Gaussian(160, amp1, 40), pulse.DriveChannel(0))
    pulse.play(pulse.Gaussian(160, amp2, 40), pulse.DriveChannel(1))

with pulse.build() as pulse_prog:
    pulse.call(subroutine, value_dict={amp1: 0.1, amp2: 0.3})

print(pulse_prog)
```

```python
ScheduleBlock(
    ScheduleBlock(
        Play(Gaussian(duration=160, amp=(0.1+0j), sigma=40), DriveChannel(0)),
        Play(Gaussian(duration=160, amp=(0.3+0j), sigma=40), DriveChannel(1)),
        name="block4",
        transform=AlignLeft()
    ),
    name="block5",
    transform=AlignLeft()
)
```

2.  Calling a schedule

```python
x_sched = backend.instruction_schedule_map.get("x", (0,))

with pulse.build(backend) as pulse_prog:
    pulse.call(x_sched)

print(pulse_prog)
```

```python
ScheduleBlock(
    Call(
        Schedule(
            (
                0,
                Play(
                    Drag(
                        duration=160,
                        amp=(0.18989731546729305+0j),
                        sigma=40,
                        beta=-1.201258305015517,
                        name='drag_86a8'
                    ),
                    DriveChannel(0),
                    name='drag_86a8'
                )
            ),
            name="x"
        ),
        name='x'
    ),
    name="block6",
    transform=AlignLeft()
)
```

Currently, the backend calibrated gates are provided in the form of [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule"). The parameter assignment mechanism is available also for schedules. However, the called schedule is not treated as a reference.

3.  Calling a quantum circuit

```python
backend = FakeBogotaV2()

qc = circuit.QuantumCircuit(1)
qc.x(0)

with pulse.build(backend) as pulse_prog:
    pulse.call(qc)

print(pulse_prog)
```

```python
ScheduleBlock(
    Call(
        Schedule(
            (
                0,
                Play(
                    Drag(
                        duration=160,
                        amp=(0.18989731546729305+0j),
                        sigma=40,
                        beta=-1.201258305015517,
                        name='drag_86a8'
                    ),
                    DriveChannel(0),
                    name='drag_86a8'
                )
            ),
            name="circuit-87"
        ),
        name='circuit-87'
    ),
    name="block7",
    transform=AlignLeft()
)
```

<Admonition title="Warning" type="caution">
  Calling a circuit from a schedule is not encouraged. Currently, the Qiskit execution model is migrating toward the pulse gate model, where schedules are attached to circuits through the [`QuantumCircuit.add_calibration()`](qiskit.circuit.QuantumCircuit#add_calibration "qiskit.circuit.QuantumCircuit.add_calibration") method.
</Admonition>

**Parameters**

*   **target** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")  *|*[*Schedule*](qiskit.pulse.Schedule "qiskit.pulse.schedule.Schedule")  *|*[*ScheduleBlock*](qiskit.pulse.ScheduleBlock "qiskit.pulse.schedule.ScheduleBlock") *| None*) – Target circuit or pulse schedule to call.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Optional. A unique name of subroutine if defined. When the name is explicitly provided, one cannot call different schedule blocks with the same name.
*   **value\_dict** ([*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")*\[*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*,* [*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*] | None*) – Optional. Parameters assigned to the `target` program. If this dictionary is provided, the `target` program is copied and then stored in the main built schedule and its parameters are assigned to the given values. This dictionary is keyed on [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects, allowing parameter name collision to be avoided.
*   **kw\_params** ([*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")  *|*[*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Alternative way to provide parameters. Since this is keyed on the string parameter name, the parameters having the same name are all updated together. If you want to avoid name collision, use `value_dict` with [`Parameter`](qiskit.circuit.Parameter "qiskit.circuit.Parameter") objects instead.

### delay

<span id="qiskit.pulse.builder.delay" />

`qiskit.pulse.builder.delay(duration, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Delay on a `channel` for a `duration`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.delay(10, d0)
```

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Number of cycles to delay for on `channel`.
*   **channel** ([*Channel*](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")) – Channel to delay on.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction.

### play

<span id="qiskit.pulse.builder.play" />

`qiskit.pulse.builder.play(pulse, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Play a `pulse` on a `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.play(pulse.Constant(10, 1.0), d0)
```

**Parameters**

*   **pulse** (*Pulse |* [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – Pulse to play.
*   **channel** (*PulseChannel*) – Channel to play pulse on.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the pulse.

### reference

<span id="qiskit.pulse.builder.reference" />

`qiskit.pulse.builder.reference(name, *extra_keys)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Refer to undefined subroutine by string keys.

A [`Reference`](qiskit.pulse.instructions.Reference "qiskit.pulse.instructions.Reference") instruction is implicitly created and a schedule can be separately registered to the reference at a later stage.

```python
from qiskit import pulse

with pulse.build() as main_prog:
    pulse.reference("x_gate", "q0")

with pulse.build() as subroutine:
    pulse.play(pulse.Gaussian(160, 0.1, 40), pulse.DriveChannel(0))

main_prog.assign_references(subroutine_dict={("x_gate", "q0"): subroutine})
```

**Parameters**

*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Name of subroutine.
*   **extra\_keys** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Helper keys to uniquely specify the subroutine.

### set\_frequency

<span id="qiskit.pulse.builder.set_frequency" />

`qiskit.pulse.builder.set_frequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Set the `frequency` of a pulse `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.set_frequency(1e9, d0)
```

**Parameters**

*   **frequency** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Frequency in Hz to set channel to.
*   **channel** (*PulseChannel*) – Channel to set frequency of.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction.

### set\_phase

<span id="qiskit.pulse.builder.set_phase" />

`qiskit.pulse.builder.set_phase(phase, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Set the `phase` of a pulse `channel`.

Examples:

```python
import math

from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.set_phase(math.pi, d0)
```

**Parameters**

*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Phase in radians to set channel carrier signal to.
*   **channel** (*PulseChannel*) – Channel to set phase of.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction.

### shift\_frequency

<span id="qiskit.pulse.builder.shift_frequency" />

`qiskit.pulse.builder.shift_frequency(frequency, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Shift the `frequency` of a pulse `channel`.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.shift_frequency(1e9, d0)
```

**Parameters**

*   **frequency** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Frequency in Hz to shift channel frequency by.
*   **channel** (*PulseChannel*) – Channel to shift frequency of.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction.

### shift\_phase

<span id="qiskit.pulse.builder.shift_phase" />

`qiskit.pulse.builder.shift_phase(phase, channel, name=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Shift the `phase` of a pulse `channel`.

Examples:

```python
import math

from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    pulse.shift_phase(math.pi, d0)
```

**Parameters**

*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Phase in radians to shift channel carrier signal by.
*   **channel** (*PulseChannel*) – Channel to shift phase of.
*   **name** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)") *| None*) – Name of the instruction.

### snapshot

<span id="qiskit.pulse.builder.snapshot" />

`qiskit.pulse.builder.snapshot(label, snapshot_type='statevector')` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Simulator snapshot.

Examples:

```python
from qiskit import pulse

with pulse.build() as pulse_prog:
    pulse.snapshot('first', 'statevector')
```

**Parameters**

*   **label** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Label for snapshot.
*   **snapshot\_type** ([*str*](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)")) – Type of snapshot.

### Contexts

Builder aware contexts that modify the construction of a pulse program. For example an alignment context like [`align_right()`](#qiskit.pulse.builder.align_right "qiskit.pulse.builder.align_right") may be used to align all pulses as late as possible in a pulse program.

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_right():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will start at t=80
        pulse.play(pulse.Constant(20, 1.0), d1)

pulse_prog.draw()
```

![../\_images/pulse-7.png](/images/api/qiskit/0.44/pulse-7.png)

### align\_equispaced

<span id="qiskit.pulse.builder.align_equispaced" />

`qiskit.pulse.builder.align_equispaced(duration)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Equispaced alignment pulse scheduling context.

Pulse instructions within this context are scheduled with the same interval spacing such that the total length of the context block is `duration`. If the total free `duration` cannot be evenly divided by the number of instructions within the context, the modulo is split and then prepended and appended to the returned schedule. Delay instructions are automatically inserted in between pulses.

This context is convenient to write a schedule for periodical dynamic decoupling or the Hahn echo sequence.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
x90 = pulse.Gaussian(10, 0.1, 3)
x180 = pulse.Gaussian(10, 0.2, 3)

with pulse.build() as hahn_echo:
    with pulse.align_equispaced(duration=100):
        pulse.play(x90, d0)
        pulse.play(x180, d0)
        pulse.play(x90, d0)

hahn_echo.draw()
```

![../\_images/pulse-8.png](/images/api/qiskit/0.44/pulse-8.png)

**Parameters**

**duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – Duration of this context. This should be larger than the schedule duration.

**Yields**

None

**Return type**

[*AlignmentKind*](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

**Notes**

The scheduling is performed for sub-schedules within the context rather than channel-wise. If you want to apply the equispaced context for each channel, you should use the context independently for channels.

### align\_func

<span id="qiskit.pulse.builder.align_func" />

`qiskit.pulse.builder.align_func(duration, func)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Callback defined alignment pulse scheduling context.

Pulse instructions within this context are scheduled at the location specified by arbitrary callback function position that takes integer index and returns the associated fractional location within \[0, 1]. Delay instruction is automatically inserted in between pulses.

This context may be convenient to write a schedule of arbitrary dynamical decoupling sequences such as Uhrig dynamical decoupling.

Examples:

```python
import numpy as np
from qiskit import pulse

d0 = pulse.DriveChannel(0)
x90 = pulse.Gaussian(10, 0.1, 3)
x180 = pulse.Gaussian(10, 0.2, 3)

def udd10_pos(j):
    return np.sin(np.pi*j/(2*10 + 2))**2

with pulse.build() as udd_sched:
    pulse.play(x90, d0)
    with pulse.align_func(duration=300, func=udd10_pos):
        for _ in range(10):
            pulse.play(x180, d0)
    pulse.play(x90, d0)

udd_sched.draw()
```

![../\_images/pulse-9.png](/images/api/qiskit/0.44/pulse-9.png)

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*ParameterExpression*](qiskit.circuit.ParameterExpression "qiskit.circuit.parameterexpression.ParameterExpression")) – Duration of context. This should be larger than the schedule duration.
*   **func** ([*Callable*](https://docs.python.org/3/library/typing.html#typing.Callable "(in Python v3.12)")*\[\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*],* [*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")*]*) – A function that takes an index of sub-schedule and returns the fractional coordinate of of that sub-schedule. The returned value should be defined within \[0, 1]. The pulse index starts from 1.

**Yields**

None

**Return type**

[*AlignmentKind*](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

**Notes**

The scheduling is performed for sub-schedules within the context rather than channel-wise. If you want to apply the numerical context for each channel, you need to apply the context independently to channels.

### align\_left

<span id="qiskit.pulse.builder.align_left" />

`qiskit.pulse.builder.align_left()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Left alignment pulse scheduling context.

Pulse instructions within this context are scheduled as early as possible by shifting them left to the earliest available time.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_left():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will start at t=0
        pulse.play(pulse.Constant(20, 1.0), d1)
pulse_prog = pulse.transforms.block_to_schedule(pulse_prog)

assert pulse_prog.ch_start_time(d0) == pulse_prog.ch_start_time(d1)
```

**Yields**

None

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[None]

### align\_right

<span id="qiskit.pulse.builder.align_right" />

`qiskit.pulse.builder.align_right()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Right alignment pulse scheduling context.

Pulse instructions within this context are scheduled as late as possible by shifting them right to the latest available time.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_right():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will start at t=80
        pulse.play(pulse.Constant(20, 1.0), d1)
pulse_prog = pulse.transforms.block_to_schedule(pulse_prog)

assert pulse_prog.ch_stop_time(d0) == pulse_prog.ch_stop_time(d1)
```

**Yields**

None

**Return type**

[*AlignmentKind*](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

### align\_sequential

<span id="qiskit.pulse.builder.align_sequential" />

`qiskit.pulse.builder.align_sequential()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Sequential alignment pulse scheduling context.

Pulse instructions within this context are scheduled sequentially in time such that no two instructions will be played at the same time.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)
d1 = pulse.DriveChannel(1)

with pulse.build() as pulse_prog:
    with pulse.align_sequential():
        # this pulse will start at t=0
        pulse.play(pulse.Constant(100, 1.0), d0)
        # this pulse will also start at t=100
        pulse.play(pulse.Constant(20, 1.0), d1)
pulse_prog = pulse.transforms.block_to_schedule(pulse_prog)

assert pulse_prog.ch_stop_time(d0) == pulse_prog.ch_start_time(d1)
```

**Yields**

None

**Return type**

[*AlignmentKind*](#qiskit.pulse.transforms.AlignmentKind "qiskit.pulse.transforms.alignments.AlignmentKind")

### circuit\_scheduler\_settings

<span id="qiskit.pulse.builder.circuit_scheduler_settings" />

`qiskit.pulse.builder.circuit_scheduler_settings(**settings)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Set the currently active circuit scheduler settings for this context.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.active_circuit_scheduler_settings())
    with pulse.circuit_scheduler_settings(method='alap'):
        print(pulse.active_circuit_scheduler_settings())
```

```python
{}
{'method': 'alap'}
```

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[None]

### frequency\_offset

<span id="qiskit.pulse.builder.frequency_offset" />

`qiskit.pulse.builder.frequency_offset(frequency, *channels, compensate_phase=False)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Shift the frequency of inputs channels on entry into context and undo on exit.

Examples:

```python
from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build(backend) as pulse_prog:
    # shift frequency by 1GHz
    with pulse.frequency_offset(1e9, d0):
        pulse.play(pulse.Constant(10, 1.0), d0)

assert len(pulse_prog.instructions) == 3

with pulse.build(backend) as pulse_prog:
    # Shift frequency by 1GHz.
    # Undo accumulated phase in the shifted frequency frame
    # when exiting the context.
    with pulse.frequency_offset(1e9, d0, compensate_phase=True):
        pulse.play(pulse.Constant(10, 1.0), d0)

assert len(pulse_prog.instructions) == 4
```

**Parameters**

*   **frequency** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Amount of frequency offset in Hz.
*   **channels** (*PulseChannel*) – Channels to offset frequency of.
*   **compensate\_phase** ([*bool*](https://docs.python.org/3/library/functions.html#bool "(in Python v3.12)")) – Compensate for accumulated phase accumulated with respect to the channels’ frame at its initial frequency.

**Yields**

None

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[None]

### phase\_offset

<span id="qiskit.pulse.builder.phase_offset" />

`qiskit.pulse.builder.phase_offset(phase, *channels)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Shift the phase of input channels on entry into context and undo on exit.

Examples:

```python
import math

from qiskit import pulse

d0 = pulse.DriveChannel(0)

with pulse.build() as pulse_prog:
    with pulse.phase_offset(math.pi, d0):
        pulse.play(pulse.Constant(10, 1.0), d0)

assert len(pulse_prog.instructions) == 3
```

**Parameters**

*   **phase** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")) – Amount of phase offset in radians.
*   **channels** (*PulseChannel*) – Channels to offset phase of.

**Yields**

None

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[None]

### transpiler\_settings

<span id="qiskit.pulse.builder.transpiler_settings" />

`qiskit.pulse.builder.transpiler_settings(**settings)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Set the currently active transpiler settings for this context.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.active_transpiler_settings())
    with pulse.transpiler_settings(optimization_level=3):
        print(pulse.active_transpiler_settings())
```

```python
{}
{'optimization_level': 3}
```

**Return type**

[*ContextManager*](https://docs.python.org/3/library/typing.html#typing.ContextManager "(in Python v3.12)")\[None]

### Macros

Macros help you add more complex functionality to your pulse program.

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeArmonk

backend = FakeArmonk()

with pulse.build(backend) as measure_sched:
    mem_slot = pulse.measure(0)
    print(mem_slot)
```

```python
MemorySlot(0)
```

### measure

<span id="qiskit.pulse.builder.measure" />

`qiskit.pulse.builder.measure(qubits, registers=None)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Measure a qubit within the currently active builder context.

At the pulse level a measurement is composed of both a stimulus pulse and an acquisition instruction which tells the systems measurement unit to acquire data and process it. We provide this measurement macro to automate the process for you, but if desired full control is still available with [`acquire()`](#qiskit.pulse.builder.acquire "qiskit.pulse.builder.acquire") and [`play()`](#qiskit.pulse.builder.play "qiskit.pulse.builder.play").

To use the measurement it is as simple as specifying the qubit you wish to measure:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

qubit = 0

with pulse.build(backend) as pulse_prog:
    # Do something to the qubit.
    qubit_drive_chan = pulse.drive_channel(0)
    pulse.play(pulse.Constant(100, 1.0), qubit_drive_chan)
    # Measure the qubit.
    reg = pulse.measure(qubit)
```

For now it is not possible to do much with the handle to `reg` but in the future we will support using this handle to a result register to build up ones program. It is also possible to supply this register:

```python
with pulse.build(backend) as pulse_prog:
    pulse.play(pulse.Constant(100, 1.0), qubit_drive_chan)
    # Measure the qubit.
    mem0 = pulse.MemorySlot(0)
    reg = pulse.measure(qubit, mem0)

assert reg == mem0
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Parameters**

*   **qubits** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*] |* [*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Physical qubit to measure.
*   **registers** ([*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")*\[StorageLocation] | StorageLocation | None*) – Register to store result in. If not selected the current behavior is to return the `MemorySlot` with the same index as `qubit`. This register will be returned.

**Returns**

The `register` the qubit measurement result will be stored in.

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[StorageLocation] | StorageLocation

### measure\_all

<span id="qiskit.pulse.builder.measure_all" />

`qiskit.pulse.builder.measure_all()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Measure all qubits within the currently active builder context.

A simple macro function to measure all of the qubits in the device at the same time. This is useful for handling device `meas_map` and single measurement constraints.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    # Measure all qubits and return associated registers.
    regs = pulse.measure_all()
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Returns**

The `register`s the qubit measurement results will be stored in.

**Return type**

[*List*](https://docs.python.org/3/library/typing.html#typing.List "(in Python v3.12)")\[[*MemorySlot*](qiskit.pulse.channels.MemorySlot "qiskit.pulse.channels.MemorySlot")]

### delay\_qubits

<span id="qiskit.pulse.builder.delay_qubits" />

`qiskit.pulse.builder.delay_qubits(duration, *qubits)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Insert delays on all of the `channels.Channel`s that correspond to the input `qubits` at the same time.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse3Q

backend = FakeOpenPulse3Q()

with pulse.build(backend) as pulse_prog:
    # Delay for 100 cycles on qubits 0, 1 and 2.
    regs = pulse.delay_qubits(100, 0, 1, 2)
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Parameters**

*   **duration** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")) – Duration to delay for.
*   **qubits** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*Iterable*](https://docs.python.org/3/library/typing.html#typing.Iterable "(in Python v3.12)")*\[*[*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")*]*) – Physical qubits to delay on. Delays will be inserted based on the channels returned by `pulse.qubit_channels()`.

### Circuit Gates

To use circuit level gates within your pulse program call a circuit with [`call()`](#qiskit.pulse.builder.call "qiskit.pulse.builder.call").

<Admonition title="Warning" type="caution">
  These will be removed in future versions with the release of a circuit builder interface in which it will be possible to calibrate a gate in terms of pulses and use that gate in a circuit.
</Admonition>

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeArmonk

backend = FakeArmonk()

with pulse.build(backend) as u3_sched:
    pulse.u3(math.pi, 0, math.pi, 0)
```

### cx

<span id="qiskit.pulse.builder.cx" />

`qiskit.pulse.builder.cx(control, target)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call a `CXGate` on the input physical qubits.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.cx(0, 1)
```

### u1

<span id="qiskit.pulse.builder.u1" />

`qiskit.pulse.builder.u1(theta, qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call a `U1Gate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.u1(math.pi, 1)
```

### u2

<span id="qiskit.pulse.builder.u2" />

`qiskit.pulse.builder.u2(phi, lam, qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call a `U2Gate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.u2(0, math.pi, 1)
```

### u3

<span id="qiskit.pulse.builder.u3" />

`qiskit.pulse.builder.u3(theta, phi, lam, qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call a `U3Gate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
import math

from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.u3(math.pi, 0, math.pi, 1)
```

### x

<span id="qiskit.pulse.builder.x" />

`qiskit.pulse.builder.x(qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Call a `XGate` on the input physical qubit.

<Admonition title="Note" type="note">
  Calling gates directly within the pulse builder namespace will be deprecated in the future in favor of tight integration with a circuit builder interface which is under development.
</Admonition>

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend) as pulse_prog:
    pulse.x(0)
```

### Utilities

The utility functions can be used to gather attributes about the backend and modify how the program is built.

```python
from qiskit import pulse

from qiskit.providers.fake_provider import FakeArmonk

backend = FakeArmonk()

with pulse.build(backend) as u3_sched:
    print('Number of qubits in backend: {}'.format(pulse.num_qubits()))

    samples = 160
    print('There are {} samples in {} seconds'.format(
        samples, pulse.samples_to_seconds(160)))

    seconds = 1e-6
    print('There are {} seconds in {} samples.'.format(
        seconds, pulse.seconds_to_samples(1e-6)))
```

```python
Number of qubits in backend: 1
There are 160 samples in 3.5555555555555554e-08 seconds
There are 1e-06 seconds in 4500 samples.
```

### active\_backend

<span id="qiskit.pulse.builder.active_backend" />

`qiskit.pulse.builder.active_backend()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Get the backend of the currently active builder context.

**Returns**

**The active backend in the currently active**

builder context.

**Return type**

[Backend](qiskit.providers.Backend "qiskit.providers.Backend")

**Raises**

[**exceptions.BackendNotSet**](#qiskit.pulse.BackendNotSet "qiskit.pulse.exceptions.BackendNotSet") – If the builder does not have a backend set.

### active\_transpiler\_settings

<span id="qiskit.pulse.builder.active_transpiler_settings" />

`qiskit.pulse.builder.active_transpiler_settings()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return the current active builder context’s transpiler settings.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

transpiler_settings = {'optimization_level': 3}

with pulse.build(backend,
                 default_transpiler_settings=transpiler_settings):
    print(pulse.active_transpiler_settings())
```

```python
{'optimization_level': 3}
```

**Return type**

[*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)"), [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")]

### active\_circuit\_scheduler\_settings

<span id="qiskit.pulse.builder.active_circuit_scheduler_settings" />

`qiskit.pulse.builder.active_circuit_scheduler_settings()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return the current active builder context’s circuit scheduler settings.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

circuit_scheduler_settings = {'method': 'alap'}

with pulse.build(
        backend,
        default_circuit_scheduler_settings=circuit_scheduler_settings):
    print(pulse.active_circuit_scheduler_settings())
```

```python
{'method': 'alap'}
```

**Return type**

[*Dict*](https://docs.python.org/3/library/typing.html#typing.Dict "(in Python v3.12)")\[[str](https://docs.python.org/3/library/stdtypes.html#str "(in Python v3.12)"), [*Any*](https://docs.python.org/3/library/typing.html#typing.Any "(in Python v3.12)")]

### num\_qubits

<span id="qiskit.pulse.builder.num_qubits" />

`qiskit.pulse.builder.num_qubits()` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Return number of qubits in the currently active backend.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.num_qubits())
```

```python
2
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")

### qubit\_channels

<span id="qiskit.pulse.builder.qubit_channels" />

`qiskit.pulse.builder.qubit_channels(qubit)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Returns the set of channels associated with a qubit.

Examples:

```python
from qiskit import pulse
from qiskit.providers.fake_provider import FakeOpenPulse2Q

backend = FakeOpenPulse2Q()

with pulse.build(backend):
    print(pulse.qubit_channels(0))
```

```python
{MeasureChannel(0), ControlChannel(0), DriveChannel(0), AcquireChannel(0), ControlChannel(1)}
```

<Admonition title="Note" type="note">
  Requires the active builder context to have a backend set.
</Admonition>

<Admonition title="Note" type="note">
  A channel may still be associated with another qubit in this list such as in the case where significant crosstalk exists.
</Admonition>

**Return type**

[*Set*](https://docs.python.org/3/library/typing.html#typing.Set "(in Python v3.12)")\[[*Channel*](#qiskit.pulse.channels.Channel "qiskit.pulse.channels.Channel")]

### samples\_to\_seconds

<span id="qiskit.pulse.builder.samples_to_seconds" />

`qiskit.pulse.builder.samples_to_seconds(samples)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Obtain the time in seconds that will elapse for the input number of samples on the active backend.

**Parameters**

**samples** ([*int*](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)")  *|*[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – Number of samples to convert to time in seconds.

**Returns**

The time that elapses in `samples`.

**Return type**

[float](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)") | [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")

### seconds\_to\_samples

<span id="qiskit.pulse.builder.seconds_to_samples" />

`qiskit.pulse.builder.seconds_to_samples(seconds)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/builder.py "view source code")

Obtain the number of samples that will elapse in `seconds` on the active backend.

Rounds down.

**Parameters**

**seconds** ([*float*](https://docs.python.org/3/library/functions.html#float "(in Python v3.12)")  *|*[*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")) – Time in seconds to convert to samples.

**Returns**

The number of samples for the time to elapse

**Return type**

[int](https://docs.python.org/3/library/functions.html#int "(in Python v3.12)") | [*ndarray*](https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html#numpy.ndarray "(in NumPy v1.26)")

## Configuration

|                                                                                                         |                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")() | Mapping from [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and qubits to [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") s. In particular, the mapping is formatted as type::. |

## Exceptions

### PulseError

<span id="qiskit.pulse.PulseError" />

`qiskit.pulse.PulseError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/exceptions.py "view source code")

Errors raised by the pulse module.

Set the error message.

### BackendNotSet

<span id="qiskit.pulse.BackendNotSet" />

`qiskit.pulse.BackendNotSet(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/exceptions.py "view source code")

Raised if the builder context does not have a backend.

Set the error message.

### NoActiveBuilder

<span id="qiskit.pulse.NoActiveBuilder" />

`qiskit.pulse.NoActiveBuilder(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/exceptions.py "view source code")

Raised if no builder context is active.

Set the error message.

### UnassignedDurationError

<span id="qiskit.pulse.UnassignedDurationError" />

`qiskit.pulse.UnassignedDurationError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/exceptions.py "view source code")

Raised if instruction duration is unassigned.

Set the error message.

### UnassignedReferenceError

<span id="qiskit.pulse.UnassignedReferenceError" />

`qiskit.pulse.UnassignedReferenceError(*message)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.25/qiskit/pulse/exceptions.py "view source code")

Raised if subroutine is unassigned.

Set the error message.

