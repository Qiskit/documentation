# qiskit.transpiler.Target.instruction\_properties

`Target.instruction_properties(index)`

Get the instruction properties for a specific instruction tuple

This method is to be used in conjunction with the [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") attribute of a [`Target`](qiskit.transpiler.Target#qiskit.transpiler.Target "qiskit.transpiler.Target") object. You can use this method to quickly get the instruction properties for an element of [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") by using the index in that list. However, if you’re not working with [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") directly it is likely more efficient to access the target directly via the name and qubits to get the instruction properties. For example, if [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") returned:

```python
[(XGate(), (0,)), (XGate(), (1,))]
```

you could get the properties of the `XGate` on qubit 1 with:

```python
props = target.instruction_properties(1)
```

but just accessing it directly via the name would be more efficient:

```python
props = target['x'][(1,)]
```

(assuming the `XGate`’s canonical name in the target is `'x'`) This is especially true for larger targets as this will scale worse with the number of instruction tuples in a target.

**Parameters**

**index** (*int*) – The index of the instruction tuple from the [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") attribute. For, example if you want the properties from the third element in [`instructions`](qiskit.transpiler.Target#qiskit.transpiler.Target.instructions "qiskit.transpiler.Target.instructions") you would set this to be `2`.

**Returns**

The instruction properties for the specified instruction tuple

**Return type**

[InstructionProperties](qiskit.transpiler.InstructionProperties#qiskit.transpiler.InstructionProperties "qiskit.transpiler.InstructionProperties")
