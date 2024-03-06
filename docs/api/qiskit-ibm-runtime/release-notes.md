---
title: Qiskit Runtime IBM Client release notes
description: Changes made to Qiskit Runtime IBM Client
in_page_toc_max_heading_level: 2
---

<span id="release-notes" />

# Qiskit Runtime IBM Client 0.21 release notes

<span id="relnotes-0-21-1" />

<span id="id1" />

## 0.21.1

<span id="relnotes-0-21-1-bug-fixes" />

### Bug Fixes

*   Fixed a bug where `SamplerV1` and `EstimatorV1` could not be imported because of an issue with how the aliases were defined.

<span id="relnotes-0-21-0" />

<span id="id2" />

## 0.21.0

<span id="relnotes-0-21-0-upgrade-notes" />

### Upgrade Notes

*   Circuits that do not match the target hardware definition are no longer supported by Qiskit Runtime primitives, unless `channel_strategy="q-ctrl"` is used. See the transpilation documentation ([transpile](/transpile)) for instructions to transform circuits and the primitive examples ([run/primitives-examples](/run/primitives-examples)) to see this coupled with operator transformations.

<span id="relnotes-0-21-0-deprecation-notes" />

### Deprecation Notes

*   In a future release, `backend` will be a required parameter for [`qiskit_ibm_runtime.Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler"), and [`qiskit_ibm_runtime.Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") if `session` is not specified, even when using the `ibm_cloud` channel.

    It will also be a required parameter for [`qiskit_ibm_runtime.Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session") and `qiskit_ibm_runtime.Batch`.

<span id="relnotes-0-21-0-bug-fixes" />

<span id="id3" />

### Bug Fixes

*   Fixed an issue with the [`IBMBackend.target`](qiskit_ibm_runtime.IBMBackend#target "qiskit_ibm_runtime.IBMBackend.target") where it would incorrectly exclude supported control flow operations (`IfElseOp`, `WhileLoop`, etc.) if a given backend supported them.

*   Fixed a bug where retrieving a fake backend through `FakeProviderForBackendV2.backend()` would result in a type error.

*   Fixes the check for ISA circuits to allow pulse gates and circuits that don’t have layout.

<span id="relnotes-0-20-0" />

<span id="id4" />

## 0.20.0

<span id="relnotes-0-20-0-new-features" />

### New Features

*   Add `dd_barrier` optional input to [`PadDynamicalDecoupling`](qiskit_ibm_runtime.transpiler.passes.scheduling.PadDynamicalDecoupling "qiskit_ibm_runtime.transpiler.passes.scheduling.PadDynamicalDecoupling") constructor to identify portions of the circuit to apply dynamical decoupling (dd) on selectively. If this string is contained in the label of a barrier in the circuit, dd is applied on the delays ending with it (on the same qubits); otherwise, it is not applied.

*   Python 3.12 is now supported.

*   Sessions will now be started with a new `/sessions` endpoint that allows for different execution modes. Batch mode is now supported through `Batch`, and [`Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session") will work the same as way as before. Please see [run/sessions](/run/sessions) for more information.

    Note that `Session` and `Batch` created from `qiskit-ibm-runtime` prior to this release will no longer be supported after March 31, 2024. Please update your `qiskit-ibm-runtime` version as soon as possible before this date.

    Also note that using simulators with sessions is no longer supported. Users can still start sessions with simulators without any issues but a session will not actually be created. There will be no session ID.

*   Sessions started with [`qiskit_ibm_runtime.IBMBackend.open_session()`](qiskit_ibm_runtime.IBMBackend#open_session "qiskit_ibm_runtime.IBMBackend.open_session") will use the new `/sessions` endpoint.

    The sessions functionality will not change but note that `backend.run()` sessions prior to this release will no longer be supported after March 31, 2024. Please update your `qiskit-ibm-runtime` version as soon as possible before this date.

<span id="relnotes-0-20-0-deprecation-notes" />

<span id="id5" />

### Deprecation Notes

*   Circuits that do not match the target hardware definition will no longer be supported after March 1, 2024. See the transpilation documentation ([transpile](/transpile)) for instructions to transform circuits and the primitive examples ([run/primitives-examples](/run/primitives-examples)) to see this coupled with operator transformations.

<span id="relnotes-0-20-0-bug-fixes" />

<span id="id6" />

### Bug Fixes

*   Fix assignment of instruction durations when scheduling circuits with control flow. Prior to this fix, the indices for instructions on inner blocks were not mapped to the physical indices in the outer dag.

<span id="relnotes-0-20-0-other-notes" />

### Other Notes

*   The `InstructionDurations` durations input is now also required for the constructor of `PadDelay`.

<span id="relnotes-0-19-1" />

<span id="id7" />

## 0.19.1

<span id="relnotes-0-19-1-upgrade-notes" />

<span id="id8" />

### Upgrade Notes

*   Extend `DynamicCircuitInstructions.from_backend()` to extract and patch durations from both `BackendV1` and `BackendV2` objects. Also add `DynamicCircuitInstructions.from_target()` to use a `Target` object instead.

<span id="relnotes-0-19-1-bug-fixes" />

<span id="id9" />

### Bug Fixes

*   Fix the patching of `DynamicCircuitInstructions` for instructions with durations that are not in units of `dt`.

<span id="relnotes-0-19-0" />

<span id="id10" />

## 0.19.0

<span id="relnotes-0-19-0-upgrade-notes" />

<span id="id11" />

### Upgrade Notes

*   qiskit-ibm-provider is pending deprecation, and therefore will no longer be a dependency for qiskit-ibm-runtime.

*   qiskit-ibm-runtime is now compatible with Qiskit versions >= 0.45, including 1.0.0.

<span id="relnotes-0-18-0" />

<span id="id12" />

## 0.18.0

<span id="relnotes-0-18-0-new-features" />

<span id="id13" />

### New Features

*   Added a new parameter, dynamic\_circuits to [`backends()`](qiskit_ibm_runtime.QiskitRuntimeService#backends "qiskit_ibm_runtime.QiskitRuntimeService.backends") to allow filtering of backends that support dynamic circuits.

*   Added `max_time` parameter to `IBMBackend.open_session()`.

*   Added a method `RuntimeJob.queue_info()` to get the queue information from the backend. This feature was transferred from `qiskit_ibm_provider`.

<span id="relnotes-0-18-0-deprecation-notes" />

<span id="id14" />

### Deprecation Notes

*   [`runtime()`](qiskit_ibm_runtime.QiskitRuntimeService#runtime "qiskit_ibm_runtime.QiskitRuntimeService.runtime") has been deprecated.

<span id="relnotes-0-18-0-bug-fixes" />

<span id="id15" />

### Bug Fixes

*   Many methods in [`RuntimeJob`](qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob") require retrieving the job data from the API with `job_get()`. This API call will now exclude the `params` field by default because they are only necessary in [`qiskit_ibm_runtime.RuntimeJob.inputs()`](qiskit_ibm_runtime.RuntimeJob#inputs "qiskit_ibm_runtime.RuntimeJob.inputs").

<span id="relnotes-0-17-0" />

<span id="id16" />

## 0.17.0

<span id="relnotes-0-17-0-new-features" />

<span id="id17" />

### New Features

*   Added a new method [`properties()`](qiskit_ibm_runtime.RuntimeJob#properties "qiskit_ibm_runtime.RuntimeJob.properties") which returns the backend properties of the job at the time the job was run.

*   [`details()`](qiskit_ibm_runtime.Session#details "qiskit_ibm_runtime.Session.details") has a new field, activated\_at, which is the timestamp of when the session was changed to active.

<span id="relnotes-0-17-0-bug-fixes" />

<span id="id18" />

### Bug Fixes

*   When a single backend is retrieved with the `instance` parameter,

    ```python
    service.backend('ibm_torino', instance='ibm-q/open/main')
    # raises error if torino is not in ibm-q/open/main but in a different instance
    # the user has access to
    service = QiskitRuntimeService(channel="ibm_quantum", instance="ibm-q/open/main")
    service.backend('ibm_torino') # raises the same error
    ```

    if the backend is not in the instance but in a different one the user has access to, an error will be raised. The same error will now be raised if an instance is passed in at initialization and then a backend not in that instance is retrieved.

*   Fixed an issue where retrieving the coupling\_map of some backends would result in a NameError.

<span id="relnotes-0-16-0" />

<span id="id19" />

## 0.16.0

<span id="relnotes-0-16-0-prelude" />

### Prelude

Sessions are now thread-safe and allow for multiple concurrent interactive experiments.

<span id="relnotes-0-16-0-new-features" />

<span id="id20" />

### New Features

*   Sessions are now thread-safe.

<span id="relnotes-0-16-0-upgrade-notes" />

<span id="id21" />

### Upgrade Notes

*   Methods related to using custom programs are removed.

<span id="relnotes-0-16-0-bug-fixes" />

<span id="id22" />

### Bug Fixes

*   If a cloud instance that is `q-ctrl` enabled is used while `q-ctrl` is not passed in as the `channel_strategy`, an error will be raised.

<span id="relnotes-0-15-0-1-stable-0-15" />

<span id="id23" />

## 0.15.0-1

<span id="relnotes-0-15-0-1-stable-0-15-bug-fixes" />

<span id="id24" />

### Bug Fixes

*   Reverting 0.15.0 changes to [`from_id()`](qiskit_ibm_runtime.Session#from_id "qiskit_ibm_runtime.Session.from_id") because it was a breaking change without proper deprecation.

<span id="relnotes-0-15-0-stable-0-15" />

<span id="id25" />

## 0.15.0

<span id="relnotes-0-15-0-stable-0-15-new-features" />

<span id="id26" />

### New Features

*   A new module [`qiskit_ibm_runtime.fake_provider`](fake_provider#module-qiskit_ibm_runtime.fake_provider "qiskit_ibm_runtime.fake_provider"), has been added to provide access to a series of fake backends derived from snapshots of IBM Quantum devices. This functionality was originally provided by the `qiskit.providers.fake_provider` module, but will soon be deprecated in favor of [`qiskit_ibm_runtime.fake_provider`](fake_provider#module-qiskit_ibm_runtime.fake_provider "qiskit_ibm_runtime.fake_provider").

    The snapshots provided by the fake backends are useful for local testing of the transpiler and performing local noisy simulations of the system before running on real devices. Here is an example of using a fake backend for transpilation and simulation:

    ```python
    from qiskit import QuantumCircuit
    from qiskit import transpile
    from qiskit_ibm_runtime.fake_provider import FakeManilaV2

    # Get a fake backend from the fake provider
    backend = FakeManilaV2()

    # Create a simple circuit
    circuit = QuantumCircuit(3)
    circuit.h(0)
    circuit.cx(0,1)
    circuit.cx(0,2)
    circuit.measure_all()

    # Transpile the ideal circuit to a circuit that can be directly executed by the backend
    transpiled_circuit = transpile(circuit, backend)

    # Run the transpiled circuit using the simulated fake backend
    job = backend.run(transpiled_circuit)
    counts = job.result().get_counts()
    ```

*   Added support for `backend.run()`. The functionality is similar to that in `qiskit-ibm-provider`.

*   An error will be raised during initialization if `q-ctrl` is passed in as the `channel_strategy` and the account instance does not have `q-ctrl` enabled.

*   Removed storing result in `RuntimeJob._results`. Instead retrieve results every time the `results()` method is called.

<span id="relnotes-0-15-0-stable-0-15-deprecation-notes" />

<span id="id27" />

### Deprecation Notes

*   Usage of the `~/.qiskit/qiskitrc.json` file for account information has been deprecated. Use `~/.qiskit/qiskit-ibm.json` instead.

<span id="relnotes-0-15-0-stable-0-15-bug-fixes" />

<span id="id28" />

### Bug Fixes

*   Fixed an issue where canceled and failed jobs would return an invalid result that resulted in a type error, preventing the actual error from being returned to the user.

*   A warning will be raised at initialization if the DE environment is being used since not all features are supported there.

*   The `backend` parameter in [`from_id()`](qiskit_ibm_runtime.Session#from_id "qiskit_ibm_runtime.Session.from_id") is being deprecated because sessions do not support multiple backends. Additionally, the `service` parameter is no longer optional.

*   The `circuit_indices` and `observable_indices` run inputs for [`Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") and [`Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") have been completely removed.

<span id="relnotes-0-15-0-stable-0-15-other-notes" />

<span id="id29" />

### Other Notes

*   Added migration code for running `backend.run` in qiskit\_ibm\_runtime instead of in qiskit\_ibm\_provider.

