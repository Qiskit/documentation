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

import { expect, test } from "@jest/globals";
import { markdownFromNotebook } from "./markdownReader";

test("markdownFromNotebook()", () => {
  const result = markdownFromNotebook(`
    {
        "cells": [
            {
                "attachments": {},
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    "Line 1.\\n",
                    "Line 2."
                ]
            },
            {
                "cell_type": "code",
                "execution_count": 1,
                "metadata": {},
                "outputs": [],
                "source": []
            },
            {
                "attachments": {},
                "cell_type": "markdown",
                "metadata": {},
                "source": [
                    "Line 3."
                ]
            }
        ],
        "metadata": {}
    }
  `);
  expect(result).toBe("Line 1.\nLine 2.\n\nLine 3.");
});
