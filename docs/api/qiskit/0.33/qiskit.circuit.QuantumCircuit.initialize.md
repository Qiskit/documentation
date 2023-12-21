# qiskit.circuit.QuantumCircuit.initialize

`QuantumCircuit.initialize(params, qubits=None)`

Initialize qubits in a specific state.

Qubit initialization is done by first resetting the qubits to $|0\rangle$ followed by an state preparing unitary. Both these steps are included in the Initialize instruction.

**Parameters**

*   **params** (*str or list or int*) –

    *   **str: labels of basis states of the Pauli eigenstates Z, X, Y. See**

        `from_label()`. Notice the order of the labels is reversed with respect to the qubit index to be applied to. Example label ‘01’ initializes the qubit zero to |1> and the qubit one to |0>.

    *   list: vector of complex amplitudes to initialize to.

    *   **int: an integer that is used as a bitmap indicating which qubits to initialize**

        to |1>. Example: setting params to 5 would initialize qubit 0 and qubit 2 to |1> and qubit 1 to |0>.

*   **qubits** ([*QuantumRegister*](qiskit.circuit.QuantumRegister#qiskit.circuit.QuantumRegister "qiskit.circuit.QuantumRegister") *or int*) –

    *   QuantumRegister: A list of qubits to be initialized \[Default: None].
    *   int: Index of qubit to initialized \[Default: None].

**Returns**

a handle to the instruction that was just initialized

**Return type**

[qiskit.circuit.Instruction](qiskit.circuit.Instruction#qiskit.circuit.Instruction "qiskit.circuit.Instruction")

## Examples

Prepare a qubit in the state $(|0\rangle - |1\rangle) / \sqrt{2}$.

```python
import numpy as np
from qiskit import QuantumCircuit

circuit = QuantumCircuit(1)
circuit.initialize([1/np.sqrt(2), -1/np.sqrt(2)], 0)
circuit.draw()
```

```python
   ┌──────────────────────────────┐
q: ┤ Initialize(0.70711,-0.70711) ├
   └──────────────────────────────┘
```

## output:

┌──────────────────────────────┐

## q\_0: ┤ initialize(0.70711,-0.70711) ├

└──────────────────────────────┘

Initialize from a string two qubits in the state |10>. The order of the labels is reversed with respect to qubit index. More information about labels for basis states are in `from_label()`.

```python
import numpy as np
from qiskit import QuantumCircuit

circuit = QuantumCircuit(2)
circuit.initialize('01', circuit.qubits)
circuit.draw()
```

```python
     ┌──────────────────┐
q_0: ┤0                 ├
     │  Initialize(0,1) │
q_1: ┤1                 ├
     └──────────────────┘
```

## output:

┌──────────────────┐

## q\_0: ┤0 ├

│ initialize(0,1) │

## q\_1: ┤1 ├

└──────────────────┘

Initialize two qubits from an array of complex amplitudes .. jupyter-execute:

```python
import numpy as np
from qiskit import QuantumCircuit

circuit = QuantumCircuit(2)
circuit.initialize([0, 1/np.sqrt(2), -1.j/np.sqrt(2), 0], circuit.qubits)
circuit.draw()
```

## output:

┌────────────────────────────────────┐

## q\_0: ┤0 ├

│ initialize(0,0.70711,-0.70711j,0) │

## q\_1: ┤1 ├

└────────────────────────────────────┘
