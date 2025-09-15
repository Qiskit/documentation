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

import { expect, test } from "@playwright/test";

import { checkMetadata } from "./metadataChecker";

test.describe("checkMarkdown", () => {
  test("should return no errors for valid metadata", () => {
    const metadata = {
      title: "My Awesome Article",
      description:
        "This is a well-written description that meets the length requirements perfectly.",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set(),
    );
  });

  test("should return error for missing title", () => {
    const metadata = {
      description:
        "This is a valid description that is long enough to pass the check.",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set(["Missing title in the metadata"]),
    );
  });

  test("should return error for missing description", () => {
    const metadata = {
      title: "Valid Title",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set(["Missing description in the metadata"]),
    );
  });

  test("should return error for short description", () => {
    const metadata = {
      title: "Valid Title",
      description: "Too short",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set([
        "The description in the metadata must be between 50 and 160 characters, but was 9",
      ]),
    );
  });

  test("should return error for long description", () => {
    const metadata = {
      title: "Valid Title",
      description:
        "This platform empowers creators and developers to build, share, and collaborate on innovative projects with intuitive tools, seamless integration, and a vibrant global community that thrives on curiosity, creativity, and continuous learning.",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set([
        "The description in the metadata must be between 50 and 160 characters, but was 241",
      ]),
    );
  });

  test("should return both errors for missing title and invalid description", () => {
    const metadata = {
      description: "Short",
    };
    expect(checkMetadata(metadata, "docs/tutorials/intro.md")).toEqual(
      new Set([
        "Missing title in the metadata",
        "The description in the metadata must be between 50 and 160 characters, but was 5",
      ]),
    );
  });

  test("should skip description length check for API docs", () => {
    const metadata = {
      title: "Valid Title",
      description: "Short",
    };
    expect(checkMetadata(metadata, "docs/api/someEndpoint.md")).toEqual(
      new Set(),
    );
  });
});
