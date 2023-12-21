---
title: yzy_to_zyz
description: API reference for qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz
in_page_toc_min_heading_level: 1
python_api_type: method
python_api_name: qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz
---

# yzy\_to\_zyz

<span id="qiskit.transpiler.passes.Optimize1qGates.yzy_to_zyz" />

`static Optimize1qGates.yzy_to_zyz(xi, theta1, theta2, eps=1e-09)`

Express a Y.Z.Y single qubit gate as a Z.Y.Z gate.

Solve the equation

$$
$$

Ry(theta1).Rz(xi).Ry(theta2) = Rz(phi).Ry(theta).Rz(lambda)

for theta, phi, and lambda.

Return a solution theta, phi, and lambda.

