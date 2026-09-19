# Adding package documentation to Qiskit/documentation

The documentation website now supports adding in subsites for a dedicated documentation experience for individual packages. Typically what we will do to generate these is by ingesting a sphinx artifact from the repository that contains both API refs and how-to guides (or similar documentation pages). This guide walks through how the sphinx artifact should be arranged and configured for us to import it into the IBM Quantum documentation site.

This guide is for maintainers of the package being added to `qiskit/documentation`. It covers what the Sphinx project and CI need to look like so that the tooling in this repository can parse your sidebar and generate correct navigation and links. 

If you're a content maintainer looking for how to run the ingestion pipeline itself, see [Generate or update addon docs](./README.md#generate-or-update-addon-docs) in the README instead.

There are two shapes this can take, and they have different requirements:

- **Addon packages** get their own subsite under `/docs/addons/<package>` — a documentation home page, guides, and an API reference that links out to its own published page. This is the common case, and it's what most of this guide covers.
- **Core packages** — currently `qiskit` and `qiskit-ibm-runtime` — don't get a subsite. Their Sphinx project exists only to produce the API reference content itself, which is ingested directly rather than linked to. See [Core packages](#core-packages-api-reference-only) below.

## Addon packages

### Theme requirements

Your `conf.py` must use the shared Qiskit ecosystem theme:

```python
extensions = [
    ...
    "qiskit_sphinx_theme",
]

html_theme = "qiskit-ecosystem"
```

This theme inherits directly from [Furo](https://github.com/pradyunsg/furo) and reuses Furo's own sidebar template unmodified. Our import tooling parses the built `index.html` by looking for Furo's specific sidebar markup (`div.sidebar-tree`, `ul.current`, `p.caption`), so a different theme, or a heavily customized one, will not produce a sidebar our tooling can read.

### Required `index.rst` structure

Your top-level `index.rst` needs two things: a self-referencing entry, and a captioned toctree for the API reference. Both affect how your sidebar renders, which is what our tooling reads to build your navigation.

#### Include a `<self>` entry

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


#### Tutorials and other learning resources (optional)

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

#### Put the API reference in its own captioned toctree

Add a separate toctree with `:caption: API reference`, and reference your local, Sphinx-generated `apidocs/index`, the same way you'd reference any other page:

```rst
.. toctree::
   :hidden:
   :caption: API reference

   API reference <apidocs/index>
   Release notes <release-notes>
```

The `:caption:` is what makes our tooling treat this as a distinct "API reference" section rather than folding it into the main navigation. The `Release notes` entry is only needed if you publish a separate release notes page (for example, using `reno`).

Our tooling doesn't follow this link. `apidocs/index` has its own subtree of every class and function in your package — Sphinx renders that whole subtree into the sidebar HTML wherever it's referenced — but we only read the caption and the entry's visible text; the href and everything nested under it are discarded and replaced with your package's real, published API reference address. That means the link you put here doesn't need to be exactly right, and you don't need to keep it in sync with our URL scheme. It does still need to be a genuine toctree entry (not `:orphan:`) so Sphinx doesn't warn that the page isn't included anywhere.

#### List every language under the same "API reference" caption

If your package documents more than one language's worth of API — for example a Python package with a companion C API — list one entry per language under the same caption, each referencing that language's own local index page:

```rst
.. toctree::
   :hidden:
   :caption: API reference

   Python API reference <apidocs/index>
   C API reference <cdoc/index>
   Release notes <release-notes>
```

Tell us about the additional language when you ask us to add or update your package — we match these entries to the right published API reference positionally, in the order they appear here, against an explicit list we keep in our package registry. That match has to line up exactly: the number of language entries here (everything except "Release notes") must equal the number of packages we've registered for you, in the same order, or ingestion fails loudly rather than silently pointing a language at the wrong reference.

### Every apidocs page needs a matching `automodule`

Even though addon navigation is built by parsing your rendered sidebar (see "Theme requirements" above), the *content* of your hosted `/docs/api/<package>` reference — including which pages appear in its own table of contents — is built separately, by `generateToc.ts`. That script decides whether a page is a top-level "module" entry in the TOC by checking whether Sphinx emitted a `module-<dotted-path>` anchor for it, which only happens if the page's `.rst` file starts with `.. automodule::`.

If one of your `apidocs/*.rst` pages instead goes straight to `.. autoclass:: SomeClass` under `.. currentmodule:: your_package` — skipping `automodule` — Sphinx never emits that anchor. The page still builds and its content still gets ingested correctly, but `generateToc.ts` can't place it: it isn't a "module," and it can't be attached under a parent module either, because there's no bare `your_package` module entry to attach it to. The result is a page that exists and renders fine, but is missing from the sidebar — nothing errors, nothing warns.

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

See "Keep each API page a thin wrapper around `automodule`" under Core packages below for the same mechanism applied to `qiskit`.

### Set up a GitHub Action to rebuild the Sphinx artifact on every release

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

### Addons with more than one API language

Some addons expose more than one language's worth of API — for example `qiskit-fermions`, which has both a Python package and a C API built from the same repository. If that's you, one language is "primary" and gets everything described above (the addon subsite, the `<self>` entry, ownership of install instructions); every other language is ingested as an API-reference-only sibling, the same way `qiskit-c` is ingested alongside `qiskit` — see [If your package also has a C API](#if-your-package-also-has-a-c-api) under Core packages for how that Sphinx side is actually built (Doxygen + `breathe`, in `qiskit-fermions`'s case). For how to list the additional language in your `index.rst`, see [List every language under the same "API reference" caption](#list-every-language-under-the-same-api-reference-caption) above.

#### Split install instructions by language only if the steps genuinely diverge

Keep a single `install.rst` if you can — most addons should. Only split it if the actual procedure differs per language (for example, the C build needs a separately-built upstream library and environment variables that the Python install doesn't). If you do split it, keep `install.rst` itself as a thin router with no content of its own, and name the per-language pages `install-<language>.rst`:

```rst
Installation instructions
==========================

Consult the appropriate guide for the language you intend to use:

.. toctree::
   :hidden:

   Python <install-py>
   C <install-c>
```

Our tooling recognizes the `install-<language>` naming convention and ingests those pages in place of a single `install` page. Don't invent a different naming scheme for the split pages — anything other than `install-<language>` won't be recognized, and you'll end up with both the router page and the per-language pages in your navigation.

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

The `.. meta::` directive writes those as `<meta>` tags into the page's `<head>` — invisible on the rendered page, but something our tooling can detect to place the page in your API reference's table of contents under the title you gave it, without needing a real `module-*` anchor. Use this sparingly: it's an escape hatch for content that doesn't have a natural single-module home, not a substitute for `automodule` on pages that do.

## Core packages (API reference only)

`qiskit` and `qiskit-ibm-runtime` don't get an addon-style subsite: their Sphinx project exists only to produce the API reference content, which is ingested directly rather than linked to from a "Documentation home" page. On the ingestion side, this runs through a different code path — `apiDocsPipeline.ts` / `generateToc.ts`, not `addonDocsPipeline.ts` / `generateAddonToc.ts` — and that difference in mechanism is why the requirements below diverge from the addon pattern.

### Theme doesn't matter here

`generateAddonToc.ts` builds navigation by parsing the rendered sidebar's Furo-specific HTML (`div.sidebar-tree`, `ul.current`, `p.caption`), so an addon site's theme choice is load-bearing. `generateToc.ts` builds the API index a different way: it walks the converted module/class structure of the built pages themselves, not a rendered sidebar. Theme is irrelevant to that process.

That's why both `qiskit` and `qiskit-ibm-runtime` use the plain `alabaster` theme instead of `qiskit-ecosystem`. `qiskit-ibm-runtime`'s `conf.py` says so directly:

```python
# Even though alabaster isn't very pretty, we use it
# over the normal qiskit-ecosystem theme because it's
# faster to build and these docs are only necessary
# so the API docs can be integrated into quantum.cloud.ibm.com/docs.
html_theme = "alabaster"
```

It also follows that none of the addon-specific `index.rst` requirements above apply: no `<self>` entry is needed for sidebar purposes, no captioned "API reference" toctree pointing elsewhere, and no orphaned `apidocs/index`. In this pattern, the whole site *is* the API reference, so `index.rst` can stay minimal — this is `qiskit-ibm-runtime`'s in full:

```rst
#########################################
Qiskit Runtime |release| API Docs Preview
#########################################

Qiskit Runtime docs live at http://quantum.cloud.ibm.com/docs and come from https://github.com/Qiskit/documentation.
This site is only used to generate our API docs, which then get migrated to
https://github.com/Qiskit/documentation.

.. toctree::
   :hidden:

    Documentation home <self>
    API Reference <apidocs/index>
    Guides <guides/index>
    Release Notes <release_notes>
```

### Organize the API reference by topic, not as one flat list

Unlike an addon's `apidocs/index.rst` (one flat toctree of module pages), `qiskit`'s `docs/apidoc/index.rst` groups its module pages under short prose labels, each with its own `:maxdepth: 1` toctree:

```rst
=============
API Reference
=============

Circuit construction:

.. toctree::
   :maxdepth: 1

   circuit
   qiskit.circuit.QuantumCircuit
   circuit_library

Quantum information:

.. toctree::
   :maxdepth: 1

   quantum_info

Transpilation:

.. toctree::
   :maxdepth: 1

   transpiler
   transpiler_passes
```

This grouping is purely for the benefit of a reader navigating the generated site — `generateToc.ts` doesn't depend on it. Order modules within a group alphabetically by the underlying module name (not the `.rst` filename), per the comment at the top of `qiskit`'s file.

### Keep each API page a thin wrapper around `automodule`

Each page listed in a toctree above is mostly boilerplate. `qiskit`'s `docs/apidoc/quantum_info.rst` in full:

```rst
.. _qiskit-quantum_info:

.. automodule:: qiskit.quantum_info
   :no-members:
   :no-inherited-members:
   :no-special-members:
```

The `:no-members:` family of options is what keeps this page from dumping every class and function inline — the module's own docstring is expected to contain `.. autosummary::` tables listing its public classes and functions. With `autosummary_generate = True` set in `conf.py`, Sphinx turns each of those autosummary entries into its own generated stub page (`qiskit`'s land under `docs/stubs/`). This is a different division of labor than an addon package's `apidocs/index.rst`, where the toctree entries are themselves the module pages autodoc/autosummary generates — here, the hand-written `.rst` file is a stable anchor point, and the interesting content comes from the docstring it targets.

### If your package also has a C API

`qiskit` ships a C API (`qiskit.h`) alongside its Python package, documented as a fully separate toctree from the Python API reference:

```rst
.. toctree::
   :hidden:

   Documentation Home <self>
   C API Reference <cdoc/index>
   Python API Reference <apidoc/index>
   Release Notes <release_notes>
```

Building it is a four-stage pipeline, and the stages must run in this order because each one consumes the previous stage's output on disk:

1. **Generate the C header from Rust.** `qiskit`'s `make cheader` target runs `cargo run -p qiskit-bindgen-cli -- install -c crates/cext -o dist/c/include`, producing `qiskit.h` from the Rust source.
2. **Run Doxygen over the header and your hand-written prose.** `qiskit`'s `docs/Doxyfile` points `INPUT` at both the generated header directory and `docs/cdoc/` (hand-written `.rst` pages with prose, examples, and math around the API), and sets `GENERATE_XML = YES` / `XML_OUTPUT = docs/xml` so Sphinx has something to read later:

   ```
   INPUT = docs/cdoc/ dist/c/include/
   RECURSIVE = YES
   OPTIMIZE_OUTPUT_FOR_C = YES
   GENERATE_XML = YES
   XML_OUTPUT = docs/xml
   GENERATE_HTML = NO
   GENERATE_LATEX = NO
   ```

3. **Point Sphinx's `breathe` extension at that XML.** In `conf.py`:

   ```python
   extensions = [
       ...,
       "breathe",
   ]
   breathe_projects = {"qiskit": "xml/"}
   breathe_default_project = "qiskit"
   breathe_domain_by_extension = {"h": "c"}
   ```

4. **Write one `.rst` page per C API group under `docs/cdoc/`**, mixing ordinary prose, code blocks, and math with `breathe` directives that pull in the Doxygen-parsed signatures and docstrings. From `qiskit`'s `docs/cdoc/qk-circuit.rst`:

   ```rst
   .. code-block:: c

      typedef struct QkCircuit QkCircuit

   The fundamental element of quantum computing is the *quantum circuit*. ...

   Data Types
   ==========

   .. doxygenstruct:: QkCircuitInstruction
      :members:

   Functions
   =========

   .. doxygengroup:: QkCircuit
      :members:
      :content-only:
   ```

   `docs/cdoc/index.rst` then has its own toctree over these pages, separate from the Python `apidoc/index.rst`.

`qiskit`'s `tox` docs environment runs the first three stages as explicit, ordered commands before handing off to Sphinx:

```
commands =
  make cheader
  doxygen docs/Doxyfile
  sphinx-build -W -j auto -T --keep-going -b html docs/ docs/_build/html {posargs}
```

If you're setting this up as CI, replicate that ordering: build the header, then run Doxygen, then run `sphinx-build` — `breathe` only reads Doxygen's already-generated XML, it doesn't invoke Doxygen itself.

One unrelated wrinkle worth flagging so it doesn't cause confusion: `qiskit` also has a `docs/apidoc/capi.rst` page under the *Python* API reference (`.. automodule:: qiskit.capi`). That documents a thin Python-side shim module, not the C API reference — the two are unconnected, and a new C-API package won't need the Python-side page unless it ships an equivalent shim.
