# qiskit.aqua.utils.optimize\_svm

<span id="undefined" />

`optimize_svm(kernel_matrix, y, scaling=None, maxiter=500, show_progress=False, max_iters=None, lambda2=0.001)`

Solving quadratic programming problem for SVM; thus, some constraints are fixed.

**Parameters**

*   **kernel\_matrix** (`ndarray`) – NxN array
*   **y** (`ndarray`) – Nx1 array
*   **scaling** (`Optional`\[`float`]) – the scaling factor to renormalize the y, if it is None, use L2-norm of y for normalization
*   **maxiter** (`int`) – number of iterations for QP solver
*   **show\_progress** (`bool`) – showing the progress of QP solver
*   **max\_iters** (`Optional`\[`int`]) – Deprecated, use maxiter.
*   **lambda2** (`float`) – L2 Norm regularization factor

**Returns**

Sx1 array, where S is the number of supports np.ndarray: Sx1 array, where S is the number of supports np.ndarray: Sx1 array, where S is the number of supports

**Return type**

np.ndarray

**Raises**

[**MissingOptionalLibraryError**](qiskit.aqua.MissingOptionalLibraryError#qiskit.aqua.MissingOptionalLibraryError "qiskit.aqua.MissingOptionalLibraryError") – If cvxpy is not installed
