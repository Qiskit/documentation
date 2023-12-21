# qiskit.transpiler.Layout.from\_dict

`Layout.from_dict(input_dict)`

Populates a Layout from a dictionary.

The dictionary must be a bijective mapping between virtual qubits (tuple) and physical qubits (int).

**Parameters**

**input\_dict** (*dict*) –

e.g.:

```python
{(QuantumRegister(3, 'qr'), 0): 0,
 (QuantumRegister(3, 'qr'), 1): 1,
 (QuantumRegister(3, 'qr'), 2): 2}

Can be written more concisely as follows:

* virtual to physical::

    {qr[0]: 0,
     qr[1]: 1,
     qr[2]: 2}

* physical to virtual::

    {0: qr[0],
     1: qr[1],
     2: qr[2]}
```
