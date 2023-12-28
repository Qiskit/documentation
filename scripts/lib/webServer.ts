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

const PORT = 8000;

export async function startWebServer(directory: string) {
  $`python3 -m http.server ${PORT} -d ${directory} -b ::1 &`;

  // Wait until the server is up and able to listen to the requests
  await new Promise((res) => setTimeout(res, 500));

  // First attempt to check if the web server is up
  try {
    await fetch(`http://localhost:${PORT}`);
  } catch {
    // Wait 1 s for the second attempt
    await new Promise((res) => setTimeout(res, 1000));
    await fetch(`http://localhost:${PORT}`);
  }
}

export async function closeWebServer() {
  await $`lsof -nti:${PORT} | xargs kill -TERM`;
}
