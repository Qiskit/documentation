---
title: variational
description: API reference for qiskit.algorithms.time_evolvers.variational
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.algorithms.time_evolvers.variational
---

<span id="qiskit-algorithms-time-evolvers-variational" />

# qiskit.algorithms.time\_evolvers.variational

## Variational Quantum Time Evolutions

<span id="module-qiskit.algorithms.time_evolvers.variational" />

`qiskit.algorithms.time_evolvers.variational`

Algorithms for performing Variational Quantum Time Evolution of quantum states, which can be tailored to near-term devices. `VarQTE` base class exposes an interface, compliant with the Quantum Time Evolution Framework in Qiskit Terra, that is implemented by [`VarQRTE`](qiskit.algorithms.VarQRTE "qiskit.algorithms.VarQRTE") and [`VarQITE`](qiskit.algorithms.VarQITE "qiskit.algorithms.VarQITE") classes for real and imaginary time evolution respectively. The variational approach is taken according to a variational principle chosen by a user.

**Example**

```python
import numpy as np

from qiskit.algorithms import TimeEvolutionProblem, VarQITE
from qiskit.algorithms.time_evolvers.variational import ImaginaryMcLachlanPrinciple
from qiskit.circuit.library import EfficientSU2
from qiskit.quantum_info import SparsePauliOp

observable = SparsePauliOp.from_list(
    [
        ("II", 0.2252),
        ("ZZ", 0.5716),
        ("IZ", 0.3435),
        ("ZI", -0.4347),
        ("YY", 0.091),
        ("XX", 0.091),
    ]
)

ansatz = EfficientSU2(observable.num_qubits, reps=1)
init_param_values = np.zeros(len(ansatz.parameters))
for i in range(len(ansatz.parameters)):
    init_param_values[i] = np.pi / 2
var_principle = ImaginaryMcLachlanPrinciple()
time = 1
evolution_problem = TimeEvolutionProblem(observable, time)
var_qite = VarQITE(ansatz, var_principle, init_param_values)
evolution_result = var_qite.evolve(evolution_problem)
```

### Variational Principles

With variational principles we can project time evolution of a quantum state onto the parameters of a model, in our case a variational quantum circuit.

They can be divided into two categories: Variational Quantum \_Real\_ Time Evolution, which evolves the variational ansatz under the standard Schroediger equation and Variational Quantum \_Imaginary\_ Time Evolution, which evolves under the normalized Wick-rotated Schroedinger equation.

|                                                                                                                                                                                                         |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [`VariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.VariationalPrinciple "qiskit.algorithms.time_evolvers.variational.VariationalPrinciple")(qgt, gradient)                            | A Variational Principle class.                            |
| [`RealVariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.RealVariationalPrinciple "qiskit.algorithms.time_evolvers.variational.RealVariationalPrinciple")(qgt, gradient)                | Class for a Real Variational Principle.                   |
| [`ImaginaryVariationalPrinciple`](qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple "qiskit.algorithms.time_evolvers.variational.ImaginaryVariationalPrinciple")(qgt, gradient) | Abstract class for an Imaginary Variational Principle.    |
| [`RealMcLachlanPrinciple`](qiskit.algorithms.time_evolvers.variational.RealMcLachlanPrinciple "qiskit.algorithms.time_evolvers.variational.RealMcLachlanPrinciple")(\[qgt, gradient])                   | Class for a Real McLachlan's Variational Principle.       |
| [`ImaginaryMcLachlanPrinciple`](qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple "qiskit.algorithms.time_evolvers.variational.ImaginaryMcLachlanPrinciple")(\[qgt, gradient])    | Class for an Imaginary McLachlan's Variational Principle. |

### ODE solvers

ODE solvers that implement the SciPy ODE Solver interface. The Forward Euler Solver is a preferred choice in the presence of noise. One might also use solvers provided by SciPy directly, e.g. RK45.

|                                                                                                                                                                                     |                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`ForwardEulerSolver`](qiskit.algorithms.time_evolvers.variational.ForwardEulerSolver "qiskit.algorithms.time_evolvers.variational.ForwardEulerSolver")(function, t0, y0, t\_bound) | Forward Euler ODE solver. |

