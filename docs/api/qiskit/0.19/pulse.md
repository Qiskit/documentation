---
title: pulse
description: API reference for qiskit.pulse
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.pulse
---

<span id="module-qiskit.pulse" />

<span id="qiskit-pulse" />

# Pulse

<span id="module-qiskit.pulse" />

`qiskit.pulse`

Qiskit-Pulse is a pulse-level quantum programming kit. This lower level of programming offers the user more control than programming with [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") s.

Extracting the greatest performance from quantum hardware requires real-time pulse-level instructions. Pulse answers that need: it enables the quantum physicist *user* to specify the exact time dynamics of an experiment. It is especially powerful for error mitigation techniques.

The input is given as arbitrary, time-ordered signals (see: [Instructions (instructions)](#pulse-insts)) scheduled in parallel over multiple virtual hardware or simulator resources (see: [Channels (channels)](#pulse-channels)). The system also allows the user to recover the time dynamics of the measured output.

This is sufficient to allow the quantum physicist to explore and correct for noise in a quantum system.

<span id="pulse-insts" />

## Instructions

<span id="module-qiskit.pulse" />

`instructions`

|                                                                                                          |                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`instructions`](qiskit.pulse.instructions#module-qiskit.pulse.instructions "qiskit.pulse.instructions") | The `instruction` module holds the various `Instruction` s which are supported by Qiskit Pulse.                                                                              |
| [`Acquire`](qiskit.pulse.Acquire "qiskit.pulse.Acquire")(duration\[, channel, mem\_slot, …])             | The Acquire instruction is used to trigger the ADC associated with a particular qubit; e.g.                                                                                  |
| [`Delay`](qiskit.pulse.Delay "qiskit.pulse.Delay")(duration\[, channel, name])                           | A blocking instruction with no other effect.                                                                                                                                 |
| [`Play`](qiskit.pulse.Play "qiskit.pulse.Play")(pulse, channel\[, name])                                 | This instruction is responsible for applying a pulse on a channel.                                                                                                           |
| [`SetFrequency`](qiskit.pulse.SetFrequency "qiskit.pulse.SetFrequency")(frequency, channel\[, name])     | Set the channel frequency.                                                                                                                                                   |
| [`ShiftPhase`](qiskit.pulse.ShiftPhase "qiskit.pulse.ShiftPhase")(phase\[, channel, name])               | The shift phase instruction updates the modulation phase of proceeding pulses played on the same [`Channel`](qiskit.pulse.channels#channel "qiskit.pulse.channels.Channel"). |
| [`Snapshot`](qiskit.pulse.Snapshot "qiskit.pulse.Snapshot")(label\[, snapshot\_type, name])              | An instruction targeted for simulators, to capture a moment in the simulation.                                                                                               |

## Pulse Library (waveforms )

<span id="module-qiskit.pulse" />

`pulse_lib`

|                                                                                                                        |                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| [`pulse_lib`](qiskit.pulse.pulse_lib#module-qiskit.pulse.pulse_lib "qiskit.pulse.pulse_lib")                           | This library provides Pulse users with convenient methods to build Pulse waveforms.                                                    |
| [`discrete`](qiskit.pulse.pulse_lib.discrete#module-qiskit.pulse.pulse_lib.discrete "qiskit.pulse.pulse_lib.discrete") | Module for builtin discrete pulses.                                                                                                    |
| [`SamplePulse`](qiskit.pulse.SamplePulse "qiskit.pulse.SamplePulse")(samples\[, name, epsilon])                        | A pulse specified completely by complex-valued samples; each sample is played for the duration of the backend cycle-time, dt.          |
| [`Constant`](qiskit.pulse.Constant "qiskit.pulse.Constant")(duration, amp\[, name])                                    | A simple constant pulse, with an amplitude value and a duration:                                                                       |
| [`Drag`](qiskit.pulse.Drag "qiskit.pulse.Drag")(duration, amp, sigma, beta\[, name])                                   | The Derivative Removal by Adiabatic Gate (DRAG) pulse is a standard Gaussian pulse with an additional Gaussian derivative component.   |
| [`Gaussian`](qiskit.pulse.Gaussian "qiskit.pulse.Gaussian")(duration, amp, sigma\[, name])                             | A truncated pulse envelope shaped according to the Gaussian function whose mean is centered at the center of the pulse (duration / 2): |
| [`GaussianSquare`](qiskit.pulse.GaussianSquare "qiskit.pulse.GaussianSquare")(duration, amp, sigma, width)             | A square pulse with a Gaussian shaped risefall on either side:                                                                         |

<span id="pulse-channels" />

## Channels

<span id="module-qiskit.pulse" />

`channels`

Pulse is meant to be agnostic to the underlying hardware implementation, while still allowing low-level control. Therefore, our signal channels are *virtual* hardware channels. The backend which executes our programs is responsible for mapping these virtual channels to the proper physical channel within the quantum control hardware.

Channels are characterized by their type and their index. See each channel type below to learn more.

|                                                                                          |                                                                                                |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| [`channels`](qiskit.pulse.channels#module-qiskit.pulse.channels "qiskit.pulse.channels") | This module defines Pulse Channels.                                                            |
| [`DriveChannel`](qiskit.pulse.DriveChannel "qiskit.pulse.DriveChannel")(index)           | Drive channels transmit signals to qubits which enact gate operations.                         |
| [`MeasureChannel`](qiskit.pulse.MeasureChannel "qiskit.pulse.MeasureChannel")(index)     | Measure channels transmit measurement stimulus pulses for readout.                             |
| [`AcquireChannel`](qiskit.pulse.AcquireChannel "qiskit.pulse.AcquireChannel")(index)     | Acquire channels are used to collect data.                                                     |
| [`ControlChannel`](qiskit.pulse.ControlChannel "qiskit.pulse.ControlChannel")(index)     | Control channels provide supplementary control over the qubit to the drive channel.            |
| [`RegisterSlot`](qiskit.pulse.RegisterSlot "qiskit.pulse.RegisterSlot")(index)           | Classical resister slot channels represent classical registers (low-latency classical memory). |
| [`MemorySlot`](qiskit.pulse.MemorySlot "qiskit.pulse.MemorySlot")(index)                 | Memory slot channels represent classical memory storage.                                       |

## Schedules

Schedules are Pulse programs. They describe instruction sequences for the control hardware.

|                                                                                                             |                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule")(\*schedules\[, name])                           | A quantum program *schedule* with exact time constraints for its instructions, operating over all input signal *channels* and supporting special syntaxes for building. |
| [`Instruction`](qiskit.pulse.Instruction "qiskit.pulse.Instruction")(operands, duration, channels\[, name]) | The smallest schedulable unit: a single instruction.                                                                                                                    |

## Configuration

|                                                                                                         |                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`InstructionScheduleMap`](qiskit.pulse.InstructionScheduleMap "qiskit.pulse.InstructionScheduleMap")() | Mapping from [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") [`qiskit.circuit.Instruction`](qiskit.circuit.Instruction "qiskit.circuit.Instruction") names and qubits to [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") s. In particular, the mapping is formatted as type::. |

## Rescheduling Utilities

These utilities return modified [`Schedule`](qiskit.pulse.Schedule "qiskit.pulse.Schedule") s.

|                                                                                                                                               |                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| [`align_measures`](qiskit.pulse.reschedule.align_measures "qiskit.pulse.reschedule.align_measures")(schedules\[, inst\_map, …])               | Return new schedules where measurements occur at the same physical time.                                                                  |
| [`add_implicit_acquires`](qiskit.pulse.reschedule.add_implicit_acquires "qiskit.pulse.reschedule.add_implicit_acquires")(schedule, meas\_map) | Return a new schedule with implicit acquires from the measurement mapping replaced by explicit ones.                                      |
| [`pad`](qiskit.pulse.reschedule.pad "qiskit.pulse.reschedule.pad")(schedule\[, channels, until])                                              | Pad the input `Schedule` with `Delay` s on all unoccupied timeslots until `until` if it is provided, otherwise until `schedule.duration`. |

## Exceptions

|                                                                              |                                    |
| ---------------------------------------------------------------------------- | ---------------------------------- |
| [`PulseError`](qiskit.pulse.PulseError "qiskit.pulse.PulseError")(\*message) | Errors raised by the pulse module. |

