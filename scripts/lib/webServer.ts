// This code is a Qiskit project.
//
// (C) Copyright IBM 2023.
//
// This code is licensed under the Apache License, Version 2.0. You may
// obtain a copy of this license in the LICENSE file in the root directory
// of this source tree or at http://www.apache.org/licenses/LICENSE-2.0.
//
// Any modifications or derivative works of this code must retain this
// copyright notice, and modified files need to carry a notice indicating
// that they have been altered from the originals.

import { $ } from "zx";

export async function startWebServer(directory: string, listenPort: number) {
  $`python3 -m http.server ${listenPort} -d ${directory} -b ::1 &`;
}

export async function closeWebServer(listenPort: number) {
  await $`lsof -nti:${listenPort} | xargs kill -TERM`;
}
