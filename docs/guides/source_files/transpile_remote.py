from qiskit.transpiler import generate_preset_pass_manager
from qiskit_ibm_runtime import QiskitRuntimeService
from qiskit_serverless import distribute_task

service = QiskitRuntimeService()


@distribute_task(target={"cpu": 1})
def transpile_remote(circuit, optimization_level, backend):
    """Transpiles an abstract circuit (or list of circuits) into an ISA circuit for a given backend."""
    pass_manager = generate_preset_pass_manager(
        optimization_level=optimization_level,
        backend=service.backend(backend),
    )
    isa_circuit = pass_manager.run(circuit)
    return isa_circuit


from qiskit_serverless import get, get_arguments, save_result

arguments = get_arguments()
circuit = arguments.get("circuit")
optimization_level = arguments.get("optimization_level")
backend = arguments.get("backend")

transpile_worker_reference = transpile_remote(
    circuit, optimization_level, backend
)
result = get(transpile_worker_reference)
save_result(result)

transpile_worker_references = [
    transpile_remote(circuit, optimization_level, backend)
    for circuit in arguments.get("circuit_list")
]

results = get(transpile_worker_references)
save_result(results)  # Overwrites any previously saved results
# This cell is hidden from users. It checks the transpilation ran correctly.
from qiskit import QuantumCircuit

assert all(isinstance(result, QuantumCircuit) for result in results)
