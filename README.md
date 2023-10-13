# Qiskit docs

The documentation content home for https://docs.quantum-computing.ibm.com. Note this repo does not contain content for https://learning.quantum-computing.ibm.com/ or https://qiskit.org. Refer to https://github.com/Qiskit/qiskit to make changes to the docs at https://qiskit.org/documentation.


# Improving IBM Quantum & Qiskit Documentation
Maintaining up-to-date documentation is a huge challenge for any software project, especially in a field like quantum computing where the pace at which advances in new research and technological capabilities happen incredibly fast. As a result, we greatly appreciate any who take the time to support us in keeping this content accurate and up to the highest quality standard possible to benefit the broadest range of users.

Read on for more information about how to support this project:

## Best ways to contribute to Documentation
### 1. Report bugs, inaccuracies or general content issues

This is the quickest, easiest, and most helpful way to contribute to this project and improve the quality of Qiskit and IBM Quantum documentation. There are a few different ways to report issues, depending on where it was found:

- For problems you've found in the [Qiskit API Reference](https://docs.quantum-computing.ibm.com/api/qiskit) section, open an issue in the Qiskit repo [here](https://github.com/Qiskit/qiskit/issues/new/choose).
- For problems you've found in the [Qiskit Runtime IBM Client](https://docs.quantum-computing.ibm.com/api/qiskit-ibm-runtime/runtime_service) section, open an issue in the Qiskit IBM Runtime repo [here](https://github.com/Qiskit/qiskit-ibm-runtime/issues/new/choose).
- For problems you've found in any other section of [docs](https://docs.quantum-computing.ibm.com), open a content bug issue [here](https://github.com/Qiskit/documentation/issues/new/choose).

### 2. Suggest new content

If you think there are gaps in our documentation, or sections that could be expanded upon, we invite you to open a new content request issue [here](https://github.com/Qiskit/documentation/issues/new/choose). 

Not every new content suggestion is a good fit for docs, nor are we able to prioritize every request immediately. However, we will do our best to respond to content requests in a timely manner, and we greatly appreciate our community's efforts in generating new ideas.

If you are interested in writing the new content yourself, or already have some draft work you think could be integrated, please also mention that in the issue description. If your content suggestion is accepted, we will let you know and work with you to get the content written and reviewed.

Please note: we DO NOT accept unsolicited PRs for new pages or large updates to existing content. The content that we include in docs is carefully planned and curated by our content team and must go through the appropriate review process to ensure the quality is of the highest possible standard before deploying to production. As a result we are very selective with which content suggestions are approved, and it is unlikely that PRs submitted without an associated approved content request will be accepted.

### 3. Validate existing issues

You can help the team prioritize already-open issues by doing the following:

- For bug reports, leave a comment in the issue if you have also been experiencing the same problem and can reproduce it (include as much information as you can, e.g.,  browser type, Qiskit version, etc.).
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

These tools will also run in CI. But, it can be convenient when iterating to run the tools locally.

Currently, this workflow only works for IBM maintainers. We are prioritizing fixing this workflow so that anyone can run the tools locally, tracked by https://github.com/Qiskit/docs/issues/53.

First, install the below software:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [IBM Cloud command line](https://cloud.ibm.com/docs/cli?topic=cli-getting-started)
3. [Docker](https://www.docker.com). You must also ensure that it is running.
   * You can use [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io). When installing Rancher Desktop, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop". 

Set up IBM Cloud to access the Docker image:

1. `ibmcloud plugin install cr`
2. `ibmcloud cr region-set global`
3. Make sure Docker is running, then `ibmcloud cr login`

Finally, install the dependencies with:

```bash
npm install
```

## Preview the docs locally

Run `./start` in your terminal, then open http://localhost:3000 in your browser.

## Preview the docs in PRs

Contributors with write access to this repository can use live previews of the docs: GitHub will deploy a website using your changes.

To use live previews, push your branch to `upstream` rather than your fork. GitHub will leave a comment with the link to the site. Please prefix your branch name with your initials, e.g. `EA/fix-build-typo`, for good Git hygiene.

## Staging

We also re-deploy the docs every time we merge into `main` at the site https://qiskit-docs-preview-staging.1799mxdls7qz.us-south.codeengine.appdomain.cloud.

This staging environment can be useful to see how the docs are rendering before we push it live to production.

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
