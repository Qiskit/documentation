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

export function checkMetadata(
  metadata: Record<string, string>,
  filePath: string,
): Set<string> {
  const errors = new Set<string>();

  const title = metadata["title"];
  const description = metadata["description"];

  if (!title || title.trim() === "") {
    errors.add("Missing title in the metadata");
  }

  if (!description || description.trim() === "") {
    errors.add("Missing description in the metadata");
  } else {
    const length = description.trim().length;
    if (!filePath.startsWith("docs/api/")) {
      if (length < 50 || length > 160) {
        errors.add(
          `The description in the metadata must be between 50 and 160 characters, but was ${length}`,
        );
      }
    }
  }

  return errors;
}
