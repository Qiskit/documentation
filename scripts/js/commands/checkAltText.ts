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

import { extractAlt } from "../lib/links/extractAltText.js";
import { readMarkdown } from "../lib/markdownReader.js";

interface Arguments {
    [x: string]: unknown;
  }

const readArgs = (): Arguments => {
    return yargs(hideBin(process.argv))
      .version(false)
      .parseSync();
  };

async function determineFiles(args: Arguments): Promise<[string[], string[]]> {
  const mdGlobs = ["docs/guides/*.mdx", "docs/migration-guides/*.mdx"];
  const notebookGlobs = ["docs/guides/*.ipynb", "docs/migration-guides/*.ipynb"];
  return [await globby(mdGlobs), await globby(notebookGlobs)];
}


function getNullAlt(
    alt: Set<string | null | undefined>, 
    imgPath: Set<string>,
    Err: string[]
): void {
    const altArray = Array.from(alt);
    const imgArray = Array.from(imgPath);

    altArray.forEach((alt, i) => {
        if(alt===null) {
            Err.push(imgArray[i]);
        }
    });
}


const main = async (): Promise<void> => {
  const args = readArgs();
  const [mdFiles, notebookFiles] = await determineFiles(args);

  const mdErrors: string[] = [];
  for (const file of mdFiles) {
    const markdown = await readMarkdown(file);
    const{ imageName, altText } = await extractAlt(markdown);
    getNullAlt(altText, imageName, mdErrors);
  }

  const notebookErrors: string[] = [];
  for (const file of notebookFiles) {
    const markdown = await readMarkdown(file);
    const{ imageName, altText } = await extractAlt(markdown);
    getNullAlt(altText, imageName, notebookErrors);

  }
  handleErrors(mdErrors, notebookErrors);
};

function handleErrors(mdErrors: string[], notebookErrors: string[]): void {
    if (mdErrors.length > 0) {
        console.error(`
            Image does not have alt text. Every image must have associated alt text like this:
            ![Alt text goes here](/random-img.png) 

            Please fix these images:\n\n${mdErrors.join("\n")}
            `)
    }
    if (notebookErrors.length > 0) {
        console.error(`
            Image does not have alt text. Every image in markdown must have associated alt text like this:
            ![Alt text goes here](/random-img.png) 

            Please fix these images:\n\n${notebookErrors.join("\n")}
            `);
    }
    if (mdErrors.length > 0 || notebookErrors.length > 0) {
        process.exit(1);
      }
}
    
main();

