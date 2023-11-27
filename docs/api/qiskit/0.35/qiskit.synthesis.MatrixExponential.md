# MatrixExponential[¶](#matrixexponential "Permalink to this headline")

<span id="undefined" />

`MatrixExponential`

Bases: `qiskit.synthesis.evolution.evolution_synthesis.EvolutionSynthesis`

Exact operator evolution via matrix exponentiation and unitary synthesis.

This class synthesis the exponential of operators by calculating their exponentially-sized matrix representation and using exact matrix exponentiation followed by unitary synthesis to obtain a circuit. This process is not scalable and serves as comparison or benchmark for small systems.

## Methods

|                                                                                                                                                             |                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| [`synthesize`](qiskit.synthesis.MatrixExponential.synthesize#qiskit.synthesis.MatrixExponential.synthesize "qiskit.synthesis.MatrixExponential.synthesize") | Synthesize an `qiskit.circuit.library.PauliEvolutionGate`. |

## Attributes

<span id="undefined" />

### settings

Return the settings in a dictionary, which can be used to reconstruct the object.

**Return type**

`Dict`\[`str`, `Any`]

**Returns**

A dictionary containing the settings of this product formula.

**Raises**

**NotImplementedError** – The interface does not implement this method.
