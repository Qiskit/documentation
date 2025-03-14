# Qiskit documentation notebook tester

A tool to execute notebooks for testing, with certain features useful for
notebooks that run jobs on IBM Quantum backends.

## Installing

To install, run the following command:

```
pip install git+https://github.com/Qiskit/documentation.git@main#subdirectory=scripts/nb-tester
```

> [!NOTE]
> If adding this package as a dependency, change `main` to point to a specific
> commit. For example:
>
> ```
> git+https://github.com/Qiskit/documentation.git@91bce99173f46be985698cc78ec4521856bf83b6#subdirectory=scripts/nb-tester
> ```
>
> This means changes to this repository won't break your tests. You can update
> the commit when you're ready to pull in our changes.

If adding this as a dependency to a `tox.ini` file, escape the `#` with a
backslash like this: `\#`.

## Basic usage

To use this tool, just run the `test-docs-notebooks` command, followed by a
list of notebooks you'd like to execute.

```
test-docs-notebooks <path/to/notebook.ipynb> <path/to/another.ipynb>
```

- To write the executed notebooks to disk, include the `--write` argument.
- To set a time limit for each cell, include the `--cell-timeout` argument,
  followed by the time in seconds.

## Patches

A key feature of this tool is tricking notebooks into running jobs on a
specific backend so we can test them without waiting in a queue. We do this by
monkey-patching `QiskitRuntimeService.least_busy` to return the backend of our
choosing. This technique requires notebooks always use `least_busy` to select a
backend.

A patch is just Python code that we run in the kernel before executing your
notebook's code. You can provide your own patch code, or use one of our
built-in patches.

You can specify patch information as a TOML dict string. This dict _must_ include a
`patch` key, which is either a filepath to your custom patch, or the name of
one of our built-in patches (choose from `qiskit-fake-provider`,
`qiskit-ibm-runtime`, or `qiskit-fake-provider`).

```
{ patch="patch-name" }
```

To make them more flexible, the patch code can include variables inside curly
braces. If a patch includes variables, you must provide them as extra arguments
when specifying the patch. These arguments will be injected into your patch
code using `.format(**args)`. For example, here's a simplified version of our
built-in `qiskit-fake-provider` patch:

```python
# Example patch file
from qiskit.providers.fake_provider import GenericBackendV2
from qiskit_ibm_runtime import QiskitRuntimeService
QiskitRuntimeService.least_busy = lambda *_: GenericBackendV2(num_qubits={num_qubits})
```

Note the variable `{num_qubits}`. To use this patch, include the values of any
variables as extra arguments in the TOML dict.

```
{ patch="qiskit-fake-provider", num_qubits=3 }
```

There are two ways to provide patches: Through the CLI or through a config file.
You cannot use both at the same time.

### Set patches through the CLI

Use the `--patch` argument to provide patch information, followed by a list of
filenames that the patch should apply to. Filenames passed before a `--patch`
argument are not patched.

```
test-docs-notebooks [filenames] --patch [patch-information] [filenames]
```

<details><summary>Example usage</summary>

Take the following command as an example.

```
test-docs-notebooks\
  notebook.ipynb\
  --patch\
  '{ patch="qiskit-fake-provider", num_qubits=6 }'\
  notebook-2.ipynb\
  notebook-3.ipynb\
  --patch\
  '{ patch="qiskit-ibm-runtime", backend="test-eagle", qiskit_runtime_service_args="" }'\
  notebook-4.ipynb
```

This will execute:

- `notebook.ipynb` with no patch
- `notebook-2.ipynb` and `notebook-3.ipynb` with `least_busy` patched to return a 6-qubit simulator
- `notebook-4.ipynb` with `least_busy` patched to return the `test-eagle` cloud backend

</details>

### Set patches through a config file

You can also choose how to patch notebooks through a TOML file. This config
file contains groups of notebook paths, and each group includes information on
how to patch that group in different situations, known as "test strategies".

```
# Example config file
default-strategy = "<strategy-name>"

[groups.<name>]
test-strategies.<strategy-name> = { patch="<patch-name>", <patch-args> }
notebooks = [
  <notebook-paths>
]
```

<details><summary>Example usage</summary>

For example, the following config file has two groups, each with one notebook,
and two test strategies: "main" and "mock".

```toml
# config.toml
default-strategy = "main"

[test-strategies]
mock = { timeout = 300 }

[groups.group1]
test-strategies.main = {}
notebooks = [
    "notebook.ipynb",
]

[groups.group2]
test-strategies.main = {}
test-strategies.mock = { patch="qiskit-fake-provider", num_qubits=6 }
notebooks = [
    "another-notebook.ipynb",
]
```

Here's a few different commands you could run:

- ```
  test-docs-notebooks --config-path config.toml
  ```

  This will run the config file with its default strategy, which
  is "main". This means both `notebook.ipynb` and `another-notebook.ipynb` will
  run without patching, as their `test-strategies.main` has no `patch` arg.

- ```
  test-docs-notebooks --config-path config.toml --test-strategy mock
  ```

  This runs the same config file but with test strategy "mock". This will skip
  `notebook.ipynb`, as its group does not have a "mock" strategy defined, and
  will run `another-notebook.ipynb` with a 6-qubit simulator. The "mock"
  strategy also has a timeout defined, so each cell will timeout after 300s.
  You can override this with your own `--timeout` argument.

- ```
  test-docs-notebooks notebook.ipynb --config-path config.toml
  ```

  You can also provide filenames when using a config file. When filenames are
  set, the script will only run notebooks passed as the filepath arg. This
  command will run `notebook.ipynb` but skip `another-notebook.ipynb` as it
  wasn't passed as a filename arg.

</details>

### Patches and writing to disk

By default, this tool will **not** allow writing patched notebooks to disk.
This is to reduce the risk of accidentally displaying results from patched
notebooks to users.

For example, if we write the output of a notebook patched with
`qiskit-fake-provider`, it will appear the results in the notebook come from
the least busy IBM Quantum backend when they actually come from a noiseless
simulator. This could be considered false advertising.

If you have a patch that you know is OK to generate user-facing results, you
can allow writing results from it by adding the comment `# nb-tester:
allow-write` anywhere in the patch file. An example of a safe patch is the
built-in `qiskit-ibm-runtime-open` patch: This only selects a real hardware
backend that's included in the open plan. We use this to select open-access
backends but submit jobs using our dedicated testing instance.
