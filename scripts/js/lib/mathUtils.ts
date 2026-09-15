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

// Punctuation characters that must not appear at the end of inline math or
// hyperlink content. They should always be placed after the closing delimiter.
const TRAILING_PUNCTUATION = /[.;:,]$/;

/**
 * Strip fenced code blocks (``` ... ```) from markdown so their contents are
 * not checked for inline math or link patterns.
 */
function stripFencedCodeBlocks(markdown: string): string {
  return markdown.replace(/^```[\s\S]*?^```/gm, "");
}

/**
 * Returns an error message for each inline LaTeX math expression (`$...$`) or
 * markdown hyperlink (`[text](url)`) whose content ends with a punctuation
 * mark (`.` `;` `:` `,`). Those characters should appear after the closing
 * delimiter, not inside it.
 *
 * Block math (`$$...$$`) and fenced code blocks are excluded from this check.
 */
export function collectInlineDelimiterErrors(markdown: string): string[] {
  const errors: string[] = [];
  const stripped = stripFencedCodeBlocks(markdown);

  // Inline math ($...$). Use negative lookahead/lookbehind to avoid matching
  // $$ block delimiters. Inline math must not span newlines.
  const inlineMathRegex = /(?<!\$)\$(?!\$)([^\n$]+?)(?<!\$)\$(?!\$)/g;
  let m: RegExpExecArray | null;

  while ((m = inlineMathRegex.exec(stripped)) !== null) {
    const content = m[1];
    if (TRAILING_PUNCTUATION.test(content.trimEnd())) {
      errors.push(
        `Inline math expression ends with punctuation: \`$${content}$\``,
      );
    }
  }

  // Markdown hyperlinks ([text](url)). Match [...](...) where neither the text
  // nor the URL span a newline. We check the URL (last group) for trailing
  // punctuation, since that is what ends up rendered as the link target.
  const linkRegex = /\[([^\]\n]+)\]\(([^)\n]+)\)/g;

  while ((m = linkRegex.exec(stripped)) !== null) {
    const url = m[2];
    if (TRAILING_PUNCTUATION.test(url.trimEnd())) {
      errors.push(`Hyperlink URL ends with punctuation: \`[${m[1]}](${url})\``);
    }
  }

  return errors;
}
