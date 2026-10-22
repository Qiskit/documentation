# Adding tutorials to Qiskit/documentation

This guide is for contributors who write a community tutorial and for the reviewers who evaluate it. It covers the review criteria, how to write the notebook, how proposals and pull requests are reviewed, and how to add your notebook to this repository.

Start with [Contribute a tutorial](https://quantum.cloud.ibm.com/docs/tutorials/contribute), which lists the problem classes and the quantum information science topic categories, the existing tutorials in each one, and the approved packages. The [problem class definitions](tutorial-problem-classes.md) describe each Hamiltonian simulation and quantum machine learning class in detail.

## Start from the template

Write your tutorial from [`tutorial-template.ipynb`](tutorial-template.ipynb), and follow [`tutorial-guidelines.ipynb`](tutorial-guidelines.ipynb) for structure, voice, and formatting. Both notebooks are being added to this repository. Also follow the [style guide](style-guide.md) and the [MDX guide](mdx-guide.md).

## Review criteria

Reviewers check every proposal against the criteria for its type, and check the finished notebook against the same criteria in the pull request. Reviewers refer to criteria by number in their comments.

- **Approve** a proposal that meets every criterion for its type.
- **Ask for changes** when a criterion is missing or unclear, but the proposal could meet it.
- **Decline** a proposal that can't meet a criterion. For example, it is out of scope (G1), duplicates existing content (G2), has no hardware access (G4), or can't meet the state-of-the-art bar (A2).

### All tutorials

| Criterion                         | Meets it when                                                                                                                                                                               | Doesn't meet it when                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **G1. Fits a problem class**      | It names one of the domain's foundational or Applied problem classes, or, in quantum information science, one of the topic categories.                                                      | The problem fits no class or category, and the proposal doesn't make the case for a new one.                                                                                            |
| **G2. Adds something new**        | No existing tutorial teaches the same method on the same problem, and the core content isn't covered in an IBM Quantum Learning course.                                                     | It repeats an existing tutorial, or a course topic such as a textbook algorithm at textbook scale. A proposal that improves an existing tutorial is reviewed as an improvement instead. |
| **G3. Verification plan**         | It names the small instance, the source of the known answer (exact diagonalization, an exact solver, an analytic result, or a published reference), and a numeric tolerance.                | It has no known answer, compares only against another noisy run, or gives no tolerance.                                                                                                 |
| **G4. Hardware plan**             | It gives the qubit count (about 50 or more), the two-qubit depth and gate count after transpilation, the estimated QPU time, and how the authors get access to IBM Quantum hardware.        | Any of these is missing, or the authors have no hardware access.                                                                                                                        |
| **G5. Packages and data**         | Every quantum package is approved or requested with a reason, every package is on PyPI with a pinned version, and any dataset is public with a license that allows its use in the tutorial. | It needs a package that reviewers don't approve, private code, or data that readers can't access.                                                                                       |
| **G6. Reproducible**              | The notebook runs unchanged on any current-generation IBM Quantum backend, and the proposal states the classical compute that the notebook needs.                                           | It depends on one device, qubit layout, or calibration, or needs classical resources that it doesn't state.                                                                             |
| **G7. Claims match the evidence** | Its claims are limited to what the tutorial shows.                                                                                                                                          | It claims a quantum advantage or speedup without a matching classical comparison.                                                                                                       |
| **G8. Maintained**                | Named authors commit to respond within 30 days if a change breaks the tutorial.                                                                                                             | No author makes this commitment.                                                                                                                                                        |

### Foundational tutorials

| Criterion                         | Meets it when                                                                                                                                                                                                                                                           | Doesn't meet it when                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **F1. Teaches a method or tool**  | The method is the focus, and the notebook shows how to use it on the foundational problem class.                                                                                                                                                                        | The problem is the focus, or the method runs as a black box.                 |
| **F2. Points to what comes next** | It ends with a "Next steps" section that names where the method leads, such as an Applied tutorial or problem class that uses it, or a more advanced tutorial. If its class has no Applied target yet, it explains how the method extends to larger or harder problems. | It has no "Next steps" section, or the next step is unrelated to the method. |
| **F3. Shows trade-offs**          | It names what it varies (such as problem size, circuit depth, or noise), what it measures, and the default or naive approach that it compares against.                                                                                                                  | It shows a single run with no comparison.                                    |
| **F4. Runnable by learners**      | The hardware run fits in the Open Plan allocation of 10 minutes of QPU time per 28 days.                                                                                                                                                                                | It needs more QPU time than that.                                            |

### Applied tutorials

| Criterion                  | Meets it when                                                                                                                                                                                                                                                                                                                                                                             | Doesn't meet it when                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **A1. Real instance**      | It solves a real instance, as the [class definition](tutorial-problem-classes.md) describes it, and reports the class's target quantity.                                                                                                                                                                                                                                                  | The instance is teaching-sized and only checked against an exact answer, or the tutorial reports a different quantity than the class's target. |
| **A2. State of the art**   | It meets at least two of these: (a) it is based on a paper published in a peer-reviewed journal within the past three years, and a preprint alone doesn't count; (b) it is larger than the largest published hardware demonstration of the problem, which the proposal cites; (c) it uses an advanced feature, such as dynamic circuits or shaded lightcones, that the result depends on. | It meets fewer than two, or the advanced feature isn't needed for the result.                                                                  |
| **A3. Circuit depth**      | The hardware run has a two-qubit depth of at least 50, or is shallower and clearly meets A2.                                                                                                                                                                                                                                                                                              | It is shallower without clearly meeting A2.                                                                                                    |
| **A4. Classical baseline** | It names a classical method suited to the instance at the proposed size, runs it on the same instance with the same metric, and reports it even when it performs better. In quantum machine learning, the classical model uses the same data split.                                                                                                                                       | The baseline is missing, or it is a weak method, such as random guessing, when stronger methods are practical.                                 |
| **A5. Error bars**         | It states how it estimates uncertainty, such as with repeated runs or bootstrapping.                                                                                                                                                                                                                                                                                                      | It reports results without uncertainty.                                                                                                        |
| **A6. Hardware evidence**  | It cites a published hardware result at the proposed scale, or includes a preliminary run.                                                                                                                                                                                                                                                                                                | It has neither.                                                                                                                                |

### Quantum information science tutorials

Quantum information science tutorials aren't Foundational or Applied. Reviewers check them against these criteria instead.

| Criterion                            | Meets it when                                                                                                                                                                                                                                    | Doesn't meet it when                                                                                            |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **Q1. Teaches a technique**          | The technique is the focus, and the notebook shows how to use it and when it helps.                                                                                                                                                              | The technique runs as a black box, or the workload is the focus.                                                |
| **Q2. Compares against the default** | It compares the technique against its category's default approach, listed in the following table, on the same workload. It names what it varies and what it measures, and reports the cost, such as extra shots, QPU time, or classical runtime. | It shows a single run with no comparison, or compares only against an approach that is weaker than the default. |
| **Q3. Points to what comes next**    | It ends with a "Next steps" section that names where the technique leads, such as a later topic category, or a tutorial in another domain that uses the technique.                                                                               | It has no "Next steps" section, or the next step is unrelated to the technique.                                 |

| Topic category                       | Default approach to compare against                                                                                                                               |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Building blocks                      | The textbook implementation, the ideal state, or the classical bound that a protocol tests                                                                        |
| Characterization and benchmarking    | The properties that the backend reports, or the ideal state                                                                                                       |
| Compilation and circuit synthesis    | The preset pass manager at optimization level 3                                                                                                                   |
| Error mitigation to error correction | The unmitigated result, or the same circuit without encoding or checks. Error mitigation tutorials also compare against the Estimator's default resilience level. |
| HPC integration                      | The same workload submitted directly through Qiskit Runtime                                                                                                       |

### Improving an existing tutorial

To improve an existing tutorial, open a proposal and choose **Improvement to an existing tutorial** as the type. Reviewers check it against these criteria instead of the Foundational, Applied, or quantum information science ones, and check any part that changes against G3 to G7. The tutorial's maintainer of record, and for a community tutorial its original authors, review the proposal with the IBM Quantum tutorials team.

| Criterion                                 | Meets it when                                                                                                                                                                                | Doesn't meet it when                                                 |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **I1. Names the tutorial and the change** | It links to the existing tutorial and describes what changes in it.                                                                                                                          | It doesn't name a tutorial, or the change amounts to a new tutorial. |
| **I2. Measurable improvement**            | On the same problem and metric, it reaches larger scale at the same accuracy, better accuracy at the same scale, or much lower QPU cost, or it replaces deprecated code with current Qiskit. | It changes the tutorial without an improvement that can be measured. |
| **I3. States the trade-offs**             | It reports anything that gets worse, such as higher QPU time or a longer runtime, so that reviewers can weigh it.                                                                            | It leaves out a regression.                                          |
| **I4. Keeps the tutorial's purpose**      | It keeps the tutorial's learning outcomes and the tools that it shows how to use, or explains why a change is needed.                                                                        | It replaces the method or tool that the tutorial exists to show.     |

An accepted improvement updates the existing tutorial instead of replacing it, and the contributors are added to the tutorial's byline.

### Pull request review

At Stage 2, reviewers check the finished notebook against the same criteria, and also check that:

- It matches the approved proposal, or explains what changed.
- The small instance agrees with the known answer within the stated tolerance.
- The notebook shows the hardware results, with error bars for Applied tutorials.
- `./check` passes, and the docs content team has copyedited the notebook.

## Writing the notebook

### Structure

- Put the `title` and `description` metadata in the first Markdown cell, followed by the top-level heading. Follow the [metadata rules](mdx-guide.md#page-metadata).
- Use the template's sections in order: usage estimate, learning outcomes, prerequisites, background, requirements, setup, a small-scale simulator example, a large-scale hardware example, and next steps.
- In the usage estimate, name the processor (for example, "a Heron r3 processor") and say that the runtime might vary.
- Walk through the four Qiskit patterns steps: map, optimize, execute, and post-process.
- Link to [IBM Quantum Learning](https://quantum.cloud.ibm.com/learning) for theory instead of repeating it.

### Code and packages

- Use current Qiskit and Qiskit Runtime. Running the notebook must not raise deprecation warnings.
- Install packages from PyPI. A package that the approved list marks "from GitHub" installs from its repository, pinned to a release tag.
- List every package with a pinned version in the requirements section.
- Keep custom code in the notebook instead of in a separate repository.

### Results

- Show the small-instance comparison against the known answer in the output, and state the tolerance in the text.
- For the hardware run, report the backend, the number of qubits, the two-qubit depth and two-qubit gate count after transpilation, the number of shots, the error suppression and mitigation settings, and the QPU time.

## Review process

### Stage 1: Proposal

1. Search the existing [tutorials](https://quantum.cloud.ibm.com/docs/tutorials) and [open proposals](https://github.com/Qiskit/documentation/issues?q=is%3Aissue+is%3Aopen+%22Tutorial+proposal%22) for duplicates.
2. Open a [tutorial proposal issue](https://github.com/Qiskit/documentation/issues/new?template=tutorial-proposal.yaml). The form asks for the tutorial type, domain, problem class or topic category, the tutorial to improve if any, a summary, the source paper, how the tutorial meets the requirements, circuit and hardware details, a verification plan, the classical baseline, dependencies, authors, and a timeline.
3. The IBM Quantum tutorials team checks the proposal against the [review criteria](#review-criteria), and a member of the relevant working group reviews the technical content. Reviewers reply on the issue to approve the proposal, ask for changes, or decline it, and cite the criteria by number.
4. Wait for approval before you open a pull request.

### Stage 2: Pull request

1. Read [CONTRIBUTING.md](CONTRIBUTING.md), including the policy on generative AI, and sign the [Contributor License Agreement](https://qisk.it/cla).
2. Fork this repository, and add your notebook as described in [Add your notebook](#add-your-notebook).
3. Open a pull request that links to your approved proposal.
4. Reviewers check the notebook as described in [Pull request review](#pull-request-review). The checks that execute notebooks can't run on pull requests from forks, so a maintainer might move your pull request to a branch in this repository. Your authorship stays attached to your commits.
5. After approval, a maintainer merges the pull request and the tutorial is published.

## Add your notebook

1. Add the notebook to `docs/tutorials/`. Use a kebab-case file name that matches the page's URL slug. For example, `docs/tutorials/my-tutorial.ipynb` is published at https://quantum.cloud.ibm.com/docs/tutorials/my-tutorial.
2. Move images to `public/docs/images/tutorials/<your-tutorial-name>/`, in `.avif` or `.svg` format. Reference them without the `public` part of the path.
3. Add the tutorial to `docs/tutorials/_toc.json` and `docs/tutorials/index.mdx`.
4. Add the owners to `qiskit_bot.yaml`: you and the maintainer of record from the IBM Quantum team.
5. Add the notebook to `scripts/config/notebook-testing.toml`. A maintainer confirms which test group it belongs in during review.
6. Run `./fix` and `./check`, and fix any problems they report, including spelling.
7. Preview the page locally with `./start`, and check that it displays correctly.

## After publication

- **Credit.** The tutorial shows a byline with the authors' names and affiliations and a link to the source paper. Its tutorial card shows a community tag.
- **Maintainer of record.** A member of the IBM Quantum team keeps the tutorial running as Qiskit changes.
- **Breaking changes.** If a change breaks the tutorial, the authors have 30 days to respond to the issue. If it is still unresolved after the next major Qiskit release, the tutorial is archived.
- **Improvements from others.** Other contributors can propose improvements to your tutorial, as described in [Improving an existing tutorial](#improving-an-existing-tutorial).
- **Existing community tutorials.** Community tutorials that were published before these requirements get the community tag, and are held to these requirements when they are next updated.
