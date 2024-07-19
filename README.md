# Qiskit documentation

The documentation content home for https://docs.quantum.ibm.com (excluding API reference).

# Improving IBM Quantum & Qiskit Documentation

Maintaining up-to-date documentation is a huge challenge for any software project, especially in a field like quantum computing where the pace at which advances in new research and technological capabilities happen incredibly fast. As a result, we greatly appreciate any who take the time to support us in keeping this content accurate and up to the highest quality standard possible to benefit the broadest range of users.

Read on for more information about how to support this project:

## Best ways to contribute to Documentation

### 1. Report bugs, inaccuracies or general content issues

This is the quickest, easiest, and most helpful way to contribute to this project and improve the quality of Qiskit&reg; and IBM Quantum&trade; documentation. There are a few different ways to report issues, depending on where it was found:

- For problems you've found in the [Qiskit SDK API Reference](https://docs.quantum.ibm.com/api/qiskit) section, open an issue in the Qiskit repo [here](https://github.com/Qiskit/qiskit/issues/new/choose).
- For problems you've found in the [Qiskit Runtime IBM Client](https://docs.quantum.ibm.com/api/qiskit-ibm-runtime) section, open an issue in the Qiskit IBM Runtime repo [here](https://github.com/Qiskit/qiskit-ibm-runtime/issues/new/choose).
- For problems you've found in any other section of [docs](https://docs.quantum.ibm.com), open a content bug issue [here](https://github.com/Qiskit/documentation/issues/new/choose).

### 2. Suggest new content

If you think there are gaps in our documentation, or sections that could be expanded upon, we invite you to open a new content request issue [here](https://github.com/Qiskit/documentation/issues/new/choose).

Not every new content suggestion is a good fit for docs, nor are we able to prioritize every request immediately. However, we will do our best to respond to content requests in a timely manner, and we greatly appreciate our community's efforts in generating new ideas.

If you are interested in writing the new content yourself, or already have some draft work you think could be integrated, please also mention that in the issue description. If your content suggestion is accepted, we will let you know and work with you to get the content written and reviewed.

Please note: we DO NOT accept unsolicited PRs for new pages or large updates to existing content. The content that we include in docs is carefully planned and curated by our content team and must go through the appropriate review process to ensure the quality is of the highest possible standard before deploying to production. As a result we are very selective with which content suggestions are approved, and it is unlikely that PRs submitted without an associated approved content request will be accepted.

### 3. Validate existing issues

You can help the team prioritize already-open issues by doing the following:

- For bug reports, leave a comment in the issue if you have also been experiencing the same problem and can reproduce it (include as much information as you can, e.g., browser type, Qiskit version, etc.).
- For new content requests, leave a comment or upvote (👍) in the issue if you also would like to see that new content added.

### 4. Fix an open issue

You can look through the open issues we have in this repo and address them with a PR. We recommend focusing on issues with the "good first issue" label.

Before getting started on an issue, remember to do the following:

1. Read the [Code of Conduct](https://docs.quantum.ibm.com/open-source/code-of-conduct)
2. Check for open, unassigned issues with the "good first issue" label
3. Select an issue that is not already assigned to someone and leave a comment to request to be assigned

Once you have an issue to work on, see the "How to work with this repo" section below to get going, then open a PR.

Before opening a PR, remember to do the following:

1. Check that you have addressed all the requirements from the original issue
2. Run the quality control checks with `npm run check`
3. Use the GitHub "fixes" notation to [link your PR to the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) you are addressing

# How to work with this repo

## Prerequisites to building the docs locally

These tools will also run in CI, but it can be convenient when iterating to run the tools locally.

First, install the below software:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [Docker](https://www.docker.com). You must also ensure that it is running.
   - If you cannot use Docker from docker.com, consider using use [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io). When installing Rancher Desktop, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop".

Then, install the dependencies with:

```bash
npm install
```

## Preview the docs locally

You can preview the docs locally by following these two steps:

1. Ensure Docker is running. For example, open Rancher Desktop.
2. Run `./start` in your terminal, and open http://localhost:3000 in your browser.

The preview application does not include the top nav bar. Instead, navigate to the folder you want with the links in the home page. You can return to the home page at any time by clicking "IBM Quantum Documentation Preview" in the top-left of the header.

Warning: `./start` does not check if there is a new version of the docs application available. You can run `docker pull qiskit/documentation` to update to the latest version of the app.

### API docs authors: How to preview your changes

API docs authors can preview their changes to one of the APIs by using the `-a` parameter to specify the path to the docs folder:

1. Run `npm run gen-api -- -p <pkg-name> -v <version> -a <path/to/docs/_build/html>`.
2. Execute `./start` and open up `http://localhost:3000`, as explained in the prior section.

## Jupyter notebooks

### Add a new notebook

When adding a new notebook, you'll need to tell the testing tools how to handle it.
To do this, add the file path to `scripts/nb-tester/notebooks.toml`. There are
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
  tox -- path/to/notebook.ipynb path/to/another-notbook.ipynb
  ```
- To write the execution results to the file, pass the `--write` argument.
  ```sh
  tox -- optional/paths/to/notebooks.ipynb --write
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

### Lint notebooks

We use [`squeaky`](https://github.com/frankharkins/squeaky) to lint our
notebooks. First install `tox` using [pipx](https://pipx.pypa.io/stable/).

```sh
pipx install tox
```

To check if a notebook needs linting:

```sh
# Check all notebooks in ./docs
tox -e lint -- docs/**/*.ipynb
```

To fix problems in a notebooks, run:

```sh
tox -e fix -- path/to/notebook
```

Or, you can retrieve an executed and linted version of your notebook from CI
following the steps at the end of the [Execute notebooks](#execute-notebooks)
section.

If you use the Jupyter notebook editor, consider adding squeaky as a [pre-save
hook](https://github.com/frankharkins/squeaky?tab=readme-ov-file#jupyter-pre-save-hook).
This will lint your notebooks as you save them, so you never need to worry
about it.

## Check for broken links

We have two broken link checkers: for internal links and for external links.

To check internal links:

```bash
# Only check non-API docs
npm run check:internal-links

# You can add any of the below arguments to also check API docs.
npm run check:internal-links -- --current-apis --dev-apis --historical-apis --qiskit-release-notes

# However, `--historical-apis` currently has failing versions, so you may
# want to add `--skip-broken-historical`.
npm run check:internal-links -- --historical-apis --skip-broken-historical

# Or, run all the checks. Although this only checks non-API docs.
npm run check
```

To check external links:

```bash
# Specify the files you want after `--`
npm run check:external-links -- docs/run/index.md docs/run/circuit-execution.mdx

# You can also use globs
npm run check:external-links -- 'docs/run/*' '!docs/run/index.mdx'
```

## Check for orphan pages

Every file should have a home in one of the `_toc.json` files. If for some reason a page should _not_ have a home, add it to the `ALLOWED_ORPHANS` list in `scripts/checkOrphanPages.ts`.

To check for orphaned pages, run:

```bash
# Only check non-API docs
npm run check:orphan-pages

# You can also add any of the below arguments to check API docs
npm run check:orphan-pages -- --current-apis --dev-apis --historical-apis

# Or, run all the checks.  However this will skip the API docs
npm run check
```

## Check page metadata

Every file needs to have a `title` and `description`, as explained in [Page Metadata](#page-metadata) The `lint` job in CI will fail with instructions for any bad file.

You can also check for valid metadata locally:

```bash
# Only check file metadata
npm run check:metadata

# By default, only the non-API docs are checked. You can add the
# below argument to also check API docs.
npm run check:metadata -- --apis

# Or, run all the checks. Although this only checks non-API docs.
npm run check
```

## Spellcheck

We use [cSpell](https://cspell.org) to check for spelling. The `lint` job in CI will fail if there are spelling issues.

There are two ways to check spelling locally, rather than needing CI.

1.

```bash
# Only check spelling
npm run check:spelling

# Or, run all the checks
npm run check
```

2. Use the VSCode extension [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker).

### Fixing false positives

There are two ways to deal with cSpell incorrectly complaining about a word, such as abbreviations.

1. Ignore the word in the local markdown file by adding a comment to the file, like below. The word is not case-sensitive, and the comment can be placed anywhere.

```
{/* cspell:ignore hellllooooo, ayyyyy */}

# Hellllooooo!

Ayyyyy, this is a fake description.
```

2. If the word is a name, add it to the `cspell/dictionaries/people.txt` file. If it is a scientific or quantum specific word, add it to the `cspell/dictionaries/qiskit.txt` file. If it doesn't fit in either category, add it to the `words` section in `cspell/cSpell.json`. The word is not case-sensitive.

If the word appears in multiple files, prefer the second approach to add it to one of the dictionaries or `cSpell.json`.

## Check that pages render

It's possible to write broken pages that crash when loaded. This is usually due to syntax errors.

To check that all the non-API docs render:

1. Start up the local preview with `./start` by following the instructions at [Preview the docs locally](#preview-the-docs-locally)
2. In a new tab, `npm run check:pages-render -- --non-api`

You can also check that API docs render by using any of these arguments: `npm run check:pages-render -- --non-api --qiskit-release-notes --current-apis --dev-apis --historical-apis`. Warning that this is exponentially slower.

CI will check on every PR that any changed files render correctly. We also run a weekly cron job to check that every page renders correctly.

## Format README and TypeScript files

Run `npm run fmt` to automatically format the README, `.github` folder, and `scripts/` folder. You should run this command if you get the error in CI `run Prettier to fix`.

To check that formatting is valid without actually making changes, run `npm run check:fmt` or `npm run check`.

## Regenerate an existing API docs version

This is useful when we make improvements to the API generation script.

You can regenerate all API docs versions following these steps:

1. Create a dedicated branch for the regeneration other than `main` using `git checkout -b <branch-name>`.
2. Ensure there are no pending changes by running `git status` and creating a new commit for them if necessary.
3. Run `npm run regen-apis` to regenerate all API docs versions for `qiskit`, `qiskit-ibm-provider`, `qiskit-ibm-runtime`, and `qiskit-transpiler-service`.

Each regenerated version will be saved as a distinct commit. If the changes are too large for one single PR, consider splitting it up into multiple PRs by using `git cherry-pick` or `git rebase -i` so each PR only has the commits it wants to target.

If you only want to regenerate the latest stable minor release of each package, then add `--current-apis-only` as an argument, and in case you only want to regenerate versions of one package, then you can use the `-p <pkg-name>` argument.

Alternatively, you can also regenerate one specific version:

1. Choose which documentation you want to generate (`qiskit`, `qiskit-ibm-provider`, `qiskit-ibm-runtime`, or `qiskit-transpiler-service`) and its version.
2. Run `npm run gen-api -- -p <pkg-name> -v <version>`,
   e.g. `npm run gen-api -- -p qiskit -v 0.45.0`

If the version is not for the latest stable minor release series, then add `--historical` to the arguments. For example, use `--historical` if the latest stable release is 0.45.\* but you're generating docs for the patch release 0.44.3.

Additionally, If you are regenerating a dev version, then you can add `--dev` as an argument and the documentation will be built at `/docs/api/<pkg-name>/dev`. For dev versions, end the `--version` in `-dev`, e.g. `-v 1.0.0-dev`. If a release candidate has already been released, use `-v 1.0.0rc1`, for example.

In this case, no commit will be automatically created.

## Generate new API docs

This is useful when new docs content is published, usually corresponding to new releases or hotfixes for content issues. If you're generating a patch release, also see the below subsection for additional steps.

1. Choose which documentation you want to generate (`qiskit`, `qiskit-ibm-provider`, `qiskit-ibm-runtime`, or `qiskit-transpiler-service`) and its version.
2. Determine the full version, such as by looking at https://github.com/Qiskit/qiskit/releases
3. Download a CI artifact with the project's documentation. To find this:
   1. Pull up the CI runs for the stable commit that you want to build docs from. This should not be from a Pull Request
   2. Open up the "Details" for the relevant workflow.
      - Qiskit: "Documentation / Build (push)"
      - Runtime: "CI / Build documentation (push)"
      - Provider: "CI / Build documentation (push)"
   3. Click the "Summary" page at the top of the left navbar.
   4. Scroll down to "Artifacts" and look for the artifact related to documentation, such as `html_docs`.
   5. Download the artifact by clicking on its name.
4. Rename the downloaded zip file with its version number, e.g. `0.45.zip` for an artifact from `qiskit v0.45.2`.
5. Upload the renamed zip file to https://ibm.ent.box.com/folder/246867452622
6. Share the file by clicking the `Copy shared link` button
7. Select `People with the link` and go to `Link Settings`.
8. Under `Link Expiration` select `Disable Shared Link on` and set an expiration date of ~10 years into the future.
9. Copy the direct link at the end of the `Shared Link Settings` tab.
10. Modify the `scripts/api-html-artifacts.json` file adding the new versions with the direct link from step 9.
11. Run `npm run gen-api -- -p <pkg-name> -v <version>`,
    e.g. `npm run gen-api -- -p qiskit -v 0.45.0`

If you are regenerating a dev version, then you can add `--dev` as an argument and the documentation will be built at `/docs/api/<pkg-name>/dev`. For dev versions, end the `--version` in `-dev`, e.g. `-v 1.0.0-dev`. If a release candidate has already been released, use `-v 1.0.0rc1`, for example.

In case you want to save the current version and convert it into a historical one, you can run `npm run make-historical -- -p <pkg-name>` beforehand.

### Generate patch releases

For example, if the current docs are for 0.45.2 but you want to generate 0.45.3.

Follow the same process above for new API docs, other than:

- When uploading the artifact, overwrite the existing file with the new one. Be careful to follow the above steps to change "Link Expiration"!

If the version is not for the latest stable minor release series, then add `--historical` to the arguments. For example, use `--historical` if the latest stable release is 0.45.\* but you're generating docs for the patch release 0.44.3.

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

## Deploy guides & API docs

See the section "Syncing content with open source repo" in the internal docs repo's README.

# How to write the documentation

Refer to our [style guide](./style-guide.md) for technical writing guidance.

We use [MDX](https://mdxjs.com), which is like normal markdown but adds extensions for custom components we have.

Refer to the [Common Markdown syntax](https://commonmark.org/) for a primer on Markdown. The below guide focuses on the other features you can use when writing docs.

## How to add a new page

Choose which existing folder from `docs/` your new page belongs to.

Next, choose the file name. The file name will determine the URL. For example, `start/my-new-page.mdx` results in the URL `start/my-new-page`. Choose a file name that will be stable over the page's lifespan and that is unlikely to clash with other topics. Use `-` rather than `_` as the delimiter. You can also ask for help choosing a name in the GitHub issue or pull request.

If your file will have non-trivial code in it, please create a Jupyter notebook ending in `.ipynb`, rather than an MDX file. We prefer Jupyter notebooks when there is code because we have tests to make sure that the code still executes properly, whereas MDX is not tested.

Finally, add the file to the folder's `_toc.json`, such as `guides/_toc.json`. The `title` is what will show up in the left side bar. Note that the `url` leaves off the file extension.

## Page metadata

Every page must set a `title` and `description`:

- The title is used for browser tabs and the top line of search results. It should usually match the title used in the `_toc.json` file.
- The description should describe the page in at least 50 but no more than 160 characters, ideally using some keywords. The description is what shows up as the text in search results. See https://github.com/Qiskit/documentation/issues/131 for some tips.

In MDX files, set the metadata at the top of the file like this:

```
---
title: Representing quantum computers
description: Learn about coupling maps, basis gates, and backend errors for transpiling
---
```

In Jupyter notebooks, set `title` and `description` in the `metadata` section for the file. In VSCode, you can set up the metadata with these instructions:

1. Open up the file with the "Open With..." option (one way to do this is to right-click the file name to find the "Open With..." option) and then "Text Editor".
2. Scroll down to the bottom of the file for the top-level key "metadata". Ensure that this is the metadata for the entire file and not for a single code block. You should see in the "metadata" section other entries like "language_info" and "nbconvert_exporter".
3. Add new keys in the "metadata" section for "title" and "description".

```json
"metadata": {
  "description": "Get started using Qiskit with IBM Quantum hardware in this Hello World example",
  "title": "Hello world",
  "celltoolbar": "Raw Cell Format",
  "kernelspec": { ...
}
```

## Links

Internal URLs referring to other docs pages should start with `/` and not include the file extension. For example:

- `[Qiskit SDK](/api/qiskit)`
- `[Bit ordering in the Qiskit SDK](/guides/bit-ordering)`

External URLs should use the entire URL, such as `[GitHub](https://github.com)`.

## Images

Images are stored in the `public/images` folder. You should use subfolders to organize the files. For example, images for `guides/my-file.mdx` should be stored like `public/images/guides/my-file/img1.png`.

To use the image:

```markdown
![Alt text for the image](/images/guides/your-file/your_image.png)
```

To add an inline images:

```markdown
Inline ![Alt text for the image](/images/guides/your-file/your_image.png) image
```

To include a caption:

```markdown
![Alt text for the image](/images/guides/your-file/your_image.png "Image caption")
```

You can include a version of the image to be with the dark theme. You only need to create an image with the same name ending in `@dark`. So for example, if you have a `sampler.png` image, the dark version would be `sampler@dark.png`. This is important for images that have a white background.

## Videos

Videos are stored in the `public/videos` folder. You should use subfolders to organize the files. For example, images for `guides/my-file.mdx` should be stored like `public/videos/guides/my-file/video1.mp4`.

To add a video:

```markdown
<video title="Write a description of the video here as 'alt text' for accessibility." className="max-w-auto h-auto" controls>
    <source src="/videos/guides/sessions/demo.mp4" type="video/mp4"></source>
</video>
```

## Math

We use [LaTeX](https://www.latex-project.org) to write math, which gets rendered by the library [KaTeX](https://katex.org).

Inline math expressions should start with `$` and end with `$`, e.g. `$\frac{123}{2}$`.

Multi-line expressions should start with `$$` and end with `$$`:

```markdown
$$
L = \frac{123}{2} \rho v^2 S C_1s
$$
```

## Tables

Tables are supported: https://www.markdownguide.org/extended-syntax/.

## Comments

Example comment: `{/_ Comes from https://qiskit.org/documentation/partners/qiskit_ibm_runtime/getting_started.html _/}`

## Collapsible sections

For content that you don't want to show by default, use a collapsible section. The user will need to expand the section to read its contents. Refer to GitHub's guide on [`<details>` and `<summary>`](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections).

## Footnotes

```
Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Second footnote text.
```

## Custom components

These are components that we expose through MDX. You can use them in both
`.mdx` and `.ipynb` files. In Jupyter notebooks, use Markdown cells.

### Admonitions

To use an `Admonition`, use the following syntax

```mdx
<Admonition type="note">This is an example of a note.</Admonition>
```

Available types are `note, tip, info, caution, danger`. This is what they look like:

![types](https://github.com/Qiskit/documentation/assets/66339736/9911d171-2dbb-45a2-af84-6502d5fc0ae0)

By default, the title is the `type` capitalized. You can customize it by setting `title`:

```mdx
<Admonition type="note" title="Custom title">
  This is a __note__ example
</Admonition>
```

### Definition Tooltip

To use a `DefinitionTooltip`, use the following syntax:

```mdx
<DefinitionTooltip definition="Definition for the Term">Term</DefinitionTooltip>
```

For full list of props, please check [here](https://react.carbondesignsystem.com/?path=/docs/components-definitiontooltip--playground#component-api).

### Tabs

To use a `Tabs` component, use the following syntax:

```mdx
<Tabs>
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

By default, the first tab is selected. You can change that by using the `defaultValue` prop.

```mdx
<Tabs defaultValue="qasm">
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

There are situations where you want to repeat the same tabs in several part of the page. In this situation, you can use the prop `group` to synchronize the selected tab in all usages.

```mdx
<Tabs group="my-group">
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This is the text for QASM
  </TabItem>
</Tabs>
```

There is a specific use case where you want to show instructions for different operating systems. In this situation, you can replace the `Tabs` component by a `OperatingSystemTabs`. The default value of the tab will be selected based on the user's operating system.

```mdx
<OperatingSystemTabs>
  <TabItem value="mac" label="macOS">
    Open a terminal and write the command
  </TabItem>
  <TabItem value="linux" label="Linux">
    Open a terminal and write the command
  </TabItem>
  <TabItem value="win" label="Windows">
    Go to windows/run and write `cmd`. It will open a command line. Execute this
    command
  </TabItem>
</OperatingSystemTabs>
```

## Proper marking and attribution

**All information needs to identify, mark, and attribute IBM and applicable third-party trademarks.** We do this the first time an IBM trademark appears on each page. See the [Copyright and trademark information](https://www.ibm.com/legal/copyright-trademark) page for more details.

Some companies require a special attribution notice. View a list of the companies to include in a special attribution notice at the [Special attributions](https://www.ibm.com/legal/copyright-trademark#special) section of the IBM Legal site.

<details>
<summary>A (non-exhaustive) list of trademarked names found in our docs:</summary>

- IBM&reg;
- IBM Cloud&reg;
- IBM Quantum&trade;
</details>

**Note**: Although Qiskit is a registered trademark of IBM, we do not mark it as such.

See the Usage section of the IBM Quantum Experience Guide for guidance on when to use IBM and when to use IBM Quantum.

### Trademark symbols

To create the symbols in markdown:

Use `&reg;` to get &reg; for registered trademarks.

use `&trade;` to get &trade; for nonregistered trademarks.

⚠️ **Note**: Do not include trademarks in headings. The code will display rather than the symbol.
