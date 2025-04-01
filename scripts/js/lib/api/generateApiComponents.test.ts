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
  ComponentProps,
  prepareGitHubLink,
  htmlSignatureToMd,
  addExtraSignatures,
  createOpeningTag,
  setMinimumHeadingLevel,
} from "./generateApiComponents.js";
import { CheerioDoc } from "../testUtils.js";
import { load } from "cheerio";

const RAW_SIGNATURE_EXAMPLE = `<span class='sig-prename descclassname'><span class='pre'>Estimator.</span></span><span class='sig-name descname'><span class='pre'>run</span></span><span class='sig-paren'>(</span><em class='sig-param'><span class='n'><span class='pre'>circuits</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>observables</span></span></em>, <em class='sig-param'><span class='n'><span class='pre'>parameter_values</span></span><span class='o'><span class='pre'>=</span></span><span class='default_value'><span class='pre'>None</span></span></em>, <em class='sig-param'><span class='o'><span class='pre'>**</span></span><span class='n'><span class='pre'>kwargs</span></span></em><span class='sig-paren'>)</span></dt>`;

test("htmlSignatureToMd", async () => {
  const result = await htmlSignatureToMd(RAW_SIGNATURE_EXAMPLE);
  expect(result).toEqual(
    `Estimator.run(circuits, observables, parameter_values=None, **kwargs)`,
  );
});

test.describe("addExtraSignatures()", () => {
  test("Function with overload signatures", () => {
    const componentProps = {
      id: "qiskit_ibm_runtime.Estimator.run",
      rawSignature: "first signature",
    };
    const extraRawSignatures = [
      {
        id: "qiskit_ibm_runtime.Estimator.run",
        rawSignature: "second signature",
      },
    ];

    const resultExpected = {
      id: "qiskit_ibm_runtime.Estimator.run",
      rawSignature: "first signature",
      extraRawSignatures: ["second signature"],
    };
    addExtraSignatures(componentProps, extraRawSignatures);
    expect(componentProps).toEqual(resultExpected);
  });

  test("Function without overload signatures", () => {
    const componentProps = {
      id: "qiskit_ibm_runtime.Estimator.run",
      rawSignature: "first signature",
    };
    const extraRawSignatures: ComponentProps[] = [];

    addExtraSignatures(componentProps, extraRawSignatures);
    expect(componentProps).toEqual(componentProps);
  });
});

test.describe("createOpeningTag()", () => {
  test("Create Function tag with some props", async () => {
    const componentProps = {
      id: "qiskit_ibm_runtime.Estimator.run",
      rawSignature: RAW_SIGNATURE_EXAMPLE,
    };

    const tag = await createOpeningTag("Function", componentProps);
    expect(tag).toEqual(`<Function 
    id='qiskit_ibm_runtime.Estimator.run'
    attributeTypeHint='undefined'
    attributeValue='undefined'
    isDedicatedPage='undefined'
    github='undefined'
    signature='Estimator.run(circuits, observables, parameter_values=None, **kwargs)'
    modifiers='undefined'
    extraSignatures='[]'
    >
  `);
  });

  test("Create Function tag with overloaded signatures", async () => {
    const componentProps = {
      id: "qiskit_ibm_runtime.Estimator.run",
      rawSignature: RAW_SIGNATURE_EXAMPLE,
      extraRawSignatures: [RAW_SIGNATURE_EXAMPLE, RAW_SIGNATURE_EXAMPLE],
    };

    const tag = await createOpeningTag("Function", componentProps);
    expect(tag).toEqual(`<Function 
    id='qiskit_ibm_runtime.Estimator.run'
    attributeTypeHint='undefined'
    attributeValue='undefined'
    isDedicatedPage='undefined'
    github='undefined'
    signature='Estimator.run(circuits, observables, parameter_values=None, **kwargs)'
    modifiers='undefined'
    extraSignatures='["Estimator.run(circuits, observables, parameter_values=None, **kwargs)", "Estimator.run(circuits, observables, parameter_values=None, **kwargs)"]'
    >
  `);
  });

  test("Create Attribute tag with default value and type hint", async () => {
    const componentProps = {
      id: "qiskit.circuit.QuantumCircuit.instance",
      attributeTypeHint: "str | None",
      attributeValue: "None",
    };

    const tag = await createOpeningTag("Attribute", componentProps);
    expect(tag).toEqual(`<Attribute 
    id='qiskit.circuit.QuantumCircuit.instance'
    attributeTypeHint='str | None'
    attributeValue='None'
    isDedicatedPage='undefined'
    github='undefined'
    signature=''
    modifiers='undefined'
    extraSignatures='[]'
    >
  `);
  });

  test("Create Class tag without props", async () => {
    const componentProps = {
      id: "qiskit.circuit.Sampler",
    };

    const tag = await createOpeningTag("Class", componentProps);
    expect(tag).toEqual(`<Class 
    id='qiskit.circuit.Sampler'
    attributeTypeHint='undefined'
    attributeValue='undefined'
    isDedicatedPage='undefined'
    github='undefined'
    signature=''
    modifiers='undefined'
    extraSignatures='[]'
    >
  `);
  });
});

test.describe("prepareGitHubLink()", () => {
  test("no link", () => {
    const html = `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`;
    const doc = CheerioDoc.load(html);
    const result = prepareGitHubLink(doc.$main, false);
    expect(result).toEqual(undefined);
    doc.expectHtml(html);
  });

  test("link from sphinx.ext.viewcode", () => {
    const doc = CheerioDoc.load(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="reference internal" href="https://ibm.com/my_link"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
    const result = prepareGitHubLink(doc.$main, false);
    expect(result).toEqual(`https://ibm.com/my_link`);
    doc.expectHtml(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
  });

  test("link from sphinx.ext.linkcode", () => {
    const doc = CheerioDoc.load(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="reference external" href="https://github.com/Qiskit/qiskit/blob/stable/1.0/qiskit/utils/deprecation.py#L24-L101"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
    const result = prepareGitHubLink(doc.$main, false);
    expect(result).toEqual(
      `https://github.com/Qiskit/qiskit/blob/stable/1.0/qiskit/utils/deprecation.py#L24-L101`,
    );
    doc.expectHtml(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
  });

  test("method link only used when it has line numbers", () => {
    const withLinesDoc = CheerioDoc.load(
      `<span class="sig-paren">)</span><a class="reference external" href="https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/transpiler/passes/scheduling/block_base_padder.py#L91-L117"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.transpiler.passes.scheduling.PadDelay.run" title="Link to this definition">¶</a>`,
    );
    const withoutLinesDoc = CheerioDoc.load(
      `<span class="sig-paren">)</span><a class="reference external" href="https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/transpiler/passes/scheduling/block_base_padder.py"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.transpiler.passes.scheduling.PadDelay.run" title="Link to this definition">¶</a>`,
    );
    const withLinesResult = prepareGitHubLink(withLinesDoc.$main, true);
    const withoutLinesResult = prepareGitHubLink(withoutLinesDoc.$main, true);

    expect(withLinesResult).toEqual(
      `https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/transpiler/passes/scheduling/block_base_padder.py#L91-L117`,
    );
    expect(withoutLinesResult).toEqual(undefined);

    const strippedHtml = `<span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_provider.transpiler.passes.scheduling.PadDelay.run" title="Link to this definition">¶</a>`;
    withLinesDoc.expectHtml(strippedHtml);
    withoutLinesDoc.expectHtml(strippedHtml);
  });
});

test.describe("setMinimumHeadingLevel()", () => {
  function setMinLevel(input: string, level: number): string | null {
    const $ = load(`<dl>${input}</dl>`);
    const $dl = $("dl").first();
    setMinimumHeadingLevel($, $dl, level);
    return $dl.html();
  }

  test("increase h1 -> h4", () => {
    const input = `<h1>Heading!</h1>`;
    const expected = `<h4>Heading!</h4>`;
    expect(setMinLevel(input, 4)).toEqual(expected);
  });

  test("increase nested headings", () => {
    const input = `<dl><dd><h1>Heading!</h1></dd></dl>`;
    const expected = `<dl><dd><h4>Heading!</h4></dd></dl>`;
    expect(setMinLevel(input, 4)).toEqual(expected);
  });

  test("preserve relative hierarchy", () => {
    const input = `<h1>Hello</h1><h2>world</h2><h3>!</h3>`;
    const expected = `<h4>Hello</h4><h5>world</h5><h6>!</h6>`;
    expect(setMinLevel(input, 4)).toEqual(expected);
  });

  test("reduce if needed", () => {
    const input = `<h5>Hello</h5>`;
    const expected = `<h2>Hello</h2>`;
    expect(setMinLevel(input, 2)).toEqual(expected);
  });
});
