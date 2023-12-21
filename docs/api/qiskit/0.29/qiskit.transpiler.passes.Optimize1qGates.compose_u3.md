# qiskit.transpiler.passes.Optimize1qGates.compose\_u3

`static Optimize1qGates.compose_u3(theta1, phi1, lambda1, theta2, phi2, lambda2)`

Return a triple theta, phi, lambda for the product.

## u3(theta, phi, lambda)

\= u3(theta1, phi1, lambda1).u3(theta2, phi2, lambda2) = Rz(phi1).Ry(theta1).Rz(lambda1+phi2).Ry(theta2).Rz(lambda2) = Rz(phi1).Rz(phi’).Ry(theta’).Rz(lambda’).Rz(lambda2) = u3(theta’, phi1 + phi’, lambda2 + lambda’)

Return theta, phi, lambda.
