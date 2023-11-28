<span id="qiskit-providers-aer-noise-phase-damping-error" />

# qiskit.providers.aer.noise.phase\_damping\_error

<span id="undefined" />

`phase_damping_error(param_phase, canonical_kraus=True)`

Return a single-qubit combined phase and amplitude damping quantum error channel.

The single-qubit combined phase and amplitude damping channel is described by the following Kraus matrices:

```python
A0 = [[1, 0], [0, sqrt(1 - b)]]
A2 = [[0, 0], [0, sqrt(b)]]
```

where `b = param_phase`. The equilibrium state after infinitely many applications of the channel is:

```python
rho_eq = [[rho_init[0, 0], 0]], [0, rho_init[1, 1]]]
```

where `rho_init` is the input state ρ.

**Parameters**

*   **param\_phase** (*double*) – the phase damping parameter.
*   **canonical\_kraus** (*bool*) – Convert input Kraus matrices into the canonical Kraus representation (default: True)

**Returns**

a quantum error object for a noise model.

**Return type**

[QuantumError](qiskit.providers.aer.noise.QuantumError#qiskit.providers.aer.noise.QuantumError "qiskit.providers.aer.noise.QuantumError")
