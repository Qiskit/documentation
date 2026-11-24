// This code is a Qiskit project.
//
// (C) Copyright IBM 2026.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

// When writers link to images, they leave off this prefix.
export const PUBLIC_FOLDER_PREFIX = "public/";

/**
 * Convert image file paths like `public/docs/images/foo@dark.png` into the
 * path that content references, like `docs/images/foo.png`.
 *
 * Dark mode variants aren't explicitly loaded in images in Markdown. As long as
 * the path with `@dark` removed is referenced, the dark variant is used.
 */
export function stripImagePaths(fullPaths: string[]): Set<string> {
  return new Set(
    fullPaths.map((fp) =>
      fp.slice(PUBLIC_FOLDER_PREFIX.length).replace(/@dark/g, ""),
    ),
  );
}

/**
 * Return the stripped image paths that no content file mentions.
 *
 * `contents` is the text of every content file. This searches for the image
 * path as a plain substring, so it matches Markdown links, JSX `src`
 * attributes, notebook metadata, and any other way of referencing the image.
 */
export function findUnusedImages(
  strippedImagePaths: Iterable<string>,
  contents: Iterable<string>,
  allowList: Set<string> = new Set(),
): string[] {
  const corpus = Array.from(contents).join("\n");
  return Array.from(strippedImagePaths).filter(
    (fp) =>
      !corpus.includes(fp) && !allowList.has(`${PUBLIC_FOLDER_PREFIX}${fp}`),
  );
}
