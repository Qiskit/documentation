# qiskit.ml.circuit.library.RawFeatureVector.tensor

`RawFeatureVector.tensor(other, inplace=False)`

Tensor `self` with `other`.

Remember that in the little-endian convention the leftmost operation will be at the bottom of the circuit. See also \[the docs]\(qiskit.org/documentation/tutorials/circuits/3\_summary\_of\_quantum\_operations.html) for more information.

```python
     ┌────────┐        ┌─────┐          ┌─────┐
q_0: ┤ bottom ├ ⊗ q_0: ┤ top ├  = q_0: ─┤ top ├──
     └────────┘        └─────┘         ┌┴─────┴─┐
                                  q_1: ┤ bottom ├
                                       └────────┘
```

**Parameters**

*   **other** ([*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")) – The other circuit to tensor this circuit with.
*   **inplace** (*bool*) – If True, modify the object. Otherwise return composed circuit.

## Examples

```python
from qiskit import QuantumCircuit
top = QuantumCircuit(1)
top.x(0);
bottom = QuantumCircuit(2)
bottom.cry(0.2, 0, 1);
tensored = bottom.tensor(top)
print(tensored.draw())
```

```python
        ┌───┐   
q_0: ───┤ X ├───
        └───┘   
q_1: ─────■─────
     ┌────┴────┐
q_2: ┤ Ry(0.2) ├
     └─────────┘
```

**Returns**

The tensored circuit (returns None if inplace==True).

**Return type**

[QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")
