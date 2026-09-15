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

  // Math that does not end with a period
  expect(collectMathPeriodErrors("The value is $x = 1$")).toEqual([]);
  expect(collectMathPeriodErrors("Block:\n$$\nx + y\n$$")).toEqual([]);

  // Period outside the expression is fine
  expect(collectMathPeriodErrors("The value is $x = 1$.")).toEqual([]);
  expect(collectMathPeriodErrors("Block:\n$$\nx + y\n$$\n.")).toEqual([]);

  // A period that is not at the end of math content (e.g. decimal number)
  expect(collectMathPeriodErrors("Use $1.5$ as the step.")).toEqual([]);

  // Ellipsis-like LaTeX command is not a plain period
  expect(collectMathPeriodErrors("$x \\ldots y$")).toEqual([]);
});

test("collectMathPeriodErrors() - inline math with trailing period", () => {
  const errors = collectMathPeriodErrors("The value is $x = 1.$");
  expect(errors).toEqual([
    "Math expression ends with a period: `$x = 1.$`",
  ]);
});

test("collectMathPeriodErrors() - inline math with trailing period and whitespace", () => {
  const errors = collectMathPeriodErrors("The value is $x = 1.  $");
  expect(errors).toEqual([
    "Math expression ends with a period: `$x = 1.  $`",
  ]);
});

test("collectMathPeriodErrors() - block math with trailing period", () => {
  const errors = collectMathPeriodErrors("$$\nx + y.\n$$");
  expect(errors).toEqual([
    "Math expression ends with a period: `$$\nx + y.\n$$`",
  ]);
});

test("collectMathPeriodErrors() - block math with trailing period and whitespace", () => {
  const errors = collectMathPeriodErrors("$$\nx + y.  \n$$");
  expect(errors).toEqual([
    "Math expression ends with a period: `$$\nx + y.  \n$$`",
  ]);
});

test("collectMathPeriodErrors() - multiple errors", () => {
  const markdown = `
Some text with $a = 1.$ and more text.
Other text with $b = 2.$ here.
A block:
$$
c + d.
$$
`;
  const errors = collectMathPeriodErrors(markdown);
  // Errors should appear in document order (by position of opening delimiter).
  expect(errors).toEqual([
    "Math expression ends with a period: `$a = 1.$`",
    "Math expression ends with a period: `$b = 2.$`",
    "Math expression ends with a period: `$$\nc + d.\n$$`",
  ]);
});

test("collectMathPeriodErrors() - $$ delimiters not matched as inline", () => {
  // Block math with a period inside should only be reported once (as block),
  // not again as two inline expressions.
  const errors = collectMathPeriodErrors("$$\nf(x).\n$$");
  expect(errors).toHaveLength(1);
  expect(errors[0]).toContain("$$");
});
