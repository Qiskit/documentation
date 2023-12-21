---
title: run
description: API reference for qiskit.transpiler.PassManager.run
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.PassManager.run
---

# run

<span id="qiskit.transpiler.PassManager.run" />

`PassManager.run(circuits, output_name=None, callback=None)`

Run all the passes on the specified `circuits`.

**Parameters**

*   **circuits** (`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]]) – Circuit(s) to transform via all the registered passes.

*   **output\_name** (`Optional`\[`str`]) – The output circuit name. If `None`, it will be set to the same as the input circuit name.

*   **callback** (`Optional`\[`Callable`]) –

    A callback function that will be called after each pass execution. The function will be called with 5 keyword arguments:

    ```python
    pass_ (Pass): the pass being run
    dag (DAGCircuit): the dag output of the pass
    time (float): the time to execute the pass
    property_set (PropertySet): the property set
    count (int): the index for the pass execution
    ```

    The exact arguments pass expose the internals of the pass manager and are subject to change as the pass manager internals change. If you intend to reuse a callback function over multiple releases be sure to check that the arguments being passed are the same.

    To use the callback feature you define a function that will take in kwargs dict and access the variables. For example:

    ```python
    def callback_func(**kwargs):
        pass_ = kwargs['pass_']
        dag = kwargs['dag']
        time = kwargs['time']
        property_set = kwargs['property_set']
        count = kwargs['count']
        ...
    ```

**Return type**

`Union`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit"), `List`\[[`QuantumCircuit`](qiskit.circuit.QuantumCircuit "qiskit.circuit.quantumcircuit.QuantumCircuit")]]

**Returns**

The transformed circuit(s).

