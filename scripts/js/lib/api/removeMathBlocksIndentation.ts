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

import type { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

/**
 * can't be indented more than one time because it causes the docs app to
 * not properly handle the math block. For example, if the math block appears
 * inside a component like <Class> and the math block is indented 4 spaces,
 * the app errors saying that there is no closing </Class> tag.
 * This is unexpected behavior.
 */
function removeMathBlocksIndentation(results: HtmlToMdResultWithUrl[]): void {
  results.forEach((result) => {
    // Captures all the lines in the math blocks, including the indentation
    // before the $$ characters
    const mathBlockRegex = /^[^\S\r\n]( *)\$\$([\s\S]*?)\$\$/gm;
    const indentRegex = /^ +/gm;
    result.markdown = result.markdown.replace(mathBlockRegex, (match) =>
      match.replace(indentRegex, ""),
    );
  });
}

export default removeMathBlocksIndentation;
