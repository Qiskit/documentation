# LogNormalDistribution

<span id="undefined" />

`LogNormalDistribution(num_qubits, mu=None, sigma=None, bounds=None, upto_diag=False, name='P(X)')`

Bases: `qiskit.circuit.quantumcircuit.QuantumCircuit`

A circuit to encode a discretized log-normal distribution in qubit amplitudes.

A random variable $X$ is log-normal distributed if

$$
\log(X) \sim \mathcal{N}(\mu, \sigma^2)
$$

for a normal distribution $\mathcal{N}(\mu, \sigma^2)$. The probability density function of the log-normal distribution is defined as

$$
\mathbb{P}(X = x) = \frac{1}{x\sqrt{2\pi\sigma^2}} e^{-\frac{(\log(x) - \mu)^2}{\sigma^2}}
$$

<Admonition title="Note" type="note">
  The parameter `sigma` in this class equals the **variance**, $\sigma^2$ and not the standard deviation. This is for consistency with multivariate distributions, where the uppercase sigma, $\Sigma$, is associated with the covariance.
</Admonition>

This circuit considers the discretized version of $X$ on `2 ** num_qubits` equidistant points, $x_i$, truncated to `bounds`. The action of this circuit can be written as

$$
\mathcal{P}_X |0\rangle^n = \sum_{i=0}^{2^n - 1} \sqrt{\mathbb{P}(x_i)} |i\rangle
$$

where $n$ is num\_qubits.

<Admonition title="Note" type="note">
  The circuit loads the **square root** of the probabilities into the qubit amplitudes such that the sampling probability, which is the square of the amplitude, equals the probability of the distribution.
</Admonition>

This circuit is for example used in amplitude estimation applications, such as finance \[1, 2], where customer demand or the return of a portfolio could be modelled using a log-normal distribution.

## Examples

This class can be used for both univariate and multivariate distributions. >>> mu = \[1, 0.9, 0.2] >>> sigma = \[\[1, -0.2, 0.2], \[-0.2, 1, 0.4], \[0.2, 0.4, 1]] >>> circuit = LogNormalDistribution(\[2, 2, 2], mu, sigma) >>> circuit.num\_qubits 6

## References

**\[1]: Gacon, J., Zoufal, C., & Woerner, S. (2020).**

Quantum-Enhanced Simulation-Based Optimization. [arXiv:2005.10780](http://arxiv.org/abs/2005.10780)

**\[2]: Woerner, S., & Egger, D. J. (2018).**

Quantum Risk Analysis. [arXiv:1806.06893](http://arxiv.org/abs/1806.06893)

**Parameters**

*   **num\_qubits** (`Union`\[`int`, `List`\[`int`]]) – The number of qubits used to discretize the random variable. For a 1d random variable, `num_qubits` is an integer, for multiple dimensions a list of integers indicating the number of qubits to use in each dimension.
*   **mu** (`Union`\[`float`, `List`\[`float`], `None`]) – The parameter $\mu$ of the distribution. Can be either a float for a 1d random variable or a list of floats for a higher dimensional random variable.
*   **sigma** (`Union`\[`float`, `List`\[`float`], `None`]) – The parameter $\sigma^2$ or $\Sigma$, which is the variance or covariance matrix.
*   **bounds** (`Union`\[`Tuple`\[`float`, `float`], `List`\[`Tuple`\[`float`, `float`]], `None`]) – The truncation bounds of the distribution as tuples. For multiple dimensions, `bounds` is a list of tuples `[(low0, high0), (low1, high1), ...]`. If `None`, the bounds are set to `(0, 1)` for each dimension.
*   **upto\_diag** (`bool`) – If True, load the square root of the probabilities up to multiplication with a diagonal for a more efficient circuit.
*   **name** (`str`) – The name of the circuit.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### bounds

Return the bounds of the probability distribution.

**Return type**

`Union`\[`Tuple`\[`float`, `float`], `List`\[`Tuple`\[`float`, `float`]]]

<span id="undefined" />

### calibrations

Return calibration dictionary.

**The custom pulse definition of a given gate is of the form**

\{‘gate\_name’: \{(qubits, params): schedule}}

**Return type**

`dict`

<span id="undefined" />

### clbits

Returns a list of classical bits in the order that the registers were added.

**Return type**

`List`\[`Clbit`]

<span id="undefined" />

### data

Return the circuit data (instructions and context).

**Returns**

a list-like object containing the tuples for the circuit’s data.

Each tuple is in the format `(instruction, qargs, cargs)`, where instruction is an Instruction (or subclass) object, qargs is a list of Qubit objects, and cargs is a list of Clbit objects.

**Return type**

QuantumCircuitData

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### global\_phase

Return the global phase of the circuit in radians.

**Return type**

`Union`\[`ParameterExpression`, `float`]

<span id="undefined" />

### header

`= 'OPENQASM 2.0;'`

<span id="undefined" />

### instances

`= 9`

<span id="undefined" />

### metadata

The user provided metadata associated with the circuit

The metadata for the circuit is a user provided `dict` of metadata for the circuit. It will not be used to influence the execution or operation of the circuit, but it is expected to be passed between all transforms of the circuit (ie transpilation) and that providers will associate any circuit metadata with the results it returns from execution of that circuit.

**Return type**

`dict`

<span id="undefined" />

### num\_ancillas

Return the number of ancilla qubits.

**Return type**

`int`

<span id="undefined" />

### num\_clbits

Return number of classical bits.

**Return type**

`int`

<span id="undefined" />

### num\_parameters

Convenience function to get the number of parameter objects in the circuit.

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### parameters

Convenience function to get the parameters defined in the parameter table.

**Return type**

`ParameterView`

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### probabilities

Return the sampling probabilities for the values.

**Return type**

`ndarray`

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]

<span id="undefined" />

### values

Return the discretized points of the random variable.

**Return type**

`ndarray`
