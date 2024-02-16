from qiskit.primitives import Sampler, StatevectorSampler, Estimator, StatevectorEstimator

estimator_v1 = Estimator()
sampler_v1 = Sampler()
estimator_v2 = StatevectorEstimator()
sampler_v2 = StatevectorSampler()
# define circuits, observables and param. values

from qiskit import QuantumCircuit
from qiskit.quantum_info import SparsePauliOp
from qiskit.circuit import Parameter

## estimator, 1 circuit, 4 obs
# circuit = QuantumCircuit(2)
# circuit.h(0)
# circuit.x(0)
#
# obs1 = SparsePauliOp("XX")
# obs2 = SparsePauliOp("XY")
# obs3 = SparsePauliOp("ZZ")
# obs4 = SparsePauliOp("ZI")
# # executing 1 circuit with 4 observables using Estimator V1
# job = estimator_v1.run([circuit] * 4, [obs1, obs2, obs3, obs4])
# evs = job.result().values
# print(evs)
#
# # executing 1 circuit with 4 observables using Estimator V2
# job = estimator_v2.run([(circuit, [obs1, obs2, obs3, obs4])])
# evs = job.result()[0].data.evs
# print(evs)

## sampler, 1 circuit, 3 params
#
# circuit = QuantumCircuit(2)
# circuit.rx(Parameter('x'), 0)
# circuit.h(1)
# circuit.measure_all()
#
# vals1 = [0.5]
# vals2 = [0.234]
# vals3 = [0.8]
# # executing 1 circuit with 3 parameter sets using Sampler V1
# job = sampler_v1.run([circuit] * 3, [vals1, vals2, vals3])
# dists = job.result().quasi_dists
# print(dists)
#
# # executing 1 circuit with 3 parameter sets using Sampler V2
# job = sampler_v2.run([(circuit, [vals1, vals2, vals3])])
# counts = job.result()[0].data.meas.get_counts()
# print(counts)

# # estimator, 1 circuit, 4 obs., 3 param. sets

circuit = QuantumCircuit(2)
circuit.rx(Parameter('x'), 0)
circuit.h(1)

vals1 = [0.5]
vals2 = [0.234]
vals3 = [0.8]

obs1 = SparsePauliOp("XX")
obs2 = SparsePauliOp("XY")
obs3 = SparsePauliOp("ZZ")
obs4 = SparsePauliOp("ZI")

# executing 1 circuit with 4 observables and 2 parameter sets using Estimator V1
job = estimator_v1.run([circuit] * 8, [obs1, obs2, obs3, obs4] * 2, [vals1, vals2] * 4)
evs = job.result().values
print(evs)

# executing 1 circuit with 4 observables and 2 parameter sets using Estimator V2
job = estimator_v2.run([(circuit, [[obs1, obs2, obs3, obs4]], [[vals1], [vals2]])])
evs = job.result()[0].data.evs
print(evs)

# # Sampler, 2 circuits, 1 param. set
#
# circuit1 = QuantumCircuit(2)
# circuit1.h(0)
# circuit1.rx(Parameter('x'), 0)
# circuit1.measure_all()
#
# circuit2 = QuantumCircuit(2)
# circuit2.y(1)
# circuit2.rx(Parameter('x'), 0)
# circuit2.measure_all()
#
# vals1 = [0.5]
# vals2 = [0.234]
#
# # executing 2 circuits with 1 parameter set using Sampler V1
# job = sampler_v1.run([circuit1, circuit2], [vals1] * 2)
# dists = job.result().quasi_dists
# print(dists)
#
# # executing 2 circuits with 1 parameter set using Sampler V2
# job = sampler_v2.run([(circuit1, vals1), (circuit2, vals1)])
# counts1 = job.result()[0].data.meas.get_counts()  # result for pub 1 (circuit 1)
# counts2 = job.result()[1].data.meas.get_counts()  # result for pub 2 (circuit 2)
# print(counts1)
# print(counts2)

# # Estimator, 2 circuits, 2 different obs.
#
# circuit1 = QuantumCircuit(2)
# circuit1.h(0)
#
# circuit2 = QuantumCircuit(2)
# circuit2.y(1)
#
# obs1 = SparsePauliOp("XX")
# obs2 = SparsePauliOp("XY")
#
# # executing 2 circuits with 2 different observables using Estimator V2
# job = estimator_v2.run([(circuit1, obs1), (circuit2, obs2)])
# evs1 = job.result()[0].data.evs  # result for pub 1 (circuit 1)
# evs2 = job.result()[1].data.evs  # result for pub 2 (circuit 2)
# print(evs1)
# print(evs2)


# # others:
#
# circuit1 = QuantumCircuit(2)
# circuit1.h(0)
# circuit1.measure_all()
#
# circuit2 = QuantumCircuit(2)
# circuit2.y(1)
# circuit2.measure_all()
#
# a = sampler_v2.run([circuit1, circuit2], shots=128)
# print(a.result())