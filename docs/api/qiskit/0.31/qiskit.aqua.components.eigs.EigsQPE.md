# EigsQPE

<span id="undefined" />

`EigsQPE(operator, iqft, num_time_slices=1, num_ancillae=1, expansion_mode='trotter', expansion_order=1, evo_time=None, negative_evals=False, ne_qfts=None)`

Bases: `qiskit.aqua.components.eigs.eigs.Eigenvalues`

Eigenvalues using Quantum Phase Estimation.

Specifically, this class is based on PhaseEstimationCircuit with no measurements and has additional handling of negative eigenvalues, e.g. for [`HHL`](qiskit.aqua.algorithms.HHL#qiskit.aqua.algorithms.HHL "qiskit.aqua.algorithms.HHL"). It depends on the [`QFT`](qiskit.circuit.library.QFT#qiskit.circuit.library.QFT "qiskit.circuit.library.QFT") class.

**Parameters**

*   **operator** (`LegacyBaseOperator`) – The Hamiltonian Operator object
*   **iqft** (`QuantumCircuit`) – The Inverse Quantum Fourier Transform circuit
*   **num\_time\_slices** (`int`) – The number of time slices, has a minimum value of 1.
*   **num\_ancillae** (`int`) – The number of ancillary qubits to use for the measurement, has a minimum value of 1.
*   **expansion\_mode** (`str`) – The expansion mode (‘trotter’ | ‘suzuki’)
*   **expansion\_order** (`int`) – The suzuki expansion order, has a minimum value of 1.
*   **evo\_time** (`Optional`\[`float`]) – An optional evolution time which should scale the eigenvalue onto the range $(0,1]$ (or $(-0.5,0.5]$ for negative eigenvalues). Defaults to `None` in which case a suitably estimated evolution time is internally computed.
*   **negative\_evals** (`bool`) – Set `True` to indicate negative eigenvalues need to be handled
*   **ne\_qfts** (`Optional`\[`List`]) – The QFT and IQFT circuits for handling negative eigenvalues

## Methods

|                                                                                                                                                                                                |                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [`construct_circuit`](qiskit.aqua.components.eigs.EigsQPE.construct_circuit#qiskit.aqua.components.eigs.EigsQPE.construct_circuit "qiskit.aqua.components.eigs.EigsQPE.construct_circuit")     | Construct the eigenvalues estimation using the PhaseEstimationCircuit |
| [`construct_inverse`](qiskit.aqua.components.eigs.EigsQPE.construct_inverse#qiskit.aqua.components.eigs.EigsQPE.construct_inverse "qiskit.aqua.components.eigs.EigsQPE.construct_inverse")     | Construct the inverse eigenvalue estimation quantum circuit.          |
| [`get_register_sizes`](qiskit.aqua.components.eigs.EigsQPE.get_register_sizes#qiskit.aqua.components.eigs.EigsQPE.get_register_sizes "qiskit.aqua.components.eigs.EigsQPE.get_register_sizes") | get register sizes                                                    |
| [`get_scaling`](qiskit.aqua.components.eigs.EigsQPE.get_scaling#qiskit.aqua.components.eigs.EigsQPE.get_scaling "qiskit.aqua.components.eigs.EigsQPE.get_scaling")                             | get scaling                                                           |
