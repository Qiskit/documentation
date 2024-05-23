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

import yaml from "js-yaml";
import { readFile } from "fs/promises";

/* Information specified in the YAML file */
export interface LocalTutorialData {
  title: string;
  short_description: string;
  slug: string;
  status: string;
  local_path: string;
  category: string;
  reading_time: number;
  catalog_featured: boolean;
}

export async function readTutorialData(path: string): Promise<LocalTutorialData[]> {
  const raw = await readFile(path, "utf8");
  const parsed = yaml.load(raw) as any[];
  return parsed.map(i => verifyLocalTutorialData(i));
}

/* Runtime type-checking to make sure YAML file is valid */
function verifyLocalTutorialData(obj: any): LocalTutorialData {
  for (let [attr, type] of [
    ["title", "string"],
    ["short_description", "string"],
    ["slug", "string"],
    ["status", "string"],
    ["local_path", "string"],
    ["category", "string"],
    ["reading_time", "number"],
    ["catalog_featured", "boolean"],
  ]) {
    if (typeof obj[attr] !== type) {
      throw new Error(
        "The following entry in `learning-api.conf.yaml` is invalid.\n\n"
        + yaml.dump(obj)
        + `\n\nAttribute '${attr}' should exist and be of type '${type}'.\n`
      )
    }
  } 
  return obj as LocalTutorialData
}
