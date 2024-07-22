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

import {
  removePart,
  removePrefix,
  removeSuffix,
  getLastPartFromFullIdentifier,
  capitalize,
  hasPrefix,
} from "./stringUtils";

test("removePart()", () => {
  const input = "a|b|b|x|z";
  expect(removePart(input, "|", ["a", "b"])).toEqual("x|z");
  expect(removePart(input, "|", [])).toEqual(input);
  expect(removePart(input, "|", ["m"])).toEqual(input);
});

test("removePrefix()", () => {
  const input = "hello world!";
  expect(removePrefix(input, "hello")).toEqual(" world!");
  expect(removePrefix(input, "hola")).toEqual(input);
  expect(removePrefix(input, "ello")).toEqual(input);
});

test("removeSuffix()", () => {
  const input = "hello world!";
  expect(removeSuffix(input, "world!")).toEqual("hello ");
  expect(removeSuffix(input, "mundo!")).toEqual(input);
  expect(removeSuffix(input, "worl")).toEqual(input);
});

test("getLastPartFromFullIdentifier", () => {
  expect(getLastPartFromFullIdentifier("my_software.foo.Bar.method")).toEqual(
    "method",
  );
  expect(getLastPartFromFullIdentifier("my_software.foo.Bar")).toEqual("Bar");
  expect(getLastPartFromFullIdentifier("my_software.foo")).toEqual("foo");
  expect(getLastPartFromFullIdentifier("my_software")).toEqual("my_software");
  expect(getLastPartFromFullIdentifier("")).toEqual("");
});

test("capitalize()", () => {
  const input = "hello world!";
  expect(capitalize(input)).toEqual("Hello world!");
});

test("hasPrefix()", () => {
  expect(hasPrefix("abc", ["a", "z"])).toBe(true);
  expect(hasPrefix("abc", ["x", "z"])).toBe(false);
  expect(hasPrefix("abc", ["x", "a"])).toBe(true);
  expect(hasPrefix("abc", [])).toBe(false);
  expect(hasPrefix("abc", ["abc"])).toBe(true);
});
