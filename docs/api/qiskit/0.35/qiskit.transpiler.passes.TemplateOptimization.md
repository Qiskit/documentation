# TemplateOptimization[¶](#templateoptimization "Permalink to this headline")

<span id="undefined" />

`TemplateOptimization(*args, **kwargs)`

Bases: `qiskit.transpiler.basepasses.TransformationPass`

Class for the template optimization pass.

**Parameters**

*   **template\_list** (*list\[*[*QuantumCircuit*](qiskit.circuit.QuantumCircuit#qiskit.circuit.QuantumCircuit "qiskit.circuit.QuantumCircuit")*()]*) – list of the different template circuit to apply.
*   **heuristics\_backward\_param** (*list\[int]*) – \[length, survivor] Those are the parameters for applying heuristics on the backward part of the algorithm. This part of the algorithm creates a tree of matching scenario. This tree grows exponentially. The heuristics evaluates which scenarios have the longest match and keep only those. The length is the interval in the tree for cutting it and survivor is the number of scenarios that are kept. We advice to use l=3 and s=1 to have serious time advantage. We remind that the heuristics implies losing a part of the maximal matches. Check reference for more details.
*   **heuristics\_qubits\_param** (*list\[int]*) – \[length] The heuristics for the qubit choice make guesses from the dag dependency of the circuit in order to limit the number of qubit configurations to explore. The length is the number of successors or not predecessors that will be explored in the dag dependency of the circuit, each qubits of the nodes are added to the set of authorized qubits. We advice to use length=1. Check reference for more details.
*   **user\_cost\_dict** (*Dict\[str, int]*) – quantum cost dictionary passed to TemplateSubstitution to configure its behavior. This will override any default values if None is not given. The key is the name of the gate and the value its quantum cost.

## Methods

|                                                                                                                                                                      |                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [`name`](qiskit.transpiler.passes.TemplateOptimization.name#qiskit.transpiler.passes.TemplateOptimization.name "qiskit.transpiler.passes.TemplateOptimization.name") | Return the name of the pass. |
| [`run`](qiskit.transpiler.passes.TemplateOptimization.run#qiskit.transpiler.passes.TemplateOptimization.run "qiskit.transpiler.passes.TemplateOptimization.run")     | **param dag**DAG circuit.    |

## Attributes

<span id="undefined" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="undefined" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).
