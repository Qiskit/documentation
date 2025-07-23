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

import { removeSuffix } from "./stringUtils";

export function hasInlineMath(markdown: string): boolean {
  return !!markdown.match(/(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)/);
}

export function removeFileExtension(pathname: string): string {
  const extensions = [".mdx", ".ipynb"];

  for (const extension of extensions) {
    if (pathname.endsWith(extension)) {
      return removeSuffix(pathname, extension);
    }
  }

  return pathname;
}
