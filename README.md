# Qiskit docs

The documentation content home for https://docs.quantum-computing.ibm.com. Refer to https://github.com/Qiskit/qiskit to make changes to the docs at https://qiskit.org/documentation.

# How tos

## Prerequisites to run tools locally

These tools will also run in CI, but it can be convenient when iterating to run the tools locally.

First, install the below software:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).
2. [Docker](https://www.docker.com). You must also ensure that it is running.
   * You can use [Colima](https://github.com/abiosoft/colima) or [Rancher Desktop](https://rancherdesktop.io). When installing Rancher Desktop, choose Moby/Dockerd as the engine, rather than nerdctl. To ensure it's running, open up the app "Rancher Desktop". 

Then, install the dependencies with:

```bash
npm install
```

## Preview the docs locally

Run `./start` in your terminal, then open http://localhost:3000/start in your browser.

The local preview does not include the initial index page and the top nav bar from docs.quantum-computing.ibm.com. Therefore, you must directly navigate in the URL to the folder that you want:

* http://localhost:3000/build
* http://localhost:3000/start
* http://localhost:3000/run
* http://localhost:3000/transpile
* http://localhost:3000/verify

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
