# LocalNoisePass

<span id="undefined" />

`LocalNoisePass(func, op_types=None, method='append')`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Transpiler pass to insert noise into a circuit.

The noise in this pass is defined by a noise function or callable with signature

```python
def func(
    inst: Instruction,
    qubits: Optional[List[int]] = None
) -> InstructionLike:
```

For every instance of one of the reference instructions in a circuit the supplied function is called on that instruction and the returned noise is added to the circuit. This noise can depend on properties of the instruction it is called on (for example parameters or duration) to allow inserting parameterized noise models.

Several methods for adding the constructed errors to circuits are supported and can be set by using the `method` kwarg. The supported methods are

*   `"append"`: add the return of the callable after the instruction.

*   `"prepend"`: add the return of the callable before the instruction.

*   **`"replace"`: replace the instruction with the return of the callable.**

    If the return is None, the instruction will be removed.

Initialize noise pass.

**Parameters**

*   **func** (`Callable`\[\[`Instruction`, `Sequence`\[`int`]], `Union`\[`Instruction`, `QuantumError`, `QuantumCircuit`]]) – noise function func(inst, qubits) -> InstructionLike.
*   **op\_types** (`Union`\[`type`, `Iterable`\[`type`], `None`]) – Optional, single or list of instruction types to apply the noise function to. If None the noise function will be applied to all instructions in the circuit.
*   **method** (`str`) – method for inserting noise. Allow methods are ‘append’, ‘prepend’, ‘replace’.

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError#qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if an invalid option is specified.

## Methods

|                                                                                                                                                          |                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| [`name`](qiskit.providers.aer.noise.LocalNoisePass.name#qiskit.providers.aer.noise.LocalNoisePass.name "qiskit.providers.aer.noise.LocalNoisePass.name") | Return the name of the pass.        |
| [`run`](qiskit.providers.aer.noise.LocalNoisePass.run#qiskit.providers.aer.noise.LocalNoisePass.run "qiskit.providers.aer.noise.LocalNoisePass.run")     | Run the LocalNoisePass pass on dag. |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
