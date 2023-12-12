# Qiskit docs

The documentation content home for https://docs.quantum.ibm.com (excluding API reference).

# Improving IBM Quantum & Qiskit Documentation

Maintaining up-to-date documentation is a huge challenge for any software project, especially in a field like quantum computing where the pace at which advances in new research and technological capabilities happen incredibly fast. As a result, we greatly appreciate any who take the time to support us in keeping this content accurate and up to the highest quality standard possible to benefit the broadest range of users.

Read on for more information about how to support this project:

## Best ways to contribute to Documentation

### 1. Report bugs, inaccuracies or general content issues

This is the quickest, easiest, and most helpful way to contribute to this project and improve the quality of Qiskit and IBM Quantum documentation. There are a few different ways to report issues, depending on where it was found:

- For problems you've found in the [Qiskit API Reference](https://docs.quantum.ibm.com/api/qiskit) section, open an issue in the Qiskit repo [here](https://github.com/Qiskit/qiskit/issues/new/choose).
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

1. Read the [Code of Conduct](https://github.com/Qiskit/documentation/blob/main/CODE_OF_CONDUCT.md)
2. Check for open, unassigned issues with the "good first issue" label
3. Select an issue that is not already assigned to someone and leave a comment to request to be assigned

Once you have an issue to work on, see the "How to work with this repo" section below to get going, then open a PR.

Before opening a PR, remember to do the following:

1. Check that you have addressed all the requirements from the original issue
2. Run the spell checker
3. Use the GitHub "fixes" notation to [link your PR to the issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue) you are addressing

# How to work with this repo

## Prerequisites to building the docs locally

These tools will also run in CI, but it can be convenient when iterating to run the tools locally.

First, install the below software:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [Docker](https://www.docker.com). You must also ensure that it is running.
   - You can use [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io). When installing Rancher Desktop, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop".

Then, install the dependencies with:

```bash
npm install
```

## Preview the docs locally

Run `./start` in your terminal, then open http://localhost:3000/start in your browser.

The local preview does not include the initial index page and the top nav bar from docs.quantum.ibm.com. Therefore, you must directly navigate in the URL to the folder that you want:

- http://localhost:3000/build
- http://localhost:3000/start
- http://localhost:3000/run
- http://localhost:3000/transpile
- http://localhost:3000/verify
- http://localhost:3000/api/qiskit
- http://localhost:3000/api/qiskit-ibm-runtime
- http://localhost:3000/api/qiskit-ibm-provider
- http://localhost:3000/api/migration-guides

## Preview the docs in PRs

Contributors with write access to this repository can use live previews of the docs: GitHub will deploy a website using your changes.

To use live previews, push your branch to `upstream` rather than your fork. GitHub will leave a comment with the link to the site. Please prefix your branch name with your initials, e.g. `EA/fix-build-typo`, for good Git hygiene.

## Staging

We also re-deploy the docs every time we merge into `main` at the site https://qiskit-docs-preview-staging.1799mxdls7qz.us-south.codeengine.appdomain.cloud.

This staging environment can be useful to see how the docs are rendering before we push it live to production.

## Execute notebooks

To execute notebooks in a fixed Python environment, first install `tox` using
[pipx](https://pipx.pypa.io/stable/):

```sh
pipx install tox
```

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

## Check for broken links

CI will check for broken links. You can also check locally:

```bash
# Only check for internal broken links
npm run check:links

# Enable the validation of external links
npm run check:links -- --external

# Or, run all the checks
npm run check
```

## Check file metadata

Every file needs to have a `title` and `description`. The `lint` job in CI will fail with instructions for any bad file.

You can also check for valid metadata locally:

```bash
# Only check file metadata
npm run check:metadata

# Or, run all the checks
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

2. Add the word to the file `cSpell.json` in the `words` section. The word is not case-sensitive.

If the word appears in multiple files, prefer the second approach to add it to `cSpell.json`.

## Format TypeScript files

If you're working on our support code in `scripts/`, run `npm run fmt` to automatically format the files.

To check that formatting is valid without actually making changes, run `npm run check:fmt` or `npm run check`.

## Regenerate the API docs

1. Install and configure GitHub CLI: https://docs.github.com/en/github-cli/github-cli/quickstart
2. Choose which documentation you want to regenerate: `qiskit`, `qiskit-ibm-provider`, or `qiskit-ibm-runtime`
3. Determine the current version of the published stable documentation, e.g. at https://github.com/Qiskit/qiskit/releases
4. Find a link to a CI artifact with the project's documentation, e.g at https://github.com/Qiskit/qiskit/suites/17881600359/artifacts/1026798160. To find this, first find the CI run for the commit you are trying to build docs for. This should come from a stable commit, not from a Pull Request. Then, go to the "Summary" page in GitHub Actions for the CI run. Scroll down to "Artifacts" and look for the artifact related to documentation, such as `html_docs`. Copy the link by right-clicking on the artifact.
5. Run `npm run gen-api -- -p <pkg-name> -v <version> -a <artifact-url>`,
   e.g. `npm run gen-api -- -p qiskit -v 0.45.0 -a https://github.com/Qiskit/qiskit/suites/17881600359/artifacts/1026798160`
6. When opening your PR, include the CLI arguments you used. That helps us to know exactly how the docs have been generated over time.

If the version is not for the latest stable minor release series, then add `--historical` to the arguments. For example, use `--historical` if the latest stable release is 0.45.\* but you're generating docs for the patch release 0.44.3.

In case you want to save the current version and convert it into a historical one, you can run `npm run make-historical -- -p <pkg-name>` beforehand.

# How to write the documentation

We use [MDX](https://mdxjs.com), which is like normal markdown but adds extensions for custom components we have.

Refer to the [Common Markdown syntax](https://commonmark.org/) for a primer on Markdown. The below guide focuses on the other features you can use when writing docs.

## How to add a new page

Choose which existing folder from `docs/` your new page belongs to. 

Next, choose the file name. The file name will determine the URL. For example, `start/my-new-page.mdx` results in the URL `start/my-new-page`. Choose a file name that will be stable over the page's lifespan and that is unlikely to clash with other topics. Use `-` rather than `_` as the delimiter. You can also ask for help choosing a name in the GitHub issue or pull request.

If your file will have non-trivial code in it, please create a Jupyter notebook ending in `.ipynb`, rather than an MDX file. We prefer Jupyter notebooks when there is code because we have tests to make sure that the code still executes properly, whereas MDX is not tested.

Once the file is created, you need to add metadata. Run `npm run check:metadata` for instructions on how to do this. (Refer to [Check file metadata](#check-file-metadata))

Finally, add the file to the folder's `_toc.json`, such as `start/_toc.json`. The `title` is what will show up in the left side bar. Note that the `url` leaves off the file extension.

## Images

Images are stored in the `public/images` folder. You should use subfolders to organize the files. For example, images for `start/my-file.mdx` should be stored like `public/images/start/my-file/img1.png`.

To use the image inside an MDX page:

```markdown
![Your image](/images/build/your-file/your_image.png)
```

To add an inline images,

```markdown
Inline ![Inline image](/images/build/your-file/your_image.png) image
```

To include a caption

```markdown
![Your image](/images/build/your-file/your_image.png 'Image caption')
```

You can include a version of the image to be with the dark theme. You only need to create an image with the same name ending in `@dark`. So for example, if you have a `sampler.png` image, the dark version would be `sampler@dark.png`. This is important for images that have a white background.

## Math

We use [LaTeX](https://www.latex-project.org) to write math, which gets rendered by the library [KaTeX](https://katex.org).

Inline math expressions should start with `$` and end with `$`, e.g. `$\frac{123}{2}`.

Multi-line expressions should start with `$$` and end with `$$`:

```markdown
$$
L = \frac{123}{2} \rho v^2 S C_1s
$$
```

## Tables

Tables are supported: https://www.markdownguide.org/extended-syntax/.

## Comments

Example comment: {/* Comes from https://qiskit.org/documentation/partners/qiskit_ibm_runtime/getting_started.html */}

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
`.mdx` and `.ipynb` files. In Jupyter notebooks, use Markdown blocks.

### Admonitions

To use an `Admonition`, use the following syntax

```mdx
<Admonition type="note">This is a __note__ example</Admonition>
```

Available types are `note, tip, info, caution, danger`

By default, the title is the `type` capitalized. You can customize it by using the `title` prop

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


### Composer

You can use this component to render a circuit as it will be displayed in the composer. It does not have any interaction.

```mdx
<Composer qasm={`
OPENQASM 2.0;
include "qelib1.inc";

qreg q[5];
creg c[5];

U(0, 0, pi / 2) q[0];
CX q[0], q[1];
u3(0, 0, pi /2) q[0];
u2(0, 0) q[0];

`}/>
```

### Tabs

To use a `Tabs` component, use the following syntax

```mdx
<Tabs>
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This in cloud the text for QASM
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
    This in cloud the text for QASM
  </TabItem>
</Tabs>
```

There are situation where you want to repeat the same tabs in several part of the page. In this situation, you can use the prop `group` to synchronize the selected tab in all usages.

```mdx
<Tabs group="my-group">
  <TabItem value="pulses" label="Pulses">
    This is the text for pulses
  </TabItem>

  <TabItem value="qasm" label="QASM">
    This in cloud the text for QASM
  </TabItem>
</Tabs>
```

There is a specific use case where you want to show instructions for different operating systems. In this situation, you can replace the `Tabs` component by a `OperatingSystemTabs`. The default value of the tab will be selected based on the users operating system.

```mdx
<OperatingSystemTabs>
  <TabItem value="mac" label="macOS">
    Open a terminal and write the command
  </TabItem>

  <TabItem value="linux" label="Linux">
    Open a terminal and write the command
  </TabItem>

  <TabItem value="win" label="Windows">
    Go to windows/run and write `cmd`. It will open a command line. Execute this command
  </TabItem>
</OperatingSystemTabs>
```

### CircuitTabs

This component show tabs with the Composer and the OpenQasm code. It also shows an Open in Composer link at the bottom.

```mdx
<CircuitTabs name="Bell" qasm={`
  OPENQASM 2.0;
  include "qelib1.inc";

  qreg q[2];
  creg c[2];

  reset q[0];
  h q[0];
  reset q[1];
  cx q[0],q[1];
  measure q[0] -> c[0];
  measure q[1] -> c[1];
`}/>
```

### Operation

To display a qasm operation (like a not gate), you can use the `Operation` component

```mdx
<Operation name="x" />
```
