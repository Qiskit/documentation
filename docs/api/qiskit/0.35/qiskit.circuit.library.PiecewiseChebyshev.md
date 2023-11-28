# PiecewiseChebyshev

<span id="undefined" />

`PiecewiseChebyshev(f_x, degree=None, breakpoints=None, num_state_qubits=None, name='pw_cheb')`

Bases: `qiskit.circuit.library.blueprintcircuit.BlueprintCircuit`

Piecewise Chebyshev approximation to an input function.

For a given function $f(x)$ and degree $d$, this class implements a piecewise polynomial Chebyshev approximation on $n$ qubits to $f(x)$ on the given intervals. All the polynomials in the approximation are of degree $d$.

The values of the parameters are calculated according to \[1].

## Examples

```python
import numpy as np
from qiskit import QuantumCircuit
from qiskit.circuit.library.arithmetic.piecewise_chebyshev import PiecewiseChebyshev
f_x, degree, breakpoints, num_state_qubits = lambda x: np.arcsin(1 / x), 2, [2, 4], 2
pw_approximation = PiecewiseChebyshev(f_x, degree, breakpoints, num_state_qubits)
pw_approximation._build()
qc = QuantumCircuit(pw_approximation.num_qubits)
qc.h(list(range(num_state_qubits)))
qc.append(pw_approximation.to_instruction(), qc.qubits)
qc.draw(output='mpl')
```

![../\_images/qiskit.circuit.library.PiecewiseChebyshev\_0\_0.png](/images/api/qiskit/0.35/qiskit.circuit.library.PiecewiseChebyshev_0_0.png)

## References

**\[1]: Haener, T., Roetteler, M., & Svore, K. M. (2018).**

Optimizing Quantum Circuits for Arithmetic. [arXiv:1805.12445](http://arxiv.org/abs/1805.12445)

**Parameters**

*   **f\_x** (`Union`\[`float`, `Callable`\[\[`int`], `float`]]) – the function to be approximated. Constant functions should be specified as f\_x = constant.
*   **degree** (`Optional`\[`int`]) – the degree of the polynomials. Defaults to `1`.
*   **breakpoints** (`Optional`\[`List`\[`int`]]) – the breakpoints to define the piecewise-linear function. Defaults to the full interval.
*   **num\_state\_qubits** (`Optional`\[`int`]) – number of qubits representing the state.
*   **name** (`str`) – The name of the circuit object.

## Attributes

<span id="undefined" />

### ancillas

Returns a list of ancilla bits in the order that the registers were added.

**Return type**

`List`\[`AncillaQubit`]

<span id="undefined" />

### breakpoints

The breakpoints for the piecewise approximation.

**Return type**

`List`\[`int`]

**Returns**

The breakpoints for the piecewise approximation.

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

<span id="undefined" />

### degree

The degree of the polynomials.

**Return type**

`int`

**Returns**

The degree of the polynomials.

<span id="undefined" />

### extension\_lib

`= 'include "qelib1.inc";'`

<span id="undefined" />

### f\_x

The function to be approximated.

**Return type**

`Union`\[`float`, `Callable`\[\[`int`], `float`]]

**Returns**

The function to be approximated.

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

**Return type**

`int`

<span id="undefined" />

### num\_qubits

Return number of qubits.

**Return type**

`int`

<span id="undefined" />

### num\_state\_qubits

The number of state qubits representing the state $|x\rangle$.

**Return type**

`int`

**Returns**

The number of state qubits.

<span id="undefined" />

### parameters

**Return type**

`ParameterView`

<span id="undefined" />

### polynomials

The polynomials for the piecewise approximation.

**Return type**

`List`\[`List`\[`float`]]

**Returns**

The polynomials for the piecewise approximation.

**Raises**

**TypeError** – If the input function is not in the correct format.

<span id="undefined" />

### prefix

`= 'circuit'`

<span id="undefined" />

### qregs

A list of the quantum registers associated with the circuit.

<span id="undefined" />

### qubits

Returns a list of quantum bits in the order that the registers were added.

**Return type**

`List`\[`Qubit`]
