// This code is a Qiskit project.
//
// (C) Copyright IBM 2024.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { CheerioAPI, Cheerio, load as cheerioLoad } from "cheerio";
import { describe, expect, test } from "@jest/globals";

import {
  addLanguageClassToCodeBlocks,
  loadImages,
  handleSphinxDesignCards,
  maybeSetModuleMetadata,
  renameAllH1s,
  removeHtmlExtensionsInRelativeLinks,
  removeDownloadSourceCode,
  removePermalinks,
  removeColonSpans,
  replaceViewcodeLinksWithGitHub,
  prepareGitHubLink,
} from "./processHtml";
import { Metadata } from "./Metadata";

class Doc {
  readonly $: CheerioAPI;
  readonly $main: Cheerio<any>;

  constructor($: CheerioAPI, $main: Cheerio<any>) {
    this.$ = $;
    this.$main = $main;
  }

  static load(html: string): Doc {
    const $ = cheerioLoad(`<div role="main">${html}</div>`);
    return new Doc($, $("[role='main']"));
  }

  html(): string {
    return this.$main.html()!.trim();
  }

  expectHtml(expected: string): void {
    expect(this.html()).toEqual(expected.trim());
  }
}

describe("loadImages()", () => {
  test("normal file", () => {
    const doc = Doc.load(
      `<img src="../_static/logo.png" alt="Logo"><img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(
      doc.$,
      doc.$main,
      "http://localhost:3000/api/my-file.html",
      "/my-images",
      false,
    );
    expect(images).toEqual([
      {
        src: "http://localhost:3000/_static/logo.png",
        dest: "/my-images/logo.png",
      },
      {
        src: "http://localhost:3000/_static/images/view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(
      `<img src="/my-images/logo.png" alt="Logo"><img src="/my-images/view-page-source-icon.svg">`,
    );
  });

  test("release note", () => {
    const doc = Doc.load(
      `<img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(
      doc.$,
      doc.$main,
      "http://localhost:3000/api/release_notes.html",
      "/my-images/0.45",
      true,
    );
    expect(images).toEqual([
      {
        src: "http://localhost:3000/_static/images/view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(`<img src="/my-images/view-page-source-icon.svg">`);
  });
});

test("handleSphinxDesignCards()", () => {
  const doc = Doc.load(`
    <details class="sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down">
    <summary class="sd-summary-title sd-card-header">
        Account initialization
        <div class="sd-summary-down docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-down" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"></path>
            </svg>
        </div>
        <div class="sd-summary-up docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-up" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z"></path>
            </svg>
        </div>
    </summary>
    <div class="sd-summary-content sd-card-body docutils">
        <blockquote>
            <div>
                <p class="sd-card-text">You need to initialize your account before you can start using the Qiskit Runtime service...</p>
                <p class="sd-card-text">Qiskit Runtime is available...</p>
            </div>
        </blockquote>
    </div>
    </details>
  `);
  handleSphinxDesignCards(doc.$, doc.$main);
  doc.expectHtml(`
    <details class="sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down">
    <h3>
        Account initialization
        <div class="sd-summary-down docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-down" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z"></path>
            </svg>
        </div>
        <div class="sd-summary-up docutils">
            <svg version="1.1" width="1.5em" height="1.5em" class="sd-octicon sd-octicon-chevron-up" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z"></path>
            </svg>
        </div>
    </h3>
    <div class="sd-summary-content sd-card-body docutils">
        <div>
                <p class="sd-card-text">You need to initialize your account before you can start using the Qiskit Runtime service...</p>
                <p class="sd-card-text">Qiskit Runtime is available...</p>
            </div>
    </div>
    </details>
  `);
});

test("renameAllH1s()", () => {
  const doc = Doc.load(`<h1>Release Notes!!!</h1><h2>0.45.0</h2>`);
  renameAllH1s(doc.$, "New Title");
  doc.expectHtml(`<h1>New Title</h1><h2>0.45.0</h2>`);
});

test("removeHtmlExtensionsInRelativeLinks()", () => {
  const doc = Doc.load(
    `<a href="https://ibm.com"></a><a href="../foo.html"></a><a href="../img.svg"></a>`,
  );
  removeHtmlExtensionsInRelativeLinks(doc.$, doc.$main);
  doc.expectHtml(
    `<a href="https://ibm.com"></a><a href="../foo"></a><a href="../img.svg"></a>`,
  );
});

test("removeDownloadSourceCode()", () => {
  const doc = Doc.load(
    `<p>(<a class="reference download internal" download="" href="../_downloads/878087bb6064f5d5f4c00d6f8a12319d/converters-1.py"><code class="xref download docutils literal notranslate"><span class="pre">Source</span> <span class="pre">code</span></code></a>)</p>
      <figure class="align-default">
      <img alt="../_images/converters-1.png" class="plot-directive" src="../_images/converters-1.png" />
      </figure>`,
  );
  removeDownloadSourceCode(doc.$main);
  doc.expectHtml(
    `<figure class="align-default">
      <img alt="../_images/converters-1.png" class="plot-directive" src="../_images/converters-1.png">
      </figure>`,
  );
});

test("removePermalinks()", () => {
  const doc = Doc.load(`<a title="okay">Link</a>
    <a title="Permalink to this headline">Link</a>
    <a title="Permalink to this heading">Link</a>
    <a title="Permalink to this definition">Link</a>
    <a title="Link to this heading">Link</a>
    <a title="Link to this definition">Link</a>`);
  removePermalinks(doc.$main);
  doc.expectHtml(`<a title="okay">Link</a>`);
});

test("removeColonSpans()", () => {
  const doc = Doc.load(
    `<dt class="field-odd">Parameters<span class="colon">:</span></dt>`,
  );
  removeColonSpans(doc.$main);
  doc.expectHtml(`<dt class="field-odd">Parameters</dt>`);
});

test("addLanguageClassToCodeBlocks()", () => {
  const doc1 = Doc.load(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </pre></div>
    </div>`);
  // TODO(EA): This behavior is bad. We shouldn't be setting the language as Python because it's not always correct, such
  // as with this example. Also this name is misleading. Really what we are doing here is dealing with RST's `.. parsed-literal ::`
  // (https://docutils.sourceforge.io/docs/ref/rst/directives.html#parsed-literal-block), which we tend to use to put code literals
  // along with gate text representations like the above.
  addLanguageClassToCodeBlocks(doc1.$, doc1.$main);
  doc1.expectHtml(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><code class="language-python"><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </code></pre></div>
    </div>`);

  const doc2 = Doc.load(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </pre>
      </div>
    </div>`);
  addLanguageClassToCodeBlocks(doc2.$, doc2.$main);
  doc2.expectHtml(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><code class="language-python"><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </code></pre>
      </div>
    </div>`);
});

test("replaceSourceLinksWithGitHub()", () => {
  // Assumes that removeHtmlExtensionsInRelativeLinks() has already removed .html from the URL.
  const doc = Doc.load(
    `<a href="../_modules/qiskit_ibm_runtime/ibm_backend#IBMBackend"></a>
    <a href="../_modules/qiskit_ibm_provider/job/exceptions#IBMJobApiError"></a>
    <a href="../_modules/qiskit_ibm_provider#least_busy"></a>
    <a href="../_modules/qiskit/qasm2#compile"></a>
    <a href="../_modules/qiskit/qasm3#compile"></a>
    <a href="../_modules/qiskit/transpiler/preset_passmanagers#foo"></a>
    <a href="#qiskit_ibm_runtime.IBMBackend"></a>`,
  );
  replaceViewcodeLinksWithGitHub(
    doc.$,
    doc.$main,
    "https://github.com/Qiskit/my-project/tree/stable/0.9/",
  );
  doc.expectHtml(
    `<a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit_ibm_runtime/ibm_backend.py"></a>
    <a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit_ibm_provider/job/exceptions.py"></a>
    <a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit_ibm_provider/__init__.py"></a>
    <a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit/qasm2/__init__.py"></a>
    <a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit/qasm3/__init__.py"></a>
    <a href="https://github.com/Qiskit/my-project/tree/stable/0.9/qiskit/transpiler/preset_passmanagers/__init__.py"></a>
    <a href="#qiskit_ibm_runtime.IBMBackend"></a>`,
  );
});

describe("maybeSetModuleMetadata()", () => {
  test("not a module", () => {
    const html = `<h1>Hello</h1>`;
    const meta: Metadata = {};
    const doc = Doc.load(html);
    maybeSetModuleMetadata(doc.$, doc.$main, meta);
    doc.expectHtml(html);
    expect(meta).toEqual({});
  });

  const checkModuleFound = (html: string, name: string): void => {
    const meta: Metadata = {};
    const doc = Doc.load(html);
    maybeSetModuleMetadata(doc.$, doc.$main, meta);
    doc.expectHtml(html);
    expect(meta).toEqual({
      apiType: "module",
      apiName: name,
    });
  };

  test("module - Sphinx <= 7.1 style", () => {
    checkModuleFound(
      `<span id="foo"></span><span class="target" id="module-qiskit_ibm_runtime.options"></span>`,
      "qiskit_ibm_runtime.options",
    );
  });

  test("module - Sphinx 7.2+ style", () => {
    const html = `<span id="foo"></span>
      <span id="module-qiskit_ibm_runtime.options">
        <span id="qiskit-circuit"></span>
      </span>`;
    checkModuleFound(html, "qiskit_ibm_runtime.options");
  });

  test("section", () => {
    checkModuleFound(
      `<section id="module-qiskit_ibm_provider.transpiler.passes.basis"><h1>Hello</h1></section>`,
      "qiskit_ibm_provider.transpiler.passes.basis",
    );
  });
});

describe("prepareGitHubLink()", () => {
  test("no link", () => {
    const html = `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`;
    const doc = Doc.load(html);
    const result = prepareGitHubLink(doc.$, doc.$main);
    expect(result).toEqual("");
    doc.expectHtml(html);
  });

  test("link", () => {
    const doc = Doc.load(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="reference internal" href="https://ibm.com/my_link"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
    const result = prepareGitHubLink(doc.$, doc.$main);
    expect(result).toEqual(
      `<a href="https://ibm.com/my_link" title="view source code">GitHub</a>`,
    );
    doc.expectHtml(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
  });
});
