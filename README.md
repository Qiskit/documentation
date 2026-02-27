# Qiskit documentation

The documentation content home for https://quantum.cloud.ibm.com/docs and https://docs.quantum.ibm.com (excluding API reference).

Preview the main branch at the staging link: https://qiskit.github.io/documentation/main

Refer to:

- Our [MDX guide](./mdx-guide.md) for how to write documentation and use our variant of markdown.
- Our [style guide](./style-guide.md) for technical writing guidance.

### Licensing

This repository is dual-licensed to distinguish between code and content.

- Code (including scripts, source files, and code snippets in documentation examples) is licensed under the Apache License 2.0, please review the `LICENSE` file for more information
- Content (including guides, tutorials, courses, media, and other non-code assets) is licensed under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), please review the `LICENSE-DOCS` file for more information.

## Improving IBM Quantum and Qiskit documentation

Maintaining up-to-date documentation is a huge challenge for any software project, but especially for a field like quantum computing, because advances in new research and technological capabilities come at a fast pace. As a result, we greatly appreciate anyone who takes the time to support us in keeping this content accurate and up to the highest quality standard possible, to benefit the broadest range of users.

Read on for more information about how to support this project:

### Best ways to contribute to documentation

#### 1. Report bugs, inaccuracies, or general content issues

This is the quickest, easiest, and most helpful way to contribute to this project and improve the quality of Qiskit&reg; and IBM Quantum&reg; documentation. There are a few different ways to report issues, depending on where it was found:

- For problems you've found in the [Qiskit SDK API Reference](https://docs.quantum.ibm.com/api/qiskit) section, open an issue in the Qiskit repo [here](https://github.com/Qiskit/qiskit/issues/new/choose).
- For problems you've found in the [Qiskit Runtime client](https://docs.quantum.ibm.com/api/qiskit-ibm-runtime) section, open an issue in the Qiskit IBM Runtime repo [here](https://github.com/Qiskit/qiskit-ibm-runtime/issues/new/choose).
- For problems you've found in any other section of [docs](https://docs.quantum.ibm.com), open a content bug issue [here](https://github.com/Qiskit/documentation/issues/new/choose).

#### 2. Suggest new content

If you think there are gaps in our documentation, or sections that could be expanded upon, we invite you to open a [new content request issue](https://github.com/Qiskit/documentation/issues/new/choose).

Not every new content suggestion is a good fit for docs, nor are we able to prioritize every request immediately. However, we will do our best to respond to content requests in a timely manner, and we greatly appreciate our community's efforts in generating new ideas.

If you are interested in writing the new content yourself, or already have some draft work you think could be integrated, please also mention that in the issue description. If your content suggestion is accepted, we will let you know and work with you to get the content written and reviewed.

Please note: we DO NOT accept unsolicited PRs for new pages or large updates to existing content. The content that we include in docs is carefully planned and curated by our content team and must go through the appropriate review process to ensure the quality is of the highest possible standard before deploying to production. As a result we are very selective with which content suggestions are approved, and it is unlikely that PRs submitted without an associated approved content request will be accepted.

#### 3. Validate existing issues

You can help the team prioritize already-open issues by doing the following:

- For bug reports, leave a comment in the issue if you have also been experiencing the same problem and can reproduce it (include as much information as you can, e.g., browser type, Qiskit version, etc.).
- For new content requests, leave a comment or upvote (👍) in the issue if you also would like to see that new content added.

#### 4. Fix an open issue

You can look through the open issues we have in this repo and address them with a PR. We recommend focusing on issues with the "good first issue" label.

Before getting started on an issue, remember to do the following:

1. Read the [Code of Conduct](https://quantum.cloud.ibm.com/docs/guides/code-of-conduct)
2. Check for open, unassigned issues with the "good first issue" label
3. Select an issue that is not already assigned to someone and leave a comment to request to be assigned

Once you have an issue to work on, see the "How to work with this repo" section below to get going, then open a PR.

Before opening a PR, remember to do the following:

1. Check that you have addressed all the requirements from the original issue
2. Run the quality control checks with `npm run check`
3. Use the GitHub "fixes" notation to [link your PR to the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) you are addressing

## Set up this repository

### Git clone tip

This repository is very large, so it is slow to clone the first time. We recommend instead using the argument `--filter=blob:none`:

```bash
git clone --filter=blob:none https://github.com/Qiskit/documentation.git
```

`--filter=blob:none` means that Git will _lazily_ download file contents when you need them, rather than eagerly downloading everything on the initial clone.

We also recommend running this command once to tell Git to ignore the `gh-pages` branch, which is solely used for PR previews and is very large:

```bash
git config --add remote.origin.fetch '^refs/heads/gh-pages'
```

### Git email address

To contribute code to this repository, your email must be configured properly with Git, as follows:

1. Run `git config --get user.email`. You do not need to make any further changes if the email address is one of the addresses set up with your github.com account.
2. Otherwise, run `git config --global user.email <your-email>`. Use an email address associated with your github.com account.

### Prerequisites to building the docs locally

We provide several tools to preview the documentation locally and to run quality checks. While many of these tools run in your PR through CI, we recommend installing them locally for faster iteration.

First, install the below software:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [Docker](https://www.docker.com). You must also ensure that it is running.
   - If you cannot use Docker from docker.com, consider using use [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io). When installing Rancher Desktop, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop".
3. [Tox](https://tox.wiki/) to run Python tools.
   - We recommend using [pipx](https://pipx.pypa.io/stable/), which is a tool to install Python programs while keeping your Python installation clean. After installing pipx, use `pipx install tox`.

Then, install the dependencies with:

```bash
npm install
```

## Preview the docs locally

You can preview the docs locally by following these two steps:

1. Ensure Docker is running. For example, open Rancher Desktop.
2. Run `./start` in your terminal, and open http://localhost:3000 in your browser.
   - On Windows, run `python start` instead. Alternatively, use Windows Subsystem for Linux and run `./start`.

The preview application does not include the top nav bar. Instead, navigate to the folder you want with the links in the home page. You can return to the home page at any time by clicking "IBM Quantum Documentation Preview" in the top-left of the header.

Maintainers: when you release a new version of the image, you need to update the image digest in `./start` by following the instructions at the top of the file and opening a pull request.

### Tip: Periodically prune Docker

Occasionally, Docker might fail when it runs out of disk space. For example, you might encounter an error like this:

```
ENOSPC: no space left on device, mkdir '/tmp/xfs-4d1dfe51'
```

Try running `docker system prune` to clear Docker's system space.

### API docs authors: How to preview your changes

API docs authors can preview their changes to one of the APIs by using the `-a` parameter to specify the path to the docs folder:

1. Run `npm run gen-api -- -p <pkg-name> -v <version> -a <path/to/docs/_build/html>`.
2. Execute `./start` and open up `http://localhost:3000`, as explained in the prior section.

## Run quality checks

We use multiple tools to ensure that documentation meets high standards. These tools will run automatically in your PR through CI, but it is much faster to run the checks locally.

Use `./fix` to automatically apply fixes, like fixing formatting. Warning: we cannot automatically fix every problem, so you should also run `./check` afterwards.

```sh
./fix
```

Use `./check` to validate that there are no issues. If you encounter an error, fix it by following the instructions in the error message, then keep running `./check` and fixing any errors until it fully passes without any error.

```sh
./check
```

On Windows, run `python fix` and `python check` instead. Alternatively, use Windows Subsystem for Linux and run `./fix` and `./check`.

### VSCode: optional extensions

You may find it convenient to install the following VSCode extensions to automatically run some of our tools. Setting up these extensions is optional.

- For Jupyter notebooks, add the tool 'squeaky' as a [pre-save
  hook](https://github.com/frankharkins/squeaky?tab=readme-ov-file#jupyter-pre-save-hook).
  This will fix and lint your notebooks when you save them.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### Advanced: run additional checks

We offer some tools that are not included in `./check` and `./fix`. Likewise, many of the checks skip API docs by default.

Run `npm run` to see a list of all our checks. For any particular check, run `npm run my-check -- --help` for more information and advanced arguments, such as `npm run check:markdown -- --help`.

## Jupyter notebooks

### Add a new notebook

When adding a new notebook, you'll need to tell the testing tools how to handle it.
To do this, add the file path to `scripts/config/notebook-testing.toml`. There are
four categories:

- `notebooks_normal_test`: Notebooks to be run normally in CI. These notebooks
  can't submit jobs as the queue times are too long and it will waste
  resources. You _can_ interact with IBM Quantum to retrieve jobs and backend
  information.
- `notebooks_that_submit_jobs`: Notebooks that submit jobs, but that are small
  enough to run on a 5-qubit simulator. We will test these notebooks in CI by
  patching `least_busy` to return a 5-qubit fake backend.
- `notebooks_no_mock`: For notebooks that can't be tested using the 5-qubit
  simulator patch. We skip testing these in CI and instead run them twice per
  month. Any notebooks with cells that take more than five minutes to run are
  also deemed too big for CI. Try to avoid adding notebooks to this category if
  possible.
- `notebooks_exclude`: Notebooks to be ignored.

If your notebook uses the latex circuit drawer (`qc.draw("latex")`), you must
also add it to the "Check for notebooks that require LaTeX" step in
`.github/workflows/notebook-test.yml`.

If you don't do this step, you will get the error "FAILED scripts/nb-tester/test/test_notebook_classification.py::test_all_notebooks_are_classified".

### Add package version information

Add a new markdown cell under your title with a `version-info` tag.
When you execute the notebook (see the next section), the script will populate
this cell with the package versions so users can reproduce the results.

### Execute notebooks

Before submitting a new notebook or code changes to a notebook, you must run
the notebook using `tox -- --write <path-to-notebook>` and commit the results.
If the notebook submits jobs, also use the argument `--submit-jobs`. This means
we can be sure all notebooks work and that users will see the same results when
they run using the environment we recommend.

To execute notebooks in a fixed Python environment, first install `tox` using
[pipx](https://pipx.pypa.io/stable/):

```sh
pipx install tox
```

You also need to install a few system dependencies: TeX, Poppler, and graphviz.
On macOS, you can run `brew install mactex-no-gui poppler graphviz`. On Ubuntu,
you can run `apt-get install texlive-pictures texlive-latex-extra poppler-utils
graphviz`.

- To execute all notebooks, run tox.
  ```sh
  tox
  ```
- To only execute specific notebooks, pass them as arguments.
  ```sh
  tox -- <path/to/notebook.ipynb> <path/to/another-notebook.ipynb>
  ```
- To write the execution results to the file, pass the `--write` argument.
  Since we only allow writing results from real hardware, you will usually also
  need to pass `--test-strategy=hardware`. Note this means the run will use QPU
  time.
  ```sh
  tox -- optional/paths/to/notebooks.ipynb --write --test-strategy=hardware
  ```

When you make a pull request changing a notebook that doesn't submit jobs, you
can get a version of that notebook that was executed by tox from CI. To do
this, click "Show all checks" in the info box at the bottom of the pull request
page on GitHub, then choose "Details" for the "Test notebooks" job. From the
job page, click "Summary", then download "Executed notebooks". Otherwise, if
your notebook does submit jobs, you need to run it locally using the steps
mentioned earlier.

### Ignore warnings in your notebook

We don't want users to see warnings that can be avoided, so it's best to fix
the code to avoid them. However, if a warning is unavoidable, you can stop it
blocking CI by adding an `ignore-warnings` tag to the cell. In VSCode,
right-click the cell, choose "Add cell tag", type `ignore-warnings`, then press
"Enter". In Jupyter notebook (depending on version), choose View > Right
Sidebar > Show Notebook Tools, then under "Common Tools" add a tag with text
`ignore-warnings`.

### Add extra code checks to your notebook

Our CI checks notebooks run from start to finish without errors or warnings.
You can add extra checks in notebooks to catch other unexpected behavior.

For example, say we claim a cell always returns the string `0011`. It would be
embarassing if this was not true. We can assert this in CI by adding the
following code cell, and hide it from users with a `remove-cell` tag.

```python
# Confirm output is what we expect.
assert _ == '0011'
```

In Jupyter notebooks, the underscore `_` variable stores the value of the
previous cell output. You should also add a comment like
`# Confirm output is what we expect` so that authors know this
block is only for testing. Make sure you add the tag `remove-cell`.
If something ever causes this value to
change, CI will alert us.

## Format README and TypeScript files

Run `npm run fmt` to automatically format the README, `.github` folder, and `scripts/` folder. You should run this command if you get the error in CI `run Prettier to fix`.

To check that formatting is valid without actually making changes, run `npm run check:fmt`.

## Regenerate an existing API docs version

This is useful when we make improvements to the API generation script.

You can regenerate all API docs versions following these steps:

1. Create a dedicated branch for the regeneration other than `main` using `git checkout -b <branch-name>`.
2. Ensure there are no pending changes by running `git status` and creating a new commit for them if necessary.
3. Run `npm run regen-apis` to regenerate all API docs versions for `qiskit`, `qiskit-ibm-runtime`, and `qiskit-ibm-transpiler`.

Each regenerated version will be saved as a distinct commit. If the changes are too large for one single PR, consider splitting it up into multiple PRs by using `git cherry-pick` or `git rebase -i` so each PR only has the commits it wants to target.

If you only want to regenerate the latest stable minor release of each package, then add `--current-apis-only` as an argument, and in case you only want to regenerate versions of one package, then you can use the `-p <pkg-name>` argument.

Alternatively, you can also regenerate one specific version:

1. Choose which documentation you want to generate (`qiskit`, `qiskit-ibm-runtime`, or `qiskit-ibm-transpiler`) and its version.
2. Run `npm run gen-api -- -p <pkg-name> -v <version>`,
   e.g., `npm run gen-api -- -p qiskit -v 0.45.0`

If the version is not for the latest stable minor release series, then add `--historical` to the arguments. For example, use `--historical` if the latest stable release is 0.45.\* but you're generating docs for the patch release 0.44.3.

Additionally, If you are regenerating a dev version, then you can add `--dev` as an argument and the documentation will be built at `/docs/api/<pkg-name>/dev`. For dev versions, end the `--version` in `-dev`, e.g. `-v 1.0.0-dev`. If a release candidate has already been released, use `-v 1.0.0rc1`, for example.

In this case, no commit will be automatically created.

## Generate new API docs

This is useful when new docs content is published, usually corresponding to new releases or hotfixes for content issues. If you're generating a patch release, also see the below subsection for additional steps.

1. Choose which documentation you want to generate (e.g. `qiskit` or `qiskit-ibm-runtime`) and its version.
2. Determine the full version, such as by looking at https://github.com/Qiskit/qiskit/releases
3. Download a CI artifact with the project's documentation. To find this:
   1. Pull up the CI runs for the stable commit that you want to build docs from. This should not be from a Pull Request
   2. Open up the "Details" for the relevant workflow.
      - Qiskit: "Documentation / Build (push)"
      - Runtime: "CI / Build documentation (push)"
   3. Click the "Summary" page at the top of the left navbar.
   4. Scroll down to "Artifacts" and look for the artifact related to documentation, such as `html_docs`.
   5. Download the artifact by clicking on its name.
4. Rename the downloaded zip file with its version number, e.g. `0.45.zip` for an artifact from `qiskit v0.45.2`.
5. Upload the renamed zip file to https://ibm.ent.box.com/folder/246867452622
6. Share the file by clicking the `Copy shared link` button
7. Select `People with the link` and go to `Link Settings`.
8. Under `Link Expiration` select `Disable Shared Link on` and set an expiration date of ~10 years into the future.
9. Copy the direct link at the end of the `Shared Link Settings` tab.
10. Modify the `scripts/config/api-html-artifacts.json` file, adding the new versions with the direct link from step 9.
11. Run `npm run gen-api -- -p <pkg-name> -v <version>`, e.g. `npm run gen-api -- -p qiskit -v 0.45.0`. If it is not the latest minor version, set `--historical`.

For dev docs, add `--dev` and either use a version like `-v 1.0.0-dev` or `-v 1.0.0rc1`.

### Setting up a new minor version

For example, the latest unversioned docs were `0.2.0` but `0.3.0` was just released.

You must first save the latest unversioned docs as historical docs by running `npm run gen-api` with the `--historical` arg. For example, first run `npm run gen-api -- -p qiskit -v 0.2.0 --historical`.

Once the historical docs are set up, you can now generate the newest docs by following the normal process, such as `npm run gen-api -- -p qiskit -v 0.3.0`.

### Generate patch releases

For example, if the current docs are for 0.45.2 but you want to generate 0.45.3.

When uploading the artifact to Box, overwrite the existing file with the new one. No need to update the file metadata.

If the version is not for the latest stable minor release series, remember to add `--historical` to the arguments. For example, use `--historical` if the latest stable release is 0.3.\* but you're generating docs for the patch release 0.2.1.

### View diff for `objects.inv`

Since `objects.inv` is compressed, we can't review changes through `git diff`. Git _does_ tell you if the file has changed, but this isn't that helpful as the compressed file can be different even if the uncompressed contents are the same.
If you want to see the diff for the uncompressed contents, first install [`sphobjinv`](https://github.com/bskinn/sphobjinv).

```sh
pipx install sphobjinv
```

The add the following to your `.gitconfig` (usually found at `~/.gitconfig`).

```
[diff "objects_inv"]
  textconv = sh -c 'sphobjinv convert plain "$0" -'
```

## Dependabot - upgrade notebook testing version

When a new version of an API is released, we should also update `nb-tester/requirements.txt` to ensure that our notebooks still work with the latest version of the API. You can do this upgrade either manually or wait for Dependabot's automated PR.

Dependabot will fail to run at first due to not having access to the token. To fix this, have someone with write access trigger CI for the PR, such as by merging main or closing then reopening the issue.

You can land the API generation separately from the `requirements.txt` version upgrade. It's high priority to get out new versions of the API docs ASAP, so you should not block that on the notebook version upgrade if you run into any complications like failing notebooks.

## Deploy guides & API docs

See the section "Syncing content with open source repo" in the internal docs repo's README.
