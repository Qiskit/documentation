// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { describe, test, expect } from "@jest/globals";
import { sphinxHtmlToMarkdown } from "./sphinxHtmlToMarkdown";

describe("sphinxHtmlToMarkdown", () => {
  test("remove .html extension from relative links", async () => {
    expect(
      await toMd(`<div
  role='main'
  class='main-content'
  itemscope='itemscope'
  itemtype='http://schema.org/Article'
>
  <article itemprop='articleBody' id='pytorch-article' class='pytorch-article'>
    <section id='qiskit-ibm-runtime-api-reference'>
      <h1>
        qiskit-ibm-runtime API reference<a
        class='headerlink'
        href='#qiskit-ibm-runtime-api-reference'
        title='Permalink to this heading'
      >¶</a
      >
      </h1>
      <div class='toctree-wrapper compound'>
        <ul>
          <li class='toctree-l1'>
            <a class='reference internal' href='runtime_service.html'
            >Qiskit Runtime (<code
              class='xref py py-mod docutils literal notranslate'
            ><span class='pre'>qiskit_ibm_runtime</span></code
            >)</a
            >
          </li>
          <li class='toctree-l1'>
            <a class='reference internal' href='options.html'
            >Primitive options (<code
              class='xref py py-mod docutils literal notranslate'
            ><span class='pre'>qiskit_ibm_runtime.options</span></code
            >)</a
            >
          </li>
        </ul>
      </div>
    </section>
  </article>
</div>`),
    ).toMatchInlineSnapshot(`
      "<span id="qiskit-ibm-runtime-api-reference" />

      # qiskit-ibm-runtime API reference

      *   [Qiskit Runtime (\`qiskit_ibm_runtime\`)](runtime_service)
      *   [Primitive options (\`qiskit_ibm_runtime.options\`)](options)
      "
    `);
  });

  test("remove permalink", async () => {
    expect(
      await toMd(`<article role="main">
        <section id="qiskit-ibm-runtime-api-reference">
          <h1>qiskit-ibm-runtime API reference<a class="headerlink" href="#qiskit-ibm-runtime-api-reference" title="Link to this heading">#</a></h1>
         <div class="toctree-wrapper compound">
           <ul>
             <li class="toctree-l1"><a class="reference internal" href="runtime_service.html">Qiskit Runtime (<code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit_ibm_runtime</span></code>)</a></li>
             <li class="toctree-l1"><a class="reference internal" href="options.html">Primitive options (<code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit_ibm_runtime.options</span></code>)</a></li>
           </ul>
         </div>
       </section>
    </article>`),
    ).toMatchInlineSnapshot(`
      "<span id="qiskit-ibm-runtime-api-reference" />

      # qiskit-ibm-runtime API reference

      *   [Qiskit Runtime (\`qiskit_ibm_runtime\`)](runtime_service)
      *   [Primitive options (\`qiskit_ibm_runtime.options\`)](options)
      "
    `);
  });

  test("remove download links", async () => {
    expect(
      await toMd(`<div
  role='main'
  class='main-content'
  itemscope='itemscope'
  itemtype='http://schema.org/Article'
>
  <p>(<a class="reference download internal" download="" href="../_downloads/366189d70d6a05b2c91f442d20ba6114/qiskit-circuit-QuantumCircuit-1.py"><code class="xref download docutils literal notranslate"><span class="pre">Source</span> <span class="pre">code</span></code></a>)</p>
</div>
`),
    ).toMatchInlineSnapshot(`""`);
  });

  test("extract images", async () => {
    expect(
      await sphinxHtmlToMarkdown({
        html: `
           <div role='main'>
            <img src="foo.png"/>
            <img src="http://google.com/bar.png"/>
           </div>
          `,
        url: "http://qiskit.org/docs/quantum-circuit.html",
        imageDestination: "/images/qiskit",
      }),
    ).toMatchInlineSnapshot(`
        {
          "images": [
            {
              "dest": "/images/qiskit/foo.png",
              "src": "http://qiskit.org/docs/foo.png",
            },
            {
              "dest": "/images/qiskit/bar.png",
              "src": "http://google.com/bar.png",
            },
          ],
          "isReleaseNotes": false,
          "markdown": "![](/images/qiskit/foo.png) ![](/images/qiskit/bar.png)
        ",
          "meta": {},
        }
      `);
  });

  test("handle tabs", async () => {
    expect(
      await toMd(`<div role='main'>
  <details
    class='sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down'
  >
    <summary class='sd-summary-title sd-card-header'>
      Account initialization
      <div class='sd-summary-down docutils'>
        <svg
          version='1.1'
          width='1.5em'
          height='1.5em'
          class='sd-octicon sd-octicon-chevron-down'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fill-rule='evenodd'
            d='M5.22 8.72a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 00-1.06-1.06L12 14.44 6.28 8.72a.75.75 0 00-1.06 0z'
          ></path>
        </svg>
      </div>
      <div class='sd-summary-up docutils'>
        <svg
          version='1.1'
          width='1.5em'
          height='1.5em'
          class='sd-octicon sd-octicon-chevron-up'
          viewBox='0 0 24 24'
          aria-hidden='true'
        >
          <path
            fill-rule='evenodd'
            d='M18.78 15.28a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06L12 9.56l5.72 5.72a.75.75 0 001.06 0z'
          ></path>
        </svg>
      </div>
    </summary>
    <div class='sd-summary-content sd-card-body docutils'>
      <blockquote>
        <div>
          <p class='sd-card-text'>
            You need to initialize your account before you can start using the
            Qiskit Runtime service. This is done by initializing a
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.QiskitRuntimeService.html#qiskit_ibm_runtime.QiskitRuntimeService'
              title='qiskit_ibm_runtime.QiskitRuntimeService'
            ><code class='xref py py-class docutils literal notranslate'
            ><span class='pre'>QiskitRuntimeService</span></code
            ></a
            >
            instance with your account credentials. If you don’t want to pass in
            the credentials each time, you can use the
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.QiskitRuntimeService.save_account.html#qiskit_ibm_runtime.QiskitRuntimeService.save_account'
              title='qiskit_ibm_runtime.QiskitRuntimeService.save_account'
            ><code class='xref py py-meth docutils literal notranslate'
            ><span class='pre'
            >QiskitRuntimeService.save_account()</span
            ></code
            ></a
            >
            method to save the credentials on disk.
          </p>
          <p class='sd-card-text'>
            Qiskit Runtime is available on both IBM Cloud and IBM Quantum, and
            you can specify
            <code class='docutils literal notranslate'
            ><span class='pre'>channel=&quot;ibm_cloud&quot;</span></code
            >
            for IBM Cloud and
            <code class='docutils literal notranslate'
            ><span class='pre'>channel=&quot;ibm_quantum&quot;</span></code
            >
            for IBM Quantum. The default is IBM Cloud.
          </p>
        </div>
      </blockquote>
    </div>
  </details>
</div>
`),
    ).toMatchInlineSnapshot(`
              "### Account initialization

              You need to initialize your account before you can start using the Qiskit Runtime service. This is done by initializing a [\`QiskitRuntimeService\`](../stubs/qiskit_ibm_runtime.QiskitRuntimeService#qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") instance with your account credentials. If you don’t want to pass in the credentials each time, you can use the [\`QiskitRuntimeService.save_account()\`](../stubs/qiskit_ibm_runtime.QiskitRuntimeService.save_account#qiskit_ibm_runtime.QiskitRuntimeService.save_account "qiskit_ibm_runtime.QiskitRuntimeService.save_account") method to save the credentials on disk.

              Qiskit Runtime is available on both IBM Cloud and IBM Quantum, and you can specify \`channel="ibm_cloud"\` for IBM Cloud and \`channel="ibm_quantum"\` for IBM Quantum. The default is IBM Cloud.
              "
          `);
  });

  test("handle tables", async () => {
    expect(
      await toMd(`
<div role='main'>
  <table class='autosummary longtable docutils align-default'>
    <tbody>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.QiskitRuntimeService.html#qiskit_ibm_runtime.QiskitRuntimeService'
              title='qiskit_ibm_runtime.QiskitRuntimeService'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>QiskitRuntimeService</span></code
              ></a
            >([channel, auth, token, ...])
          </p>
        </td>
        <td><p>Class for interacting with the Qiskit Runtime service.</p></td>
      </tr>
      <tr class='row-even'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.Estimator.html#qiskit_ibm_runtime.Estimator'
              title='qiskit_ibm_runtime.Estimator'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>Estimator</span></code
              ></a
            >([circuits, observables, ...])
          </p>
        </td>
        <td>
          <p>
            Class for interacting with Qiskit Runtime Estimator primitive
            service.
          </p>
        </td>
      </tr>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.Sampler.html#qiskit_ibm_runtime.Sampler'
              title='qiskit_ibm_runtime.Sampler'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>Sampler</span></code
              ></a
            >([circuits, parameters, service, ...])
          </p>
        </td>
        <td>
          <p>
            Class for interacting with Qiskit Runtime Sampler primitive service.
          </p>
        </td>
      </tr>
      <tr class='row-even'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.Session.html#qiskit_ibm_runtime.Session'
              title='qiskit_ibm_runtime.Session'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>Session</span></code
              ></a
            >([service, backend, max_time])
          </p>
        </td>
        <td><p>Class for creating a flexible Qiskit Runtime session.</p></td>
      </tr>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.IBMBackend.html#qiskit_ibm_runtime.IBMBackend'
              title='qiskit_ibm_runtime.IBMBackend'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>IBMBackend</span></code
              ></a
            >(configuration, service, api_client)
          </p>
        </td>
        <td><p>Backend class interfacing with an IBM Quantum backend.</p></td>
      </tr>
      <tr class='row-even'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.RuntimeJob.html#qiskit_ibm_runtime.RuntimeJob'
              title='qiskit_ibm_runtime.RuntimeJob'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>RuntimeJob</span></code
              ></a
            >(backend, api_client, ...[, ...])
          </p>
        </td>
        <td><p>Representation of a runtime program execution.</p></td>
      </tr>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.RuntimeProgram.html#qiskit_ibm_runtime.RuntimeProgram'
              title='qiskit_ibm_runtime.RuntimeProgram'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>RuntimeProgram</span></code
              ></a
            >(program_name, program_id, ...)
          </p>
        </td>
        <td><p>Class representing program metadata.</p></td>
      </tr>
      <tr class='row-even'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.ParameterNamespace.html#qiskit_ibm_runtime.ParameterNamespace'
              title='qiskit_ibm_runtime.ParameterNamespace'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>ParameterNamespace</span></code
              ></a
            >(parameters)
          </p>
        </td>
        <td><p>A namespace for program parameters with validation.</p></td>
      </tr>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.RuntimeOptions.html#qiskit_ibm_runtime.RuntimeOptions'
              title='qiskit_ibm_runtime.RuntimeOptions'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>RuntimeOptions</span></code
              ></a
            >([backend, image, log_level, ...])
          </p>
        </td>
        <td>
          <p>Class for representing generic runtime execution options.</p>
        </td>
      </tr>
      <tr class='row-even'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.RuntimeEncoder.html#qiskit_ibm_runtime.RuntimeEncoder'
              title='qiskit_ibm_runtime.RuntimeEncoder'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>RuntimeEncoder</span></code
              ></a
            >(*[, skipkeys, ensure_ascii, ...])
          </p>
        </td>
        <td><p>JSON Encoder used by runtime service.</p></td>
      </tr>
      <tr class='row-odd'>
        <td>
          <p>
            <a
              class='reference internal'
              href='../stubs/qiskit_ibm_runtime.RuntimeDecoder.html#qiskit_ibm_runtime.RuntimeDecoder'
              title='qiskit_ibm_runtime.RuntimeDecoder'
              ><code class='xref py py-obj docutils literal notranslate'
                ><span class='pre'>RuntimeDecoder</span></code
              ></a
            >(*args, **kwargs)
          </p>
        </td>
        <td><p>JSON Decoder used by runtime service.</p></td>
      </tr>
    </tbody>
  </table>
</div>
    `),
    ).toMatchInlineSnapshot(`
              "|                                                                                                                                                                                            |                                                                        |
              | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
              | [\`QiskitRuntimeService\`](../stubs/qiskit_ibm_runtime.QiskitRuntimeService#qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService")(\\[channel, auth, token, ...]) | Class for interacting with the Qiskit Runtime service.                 |
              | [\`Estimator\`](../stubs/qiskit_ibm_runtime.Estimator#qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator")(\\[circuits, observables, ...])                                            | Class for interacting with Qiskit Runtime Estimator primitive service. |
              | [\`Sampler\`](../stubs/qiskit_ibm_runtime.Sampler#qiskit_ibm_runtime.Sampler "qiskit_ibm_runtime.Sampler")(\\[circuits, parameters, service, ...])                                            | Class for interacting with Qiskit Runtime Sampler primitive service.   |
              | [\`Session\`](../stubs/qiskit_ibm_runtime.Session#qiskit_ibm_runtime.Session "qiskit_ibm_runtime.Session")(\\[service, backend, max\\_time])                                                   | Class for creating a flexible Qiskit Runtime session.                  |
              | [\`IBMBackend\`](../stubs/qiskit_ibm_runtime.IBMBackend#qiskit_ibm_runtime.IBMBackend "qiskit_ibm_runtime.IBMBackend")(configuration, service, api\\_client)                                  | Backend class interfacing with an IBM Quantum backend.                 |
              | [\`RuntimeJob\`](../stubs/qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob")(backend, api\\_client, ...\\[, ...])                                    | Representation of a runtime program execution.                         |
              | [\`RuntimeProgram\`](../stubs/qiskit_ibm_runtime.RuntimeProgram#qiskit_ibm_runtime.RuntimeProgram "qiskit_ibm_runtime.RuntimeProgram")(program\\_name, program\\_id, ...)                      | Class representing program metadata.                                   |
              | [\`ParameterNamespace\`](../stubs/qiskit_ibm_runtime.ParameterNamespace#qiskit_ibm_runtime.ParameterNamespace "qiskit_ibm_runtime.ParameterNamespace")(parameters)                           | A namespace for program parameters with validation.                    |
              | [\`RuntimeOptions\`](../stubs/qiskit_ibm_runtime.RuntimeOptions#qiskit_ibm_runtime.RuntimeOptions "qiskit_ibm_runtime.RuntimeOptions")(\\[backend, image, log\\_level, ...])                   | Class for representing generic runtime execution options.              |
              | [\`RuntimeEncoder\`](../stubs/qiskit_ibm_runtime.RuntimeEncoder#qiskit_ibm_runtime.RuntimeEncoder "qiskit_ibm_runtime.RuntimeEncoder")(\\*\\[, skipkeys, ensure\\_ascii, ...])                  | JSON Encoder used by runtime service.                                  |
              | [\`RuntimeDecoder\`](../stubs/qiskit_ibm_runtime.RuntimeDecoder#qiskit_ibm_runtime.RuntimeDecoder "qiskit_ibm_runtime.RuntimeDecoder")(\\*args, \\*\\*kwargs)                                   | JSON Decoder used by runtime service.                                  |
              "
          `);
  });

  test("handle <", async () => {
    expect(
      await toMd(`
    <div role='main'>
    <p>For the full list of backend attributes, see the <cite>IBMBackend</cite> class documentation
&lt;<a class='reference external' href='https://qiskit.org/documentation/apidoc/providers_models.html'>https://qiskit.org/documentation/apidoc/providers_models.html</a>&gt;</p>
</p></li>

<dl class="py class">
<dt class="sig sig-object py" id="qiskit_ibm_runtime.options.Options">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">Options</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">optimization_level=None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">resilience_level=None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">max_execution_time=None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">transpilation=&lt;factory&gt;</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">resilience=&lt;factory&gt;</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">execution=&lt;factory&gt;</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">environment=&lt;factory&gt;</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">simulator=&lt;factory&gt;</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit_ibm_runtime/options/options.html#Options"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.options.Options" title="Permalink to this definition">¶</a></dt>
</dl>

    </div>
    `),
    ).toMatchInlineSnapshot(`
      "For the full list of backend attributes, see the IBMBackend class documentation \\<[https://qiskit.org/documentation/apidoc/providers\\_models.html](https://qiskit.org/documentation/apidoc/providers_models.html)>

      <span id="qiskit_ibm_runtime.options.Options" />

      \`Options(optimization_level=None, resilience_level=None, max_execution_time=None, transpilation=<factory>, resilience=<factory>, execution=<factory>, environment=<factory>, simulator=<factory>)\`
      "
    `);
  });

  test("handle {", async () => {
    expect(
      await toMd(`
    <div role='main'>
<p><strong>basis_fidelity</strong> (<em>dict</em><em> | </em><em>float</em>) – available strengths and fidelity of each.
Can be either (1) a dictionary mapping XX angle values to fidelity at that angle; or
(2) a single float f, interpreted as {pi: f, pi/2: f/2, pi/3: f/3}.</p>
    </div>
    `),
    ).toMatchInlineSnapshot(`
      "**basis\\_fidelity** (*dict | float*) – available strengths and fidelity of each. Can be either (1) a dictionary mapping XX angle values to fidelity at that angle; or (2) a single float f, interpreted as \\{pi: f, pi/2: f/2, pi/3: f/3}.
      "
    `);
  });

  test("translate codeblocks to code fences with lang python", async () => {
    expect(
      await toMd(`
    <div role='main'>
<pre><span></span><span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>b</span><span class='p'>:</span> <span class='n'>b</span><span class='o'>.</span><span class='n'>max_shots</span> <span class='o'>&gt;</span> <span class='mi'>50000</span><span class='p'>)</span>
<span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>x</span><span class='p'>:</span> <span class='p'>(</span><span class='s2'>&quot;rz&quot;</span> <span class='ow'>in</span> <span class='n'>x</span><span class='o'>.</span><span class='n'>basis_gates</span> <span class='p'>)</span>
</pre>
    </div>
    `),
    ).toMatchInlineSnapshot(`
              "\`\`\`python
              QiskitRuntimeService.backends(
                  filters=lambda b: b.max_shots > 50000)
              QiskitRuntimeService.backends(
                  filters=lambda x: ("rz" in x.basis_gates )
              \`\`\`
              "
          `);
  });

  test("convert source links", async () => {
    expect(
      (
        await sphinxHtmlToMarkdown({
          html: `<div role='main'>
<span class='sig-prename descclassname'><span class='pre'>IBMBackend.</span></span><span class='sig-name descname'><span class='pre'>control_channel</span></span><span class='sig-paren'>(</span><em class='sig-param'><span class='n'><span class='pre'>qubits</span></span></em><span class='sig-paren'>)</span><a class='reference internal' href='../_modules/qiskit_ibm_runtime/ibm_backend.html#IBMBackend.control_channel'><span class='viewcode-link'><span class='pre'>[source]</span></span></a><a class='headerlink' href='#qiskit_ibm_runtime.IBMBackend.control_channel' title='Permalink to this definition'>¶</a>
</div>
`,
          url: "https://qiskit.org/documentation/partners/qiskit_ibm_runtime/stubs/qiskit_ibm_runtime.Sampler.html",
          baseSourceUrl: `https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/`,
        })
      ).markdown,
    ).toMatchInlineSnapshot(`
              "IBMBackend.control\\_channel(*qubits*)[\\[source\\]](https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit_ibm_runtime/ibm_backend.py)
              "
          `);
  });

  test("convert class signature headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
<h1>Estimator<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
  <dl class='py class'>
    <dt class='sig sig-object py' id='qiskit_ibm_runtime.Sampler'>
      <em class='property'
      ><span class='pre'>class</span><span class='w'> </span></em
      ><span class='sig-name descname'><span class='pre'>Sampler</span></span
    ><span class='sig-paren'>(</span
    ><em class='sig-param'
    ><span class='n'><span class='pre'>circuits</span></span
    ><span class='o'><span class='pre'>=</span></span
    ><span class='default_value'><span class='pre'>None</span></span></em
    >,
      <em class='sig-param'
      ><span class='n'><span class='pre'>parameters</span></span
      ><span class='o'><span class='pre'>=</span></span
      ><span class='default_value'><span class='pre'>None</span></span></em
      >,
      <em class='sig-param'
      ><span class='n'><span class='pre'>service</span></span
      ><span class='o'><span class='pre'>=</span></span
      ><span class='default_value'><span class='pre'>None</span></span></em
      >,
      <em class='sig-param'
      ><span class='n'><span class='pre'>session</span></span
      ><span class='o'><span class='pre'>=</span></span
      ><span class='default_value'><span class='pre'>None</span></span></em
      >,
      <em class='sig-param'
      ><span class='n'><span class='pre'>options</span></span
      ><span class='o'><span class='pre'>=</span></span
      ><span class='default_value'><span class='pre'>None</span></span></em
      >,
      <em class='sig-param'
      ><span class='n'><span class='pre'>skip_transpilation</span></span
      ><span class='o'><span class='pre'>=</span></span
      ><span class='default_value'><span class='pre'>False</span></span></em
      ><span class='sig-paren'>)</span
    ><a
      class='reference internal'
      href='../_modules/qiskit_ibm_runtime/sampler.html#Sampler'
    ><span class='viewcode-link'><span class='pre'>[source]</span></span></a
    ><a
      class='headerlink'
      href='#qiskit_ibm_runtime.Sampler'
      title='Permalink to this definition'
    >¶</a
    >
    </dt>
    <dd>
      <p>
        Class for interacting with Qiskit Runtime Sampler primitive service.
      </p>
    </dd>
  </dl>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "# Estimator

      <span id="qiskit_ibm_runtime.Sampler" />

      \`Sampler(circuits=None, parameters=None, service=None, session=None, options=None, skip_transpilation=False)\`

      Class for interacting with Qiskit Runtime Sampler primitive service.
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_runtime.Sampler",
          "python_api_type": "class",
        },
      }
    `);
  });

  test("convert class property headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
<h1>Estimator.circuits<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
  <dl class='py property'>
    <dt class='sig sig-object py' id='qiskit_ibm_runtime.Estimator.circuits'>
      <em class='property'
      ><span class='pre'>property</span><span class='w'> </span></em
      ><span class='sig-prename descclassname'
    ><span class='pre'>Estimator.</span></span
    ><span class='sig-name descname'><span class='pre'>circuits</span></span
    ><em class='property'
    ><span class='p'><span class='pre'>:</span></span
    ><span class='w'> </span><span class='pre'>tuple</span
    ><span class='p'><span class='pre'>[</span></span
    ><span class='pre'>qiskit.circuit.quantumcircuit.QuantumCircuit</span
    ><span class='p'><span class='pre'>,</span></span
    ><span class='w'> </span
    ><span class='p'><span class='pre'>...</span></span
    ><span class='p'><span class='pre'>]</span></span></em
    ><a
      class='headerlink'
      href='#qiskit_ibm_runtime.Estimator.circuits'
      title='Permalink to this definition'
    >¶</a
    >
    </dt>
    <dd><p>Quantum circuits that represents quantum states.</p></dd>
  </dl>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "# circuits

      <span id="qiskit_ibm_runtime.Estimator.circuits" />

      \`tuple[qiskit.circuit.quantumcircuit.QuantumCircuit, ...]\`

      Quantum circuits that represents quantum states.
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_runtime.Estimator.circuits",
          "python_api_type": "property",
        },
      }
    `);
  });

  test("convert class method headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
<h1>Estimator.run<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
  <dl class='py method'>
<dt class='sig sig-object py' id='qiskit_ibm_runtime.Estimator.run'>
<span class='sig-prename descclassname'><span class='pre'>Estimator.</span></span><span class='sig-name descname'><span class='pre'>run</span></span><span class='sig-paren'>(</span><em class='sig-param'><span class='n'><span class='pre'>circuits</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>observables</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>parameter_values</span></span><span class='o'><span class='pre'>=</span></span><span class='default_value'><span class='pre'>None</span></span></em>, <em class='sig-param'><span class='o'><span class='pre'>**</span></span><span class='n'><span class='pre'>kwargs</span></span></em><span class='sig-paren'>)</span><a class='reference internal' href='../_modules/qiskit_ibm_runtime/estimator.html#Estimator.run'><span class='viewcode-link'><span class='pre'>[source]</span></span></a><a class='headerlink' href='#qiskit_ibm_runtime.Estimator.run' title='Permalink to this definition'>¶</a></dt>
<dd><p>Submit a request to the estimator primitive program.</p></dd></dl>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "# run

      <span id="qiskit_ibm_runtime.Estimator.run" />

      \`Estimator.run(circuits, observables, parameter_values=None, **kwargs)\`

      Submit a request to the estimator primitive program.
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_runtime.Estimator.run",
          "python_api_type": "method",
        },
      }
    `);
  });

  test("convert class attributes headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
<h1>EnvironmentOptions.callback<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
<dl class='py attribute'>
<dt class='sig sig-object py' id='qiskit_ibm_runtime.options.EnvironmentOptions.callback'>
<span class='sig-prename descclassname'><span class='pre'>EnvironmentOptions.</span></span><span class='sig-name descname'><span class='pre'>callback</span></span><em class='property'><span class='p'><span class='pre'>:</span></span><span class='w'> </span><span class='pre'>Optional</span><span class='p'><span class='pre'>[</span></span><span class='pre'>Callable</span><span class='p'><span class='pre'>]</span></span></em><em class='property'><span class='w'> </span><span class='p'><span class='pre'>=</span></span><span class='w'> </span><span class='pre'>None</span></em><a class='headerlink' href='#qiskit_ibm_runtime.options.EnvironmentOptions.callback' title='Permalink to this definition'>¶</a></dt>
<dd></dd></dl>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "# callback

      <span id="qiskit_ibm_runtime.options.EnvironmentOptions.callback" />

      \`Optional[Callable] = None\`
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_runtime.options.EnvironmentOptions.callback",
          "python_api_type": "attribute",
        },
      }
    `);
  });

  test("convert method and attributes to titles", async () => {
    expect(
      (
        await toMdWithMeta(
          `<div role='main'>
<p class='rubric'>Methods</p>
</div>
`,
        )
      ).markdown,
    ).toMatchInlineSnapshot(`
              "## Methods
              "
          `);
  });

  test("convert functions headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
  <section id="job-monitor">
<h1>job_monitor<a class="headerlink" href="#job-monitor" title="Permalink to this heading">¶</a></h1>
<dl class="py function">
<dt class="sig sig-object py" id="qiskit_ibm_provider.job.job_monitor">
<span class="sig-name descname"><span class="pre">job_monitor</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">job</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">interval=None</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">output=&lt;_io.TextIOWrapper</span> <span class="pre">name='&lt;stdout&gt;'</span> <span class="pre">mode='w'</span> <span class="pre">encoding='utf-8'&gt;</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit_ibm_provider/job/job_monitor.html#job_monitor"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.job.job_monitor" title="Permalink to this definition">¶</a></dt>
<dd><p>Monitor the status of an <code class="docutils literal notranslate"><span class="pre">IBMJob</span></code> instance.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>job</strong> (<code class="xref py py-class docutils literal notranslate"><span class="pre">IBMJob</span></code>) – Job to monitor.</p></li>
<li><p><strong>interval</strong> (<code class="xref py py-data docutils literal notranslate"><span class="pre">Optional</span></code>[<code class="xref py py-class docutils literal notranslate"><span class="pre">float</span></code>]) – Time interval between status queries.</p></li>
<li><p><strong>output</strong> (<code class="xref py py-class docutils literal notranslate"><span class="pre">TextIO</span></code>) – The file like object to write status messages to.
By default this is sys.stdout.</p></li>
</ul>
</dd>
<dt class="field-even">Return type<span class="colon">:</span></dt>
<dd class="field-even"><p><code class="xref py py-obj docutils literal notranslate"><span class="pre">None</span></code></p>
</dd>
</dl>
</dd></dl>

</section>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "<span id="job-monitor" />

      # job\\_monitor

      <span id="qiskit_ibm_provider.job.job_monitor" />

      \`job_monitor(job, interval=None, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>)\`

      Monitor the status of an \`IBMJob\` instance.

      **Parameters**

      *   **job** (\`IBMJob\`) – Job to monitor.
      *   **interval** (\`Optional\`\\[\`float\`]) – Time interval between status queries.
      *   **output** (\`TextIO\`) – The file like object to write status messages to. By default this is sys.stdout.

      **Return type**

      \`None\`
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_provider.job.job_monitor",
          "python_api_type": "function",
        },
      }
    `);
  });

  test("convert exception headings", async () => {
    expect(
      await toMdWithMeta(`<div role='main'>
             <article itemprop="articleBody" id="pytorch-article" class="pytorch-article">

  <section id="ibmjoberror">
<h1>IBMJobError<a class="headerlink" href="#ibmjoberror" title="Permalink to this heading">¶</a></h1>
<dl class="py exception">
<dt class="sig sig-object py" id="qiskit_ibm_provider.job.IBMJobError">
<em class="property"><span class="pre">exception</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">IBMJobError</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="o"><span class="pre">*</span></span><span class="n"><span class="pre">message</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit_ibm_provider/job/exceptions.html#IBMJobError"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.job.IBMJobError" title="Permalink to this definition">¶</a></dt>
<dd><p>Base class for errors raised by the job modules.</p>
<p>Set the error message.</p>
</dd></dl>

</section>


             </article>
</div>
`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "<span id="ibmjoberror" />

      # IBMJobError

      <span id="qiskit_ibm_provider.job.IBMJobError" />

      \`IBMJobError(*message)\`

      Base class for errors raised by the job modules.

      Set the error message.
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_provider.job.IBMJobError",
          "python_api_type": "exception",
        },
      }
    `);
  });

  test("extract module metadata", async () => {
    // Sphinx <= 7.1 uses this style.
    expect(
      (
        await toMdWithMeta(
          `<article role='main'>
             <span class="target" id="module-qiskit.circuit">
               <span id="qiskit-circuit"></span>
             </span>
            </article>`,
        )
      ).meta,
    ).toMatchInlineSnapshot(`
        {
          "python_api_name": "qiskit.circuit",
          "python_api_type": "module",
        }
      `);
    // Sphinx 7.2+ uses this style.
    expect(
      (
        await toMdWithMeta(
          `<article role='main'>
               <span id="module-qiskit_ibm_runtime.options"></span>
            </article>`,
        )
      ).meta,
    ).toMatchInlineSnapshot(`
          {
            "python_api_name": "qiskit_ibm_runtime.options",
            "python_api_type": "module",
          }
        `);
  });

  test("extract module metadata for section", async () => {
    expect(
      await toMdWithMeta(`<div role="main"><section id="module-qiskit_ibm_provider.transpiler.passes.basis">
<span id="basis"></span><h1>basis<a class="headerlink" href="#module-qiskit_ibm_provider.transpiler.passes.basis" title="Permalink to this heading">¶</a></h1>
<section id="basis-qiskit-ibm-provider-transpiler-passes-basis">
<h2>Basis (<a class="reference internal" href="#module-qiskit_ibm_provider.transpiler.passes.basis" title="qiskit_ibm_provider.transpiler.passes.basis"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit_ibm_provider.transpiler.passes.basis</span></code></a>)<a class="headerlink" href="#basis-qiskit-ibm-provider-transpiler-passes-basis" title="Permalink to this heading">¶</a></h2>
<p>Passes to layout circuits to IBM backend’s instruction sets.</p>
</section>
</section></div>`),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "<span id="module-qiskit_ibm_provider.transpiler.passes.basis" />

      <span id="basis" />

      # basis

      <span id="basis-qiskit-ibm-provider-transpiler-passes-basis" />

      ## Basis

      <span id="module-qiskit_ibm_provider.transpiler.passes.basis" />

      \`qiskit_ibm_provider.transpiler.passes.basis\`

      Passes to layout circuits to IBM backend’s instruction sets.
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_provider.transpiler.passes.basis",
          "python_api_type": "module",
        },
      }
    `);
  });

  test("convert class method with a problematic output", async () => {
    // The problem is generated in this page
    // https://qiskit.org/ecosystem/ibm-provider/stubs/qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state.html#qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state
    expect(
      await toMdWithMeta(`<div role='main'>
  <h1>IBMCircuitJob.wait_for_final_state<a class='headerlink' href='#ibmcircuitjob-wait-for-final-state'
                                           title='Permalink to this heading'>¶</a></h1>
  <dl class='py method'>
    <dt class='sig sig-object py' id='qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state'>
      <span class='sig-prename descclassname'><span class='pre'>IBMCircuitJob.</span></span><span
      class='sig-name descname'><span class='pre'>wait_for_final_state</span></span><span class='sig-paren'>(</span><em
      class='sig-param'><span class='n'><span class='pre'>timeout</span></span><span class='o'><span
      class='pre'>=</span></span><span class='default_value'><span class='pre'>None</span></span></em><span
      class='sig-paren'>)</span><a class='reference internal'
                                   href='../_modules/qiskit_ibm_provider/job/ibm_circuit_job.html#IBMCircuitJob.wait_for_final_state'><span
      class='viewcode-link'><span class='pre'>[source]</span></span></a><a class='headerlink'
                                                                           href='#qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state'
                                                                           title='Permalink to this definition'>¶</a>
    </dt>
    <dd>
      <dl class='simple'>
        <dt>Use the websocket server to wait for the final the state of a job. The server</dt>
        <dd><p>will remain open if the job is still running and the connection will be terminated
          once the job completes. Then update and return the status of the job.</p>
        </dd>
      </dl>
      <dl class='field-list simple'>
        <dt class='field-odd'>Parameters<span class='colon'>:</span></dt>
        <dd class='field-odd'><p><strong>timeout</strong> (<code
          class='xref py py-data docutils literal notranslate'><span class='pre'>Optional</span></code>[<code
          class='xref py py-class docutils literal notranslate'><span class='pre'>float</span></code>]) – Seconds to
          wait for the job. If <code class='docutils literal notranslate'><span class='pre'>None</span></code>, wait
          indefinitely.</p>
        </dd>
        <dt class='field-even'>Raises<span class='colon'>:</span></dt>
        <dd class='field-even'><p><a class='reference internal'
                                     href='qiskit_ibm_provider.job.IBMJobTimeoutError.html#qiskit_ibm_provider.job.IBMJobTimeoutError'
                                     title='qiskit_ibm_provider.job.IBMJobTimeoutError'><strong>IBMJobTimeoutError</strong></a>
          – If the job does not complete within given timeout.</p>
        </dd>
        <dt class='field-odd'>Return type<span class='colon'>:</span></dt>
        <dd class='field-odd'><p><code class='xref py py-obj docutils literal notranslate'><span class='pre'>None</span></code>
        </p>
        </dd>
      </dl>
    </dd>
  </dl>
</div>
      `),
    ).toMatchInlineSnapshot(`
      {
        "images": [],
        "isReleaseNotes": false,
        "markdown": "# wait\\_for\\_final\\_state

      <span id="qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state" />

      \`IBMCircuitJob.wait_for_final_state(timeout=None)\`

      ## Use the websocket server to wait for the final the state of a job. The server

      will remain open if the job is still running and the connection will be terminated once the job completes. Then update and return the status of the job.

      **Parameters**

      **timeout** (\`Optional\`\\[\`float\`]) – Seconds to wait for the job. If \`None\`, wait indefinitely.

      **Raises**

      [**IBMJobTimeoutError**](qiskit_ibm_provider.job.IBMJobTimeoutError#qiskit_ibm_provider.job.IBMJobTimeoutError "qiskit_ibm_provider.job.IBMJobTimeoutError") – If the job does not complete within given timeout.

      **Return type**

      \`None\`
      ",
        "meta": {
          "python_api_name": "qiskit_ibm_provider.job.IBMCircuitJob.wait_for_final_state",
          "python_api_type": "method",
        },
      }
    `);
  });

  test("convert inline methods", async () => {
    expect(
      await toMd(`
      <div role="main">

<h1>DAGCircuit<a class="headerlink" href="#dagcircuit" title="Permalink to this heading">#</a></h1>
<dl class="py class">
<dt class="sig sig-object py" id="qiskit.dagcircuit.DAGCircuit">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.dagcircuit.</span></span><span class="sig-name descname"><span class="pre">DAGCircuit</span></span><a class="reference internal" href="../_modules/qiskit/dagcircuit/dagcircuit.html#DAGCircuit"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.dagcircuit.DAGCircuit" title="Permalink to this definition">#</a></dt>
<dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">object</span></code></p>
<p>Quantum circuit as a directed acyclic graph.</p>
<p>There are 3 types of nodes in the graph: inputs, outputs, and operations.
The nodes are connected by directed edges that correspond to qubits and
bits.</p>
<p>Create an empty circuit.</p>
<p class="rubric">Attributes</p>

<p class="rubric">Methods</p>
<dl class="py method">
<dt class="sig sig-object py" id="qiskit.dagcircuit.DAGCircuit.add_calibration">
<span class="sig-name descname"><span class="pre">add_calibration</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">gate</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">schedule</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">params</span></span><span class="o"><span class="pre">=</span></span><span class="default_value"><span class="pre">None</span></span></em><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit/dagcircuit/dagcircuit.html#DAGCircuit.add_calibration"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.dagcircuit.DAGCircuit.add_calibration" title="Permalink to this definition">#</a></dt>
<dd><p>Register a low-level, custom pulse definition for the given gate.</p>
<dl class="field-list simple">
<dt class="field-odd">Parameters<span class="colon">:</span></dt>
<dd class="field-odd"><ul class="simple">
<li><p><strong>gate</strong> (<em>Union</em><em>[</em><a class="reference internal" href="qiskit.circuit.Gate.html#qiskit.circuit.Gate" title="qiskit.circuit.Gate"><em>Gate</em></a><em>, </em><em>str</em><em>]</em>) – Gate information.</p></li>
<li><p><strong>qubits</strong> (<em>Union</em><em>[</em><em>int</em><em>, </em><em>Tuple</em><em>[</em><em>int</em><em>]</em><em>]</em>) – List of qubits to be measured.</p></li>
<li><p><strong>schedule</strong> (<a class="reference internal" href="qiskit.pulse.Schedule.html#qiskit.pulse.Schedule" title="qiskit.pulse.Schedule"><em>Schedule</em></a>) – Schedule information.</p></li>
<li><p><strong>params</strong> (<em>Optional</em><em>[</em><em>List</em><em>[</em><em>Union</em><em>[</em><em>float</em><em>, </em><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.Parameter"><em>Parameter</em></a><em>]</em><em>]</em><em>]</em>) – A list of parameters.</p></li>
</ul>
</dd>
<dt class="field-even">Raises<span class="colon">:</span></dt>
<dd class="field-even"><p><strong>Exception</strong> – if the gate is of type string and params is None.</p>
</dd>
</dl>
</dd></dl>

      </div>
      `),
    ).toMatchInlineSnapshot(`
      "# DAGCircuit

      <span id="qiskit.dagcircuit.DAGCircuit" />

      \`qiskit.dagcircuit.DAGCircuit\`

      Bases: \`object\`

      Quantum circuit as a directed acyclic graph.

      There are 3 types of nodes in the graph: inputs, outputs, and operations. The nodes are connected by directed edges that correspond to qubits and bits.

      Create an empty circuit.

      ## Attributes

      ## Methods

      ### add\\_calibration

      <span id="qiskit.dagcircuit.DAGCircuit.add_calibration" />

      \`add_calibration(gate, qubits, schedule, params=None)\`

      Register a low-level, custom pulse definition for the given gate.

      **Parameters**

      *   **gate** (*Union\\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]*) – Gate information.
      *   **qubits** (*Union\\[int, Tuple\\[int]]*) – List of qubits to be measured.
      *   **schedule** ([*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")) – Schedule information.
      *   **params** (*Optional\\[List\\[Union\\[float,* [*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*]]]*) – A list of parameters.

      **Raises**

      **Exception** – if the gate is of type string and params is None.
      "
    `);
  });

  test("transform dl, dd, dt elements", async () => {
    expect(
      await toMd(`<div role='main'>
  <dl>
    <dt class='field-even'>Return type<span class='colon'>:</span></dt>
    <dd class='field-even'><p><a class='reference internal'
                                 href='qiskit_ibm_runtime.RuntimeJob.html#qiskit_ibm_runtime.RuntimeJob'
                                 title='qiskit_ibm_runtime.RuntimeJob'>RuntimeJob</a></p>
    </dd>
    <dt class='field-odd'>Returns<span class='colon'>:</span></dt>
    <dd class='field-odd'><p>Submitted job.
      The result of the job is an instance of <code
        class='xref py py-class docutils literal notranslate'><span class='pre'>qiskit.primitives.EstimatorResult</span></code>.
    </p>
    </dd>
  </dl>
</div>
`),
    ).toMatchInlineSnapshot(`
        "## Return type

        [RuntimeJob](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob")

        ## Returns

        Submitted job. The result of the job is an instance of \`qiskit.primitives.EstimatorResult\`.
        "
      `);
  });

  test("remove () around module titles", async () => {
    expect(
      await toMd(`<div role='main'>
  <span class="target" id="module-qiskit_ibm_runtime"></span><section id="qiskit-runtime-qiskit-ibm-runtime">
<h1>Qiskit Runtime (<a class="reference internal" href="#module-qiskit_ibm_runtime" title="qiskit_ibm_runtime"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit_ibm_runtime</span></code></a>)<a class="headerlink" href="#qiskit-runtime-qiskit-ibm-runtime" title="Permalink to this heading">¶</a></h1>
<p>Modules related to Qiskit Runtime IBM Client.</p>
</div>
`),
    ).toMatchInlineSnapshot(`
      "<span id="module-qiskit_ibm_runtime" />

      <span id="qiskit-runtime-qiskit-ibm-runtime" />

      # Qiskit Runtime

      <span id="module-qiskit_ibm_runtime" />

      \`qiskit_ibm_runtime\`

      Modules related to Qiskit Runtime IBM Client.
      "
    `);
  });

  test("transform inline math", async () => {
    expect(
      await toMd(`
<div role='main'>
<table>
<tbody>
<tr class="row-even"><td><p><a class="reference internal" href="../stubs/qiskit.circuit.library.GlobalPhaseGate.html#qiskit.circuit.library.GlobalPhaseGate" title="qiskit.circuit.library.GlobalPhaseGate"><code class="xref py py-obj docutils literal notranslate"><span class="pre">GlobalPhaseGate</span></code></a>(phase[, label])</p></td>
<td><p>The global phase gate (<span class="math notranslate nohighlight">\\(e^{i\\theta}\\)</span>).</p></td>
</tr>
</tbody>
</table>
</div>
        `),
    ).toMatchInlineSnapshot(`
        "|                                                                                                                                                                       |                                        |
        | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
        | [\`GlobalPhaseGate\`](../stubs/qiskit.circuit.library.GlobalPhaseGate#qiskit.circuit.library.GlobalPhaseGate "qiskit.circuit.library.GlobalPhaseGate")(phase\\[, label]) | The global phase gate ($e^{i\\theta}$). |
        "
      `);
  });

  test("transform block math", async () => {
    expect(
      await toMd(`
<div role='main'>
<div class="math notranslate nohighlight">
\\[\\begin{split}CCX q_0, q_1, q_2 =
    I \\otimes I \\otimes |0 \\rangle \\langle 0| + CX \\otimes |1 \\rangle \\langle 1| =
   \\begin{pmatrix}
        1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0\\\\
        0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0\\\\
        0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0\\\\
        0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1\\\\
        0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0\\\\
        0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0\\\\
        0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0\\\\
        0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0
    \\end{pmatrix}\\end{split}\\]</div>

<div class="math notranslate nohighlight">
\\[x = \\sum_{i=0}^{n-1} 2^i q_i,\\]</div>
</div>
        `),
    ).toMatchInlineSnapshot(`
        "$$
        \\begin{split}CCX q_0, q_1, q_2 =
            I \\otimes I \\otimes |0 \\rangle \\langle 0| + CX \\otimes |1 \\rangle \\langle 1| =
           \\begin{pmatrix}
                1 & 0 & 0 & 0 & 0 & 0 & 0 & 0\\\\
                0 & 1 & 0 & 0 & 0 & 0 & 0 & 0\\\\
                0 & 0 & 1 & 0 & 0 & 0 & 0 & 0\\\\
                0 & 0 & 0 & 0 & 0 & 0 & 0 & 1\\\\
                0 & 0 & 0 & 0 & 1 & 0 & 0 & 0\\\\
                0 & 0 & 0 & 0 & 0 & 1 & 0 & 0\\\\
                0 & 0 & 0 & 0 & 0 & 0 & 1 & 0\\\\
                0 & 0 & 0 & 1 & 0 & 0 & 0 & 0
            \\end{pmatrix}\\end{split}
        $$

        $$
        x = \\sum_{i=0}^{n-1} 2^i q_i,
        $$
        "
      `);
  });

  test("transform admonitions", async () => {
    expect(
      await toMd(`<div role='main'>
  <div class='admonition note'>
    <p class='admonition-title'>Note</p>
    <p>To use these tools locally, you’ll need to install the
      additional dependencies for the visualization functions:</p>
  </div>

  <div class='admonition warning'>
    <p class='admonition-title'>Warning</p>
    <p>This is a warning</p>
  </div>

  <div class='admonition important'>
    <p class='admonition-title'>Important</p>
    <p>The global phase gate (<span class="math notranslate nohighlight">\\(e^{i\\theta}\\)</span>).</p>
  </div>
</div>
        `),
    ).toMatchInlineSnapshot(`
        "<Admonition title="Note" type="note">
          To use these tools locally, you’ll need to install the additional dependencies for the visualization functions:
        </Admonition>

        <Admonition title="Warning" type="caution">
          This is a warning
        </Admonition>

        <Admonition title="Important" type="danger">
          The global phase gate ($e^{i\\theta}$).
        </Admonition>
        "
      `);
  });

  test("parse inline attributes section", async () => {
    expect(
      await toMd(`<div role='main'>

  <section id='quantumcircuit'>
    <h1>QuantumCircuit<a class='headerlink' href='#quantumcircuit' title='Permalink to this heading'>¶</a></h1>
    <dl class='py class'>
      <dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit'>
        QuantumCircuit(*regs, name=None, global_phase=0, metadata=None)
      </dt>
      <dd><p>Bases: <code class='xref py py-class docutils literal notranslate'><span class='pre'>object</span></code>
      </p>
        <p>Create a new circuit.</p>

        <p class='rubric'>Attributes</p>
        <dl class='py attribute'>
          <dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit.ancillas'>
            <span class='sig-name descname'><span class='pre'>ancillas</span></span><a class='headerlink'
                                                                                       href='#qiskit.circuit.QuantumCircuit.ancillas'
                                                                                       title='Permalink to this definition'>¶</a>
          </dt>
          <dd><p>Returns a list of ancilla bits in the order that the registers were added.</p>

          </dd>

          <dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit.foo'>
            foo = re.compile('')
          </dt>
          <dd>Foo has a default value
          </dd>

          <dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit.bar'>
            bar : Object
          </dt>
          <dd>Bar has a type</dd>

          <dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit.foobar'>
            bar : Object = re.compile('')
          </dt>
          <dd>Bar has a type and a defualt value</dd>
        </dl>
</div>
        `),
    ).toMatchInlineSnapshot(`
      "<span id="quantumcircuit" />

      # QuantumCircuit

      <span id="qiskit.circuit.QuantumCircuit" />

      \`QuantumCircuit(*regs, name=None, global_phase=0, metadata=None)\`

      Bases: \`object\`

      Create a new circuit.

      ## Attributes

      <span id="qiskit.circuit.QuantumCircuit.ancillas" />

      ### ancillas

      Returns a list of ancilla bits in the order that the registers were added.

      <span id="qiskit.circuit.QuantumCircuit.ancillas" />

      ### foo

      \`= re.compile('')\`

      Foo has a default value

      <span id="qiskit.circuit.QuantumCircuit.ancillas" />

      ### bar

      \`Object\`

      Bar has a type

      <span id="qiskit.circuit.QuantumCircuit.ancillas" />

      ### bar

      \`Object\`

      \`= re.compile('')\`

      Bar has a type and a defualt value
      "
    `);
  });

  test("parse deprecations warnings", async () => {
    expect(
      await toMd(`
      <div role="main">
      <div class="deprecated">
<p><span class="versionmodified deprecated">Deprecated since version 0.23.0: </span>The method <code class="docutils literal notranslate"><span class="pre">qiskit.circuit.quantumregister.QuantumRegister.qasm()</span></code> is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.</p>
</div>
      </div>
      `),
    ).toMatchInlineSnapshot(`
        "<Admonition title="Deprecated since version 0.23.0" type="danger">
          The method \`qiskit.circuit.quantumregister.QuantumRegister.qasm()\` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
        </Admonition>
        "
      `);
  });

  test("preserve span with ids", async () => {
    expect(
      await toMd(`<div role='main'>
  <div role='main' class='main-content' itemscope='itemscope' itemtype='http://schema.org/Article'>
    <article itemprop='articleBody' id='pytorch-article' class='pytorch-article'>

      <span class='target' id='module-qiskit.assembler'><span id='qiskit-assembler'></span></span>
      <section id='circuit-and-schedule-assembler-qiskit-assembler'>
        <h1>Circuit and Schedule Assembler (<a class='reference internal' href='#module-qiskit.assembler'
                                               title='qiskit.assembler'><code
          class='xref py py-mod docutils literal notranslate'><span class='pre'>qiskit.assembler</span></code></a>)<a
          class='headerlink' href='#circuit-and-schedule-assembler-qiskit-assembler'
          title='Permalink to this heading'>¶</a></h1>
        <section id='circuit-assembler'>
          <h2>Circuit Assembler<a class='headerlink' href='#circuit-assembler' title='Permalink to this heading'>¶</a>
          </h2>
        </section>
      </section>
    </article>
  </div>
    `),
    ).toMatchInlineSnapshot(`
      "<span id="module-qiskit.assembler" />

      <span id="qiskit-assembler" />

      <span id="circuit-and-schedule-assembler-qiskit-assembler" />

      # Circuit and Schedule Assembler

      <span id="module-qiskit.assembler" />

      \`qiskit.assembler\`

      <span id="circuit-assembler" />

      ## Circuit Assembler
      "
    `);
  });

  test("merge contiguous emphasis", async () => {
    expect(
      await toMd(`
      <div role="main">

        <li><p><strong>gate</strong> (<em>Union</em><em>[</em><a class="reference internal" href="qiskit.circuit.Gate.html#qiskit.circuit.Gate" title="qiskit.circuit.Gate"><em>Gate</em></a><em>, </em><em>str</em><em>]</em>) – Gate information.</p></li>

      </div>
    `),
    ).toMatchInlineSnapshot(`
      "*   **gate** (*Union\\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]*) – Gate information.
      "
    `);
  });

  test("remove spaces from emphashis boundaries", async () => {
    expect(
      await toMd(`
      <div role="main">

        <li><p><strong>gate</strong> (<em> Union</em><em>[</em><a class="reference internal" href="qiskit.circuit.Gate.html#qiskit.circuit.Gate" title="qiskit.circuit.Gate"><em>Gate</em></a><em>, </em><em>str</em><em>]   </em>) – Gate information.</p></li>

      </div>
    `),
    ).toMatchInlineSnapshot(`
      "*   **gate** ( *Union\\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]* ) – Gate information.
      "
    `);
  });

  test("remove <br/>", async () => {
    expect(
      await toMd(`
    <div role="main">
    <p>Transpilation is the process of rewriting a given input circuit to match
the topology of a specific quantum device, and/or to optimize the circuit
for execution on present day noisy quantum systems.</p>
<p>Most circuits must undergo a series of transformations that make them compatible with
a given target device, and optimize them to reduce the effects of noise on the
resulting outcomes.  Rewriting quantum circuits to match hardware constraints and
optimizing for performance can be far from trivial.  The flow of logic in the rewriting
tool chain need not be linear, and can often have iterative sub-loops, conditional
branches, and other complex behaviors. That being said, the standard
compilation flow follows the structure given below:</p>
<img alt="../_images/transpiling_core_steps.png" src="../_images/transpiling_core_steps.png" />
<br><p>Qiskit has four pre-built transpilation pipelines available here:
</p>
</div>
    `),
    ).toMatchInlineSnapshot(`
      "Transpilation is the process of rewriting a given input circuit to match the topology of a specific quantum device, and/or to optimize the circuit for execution on present day noisy quantum systems.

      Most circuits must undergo a series of transformations that make them compatible with a given target device, and optimize them to reduce the effects of noise on the resulting outcomes. Rewriting quantum circuits to match hardware constraints and optimizing for performance can be far from trivial. The flow of logic in the rewriting tool chain need not be linear, and can often have iterative sub-loops, conditional branches, and other complex behaviors. That being said, the standard compilation flow follows the structure given below:

      ![../\\_images/transpiling\\_core\\_steps.png](/images/api//transpiling_core_steps.png)

      Qiskit has four pre-built transpilation pipelines available here:
      "
    `);
  });
});

test("identify release notes", async () => {
  expect(
    await sphinxHtmlToMarkdown({
      html: `
          <div role="main">
          <h1>Release Notes<a class="headerlink" href="#release-notes" title="Link to this heading">#</a></h1>
          <section id="release-notes-0-14-0">
          <span id="id1"></span><h2>0.14.0<a class="headerlink" href="#release-notes-0-14-0" title="Link to this heading">#</a></h2>
          <section id="new-features">
          <span id="release-notes-0-14-0-new-features"></span><h3>New Features<a class="headerlink" href="#new-features" title="Link to this heading">#</a></h3>
          <ul class="simple">
          <li><p>There is a new class, <code class="xref py py-class docutils literal notranslate"><span class="pre">qiskit_ibm_runtime.Batch</span></code> that currently works
          the same way as <a class="reference internal" href="stubs/qiskit_ibm_runtime.Session.html#qiskit_ibm_runtime.Session" title="qiskit_ibm_runtime.Session"><code class="xref py py-class docutils literal notranslate"><span class="pre">qiskit_ibm_runtime.Session</span></code></a> but will later be updated 
          to better support submitting multiple jobs at once.</p></li>
          </ul>
          `,
      url: "http://qiskit.org/docs/release_notes.html",
      imageDestination: "/images/qiskit",
    }),
  ).toMatchInlineSnapshot(`
{
  "images": [],
  "isReleaseNotes": true,
  "markdown": "# Release Notes

<span id="release-notes-0-14-0" />

<span id="id1" />

## 0.14.0

<span id="new-features" />

<span id="release-notes-0-14-0-new-features" />

### New Features

*   There is a new class, \`qiskit_ibm_runtime.Batch\` that currently works the same way as [\`qiskit_ibm_runtime.Session\`](stubs/qiskit_ibm_runtime.Session#qiskit_ibm_runtime.Session \"qiskit_ibm_runtime.Session\") but will later be updated to better support submitting multiple jobs at once.
",
  "meta": {},
}
`);
});

async function toMd(html: string) {
  return (
    await sphinxHtmlToMarkdown({
      url: "https://qiskit.org/documentation/partners/qiskit_ibm_runtime/stubs/qiskit_ibm_runtime.Sampler.html",
      html,
    })
  ).markdown;
}

async function toMdWithMeta(html: string) {
  return await sphinxHtmlToMarkdown({
    url: "https://qiskit.org/documentation/partners/qiskit_ibm_runtime/stubs/qiskit_ibm_runtime.Sampler.html",
    html,
  });
}
