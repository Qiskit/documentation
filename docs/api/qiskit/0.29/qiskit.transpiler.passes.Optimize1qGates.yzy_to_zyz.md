# qiskit.transpiler.passes.Optimize1qGates.yzy\_to\_zyz

`static Optimize1qGates.yzy_to_zyz(xi, theta1, theta2, eps=1e-09)`

Express a Y.Z.Y single qubit gate as a Z.Y.Z gate.

Solve the equation

$$
$$

Ry(theta1).Rz(xi).Ry(theta2) = Rz(phi).Ry(theta).Rz(lambda)

for theta, phi, and lambda.

Return a solution theta, phi, and lambda.
