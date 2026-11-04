# Adding package documentation to Qiskit/documentation

The documentation website now supports adding in subsites for a dedicated documentation experience for individual packages. Typically what we will do to generate these is to ingest a sphinx artifact from the repository that contains both API refs and how-to guides (or similar documentation pages). This guide walks through how the sphinx artifact should be arranged and configured for us to import it.

This guide is for maintainers of the package being added to `qiskit/documentation`. It covers what the Sphinx project and CI need to look like so that the tooling in this repository can parse your sidebar and generate correct navigation and links. 

If you're a content maintainer looking for how to run the ingestion pipeline itself, see [Generate or update addon docs](./README.md#generate-or-update-addon-docs) in the README instead.

For the most part this guide will be for maintainers of **Addon packages** which get their own subsite under `/docs/addons/<package>` — a documentation home page, guides, and an API reference that links out to its own published page.

### Theme requirements

Your `conf.py` must use the shared Qiskit ecosystem theme:

```python
extensions = [
    ...
    "qiskit_sphinx_theme",
]

html_theme = "qiskit-ecosystem"
```

This theme inherits directly from [Furo](https://github.com/pradyunsg/furo) which reuses Furo's sidebar template. Our import tooling parses the built `index.html` by looking for the template's sidebar markup (`div.sidebar-tree`, `ul.current`, `p.caption`), so a different theme, or a heavily customized one, will not produce a sidebar our tooling can read.

## Required `index.rst` structure

Your top-level `index.rst` needs at least two toctrees: one to list the index page for the subsite, installation instructions, guide pages, etc. and one for the API reference. You can also optionally specify any tutorials or courses hosted on the IBM Quantum docs site related to your package which you want to include in the subsite.

### Top-level pages

The first toctree in your `index.rst` file should have a `<self>` reference (this will be the subsite's landing page and should contain some content introducing the package and any relevant informtaion on using it). It should also include a reference to your `install.rst` file and any guides pages and a link to the GitHub repository.

> [!NOTE]
> The `guides/index.rst` page will not render on the subsite so it should __not__ contain any content you want to include. It should only contain the `toctree` for the pages.

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

If you have one or more tutorials or courses that are relevant to the package you would like to include in the subsite's left navigation, add a separate `toctree` entry for them with the direct links to the tutorial and/or course.

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

### `toctree` for API refs

Add a separate toctree with `:caption: API reference`, and reference your local, Sphinx-generated `apidocs/index` along with the release-notes.

```rst
.. toctree::
   :hidden:
   :caption: API reference

   API reference <apidocs/index>
   Release notes <release-notes>
```

The `:caption:` is what makes our tooling treat this as a distinct "API reference" section. 

Sphinx renders that subtree into the sidebar HTML so it will still render if a contributor to your package wants to build the docs locally. 

If your package documents more than one language's worth of API — for example a Python package with a companion C API — list one entry per language under the same caption, each referencing that language's own local index page:

```rst
.. toctree::
   :hidden:
   :caption: API reference

   Python API reference <apidocs/index>
   C API reference <cdoc/index>
   Release notes <release-notes>
```



## API reference structure


### Every apidocs page needs a matching `automodule`

Even though addon navigation is built by parsing your rendered sidebar (see "Theme requirements" above), the *content* of your hosted `/docs/api/<package>` reference — including which pages appear in its own table of contents — is built separately, by `/scripts/js/lib/api/generateToc.ts`. That script decides if a page is a top-level "module" entry in the TOC by checking whether Sphinx emitted a `module-<dotted-path>` anchor for it, which only happens if the page's `.rst` file starts with `.. automodule::`.

If one of your `apidocs/*.rst` pages instead goes straight to `.. autoclass:: SomeClass` under `.. currentmodule:: your_package` — skipping `automodule` — Sphinx never emits that anchor. The page still builds and its content still gets ingested correctly, but `generateToc.ts` can't place it: it isn't a "module," and it can't be attached under a parent module either, because there's no bare `your_package` module entry to attach it to. The result is a page that exists and renders fine, but is missing from the sidebar.

To avoid this, every `apidocs/*.rst` page should lead with `.. automodule::`, even if the module only contains one class:

```rst
.. automodule:: your_package.some_module
   :no-members:
   :no-inherited-members:
   :no-special-members:

.. currentmodule:: your_package

.. autoclass:: SomeClass
   :no-members:
   ...
```


### Packages with more than one API language

Follow these instructions if your package exposes more than one language in their API references.  If this is the case, in our ingestion process, we treat one language as "primary" where everything described above (the addon subsite, the `<self>` entry, ownership of install instructions); every other language is ingested as an API-reference-only sibling, the same way `qiskit-c` is ingested alongside `qiskit` — see [If your package also has a C API](#if-your-package-also-has-a-c-api) under Core packages for how that Sphinx side is actually built (Doxygen + `breathe`, in `qiskit-fermions`'s case). For how to list the additional language in your `index.rst`, see [List every language under the same "API reference" caption](#list-every-language-under-the-same-api-reference-caption) above.

#### Split install instructions by language

If you have separate installation instructions for each language's API, keep an empty `install.rst` file with a toctree routing to per-language pages `install-<language>.rst`. The `install.rst` file should look something like this:

```rst
Installation instructions
==========================

Consult the appropriate guide for the language you intend to use:

.. toctree::
   :hidden:

   Python <install-py>
   C <install-c>
```

Our tooling recognizes the `install-<language>` naming convention and ingests those pages in place of a single `install` page. Don't use a different naming scheme for the split pages as they won't be recognized and our ingestion process won't correctly pull these files in.

#### Escape hatch for pages that don't document a single module

[Every apidocs page needs a matching `automodule`](#every-apidocs-page-needs-a-matching-automodule) still applies to ordinary module pages. But a second API language sometimes needs a page that isn't really "one module, one page" — for example, a page describing a plugin interface that spans several modules, with prose and a comparison table rather than a docstring to render. For pages like that, mark them explicitly instead of leading with `.. automodule::`:

```rst
:orphan:

.. meta::
   :qiskit-docs-api-type: conceptual
   :qiskit-docs-api-title: Transpiler Pass Plugins

Transpiler Pass Plugins
========================

... ordinary prose, tables, and cross-references to the modules this concept spans ...
```

The `.. meta::` directive writes those as `<meta>` which our ingestion process detects to place the page in your API reference's table of contents under the title you gave it.

## Required GitHub Actions

Our ingestion process (see [Add a new addon package](./README.md#add-a-new-addon-package) in the README) involves downloading your documentation from a CI artifact attached to a GitHub Actions run. We want this for tagged releases so that we are not accidentally ingesting documentation for features that have been built on a project's `main` branch, but haven't been released yet. In your release process, be sure to set up a CI run that creates this artifact for us.

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
