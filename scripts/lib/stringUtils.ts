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

import { last, split } from "lodash";

export const APOSTROPHE_HEX_CODE = "&#x27;";

export function removePart(text: string, separator: string, matcher: string[]) {
  return text
    .split(separator)
    .filter((part) => !matcher.includes(part))
    .join(separator);
}

export function removePrefix(text: string, prefix: string) {
  if (text.startsWith(prefix)) {
    return text.substring(prefix.length);
  }
  return text;
}

export function removeSuffix(text: string, suffix: string) {
  if (text.endsWith(suffix)) {
    return text.substring(0, text.length - suffix.length);
  }
  return text;
}

export function getLastPartFromFullIdentifier(fullIdentifierName: string) {
  return last(split(fullIdentifierName, "."))!;
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function hasPrefix(text: string, prefixes: string[]): boolean {
  return prefixes.some((prefix) => text.startsWith(prefix));
}
