---
title: Optimize1qGates
description: API reference for qiskit.transpiler.passes.Optimize1qGates
in_page_toc_min_heading_level: 1
python_api_type: class
python_api_name: qiskit.transpiler.passes.Optimize1qGates
---

# Optimize1qGates

<span id="qiskit.transpiler.passes.Optimize1qGates" />

`Optimize1qGates(*args, **kwargs)` [GitHub](https://github.com/qiskit/qiskit/tree/stable/0.21/qiskit/transpiler/passes/optimization/optimize_1q_gates.py "view source code")

Bases: [`qiskit.transpiler.basepasses.TransformationPass`](qiskit.transpiler.TransformationPass "qiskit.transpiler.basepasses.TransformationPass")

Optimize chains of single-qubit u1, u2, u3 gates by combining them into a single gate.

Optimize1qGates initializer.

**Parameters**

*   **basis** (*list\[str]*) – Basis gates to consider, e.g. \[‘u3’, ‘cx’]. For the effects of this pass, the basis is the set intersection between the basis parameter and the set \{‘u1’,’u2’,’u3’, ‘u’, ‘p’}.
*   **eps** (*float*) – EPS to check against

## Methods

### compose\_u3

<span id="qiskit.transpiler.passes.Optimize1qGates.compose_u3" />

`static Optimize1qGates.compose_u3(theta1, phi1, lambda1, theta2, phi2, lambda2)`

Return a triple theta, phi, lambda for the product.

#### u3(theta, phi, lambda)

\= u3(theta1, phi1, lambda1).u3(theta2, phi2, lambda2) = Rz(phi1).Ry(theta1).Rz(lambda1+phi2).Ry(theta2).Rz(lambda2) = Rz(phi1).Rz(phi’).Ry(theta’).Rz(lambda’).Rz(lambda2) = u3(theta’, phi1 + phi’, lambda2 + lambda’)

Return theta, phi, lambda.

### name

<span id="qiskit.transpiler.passes.Optimize1qGates.name" />

`Optimize1qGates.name()`

Return the name of the pass.

### run

<span id="qiskit.transpiler.passes.Optimize1qGates.run" />

`Optimize1qGates.run(dag)`

Run the Optimize1qGates pass on dag.

**Parameters**

**dag** ([*DAGCircuit*](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")) – the DAG to be optimized.

**Returns**

the optimized DAG.

**Return type**

[DAGCircuit](qiskit.dagcircuit.DAGCircuit "qiskit.dagcircuit.DAGCircuit")

**Raises**

[**TranspilerError**](qiskit.transpiler.TranspilerError "qiskit.transpiler.TranspilerError") – if YZY and ZYZ angles do not give same rotation matrix.

### yzy\_to\_zyz

<span id="qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz" />

`static Optimize1qGates.yzy_to_zyz(xi, theta1, theta2, eps=1e-09)`

Express a Y.Z.Y single qubit gate as a Z.Y.Z gate.

Solve the equation

$$
$$

Ry(theta1).Rz(xi).Ry(theta2) = Rz(phi).Ry(theta).Rz(lambda)

for theta, phi, and lambda.

Return a solution theta, phi, and lambda.

## Attributes

<span id="qiskit.transpiler.passes.Optimize1qGates.is_analysis_pass" />

### is\_analysis\_pass

Check if the pass is an analysis pass.

If the pass is an AnalysisPass, that means that the pass can analyze the DAG and write the results of that analysis in the property set. Modifications on the DAG are not allowed by this kind of pass.

<span id="qiskit.transpiler.passes.Optimize1qGates.is_transformation_pass" />

### is\_transformation\_pass

Check if the pass is a transformation pass.

If the pass is a TransformationPass, that means that the pass can manipulate the DAG, but cannot modify the property set (but it can be read).

