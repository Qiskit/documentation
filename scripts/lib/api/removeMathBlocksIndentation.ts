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

import { HtmlToMdResultWithUrl } from "./HtmlToMdResult";

/**
 * The math blocks (latex expressions between double dollars $$) can't be
 * indented more than one time. After introducing the MDX components for
 * classes, functions, and attributes, we can't guarantee only one indentation,
 * and this function removes them all
 */
function removeMathBlocksIndentation(results: HtmlToMdResultWithUrl[]): void {
  for (const result of results) {
    // Captures all the lines in the math blocks, including the indentation
    // before the $$ characters
    const mathBlockRegex = /^[^\S\r\n]( *)\$\$([\s\S]*?)\$\$/gm;
    const indentRegex = /^ +/gm;
    result.markdown = result.markdown.replace(mathBlockRegex, function (match) {
      return match.replace(indentRegex, "");
    });
  }
}

export default removeMathBlocksIndentation;
