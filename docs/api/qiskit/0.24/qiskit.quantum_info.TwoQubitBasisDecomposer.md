<span id="qiskit-quantum-info-twoqubitbasisdecomposer" />

# qiskit.quantum\_info.TwoQubitBasisDecomposer

<span id="undefined" />

`TwoQubitBasisDecomposer(gate, basis_fidelity=1.0, euler_basis=None)`

A class for decomposing 2-qubit unitaries into minimal number of uses of a 2-qubit basis gate.

**Parameters**

*   **gate** ([*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")) – Two-qubit gate to be used in the KAK decomposition.
*   **basis\_fidelity** (*float*) – Fidelity to be assumed for applications of KAK Gate. Default 1.0.
*   **euler\_basis** (*str*) – Basis string to be provided to OneQubitEulerDecomposer for 1Q synthesis. Valid options are \[‘ZYZ’, ‘ZXZ’, ‘XYX’, ‘U’, ‘U3’, ‘U1X’, ‘PSX’, ‘ZSX’, ‘RR’]. Default ‘U3’.

<span id="undefined" />

`__init__(gate, basis_fidelity=1.0, euler_basis=None)`

Initialize self. See help(type(self)) for accurate signature.

## Methods

|                                                                                                                                                                                 |                                                                                                             |                         |                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------- | --------------------------------------- |
| [`__init__`](#qiskit.quantum_info.TwoQubitBasisDecomposer.__init__ "qiskit.quantum_info.TwoQubitBasisDecomposer.__init__")(gate\[, basis\_fidelity, euler\_basis])              | Initialize self.                                                                                            |                         |                                         |
| [`decomp0`](#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp0")(target\[, eps])                                         | Decompose target \~Ud(x, y, z) with 0 uses of the basis gate.                                               |                         |                                         |
| [`decomp1`](#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1 "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp1")(target)                                                 | Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math::. |                         |                                         |
| [`decomp2_supercontrolled`](#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp2_supercontrolled")(target) | Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.                                               |                         |                                         |
| [`decomp3_supercontrolled`](#qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled "qiskit.quantum_info.TwoQubitBasisDecomposer.decomp3_supercontrolled")(target) | Decompose target with 3 uses of the basis.                                                                  |                         |                                         |
| [`num_basis_gates`](#qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates "qiskit.quantum_info.TwoQubitBasisDecomposer.num_basis_gates")(unitary)                        | Computes the number of basis gates needed in a decomposition of input unitary                               |                         |                                         |
| [`traces`](#qiskit.quantum_info.TwoQubitBasisDecomposer.traces "qiskit.quantum_info.TwoQubitBasisDecomposer.traces")(target)                                                    | Give the expected traces \$                                                                                 | Tr(U \cdot Utarget^dag) | \$ for different number of basis gates. |

<span id="undefined" />

`static decomp0(target, eps=1e-15)`

Decompose target \~Ud(x, y, z) with 0 uses of the basis gate. Result Ur has trace: $|Tr(Ur.Utarget^dag)| = 4|(cos(x)cos(y)cos(z)+ j sin(x)sin(y)sin(z)|$, which is optimal for all targets and bases

<span id="undefined" />

`decomp1(target)`

Decompose target \~Ud(x, y, z) with 1 uses of the basis gate \~Ud(a, b, c). Result Ur has trace: .. math:

```python
|Tr(Ur.Utarget^dag)| = 4|cos(x-a)cos(y-b)cos(z-c) + j sin(x-a)sin(y-b)sin(z-c)|
```

which is optimal for all targets and bases with z==0 or c==0

<span id="undefined" />

`decomp2_supercontrolled(target)`

Decompose target \~Ud(x, y, z) with 2 uses of the basis gate.

For supercontrolled basis \~Ud(pi/4, b, 0), all b, result Ur has trace .. math:

```python
|Tr(Ur.Utarget^dag)| = 4cos(z)
```

which is the optimal approximation for basis of CNOT-class `~Ud(pi/4, 0, 0)` or DCNOT-class `~Ud(pi/4, pi/4, 0)` and any target. May be sub-optimal for b!=0 (e.g. there exists exact decomposition for any target using B `B~Ud(pi/4, pi/8, 0)`, but not this decomposition.) This is an exact decomposition for supercontrolled basis and target `~Ud(x, y, 0)`. No guarantees for non-supercontrolled basis.

<span id="undefined" />

`decomp3_supercontrolled(target)`

Decompose target with 3 uses of the basis. This is an exact decomposition for supercontrolled basis \~Ud(pi/4, b, 0), all b, and any target. No guarantees for non-supercontrolled basis.

<span id="undefined" />

`num_basis_gates(unitary)`

Computes the number of basis gates needed in a decomposition of input unitary

<span id="undefined" />

`traces(target)`

Give the expected traces $|Tr(U \cdot Utarget^dag)|$ for different number of basis gates.
