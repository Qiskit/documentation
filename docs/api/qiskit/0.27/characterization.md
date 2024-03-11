---
title: characterization
description: API reference for qiskit.ignis.characterization
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.ignis.characterization
---

<span id="module-qiskit.ignis.characterization" />

<span id="qiskit-ignis-characterization" />

# Characterization

<span id="module-qiskit.ignis.characterization" />

`qiskit.ignis.characterization`

## Calibrations

|                                                                                                                                                    |                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [`rabi_schedules`](qiskit.ignis.characterization.rabi_schedules "qiskit.ignis.characterization.rabi_schedules")(amp\_list, qubits, pulse\_width)   | Generates schedules for a rabi experiment using a Gaussian pulse         |
| [`drag_schedules`](qiskit.ignis.characterization.drag_schedules "qiskit.ignis.characterization.drag_schedules")(beta\_list, qubits, pulse\_amp, …) | Generates schedules for a drag experiment doing a pulse then the - pulse |
| [`RabiFitter`](qiskit.ignis.characterization.RabiFitter "qiskit.ignis.characterization.RabiFitter")(backend\_result, xdata, qubits, fit\_p0)       | Rabi Experiment fitter                                                   |
| [`DragFitter`](qiskit.ignis.characterization.DragFitter "qiskit.ignis.characterization.DragFitter")(backend\_result, xdata, qubits, fit\_p0)       | Drag Experiment fitter                                                   |
| [`get_single_q_pulse`](qiskit.ignis.characterization.get_single_q_pulse "qiskit.ignis.characterization.get_single_q_pulse")(inst\_map, qubits)     | Get the DRAG parameters for the single qubit pulse                       |
| [`update_u_gates`](qiskit.ignis.characterization.update_u_gates "qiskit.ignis.characterization.update_u_gates")(drag\_params\[, …])                | Update the cmd\_def with new single qubit gate values                    |

## Coherence

Design and analyze experiments for characterizing device coherence (e.g. T1, T2). See the following example of T1 estimation.

Generation of coherence circuits: these circuits set the qubit in the excited state, wait different time intervals, then measure the qubit.

```python
import numpy as np
from qiskit.ignis.characterization.coherence import t1_circuits

num_of_gates = np.linspace(10, 300, 5, dtype='int')
gate_time = 0.1

# Note that it is possible to measure several qubits in parallel
qubits = [0, 2]

t1_circs, t1_xdata = t1_circuits(num_of_gates, gate_time, qubits)
```

Backend execution: actually performing the experiment on the device (or simulator).

```python
import qiskit
from qiskit.providers.aer.noise.errors.standard_errors \
            import thermal_relaxation_error
from qiskit.providers.aer.noise import NoiseModel

backend = qiskit.Aer.get_backend('qasm_simulator')
shots = 400

# Let the simulator simulate the following times for qubits 0 and 2:
t_q0 = 25.0
t_q2 = 15.0

# Define T\ :sub:`1` noise:
t1_noise_model = NoiseModel()
t1_noise_model.add_quantum_error(
thermal_relaxation_error(t_q0, 2*t_q0, gate_time),
                        'id', [0])
t1_noise_model.add_quantum_error(
    thermal_relaxation_error(t_q2, 2*t_q2, gate_time),
    'id', [2])

# Run the simulator
t1_backend_result = qiskit.execute(t1_circs, backend, shots=shots,
                                   noise_model=t1_noise_model,
                                   optimization_level=0).result()
```

Analysis of results: deduction of T1, based on the experiments outcomes.

```python
import matplotlib.pyplot as plt
from qiskit.ignis.characterization.coherence import T1Fitter

plt.figure(figsize=(15, 6))

t1_fit = T1Fitter(t1_backend_result, t1_xdata, qubits,
                  fit_p0=[1, t_q0, 0],
                  fit_bounds=([0, 0, -1], [2, 40, 1]))
print(t1_fit.time())
print(t1_fit.time_err())
print(t1_fit.params)
print(t1_fit.params_err)

for i in range(2):
    ax = plt.subplot(1, 2, i+1)
    t1_fit.plot(i, ax=ax)
plt.show()
```

```python
[39.99999999999999, 14.524865484599495]
[22.003599155426738, 0.8842085871625396]
{'0': [array([ 1.37735991, 40.        , -0.38568642]), array([ 1.03250401e+00,  1.45248655e+01, -1.38438724e-02])]}
{'0': [array([ 0.531039  , 22.00359916,  0.53965637]), array([0.0221743 , 0.88420859, 0.02446896])]}
```

![../\_images/characterization\_2\_1.png](/images/api/qiskit/0.27/characterization_2_1.png)

Combine with new results:

```python
t1_backend_result_new = qiskit.execute(t1_circs, backend,
                                       shots=shots,
                                       noise_model=t1_noise_model,
                                       optimization_level=0).result()
t1_fit.add_data(t1_backend_result_new)

plt.figure(figsize=(15, 6))
for i in range(2):
    ax = plt.subplot(1, 2, i+1)
    t1_fit.plot(i, ax=ax)
plt.show()
```

![../\_images/characterization\_3\_0.png](/images/api/qiskit/0.27/characterization_3_0.png)

|                                                                                                                                                        |                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| [`t1_circuits`](qiskit.ignis.characterization.t1_circuits "qiskit.ignis.characterization.t1_circuits")(num\_of\_gates, gate\_time, qubits)             | Generate circuits for T1 measurement.                            |
| [`t2_circuits`](qiskit.ignis.characterization.t2_circuits "qiskit.ignis.characterization.t2_circuits")(num\_of\_gates, gate\_time, qubits)             | Generate circuits for T2 (echo) measurement, by a CPMG sequence. |
| [`t2star_circuits`](qiskit.ignis.characterization.t2star_circuits "qiskit.ignis.characterization.t2star_circuits")(num\_of\_gates, gate\_time, qubits) | Generate circuits for T2\* measurement.                          |
| [`T1Fitter`](qiskit.ignis.characterization.T1Fitter "qiskit.ignis.characterization.T1Fitter")(backend\_result, xdata, qubits, …)                       | Estimate T1, based on experiments outcomes,                      |
| [`T2Fitter`](qiskit.ignis.characterization.T2Fitter "qiskit.ignis.characterization.T2Fitter")(backend\_result, xdata, qubits, …)                       | Estimate T2, based on experiments outcomes.                      |
| [`T2StarFitter`](qiskit.ignis.characterization.T2StarFitter "qiskit.ignis.characterization.T2StarFitter")(backend\_result, xdata, qubits, …)           | Estimate T2\*, based on experiments outcomes.                    |

## Gates

|                                                                                                                                                            |                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [`ampcal_1Q_circuits`](qiskit.ignis.characterization.ampcal_1Q_circuits "qiskit.ignis.characterization.ampcal_1Q_circuits")(max\_reps, qubits)             | Generates circuit for measuring the amplitude error of the single qubit gates |
| [`anglecal_1Q_circuits`](qiskit.ignis.characterization.anglecal_1Q_circuits "qiskit.ignis.characterization.anglecal_1Q_circuits")(max\_reps, qubits\[, …]) | Generates circuit for measuring the angle error of the single qubit gate      |
| [`ampcal_cx_circuits`](qiskit.ignis.characterization.ampcal_cx_circuits "qiskit.ignis.characterization.ampcal_cx_circuits")(max\_reps, qubits, …)          | Generates circuit for measuring the amplitude error of the cx gate            |
| [`anglecal_cx_circuits`](qiskit.ignis.characterization.anglecal_cx_circuits "qiskit.ignis.characterization.anglecal_cx_circuits")(max\_reps, qubits, …)    | Generates circuit for measuring the angle error of the cx gate                |
| [`AmpCalFitter`](qiskit.ignis.characterization.AmpCalFitter "qiskit.ignis.characterization.AmpCalFitter")(backend\_result, xdata, qubits, …)               | Amplitude error fitter                                                        |
| [`AngleCalFitter`](qiskit.ignis.characterization.AngleCalFitter "qiskit.ignis.characterization.AngleCalFitter")(backend\_result, xdata, …)                 | Amplitude error fitter                                                        |
| [`AmpCalCXFitter`](qiskit.ignis.characterization.AmpCalCXFitter "qiskit.ignis.characterization.AmpCalCXFitter")(backend\_result, xdata, …)                 | Amplitude error fitter                                                        |
| [`AngleCalCXFitter`](qiskit.ignis.characterization.AngleCalCXFitter "qiskit.ignis.characterization.AngleCalCXFitter")(backend\_result, xdata, …)           | Amplitude error fitter                                                        |

## Hamiltonian

|                                                                                                                                               |                                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`zz_circuits`](qiskit.ignis.characterization.zz_circuits "qiskit.ignis.characterization.zz_circuits")(num\_of\_gates, gate\_time, qubits, …) | Generates circuit for measuring ZZ. |
| [`ZZFitter`](qiskit.ignis.characterization.ZZFitter "qiskit.ignis.characterization.ZZFitter")(backend\_result, xdata, qubits, …)              | ZZ fitter                           |

## Base Fitters

|                                                                                                                                                      |                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`BaseCoherenceFitter`](qiskit.ignis.characterization.BaseCoherenceFitter "qiskit.ignis.characterization.BaseCoherenceFitter")(description, …\[, …]) | Base class for fitters of characteristic times |
| [`BaseGateFitter`](qiskit.ignis.characterization.BaseGateFitter "qiskit.ignis.characterization.BaseGateFitter")(description, backend\_result, …)     | Base class for fitters of gate errors          |

