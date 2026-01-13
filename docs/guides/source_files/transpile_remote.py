
from qiskit.transpiler import generate_preset_pass_manager

def transpile_remote(circuit, optimization_level, backend):
    """Transpiles an abstract circuit into an ISA circuit for a given backend."""
    pass_manager = generate_preset_pass_manager(
        optimization_level=optimization_level,
		backend=backend
    )
    isa_circuit = pass_manager.run(circuit)
    return isa_circuit

from qiskit_serverless import get_arguments, save_result, distribute_task, get

# Get program arguments
arguments = get_arguments()
circuits = arguments.get("circuits")
backend_name = arguments.get("backend_name")
optimization_level = arguments.get("optimization_level")

from qiskit_ibm_runtime import QiskitRuntimeService

service = QiskitRuntimeService()
backend = service.backend(backend_name)

results = [
    transpile_remote(circuit, 1, backend)
    for circuit in circuits
]

save_result({
    "transpiled_circuits": results
})
