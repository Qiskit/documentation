# Extrapolator

<span id="undefined" />

`Extrapolator`

Bases: `abc.ABC`

This class is based on performing extrapolation of parameters of a wavefunction for a variational algorithm defined in the variational forms as part of the Qiskit Aqua module. This concept is based on fitting a set of (point,parameter) data to some specified function and predicting the optimal variational parameters for the next point. This technique is aimed towards providing a better starting point for the variational algorithm, in addition to bootstrapping techniques, ultimately reducing the total number of function evaluations.

Each instance of an Extrapolator requires a dictionary where each item consist of a point (key) and a list of variational parameters (value) for that given point. In practice, a Sampler Class can utilize the Extrapolator as a wrapper. The Extrapolator class then extracts optimal variational parameters from the previous points for use in extrapolation. For instance, one can utilize the Extrapolator to accelerate the computation of the Born-Oppenheimer Potential Energy Surface (BOPES) for a given molecule. In this case, each point can represent the interatomic distance and the list of parameters represent rotational parameters in a quantum circuit, in the context of computing the bond dissociation profile for a diatomic molecule. NOTE: However this is not a requirement - once an instance of the Extrapolator class is created, extrapolation can proceed by specifying the point(s) of interest and the dictionary of (point, parameter) pairs for a problem.

There are two types of Extrapolators: external/wrapper and internal. The external/wrapper extrapolator specifies the number of previous points or data window within which to perform the extrapolation as well as the dimensionality/space to perform the extrapolation. For instance, one can utilize the PCA Extrapolator as an external extrapolator that sets the data window and transforms the variational parameters in PCA space before the actual extrapolation is executed. The internal extrapolator can then proceed via linear regression/spline fitting of variational parameters to predict a parameter set.

## Methods

|                                                                                                                                                                                                                          |                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| [`extrapolate`](qiskit.chemistry.algorithms.pes_samplers.Extrapolator.extrapolate#qiskit.chemistry.algorithms.pes_samplers.Extrapolator.extrapolate "qiskit.chemistry.algorithms.pes_samplers.Extrapolator.extrapolate") | Abstract method to extrapolate point(s) of interest. |
| [`factory`](qiskit.chemistry.algorithms.pes_samplers.Extrapolator.factory#qiskit.chemistry.algorithms.pes_samplers.Extrapolator.factory "qiskit.chemistry.algorithms.pes_samplers.Extrapolator.factory")                 | Factory method for constructing extrapolators.       |
