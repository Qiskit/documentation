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

import { globby } from "globby";
import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { ExternalLink } from "../lib/links/ExternalLink";
import { parseFile } from "../lib/links/extractLinks";
import { addLinksToMap } from "../lib/links/FileBatch";

interface Arguments {
  [x: string]: unknown;
  globs?: string[];
}

const readArgs = (): Arguments => {
  return yargs(hideBin(process.argv))
    .version(false)
    .command("$0 [globs..]", "")
    .parseSync();
};

async function main() {
  const args = readArgs();
  const filePaths = await globby(args.globs || []);

  const links = await getLinks(filePaths);

  // We use a for loop to reduce the risk of rate limiting.
  let allGood = true;
  let numLinksChecked = 1;
  for (const link of links) {
    const result = await link.check();

    // This script can be slow, so log progress every 20 links.
    if (numLinksChecked % 20 == 0) {
      console.log(`Checked ${numLinksChecked} / ${links.length} links`);
    }
    numLinksChecked++;

    if (result === undefined) continue;
    console.error(result);
    allGood = false;
  }

  if (!allGood) {
    console.error(
      `\n\n💔 Some external links appear broken, although it's possible they are flakes. Checked ${links.length} links.`,
    );
    process.exit(1);
  }
  console.log(
    `\n\n✅ No external links are broken. Checked ${links.length} links.`,
  );
}

async function getLinks(filePaths: string[]): Promise<ExternalLink[]> {
  const linksToOriginFiles = new Map<string, string[]>();
  for (const filePath of filePaths) {
    const parsed = await parseFile(filePath);
    addLinksToMap(filePath, parsed.externalLinks, linksToOriginFiles);
  }
  return Array.from(linksToOriginFiles.entries()).map(
    ([link, originFiles]) => new ExternalLink(link, originFiles),
  );
}

main().then(() => process.exit());
