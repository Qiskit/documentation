# Adding package documentation to Qiskit/documentation

The documentation website now supports adding in subsites for a dedicated documentation experience for individual packages. Typically what we will do to generate these is by ingesting a sphinx artifact from the repository that contains both API refs and how-to guides (or similar documentation pages). This guide walks through how the sphinx artifact should be arranged and configured for us to import it into the IBM Quantum documentation site.

This guide is for maintainers of the package being added to `qiskit/documentation`. It covers what the Sphinx project and CI need to look like so that the tooling in this repository can parse your sidebar and generate correct navigation and links. 

If you're a content maintainer looking for how to run the ingestion pipeline itself, see [Generate or update addon docs](./README.md#generate-or-update-addon-docs) in the README instead.

## Theme requirements

Your `conf.py` must use the shared Qiskit ecosystem theme:

```python
extensions = [
    ...
    "qiskit_sphinx_theme",
]

html_theme = "qiskit-ecosystem"
```

This theme inherits directly from [Furo](https://github.com/pradyunsg/furo) and reuses Furo's own sidebar template unmodified. Our import tooling parses the built `index.html` by looking for Furo's specific sidebar markup (`div.sidebar-tree`, `ul.current`, `p.caption`), so a different theme, or a heavily customized one, will not produce a sidebar our tooling can read.

## Required `index.rst` structure

Your top-level `index.rst` needs two things: a self-referencing entry, and a captioned toctree for the API reference. Both affect how your sidebar renders, which is what our tooling reads to build your navigation.

### Include a `<self>` entry

Furo only marks a branch of the sidebar as "current" when it's an ancestor of (or points to) the page currently being rendered. If your toctree never references the index page itself, nothing in the sidebar of `index.html` gets marked current, and our tooling — which reads that main branch to build your navigation — sees an empty section.

Fix this by adding `Documentation home <self>` as the first entry of your main toctree:

```rst
.. toctree::
   :hidden:
   :maxdepth: 2

   Documentation home <self>
   Installation instructions <install>
   Guides <guides/index>
   GitHub <https://github.com/Qiskit/your-package>
```


### Tutorials and other learning resources (optional)

If you have one or more tutorials or courses that are relevant to the package you would like to include in the subsite's left navigation, add a separate `toctree` entry for them with the direct links to the tutorial.

```rst
.. toctree::
   :hidden:
   :caption: Tutorials

   Tutorial 1 <https://quantum.cloud.ibm.com/docs/tutorials/link-to-tutorial-1>
   Tutorial 2 <https://quantum.cloud.ibm.com/docs/tutorials/link-to-tutorial-2>
```

```rst
.. toctree::
   :hidden:
   :caption: Learning resources

   Course 1 <https://quantum.cloud.ibm.com/learning/courses/link-to-course>

```

### Put the API reference in its own captioned toctree, pointing at the hosted URL

Don't reference your local, Sphinx-generated `apidocs/index` from this toctree. That page has its own subtree of every class and function in your package, and if the sidebar links there, Sphinx renders that entire subtree into your navigation.

Instead, add a separate toctree with a `:caption:`, and point the entry at the URL your API reference will actually be published to:

```rst
.. toctree::
   :hidden:
   :caption: API reference

   Python API reference <https://quantum.cloud.ibm.com/docs/api/your-package>
   Release notes <release-notes>
```

The `Release notes` entry is only needed if you publish a separate release notes page (for example, using `reno`). The `:caption:` is what makes our tooling treat this as a distinct "API reference" section rather than folding it into the main navigation.

### Mark your local `apidocs/index` as an orphan

Your local `apidocs/index` page (the one autosummary/autodoc generates into) still needs to exist and build, since we read its generated per-class pages separately for the API reference itself. It just shouldn't be linked from your main navigation anymore, per the previous section. Sphinx will otherwise warn that the page (and everything under it) isn't included in any toctree, so mark it explicitly as an orphan:

```rst
:orphan:

..
   This page and its API reference children are intentionally kept out of the
   site's toctree: navigation points to the hosted API reference (see the
   "API reference" toctree in ``index.rst``). They are still built so the
   generated HTML is available in the Sphinx artifact for downstream ingestion.

API reference
=============

.. toctree::
   :maxdepth: 1

   your_module_a
   your_module_b
```

## Set up a GitHub Action to rebuild the Sphinx artifact on every release

Our ingestion process (see [Add a new addon package](./README.md#add-a-new-addon-package) in the README) downloads your documentation from a CI artifact attached to a GitHub Actions run. That means every release needs a corresponding CI run that built and uploaded the docs — a workflow that only runs on pushes to `main` or on pull requests isn't enough, since there's no run tied to the release tag for us to pull the artifact from.

Trigger your docs build on version tags in addition to whatever else you already run it on:

```yaml
on:
  workflow_dispatch:
  push:
    tags:
      - "[0-9]+.[0-9]+.[0-9]+*"
    branches: [main]
  pull_request:
    branches: [main]
```

And make sure the build step uploads the result as a named artifact:

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-python@v5
    with:
      python-version: "3.12"
  - name: Install dependencies
    run: python -m pip install ".[docs]"
  - name: Build docs
    run: sphinx-build -b html -W docs docs/_build/html
  - name: Upload docs artifact
    uses: actions/upload-artifact@v4
    with:
      name: docs-html
      path: docs/_build/html
      if-no-files-found: error
```

Without the tag trigger, there's no artifact for us to find when it's time to ingest a specific release rather than an ad hoc build off `main`.
