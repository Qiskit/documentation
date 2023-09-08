# Qiskit docs

The documentation content home for https://docs.quantum-computing.ibm.com. Refer to https://github.com/Qiskit/qiskit to make changes to the docs at https://qiskit.org/documentation.

# How tos

## Pre-requisites

First, install the below:

1. [Node.js](https://nodejs.org/en). If you expect to use JavaScript in other projects, consider using [NVM](https://github.com/nvm-sh/nvm). Otherwise, consider using [Homebrew](https://formulae.brew.sh/formula/node) or installing [Node.js directly](https://nodejs.org/en).

Then, install the dependencies with:

```bash
❯ npm install
```

## Spellcheck

We use [cSpell](https://cspell.org) to check for spelling. To check locally:

```bash
❯ npm run spellcheck
```
> There is also a VSCode extension [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) that can be installed to have misspelled words highlighted without the need to run any commands.

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
