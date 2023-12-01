---
title: Qiskit Runtime IBM Client release notes
description: Changes made to Qiskit Runtime IBM Client
in_page_toc_max_heading_level: 2
---

<span id="release-notes" />

# Qiskit Runtime IBM Client 0.15 release notes

<span id="release-notes-0-15-0" />

<span id="id1" />

## 0.15.0

<span id="release-notes-0-15-0-new-features" />

### New Features

*   A new module `qiskit_ibm_runtime.fake_provider`, has been added to provide access to a series of fake backends derived from snapshots of IBM Quantum devices. This functionality was originally provided by the `qiskit.providers.fake_provider` module, but will soon be deprecated in favor of `qiskit_ibm_runtime.fake_provider`.

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

<span id="release-notes-0-15-0-deprecation-notes" />

### Deprecation Notes

*   Usage of the `~/.qiskit/qiskitrc.json` file for account information has been deprecated. Use `~/.qiskit/qiskit-ibm.json` instead.

<span id="release-notes-0-15-0-bug-fixes" />

### Bug Fixes

*   Fixed an issue where canceled and failed jobs would return an invalid result that resulted in a type error, preventing the actual error from being returned to the user.

*   A warning will be raised at initialization if the DE environment is being used since not all features are supported there.

*   The `backend` parameter in [`from_id()`](qiskit_ibm_runtime.Session#from_id "qiskit_ibm_runtime.Session.from_id") is being deprecated because sessions do not support multiple backends. Additionally, the `service` parameter is no longer optional.

*   The `circuit_indices` and `observable_indices` run inputs for [`Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") and [`Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") have been completely removed.

<span id="release-notes-0-15-0-other-notes" />

### Other Notes

*   Added migration code for running `backend.run` in qiskit\_ibm\_runtime instead of in qiskit\_ibm\_provider.

<span id="release-notes-0-14-0" />

<span id="id2" />

## 0.14.0

<span id="release-notes-0-14-0-new-features" />

<span id="id3" />

### New Features

*   There is a new class, `qiskit_ibm_runtime.Batch` that currently works the same way as [`qiskit_ibm_runtime.Session`](qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session") but will later be updated to better support submitting multiple jobs at once.

*   Arbitrary keys and values are no longer allowed in `Options`.

<span id="release-notes-0-14-0-deprecation-notes" />

<span id="id4" />

### Deprecation Notes

*   Custom programs are being deprecated as of qiskit-ibm-runtime 0.14.0 and will be removed on November 27, 2023. Users can instead convert their custom programs to use Qiskit Runtime primitives with Quantum Serverless. Refer to the migration guide for instructions: [https://qiskit-extensions.github.io/quantum-serverless/migration/migration\_from\_qiskit\_runtime\_programs.html](https://qiskit-extensions.github.io/quantum-serverless/migration/migration_from_qiskit_runtime_programs.html)

<span id="release-notes-0-13-0" />

<span id="id5" />

## 0.13.0

<span id="release-notes-0-13-0-new-features" />

<span id="id6" />

### New Features

*   Added a new method, [`details()`](qiskit_ibm_runtime.Session#details "qiskit_ibm_runtime.Session.details") that returns information about a session, including: maximum session time, active time remaining, the current state, and whether or not the session is accepting jobs.

    Also added [`status()`](qiskit_ibm_runtime.Session#status "qiskit_ibm_runtime.Session.status"), which returns the current status of the session.

*   At initialization, if not passed in directly, the default `instance` selected by the provider will be logged at the “INFO” level. When running a job, if the backend selected is not in the default instance but in a different instance the user also has access to, that instance will also be logged.

<span id="release-notes-0-13-0-upgrade-notes" />

### Upgrade Notes

*   [`qiskit_ibm_runtime.Session.close()`](qiskit_ibm_runtime.Session#close "qiskit_ibm_runtime.Session.close") has been updated to mark a `Session` as no longer accepting new jobs. The session won’t accept more jobs but it will continue to run any queued jobs until they are done or the max time expires. This will also happen automatically when the session context manager is exited. When a session that is not accepting jobs has run out of jobs to run, it’s immediately closed, freeing up the backend to run more jobs rather than wait for the interactive timeout.

    The old close method behavior has been moved to a new method, [`qiskit_ibm_runtime.Session.cancel()`](qiskit_ibm_runtime.Session#cancel "qiskit_ibm_runtime.Session.cancel"), where all queued jobs within a session are cancelled and terminated.

<span id="release-notes-0-13-0-bug-fixes" />

<span id="id7" />

### Bug Fixes

*   Fixed a bug where `shots` passed in as a numpy type were not being serialized correctly.

*   Fixed a bug in [`target_history()`](qiskit_ibm_runtime.IBMBackend#target_history "qiskit_ibm_runtime.IBMBackend.target_history") where the datetime parameter was not being used to retrieve backend properties from the specified date.

<span id="release-notes-0-12-2" />

<span id="id8" />

## 0.12.2

<span id="release-notes-0-12-2-new-features" />

<span id="id9" />

### New Features

*   If using a `channel_strategy`, only backends that support that `channel_strategy` will be accessible to the user.

*   Added the option to define a default account in the account json file. To select an account as default, define `set_as_default=True` in `QiskitRuntimeService.save_account()`.

*   Added new method `Session.from_id` which creates a new session with a given id.

*   There will now be a warning if a user submits a job that is predicted to exceed their system execution time monthly quota of 10 minutes. This only applies to jobs run on real hardware in the instance `ibm-q/open/main`. If the job does end up exceeding the quota, it will be canceled.

<span id="release-notes-0-12-2-upgrade-notes" />

<span id="id10" />

### Upgrade Notes

*   Job error messages now include the error code. Error codes can be found in [https://docs.quantum-computing.ibm.com/errors](https://docs.quantum-computing.ibm.com/errors).

<span id="release-notes-0-12-1" />

<span id="id11" />

## 0.12.1

<span id="release-notes-0-12-1-new-features" />

<span id="id12" />

### New Features

*   Users can use a new environment variable, `USAGE_DATA_OPT_OUT` to opt out of user module usage tracking by setting this value to `True`. Additionally, only certain qiskit modules will be tracked instead of all modules that begin with qiskit or qiskit\_.

*   Users can now pass in a value of `default` to the `channel_strategy` parameter in [`qiskit_ibm_runtime.QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService"). Now, if an account is configured with a certain channel strategy, the user can override it by passing in `default`.

*   The Sampler and Estimator primitives have been enhanced to incorporate custom validation procedures when the channel\_strategy property within the :class:qiskit\_ibm\_runtime.QiskitRuntimeService is configured as “q-ctrl.” This customized validation logic effectively rectifies incorrect input options and safeguards users against inadvertently disabling Q-CTRL’s performance enhancements.

<span id="release-notes-0-12-1-bug-fixes" />

<span id="id13" />

### Bug Fixes

*   Retrieving backend properties with [`properties()`](qiskit_ibm_runtime.IBMBackend#properties "qiskit_ibm_runtime.IBMBackend.properties") now supports passing a `datetime` parameter to retrieve properties from a past date.

*   The `noise_factors` and `extrapolator` options in [`qiskit_ibm_runtime.options.ResilienceOptions`](qiskit_ibm_runtime.options.ResilienceOptions "qiskit_ibm_runtime.options.ResilienceOptions") will now default to `None` unless `resilience_level` is set to 2. Only options relevant to the resilience level will be set, so when using `resilience_level` 2, `noise_factors` will still default to `(1, 3, 5)` and `extrapolator` will default to `LinearExtrapolator`. Additionally, options with a value of `None` will no longer be sent to the server.

*   Job error messages will no longer be returned in all uppercase.

*   The max\_execution\_time option is now based on system execution time instead of wall clock time. System execution time is the amount of time that the system is dedicated to processing your job. If a job exceeds this time limit, it is forcibly cancelled. Simulator jobs continue to use wall clock time.

<span id="release-notes-0-12-0" />

<span id="id14" />

## 0.12.0

<span id="release-notes-0-12-0-new-features" />

<span id="id15" />

### New Features

*   Added a `global_service`, so that if the user defines a QiskitRuntimeService, it will be used by the primitives, even if the service is not passed to them explicitly. For example:

    ```python
    from qiskit_ibm_runtime import QiskitRuntimeService, Sampler
    service = QiskitRuntimeService(channel="ibm_quantum")
    # Sampler._service field will be initialized to ``service``
    sampler = Sampler(backend="ibmq_qasm_simulator")
    ```

*   Added a new method, [`qiskit_ibm_runtime.QiskitRuntimeService.instances()`](qiskit_ibm_runtime.QiskitRuntimeService#instances "qiskit_ibm_runtime.QiskitRuntimeService.instances") that returns all instances(hub/group/project) the user is in. This is only for the `ibm_quantum` channel since the `ibm_cloud` channel does not have multiple instances.

*   Added validations for options on the second level of the dict, i.e., for each of resilience, simulator, execution, and transpilation, check that their options are supported. Otherwise throw an exception.

*   There is a new parameter, `channel_strategy` that can be set in the initialization of [`qiskit_ibm_runtime.QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") or saved in [`qiskit_ibm_runtime.QiskitRuntimeService.save_account()`](qiskit_ibm_runtime.QiskitRuntimeService#save_account "qiskit_ibm_runtime.QiskitRuntimeService.save_account"). If `channel_strategy` is set to `q-ctrl`, all jobs within the service will use the Q-CTRL error mitigation strategy.

<span id="release-notes-0-12-0-upgrade-notes" />

<span id="id16" />

### Upgrade Notes

*   Circuits and other input parameters will no longer be automatically stored in runtime jobs. They can still be retrieved with [`qiskit_ibm_runtime.RuntimeJob.inputs()`](qiskit_ibm_runtime.RuntimeJob#inputs "qiskit_ibm_runtime.RuntimeJob.inputs").

<span id="release-notes-0-12-0-deprecation-notes" />

<span id="id17" />

### Deprecation Notes

*   The `noise_amplifier` resilience options is deprecated. After the deprecation period, only local folding amplification will be supported. Refer to [https://github.com/qiskit-community/prototype-zne](https://github.com/qiskit-community/prototype-zne) for global folding amplification.

<span id="release-notes-0-12-0-bug-fixes" />

<span id="id18" />

### Bug Fixes

*   When running on channel “ibm\_cloud”, it is possible not to specify the backend. In this case, the system selects one of the available backends for this service. Issue #625 [https://github.com/Qiskit/qiskit-ibm-runtime/issues/625](https://github.com/Qiskit/qiskit-ibm-runtime/issues/625) reported that the the backend returned by `job.backend()` was not always the actual backend on which the job was run. This PR fixes this bug.

*   Fixes a race condition in the test test\_cancel\_running\_job() in test\_job.py where job cancellation could not be performed. Refer to #1019 \<[https://github.com/Qiskit/qiskit-ibm-runtime/issues/1019](https://github.com/Qiskit/qiskit-ibm-runtime/issues/1019)>\_ for more details.

*   Previously we added validation when jobs were run to make sure the number of circuits was not greater than the maximum for that backend, `backend.max_circuits`. This limit isn’t actually necessary for primtives run from within a session.

<span id="release-notes-0-11-3" />

<span id="id19" />

## 0.11.3

<span id="release-notes-0-11-3-new-features" />

<span id="id20" />

### New Features

*   Added reason for failure when invoking the method [`error_message()`](qiskit_ibm_runtime.RuntimeJob#error_message "qiskit_ibm_runtime.RuntimeJob.error_message").

*   Added a new property, [`usage_estimation()`](qiskit_ibm_runtime.RuntimeJob#usage_estimation "qiskit_ibm_runtime.RuntimeJob.usage_estimation") that returns the estimated system execution time, `quantum_seconds`. System execution time represents the amount of time that the system is dedicated to processing your job.

*   Raise an exception if the number of circuits passed to `_run_primitive()` exceeds the number of circuits supported on the backend.

*   There is a new method [`update_tags()`](qiskit_ibm_runtime.RuntimeJob#update_tags "qiskit_ibm_runtime.RuntimeJob.update_tags") that can be used to update the `job_tags` of a job.

*   If `instance` is provided as parameter to [`qiskit_ibm_runtime.QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService"), then this is used as a filter in `QiskitRuntimeService.backends()`. If `instance` is not recognized as one of the provider instances, an exception will be raised. Previously, we only issued a warning.

<span id="release-notes-0-11-2" />

<span id="id21" />

## 0.11.2

<span id="release-notes-0-11-2-new-features" />

<span id="id22" />

### New Features

*   If a job has been cancelled, and job.result() is requested, throw an exception rather than returning None.

*   A new method, [`qiskit_ibm_runtime.options.SimulatorOptions.set_backend()`](qiskit_ibm_runtime.options.SimulatorOptions#set_backend "qiskit_ibm_runtime.options.SimulatorOptions.set_backend"), allows users to more easily set simulator options for a backend.

    ```python
    from qiskit.providers.fake_provider import FakeManila
    from qiskit_aer.noise import NoiseModel

    # Make a noise model
    fake_backend = FakeManila()

    # Set options to include the noise model
    options = Options()
    options.simulator.set_backend(fake_backend)
    options.simulator.seed_simulator = 42
    ```

<span id="release-notes-0-11-2-bug-fixes" />

<span id="id23" />

### Bug Fixes

*   Fixed infinite recursion when attempting to deepcopy an IBMBackend. Added a method `qiskit_ibm_runtime.IBMBackend.deepcopy()`.

*   Fixed an issue where circuit metadata was not being serialized correctly resulting in a type error.

<span id="release-notes-0-11-1" />

<span id="id24" />

## 0.11.1

<span id="release-notes-0-11-1-deprecation-notes" />

<span id="id25" />

### Deprecation Notes

*   In [`qiskit_ibm_runtime.RuntimeJob.metrics()`](qiskit_ibm_runtime.RuntimeJob#metrics "qiskit_ibm_runtime.RuntimeJob.metrics"), the bss field will be replaced by usage.

<span id="release-notes-0-11-0" />

<span id="id26" />

## 0.11.0

<span id="release-notes-0-11-0-new-features" />

<span id="id27" />

### New Features

*   When retrieving a job with `qiskit_ibm_runtime.IBMRuntimeService.job()` the `params` will no longer be returned from the API. They will instead be loaded loazily when they are actually needed in [`qiskit_ibm_runtime.RuntimeJob.inputs()`](qiskit_ibm_runtime.RuntimeJob#inputs "qiskit_ibm_runtime.RuntimeJob.inputs").

*   Added warning when the backend is not active in QiskitRuntimeService.run.

*   Support input of type `CouplingMap` when given as simulator option. Previously we supported, for example:

    ```python
    options.simulator = {"coupling_map": [[0, 1], [1, 0]]}
    ```

    Now we also support the following:

    ```python
    options.simulator = {"coupling_map": CouplingMap.from_line(10)}
    ```

<span id="release-notes-0-11-0-upgrade-notes" />

<span id="id28" />

### Upgrade Notes

*   A default session is no longer open for you if you pass a backend name or backend instance to [`qiskit_ibm_runtime.Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") or [`qiskit_ibm_runtime.Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") constructors. The primitive will instead run without a session. In addition, you should now use the `backend` parameter to pass a backend name or instance instead of the `session` parameter (which can continue to be used to pass a session).

*   The first parameter of the [`qiskit_ibm_runtime.Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") and [`qiskit_ibm_runtime.Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") constructors is now `backend` instead of `session`.

<span id="release-notes-0-11-0-deprecation-notes" />

<span id="id29" />

### Deprecation Notes

*   Passing a backend name or backend instance to the `session` parameter when initializing a [`qiskit_ibm_runtime.Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler") or [`qiskit_ibm_runtime.Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator") has been deprecated. Please use the `backend` parameter instead. You can continue to pass a session using the `session` parameter.

<span id="release-notes-0-10-0" />

<span id="id30" />

## 0.10.0

<span id="release-notes-0-10-0-new-features" />

<span id="id31" />

### New Features

*   Python 3.11 is now supported.

<span id="release-notes-0-10-0-upgrade-notes" />

<span id="id32" />

### Upgrade Notes

*   Added error messages in case the user defines unsupported values for ‘max\_execution\_time’. Previously, this validation was done on the server side.

<span id="release-notes-0-10-0-bug-fixes" />

<span id="id33" />

### Bug Fixes

*   Added deserialization of the params of RuntimeJob.inputs. Previously, the circuits were returned in serialized format. Fixes issue [#829](https://github.com/Qiskit/qiskit-ibm-runtime/issues/829).

*   Allow for users to retrieve all backends even if one of the backends has a missing configuration. The backend without a configuration will not be returned.

<span id="release-notes-0-9-4" />

<span id="id35" />

## 0.9.4

<span id="release-notes-0-9-4-new-features" />

<span id="id36" />

### New Features

*   Added methods to validate input options to `transpilation` and `environment` options.

<span id="release-notes-0-9-4-upgrade-notes" />

<span id="id37" />

### Upgrade Notes

*   When constructing a backend `qiskit.transpiler.Target`, faulty qubits and gates from the backend configuration will be filtered out.

<span id="release-notes-0-9-4-deprecation-notes" />

<span id="id38" />

### Deprecation Notes

*   The deprecated arguments `circuits`, `parameters`, `service`, and `skip_transpilation` have been removed from [`Sampler`](qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler").

    Similarly, the deprecated arguments `circuits`, `observables`, `parameters`, `service`, and `skip_transpilation` have been removed from [`Estimator`](qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator").

    In [`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService"), the `auth` parameter has been removed. Additionally, the `instance`, `job_tags`, and `max_execution_time` paramters have been removed from [`qiskit_ibm_runtime.QiskitRuntimeService.run()`](qiskit_ibm_runtime.QiskitRuntimeService#run "qiskit_ibm_runtime.QiskitRuntimeService.run"). They can be passed in through [`RuntimeOptions`](qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions") instead.

    Within [`RuntimeOptions`](qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions"), `backend_name` is no longer supported. Please use `backend` instead.

<span id="release-notes-0-9-4-bug-fixes" />

<span id="id39" />

### Bug Fixes

*   Fixed a bug where retrieving a job from a backend without `noise_model` or `seed_simulator` options would result in a key error.

<span id="release-notes-0-9-3" />

<span id="id40" />

## 0.9.3

<span id="release-notes-0-9-3-upgrade-notes" />

<span id="id41" />

### Upgrade Notes

*   Added error messages in case the user defines unsupported values for ‘optimization\_level’ or for ‘resilience\_level’. Added validation checking for options given as input to `resilience`. Previously, this validation was done on the server side. By adding them on the client side, response will be much faster upon failure. The environment variable `QISKIT_RUNTIME_SKIP_OPTIONS_VALIDATION` is used to control validation. If set, validation will be skipped.

*   Backend configurations are no longer loaded when [`QiskitRuntimeService`](qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") is initialized. Instead, the configuration is only loaded and cached during [`get_backend()`](qiskit_ibm_runtime.QiskitRuntimeService#get_backend "qiskit_ibm_runtime.QiskitRuntimeService.get_backend") and [`backends()`](qiskit_ibm_runtime.QiskitRuntimeService#backends "qiskit_ibm_runtime.QiskitRuntimeService.backends").

<span id="release-notes-0-9-3-bug-fixes" />

<span id="id42" />

### Bug Fixes

*   When creating an Option object and passing an input option to `resilience_options`, this option was included in `resilience_options`, but the other, default options were removed. This was fixed, so now inputs are handled correctly, like other option types.

<span id="release-notes-0-9-2" />

<span id="id43" />

## 0.9.2

<span id="release-notes-0-9-2-new-features" />

<span id="id44" />

### New Features

*   Added a new argument called `session_time` to the program\_run method and [`qiskit_ibm_runtime.RuntimeOptions`](qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions"). Now values entered by the user for session `max_time` will be sent to the server side as `session_time`. This allows users to specify different values for session `max_time` and `max_execution_time`.

*   Added the method [`target_history()`](qiskit_ibm_runtime.IBMBackend#target_history "qiskit_ibm_runtime.IBMBackend.target_history"). This method is similar to [`target()`](qiskit_ibm_runtime.IBMBackend#target "qiskit_ibm_runtime.IBMBackend.target"). The difference is that the new method enables the user to pass a datetime parameter, to retrieve historical data from the backend.

<span id="release-notes-0-9-2-upgrade-notes" />

<span id="id45" />

### Upgrade Notes

*   Accept all options on given on level 1 and assign them to the appropriate hierarchical option type. For example, if the user provides `options = {"shots": 10}` as input to Sampler/Estimator, this will be interpreted as `options = {"execution: {"shots": 10}}`.

*   If a job is returned without a backend, retrieving the backend through [`qiskit_ibm_runtime.RuntimeJob.backend()`](qiskit_ibm_runtime.RuntimeJob#backend "qiskit_ibm_runtime.RuntimeJob.backend") will re-retrieve data from the server and attempt to update the backend. Additionally, `job_id` and `backend`, which were deprecated attributes of [`qiskit_ibm_runtime.RuntimeJob`](qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob") have now been removed.

*   Added a user warning when the user passes an option that is not supported in Options.

<span id="release-notes-0-9-2-bug-fixes" />

<span id="id46" />

### Bug Fixes

*   Fixed a bug where the default values for `optimization_level` and for `resilience_level` were not being set correctly.

*   Fixed an issue where if no backend was selected, `optimization_level` and `resilience_level` would default to `None`, causing the job to fail.

*   If an instance is passed in to [`qiskit_ibm_runtime.QiskitRuntimeService.get_backend()`](qiskit_ibm_runtime.QiskitRuntimeService#get_backend "qiskit_ibm_runtime.QiskitRuntimeService.get_backend") and then the backend is used in a session, all jobs within the session will be run from the original instance passed in.

*   Removed additional decomposition of `BlueprintCircuit`s in the JSON encoder. This was introduced as a bugfix, but has since been fixed. Still doing the decomposition led to possible problems if the decomposed circuit was not in the correct basis set of the backend anymore.

<span id="release-notes-0-9-1" />

<span id="id47" />

## 0.9.1

<span id="release-notes-0-9-1-upgrade-notes" />

<span id="id48" />

### Upgrade Notes

*   [`qiskit_ibm_runtime.QiskitRuntimeService.jobs()`](qiskit_ibm_runtime.QiskitRuntimeService#jobs "qiskit_ibm_runtime.QiskitRuntimeService.jobs") now has a `backend_name` parameter that can be used to only return jobs run with the specified backend.

*   Allow the user to store account details in a file specified by the user in the parameter. `filename`. The default remains \~/.qiskit/qiskit-ibm.json. Example of usage: Ex:

    ```python
    QiskitRuntimeService.save_account(channel="ibm_quantum",
                                      filename="~/my_account_file.json",
                                      name = "my_account",
                                      token="my_token")
    service = QiskitRuntimeService(channel="ibm_quantum", 
                                   filename="~/my_account_file.json", 
                                   name = "my_account",)
    ```

<span id="release-notes-0-9-1-deprecation-notes" />

<span id="id49" />

### Deprecation Notes

*   `backend` is no longer a supported option when using [`qiskit_ibm_runtime.Session.run()`](qiskit_ibm_runtime.Session#run "qiskit_ibm_runtime.Session.run"). Sessions do not support multiple cross backends. Additionally, an exception will be raised if a backend passed in through options does not match the original session backend in an active session.

<span id="release-notes-0-9-1-bug-fixes" />

<span id="id50" />

### Bug Fixes

*   `ECRGate` and `CZGate` mappings have been added to the `Target` constructor to fix a tranpile bug.

<span id="release-notes-0-9-1-other-notes" />

<span id="id51" />

### Other Notes

*   Since error messages from a failing job may be long, we shortened them so that they begin from the last `Traceback` in the message.

