---
title: library
description: API reference for qiskit.circuit.library
in_page_toc_min_heading_level: 2
python_api_type: module
python_api_name: qiskit.circuit.library
---

<span id="qiskit-circuit-library" />

# Circuit Library

## Circuit Library

<span id="module-qiskit.circuit.library" />

`qiskit.circuit.library`

### Standard Gates

|                                                                                                                                    |                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| [`Barrier`](qiskit.circuit.library.Barrier "qiskit.circuit.library.Barrier")(num\_qubits)                                          | Barrier instruction.                                                 |
| [`C3XGate`](qiskit.circuit.library.C3XGate "qiskit.circuit.library.C3XGate")(\[angle, label, ctrl\_state])                         | The 4-qubit controlled X gate.                                       |
| [`C3SXGate`](qiskit.circuit.library.C3SXGate "qiskit.circuit.library.C3SXGate")(\[label, ctrl\_state, angle])                      | The 3-qubit controlled sqrt-X gate.                                  |
| [`C4XGate`](qiskit.circuit.library.C4XGate "qiskit.circuit.library.C4XGate")(\[label, ctrl\_state])                                | The 4-qubit controlled X gate.                                       |
| [`CCXGate`](qiskit.circuit.library.CCXGate "qiskit.circuit.library.CCXGate")(\[label, ctrl\_state])                                | CCX gate, also known as Toffoli gate.                                |
| [`DCXGate`](qiskit.circuit.library.DCXGate "qiskit.circuit.library.DCXGate")()                                                     | Double-CNOT gate.                                                    |
| [`CHGate`](qiskit.circuit.library.CHGate "qiskit.circuit.library.CHGate")(\[label, ctrl\_state])                                   | Controlled-Hadamard gate.                                            |
| [`CPhaseGate`](qiskit.circuit.library.CPhaseGate "qiskit.circuit.library.CPhaseGate")(theta\[, label, ctrl\_state])                | Controlled-Phase gate.                                               |
| [`CRXGate`](qiskit.circuit.library.CRXGate "qiskit.circuit.library.CRXGate")(theta\[, label, ctrl\_state])                         | Controlled-RX gate.                                                  |
| [`CRYGate`](qiskit.circuit.library.CRYGate "qiskit.circuit.library.CRYGate")(theta\[, label, ctrl\_state])                         | Controlled-RY gate.                                                  |
| [`CRZGate`](qiskit.circuit.library.CRZGate "qiskit.circuit.library.CRZGate")(theta\[, label, ctrl\_state])                         | Controlled-RZ gate.                                                  |
| [`CSwapGate`](qiskit.circuit.library.CSwapGate "qiskit.circuit.library.CSwapGate")(\[label, ctrl\_state])                          | Controlled-X gate.                                                   |
| [`CSXGate`](qiskit.circuit.library.CSXGate "qiskit.circuit.library.CSXGate")(\[label, ctrl\_state])                                | Controlled-√X gate.                                                  |
| [`CUGate`](qiskit.circuit.library.CUGate "qiskit.circuit.library.CUGate")(theta, phi, lam, gamma\[, label, …])                     | Controlled-U gate (4-parameter two-qubit gate).                      |
| [`CU1Gate`](qiskit.circuit.library.CU1Gate "qiskit.circuit.library.CU1Gate")(theta\[, label, ctrl\_state])                         | Controlled-U1 gate.                                                  |
| [`CU3Gate`](qiskit.circuit.library.CU3Gate "qiskit.circuit.library.CU3Gate")(theta, phi, lam\[, label, ctrl\_state])               | Controlled-U3 gate (3-parameter two-qubit gate).                     |
| [`CXGate`](qiskit.circuit.library.CXGate "qiskit.circuit.library.CXGate")(\[label, ctrl\_state])                                   | Controlled-X gate.                                                   |
| [`CYGate`](qiskit.circuit.library.CYGate "qiskit.circuit.library.CYGate")(\[label, ctrl\_state])                                   | Controlled-Y gate.                                                   |
| [`CZGate`](qiskit.circuit.library.CZGate "qiskit.circuit.library.CZGate")(\[label, ctrl\_state])                                   | Controlled-Z gate.                                                   |
| [`HGate`](qiskit.circuit.library.HGate "qiskit.circuit.library.HGate")(\[label])                                                   | Single-qubit Hadamard gate.                                          |
| [`IGate`](qiskit.circuit.library.IGate "qiskit.circuit.library.IGate")(\[label])                                                   | Identity gate.                                                       |
| [`MCPhaseGate`](qiskit.circuit.library.MCPhaseGate "qiskit.circuit.library.MCPhaseGate")(lam, num\_ctrl\_qubits\[, label])         | Multi-controlled-Phase gate.                                         |
| [`MCXGate`](qiskit.circuit.library.MCXGate "qiskit.circuit.library.MCXGate")(\[num\_ctrl\_qubits, label, ctrl\_state])             | The general, multi-controlled X gate.                                |
| [`MCXGrayCode`](qiskit.circuit.library.MCXGrayCode "qiskit.circuit.library.MCXGrayCode")(\[num\_ctrl\_qubits, label, ctrl\_state]) | Implement the multi-controlled X gate using the Gray code.           |
| [`MCXRecursive`](qiskit.circuit.library.MCXRecursive "qiskit.circuit.library.MCXRecursive")(\[num\_ctrl\_qubits, label, …])        | Implement the multi-controlled X gate using recursion.               |
| [`MCXVChain`](qiskit.circuit.library.MCXVChain "qiskit.circuit.library.MCXVChain")(\[num\_ctrl\_qubits, dirty\_ancillas, …])       | Implement the multi-controlled X gate using a V-chain of CX gates.   |
| [`Measure`](qiskit.circuit.library.Measure "qiskit.circuit.library.Measure")()                                                     | Quantum measurement in the computational basis.                      |
| [`MSGate`](qiskit.circuit.library.MSGate "qiskit.circuit.library.MSGate")(num\_qubits, theta\[, label])                            | MSGate has been deprecated.                                          |
| [`PhaseGate`](qiskit.circuit.library.PhaseGate "qiskit.circuit.library.PhaseGate")(theta\[, label])                                | Single-qubit rotation about the Z axis.                              |
| [`RCCXGate`](qiskit.circuit.library.RCCXGate "qiskit.circuit.library.RCCXGate")(\[label])                                          | The simplified Toffoli gate, also referred to as Margolus gate.      |
| [`RC3XGate`](qiskit.circuit.library.RC3XGate "qiskit.circuit.library.RC3XGate")(\[label])                                          | The simplified 3-controlled Toffoli gate.                            |
| [`Reset`](qiskit.circuit.library.Reset "qiskit.circuit.library.Reset")()                                                           | Qubit reset.                                                         |
| [`RGate`](qiskit.circuit.library.RGate "qiskit.circuit.library.RGate")(theta, phi)                                                 | Rotation θ around the cos(φ)x + sin(φ)y axis.                        |
| [`RXGate`](qiskit.circuit.library.RXGate "qiskit.circuit.library.RXGate")(theta\[, label])                                         | Single-qubit rotation about the X axis.                              |
| [`RXXGate`](qiskit.circuit.library.RXXGate "qiskit.circuit.library.RXXGate")(theta)                                                | A parametric 2-qubit $X \otimes X$ interaction (rotation about XX).  |
| [`RYGate`](qiskit.circuit.library.RYGate "qiskit.circuit.library.RYGate")(theta\[, label])                                         | Single-qubit rotation about the Y axis.                              |
| [`RYYGate`](qiskit.circuit.library.RYYGate "qiskit.circuit.library.RYYGate")(theta)                                                | A parametric 2-qubit $Y \otimes Y$ interaction (rotation about YY).  |
| [`RZGate`](qiskit.circuit.library.RZGate "qiskit.circuit.library.RZGate")(phi\[, label])                                           | Single-qubit rotation about the Z axis.                              |
| [`RZZGate`](qiskit.circuit.library.RZZGate "qiskit.circuit.library.RZZGate")(theta)                                                | A parametric 2-qubit $Z \otimes Z$ interaction (rotation about ZZ).  |
| [`RZXGate`](qiskit.circuit.library.RZXGate "qiskit.circuit.library.RZXGate")(theta)                                                | A parametric 2-qubit $Z \otimes X$ interaction (rotation about ZX).  |
| [`ECRGate`](qiskit.circuit.library.ECRGate "qiskit.circuit.library.ECRGate")()                                                     | An echoed RZX(pi/2) gate implemented using RZX(pi/4) and RZX(-pi/4). |
| [`SGate`](qiskit.circuit.library.SGate "qiskit.circuit.library.SGate")(\[label])                                                   | Single qubit S gate (Z\*\*0.5).                                      |
| [`SdgGate`](qiskit.circuit.library.SdgGate "qiskit.circuit.library.SdgGate")(\[label])                                             | Single qubit S-adjoint gate (\~Z\*\*0.5).                            |
| [`SwapGate`](qiskit.circuit.library.SwapGate "qiskit.circuit.library.SwapGate")(\[label])                                          | The SWAP gate.                                                       |
| [`iSwapGate`](qiskit.circuit.library.iSwapGate "qiskit.circuit.library.iSwapGate")()                                               | iSWAP gate.                                                          |
| [`SXGate`](qiskit.circuit.library.SXGate "qiskit.circuit.library.SXGate")(\[label])                                                | The single-qubit Sqrt(X) gate ($\sqrt{X}$).                          |
| [`SXdgGate`](qiskit.circuit.library.SXdgGate "qiskit.circuit.library.SXdgGate")(\[label])                                          | The inverse single-qubit Sqrt(X) gate.                               |
| [`TGate`](qiskit.circuit.library.TGate "qiskit.circuit.library.TGate")(\[label])                                                   | Single qubit T gate (Z\*\*0.25).                                     |
| [`TdgGate`](qiskit.circuit.library.TdgGate "qiskit.circuit.library.TdgGate")(\[label])                                             | Single qubit T-adjoint gate (\~Z\*\*0.25).                           |
| [`UGate`](qiskit.circuit.library.UGate "qiskit.circuit.library.UGate")(theta, phi, lam\[, label])                                  | Generic single-qubit rotation gate with 3 Euler angles.              |
| [`U1Gate`](qiskit.circuit.library.U1Gate "qiskit.circuit.library.U1Gate")(theta\[, label])                                         | Single-qubit rotation about the Z axis.                              |
| [`U2Gate`](qiskit.circuit.library.U2Gate "qiskit.circuit.library.U2Gate")(phi, lam\[, label])                                      | Single-qubit rotation about the X+Z axis.                            |
| [`U3Gate`](qiskit.circuit.library.U3Gate "qiskit.circuit.library.U3Gate")(theta, phi, lam\[, label])                               | Generic single-qubit rotation gate with 3 Euler angles.              |
| [`XGate`](qiskit.circuit.library.XGate "qiskit.circuit.library.XGate")(\[label])                                                   | The single-qubit Pauli-X gate ($\sigma_x$).                          |
| [`YGate`](qiskit.circuit.library.YGate "qiskit.circuit.library.YGate")(\[label])                                                   | The single-qubit Pauli-Y gate ($\sigma_y$).                          |
| [`ZGate`](qiskit.circuit.library.ZGate "qiskit.circuit.library.ZGate")(\[label])                                                   | The single-qubit Pauli-Z gate ($\sigma_z$).                          |

### Generalized Gates

|                                                                                                                             |                                                                                         |   |                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | - | ----------------------------------- |
| [`Diagonal`](qiskit.circuit.library.Diagonal "qiskit.circuit.library.Diagonal")(diag)                                       | Diagonal circuit.                                                                       |   |                                     |
| [`MCMT`](qiskit.circuit.library.MCMT "qiskit.circuit.library.MCMT")(gate, num\_ctrl\_qubits, num\_target\_qubits)           | The multi-controlled multi-target gate, for an arbitrary singly controlled target gate. |   |                                     |
| [`MCMTVChain`](qiskit.circuit.library.MCMTVChain "qiskit.circuit.library.MCMTVChain")(gate, num\_ctrl\_qubits, …\[, label]) | The MCMT implementation using the CCX V-chain.                                          |   |                                     |
| [`Permutation`](qiskit.circuit.library.Permutation "qiskit.circuit.library.Permutation")(num\_qubits\[, pattern, seed])     | An n\_qubit circuit that permutes qubits.                                               |   |                                     |
| [`GMS`](qiskit.circuit.library.GMS "qiskit.circuit.library.GMS")(num\_qubits, theta)                                        | Global Mølmer–Sørensen gate.                                                            |   |                                     |
| [`GR`](qiskit.circuit.library.GR "qiskit.circuit.library.GR")(num\_qubits, theta, phi)                                      | Global R gate.                                                                          |   |                                     |
| [`GRX`](qiskit.circuit.library.GRX "qiskit.circuit.library.GRX")(num\_qubits, theta)                                        | Global RX gate.                                                                         |   |                                     |
| [`GRY`](qiskit.circuit.library.GRY "qiskit.circuit.library.GRY")(num\_qubits, theta)                                        | Global RY gate.                                                                         |   |                                     |
| [`GRZ`](qiskit.circuit.library.GRZ "qiskit.circuit.library.GRZ")(num\_qubits, phi)                                          | Global RZ gate.                                                                         |   |                                     |
| [`RVGate`](qiskit.circuit.library.RVGate "qiskit.circuit.library.RVGate")(v\_x, v\_y, v\_z\[, basis])                       | Rotation around arbitrary rotation axis $v$ where \$                                    | v | \$ is angle of rotation in radians. |

### Boolean Logic Circuits

|                                                                                                              |                                                                               |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| [`AND`](qiskit.circuit.library.AND "qiskit.circuit.library.AND")(num\_variable\_qubits\[, flags, mcx\_mode]) | A circuit implementing the logical AND operation on a number of qubits.       |
| [`OR`](qiskit.circuit.library.OR "qiskit.circuit.library.OR")(num\_variable\_qubits\[, flags, mcx\_mode])    | A circuit implementing the logical OR operation on a number of qubits.        |
| [`XOR`](qiskit.circuit.library.XOR "qiskit.circuit.library.XOR")(num\_qubits\[, amount, seed])               | An n\_qubit circuit for bitwise xor-ing the input with some integer `amount`. |
| [`InnerProduct`](qiskit.circuit.library.InnerProduct "qiskit.circuit.library.InnerProduct")(num\_qubits)     | An n\_qubit circuit that computes the inner product of two registers.         |

### Basis Change Circuits

|                                                                                                            |                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| [`QFT`](qiskit.circuit.library.QFT "qiskit.circuit.library.QFT")(\[num\_qubits, approximation\_degree, …]) | Quantum Fourier Transform Circuit. |

### Arithmetic Circuits

#### Amplitude Functions

|                                                                                                                                                     |                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`LinearAmplitudeFunction`](qiskit.circuit.library.LinearAmplitudeFunction "qiskit.circuit.library.LinearAmplitudeFunction")(num\_state\_qubits, …) | A circuit implementing a (piecewise) linear function on qubit amplitudes. |

#### Functional Pauli Rotations

|                                                                                                                                                                  |                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [`FunctionalPauliRotations`](qiskit.circuit.library.FunctionalPauliRotations "qiskit.circuit.library.FunctionalPauliRotations")(\[num\_state\_qubits, …])        | Base class for functional Pauli rotations.              |
| [`LinearPauliRotations`](qiskit.circuit.library.LinearPauliRotations "qiskit.circuit.library.LinearPauliRotations")(\[num\_state\_qubits, …])                    | Linearly-controlled X, Y or Z rotation.                 |
| [`PolynomialPauliRotations`](qiskit.circuit.library.PolynomialPauliRotations "qiskit.circuit.library.PolynomialPauliRotations")(\[num\_state\_qubits, …])        | A circuit implementing polynomial Pauli rotations.      |
| [`PiecewiseLinearPauliRotations`](qiskit.circuit.library.PiecewiseLinearPauliRotations "qiskit.circuit.library.PiecewiseLinearPauliRotations")(\[…])             | Piecewise-linearly-controlled Pauli rotations.          |
| [`PiecewisePolynomialPauliRotations`](qiskit.circuit.library.PiecewisePolynomialPauliRotations "qiskit.circuit.library.PiecewisePolynomialPauliRotations")(\[…]) | Piecewise-polynomially-controlled Pauli rotations.      |
| [`PiecewiseChebyshev`](qiskit.circuit.library.PiecewiseChebyshev "qiskit.circuit.library.PiecewiseChebyshev")(f\_x\[, degree, …])                                | Piecewise Chebyshev approximation to an input function. |

#### Adders

|                                                                                                                                      |                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| [`WeightedAdder`](qiskit.circuit.library.WeightedAdder "qiskit.circuit.library.WeightedAdder")(\[num\_state\_qubits, weights, name]) | A circuit to compute the weighted sum of qubit registers. |

#### Comparators

|                                                                                                                                             |                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [`IntegerComparator`](qiskit.circuit.library.IntegerComparator "qiskit.circuit.library.IntegerComparator")(\[num\_state\_qubits, value, …]) | Integer Comparator. |

#### Functions on binary variables

|                                                                                                                           |                                                                             |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [`QuadraticForm`](qiskit.circuit.library.QuadraticForm "qiskit.circuit.library.QuadraticForm")(\[num\_result\_qubits, …]) | Implements a quadratic form on binary variables encoded in qubit registers. |

### Amplitude Functions

|                                                                                                                                                     |                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`LinearAmplitudeFunction`](qiskit.circuit.library.LinearAmplitudeFunction "qiskit.circuit.library.LinearAmplitudeFunction")(num\_state\_qubits, …) | A circuit implementing a (piecewise) linear function on qubit amplitudes. |

### Particular Quantum Circuits

|                                                                                                                                        |                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| [`FourierChecking`](qiskit.circuit.library.FourierChecking "qiskit.circuit.library.FourierChecking")(f, g)                             | Fourier checking circuit.                            |
| [`GraphState`](qiskit.circuit.library.GraphState "qiskit.circuit.library.GraphState")(adjacency\_matrix)                               | Circuit to prepare a graph state.                    |
| [`HiddenLinearFunction`](qiskit.circuit.library.HiddenLinearFunction "qiskit.circuit.library.HiddenLinearFunction")(adjacency\_matrix) | Circuit to solve the hidden linear function problem. |
| [`IQP`](qiskit.circuit.library.IQP "qiskit.circuit.library.IQP")(interactions)                                                         | Instantaneous quantum polynomial (IQP) circuit.      |
| [`QuantumVolume`](qiskit.circuit.library.QuantumVolume "qiskit.circuit.library.QuantumVolume")(num\_qubits\[, depth, seed, …])         | A quantum volume model circuit.                      |
| [`PhaseEstimation`](qiskit.circuit.library.PhaseEstimation "qiskit.circuit.library.PhaseEstimation")(num\_evaluation\_qubits, unitary) | Phase Estimation circuit.                            |
| [`GroverOperator`](qiskit.circuit.library.GroverOperator "qiskit.circuit.library.GroverOperator")(oracle\[, state\_preparation, …])    | The Grover operator.                                 |
| [`PhaseOracle`](qiskit.circuit.library.PhaseOracle "qiskit.circuit.library.PhaseOracle")(expression\[, synthesizer])                   | Phase Oracle.                                        |

### Probability distributions

|                                                                                                                                               |                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [`UniformDistribution`](qiskit.circuit.library.UniformDistribution "qiskit.circuit.library.UniformDistribution")(num\_qubits\[, name])        | A circuit to encode a discretized uniform distribution in qubit amplitudes.    |
| [`NormalDistribution`](qiskit.circuit.library.NormalDistribution "qiskit.circuit.library.NormalDistribution")(num\_qubits\[, mu, sigma, …])   | A circuit to encode a discretized normal distribution in qubit amplitudes.     |
| [`LogNormalDistribution`](qiskit.circuit.library.LogNormalDistribution "qiskit.circuit.library.LogNormalDistribution")(num\_qubits\[, mu, …]) | A circuit to encode a discretized log-normal distribution in qubit amplitudes. |

### N-local circuits

|                                                                                                                                              |                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| [`NLocal`](qiskit.circuit.library.NLocal "qiskit.circuit.library.NLocal")(\[num\_qubits, rotation\_blocks, …])                               | The n-local circuit class.                                                             |
| [`TwoLocal`](qiskit.circuit.library.TwoLocal "qiskit.circuit.library.TwoLocal")(\[num\_qubits, rotation\_blocks, …])                         | The two-local circuit.                                                                 |
| [`PauliTwoDesign`](qiskit.circuit.library.PauliTwoDesign "qiskit.circuit.library.PauliTwoDesign")(\[num\_qubits, reps, seed, …])             | The Pauli Two-Design ansatz.                                                           |
| [`RealAmplitudes`](qiskit.circuit.library.RealAmplitudes "qiskit.circuit.library.RealAmplitudes")(\[num\_qubits, entanglement, …])           | The real-amplitudes 2-local circuit.                                                   |
| [`EfficientSU2`](qiskit.circuit.library.EfficientSU2 "qiskit.circuit.library.EfficientSU2")(\[num\_qubits, su2\_gates, …])                   | The hardware efficient SU(2) 2-local circuit.                                          |
| [`ExcitationPreserving`](qiskit.circuit.library.ExcitationPreserving "qiskit.circuit.library.ExcitationPreserving")(\[num\_qubits, mode, …]) | The heuristic excitation-preserving wave function ansatz.                              |
| [`QAOAAnsatz`](qiskit.circuit.library.QAOAAnsatz "qiskit.circuit.library.QAOAAnsatz")(\[cost\_operator, reps, …])                            | A generalized QAOA quantum circuit with a support of custom initial states and mixers. |

### Data encoding circuits

|                                                                                                                                      |                                            |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| [`PauliFeatureMap`](qiskit.circuit.library.PauliFeatureMap "qiskit.circuit.library.PauliFeatureMap")(\[feature\_dimension, reps, …]) | The Pauli Expansion circuit.               |
| [`ZFeatureMap`](qiskit.circuit.library.ZFeatureMap "qiskit.circuit.library.ZFeatureMap")(feature\_dimension\[, reps, …])             | The first order Pauli Z-evolution circuit. |
| [`ZZFeatureMap`](qiskit.circuit.library.ZZFeatureMap "qiskit.circuit.library.ZZFeatureMap")(feature\_dimension\[, reps, …])          | Second-order Pauli-Z evolution circuit.    |

### NCT (Not-CNOT-Toffoli) template circuits

|                                                                                                                                                           |                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`templates.nct.template_nct_2a_1`](qiskit.circuit.library.templates.nct.template_nct_2a_1 "qiskit.circuit.library.templates.nct.template_nct_2a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_2a_2`](qiskit.circuit.library.templates.nct.template_nct_2a_2 "qiskit.circuit.library.templates.nct.template_nct_2a_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_2a_3`](qiskit.circuit.library.templates.nct.template_nct_2a_3 "qiskit.circuit.library.templates.nct.template_nct_2a_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_4a_1`](qiskit.circuit.library.templates.nct.template_nct_4a_1 "qiskit.circuit.library.templates.nct.template_nct_4a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_4a_2`](qiskit.circuit.library.templates.nct.template_nct_4a_2 "qiskit.circuit.library.templates.nct.template_nct_4a_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_4a_3`](qiskit.circuit.library.templates.nct.template_nct_4a_3 "qiskit.circuit.library.templates.nct.template_nct_4a_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_4b_1`](qiskit.circuit.library.templates.nct.template_nct_4b_1 "qiskit.circuit.library.templates.nct.template_nct_4b_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_4b_2`](qiskit.circuit.library.templates.nct.template_nct_4b_2 "qiskit.circuit.library.templates.nct.template_nct_4b_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_5a_1`](qiskit.circuit.library.templates.nct.template_nct_5a_1 "qiskit.circuit.library.templates.nct.template_nct_5a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_5a_2`](qiskit.circuit.library.templates.nct.template_nct_5a_2 "qiskit.circuit.library.templates.nct.template_nct_5a_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_5a_3`](qiskit.circuit.library.templates.nct.template_nct_5a_3 "qiskit.circuit.library.templates.nct.template_nct_5a_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_5a_4`](qiskit.circuit.library.templates.nct.template_nct_5a_4 "qiskit.circuit.library.templates.nct.template_nct_5a_4")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6a_1`](qiskit.circuit.library.templates.nct.template_nct_6a_1 "qiskit.circuit.library.templates.nct.template_nct_6a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6a_2`](qiskit.circuit.library.templates.nct.template_nct_6a_2 "qiskit.circuit.library.templates.nct.template_nct_6a_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6a_3`](qiskit.circuit.library.templates.nct.template_nct_6a_3 "qiskit.circuit.library.templates.nct.template_nct_6a_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6a_4`](qiskit.circuit.library.templates.nct.template_nct_6a_4 "qiskit.circuit.library.templates.nct.template_nct_6a_4")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6b_1`](qiskit.circuit.library.templates.nct.template_nct_6b_1 "qiskit.circuit.library.templates.nct.template_nct_6b_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6b_2`](qiskit.circuit.library.templates.nct.template_nct_6b_2 "qiskit.circuit.library.templates.nct.template_nct_6b_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_6c_1`](qiskit.circuit.library.templates.nct.template_nct_6c_1 "qiskit.circuit.library.templates.nct.template_nct_6c_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_7a_1`](qiskit.circuit.library.templates.nct.template_nct_7a_1 "qiskit.circuit.library.templates.nct.template_nct_7a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_7b_1`](qiskit.circuit.library.templates.nct.template_nct_7b_1 "qiskit.circuit.library.templates.nct.template_nct_7b_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_7c_1`](qiskit.circuit.library.templates.nct.template_nct_7c_1 "qiskit.circuit.library.templates.nct.template_nct_7c_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_7d_1`](qiskit.circuit.library.templates.nct.template_nct_7d_1 "qiskit.circuit.library.templates.nct.template_nct_7d_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_7e_1`](qiskit.circuit.library.templates.nct.template_nct_7e_1 "qiskit.circuit.library.templates.nct.template_nct_7e_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_2a_1`](qiskit.circuit.library.templates.nct.template_nct_2a_1 "qiskit.circuit.library.templates.nct.template_nct_2a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9a_1`](qiskit.circuit.library.templates.nct.template_nct_9a_1 "qiskit.circuit.library.templates.nct.template_nct_9a_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_1`](qiskit.circuit.library.templates.nct.template_nct_9c_1 "qiskit.circuit.library.templates.nct.template_nct_9c_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_2`](qiskit.circuit.library.templates.nct.template_nct_9c_2 "qiskit.circuit.library.templates.nct.template_nct_9c_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_3`](qiskit.circuit.library.templates.nct.template_nct_9c_3 "qiskit.circuit.library.templates.nct.template_nct_9c_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_4`](qiskit.circuit.library.templates.nct.template_nct_9c_4 "qiskit.circuit.library.templates.nct.template_nct_9c_4")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_5`](qiskit.circuit.library.templates.nct.template_nct_9c_5 "qiskit.circuit.library.templates.nct.template_nct_9c_5")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_6`](qiskit.circuit.library.templates.nct.template_nct_9c_6 "qiskit.circuit.library.templates.nct.template_nct_9c_6")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_7`](qiskit.circuit.library.templates.nct.template_nct_9c_7 "qiskit.circuit.library.templates.nct.template_nct_9c_7")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_8`](qiskit.circuit.library.templates.nct.template_nct_9c_8 "qiskit.circuit.library.templates.nct.template_nct_9c_8")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_9`](qiskit.circuit.library.templates.nct.template_nct_9c_9 "qiskit.circuit.library.templates.nct.template_nct_9c_9")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_10`](qiskit.circuit.library.templates.nct.template_nct_9c_10 "qiskit.circuit.library.templates.nct.template_nct_9c_10")() | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_11`](qiskit.circuit.library.templates.nct.template_nct_9c_11 "qiskit.circuit.library.templates.nct.template_nct_9c_11")() | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9c_12`](qiskit.circuit.library.templates.nct.template_nct_9c_12 "qiskit.circuit.library.templates.nct.template_nct_9c_12")() | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_1`](qiskit.circuit.library.templates.nct.template_nct_9d_1 "qiskit.circuit.library.templates.nct.template_nct_9d_1")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_2`](qiskit.circuit.library.templates.nct.template_nct_9d_2 "qiskit.circuit.library.templates.nct.template_nct_9d_2")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_3`](qiskit.circuit.library.templates.nct.template_nct_9d_3 "qiskit.circuit.library.templates.nct.template_nct_9d_3")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_4`](qiskit.circuit.library.templates.nct.template_nct_9d_4 "qiskit.circuit.library.templates.nct.template_nct_9d_4")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_5`](qiskit.circuit.library.templates.nct.template_nct_9d_5 "qiskit.circuit.library.templates.nct.template_nct_9d_5")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_6`](qiskit.circuit.library.templates.nct.template_nct_9d_6 "qiskit.circuit.library.templates.nct.template_nct_9d_6")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_7`](qiskit.circuit.library.templates.nct.template_nct_9d_7 "qiskit.circuit.library.templates.nct.template_nct_9d_7")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_8`](qiskit.circuit.library.templates.nct.template_nct_9d_8 "qiskit.circuit.library.templates.nct.template_nct_9d_8")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_9`](qiskit.circuit.library.templates.nct.template_nct_9d_9 "qiskit.circuit.library.templates.nct.template_nct_9d_9")()    | **returns**template as a quantum circuit. |
| [`templates.nct.template_nct_9d_10`](qiskit.circuit.library.templates.nct.template_nct_9d_10 "qiskit.circuit.library.templates.nct.template_nct_9d_10")() | **returns**template as a quantum circuit. |

### Clifford template circuits

|                                                                                               |                                           |
| --------------------------------------------------------------------------------------------- | ----------------------------------------- |
| [`clifford_2_1`](qiskit.circuit.library.clifford_2_1 "qiskit.circuit.library.clifford_2_1")() | **returns**template as a quantum circuit. |
| [`clifford_2_2`](qiskit.circuit.library.clifford_2_2 "qiskit.circuit.library.clifford_2_2")() | **returns**template as a quantum circuit. |
| [`clifford_2_3`](qiskit.circuit.library.clifford_2_3 "qiskit.circuit.library.clifford_2_3")() | **returns**template as a quantum circuit. |
| [`clifford_2_4`](qiskit.circuit.library.clifford_2_4 "qiskit.circuit.library.clifford_2_4")() | **returns**template as a quantum circuit. |
| [`clifford_3_1`](qiskit.circuit.library.clifford_3_1 "qiskit.circuit.library.clifford_3_1")() | **returns**template as a quantum circuit. |
| [`clifford_4_1`](qiskit.circuit.library.clifford_4_1 "qiskit.circuit.library.clifford_4_1")() | **returns**template as a quantum circuit. |
| [`clifford_4_2`](qiskit.circuit.library.clifford_4_2 "qiskit.circuit.library.clifford_4_2")() | **returns**template as a quantum circuit. |
| [`clifford_4_3`](qiskit.circuit.library.clifford_4_3 "qiskit.circuit.library.clifford_4_3")() | **returns**template as a quantum circuit. |
| [`clifford_4_4`](qiskit.circuit.library.clifford_4_4 "qiskit.circuit.library.clifford_4_4")() | **returns**template as a quantum circuit. |
| [`clifford_5_1`](qiskit.circuit.library.clifford_5_1 "qiskit.circuit.library.clifford_5_1")() | **returns**template as a quantum circuit. |
| [`clifford_6_1`](qiskit.circuit.library.clifford_6_1 "qiskit.circuit.library.clifford_6_1")() | **returns**template as a quantum circuit. |
| [`clifford_6_2`](qiskit.circuit.library.clifford_6_2 "qiskit.circuit.library.clifford_6_2")() | **returns**template as a quantum circuit. |
| [`clifford_6_3`](qiskit.circuit.library.clifford_6_3 "qiskit.circuit.library.clifford_6_3")() | **returns**template as a quantum circuit. |
| [`clifford_6_4`](qiskit.circuit.library.clifford_6_4 "qiskit.circuit.library.clifford_6_4")() | **returns**template as a quantum circuit. |
| [`clifford_6_5`](qiskit.circuit.library.clifford_6_5 "qiskit.circuit.library.clifford_6_5")() | **returns**template as a quantum circuit. |
| [`clifford_8_1`](qiskit.circuit.library.clifford_8_1 "qiskit.circuit.library.clifford_8_1")() | **returns**template as a quantum circuit. |
| [`clifford_8_2`](qiskit.circuit.library.clifford_8_2 "qiskit.circuit.library.clifford_8_2")() | **returns**template as a quantum circuit. |
| [`clifford_8_3`](qiskit.circuit.library.clifford_8_3 "qiskit.circuit.library.clifford_8_3")() | **returns**template as a quantum circuit. |

### RZXGate template circuits

|                                                                                        |                                |
| -------------------------------------------------------------------------------------- | ------------------------------ |
| [`rzx_yz`](qiskit.circuit.library.rzx_yz "qiskit.circuit.library.rzx_yz")(\[theta])    | Template for CX - RYGate - CX. |
| [`rzx_xz`](qiskit.circuit.library.rzx_xz "qiskit.circuit.library.rzx_xz")(\[theta])    | Template for CX - RXGate - CX. |
| [`rzx_cy`](qiskit.circuit.library.rzx_cy "qiskit.circuit.library.rzx_cy")(\[theta])    | Template for CX - RYGate - CX. |
| [`rzx_zz1`](qiskit.circuit.library.rzx_zz1 "qiskit.circuit.library.rzx_zz1")(\[theta]) | Template for CX - RZGate - CX. |
| [`rzx_zz2`](qiskit.circuit.library.rzx_zz2 "qiskit.circuit.library.rzx_zz2")(\[theta]) | Template for CX - RZGate - CX. |
| [`rzx_zz3`](qiskit.circuit.library.rzx_zz3 "qiskit.circuit.library.rzx_zz3")(\[theta]) | Template for CX - RZGate - CX. |

