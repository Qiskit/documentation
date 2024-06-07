# This code is a Qiskit project.
#
# (C) Copyright IBM 2024.
#
# This code is licensed under the Apache License, Version 2.0. You may obtain a
# copy of this license in the LICENSE file in the root directory of this source
# tree or at http://www.apache.org/licenses/LICENSE-2.0.
#
# Any modifications or derivative works of this code must retain this copyright
# notice, and modified files need to carry a notice indicating that they have
# been altered from the originals.

from textwrap import dedent


def map_content(index: str) -> str:
    intro = dedent(
        """\
---
title: Map problem to circuits
description: Take a classical problem and map it to run on a quantum computer.
---

# Map problem to circuits

The "map problem to circuits" step of a Qiskit pattern describes how a user starts with a classical
problem and figures out how to map it to a quantum computer.

For example, in applications such as chemistry and quantum simulation, this step generally involves 
constructing a quantum circuit representing the Hamiltonian you are attempting to solve.
During this step, for certain problems, it may also be desirable to specify the mapping of
the problem onto qubits in the heavy-hex (or gross) lattice of IBM Hardware from the
outset if the structure of the problem lends itself to optimization earlier. 

It is also worth considering at this point what the outcome of the particular algorithm will be
in preparation for the later execute step, e.g. if the desired outcome involves
inferring correlation functions using Hadamard tests, you might prepare to use `Sampler` whereas
specifying observables would use the `Estimator` and could provide many error mitigation options.

The output of this step in a Qiskit pattern is normally a collection of circuits or quantum operators.

## Guides
"""
    )
    return f"{intro}{index}\n"


def postprocess_index_content(index: str) -> str:
    intro = dedent(
        """\
---
title: Post-process results
description: Post-process the results obtained by running on a quantum computer.
---

# Post-process results

This final "post-process results" step of a Qiskit pattern involves stitching the outputs from
the prior step back together to obtain the desired result. This can involve a range of classical
data processing steps such as visualising results, readout error mitigation techniques, marginalizing
quasi-probability distributions to ascertain results on smaller sets of qubits or post-selection on inherent
properties of the problem, such as total spin, parity, or particle conservation by removing
unphysical observables.

## Guides
"""
    )
    return f"{intro}{index}\n"


def optimize_content(index: str) -> str:
    intro = dedent(
        """\
---
title: Optimize for target hardware
description: Optimize abstract circuits and operators so they can run on quantum hardware. 
---

# Optimize for target hardware

In the "optimize for target hardware" step of a Qiskit pattern, you take the abstract circuits
(or operators) produced from the map step and perform a series of optimizations on them. This
may include mapping the route and layout of the circuit to physical qubit hardware, converting
to basis gates of the hardware, and reducing the number of operations, all designed to optimize
the likelihood of success in the later execute step. At this point you may also wish to debug
your circuits with a simulator before executing on real hardware in the next step.

During this step, abstract circuits must be transpiled to Instruction Set Architecture (ISA) circuits.
An ISA circuit is one that only consists of gates understood by the target hardware (basis gates), and
any multi-qubit gates needed to obey any connectivity constraints (coupling map). Only ISA circuits
can be run on IBM hardware using IBM Qiskit Runtime.

## Guides
"""
    )
    return f"{intro}{index}\n"


def execute_index_content(index: str) -> str:
    intro = dedent(
        """\
---
title: Execute on hardware
description: Run circuits on hardware and return output from a quantum computer. 
---

# Execute on hardware

The "execute on hardware" step of a Qiskit pattern involves running your circuits on hardware
and produces the outputs of the quantum computation. The ISA circuits produced in
the previous step, can be executed using either a Sampler or Estimator Primitive from
Qiskit Runtime, initialised locally on your computer or from a cluster or other
heterogeneous compute environment. These may be executed in a Batch, which allows
parallel transpilation for classical computational efficiency, or a Session,
which allows iterative tasks to be implemented efficiently without queuing delays.

During this step, there is also the option to configure certain error suppression and
mitigation techniques provided by Qiskit Runtime.

Depending on whether you are using the Sampler or Estimator primitive, the outcome of this step
will be different. If using the Sampler, the output will be per-shot measurements
in the form of bitstrings. If using the Estimator, the output will be
expectation values of observables corresponding to physical quantities or cost functions.

## Guides
"""
    )
    return f"{intro}{index}\n"


def patterns_index_content() -> str:
    return dedent(
        """\
---
title: Introduction to Qiskit patterns
description: Qiskit patterns are the broad steps employed when running a domain-specific problem on quantum hardware. 
---

# Introduction to Qiskit patterns

A Qiskit pattern is a general framework for breaking down domain-specific problems and contextualizing required capabilities in stages. This allows for the seamless composability of new capabilities developed by IBM Quantum researchers (and others) and enables a future in which quantum computing tasks are performed by powerful heterogenous (CPU/GPU/QPU) computing infrastructure. Blocks or groups of blocks perform the steps of a pattern, with the Qiskit SDK providing an important foundational layer, supported by other tools or services developed by IBM Quantum or the quantum open-source community. Qiskit patterns allow domain experts to specify a problem and compose the tooling (blocks) that achieves a Qiskit pattern, then that pattern could be executed locally, through cloud services, or deployed with Quantum Serverless.


The four steps of a Qiskit pattern are as follows:
- **Map** problem to quantum circuits and operators
- **Optimize** for target hardware
- **Execute** on target hardware
- **Postprocess** results

Let's review each of these steps in more detail:

## Map problem to quantum circuits and operators


This step describes how a user starts with a classical problem and figures out how to map it to a quantum computer. For example, in applications such as chemistry and quantum simulation, this step generally involves constructing a quantum circuit representing the Hamiltonian you are attempting to solve. During this step, for certain problems, it may also be desirable to specify the mapping of the problem onto qubits in the heavy-hex (or gross) lattice of IBM Hardware from the outset if the structure of the problem lends itself to optimization earlier. It is also worth considering at this point what the outcome of the particular algorithm will be in prepartion for the later execute step, e.g. if the desired outcome involves inferring correlation functions using Hadamard tests, you might prepare to use `Sampler` whereas specifying observables would use the `Estimator` and could provide many error mitigation options.

The output of this step is normally a collection of circuits or quantum operators that can be optimized for hardware in the next step.


## Optimize for target hardware

In this step you take the abstract circuits (or operators) produced from the map step and perform a series of optimizations on them. This may include mapping the route and layout of the circuit to physical qubit hardware, converting to basis gates of the hardware, and reducing the number of operations, all designed to optimize the likelihood of success in the later execute step. At this point you may also wish to test out your circuits with a simulator before executiong on real hardware in the next step

During this step abstract circuits must be transpiled to Instruction Set Architecture (ISA) circuits. An ISA circuit is one that only consists of gates understood by the target hardware (basis gates), and any multi-qubit gates needed to obey any connectivity constraints (coupling map). Only ISA circuits can be run on IBM hardware using IBM Qiskit Runtime.



## Execute on target hardware

This step involes running you circuits on hardware and produces the outputs of the quantum computation. The ISA circuits produced in the previous step, can be executed using either a Sampler or Estimator Primitive from Qiskit Runtime, initialised locally on your computer or from a cluster or other heterogeneous compute environment. These may be executed in a Batch, which allows parallel transpilation for classical computational efficiency, or a Session, which allows iterative tasks to be implemented efficiently without queuing delays. During this step there is also the option to configure certain error suppression and mitigation techniques provided by Qiskit Runtime.

Depending on whether you are using the Sampler or Estimator primitive, the outcome of this step will be different. If using the Sampler the output will be per-shot measurements in the form of bitstrings. If using the Estimator the output will be expectation values of observables corresponding to physical quantities or cost functions.


## Post-process results

This final step involves stitching the outputs from the prior step back together to obtain the desired result. This can involve a range of classical data processing steps such as visualising results, readout error mitigation techniques, marginalizing quasi-probability distributions to ascertain results on smaller sets of qubits or post-selection on inherent properties of the problem, such as total spin, parity, or particle conservation by removing unphysical observables.


---


As we move from bespoke circuit construction to utility-scale workflows, the flexibility and ease with which Qiskit Patterns allows one to compose the different steps of the pattern opens quantum computing to a wide variety of applications and techniques for easy use by quantum computational scientists.
"""
    )


def index_page_content() -> str:
    return dedent(
        """\
---
title: Introduction to Qiskit
description: TODO - 50+ characters long to ignore metadata check for now!
---

# Introduction to Qiskit

[INSERT BIG PATTERNS AND TOOLS IMAGE]


The name "Qiskit" is a general term referring to a collection of software for executing programs on quantum computers. Most notably among these software tools is the open-source Qiskit SDK, and the runtime environment (accessed using Qiskit Runtime) through which you can execute workloads on IBM&reg; quantum computers. As quantum technology evolves, so does Qiskit, with new capabilities released every year which expand this core collection of quantum software. 

In addition, there are many open-source projects that are part of the broader Qiskit ecosystem. These software tools are not part of Qiskit itself, but rather interface with Qiskit and can provide valuable additional functionality.


## The Qiskit SDK

The Qiskit SDK (package name [`qiskit`](https://pypi.org/project/qiskit/)) is an open-source SDK for working with quantum computers at the level of extended (static, dynamic, and scheduled) quantum circuits, operators, and primitives. This library is the core component of Qiskit; it is the largest package under the Qiskit name with the broadest suite of tools for quantum computation, and many other components interface with it.

Some of the most useful features of the Qiskit SDK include:

### Circuit building tools 
([`qiskit.circuit`](/api/qiskit/circuit))
For initializing and manipulating registers, circuits, instructions, gates, parameters, and control flow objects. 

### Circuit library 
([`qiskit.circuit.library`](/api/qiskit/circuit_library)) 
A vast range of circuits, instructions, and gates - key building blocks for circuit-based quantum computations.

### Quantum Information
([`qiskit.quantum_info`](/api/qiskit/quantum_info))
A toolkit for working with quantum states, operators and channels, using exact calculations (no sampling noise). Use this module to specify input observables and analyse fidelity of outputs from primitives queries.

### Transpiler 
([`qiskit.transpiler`](/api/qiskit/transpiler))
For transforming and adapting quantum circuits to suit specific device topology and/or optimizing for execution on real quantum systems.

### Primitives 
([`qiskit.primitives`](/api/qiskit/primitives))
The module that contains the base definitions and reference implementations of the `Sampler` and `Estimator` primitives, from which different quantum hardware providers can derive their own implementations. See more information about the Qiskit Runtime primitives [in the documentation](./primitives).


## Qiskit Runtime

Qiskit Runtime is a cloud-based service for executing quantum computations on IBM Quantum&trade; hardware. The `qiskit-ibm-runtime` package is a client for that service, and is the successor to the Qiskit IBM Provider. The Qiskit Runtime service streamlines quantum computations and provides optimal implementations of the Qiskit primitives for IBM Quantum hardware. To get started with Qiskit Runtime primitives, visit the [documentation](./get-started-with-primitives). 

With Qiskit Runtime you can choose to run your quantum programs on IBM Quantum hardware through the IBM Quantum Platform or IBM Cloud&reg;. See more information on selecting an IBM Quantum channel [in the documentation](./setup-channel).

Qiskit Runtime is designed to use additional classical and quantum compute resources, including techniques such as error suppression and error mitigation, to return a higher-quality result from executing quantum circuits on quantum processors. Examples include dynamical decoupling for error suppression, and readout mitigation and zero-noise extrapolation (ZNE) for error mitigation. Learn how to configure these options on the [Configure error mitigation](./configure-error-mitigation) page.


Qiskit Runtime also includes three types of execution modes for running your quantum program on IBM hardware: _Job_, _Session_, and _Batch_, each of which have different use cases and implications for the quantum job queue. A Job is a single query to a primitive that can be run over a specified number of shots. [Sessions](./sessions) allow you to efficiently run multiple jobs in iterative workloads on quantum computers. [Batch mode](./run-jobs-batch) allows you to submit all your jobs at once for parallel processing.

### Is Qiskit Runtime open-source?
The short answer is, _not all of it_. The Qiskit Runtime service software that handles the technicalities of running your quantum program on an IBM Quantum device (including any error mitigation and suppression) is **not** open-source. However, the Qiskit Runtime client (the interface for users to access the Qiskit Runtime service), the Qiskit SDK running on the server side, and some of the software used for error mitigation, **are** open-source.  To get involved with the Qiskit open-source efforts, visit our GitHub organization at [github.com/Qiskit](https://github.com/Qiskit) and [github.com/Qiskit-Extensions](https://github.com/Qiskit-Extensions/).


## Qiskit Serverless
Creating utility-scale quantum applications generally requires a variety of compute resource requirements. Premium users can use Qiskit Serverless (package name `qiskit-serverless`) to easily submit quantum workflows for remote, managed execution. See more information [here](./qiskit-serverless) about how to use this collection of tools.


## Qiskit Transpiler as a Service
The Qiskit transpiler service ([package name `qiskit-transpiler-service`](https://pypi.org/project/qiskit-transpiler-service/)) is a new experimental service that provides remote transpilation capabilities on the cloud to IBM Quantum Premium Plan users. In addition to the local Qiskit SDK transpiler capabilities, your transpilation tasks can benefit from both IBM Quantum cloud resources and AI-powered transpiler passes using this service. To learn more about how to integrate cloud-based transpilation into your Qiskit workflow you can [check out the documentation](./qiskit-transpiler-service).


## The Qiskit Ecosystem

Beyond Qiskit there are many open-source projects that use the "Qiskit" name but are not part of Qiskit itself; rather, they interface with Qiskit and can provide valuable additional functionality to supplement the core Qiskit workflow. Some of these projects are maintained by IBM Quantum teams, whereas others are supported by the broader open-source community. The Qiskit SDK is designed in a modular, extensible way to make it easy for developers to create projects like these that extend its capabilities.

Some popular projects in the Qiskit ecosystem include:

- **Qiskit Aer** (`qiskit-aer`) - a package for quantum computing simulators with realistic noise models. It provides interfaces to run quantum circuits with or without noise using multiple different simulation methods. Maintained by IBM Quantum.
- **Qiskit Nature** (`qiskit-nature`) - a package that supports solving quantum mechanical natural science problems using quantum computing algorithms, including finding ground and excited states of electronic and vibrational structure problems, measuring the dipole moments of molecular systems and solving the Ising and Fermi-Hubbard models on lattices.  Initially written by IBM Quantum and currently maintained by Algorithmiq.
- **mthree** `mthree` - a package for implementing M3 (Matrix-free Measurement Mitigation), a measurement mitigation technique that solves for corrected measurement probabilities using a dimensionality reduction step followed by either direct LU factorization or a preconditioned iterative method that nominally converges in O(1) steps, and can be computed in parallel. Maintained by IBM Quantum.
- **Qiskit TOQM** `qiskit-toqm` - a transpiler plugin for a routing method that uses the Time-Optimal Qubit Mapping (TOQM) algorithm. Maintained by IBM Quantum.

You can find a catalog of projects in the [Qiskit ecosystem page](https://qiskit.github.io/ecosystem/), as well as information about how to nominate your own project.
"""
    )
