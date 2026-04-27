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

type AddonDocsConfig = Record<string, { version: string; include: string[] }>;

export const ADDON_DOCS_CONFIG: AddonDocsConfig = {
  "qiskit-addon-obp": {
    version: "0.3.0",
    include: [
      "index.html",
      "install.html",
      "how_tos/*.ipynb",
      "tutorials/*.ipynb",
    ],
  },
};
