# Adding tutorials to Qiskit/documentation

This guide is for contributors who write a community tutorial. It covers the requirements in detail, how proposals and pull requests are reviewed, and how to add your notebook to this repository.

Start with [Contribute a tutorial](https://quantum.cloud.ibm.com/docs/tutorials/contribute), which lists the problem classes, the existing tutorials in each one, and the approved packages.

## Start from the template

Write your tutorial from [`tutorial-template.ipynb`](tutorial-template.ipynb), and follow [`tutorial-guidelines.ipynb`](tutorial-guidelines.ipynb) for structure, voice, and formatting. Both notebooks are being added to this repository. Also follow the [style guide](style-guide.md) and the [MDX guide](mdx-guide.md).

## Requirements in detail

### All tutorials

**Structure**

- Put the `title` and `description` metadata in the first Markdown cell, followed by the top-level heading. Follow the [metadata rules](mdx-guide.md#page-metadata).
- Use the template's sections in order: usage estimate, learning outcomes, prerequisites, background, requirements, setup, a small-scale simulator example, a large-scale hardware example, and next steps.
- In the usage estimate, name the processor (for example, "a Heron r3 processor") and say that the runtime might vary.
- Walk through the four Qiskit patterns steps: map, optimize, execute, and post-process.
- Link to [IBM Quantum Learning](https://quantum.cloud.ibm.com/learning) for theory instead of repeating it. The tutorial must cover something that courses and existing tutorials do not.

**Code and packages**

- Use current Qiskit and Qiskit Runtime. Running the notebook must not raise deprecation warnings.
- Use only the approved quantum packages listed on the Contribute a tutorial page. Install packages from PyPI. A package that the list marks "from GitHub" installs from its repository, pinned to a release tag.
- List every package with a pinned version in the requirements section.
- Keep custom code in the notebook instead of in a separate repository.
- To use a quantum package that is not on the list, name it in your proposal and explain why you need it. Reviewers decide during proposal review.

**Verification**

- Before you scale up, run a small instance and compare it against a known answer from exact diagonalization, an exact solver, an analytic result, or a published reference.
- State the tolerance in the text, and show the comparison in the output.

**Hardware run**

- Run the workload on IBM Quantum hardware at about 50 qubits or more.
- Report the backend, the number of qubits, the two-qubit depth and two-qubit gate count after transpilation, the number of shots, the error suppression and mitigation settings, and the QPU time.
- Save the hardware outputs in the notebook. Tutorials that run on hardware are not executed in CI.

### Foundational tutorials

- Use the domain's foundational problem class. In quantum information science, name your teaching problem in the proposal.
- Keep the method or tool as the focus, and show readers how to use it.
- Show the trade-offs: how cost, noise sensitivity, or accuracy changes as the problem grows, compared against a default or naive approach.
- End with a "Next steps" section that links to the Applied tutorial or problem class that the method leads to. Reviewers check that the method is a step in that tutorial or problem class, not only related to it.

### Applied tutorials

- Solve a real instance from a problem class and report its target quantity. In quantum information science, apply a specialized technique to a workload at scale.
- Compare against a classical method on the same instance, and report it even when it performs better. For example, use an exact or heuristic solver for optimization, a tensor network method for Hamiltonian simulation, or a classical model trained with the same data split and metric for quantum machine learning.
- Meet at least two of these state-of-the-art criteria:
  - The tutorial is based on a paper published in a peer-reviewed journal within the past three years.
  - It is the largest hardware demonstration of its problem.
  - It uses advanced features, such as dynamic circuits or shaded lightcones.
- Use a two-qubit depth of at least 50 in the hardware run. A shallower run is acceptable only if the tutorial clearly meets the state-of-the-art bar.
- Report error bars. Anyone must be able to run the notebook unchanged on a current-generation IBM Quantum backend and get results within them.
- A tutorial built around a vendor's Qiskit Function is always Applied.

### Improving an existing tutorial

If a problem class already has a tutorial that uses your method, propose an improvement to that tutorial instead of a new one. Reviewers weigh the trade-offs, such as better scale at a higher QPU cost. An accepted improvement updates the existing tutorial instead of replacing it.

## Review process

### Stage 1: Proposal

1. Search the existing [tutorials](https://quantum.cloud.ibm.com/docs/tutorials) and [open proposals](https://github.com/Qiskit/documentation/issues?q=is%3Aissue+is%3Aopen+%22Tutorial+proposal%22) for duplicates.
2. Open a [tutorial proposal issue](https://github.com/Qiskit/documentation/issues/new?template=tutorial-proposal.yaml). The form asks for the tutorial type, domain, problem class or topic, a summary, the source paper, how the tutorial meets the requirements, circuit and hardware details, a verification plan, the classical baseline, dependencies, authors, and a timeline.
3. The IBM Quantum tutorials team checks the proposal against these requirements, and a member of the relevant working group reviews the technical content. Reviewers reply on the issue to approve the proposal, ask for changes, or decline it.
4. Wait for approval before you open a pull request.

### Stage 2: Pull request

1. Read [CONTRIBUTING.md](CONTRIBUTING.md), including the policy on generative AI, and sign the [Contributor License Agreement](https://qisk.it/cla).
2. Fork this repository, and add your notebook as described in [Add your notebook](#add-your-notebook).
3. Open a pull request that links to your approved proposal.
4. Reviewers check the notebook against these requirements, and the docs content team copyedits it. The checks that execute notebooks can't run on pull requests from forks, so a maintainer might move your pull request to a branch in this repository. Your authorship stays attached to your commits.
5. After approval, a maintainer merges the pull request and the tutorial is published.

## Add your notebook

1. Add the notebook to `docs/tutorials/`. Use a kebab-case file name that matches the page's URL slug. For example, `docs/tutorials/my-tutorial.ipynb` is published at https://quantum.cloud.ibm.com/docs/tutorials/my-tutorial.
2. Move images to `public/docs/images/tutorials/<your-tutorial-name>/`, in `.avif` or `.svg` format. Reference them without the `public` part of the path.
3. Add the tutorial to `docs/tutorials/_toc.json` and `docs/tutorials/index.mdx`.
4. Add the owners to `qiskit_bot.yaml`: you and the maintainer of record from the IBM Quantum team.
5. Add the notebook to `scripts/config/notebook-testing.toml`. Tutorials that run on hardware usually go in the `groups.exclude` group. A maintainer confirms the group during review.
6. Run `./fix` and `./check`, and fix any problems they report, including spelling.
7. Preview the page locally with `./start`, and check that it displays correctly.

## After publication

- **Credit.** The tutorial shows a byline with the authors' names and affiliations and a link to the source paper. Its tutorial card shows a community tag.
- **Maintainer of record.** A member of the IBM Quantum team keeps the tutorial running as Qiskit changes.
- **Breaking changes.** If a change breaks the tutorial, the authors have 30 days to respond to the issue. If it is still unresolved after the next major Qiskit release, the tutorial is archived.
- **Improvements from others.** Other contributors can propose improvements to your tutorial, as described in [Improving an existing tutorial](#improving-an-existing-tutorial).
- **Existing community tutorials.** Community tutorials that were published before these requirements get the community tag, and are held to these requirements when they are next updated.
