// This code is a Qiskit project.
//
// (C) Copyright IBM 2025.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { expect, test } from "@playwright/test";

import { collectInlineDelimiterErrors } from "./mathUtils.js";

// ---------------------------------------------------------------------------
// Inline math
// ---------------------------------------------------------------------------

test("collectInlineDelimiterErrors() - inline math, no errors", () => {
  // No math
  expect(collectInlineDelimiterErrors("Hello world.")).toEqual([]);

  // Math with no trailing punctuation
  expect(collectInlineDelimiterErrors("The value is $x = 1$")).toEqual([]);

  // Punctuation correctly placed outside the delimiter
  expect(collectInlineDelimiterErrors("The value is $x = 1$.")).toEqual([]);
  expect(collectInlineDelimiterErrors("For $a$, $b$, and $c$,")).toEqual([]);

  // Period inside math but not at the end (decimal number)
  expect(collectInlineDelimiterErrors("Use $1.5$ as the step.")).toEqual([]);

  // Block math with trailing punctuation is ignored
  expect(collectInlineDelimiterErrors("$$\nx + y.\n$$")).toEqual([]);
  expect(collectInlineDelimiterErrors("$$x + y,$$")).toEqual([]);

  // Content inside fenced code blocks is ignored
  expect(
    collectInlineDelimiterErrors(
      "```\n$x = 1.$\n[link](http://example.com.)\n```",
    ),
  ).toEqual([]);
  expect(
    collectInlineDelimiterErrors(
      "```powershell\n$ver = 'abc'\n$bits = 64\n```",
    ),
  ).toEqual([]);

  // LaTeX ellipsis command is not plain punctuation
  expect(collectInlineDelimiterErrors("$x \\ldots y$")).toEqual([]);

  // LaTeX spacing commands \; and \! are not plain punctuation
  expect(collectInlineDelimiterErrors("$\\mathbb{Z}_1 = \\{0\\},\\;$")).toEqual(
    [],
  );
  expect(collectInlineDelimiterErrors("$n=7\\!:$")).toEqual([]);
  expect(collectInlineDelimiterErrors("$\\Phi(\\rho)\\!:$")).toEqual([]);
});

test("collectInlineDelimiterErrors() - inline math, trailing period", () => {
  expect(collectInlineDelimiterErrors("The value is $x = 1.$")).toEqual([
    "Inline math expression ends with punctuation: `$x = 1.$`",
  ]);
});

test("collectInlineDelimiterErrors() - inline math, trailing semicolon", () => {
  expect(collectInlineDelimiterErrors("Let $x = 1;$")).toEqual([
    "Inline math expression ends with punctuation: `$x = 1;$`",
  ]);
});

test("collectInlineDelimiterErrors() - inline math, trailing colon", () => {
  expect(collectInlineDelimiterErrors("Given $x:$")).toEqual([
    "Inline math expression ends with punctuation: `$x:$`",
  ]);
});

test("collectInlineDelimiterErrors() - inline math, trailing comma", () => {
  expect(collectInlineDelimiterErrors("Values $a,$")).toEqual([
    "Inline math expression ends with punctuation: `$a,$`",
  ]);
});

test("collectInlineDelimiterErrors() - inline math, trailing punctuation with whitespace", () => {
  expect(collectInlineDelimiterErrors("The value is $x = 1.  $")).toEqual([
    "Inline math expression ends with punctuation: `$x = 1.  $`",
  ]);
});

test("collectInlineDelimiterErrors() - inline math, multiple errors", () => {
  const markdown = `
Some text with $a = 1.$ and more.
Other text with $b = 2,$ here.
Block (ignored):
$$
c + d.
$$
`;
  expect(collectInlineDelimiterErrors(markdown)).toEqual([
    "Inline math expression ends with punctuation: `$a = 1.$`",
    "Inline math expression ends with punctuation: `$b = 2,$`",
  ]);
});

// ---------------------------------------------------------------------------
// Hyperlinks
// ---------------------------------------------------------------------------

test("collectInlineDelimiterErrors() - hyperlinks, no errors", () => {
  // Clean link
  expect(collectInlineDelimiterErrors("[IBM](https://ibm.com)")).toEqual([]);

  // Punctuation correctly placed outside the closing paren
  expect(collectInlineDelimiterErrors("See [IBM](https://ibm.com).")).toEqual(
    [],
  );

  // URL with punctuation not at the end (query params, paths)
  expect(
    collectInlineDelimiterErrors("[link](https://example.com/a,b/path)"),
  ).toEqual([]);
  expect(
    collectInlineDelimiterErrors("[link](https://example.com/path?a=1&b=2)"),
  ).toEqual([]);
});

test("collectInlineDelimiterErrors() - hyperlink, trailing period in URL", () => {
  expect(collectInlineDelimiterErrors("[link](https://example.com.)")).toEqual([
    "Hyperlink URL ends with punctuation: `[link](https://example.com.)`",
  ]);
});

test("collectInlineDelimiterErrors() - hyperlink, trailing comma in URL", () => {
  expect(collectInlineDelimiterErrors("[link](https://example.com,)")).toEqual([
    "Hyperlink URL ends with punctuation: `[link](https://example.com,)`",
  ]);
});

test("collectInlineDelimiterErrors() - hyperlink, trailing semicolon in URL", () => {
  expect(collectInlineDelimiterErrors("[link](https://example.com;)")).toEqual([
    "Hyperlink URL ends with punctuation: `[link](https://example.com;)`",
  ]);
});

test("collectInlineDelimiterErrors() - hyperlink, trailing colon in URL", () => {
  expect(collectInlineDelimiterErrors("[link](https://example.com:)")).toEqual([
    "Hyperlink URL ends with punctuation: `[link](https://example.com:)`",
  ]);
});

test("collectInlineDelimiterErrors() - mixed math and hyperlink errors", () => {
  const markdown = `See $x,$ and [docs](https://example.com.) for details.`;
  expect(collectInlineDelimiterErrors(markdown)).toEqual([
    "Inline math expression ends with punctuation: `$x,$`",
    "Hyperlink URL ends with punctuation: `[docs](https://example.com.)`",
  ]);
});
