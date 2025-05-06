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

import { test, expect } from "@playwright/test";

import { sphinxHtmlToMarkdown } from "./htmlToMd.js";

const DEFAULT_ARGS = {
  imageDestination: "/images/qiskit",
  determineGithubUrl: (fileName: string) =>
    `https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/${fileName}.py`,
  releaseNotesTitle: "My Quantum release notes",
  hasSeparateReleaseNotes: false,
};

async function toMd(
  html: string,
  withMetadata: boolean = false,
  isCApi: boolean = false,
) {
  const result = await sphinxHtmlToMarkdown({
    fileName: "stubs/qiskit_ibm_runtime.Sampler.html",
    html,
    isCApi,
    ...DEFAULT_ARGS,
  });
  return withMetadata ? result : result.markdown;
}

// ------------------------------------------------------------------
// Transform tabs
// ------------------------------------------------------------------

test("handle tabs", async () => {
  expect(
    await toMd(`<div role='main'>
      <details
        class='sd-sphinx-override sd-dropdown sd-card sd-mb-3 sd-fade-in-slide-down'
      >
        <summary class='sd-summary-title sd-card-header'>
          Account initialization
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
                instance with your account credentials.
              </p>
            </div>
          </blockquote>
        </div>
      </details>
    </div>
`),
  ).toEqual(`### Account initialization

You need to initialize your account before you can start using the Qiskit Runtime service. This is done by initializing a [\`QiskitRuntimeService\`](../stubs/qiskit_ibm_runtime.QiskitRuntimeService#qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService") instance with your account credentials.
`);
});

// ------------------------------------------------------------------
// Transform special characters
// ------------------------------------------------------------------

test("handle special characters: `<` and `{`", async () => {
  expect(
    await toMd(`
    <div role='main'>
    <p>For the full list of backend attributes, see the <cite>IBMBackend</cite> class documentation
&lt;<a class='reference external' href='https://qiskit.org/documentation/apidoc/providers_models.html'>https://qiskit.org/documentation/apidoc/providers_models.html</a>&gt;</p>
</p></li>

<p><strong>basis_fidelity</strong> (<em>dict</em><em> | </em><em>float</em>) – available strengths and fidelity of each.
Can be either (1) a dictionary mapping XX angle values to fidelity at that angle; or
(2) a single float f, interpreted as {pi: f, pi/2: f/2, pi/3: f/3}.</p>
    </div>
    `),
  )
    .toEqual(`For the full list of backend attributes, see the IBMBackend class documentation \\<[https://qiskit.org/documentation/apidoc/providers\\_models.html](https://qiskit.org/documentation/apidoc/providers_models.html)>

**basis\\_fidelity** (*dict | float*) – available strengths and fidelity of each. Can be either (1) a dictionary mapping XX angle values to fidelity at that angle; or (2) a single float f, interpreted as \\{pi: f, pi/2: f/2, pi/3: f/3}.
`);
});

// ------------------------------------------------------------------
// Transform code blocks
// ------------------------------------------------------------------

test("translate codeblocks to code fences with default lang python", async () => {
  expect(
    await toMd(`
    <div class='highlight-default notranslate'>
    <div role='main'>
<pre><span></span><span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>b</span><span class='p'>:</span> <span class='n'>b</span><span class='o'>.</span><span class='n'>max_shots</span> <span class='o'>&gt;</span> <span class='mi'>50000</span><span class='p'>)</span>
<span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>x</span><span class='p'>:</span> <span class='p'>(</span><span class='s2'>&quot;rz&quot;</span> <span class='ow'>in</span> <span class='n'>x</span><span class='o'>.</span><span class='n'>basis_gates</span> <span class='p'>)</span>
</pre>
    </div>
    </div>
    `),
  ).toEqual(`\`\`\`python
QiskitRuntimeService.backends(
    filters=lambda b: b.max_shots > 50000)
QiskitRuntimeService.backends(
    filters=lambda x: ("rz" in x.basis_gates )
\`\`\`
`);
});

test("translate codeblocks to code fences with lang c", async () => {
  expect(
    await toMd(`
    <div class='highlight-c notranslate'>
    <div role='main'>
<pre><span></span><span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>b</span><span class='p'>:</span> <span class='n'>b</span><span class='o'>.</span><span class='n'>max_shots</span> <span class='o'>&gt;</span> <span class='mi'>50000</span><span class='p'>)</span>
<span class='n'>QiskitRuntimeService</span><span class='o'>.</span><span class='n'>backends</span><span class='p'>(</span>
    <span class='n'>filters</span><span class='o'>=</span><span class='k'>lambda</span> <span class='n'>x</span><span class='p'>:</span> <span class='p'>(</span><span class='s2'>&quot;rz&quot;</span> <span class='ow'>in</span> <span class='n'>x</span><span class='o'>.</span><span class='n'>basis_gates</span> <span class='p'>)</span>
</pre>
    </div>
    </div>
    `),
  ).toEqual(`\`\`\`c
QiskitRuntimeService.backends(
    filters=lambda b: b.max_shots > 50000)
QiskitRuntimeService.backends(
    filters=lambda x: ("rz" in x.basis_gates )
\`\`\`
`);
});

// ------------------------------------------------------------------
// Transform methods and attributes
// ------------------------------------------------------------------

test("handle inlined methods and attributes", async () => {
  expect(
    await toMd(`
      <div role="main">

<h1>DAGCircuit<a class="headerlink" href="#dagcircuit" title="Permalink to this heading">#</a></h1>
<dl class="py class">
<dt class="sig sig-object py" id="qiskit.dagcircuit.DAGCircuit">
<em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.dagcircuit.</span></span><span class="sig-name descname"><span class="pre">DAGCircuit</span></span><a class="reference internal" href="../_modules/qiskit/dagcircuit/dagcircuit.html#DAGCircuit"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit.dagcircuit.DAGCircuit" title="Permalink to this definition">#</a></dt>
<dd><p>Bases: <code class="xref py py-class docutils literal notranslate"><span class="pre">object</span></code></p>
<p>Quantum circuit as a directed acyclic graph.</p>
<p class="rubric">Attributes</p>
<dl class='py attribute'>
<dt class='sig sig-object py' id='qiskit.circuit.QuantumCircuit.ancillas'>
  <span class='sig-name descname'><span class='pre'>ancillas</span></span><a class='headerlink'
                                                                             href='#qiskit.circuit.QuantumCircuit.ancillas'
                                                                             title='Permalink to this definition'>¶</a>
</dt>
<dd><p>Returns a list of ancilla bits in the order that the registers were added.</p></dd>
</dl>
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
  ).toEqual(`# DAGCircuit

<Class id="qiskit.dagcircuit.DAGCircuit" isDedicatedPage={true} github="https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit/dagcircuit/dagcircuit.py" signature="qiskit.dagcircuit.DAGCircuit" modifiers="class">
  Bases: \`object\`

  Quantum circuit as a directed acyclic graph.

  ## Attributes

  ### ancillas

  <Attribute id="qiskit.circuit.QuantumCircuit.ancillas">
    Returns a list of ancilla bits in the order that the registers were added.
  </Attribute>

  ## Methods

  ### add\\_calibration

  <Function id="qiskit.dagcircuit.DAGCircuit.add_calibration" signature="add_calibration(gate, qubits, schedule, params=None)">
    Register a low-level, custom pulse definition for the given gate.

    **Parameters**

    *   **gate** (*Union\\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]*) – Gate information.
    *   **qubits** (*Union\\[int, Tuple\\[int]]*) – List of qubits to be measured.
    *   **schedule** ([*Schedule*](qiskit.pulse.Schedule#qiskit.pulse.Schedule "qiskit.pulse.Schedule")) – Schedule information.
    *   **params** (*Optional\\[List\\[Union\\[float,* [*Parameter*](qiskit.circuit.Parameter#qiskit.circuit.Parameter "qiskit.circuit.Parameter")*]]]*) – A list of parameters.

    **Raises**

    **Exception** – if the gate is of type string and params is None.
  </Function>
</Class>
`);
});

// ------------------------------------------------------------------
// Transform HTML tags
// ------------------------------------------------------------------

test("transform tables", async () => {
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
        </tbody>
      </table>
    </div>
    `),
  )
    .toEqual(`|                                                                                                                                                                                            |                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| [\`QiskitRuntimeService\`](../stubs/qiskit_ibm_runtime.QiskitRuntimeService#qiskit_ibm_runtime.QiskitRuntimeService "qiskit_ibm_runtime.QiskitRuntimeService")(\\[channel, auth, token, ...]) | Class for interacting with the Qiskit Runtime service.                 |
| [\`Estimator\`](../stubs/qiskit_ibm_runtime.Estimator#qiskit_ibm_runtime.Estimator "qiskit_ibm_runtime.Estimator")(\\[circuits, observables, ...])                                            | Class for interacting with Qiskit Runtime Estimator primitive service. |
`);
});

test("preserve <span> with ids", async () => {
  expect(
    await toMd(`
  <div role='main' class='main-content' itemscope='itemscope' itemtype='http://schema.org/Article'>
    <article itemprop='articleBody' id='pytorch-article' class='pytorch-article'>
      <span id='qiskit-assembler'></span>
      <section id='circuit-and-schedule-assembler-qiskit-assembler'>
          <h1>Circuit Assembler<a class='headerlink' href='#circuit-assembler' title='Permalink to this heading'>¶</a>
          </h1>
      </section>
    </article>
  </div>
    `),
  ).toEqual(`<span id="qiskit-assembler" />

<span id="circuit-and-schedule-assembler-qiskit-assembler" />

# Circuit Assembler
`);
});

test("preserve ids of divs with class section", async () => {
  expect(
    await toMd(
      `<div role="main"><div class="section" id="my-id"><p>Some text</p></div></div>`,
    ),
  ).toEqual(`<span id="my-id" />\n\nSome text\n`);
  // The class `section` must be set.
  expect(
    await toMd(`<div role="main"><div id="my-id"><p>Some text</p></div></div>`),
  ).toEqual(`Some text\n`);
});

test("merge contiguous <em> removing spaces", async () => {
  expect(
    await toMd(`
      <div role="main">
        <li><p><strong>gate</strong> (<em> Union</em><em>[</em><a class="reference internal" href="qiskit.circuit.Gate.html#qiskit.circuit.Gate" title="qiskit.circuit.Gate"><em>Gate</em></a><em>, </em><em>str</em><em>]   </em>) – Gate information.</p></li>
      </div>
    `),
  ).toEqual(
    `*   **gate** ( *Union\\[*[*Gate*](qiskit.circuit.Gate#qiskit.circuit.Gate "qiskit.circuit.Gate")*, str]* ) – Gate information.\n`,
  );
});

test("remove <br/>", async () => {
  expect(
    await toMd(`
    <div role="main">
    <p>Transpilation is the process of rewriting a given input circuit to match
the topology of a specific quantum device, and/or to optimize the circuit
for execution on present day noisy quantum systems.</p>
<br><p>Qiskit has four pre-built transpilation pipelines available here:
</p>
</div>
    `),
  )
    .toEqual(`Transpilation is the process of rewriting a given input circuit to match the topology of a specific quantum device, and/or to optimize the circuit for execution on present day noisy quantum systems.

Qiskit has four pre-built transpilation pipelines available here:
`);
});

test("transform <dl>, <dd>, <dt> elements", async () => {
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
  ).toEqual(`## Return type

[RuntimeJob](qiskit_ibm_runtime.RuntimeJob#qiskit_ibm_runtime.RuntimeJob "qiskit_ibm_runtime.RuntimeJob")

## Returns

Submitted job. The result of the job is an instance of \`qiskit.primitives.EstimatorResult\`.
`);
});

// For more information: https://github.com/Qiskit/documentation/issues/485
test("transform <dt> sig-object tags without id", async () => {
  expect(
    await toMd(`
      <div role="main">
      <p>In addition to the public abstract methods, subclasses should also implement the following
      private methods:</p>
      <dl class="py method">
      <dt class="sig sig-object py">
      <em class="property"><span class="pre">classmethod</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">_default_options</span></span><span class="sig-paren">(</span><span class="sig-paren">)</span><a class="reference internal" href="../_modules/qiskit/providers/basicaer/qasm_simulator.html#QasmSimulatorPy._default_options"><span class="viewcode-link"><span class="pre">[source]</span></span></a></dt>
      <dd><p>Return the default options</p>
      <p>This method will return a <a class="reference internal" href="qiskit.providers.Options.html#qiskit.providers.Options" title="qiskit.providers.Options"><code class="xref py py-class docutils literal notranslate"><span class="pre">qiskit.providers.Options</span></code></a>
      subclass object that will be used for the default options. These
      should be the default parameters to use for the options of the
      backend.</p>
      <dl class="field-list simple">
      <dt class="field-odd">Returns<span class="colon">:</span></dt>
      <dd class="field-odd"><p><dl class="simple">
      <dt>A options object with</dt><dd><p>default values set</p>
      </dd>
      </dl>
      </p>
      </dd>
      <dt class="field-even">Return type<span class="colon">:</span></dt>
      <dd class="field-even"><p><a class="reference internal" href="qiskit.providers.Options.html#qiskit.providers.Options" title="qiskit.providers.Options">qiskit.providers.Options</a></p>
      </dd>
      </dl>
      </dd></dl>
      </div>
  `),
  )
    .toEqual(`In addition to the public abstract methods, subclasses should also implement the following private methods:

<Function signature="_default_options()" modifiers="classmethod">
  Return the default options

  This method will return a [\`qiskit.providers.Options\`](qiskit.providers.Options#qiskit.providers.Options "qiskit.providers.Options") subclass object that will be used for the default options. These should be the default parameters to use for the options of the backend.

  **Returns**

  **A options object with**

  default values set

  **Return type**

  [qiskit.providers.Options](qiskit.providers.Options#qiskit.providers.Options "qiskit.providers.Options")
</Function>
`);
});

// ------------------------------------------------------------------
// Transform admonitions
// ------------------------------------------------------------------

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
  ).toEqual(`<Admonition title="Note" type="note">
  To use these tools locally, you’ll need to install the additional dependencies for the visualization functions:
</Admonition>

<Admonition title="Warning" type="caution">
  This is a warning
</Admonition>

<Admonition title="Important" type="danger">
  The global phase gate ($e^{i\\theta}$).
</Admonition>
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
  ).toEqual(`<Admonition title="Deprecated since version 0.23.0" type="danger">
  The method \`qiskit.circuit.quantumregister.QuantumRegister.qasm()\` is deprecated as of qiskit-terra 0.23.0. It will be removed no earlier than 3 months after the release date. Correct exporting to OpenQASM 2 is the responsibility of a larger exporter; it cannot safely be done on an object-by-object basis without context. No replacement will be provided, because the premise is wrong.
</Admonition>
`);
});

// ------------------------------------------------------------------
// Handle math expressions
// ------------------------------------------------------------------

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
  )
    .toEqual(`|                                                                                                                                                                       |                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [\`GlobalPhaseGate\`](../stubs/qiskit.circuit.library.GlobalPhaseGate#qiskit.circuit.library.GlobalPhaseGate "qiskit.circuit.library.GlobalPhaseGate")(phase\\[, label]) | The global phase gate ($e^{i\\theta}$). |
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
  ).toEqual(`$$
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
`);
});

// ------------------------------------------------------------------
// Transform links
// ------------------------------------------------------------------

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
        </ul>
      </div>
    </section>
  </article>
</div>`),
  ).toEqual(`<span id="qiskit-ibm-runtime-api-reference" />

# qiskit-ibm-runtime API reference

*   [Qiskit Runtime (\`qiskit_ibm_runtime\`)](runtime_service)
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
  ).toEqual(`<span id="qiskit-ibm-runtime-api-reference" />

# qiskit-ibm-runtime API reference

*   [Qiskit Runtime (\`qiskit_ibm_runtime\`)](runtime_service)
*   [Primitive options (\`qiskit_ibm_runtime.options\`)](options)
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
  ).toEqual("");
});

test("convert source links", async () => {
  expect(
    await toMd(`<div role='main'>
<span class='sig-prename descclassname'><span class='pre'>IBMBackend.</span></span><span class='sig-name descname'><span class='pre'>control_channel</span></span><span class='sig-paren'>(</span><em class='sig-param'><span class='n'><span class='pre'>qubits</span></span></em><span class='sig-paren'>)</span><a class='reference internal' href='../_modules/qiskit_ibm_runtime/ibm_backend.html#IBMBackend.control_channel'><span class='viewcode-link'><span class='pre'>[source]</span></span></a><a class='headerlink' href='#qiskit_ibm_runtime.IBMBackend.control_channel' title='Permalink to this definition'>¶</a>
</div>`),
  ).toEqual(
    `IBMBackend.control\\_channel(*qubits*)[\\[source\\]](https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit_ibm_runtime/ibm_backend.py)\n`,
  );
});

// ------------------------------------------------------------------
// apiType headings conversion
// ------------------------------------------------------------------

test("convert class signature headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
    <h1>Estimator<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
      <dl class='py class'>
        <dt class='sig sig-object py' id='qiskit_ibm_runtime.Sampler'>
          <em class='property'
          ><span class='pre'>class</span><span class='w'> </span></em
          ><span class='sig-name descname'><span class='pre'>SamplerExample</span></span
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
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `# Estimator

### Sampler

<Class id="qiskit_ibm_runtime.Sampler" github="https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit_ibm_runtime/sampler.py" signature="SamplerExample(circuits=None, parameters=None)" modifiers="class">
  Class for interacting with Qiskit Runtime Sampler primitive service.
</Class>\n`,
    meta: {
      apiName: "qiskit_ibm_runtime.Sampler",
      apiType: "class",
    },
  });
});

test("convert class property headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
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
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `# circuits

<Attribute id="qiskit_ibm_runtime.Estimator.circuits" attributeTypeHint="tuple[qiskit.circuit.quantumcircuit.QuantumCircuit, ...]" isDedicatedPage={true}>
  Quantum circuits that represents quantum states.
</Attribute>\n`,
    meta: {
      apiName: "qiskit_ibm_runtime.Estimator.circuits",
      apiType: "property",
    },
  });
});

test("convert abstract class property headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
<h1>Estimator.circuits<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
<dl class='py property'>
  <dt class='sig sig-object py' id='qiskit_ibm_runtime.Estimator.circuits'>
    <em class='property'
    ><span class='pre'>abstract</span><span class='w'> </span><span class='pre'>property</span><span class='w'> </span></em
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
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `# circuits

<Attribute id="qiskit_ibm_runtime.Estimator.circuits" attributeTypeHint="tuple[qiskit.circuit.quantumcircuit.QuantumCircuit, ...]" isDedicatedPage={true} modifiers="abstract property">
  Quantum circuits that represents quantum states.
</Attribute>\n`,
    meta: {
      apiName: "qiskit_ibm_runtime.Estimator.circuits",
      apiType: "property",
    },
  });
});

test("convert class method headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
<h1>Estimator.run<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
<dl class='py method'>
<dt class='sig sig-object py' id='qiskit_ibm_runtime.Estimator.run'>
<span class='sig-prename descclassname'><span class='pre'>Estimator.</span></span><span class='sig-name descname'><span class='pre'>run</span></span><span class='sig-paren'>(</span><em class='sig-param'><span class='n'><span class='pre'>circuits</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>observables</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>parameter_values</span></span><span class='o'><span class='pre'>=</span></span><span class='default_value'><span class='pre'>None</span></span></em>, <em class='sig-param'><span class='o'><span class='pre'>**</span></span><span class='n'><span class='pre'>kwargs</span></span></em><span class='sig-paren'>)</span><a class='reference internal' href='../_modules/qiskit_ibm_runtime/estimator.html#Estimator.run'><span class='viewcode-link'><span class='pre'>[source]</span></span></a><a class='headerlink' href='#qiskit_ibm_runtime.Estimator.run' title='Permalink to this definition'>¶</a></dt>
<dd><p>Submit a request to the estimator primitive program.</p></dd></dl>
</div>
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `# run

<Function id="qiskit_ibm_runtime.Estimator.run" isDedicatedPage={true} signature="Estimator.run(circuits, observables, parameter_values=None, **kwargs)">
  Submit a request to the estimator primitive program.
</Function>\n`,
    meta: {
      apiName: "qiskit_ibm_runtime.Estimator.run",
      apiType: "method",
    },
  });
});

test("convert class attributes headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
<h1>EnvironmentOptions.callback<a class='headerlink' href='#estimator' title='Permalink to this heading'>¶</a></h1>
<dl class='py attribute'>
<dt class='sig sig-object py' id='qiskit_ibm_runtime.options.EnvironmentOptions.callback'>
<span class='sig-prename descclassname'><span class='pre'>EnvironmentOptions.</span></span><span class='sig-name descname'><span class='pre'>callback</span></span><em class='property'><span class='p'><span class='pre'>:</span></span><span class='w'> </span><span class='pre'>Optional</span><span class='p'><span class='pre'>[</span></span><span class='pre'>Callable</span><span class='p'><span class='pre'>]</span></span></em><em class='property'><span class='w'> </span><span class='p'><span class='pre'>=</span></span><span class='w'> </span><span class='pre'>None</span></em><a class='headerlink' href='#qiskit_ibm_runtime.options.EnvironmentOptions.callback' title='Permalink to this definition'>¶</a></dt>
<dd></dd></dl>
</div>
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `# callback

<Attribute id="qiskit_ibm_runtime.options.EnvironmentOptions.callback" attributeTypeHint="Optional[Callable]" attributeValue="None" isDedicatedPage={true} />\n`,
    meta: {
      apiName: "qiskit_ibm_runtime.options.EnvironmentOptions.callback",
      apiType: "attribute",
    },
  });
});

test("convert functions headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
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
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `<span id="job-monitor" />

# job\\_monitor

<Function id="qiskit_ibm_provider.job.job_monitor" isDedicatedPage={true} github="https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit_ibm_provider/job/job_monitor.py" signature="job_monitor(job, interval=None, output=<_io.TextIOWrapper name='<stdout>' mode='w' encoding='utf-8'>)">
  Monitor the status of an \`IBMJob\` instance.

  **Parameters**

  *   **job** (\`IBMJob\`) – Job to monitor.
  *   **interval** (\`Optional\`\\[\`float\`]) – Time interval between status queries.
  *   **output** (\`TextIO\`) – The file like object to write status messages to. By default this is sys.stdout.

  **Return type**

  \`None\`
</Function>\n`,
    meta: {
      apiName: "qiskit_ibm_provider.job.job_monitor",
      apiType: "function",
    },
  });
});

test("convert exception headings", async () => {
  expect(
    await toMd(
      `<div role='main'>
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
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `<span id="ibmjoberror" />

# IBMJobError

<Class id="qiskit_ibm_provider.job.IBMJobError" isDedicatedPage={true} github="https://github.com/Qiskit/qiskit-ibm-runtime/tree/0.9.2/qiskit_ibm_provider/job/exceptions.py" signature="IBMJobError(*message)" modifiers="exception">
  Base class for errors raised by the job modules.

  Set the error message.
</Class>\n`,
    meta: {
      apiName: "qiskit_ibm_provider.job.IBMJobError",
      apiType: "exception",
    },
  });
});

test("convert module headings removing () around the title", async () => {
  expect(
    await toMd(
      `<div role='main'>
  <span class="target" id="module-qiskit_ibm_runtime"></span><section id="qiskit-runtime-qiskit-ibm-runtime">
<h1>Qiskit Runtime (<a class="reference internal" href="#module-qiskit_ibm_runtime" title="qiskit_ibm_runtime"><code class="xref py py-mod docutils literal notranslate"><span class="pre">qiskit_ibm_runtime</span></code></a>)<a class="headerlink" href="#qiskit-runtime-qiskit-ibm-runtime" title="Permalink to this heading">¶</a></h1>
<p>Modules related to Qiskit Runtime IBM Client.</p>
</div>
`,
      true,
    ),
  ).toEqual({
    images: [],
    isReleaseNotes: false,
    markdown: `<span id="module-qiskit_ibm_runtime" />

<span id="qiskit-runtime-qiskit-ibm-runtime" />

# Qiskit Runtime

\`qiskit_ibm_runtime\`

Modules related to Qiskit Runtime IBM Client.\n`,
    meta: {
      apiName: "qiskit_ibm_runtime",
      apiType: "module",
    },
  });
});

// ------------------------------------------------------------------
// Release notes HTML to markdown
// ------------------------------------------------------------------

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
      fileName: "release_notes.html",
      isCApi: false,
      ...DEFAULT_ARGS,
    }),
  ).toEqual({
    images: [],
    isReleaseNotes: true,
    markdown: `# My Quantum release notes

<span id="release-notes-0-14-0" />

<span id="id1" />

## 0.14.0

<span id="new-features" />

<span id="release-notes-0-14-0-new-features" />

### New Features

*   There is a new class, \`qiskit_ibm_runtime.Batch\` that currently works the same way as [\`qiskit_ibm_runtime.Session\`](stubs/qiskit_ibm_runtime.Session#qiskit_ibm_runtime.Session \"qiskit_ibm_runtime.Session\") but will later be updated to better support submitting multiple jobs at once.\n`,
    meta: {},
  });
});

test("generate correct heading level", async () => {
  expect(
    await toMd(
      `
      <div role="main">
      <h1>Test classes and methods</h1>
      <dl class="py class">
      <dt class="sig sig-object py" id="qiskit.test.myClass1">
      <em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.test.</span></span><span class="sig-name descname"><span class="pre">myClass1</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Inline class</p>

      <dl class="py exception">
      <dt class="sig sig-object py" id="qiskit.test.myClass1.exception1">
      <em class="property"><span class="pre">exception</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">exception1</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Exception 1</p>
      </dd></dl>

      <dl class="py method">
      <dt class="sig sig-object py" id="qiskit.test.myClass1.method1">
      <em class="property"><span class="pre">abstract</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">method1</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Method 1</p>
      </dd></dl>

      <dl class="py method">
      <dt class="sig sig-object py" id="qiskit.test.myClass1.method2">
      <em class="property"><span class="pre">abstract</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">method2</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Method 2</p>
      </dd></dl>
      
      </dd></dl>

      <dl class="py attribute">
      <dt class="sig sig-object py" id="qiskit.test.attribute1">
      <em class="property"><span class="w"> </span></em><span class="sig-name descname"><span class="pre">attribute1</span></span><span class="sig-paren">: None = None</span></dt>
      <dd><p>Attribute 1</p>
      </dd></dl>

      <dl class="py class">
      <dt class="sig sig-object py" id="qiskit.test.myClass2">
      <em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.test.</span></span><span class="sig-name descname"><span class="pre">myClass2</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Inline class 2</p>

        <dl class="py class">
        <dt class="sig sig-object py" id="qiskit.test.myClass2.myClass3">
        <em class="property"><span class="pre">class</span><span class="w"> </span></em><span class="sig-prename descclassname"><span class="pre">qiskit.test.</span></span><span class="sig-name descname"><span class="pre">myClass3</span></span><span class="sig-paren">()</span></dt>
        <dd><p>Inline class inside another class</p>

        <dl class="py method">
        <dt class="sig sig-object py" id="qiskit.test.myClass2.myClass3.method3">
        <em class="property"><span class="pre">abstract</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">method3</span></span><span class="sig-paren">()</span></dt>
        <dd><p>Method 3</p>
        </dd></dl>

        <dl class="py exception">
        <dt class="sig sig-object py" id="qiskit.test.myClass2.myClass3.exception2">
        <em class="property"><span class="pre">exception</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">exception2</span></span><span class="sig-paren">()</span></dt>
        <dd><p>Exception 2</p>
        </dd></dl>

        <dl class="py method">
        <dt class="sig sig-object py" id="qiskit.test.myClass2.myClass3.method4">
        <em class="property"><span class="pre">abstract</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">method4</span></span><span class="sig-paren">()</span></dt>
        <dd><p>Method 4</p>
        </dd></dl>
        
        </dd></dl>
      </dd></dl>

      <dl class="py function">
      <dt class="sig sig-object py" id="qiskit.test.function1">
      <em class="property"><span class="pre">abstract</span><span class="w"> </span></em><span class="sig-name descname"><span class="pre">function1</span></span><span class="sig-paren">()</span></dt>
      <dd><p>Function 1</p>
      </dd></dl>
      </div>
      `,
    ),
  ).toEqual(`# Test classes and methods

### myClass1

<Class id="qiskit.test.myClass1" signature="qiskit.test.myClass1()" modifiers="class">
  Inline class

  #### exception1

  <Class id="qiskit.test.myClass1.exception1" signature="exception1()" modifiers="exception">
    Exception 1
  </Class>

  #### method1

  <Function id="qiskit.test.myClass1.method1" signature="method1()" modifiers="abstract">
    Method 1
  </Function>

  #### method2

  <Function id="qiskit.test.myClass1.method2" signature="method2()" modifiers="abstract">
    Method 2
  </Function>
</Class>

### attribute1

<Attribute id="qiskit.test.attribute1" attributeTypeHint="None" attributeValue="None">
  Attribute 1
</Attribute>

### myClass2

<Class id="qiskit.test.myClass2" signature="qiskit.test.myClass2()" modifiers="class">
  Inline class 2

  #### myClass3

  <Class id="qiskit.test.myClass2.myClass3" signature="qiskit.test.myClass3()" modifiers="class">
    Inline class inside another class

    ##### method3

    <Function id="qiskit.test.myClass2.myClass3.method3" signature="method3()" modifiers="abstract">
      Method 3
    </Function>

    ##### exception2

    <Class id="qiskit.test.myClass2.myClass3.exception2" signature="exception2()" modifiers="exception">
      Exception 2
    </Class>

    ##### method4

    <Function id="qiskit.test.myClass2.myClass3.method4" signature="method4()" modifiers="abstract">
      Method 4
    </Function>
  </Class>
</Class>

### function1

<Function id="qiskit.test.function1" signature="function1()" modifiers="abstract">
  Function 1
</Function>
`);
});

// ------------------------------------------------------------------
// C API: Functions and structs
// ------------------------------------------------------------------

test("handle <dl> with className function", async () => {
  expect(
    await toMd(
      `
      <div role="main">
      <p>Links of functions:</p>
      <dl class="cpp function">
      <dt class="sig sig-object cpp" id="_CPPv411qk_obs_zero8uint32_t">
      <span id="_CPPv311qk_obs_zero8uint32_t"></span><span id="_CPPv211qk_obs_zero8uint32_t"></span><span id="qk_obs_zero__uint32_t"></span><span class="target" id="group__QkSparseObservable_1gaf6fff59681bd7c1dd6fc1164b5b1568d"></span><span class="n"><span class="pre">QkSparseObservable</span></span><span class="w"> </span><span class="p"><span class="pre">*</span></span><span class="sig-name descname"><span class="n"><span class="pre">qk_obs_zero</span></span></span><span class="sig-paren">(</span><span class="n"><span class="pre">uint32_t</span></span><span class="w"> </span><span class="n sig-param"><span class="pre">num_qubits</span></span><span class="sig-paren">)</span><a class="headerlink" href="#_CPPv411qk_obs_zero8uint32_t" title="Permalink to this definition">¶</a><br /></dt>
      <dd><p>Construct the zero observable (without any terms).</p>
      <dl class="field-list simple">
      <dt class="field-odd">Parameters<span class="colon">:</span></dt>
      <dd class="field-odd"><p><strong>num_qubits</strong> – The number of qubits the observable is defined on.</p>
      </dd>
      <dt class="field-even">Returns<span class="colon">:</span></dt>
      <dd class="field-even"><p>A pointer to the created observable.</p>
      </dd>
      </dl>
      </dd></dl>
      </div>
  `,
      undefined,
      true,
    ),
  ).toEqual(`Links of functions:

### qk\\_obs\\_zero

<Function id="qk_obs_zero" signature="QkSparseObservable *qk_obs_zero(uint32_t num_qubits)">
  Construct the zero observable (without any terms).

  **Parameters**

  **num\\_qubits** – The number of qubits the observable is defined on.

  **Returns**

  A pointer to the created observable.
</Function>
`);
});

test("handle <dl> with className struct", async () => {
  expect(
    await toMd(
      `
      <div role="main">
      <p>Links of structs:</p>
      <dl class="cpp struct">
      <dt class="sig sig-object cpp" id="_CPPv412QkSparseTerm">
      <span id="_CPPv312QkSparseTerm"></span><span id="_CPPv212QkSparseTerm"></span><span id="QkSparseTerm"></span><span class="target" id="structQkSparseTerm"></span><span class="k"><span class="pre">struct</span></span><span class="w"> </span><span class="sig-name descname"><span class="n"><span class="pre">QkSparseTerm</span></span></span><a class="headerlink" href="#_CPPv412QkSparseTerm" title="Permalink to this definition">¶</a><br /></dt>
      <dd><div class="docutils container">
      <em>#include &lt;qiskit.h&gt;</em></div>
      <p>This is a struct.</p>
      <section id="structQkSparseTerm_1autotoc_md2">
      <h2>Safety<a class="headerlink" href="#structQkSparseTerm_1autotoc_md2" title="Permalink to this heading">¶</a></h2>
      <ul class="simple">
      <li><p><code class="docutils literal notranslate"><span class="pre">bit_terms</span></code> must be a non-null, aligned pointer to <code class="docutils literal notranslate"><span class="pre">len</span></code> elements of type <code class="docutils literal notranslate"><span class="pre">BitTerm</span></code>.</p></li>
      <li><p><code class="docutils literal notranslate"><span class="pre">indices</span></code> must be a non-null, aligned pointer to <code class="docutils literal notranslate"><span class="pre">len</span></code> elements of type <code class="docutils literal notranslate"><span class="pre">uint32_t</span></code>. </p></li>
      </ul>
      </section>
      </dd></dl>
      </div>
  `,
      undefined,
      true,
    ),
  ).toEqual(`Links of structs:

### QkSparseTerm

<Class id="QkSparseTerm" signature="struct QkSparseTerm">
  *#include \\<qiskit.h>*

  This is a struct.

  <span id=\"structQkSparseTerm_1autotoc_md2\" />

  #### Safety

  *   \`bit_terms\` must be a non-null, aligned pointer to \`len\` elements of type \`BitTerm\`.
  *   \`indices\` must be a non-null, aligned pointer to \`len\` elements of type \`uint32_t\`.
</Class>
`);
});
