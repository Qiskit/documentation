---
title: primitives
description: API reference for qiskit.primitives
in_page_toc_min_heading_level: 1
python_api_type: module
python_api_name: qiskit.primitives
---

<span id="module-qiskit.primitives" />

<span id="qiskit-primitives" />

<span id="module-qiskit.primitives.base.base_estimator" />

<span id="primitives-qiskit-primitives" />

# Primitives

<span id="module-qiskit.primitives" />

`qiskit.primitives`

## Overview of EstimatorV2

[`BaseEstimatorV2`](qiskit.primitives.BaseEstimatorV2 "qiskit.primitives.base.base_estimator.BaseEstimatorV2") is a primitive that estimates expectation values for provided quantum circuit and observable combinations.

Following construction, an estimator is used by calling its [`run()`](qiskit.primitives.BaseEstimatorV2#run "qiskit.primitives.BaseEstimatorV2.run") method with a list of pubs (Primitive Unified Blocs). Each pub contains three values that, together, define a computation unit of work for the estimator to complete:

*   a single [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), possibly parametrized, whose final state we define as $\psi(\theta)$,
*   one or more observables (specified as any `ObservablesArrayLike`, including [`Pauli`](qiskit.quantum_info.Pauli "qiskit.quantum_info.Pauli"), [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp"), `str`) that specify which expectation values to estimate, denoted $H_j$, and
*   a collection parameter value sets to bind the circuit against, $\theta_k$.

Running an estimator returns a [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.JobV1") object, where calling the method [`qiskit.providers.JobV1.result()`](qiskit.providers.JobV1#result "qiskit.providers.JobV1.result") results in expectation value estimates and metadata for each pub:

$$
\langle\psi(\theta_k)|H_j|\psi(\theta_k)\rangle
$$

The observables and parameter values portion of a pub can be array-valued with arbitrary dimensions, where standard broadcasting rules are applied, so that, in turn, the estimated result for each pub is in general array-valued as well. For more information, please check [here](https://github.com/Qiskit/RFCs/blob/master/0015-estimator-interface.md#arrays-and-broadcasting-).

Here is an example of how the estimator is used.

```python
from qiskit.primitives.statevector_estimator import Estimator
from qiskit.circuit.library import RealAmplitudes
from qiskit.quantum_info import SparsePauliOp

psi1 = RealAmplitudes(num_qubits=2, reps=2)
psi2 = RealAmplitudes(num_qubits=2, reps=3)

H1 = SparsePauliOp.from_list([("II", 1), ("IZ", 2), ("XI", 3)])
H2 = SparsePauliOp.from_list([("IZ", 1)])
H3 = SparsePauliOp.from_list([("ZI", 1), ("ZZ", 1)])

theta1 = [0, 1, 1, 2, 3, 5]
theta2 = [0, 1, 1, 2, 3, 5, 8, 13]
theta3 = [1, 2, 3, 4, 5, 6]

estimator = Estimator()

# calculate [ <psi1(theta1)|H1|psi1(theta1)> ]
job = estimator.run([(psi1, hamiltonian1, [theta1])])
job_result = job.result() # It will block until the job finishes.
print(f"The primitive-job finished with result {job_result}"))

# calculate [ [<psi1(theta1)|H1|psi1(theta1)>,
#              <psi1(theta3)|H3|psi1(theta3)>],
#             [<psi2(theta2)|H2|psi2(theta2)>] ]
job2 = estimator.run(
    [(psi1, [hamiltonian1, hamiltonian3], [theta1, theta3]), (psi2, hamiltonian2, theta2)]
)
job_result = job2.result()
print(f"The primitive-job finished with result {job_result}")
```

## Overview of EstimatorV1

Estimator class estimates expectation values of quantum circuits and observables.

An estimator is initialized with an empty parameter set. The estimator is used to create a [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.JobV1"), via the [`qiskit.primitives.Estimator.run()`](qiskit.primitives.Estimator#run "qiskit.primitives.Estimator.run") method. This method is called with the following parameters

*   quantum circuits ($\psi_i(\theta)$): list of (parameterized) quantum circuits (a list of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") objects).
*   observables ($H_j$): a list of [`SparsePauliOp`](qiskit.quantum_info.SparsePauliOp "qiskit.quantum_info.SparsePauliOp") objects.
*   parameter values ($\theta_k$): list of sets of values to be bound to the parameters of the quantum circuits (list of list of float).

The method returns a [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.JobV1") object, calling [`qiskit.providers.JobV1.result()`](qiskit.providers.JobV1#result "qiskit.providers.JobV1.result") yields the a list of expectation values plus optional metadata like confidence intervals for the estimation.

$$
\langle\psi_i(\theta_k)|H_j|\psi_i(\theta_k)\rangle
$$

Here is an example of how the estimator is used.

```python
from qiskit.primitives import Estimator
from qiskit.circuit.library import RealAmplitudes
from qiskit.quantum_info import SparsePauliOp

psi1 = RealAmplitudes(num_qubits=2, reps=2)
psi2 = RealAmplitudes(num_qubits=2, reps=3)

H1 = SparsePauliOp.from_list([("II", 1), ("IZ", 2), ("XI", 3)])
H2 = SparsePauliOp.from_list([("IZ", 1)])
H3 = SparsePauliOp.from_list([("ZI", 1), ("ZZ", 1)])

theta1 = [0, 1, 1, 2, 3, 5]
theta2 = [0, 1, 1, 2, 3, 5, 8, 13]
theta3 = [1, 2, 3, 4, 5, 6]

estimator = Estimator()

# calculate [ <psi1(theta1)|H1|psi1(theta1)> ]
job = estimator.run([psi1], [H1], [theta1])
job_result = job.result() # It will block until the job finishes.
print(f"The primitive-job finished with result {job_result}"))

# calculate [ <psi1(theta1)|H1|psi1(theta1)>,
#             <psi2(theta2)|H2|psi2(theta2)>,
#             <psi1(theta3)|H3|psi1(theta3)> ]
job2 = estimator.run([psi1, psi2, psi1], [H1, H2, H3], [theta1, theta2, theta3])
job_result = job2.result()
print(f"The primitive-job finished with result {job_result}")
```

<span id="module-qiskit.primitives.base.base_sampler" />

## Overview of SamplerV2

[`BaseSamplerV2`](qiskit.primitives.BaseSamplerV2 "qiskit.primitives.base.base_sampler.BaseSamplerV2") is a primitive that samples outputs of quantum circuits.

Following construction, a sampler is used by calling its [`run()`](qiskit.primitives.BaseSamplerV2#run "qiskit.primitives.BaseSamplerV2.run") method with a list of pubs (Primitive Unified Blocks). Each pub contains values that, together, define a computational unit of work for the sampler to complete:

*   A single [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"), possibly parameterized.
*   A collection parameter value sets to bind the circuit against if it is parametric.
*   Optionally, the number of shots to sample, determined in the run method if not set.

Running a sampler returns a `JobV1` object, where calling the method `result()` results in output samples and metadata for each pub.

Here is an example of how a sampler is used.

```python
from qiskit.primitives.statevector_sampler import Sampler
from qiskit import QuantumCircuit
from qiskit.circuit.library import RealAmplitudes

# create a Bell circuit
bell = QuantumCircuit(2)
bell.h(0)
bell.cx(0, 1)
bell.measure_all()

# create two parameterized circuits
pqc = RealAmplitudes(num_qubits=2, reps=2)
pqc.measure_all()
pqc2 = RealAmplitudes(num_qubits=2, reps=3)
pqc2.measure_all()

theta1 = [0, 1, 1, 2, 3, 5]
theta2 = [0, 1, 2, 3, 4, 5, 6, 7]

# initialization of the sampler
sampler = Sampler()

# collect 128 shots from the Bell circuit
job = sampler.run([bell], shots=128)
job_result = job.result()
print(f"The primitive-job finished with result {job_result}"))

# run a sampler job on the parameterized circuits
job2 = sampler.run([(pqc, theta1), (pqc2, theta2)]
job_result = job2.result()
print(f"The primitive-job finished with result {job_result}"))
```

## Overview of SamplerV1

Sampler class calculates probabilities or quasi-probabilities of bitstrings from quantum circuits.

A sampler is initialized with an empty parameter set. The sampler is used to create a [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.JobV1"), via the [`qiskit.primitives.Sampler.run()`](qiskit.primitives.Sampler#run "qiskit.primitives.Sampler.run") method. This method is called with the following parameters

*   quantum circuits ($\psi_i(\theta)$): list of (parameterized) quantum circuits. (a list of [`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit") objects)
*   parameter values ($\theta_k$): list of sets of parameter values to be bound to the parameters of the quantum circuits. (list of list of float)

The method returns a [`JobV1`](qiskit.providers.JobV1 "qiskit.providers.JobV1") object, calling [`qiskit.providers.JobV1.result()`](qiskit.providers.JobV1#result "qiskit.providers.JobV1.result") yields a [`SamplerResult`](qiskit.primitives.SamplerResult "qiskit.primitives.SamplerResult") object, which contains probabilities or quasi-probabilities of bitstrings, plus optional metadata like error bars in the samples.

Here is an example of how sampler is used.

```python
from qiskit.primitives import Sampler
from qiskit import QuantumCircuit
from qiskit.circuit.library import RealAmplitudes

# a Bell circuit
bell = QuantumCircuit(2)
bell.h(0)
bell.cx(0, 1)
bell.measure_all()

# two parameterized circuits
pqc = RealAmplitudes(num_qubits=2, reps=2)
pqc.measure_all()
pqc2 = RealAmplitudes(num_qubits=2, reps=3)
pqc2.measure_all()

theta1 = [0, 1, 1, 2, 3, 5]
theta2 = [0, 1, 2, 3, 4, 5, 6, 7]

# initialization of the sampler
sampler = Sampler()

# Sampler runs a job on the Bell circuit
job = sampler.run(circuits=[bell], parameter_values=[[]], parameters=[[]])
job_result = job.result()
print([q.binary_probabilities() for q in job_result.quasi_dists])

# Sampler runs a job on the parameterized circuits
job2 = sampler.run(
    circuits=[pqc, pqc2],
    parameter_values=[theta1, theta2],
    parameters=[pqc.parameters, pqc2.parameters])
job_result = job2.result()
print([q.binary_probabilities() for q in job_result.quasi_dists])
```

## Estimator

|                                                                                                                         |                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator")                                    | alias of `BaseEstimatorV1`                                                                                        |
| [`Estimator`](qiskit.primitives.Estimator "qiskit.primitives.Estimator")(\*\[, options])                                | Reference implementation of [`BaseEstimator`](qiskit.primitives.BaseEstimator "qiskit.primitives.BaseEstimator"). |
| [`BackendEstimator`](qiskit.primitives.BackendEstimator "qiskit.primitives.BackendEstimator")(backend\[, options, ...]) | Evaluates expectation value using Pauli rotation gates.                                                           |

## EstimatorV2

|                                                                                                                                           |                                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`BaseEstimatorV2`](qiskit.primitives.BaseEstimatorV2 "qiskit.primitives.BaseEstimatorV2")()                                              | Estimator base class version 2.                                                                                                                        |
| [`StatevectorEstimator`](qiskit.primitives.StatevectorEstimator "qiskit.primitives.StatevectorEstimator")(\*\[, default\_precision, ...]) | Simple implementation of [`BaseEstimatorV2`](qiskit.primitives.BaseEstimatorV2 "qiskit.primitives.BaseEstimatorV2") with full state vector simulation. |

## Sampler

|                                                                                                                   |                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`BaseSampler`](qiskit.primitives.BaseSampler "qiskit.primitives.BaseSampler")                                    | alias of `BaseSamplerV1`                                                                                         |
| [`Sampler`](qiskit.primitives.Sampler "qiskit.primitives.Sampler")(\*\[, options])                                | Sampler class.                                                                                                   |
| [`BackendSampler`](qiskit.primitives.BackendSampler "qiskit.primitives.BackendSampler")(backend\[, options, ...]) | A `BaseSampler` implementation that provides an interface for leveraging the sampler interface from any backend. |

## SamplerV2

|                                                                                                                                  |                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`BaseSamplerV2`](qiskit.primitives.BaseSamplerV2 "qiskit.primitives.BaseSamplerV2")()                                           | Sampler base class version 2.                                                                                                                     |
| [`StatevectorSampler`](qiskit.primitives.StatevectorSampler "qiskit.primitives.StatevectorSampler")(\*\[, default\_shots, seed]) | Simple implementation of [`BaseSamplerV2`](qiskit.primitives.BaseSamplerV2 "qiskit.primitives.BaseSamplerV2") using full state vector simulation. |

## Results

|                                                                                                                       |                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`EstimatorResult`](qiskit.primitives.EstimatorResult "qiskit.primitives.EstimatorResult")(values, metadata)          | Result of Estimator.                                      |
| [`SamplerResult`](qiskit.primitives.SamplerResult "qiskit.primitives.SamplerResult")(quasi\_dists, metadata)          | Result of Sampler.                                        |
| [`PrimitiveResult`](qiskit.primitives.PrimitiveResult "qiskit.primitives.PrimitiveResult")(pub\_results\[, metadata]) | A container for multiple pub results and global metadata. |
| [`PubResult`](qiskit.primitives.PubResult "qiskit.primitives.PubResult")(data\[, metadata])                           | Result of Primitive Unified Bloc.                         |

