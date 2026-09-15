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

import { collectMathPeriodErrors } from "./mathUtils.js";

test("collectMathPeriodErrors() - no errors", () => {
  // No math at all
  expect(collectMathPeriodErrors("Hello world.")).toEqual([]);

  // Inline math that does not end with a period
  expect(collectMathPeriodErrors("The value is $x = 1$")).toEqual([]);

  // Period outside the inline expression is fine
  expect(collectMathPeriodErrors("The value is $x = 1$.")).toEqual([]);

  // A period inside inline math that is not at the end (e.g. decimal number)
  expect(collectMathPeriodErrors("Use $1.5$ as the step.")).toEqual([]);

  // Block math with a trailing period is ignored
  expect(collectMathPeriodErrors("$$\nx + y.\n$$")).toEqual([]);
  expect(collectMathPeriodErrors("$$x + y.$$")).toEqual([]);

  // Ellipsis LaTeX command is not a plain period
  expect(collectMathPeriodErrors("$x \\ldots y$")).toEqual([]);
});

test("collectMathPeriodErrors() - inline math with trailing period", () => {
  const errors = collectMathPeriodErrors("The value is $x = 1.$");
  expect(errors).toEqual([
    "Inline math expression ends with a period: `$x = 1.$`",
  ]);
});

test("collectMathPeriodErrors() - inline math with trailing period and whitespace", () => {
  const errors = collectMathPeriodErrors("The value is $x = 1.  $");
  expect(errors).toEqual([
    "Inline math expression ends with a period: `$x = 1.  $`",
  ]);
});

test("collectMathPeriodErrors() - multiple inline errors", () => {
  const markdown = `
Some text with $a = 1.$ and more text.
Other text with $b = 2.$ here.
A block (ignored):
$$
c + d.
$$
`;
  const errors = collectMathPeriodErrors(markdown);
  expect(errors).toEqual([
    "Inline math expression ends with a period: `$a = 1.$`",
    "Inline math expression ends with a period: `$b = 2.$`",
  ]);
});

test("collectMathPeriodErrors() - $$ delimiters not matched as inline", () => {
  // Block math with a period inside should produce no errors.
  expect(collectMathPeriodErrors("$$\nf(x).\n$$")).toEqual([]);
  expect(collectMathPeriodErrors("$$f(x).$$")).toEqual([]);
});
