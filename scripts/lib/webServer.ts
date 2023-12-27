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

  // Wait until the server is up and able to listen to the requests
  while (true) {
    try {
      const response = await fetch(`http://localhost:${listenPort}`);
      return;
    } catch {
      // Wait 5 ms for the next fetch
      await new Promise((res) => setTimeout(res, 5));
    }
  }
}

export async function closeWebServer(listenPort: number) {
  await $`lsof -nti:${listenPort} | xargs kill -TERM`;
}
