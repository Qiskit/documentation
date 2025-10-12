HPC user experience, HPC developer experience and usage patterns
================================================================

## Content

- [Principles](#principles)
- [Connecting physical resources to Slurm resoures and how to use them](#connecting-physical-resources-to-slurm-resources-and-how-to-use-them)
  - [HPC admin scope](#hpc-admin-scope)
  - [HPC user scope](#hpc-user-scope)
  - [HPC application scope](#hpc-application-scope)
  - [Backend specifics](#backend-specifics)
    - [IBM Direct Access API](#ibm-direct-access-api)
    - [Qiskit Runtime Service](#qiskit-runtime-service)
- [Examples](#examples)
  - [Running jobs with dependencies](#running-jobs-with-dependencies)
  - [Running a job with several Slurm QPU resources](#running-a-job-with-several-slurm-qpu-resources)
  - [Running primitives directly](#running-primitives-directly)
  - [Other workflow tools](#other-workflow-tools)

See [Overview](./overview.md) for a glossary of terms.

## Principles

Slurm QPU resource definitions determine what physical resources can be used by Slurm jobs.
User source code should be agnostic to specific backend instances and even backend types as far as possible.
This keeps source code portable while the QPU selection criteria are part of the resource definition (which is considered configuration as opposed to source code).
The source code does not have to take care resp. is not involved in resource reservation handling (that is done when Slurm jobs are assigned QPU resources and start running, if applicable on the backend) or execution modes like sessions (these are automatically in place while the job is running, if applicable on the backend).
This makes the source code more portable between similar QPU resource types through different backend access methods (such as IBM's Direct Access API and IBM's Qiskit Runtime service through IBM Quantum Platform).
All backend types (such as IBM's Direct Access API, IBM's Qiskit Runtime service, or Pasqal's backends) follow these principles.

## Connecting physical resources to Slurm resources and how to use them

Note the exact syntax is subject to change -- this is a sketch of the UX at this time.

### HPC admin scope

HPC administrators configure the SPANK plugin, what physical resources can be provided to Slurm jobs.
This configuration contains all the information needed to have Slurm jobs access the physical resources, such as endpoints, and access credentials -- note some parts of the configuration such as credentials can be sensitive information.

See the file [qrmi_config.json.example](../plugins/spank_qrmi/qrmi_config.json.example) for a comprehensive example showing.

In `slurm.conf`, qpu generic resources can be assigned to some or all nodes for usage:
```
...
GresTypes=qpu,name
NodeName=node[1-5000] Gres=qpu,name:ibm_fez
...
```

### HPC user scope

HPC users submit jobs using QPU resources that are tied to Slurm QPU resources.
The name attribute references what the HPC administrator has defined.
Mid-term, backend selection can be based on criteria other than a predefined name which refers to a specific backend (e.g. by capacity and error rate qualifiers which help downselect between the defined set of backends).

There might be additional environment variables required, depending on the backend type.

SBATCH parameters will point to one or more QPU resource assigned to the application as generic resources.
Environment variables provided through the plugin will provide the necessary information to the application (see the [HPC application scope](#hpc-application-scope) section for details).

```shell
#SBATCH --time=100
#SBATCH --output=<LOGS_PATH>
#SBATCH --gres=qpu:1
#SBATCH --qpu=ibm_fez
#SBATCH --... # other options

srun ...
```

To use more QPU resources, add more QPUs to the `--qpu` parameter:

```shell
#SBATCH --time=100
#SBATCH --output=<LOGS_PATH>
#SBATCH --gres=qpu:3
#SBATCH --qpu=my_local_qpu,ibm_fez,ibm_marrakesh
#SBATCH --... # other options

srun ...
```

### HPC application scope

HPC applications use the Slurm QPU resources assigned to the Slurm job.

Environment variables provide more details for use by the appliction, e.g. `SLURM_JOB_QPU_RESOURCES` listing the quantum resource names (comma separated if there are several provided).
These variables will be used by QRMI.
See the README files in the various QRMI flavor directories ([ibm](https://github.com/qiskit-community/qrmi/blob/main/examples/qiskit_primitives/ibm/README.md), [pasqal](https://github.com/qiskit-community/qrmi/blob/main/examples/qiskit_primitives/pasqal/README.md)) for details.

```python
from qiskit import QuantumCircuit
# using an IBM QRMI flavor:
from qrmi.primitives import QRMIService
from qrmi.primitives.ibm import SamplerV2, get_target

# define circuit

circuit = QuantumCircuit(2)
circuit.h(0)
circuit.cx(0, 1)
circuit.measure_all()

# instantiate QRMI service and get quantum resource (we'll take the first one should there be serveral of them)
# inject credentials needed for accessing the service at this point
load_dotenv()
service = QRMIService()

resources = service.resources()
qrmi = resources[0]

# Generate transpiler target from backend configuration & properties and transpile
target = get_target(qrmi)
pm = generate_preset_pass_manager(
    optimization_level=1,
    target=target,
)

isa_circuit = pm.run(circuit)

# run the circuit
options = {}
sampler = SamplerV2(qrmi, options=options)

job = sampler.run([(isa_circuit, isa_observable, param_values)])
print(f">>> Job ID: {job.job_id()}")

result = job.result()
print(f">>> {result}")
```

See [examples directory](https://github.com/qiskit-community/qrmi/tree/main/examples/qiskit_primitives/) for example files.

### Backend specifics
#### IBM Direct Access API
##### HPC admin scope
Configuration of Direct Access API backends (HPC admin scope) includes endpoints and credentials to the Direct Access endpoint, authentication services as well as the S3 endpoint.
Specifically, this includes:

* IBM Cloud API key for creating bearer tokens
* endpoint of Direct Access API
* S3 bucket and access details

Access credentials should not be visible to HPC users or other non-privileged users on the system.
Therefore, sensitive data can be put in separate files which can be access protected accordingly.

Note that Slurm has got full access to the backend.
This has several implications:

* the Slurm plugin is responsible for multi-tenancy (ensuring that users don't see results of other users' jobs)
* vetting of users (who is allowed to access the QPU) and ensuring according access is up to the HPC cluster side
* the capacity and priority of the QPU usage is solely managed through Slurm; there is not other scheduling of users involved outside of Slurm

##### HPC user scope
Execution lanes are not exposed to the HPC administrator or user directly.
Instead, mid term, there can be two different modes that HPC users can specify:

* `exclusive=true` specifies that no other jobs can use the resource at the same time. An exclusive mode job gets all execution lanes and can not run at the same time as a non-exclusive job
* `exclusive=false` allows other jobs to run in parallel. In that case, there can be as many jobs as there are execution lanes at the same time, and the job essentially only gets one lane

#### Qiskit Runtime Service
##### HPC user scope

It is expected, that users specify additional access details in environment variables.
Specifically, this includes

* Qiskit Runtime service instance (CRN, Cloud Resource Name)
* Endpoint for Qiskit Runtime (unless auto-detected from the CRN)
* API key which has access to the CRN
* S3 instance, bucket and access token/credentials for data transfers

This determines under which user and service instance the Qiskit Runtime service is used
Accordingly, IBM Quantum Platform's scheduling considers the user's and service instance's capabilities for scheduling.

At this time, users have to provide the above details (no shared cluster-wide Quantum access).

#### Pasqal

#### Pasqal Cloud Services
##### HPC admin scope
There is no specific set-up required from HPC admins for PCS usage.

##### HPC user scope
It is expected, that users specify additional access details in environment variables.
Specifically, this currently includes

* PCS resource to target (FRESNEL, EMU_FRESNEL, EMU_MPS)
* Authorization token

#### Pasqal on-prem devices
TBD.

## Examples

### Running jobs with dependencies

FIXME: show example with 1 classical job => 1 quantum job (python pseudo code)=> 1 classical job.
Main topic: show dependencies

### Running a job with several Slurm QPU resources

FIXME: show example (quantum only, python, is good enough) where several backends are defined, referenced and used
Main topic: show how ids play an important role in that case

### Running primitives directly

FIXME: show example of qrun -- same SBATCH, but different executable.
Main topic: present qrun as an option
FIXME: define/finalize qrun at some time (parameters etc)

### Other workflow tools

FIXME: show how other workflow tooling could play into that
