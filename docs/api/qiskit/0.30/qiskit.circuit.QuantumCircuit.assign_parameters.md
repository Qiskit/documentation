# qiskit.circuit.QuantumCircuit.assign\_parameters

`QuantumCircuit.assign_parameters(parameters, inplace=False, param_dict=None)`

Assign parameters to new parameters or values.

The keys of the parameter dictionary must be Parameter instances in the current circuit. The values of the dictionary can either be numeric values or new parameter objects. The values can be assigned to the current circuit object or to a copy of it.

**Parameters**

*   **parameters** (*dict or iterable*) – Either a dictionary or iterable specifying the new parameter values. If a dict, it specifies the mapping from `current_parameter` to `new_parameter`, where `new_parameter` can be a new parameter object or a numeric value. If an iterable, the elements are assigned to the existing parameters in the order they were inserted. You can call `QuantumCircuit.parameters` to check this order.
*   **inplace** (*bool*) – If False, a copy of the circuit with the bound parameters is returned. If True the circuit instance itself is modified.
*   **param\_dict** (*dict*) – Deprecated, use `parameters` instead.

**Raises**

*   **CircuitError** – If parameters is a dict and contains parameters not present in the circuit.
*   **ValueError** – If parameters is a list/array and the length mismatches the number of free parameters in the circuit.

**Returns**

A copy of the circuit with bound parameters, if `inplace` is False, otherwise None.

**Return type**

Optional([QuantumCircuit](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit"))

## Examples

Create a parameterized circuit and assign the parameters in-place.

```python
from qiskit.circuit import QuantumCircuit, Parameter

circuit = QuantumCircuit(2)
params = [Parameter('A'), Parameter('B'), Parameter('C')]
circuit.ry(params[0], 0)
circuit.crx(params[1], 0, 1)

print('Original circuit:')
print(circuit.draw())

circuit.assign_parameters({params[0]: params[2]}, inplace=True)

print('Assigned in-place:')
print(circuit.draw())
```

```python
Original circuit:
     ┌───────┐         
q_0: ┤ Ry(A) ├────■────
     └───────┘┌───┴───┐
q_1: ─────────┤ Rx(B) ├
              └───────┘
Assigned in-place:
     ┌───────┐         
q_0: ┤ Ry(C) ├────■────
     └───────┘┌───┴───┐
q_1: ─────────┤ Rx(B) ├
              └───────┘
```

Bind the values out-of-place and get a copy of the original circuit.

```python
from qiskit.circuit import QuantumCircuit, ParameterVector

circuit = QuantumCircuit(2)
params = ParameterVector('P', 2)
circuit.ry(params[0], 0)
circuit.crx(params[1], 0, 1)

bound_circuit = circuit.assign_parameters({params[0]: 1, params[1]: 2})
print('Bound circuit:')
print(bound_circuit.draw())

print('The original circuit is unchanged:')
print(circuit.draw())
```

```python
Bound circuit:
     ┌───────┐         
q_0: ┤ Ry(1) ├────■────
     └───────┘┌───┴───┐
q_1: ─────────┤ Rx(2) ├
              └───────┘
The original circuit is unchanged:
     ┌──────────┐            
q_0: ┤ Ry(P[0]) ├─────■──────
     └──────────┘┌────┴─────┐
q_1: ────────────┤ Rx(P[1]) ├
                 └──────────┘
```
