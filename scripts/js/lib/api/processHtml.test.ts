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

import { expect, test } from "@playwright/test";

import {
  addLanguageClassToCodeBlocks,
  loadImages,
  handleSphinxDesignCards,
  maybeSetPythonModuleMetadata,
  renameAllH1s,
  removeHtmlExtensionsInRelativeLinks,
  removeDownloadSourceCode,
  removePermalinks,
  removeColonSpans,
  removeMatplotlibFigCaptions,
  replaceViewcodeLinksWithGitHub,
  updateRedirectedExternalLinks,
  convertRubricsToHeaders,
  processMembersAndSetMeta,
  handleFootnotes,
} from "./processHtml.js";
import { Metadata } from "./Metadata.js";
import { CheerioDoc } from "../testUtils.js";

test.describe("loadImages()", () => {
  test("normal file", () => {
    const doc = CheerioDoc.load(
      `<img src="../_static/logo.png" alt="Logo"><img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(doc.$, doc.$main, "/my-images", false, false);
    expect(images).toEqual([
      {
        fileName: "logo.png",
        dest: "/my-images/logo.avif",
      },
      {
        fileName: "view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(
      `<img src="/my-images/logo.avif" alt="Logo"><img src="/my-images/view-page-source-icon.svg">`,
    );
  });

  test("release note - single release note file", () => {
    const doc = CheerioDoc.load(
      `<img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(doc.$, doc.$main, "/my-images/0.45", true, false);
    expect(images).toEqual([
      {
        fileName: "view-page-source-icon.svg",
        dest: "/my-images/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(`<img src="/my-images/view-page-source-icon.svg">`);
  });

  test("release note - separate release note files", () => {
    const doc = CheerioDoc.load(
      `<img src="../_static/images/view-page-source-icon.svg">`,
    );
    const images = loadImages(doc.$, doc.$main, "/my-images/0.45", true, true);
    expect(images).toEqual([
      {
        fileName: "view-page-source-icon.svg",
        dest: "/my-images/0.45/view-page-source-icon.svg",
      },
    ]);
    doc.expectHtml(`<img src="/my-images/0.45/view-page-source-icon.svg">`);
  });
});

test("handleSphinxDesignCards()", () => {
  const doc = CheerioDoc.load(`
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
  const doc = CheerioDoc.load(`<h1>Release Notes!!!</h1><h2>0.45.0</h2>`);
  renameAllH1s(doc.$, "New Title");
  doc.expectHtml(`<h1>New Title</h1><h2>0.45.0</h2>`);
});

test("removeHtmlExtensionsInRelativeLinks()", () => {
  const doc = CheerioDoc.load(
    `<a href="https://ibm.com"></a><a href="../foo.html"></a><a href="../img.svg"></a>`,
  );
  removeHtmlExtensionsInRelativeLinks(doc.$, doc.$main);
  doc.expectHtml(
    `<a href="https://ibm.com"></a><a href="../foo"></a><a href="../img.svg"></a>`,
  );
});

test("removeDownloadSourceCode()", () => {
  const doc = CheerioDoc.load(
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
  const doc = CheerioDoc.load(`<a title="okay">Link</a>
    <a title="Permalink to this headline">Link</a>
    <a title="Permalink to this heading">Link</a>
    <a title="Permalink to this definition">Link</a>
    <a title="Link to this heading">Link</a>
    <a title="Link to this definition">Link</a>`);
  removePermalinks(doc.$main);
  doc.expectHtml(`<a title="okay">Link</a>`);
});

test("removeColonSpans()", () => {
  const doc = CheerioDoc.load(
    `<dt class="field-odd">Parameters<span class="colon">:</span></dt>`,
  );
  removeColonSpans(doc.$main);
  doc.expectHtml(`<dt class="field-odd">Parameters</dt>`);
});

test.describe("removeMatplotlibFigCaptions()", () => {
  test("removes <figcaption>", () => {
    const doc = CheerioDoc.load(`
    <figure class="align-default" id="id1">
      <img alt="../_images/fake_provider-1_00.png" class="plot-directive" src="../_images/fake_provider-1_00.png" />
      <figcaption>
        <p>
          <span class="caption-number">Fig. 1 </span>
          <span class="caption-text">
              (
              <a class="reference download internal" download="" href="../_downloads/a640acbc08577560dc62a3c02c6ca2ac/fake_provider-1_00.png">
                  <code class="xref download docutils literal notranslate"><span class="pre">png</span></code>
              </a>
              ,
              <a class="reference download internal" download="" href="../_downloads/98e08086a49350bea51e64248343d7ac/fake_provider-1_00.hires.png">
                  <code class="xref download docutils literal notranslate"><span class="pre">hires.png</span></code>
              </a>
              ,
              <a class="reference download internal" download="" href="../_downloads/684bf35d507376624fcead10d9aedaed/fake_provider-1_00.pdf">
                  <code class="xref download docutils literal notranslate"><span class="pre">pdf</span></code>
              </a>
              )
          </span>
          <a class="headerlink" href="#id1" title="Link to this image">¶</a>
        </p>
      </figcaption>
    </figure>
  `);
    removeMatplotlibFigCaptions(doc.$main);
    doc.expectHtml(`
    <figure class="align-default" id="id1">
      <img alt="../_images/fake_provider-1_00.png" class="plot-directive" src="../_images/fake_provider-1_00.png">
      
    </figure>
  `);
  });

  test("removes <div>", () => {
    const doc = CheerioDoc.load(`
    <div class="figure align-default" id="id1">
      <img alt="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png" class="plot-directive" src="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png" />
      <p class="caption">
        <span class="caption-number">Fig. 23 </span>
        <span class="caption-text">
            (
            <a class="reference download internal" download="" href="../_downloads/dc45751fb822be8815f217a267bae356/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png">
                <code class="xref download docutils literal notranslate"><span class="pre">png</span></code>
            </a>
            ,
            <a class="reference download internal" download="" href="../_downloads/16422e7545ee14003706693459de64e2/qiskit-transpiler-passes-DynamicalDecoupling-1_00.hires.png">
                <code class="xref download docutils literal notranslate"><span class="pre">hires.png</span></code>
            </a>
            ,
            <a class="reference download internal" download="" href="../_downloads/e872644fa4d73ec0d7933d354c8b5059/qiskit-transpiler-passes-DynamicalDecoupling-1_00.pdf">
                <code class="xref download docutils literal notranslate"><span class="pre">pdf</span></code>
            </a>
            )
        </span>
        <a class="headerlink" href="#id1" title="Permalink to this image">¶</a>
      </p>
    </div>
   `);
    removeMatplotlibFigCaptions(doc.$main);
    doc.expectHtml(`
     <div class="figure align-default" id="id1">
      <img alt="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png" class="plot-directive" src="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png">
      
    </div>
  `);
  });

  test("ignores non-matches", () => {
    const html = `
    <figure class="align-default" id="id1">
      <img alt="../_images/fake_provider-1_00.png" class="plot-directive" src="../_images/fake_provider-1_00.png">
      <figcaption><p>My caption</p>
      </figcaption>
    </figure>

    <div class="figure align-default" id="id1">
      <img alt="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png" class="plot-directive" src="../_images/qiskit-transpiler-passes-DynamicalDecoupling-1_00.png">
      <p>My caption</p>
    </div>
  `;
    const doc = CheerioDoc.load(html);
    removeMatplotlibFigCaptions(doc.$main);
    doc.expectHtml(html);
  });
});

test("addLanguageClassToCodeBlocks()", () => {
  const doc1 = CheerioDoc.load(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </pre></div>
    </div>`);
  // TODO(EA): This behavior is bad. We shouldn't be setting the language as Python because it's not always correct, such
  // as with this example. Also this name is misleading. Really what we are doing here is dealing with RST's `.. parsed-literal ::`
  // (https://docutils.sourceforge.io/docs/ref/rst/directives.html#parsed-literal-block), which we tend to use to put code literals
  // along with gate text representations like the above.
  addLanguageClassToCodeBlocks(doc1.$, doc1.$main, { isCApi: false });
  doc1.expectHtml(`<p><strong>Circuit symbol:</strong></p>
    <div class="highlight-default notranslate"><div class="highlight"><pre><code class="language-python"><span></span>     ┌──────────┐
    q_0: ┤ U(ϴ,φ,λ) ├
        └──────────┘
    </code></pre></div>
    </div>`);

  const doc2 = CheerioDoc.load(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </pre>
      </div>
    </div>`);
  addLanguageClassToCodeBlocks(doc2.$, doc2.$main, { isCApi: false });
  doc2.expectHtml(`<div class="highlight-default notranslate">
      <div class="highlight">
      <pre><code class="language-python"><span></span><span class="kn">from</span> <span class="nn">qiskit_ibm_runtime.options</span> <span class="kn">import</span> <span class="n">Options</span>

      <span class="n">options</span> <span class="o">=</span> <span class="n">Options</span><span class="p">()</span>
      <span class="n">options</span><span class="o">.</span><span class="n">transpilation</span><span class="o">.</span><span class="n">initial_layout</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">]</span>  <span class="c1"># This an be done using auto-complete</span>
      </code></pre>
      </div>
    </div>`);
});

test("updateRedirectedExternalLinks()", () => {
  const redirects = {
    "https://ibm.com/old": "https://ibm.com/new",
    "https://basename.example-website.com/old#anchor?and=query":
      "https://newbasename.example.com/new#newanchor?query=new",
  };
  const doc = CheerioDoc.load(
    `<a href="https://ibm.com/old">https://ibm.com/old</a>
    <a href="https://ibm.com/old">https://ibm.com/old (v3)</a>
    <a href="https://ibm.com/old-but-not-redirected">https://ibm.com/old-but-not-redirected</a>
    <a href="https://ibm.com/old-but-not-redirected">https://ibm.com/old-but-not-redirected (v3)</a>
    <a href="https://ibm.com/old-but-not-redirected#anchor?and=query">https://ibm.com/old-but-not-redirected#anchor?and=query</a>
    <a href="https://basename.example-website.com/old#anchor?and=query"></a>
    <p>https://ibm.com/old</p>`,
  );
  updateRedirectedExternalLinks(doc.$, doc.$main, redirects);
  doc.expectHtml(
    `<a href="https://ibm.com/new">https://ibm.com/new</a>
    <a href="https://ibm.com/new">https://ibm.com/new (v3)</a>
    <a href="https://ibm.com/old-but-not-redirected">https://ibm.com/old-but-not-redirected</a>
    <a href="https://ibm.com/old-but-not-redirected">https://ibm.com/old-but-not-redirected (v3)</a>
    <a href="https://ibm.com/old-but-not-redirected#anchor?and=query">https://ibm.com/old-but-not-redirected#anchor?and=query</a>
    <a href="https://newbasename.example.com/new#newanchor?query=new"></a>
    <p>https://ibm.com/old</p>`,
  );
});

test("replaceSourceLinksWithGitHub()", () => {
  // Assumes that removeHtmlExtensionsInRelativeLinks() has already removed .html from the URL.
  const doc = CheerioDoc.load(
    `<a href="../_modules/my_quantum_project/my_file#IBMBackend"></a>
    <a class="reference external" href="https://github.com/Qiskit/qiskit/blob/stable/1.0/qiskit/utils/deprecation.py#L24-L101"></a>
    <a href="#my_quantum_project.IBMBackend"></a>`,
  );
  replaceViewcodeLinksWithGitHub(
    doc.$,
    doc.$main,
    (fileName) =>
      `https://github.com/Qiskit/my-project/tree/stable/0.9/${fileName}.py`,
  );
  doc.expectHtml(
    `<a href="https://github.com/Qiskit/my-project/tree/stable/0.9/my_quantum_project/my_file.py"></a>
    <a class="reference external" href="https://github.com/Qiskit/qiskit/blob/stable/1.0/qiskit/utils/deprecation.py#L24-L101"></a>
    <a href="#my_quantum_project.IBMBackend"></a>`,
  );
});

test("convertRubricsToHeaders()", () => {
  const doc = CheerioDoc.load(`<p class="rubric">Example</p>
    <p class="rubric">Examples</p>
    <p class="rubric">References</p>
    <p class="rubric">Reference</p>
    <p class="rubric">Simple examples</p>
    <p class="rubric" id="example-code">Example code</p>
    <p class="rubric">Attributes</p>
    <p class="rubric">Methods</p>`);
  convertRubricsToHeaders(doc.$, doc.$main);
  doc.expectHtml(`<strong>Example</strong>
    <strong>Examples</strong>
    <strong>References</strong>
    <strong>Reference</strong>
    <strong>Simple examples</strong>
    <span id="example-code" class="target"></span><strong>Example code</strong>
    <h2>Attributes</h2>
    <h2>Methods</h2>`);
});

test("handleFootnotes()", () => {
  const doc = CheerioDoc.load(`
    <p>All values use <a class="footnote-reference brackets" href="#f1" id="id2" role="doc-noteref"><span class="fn-bracket">[</span>1<span class="fn-bracket">]</span></a> (big endian) for compatibility.</p>
    <aside class="footnote-list brackets">
    <aside class="footnote brackets" id="f1" role="doc-footnote">
    <span class="label"><span class="fn-bracket">[</span><a role="doc-backlink" href="#id2">1</a><span class="fn-bracket">]</span></span></aside></aside>`);
  handleFootnotes(doc.$, doc.$main);
  doc.expectHtml(`
    <p>All values use <span id="id2" class="target"></span><a class="footnote-reference brackets" href="#f1" id="id2" role="doc-noteref"><span class="fn-bracket">[</span>1<span class="fn-bracket">]</span></a> (big endian) for compatibility.</p>
    <aside class="footnote-list brackets">
    <span id="f1" class="target"></span><aside class="footnote brackets" id="f1" role="doc-footnote">
    <span class="label"><span class="fn-bracket">[</span><a role="doc-backlink" href="#id2">1</a><span class="fn-bracket">]</span></span></aside></aside>`);
});

test.describe("maybeSetPythonModuleMetadata()", () => {
  test("not a module", () => {
    const html = `<h1>Hello</h1>`;
    const meta: Metadata = {};
    const doc = CheerioDoc.load(html);
    maybeSetPythonModuleMetadata(doc.$, doc.$main, meta);
    doc.expectHtml(html);
    expect(meta).toEqual({});
  });

  const checkModuleFound = (
    html: string,
    name: string,
    isCApi: boolean = false,
  ): void => {
    const meta: Metadata = {};
    const doc = CheerioDoc.load(html);
    maybeSetPythonModuleMetadata(doc.$, doc.$main, meta);
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

test.describe("processMembersAndSetMeta()", () => {
  test("function with added heading", async () => {
    const html = `<h1>Circuit Converters</h1>
<dl class="py function">
<dt class="sig sig-object py" id="qiskit.converters.circuit_to_dag">
<span class="sig-prename descclassname"><span class="pre">qiskit.converters.</span></span><span class="sig-name descname"><span class="pre">circuit_to_dag</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">circuit</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">copy_operations</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">True</span></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbit_order</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit/converters/circuit_to_dag.html#circuit_to_dag"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.converters.circuit_to_dag" title="Permalink to this definition">¶</a></dt>
<dd><p>Build a <a class="reference internal" href="../stubs/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit" title="qiskit.dagcircuit.DAGCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">DAGCircuit</span></code></a> object from a <a class="reference internal" href="../stubs/qiskit.circuit.QuantumCircuit.html#qiskit.circuit.QuantumCircuit" title="qiskit.circuit.QuantumCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">QuantumCircuit</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>circuit</strong> – the input circuit.</p></li>
<li><p><strong>copy_operations</strong> – Deep copy the operation objects in the QuantumCircuit for the output DAGCircuit.</p></li>
</ul>
</dd>`;
    const doc = CheerioDoc.load(html);
    const meta: Metadata = {};
    await processMembersAndSetMeta(doc.$, doc.$main, meta, { isCApi: false });
    doc.expectHtml(`      <h1>Circuit Converters</h1>
<h3 data-header-type="method-header">circuit_to_dag</h3><div><function id="qiskit.converters.circuit_to_dag" attributetypehint="undefined" attributevalue="undefined" isdedicatedpage="undefined" github="../_modules/qiskit/converters/circuit_to_dag.html#circuit_to_dag" signature="qiskit.converters.circuit_to_dag(circuit, copy_operations=True, *, qubit_order=None, clbit_order=None)¶" modifiers="" extrasignatures="[]">
  
<div><p>Build a <a class="reference internal" href="../stubs/qiskit.dagcircuit.DAGCircuit.html#qiskit.dagcircuit.DAGCircuit" title="qiskit.dagcircuit.DAGCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">DAGCircuit</span></code></a> object from a <a class="reference internal" href="../stubs/qiskit.circuit.QuantumCircuit.html#qiskit.circuit.QuantumCircuit" title="qiskit.circuit.QuantumCircuit"><code class="xref py py-class docutils literal notranslate"><span class="pre">QuantumCircuit</span></code></a>.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>circuit</strong> – the input circuit.</p></li>
<li><p><strong>copy_operations</strong> – Deep copy the operation objects in the QuantumCircuit for the output DAGCircuit.</p></li>
</ul>
</dd></dl></div>
</function></div>`);
    expect(meta).toEqual({
      apiType: "function",
      apiName: "qiskit.converters.circuit_to_dag",
    });
  });

  test("function without added heading", async () => {
    const html = `<h1>least_busy</h1>
<dl class="py function">
<dt class="sig sig-object py" id="qiskit_ibm_provider.least_busy">
<span class="sig-name descname"><span class="pre">least_busy</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">backends</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit_ibm_provider.html#least_busy"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.least_busy" title="Link to this definition">¶</a></dt>
<dd><p>Return the least busy backend from a list.</p>
<p>Return the least busy available backend for those that
have a <code class="docutils literal notranslate"><span class="pre">pending_jobs</span></code> in their <code class="docutils literal notranslate"><span class="pre">status</span></code>. Note that local
backends may not have this attribute.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>backends</strong> (<code class="xref py py-class docutils literal notranslate"><span class="pre">List</span></code>[<a class="reference external" href="https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend" title="(in Qiskit v0.45)"><code class="xref py py-class docutils literal notranslate"><span class="pre">Backend</span></code></a>]) – The backends to choose from.</p>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference external" href="https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend" title="(in Qiskit v0.45)"><code class="xref py py-class docutils literal notranslate"><span class="pre">Backend</span></code></a></p>
</dd>
<dt class="field-odd">Returns<span class="colon">:</span></dt>
<dd class="field-odd"><p>The backend with the fewest number of pending jobs.</p>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><a class="reference internal" href="qiskit_ibm_provider.IBMError.html#qiskit_ibm_provider.IBMError" title="qiskit_ibm_provider.IBMError"><strong>IBMError</strong></a> – If the backends list is empty, or if none of the backends
    is available, or if a backend in the list
    does not have the <code class="docutils literal notranslate"><span class="pre">pending_jobs</span></code> attribute in its status.</p>
</dd>
</dl>
</dd></dl>
`;
    const doc = CheerioDoc.load(html);
    const meta: Metadata = {};
    await processMembersAndSetMeta(doc.$, doc.$main, meta, { isCApi: false });
    doc.expectHtml(`<h1>least_busy</h1>
<div><function id="qiskit_ibm_provider.least_busy" attributetypehint="undefined" attributevalue="undefined" isdedicatedpage="true" github="../_modules/qiskit_ibm_provider.html#least_busy" signature="least_busy(backends)¶" modifiers="" extrasignatures="[]">
  
<div><p>Return the least busy backend from a list.</p>
<p>Return the least busy available backend for those that
have a <code class=\"docutils literal notranslate\"><span class=\"pre\">pending_jobs</span></code> in their <code class=\"docutils literal notranslate\"><span class=\"pre\">status</span></code>. Note that local
backends may not have this attribute.</p>
<dl class=\"field-list simple\">
<dt class=\"field-odd\">Parameters<span class=\"colon\">:</span></dt>
<dd class=\"field-odd\"><p><strong>backends</strong> (<code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">List</span></code>[<a class=\"reference external\" href=\"https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend\" title=\"(in Qiskit v0.45)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Backend</span></code></a>]) – The backends to choose from.</p>
</dd>
<dt class=\"field-even\">Return type<span class=\"colon\">:</span></dt>
<dd class=\"field-even\"><p><a class=\"reference external\" href=\"https://qiskit.org/documentation/stubs/qiskit.providers.Backend.html#qiskit.providers.Backend\" title=\"(in Qiskit v0.45)\"><code class=\"xref py py-class docutils literal notranslate\"><span class=\"pre\">Backend</span></code></a></p>
</dd>
<dt class=\"field-odd\">Returns<span class=\"colon\">:</span></dt>
<dd class=\"field-odd\"><p>The backend with the fewest number of pending jobs.</p>
</dd>
<dt class=\"field-even\">Raises<span class=\"colon\">:</span></dt>
<dd class=\"field-even\"><p><a class=\"reference internal\" href=\"qiskit_ibm_provider.IBMError.html#qiskit_ibm_provider.IBMError\" title=\"qiskit_ibm_provider.IBMError\"><strong>IBMError</strong></a> – If the backends list is empty, or if none of the backends
    is available, or if a backend in the list
    does not have the <code class=\"docutils literal notranslate\"><span class=\"pre\">pending_jobs</span></code> attribute in its status.</p>
</dd>
</dl>
</div>
</function></div>`);
    expect(meta).toEqual({
      apiType: "function",
      apiName: "qiskit_ibm_provider.least_busy",
    });
  });

  test("exception with added heading", async () => {
    const html = `<span class="target" id="module-qiskit.exceptions"><span id="qiskit-exceptions"></span></span><section id="top-level-exceptions-qiskit-exceptions">
<h1>Top-level exceptions (<a class="reference internal" href="#module-qiskit.exceptions" title="qiskit.exceptions"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.exceptions</span></code></a>)<a class="headerlink" href="#top-level-exceptions-qiskit-exceptions" title="Permalink to this heading">¶</a></h1>
<p>All Qiskit-related errors raised by Qiskit are subclasses of the base:</p>
<dl class="py exception">
<dt class="sig sig-object py" id="qiskit.exceptions.QiskitError">
<em class="property"><span class="pre">exception</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.exceptions.</span></span><span class="sig-name descname"><span class="pre">QiskitError</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="o"><span class="pre">*</span></span><span class="n"><span class="pre">message</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit/exceptions.html#QiskitError"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.exceptions.QiskitError" title="Permalink to this definition">¶</a></dt>
<dd><p>Base class for errors raised by Qiskit.</p>
<p>Set the error message.</p>
</dd></dl>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Errors that are just general programming errors, such as incorrect typing, may still raise
standard Python errors such as <code class="docutils literal notranslate"><span class="pre">TypeError</span></code>.  <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a> is generally for errors raised
in usage that is particular to Qiskit.</p>
</div>
<p>Many of the Qiskit subpackages define their own more granular error, to help in catching only the
subset of errors you care about.  For example, <a class="reference internal" href="circuit.html#module-qiskit.circuit" title="qiskit.circuit"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.circuit</span></code></a> almost exclusively uses
<a class="reference internal" href="circuit.html#qiskit.circuit.CircuitError" title="qiskit.circuit.CircuitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">CircuitError</span></code></a>, while both <a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2ExportError" title="qiskit.qasm2.QASM2ExportError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2ExportError</span></code></a> and <a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2ParseError" title="qiskit.qasm2.QASM2ParseError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2ParseError</span></code></a> derive from
<a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2Error" title="qiskit.qasm2.QASM2Error"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2Error</span></code></a> in <a class="reference internal" href="qasm2.html#module-qiskit.qasm2" title="qiskit.qasm2"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.qasm2</span></code></a>, which is in turn a type of <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a>.</p>
<p>Qiskit has several optional features that depend on other packages that are not required for a
minimal install.  You can read more about those, and ways to check for their presence, in
<a class="reference internal" href="utils.html#module-qiskit.utils.optionals" title="qiskit.utils.optionals"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.utils.optionals</span></code></a>.  Trying to use a feature that requires an optional extra will raise a
particular error, which subclasses both <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a> and the Python built-in <code class="docutils literal notranslate"><span class="pre">ImportError</span></code>.</p>
</section>
`;
    const doc = CheerioDoc.load(html);
    const meta: Metadata = {};
    await processMembersAndSetMeta(doc.$, doc.$main, meta, { isCApi: false });
    doc.expectHtml(`<span class="target" id="module-qiskit.exceptions"><span id="qiskit-exceptions"></span></span><section id="top-level-exceptions-qiskit-exceptions">
<h1>Top-level exceptions (<a class="reference internal" href="#module-qiskit.exceptions" title="qiskit.exceptions"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.exceptions</span></code></a>)<a class="headerlink" href="#top-level-exceptions-qiskit-exceptions" title="Permalink to this heading">¶</a></h1>
<p>All Qiskit-related errors raised by Qiskit are subclasses of the base:</p>
<h3 data-header-type="class-header">QiskitError</h3><div><class id="qiskit.exceptions.QiskitError" attributetypehint="undefined" attributevalue="undefined" isdedicatedpage="undefined" github="../_modules/qiskit/exceptions.html#QiskitError" signature="qiskit.exceptions.QiskitError(*message)¶" modifiers="exception" extrasignatures="[]">
  
<div><p>Base class for errors raised by Qiskit.</p>
<p>Set the error message.</p>
</div>
</class></div>
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Errors that are just general programming errors, such as incorrect typing, may still raise
standard Python errors such as <code class="docutils literal notranslate"><span class="pre">TypeError</span></code>.  <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a> is generally for errors raised
in usage that is particular to Qiskit.</p>
</div>
<p>Many of the Qiskit subpackages define their own more granular error, to help in catching only the
subset of errors you care about.  For example, <a class="reference internal" href="circuit.html#module-qiskit.circuit" title="qiskit.circuit"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.circuit</span></code></a> almost exclusively uses
<a class="reference internal" href="circuit.html#qiskit.circuit.CircuitError" title="qiskit.circuit.CircuitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">CircuitError</span></code></a>, while both <a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2ExportError" title="qiskit.qasm2.QASM2ExportError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2ExportError</span></code></a> and <a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2ParseError" title="qiskit.qasm2.QASM2ParseError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2ParseError</span></code></a> derive from
<a class="reference internal" href="qasm2.html#qiskit.qasm2.QASM2Error" title="qiskit.qasm2.QASM2Error"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QASM2Error</span></code></a> in <a class="reference internal" href="qasm2.html#module-qiskit.qasm2" title="qiskit.qasm2"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.qasm2</span></code></a>, which is in turn a type of <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a>.</p>
<p>Qiskit has several optional features that depend on other packages that are not required for a
minimal install.  You can read more about those, and ways to check for their presence, in
<a class="reference internal" href="utils.html#module-qiskit.utils.optionals" title="qiskit.utils.optionals"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit.utils.optionals</span></code></a>.  Trying to use a feature that requires an optional extra will raise a
particular error, which subclasses both <a class="reference internal" href="#qiskit.exceptions.QiskitError" title="qiskit.exceptions.QiskitError"><code class="xref py py-exc docutils literal notranslate"><span class="pre">QiskitError</span></code></a> and the Python built-in <code class="docutils literal notranslate"><span class="pre">ImportError</span></code>.</p>
</section>
`);
    expect(meta).toEqual({
      apiName: "qiskit.exceptions.QiskitError",
      apiType: "exception",
    });
  });

  test("data", async () => {
    const html = `
<dl class="py data">
<dt class="sig sig-object py" id="qiskit.qasm2.LEGACY_CUSTOM_INSTRUCTIONS">
<span class="sig-prename descclassname"><span class="pre">qiskit.qasm2.</span></span><span class="sig-name descname"><span class="pre">LEGACY_CUSTOM_INSTRUCTIONS</span></span><a class="headerlink" href="#qiskit.qasm2.LEGACY_CUSTOM_INSTRUCTIONS" title="Permalink to this definition">¶</a></dt>
<dd><p>A tuple containing the extra <cite>custom_instructions</cite> that Qiskit’s legacy built-in converters used
if <code class="docutils literal notranslate"><span class="pre">qelib1.inc</span></code> is included, and there is any definition of a <code class="docutils literal notranslate"><span class="pre">delay</span></code> instruction.  The gates
in the paper version of <code class="docutils literal notranslate"><span class="pre">qelib1.inc</span></code> and <code class="docutils literal notranslate"><span class="pre">delay</span></code> all require a compatible declaration
statement to be present within the OpenQASM 2 program, but Qiskit’s legacy additions are all
marked as builtins since they are not actually present in any include file this parser sees.</p>
</dd></dl>
`;
    const doc = CheerioDoc.load(html);
    const meta: Metadata = { apiType: "module", apiName: "my_module" };
    await processMembersAndSetMeta(doc.$, doc.$main, meta, { isCApi: false });
    doc.expectHtml(`
<h3 data-header-type="attribute-header">qiskit.qasm2.LEGACY_CUSTOM_INSTRUCTIONS¶</h3><div><attribute id="qiskit.qasm2.LEGACY_CUSTOM_INSTRUCTIONS" attributetypehint="" attributevalue="" isdedicatedpage="undefined" github="undefined" signature="" modifiers="" extrasignatures="[]">
  
<div><p>A tuple containing the extra <cite>custom_instructions</cite> that Qiskit’s legacy built-in converters used
if <code class="docutils literal notranslate"><span class="pre">qelib1.inc</span></code> is included, and there is any definition of a <code class="docutils literal notranslate"><span class="pre">delay</span></code> instruction.  The gates
in the paper version of <code class="docutils literal notranslate"><span class="pre">qelib1.inc</span></code> and <code class="docutils literal notranslate"><span class="pre">delay</span></code> all require a compatible declaration
statement to be present within the OpenQASM 2 program, but Qiskit’s legacy additions are all
marked as builtins since they are not actually present in any include file this parser sees.</p>
</div>
</attribute></div>
`);
    expect(meta).toEqual({
      apiName: "my_module",
      apiType: "module",
    });
  });

  test("C API function ID", async () => {
    const html = `<dl class="cpp function">
<dt class="sig sig-object cpp" id="_CPPv415qk_obs_identity8uint32_t">
<span id="_CPPv315qk_obs_identity8uint32_t"></span><span id="_CPPv215qk_obs_identity8uint32_t"></span><span id="qk_obs_identity__uint32_t"></span><span class="target" id="group__QkSparseObservable_1ga535fe356c00797365924811926b0ce37"></span><span class="n"><span class="pre">QkSparseObservable</span></span><span class="w"> </span><span class="p"><span class="pre">*</span></span><span class="sig-name descname"><span class="n"><span class="pre">qk_obs_identity</span></span></span><span class="sig-paren">(</span><span class="n"><span class="pre">uint32_t</span></span><span class="w"> </span><span class="n sig-param"><span class="pre">num_qubits</span></span><span class="sig-paren">)</span><a class="headerlink" href="#_CPPv415qk_obs_identity8uint32_t" title="Permalink to this definition">¶</a><br /></dt>
<dd><p>Construct the identity observable.</p>
<section id="group__QkSparseObservable_1autotoc_md4">
<h2>Example<a class="headerlink" href="#group__QkSparseObservable_1autotoc_md4" title="Permalink to this heading">¶</a></h2>
<div class="highlight-default notranslate" id="group__QkSparseObservable_1autotoc_md4"><div class="highlight"><pre><span></span><span class="n">QkSparseObservable</span> <span class="o">*</span><span class="n">identity</span> <span class="o">=</span> <span class="n">qk_obs_identity</span><span class="p">(</span><span class="mi">100</span><span class="p">);</span>
</pre></div>
</div>
</section>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><p><strong>num_qubits</strong> – The number of qubits the observable is defined on.</p>
</dd>
<dt class="field-even">Returns<span class="colon">:</span></dt>
<dd class="field-even"><p>A pointer to the created observable.</p>
</dd>
</dl>
</dd></dl>`;
    const doc = CheerioDoc.load(html);
    const meta: Metadata = {};
    await processMembersAndSetMeta(doc.$, doc.$main, meta, { isCApi: true });
    doc.expectHtml(`<h3 data-header-type=\"method-header\">qk_obs_identity</h3><div><function id=\"qk_obs_identity\" attributetypehint=\"undefined\" attributevalue=\"undefined\" isdedicatedpage=\"undefined\" github=\"undefined\" signature=\"QkSparseObservable *qk_obs_identity(uint32_t num_qubits)¶\" modifiers=\"\" extrasignatures=\"[]\">
  
<div><p>Construct the identity observable.</p>
<section id=\"group__QkSparseObservable_1autotoc_md4\">
<h4>Example<a class=\"headerlink\" href=\"#group__QkSparseObservable_1autotoc_md4\" title=\"Permalink to this heading\">¶</a></h4>
<div class=\"highlight-default notranslate\" id=\"group__QkSparseObservable_1autotoc_md4\"><div class=\"highlight\"><pre><span></span><span class=\"n\">QkSparseObservable</span> <span class=\"o\">*</span><span class=\"n\">identity</span> <span class=\"o\">=</span> <span class=\"n\">qk_obs_identity</span><span class=\"p\">(</span><span class=\"mi\">100</span><span class=\"p\">);</span>
</pre></div>
</div>
</section>
<dl class=\"field-list simple\">
<dt class=\"field-odd\">Parameters<span class=\"colon\">:</span></dt>
<dd class=\"field-odd\"><p><strong>num_qubits</strong> – The number of qubits the observable is defined on.</p>
</dd>
<dt class=\"field-even\">Returns<span class=\"colon\">:</span></dt>
<dd class=\"field-even\"><p>A pointer to the created observable.</p>
</dd>
</dl>
</div>
</function></div>`);
    expect(meta).toEqual({
      apiType: "function",
      apiName: "qk_obs_identity",
    });
  });
});
