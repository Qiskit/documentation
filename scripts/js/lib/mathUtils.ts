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

/**
 * Returns an error message for each LaTeX math expression (inline or block)
 * whose content ends with a period. Periods should appear outside the math
 * delimiters, not inside them.
 *
 * Errors are returned in document order (by position of the opening delimiter).
 */
export function collectMathPeriodErrors(markdown: string): string[] {
  const errors: string[] = [];

  // Only check inline math ($...$). Block math ($$...$$) is excluded.
  // Use negative lookahead/lookbehind to avoid matching $$ block delimiters.
  // Inline math must not span newlines.
  const inlineRegex = /(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)/g;
  let m: RegExpExecArray | null;

  while ((m = inlineRegex.exec(markdown)) !== null) {
    const content = m[1];
    if (content.trimEnd().endsWith(".")) {
      errors.push(
        `Inline math expression ends with a period: \`$${content}$\``,
      );
    }
  }

  return errors;
}
