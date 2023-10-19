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

import { globby } from "globby";
import { existsSync, readFileSync } from 'fs';
import path from 'node:path';
import markdownLinkExtractor from 'markdown-link-extractor';

const DOCS_ROOT = "./docs"
const CONTENT_FILE_EXTENSIONS = [".md", ".mdx", ".ipynb"]

const IGNORE_LIST = [
  '07_pulse_scheduler.ipynb',
  '../errors',
  '/api/runtime/tags/programs',
  '../guides',
  '../images/qiskit-ibm-runtime/noisy-sim-circuit.png',
  '../images/qiskit-ibm-runtime/noisy-sim-sampler-ideal.png',
  '../images/qiskit-ibm-runtime/noisy-sim-estimator-circuit.png',
  '../images/qiskit-ibm-runtime/noisy-sim-estimator-ideal.png',
  '../images/qiskit-ibm-runtime/noisy-sim-sampler-noisy.png',
  '../images/qiskit-ibm-runtime/noisy-sim-estimator-noisy.png',
  'qiskit.org/documentation/tutorials/circuits/3_summary_of_quantum_operations'
]

class Link {
  readonly value: string
  readonly anchor: string
  readonly origin: string
  readonly isExternal: boolean

  constructor(linkString: string, origin: string) {
    /* 
     * linkString: Link as it appears in source file
     *     origin: Path to source file containing link
     */

    const splitLink = linkString.split('#', 1)
    this.value = splitLink[0]
    this.anchor = (splitLink.length > 1) ? `#${splitLink[1]}` : ''
    this.origin = origin
    this.isExternal = linkString.startsWith("http")
  }

  resolve(): string[] {
    /*
     * Return list of possible paths link could resolve to
     */
    if ( this.isExternal ) { return [ this.value ] }
    if ( this.value === '' ) { return [ this.origin ] }  // link is just anchor
    if ( this.value.startsWith("/images") ) {
      return [ path.join("public/", this.value) ]
    }

    let baseFilePath
    if (this.value.startsWith('/')) {
      // Path is relative to DOCS_ROOT
      baseFilePath = path.join(DOCS_ROOT, this.value)
    } else {
      // Path is relative to origin file
      baseFilePath = path.join(
        path.dirname(this.origin),
        this.value
      )
    }
    // Remove trailing '/' from path.join
    baseFilePath = baseFilePath.replace(/\/$/gm, '')

    // File may have one of many extensions (.md, .ipynb etc.), and/or be
    // directory with an index file (e.g. `docs/build` should resolve to
    // `docs/build/index.mdx`). We return a list of possible filenames.
    let possibleFilePaths = []
    for (let index of ['', '/index']) {
      for (let extension of CONTENT_FILE_EXTENSIONS) {
        possibleFilePaths.push(
            baseFilePath + index + extension
        )
      }
    }
    return possibleFilePaths
  }

  check(filePathCache: string[] = []): boolean {
    /*
     * True if link points to existing file, otherwise false
     * filePathCache: array of known existing files (to reduce disk I/O)
     */
    if (IGNORE_LIST.includes(this.value)) {
      return true
    }
    if (this.isExternal) {
      // External link checking not supported yet
      return true
    }

    const possiblePaths = this.resolve()
    for (let filePath of possiblePaths) {
      if (filePathCache.includes(filePath)) {
        return true
      }
    }
    // Check disk for files not in cache (images etc.)
    for (let filePath of possiblePaths) {
      if (existsSync(filePath)) {
        return true
      }
    }

    console.log(`❌ ${this.origin}: Could not find link '${this.value}'`)
    return false
  }
}

function markdownFromNotebook(source: string): string {
  let markdown = ''
  for (let cell of JSON.parse(source).cells) {
    if (cell.source === 'markdown') {
      markdown += cell.source
    }
  }
  return markdown
}

function checkLinksInFile(filePath: string, filePaths: string[]): boolean {
  const source = readFileSync(filePath, {encoding: 'utf8'})
  const markdown = (path.extname(filePath) === '.ipynb') ? markdownFromNotebook(source) : source
  const links = markdownLinkExtractor(source).links.map((x: string) => new Link(x, filePath))

  let allGood = true
  for (let link of links) {
    allGood = link.check(filePaths) && allGood
  }
  return allGood
}

async function main() {
  const filePaths = await globby('docs/**/*.{ipynb,md,mdx}')
  let allGood = true
  for (let sourceFile of filePaths) {
    allGood = checkLinksInFile(sourceFile, filePaths) && allGood
  }
  if (!allGood) {
    console.log("\nSome links appear broken 💔\n")
    process.exit(1)
  }
}

main()
