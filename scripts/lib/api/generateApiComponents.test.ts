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

import { expect, test } from "@jest/globals";
import { CheerioAPI, Cheerio, load as cheerioLoad } from "cheerio";

import {
  ComponentProps,
  prepareGitHubLink,
  htmlSignatureToMd,
  addExtraSignatures,
  createOpeningTag,
} from "./generateApiComponents";

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

test("htmlSignatureToMd", async () => {
  const html = `<span class="sig-name descname"><span class="pre">for_loop</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">indexset</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Iterable" title="(in Python v3.12)"><span class="pre">Iterable</span></a><span class="p"><span class="pre">[</span></span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">loop_parameter</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.Parameter"><span class="pre">Parameter</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">body</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#str" title="(in Python v3.12)"><span class="pre">str</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><span class="pre">ForLoopContext</span></span></span><a class="reference internal" href="../_modules/qiskit/circuit/quantumcircuit.html#QuantumCircuit.for_loop"><span class="viewcode-link"><span class="pre">[source]</span></span></a></dt>`;
  const result = await htmlSignatureToMd(html);
  expect(result).toEqual(
    `for_loop(indexset: Iterable[int], loop_parameter: Parameter | None, body: None, qubits: None, clbits: None, *, label: str | None) → ForLoopContext[source]`,
  );
});

describe("addExtraSignatures()", () => {
  test("Function with overload signatures", () => {
    const rawSignature = `<span class="sig-name descname"><span class="pre">for_loop</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">indexset</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Iterable" title="(in Python v3.12)"><span class="pre">Iterable</span></a><span class="p"><span class="pre">[</span></span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">loop_parameter</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.Parameter"><span class="pre">Parameter</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">body</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#str" title="(in Python v3.12)"><span class="pre">str</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><span class="pre">ForLoopContext</span></span></span><a class="reference internal" href="../_modules/qiskit/circuit/quantumcircuit.html#QuantumCircuit.for_loop"><span class="viewcode-link"><span class="pre">[source]</span></span></a></dt>`;
    const overloadRawSignature = `<span class="pre">for_loop</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">indexset</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Iterable" title="(in Python v3.12)"><span class="pre">Iterable</span></a><span class="p"><span class="pre">[</span></span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">loop_parameter</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.parameter.Parameter"><span class="pre">Parameter</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">body</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="#qiskit.circuit.QuantumCircuit" title="qiskit.circuit.quantumcircuit.QuantumCircuit"><span class="pre">QuantumCircuit</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Sequence" title="(in Python v3.12)"><span class="pre">Sequence</span></a><span class="p"><span class="pre">[</span></span><a class="reference internal" href="qiskit.circuit.Qubit.html#qiskit.circuit.Qubit" title="qiskit.circuit.quantumregister.Qubit"><span class="pre">Qubit</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference internal" href="qiskit.circuit.QuantumRegister.html#qiskit.circuit.QuantumRegister" title="qiskit.circuit.quantumregister.QuantumRegister"><span class="pre">QuantumRegister</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#slice" title="(in Python v3.12)"><span class="pre">slice</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Sequence" title="(in Python v3.12)"><span class="pre">Sequence</span></a><span class="p"><span class="pre">[</span></span><a class="reference internal" href="qiskit.circuit.Qubit.html#qiskit.circuit.Qubit" title="qiskit.circuit.quantumregister.Qubit"><span class="pre">Qubit</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Sequence" title="(in Python v3.12)"><span class="pre">Sequence</span></a><span class="p"><span class="pre">[</span></span><a class="reference internal" href="qiskit.circuit.Clbit.html#qiskit.circuit.Clbit" title="qiskit.circuit.classicalregister.Clbit"><span class="pre">Clbit</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference internal" href="qiskit.circuit.ClassicalRegister.html#qiskit.circuit.ClassicalRegister" title="qiskit.circuit.classicalregister.ClassicalRegister"><span class="pre">ClassicalRegister</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#slice" title="(in Python v3.12)"><span class="pre">slice</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Sequence" title="(in Python v3.12)"><span class="pre">Sequence</span></a><span class="p"><span class="pre">[</span></span><a class="reference internal" href="qiskit.circuit.Clbit.html#qiskit.circuit.Clbit" title="qiskit.circuit.classicalregister.Clbit"><span class="pre">Clbit</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#str" title="(in Python v3.12)"><span class="pre">str</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><a class="reference internal" href="qiskit.circuit.InstructionSet.html#qiskit.circuit.InstructionSet" title="qiskit.circuit.instructionset.InstructionSet"><span class="pre">InstructionSet</span></a></span></span></dt>`;
    const componentProps = {
      id: "qiskit.circuit.QuantumCircuit.for_loop",
      rawSignature,
    };
    const extraRawSignatures = [
      {
        id: "qiskit.circuit.QuantumCircuit.for_loop",
        rawSignature: overloadRawSignature,
      },
    ];

    const resultExpected = {
      id: "qiskit.circuit.QuantumCircuit.for_loop",
      rawSignature,
      extraRawSignatures: [overloadRawSignature],
    };
    addExtraSignatures(componentProps, extraRawSignatures);
    expect(componentProps).toEqual(resultExpected);
  });

  test("Function without overload signatures", () => {
    const rawSignature = `<span class="sig-name descname"><span class="pre">for_loop</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">indexset</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Iterable" title="(in Python v3.12)"><span class="pre">Iterable</span></a><span class="p"><span class="pre">[</span></span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">loop_parameter</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.Parameter"><span class="pre">Parameter</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">body</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#str" title="(in Python v3.12)"><span class="pre">str</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><span class="pre">ForLoopContext</span></span></span><a class="reference internal" href="../_modules/qiskit/circuit/quantumcircuit.html#QuantumCircuit.for_loop"><span class="viewcode-link"><span class="pre">[source]</span></span></a></dt>`;
    const componentProps = {
      id: "qiskit.circuit.QuantumCircuit.for_loop",
      rawSignature,
    };
    const extraRawSignatures: ComponentProps[] = [];

    addExtraSignatures(componentProps, extraRawSignatures);
    expect(componentProps).toEqual(componentProps);
  });
});

describe("createOpeningTag()", () => {
  test("Create Function tag with some props", async () => {
    const rawSignature = `<span class="sig-name descname"><span class="pre">for_loop</span></span><span class="sig-paren">(</span><em class="sig-param"><span class="n"><span class="pre">indexset</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/typing.html#typing.Iterable" title="(in Python v3.12)"><span class="pre">Iterable</span></a><span class="p"><span class="pre">[</span></span><a class="reference external" href="https://docs.python.org/3/library/functions.html#int" title="(in Python v3.12)"><span class="pre">int</span></a><span class="p"><span class="pre">]</span></span></span></em>, <em class="sig-param"><span class="n"><span class="pre">loop_parameter</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference internal" href="qiskit.circuit.Parameter.html#qiskit.circuit.Parameter" title="qiskit.circuit.Parameter"><span class="pre">Parameter</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">body</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">qubits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="n"><span class="pre">clbits</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em>, <em class="sig-param"><span class="o"><span class="pre">*</span></span></em>, <em class="sig-param"><span class="n"><span class="pre">label</span></span><span class="p"><span class="pre">:</span></span><span class="w"> </span><span class="n"><a class="reference external" href="https://docs.python.org/3/library/stdtypes.html#str" title="(in Python v3.12)"><span class="pre">str</span></a><span class="w"> </span><span class="p"><span class="pre">|</span></span><span class="w"> </span><a class="reference external" href="https://docs.python.org/3/library/constants.html#None" title="(in Python v3.12)"><span class="pre">None</span></a></span></em><span class="sig-paren">)</span> <span class="sig-return"><span class="sig-return-icon">&#x2192;</span> <span class="sig-return-typehint"><span class="pre">ForLoopContext</span></span></span><a class="reference internal" href="../_modules/qiskit/circuit/quantumcircuit.html#QuantumCircuit.for_loop"><span class="viewcode-link"><span class="pre">[source]</span></span></a></dt>`;
    const componentProps = {
      id: "qiskit.circuit.QuantumCircuit.for_loop",
      name: "for_loop",
      rawSignature,
    };

    const tag = await createOpeningTag("Function", componentProps);
    expect(tag).toEqual(`<Function 
    id='qiskit.circuit.QuantumCircuit.for_loop'
    name='for_loop'
    attributeTypeHint='undefined'
    attributeValue='undefined'
    github='undefined'
    signature='for_loop(indexset: Iterable[int], loop_parameter: Parameter | None, body: None, qubits: None, clbits: None, *, label: str | None) → ForLoopContext[source]'
    extraSignatures='[]'
    >
  `);
  });

  test("Create Attribute tag with default value and type hint", async () => {
    const componentProps = {
      id: "qiskit.circuit.QuantumCircuit.instance",
      name: "instance",
      attributeTypeHint: "str | None",
      attributeValue: "None",
    };

    const tag = await createOpeningTag("Attribute", componentProps);
    expect(tag).toEqual(`<Attribute 
    id='qiskit.circuit.QuantumCircuit.instance'
    name='instance'
    attributeTypeHint='str | None'
    attributeValue='None'
    github='undefined'
    signature=''
    extraSignatures='[]'
    >
  `);
  });

  test("Create tag without props", async () => {
    const componentProps = {
      id: "qiskit.circuit.Sampler",
    };

    const tag = await createOpeningTag("Class", componentProps);
    expect(tag).toEqual(`<Class 
    id='qiskit.circuit.Sampler'
    name='undefined'
    attributeTypeHint='undefined'
    attributeValue='undefined'
    github='undefined'
    signature=''
    extraSignatures='[]'
    >
  `);
  });
});

describe("prepareGitHubLink()", () => {
  test("no link", () => {
    const html = `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`;
    const doc = Doc.load(html);
    const result = prepareGitHubLink(doc.$main, false);
    expect(result).toEqual(undefined);
    doc.expectHtml(html);
  });

  test("link from sphinx.ext.viewcode", () => {
    const doc = Doc.load(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="reference internal" href="https://ibm.com/my_link"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
    const result = prepareGitHubLink(doc.$main, false);
    expect(result).toEqual(`https://ibm.com/my_link`);
    doc.expectHtml(
      `<span class="pre">None</span><span class="sig-paren">)</span><a class="headerlink" href="#qiskit_ibm_runtime.IBMBackend" title="Link to this definition">#</a>`,
    );
  });

  test("link from sphinx.ext.linkcode", () => {
    const doc = Doc.load(
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
    const withLinesDoc = Doc.load(
      `<span class="sig-paren">)</span><a class="reference external" href="https://github.com/Qiskit/qiskit-ibm-provider/tree/stable/0.10/qiskit_ibm_provider/transpiler/passes/scheduling/block_base_padder.py#L91-L117"><span class="viewcode-link"><span class="pre">[source]</span></span></a><a class="headerlink" href="#qiskit_ibm_provider.transpiler.passes.scheduling.PadDelay.run" title="Link to this definition">¶</a>`,
    );
    const withoutLinesDoc = Doc.load(
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
