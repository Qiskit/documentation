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

import { ProcessOutput } from "zx";

export function zxMain(mainFn: () => Promise<void>) {
  enableCliColors();
  void mainFn().catch((e) => {
    if (!(e instanceof ProcessOutput)) {
      console.log(e);
    }
    return process.exit(1);
  });
}

export function enableCliColors() {
  process.env.FORCE_COLOR = "3";
}

export function disableCliColors() {
  process.env.FORCE_COLOR = "0";
}
